import Navbar from './components/Navbar.jsx'
import HeadText from './components/HeadText.jsx'
import EffectTrail from './components/EffectTrail.jsx'
import LoaderFirst from './components/LoaderFirst.jsx'
import ProfileData from './components/ProfileData.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import ProjectData from './components/ProjectData.jsx'

import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import './index.css'

function App() {

  const [dataFullName, setdataFullName] = useState([]);
  const [dataFullAbout, setdataFullAbout] = useState([]);
  const [dataExperience, setdataExp] = useState([]);
  const [dataProject, setdataProject] = useState([]);

  const [Loader, setLoader] = useState(true);
  const [flagDoneApi, setFlagDoneApi] = useState(true);

  let nameText = '';
  let namaPanggil = '';
  let titlejob = '';
  let contact = '';

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      setLoader(true);
      setFlagDoneApi(!flagDoneApi);
      try {
        const [queryName, queryAbout, queryExp, queryProject] = await Promise.all([
          getDoc(doc(db, "data-profile", '1-full-name')),
          getDoc(doc(db, 'data-profile', '2-full-about')),
          getDoc(doc(db, 'data-profile', '3-full-experience')),
          getDoc(doc(db, 'data-profile', '4-full-project'))
        ]);

        if (isMounted) {
          if (queryName.exists()) {
            setdataFullName(queryName.data());
          }
  
          if (queryAbout.exists()) {
            setdataFullAbout(queryAbout.data());
          }

          if (queryExp.exists()) {
            setdataExp(queryExp.data());
          }

          if (queryProject.exists()) {
            setdataProject(queryProject.data());
          }
        }

      } catch (error) {
        setTimeout(() => {
          setLoader(false);
        }, 1000);

        console.error("Error fetching data:", error);
      } finally {
        setFlagDoneApi(!flagDoneApi);
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      }
    }
    fetchData();

    return () => {
      isMounted = false;
    };

  }, []);

  const [visible, setVisible] = useState(false);

    // Tampilkan tombol saat scroll turun 300px
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      const element = document.getElementById("halHead");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  

  nameText = dataFullName?.name;
  namaPanggil = dataFullName?.aka;
  titlejob = dataFullName?.titlejob;
  contact = dataFullName?.contact;

  const [EffectRain, setEffectRain] = useState(false);

  if (Loader) {
    return (
      <div className='bgLoader' style={{animationPlayState: flagDoneApi && 'running'}}>
        <LoaderFirst />
      </div>
    )
  } else {
    return (
      <>
        {(EffectRain && <EffectTrail />)}
        <Navbar EffectRain={EffectRain} setEffectRain={setEffectRain} dataContact={contact} namaPanggil={namaPanggil?.toUpperCase()} />
        <div className='mainContainer'>
          <HeadText nameText={nameText?.toUpperCase()} titlejob={titlejob} />
          <ProfileData dataAbout={dataFullAbout} />
          <WorkExperience dataExperience={dataExperience} />
          <ProjectData dataProject={dataProject} />
    {
      visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "60px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#e9e93f",
            color: "white",
            border: "none",
            // boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            cursor: "pointer",
            zIndex: 1000,
          }}
          className='hoverBtntoTop'
          aria-label="Scroll to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", margin: "auto" }}
          >
            <path
              d="M10 4L4 10H8V16H12V10H16L10 4Z"
              fill="white"
            />
          </svg>
        </button>
      )
      }
        </div>
      </>
    )
  }
}

export default App
