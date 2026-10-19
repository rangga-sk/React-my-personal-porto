import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll ke section saat URL punya hash (mis. /#projects), selain itu kembali ke atas halaman.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
}
