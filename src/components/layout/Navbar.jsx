import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePortfolio } from '../../context/PortfolioContext';
import { useActiveSection, useScrolledPast } from '../../hooks/useScrollState';
import { LogoMark } from '../ui/Gem';
import { Close, Menu } from '../ui/Icons';
import '../../styles/navbar.css';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];
const SECTION_IDS = [...NAV_ITEMS.map((item) => item.id), 'contact'];

export default function Navbar() {
  const { profile } = usePortfolio();
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const scrolled = useScrolledPast(24);
  const active = useActiveSection(SECTION_IDS, isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKey = (event) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="nav" data-solid={scrolled || !isHome || open}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={close}>
          <LogoMark />
          <span>
            {profile.nickname || profile.name}
            <span className="nav__dot">.</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Close /> : <Menu />}
        </button>

        <nav id="nav-menu" className="nav__menu" data-open={open} aria-label="Main">
          <ul className="nav__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  className="nav__link"
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/#contact" className="btn btn--primary btn--sm nav__cta" onClick={close}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
