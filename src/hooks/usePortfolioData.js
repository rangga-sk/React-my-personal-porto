import { useCallback, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from '../../firebase';
import { localProjects } from '../data/projects';
import {
  mergeProjects,
  normalizeAbout,
  normalizeExperience,
  normalizeProfile,
} from '../lib/portfolio';

const MIN_LOADING_MS = 700;
const docData = (snapshot) => (snapshot.exists() ? snapshot.data() : {});

export default function usePortfolioData() {
  const [state, setState] = useState({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const startedAt = Date.now();

    async function fetchData() {
      setState({ status: 'loading' });
      try {
        const [name, about, experience, project] = await Promise.all([
          getDoc(doc(db, 'data-profile', '1-full-name')),
          getDoc(doc(db, 'data-profile', '2-full-about')),
          getDoc(doc(db, 'data-profile', '3-full-experience')),
          getDoc(doc(db, 'data-profile', '4-full-project')),
        ]);

        const next = {
          status: 'ready',
          profile: normalizeProfile(docData(name)),
          about: normalizeAbout(docData(about)),
          experience: normalizeExperience(docData(experience)),
          projects: mergeProjects(docData(project).data, localProjects),
        };

        // Loader tetap tampil sebentar agar tidak berkedip saat data cepat termuat
        const wait = Math.max(0, MIN_LOADING_MS - (Date.now() - startedAt));
        setTimeout(() => isMounted && setState(next), wait);
      } catch (error) {
        console.error('Error fetching data:', error);
        if (isMounted) setState({ status: 'error', error });
      }
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [attempt]);

  const reload = useCallback(() => setAttempt((n) => n + 1), []);

  return { ...state, reload };
}
