import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePortfolio } from '../../context/PortfolioContext';
import { firstSentence } from '../../lib/portfolio';
import Gem from '../ui/Gem';
import { ArrowRight } from '../ui/Icons';
import '../../styles/hero.css';

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] },
});

function Sparkle({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`hero__sparkle ${className}`} aria-hidden="true">
      <path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0z" />
    </svg>
  );
}

export default function Hero() {
  const { profile, about } = usePortfolio();
  const [firstName, ...restName] = profile.name.split(' ');
  const roles = profile.role.split('/').map((role) => role.trim()).filter(Boolean);
  const intro = firstSentence(about.description, 160);

  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--a" />
        <div className="hero__orb hero__orb--b" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <motion.span className="eyebrow eyebrow--light" {...fadeUp(0.1)}>
            Hello, I’m
          </motion.span>
          <motion.h1 className="hero__name" {...fadeUp(0.2)}>
            {firstName} <span className="text-crystal">{restName.join(' ')}</span>
          </motion.h1>
          {roles.length > 0 && (
            <motion.p className="hero__roles" {...fadeUp(0.3)}>
              {roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </motion.p>
          )}
          {intro && (
            <motion.p className="hero__intro" {...fadeUp(0.4)}>
              {intro}
            </motion.p>
          )}
          <motion.div className="hero__actions" {...fadeUp(0.5)}>
            <Link to="/#projects" className="btn btn--primary">
              View projects <ArrowRight />
            </Link>
            <Link to="/#contact" className="btn btn--glass">
              Get in touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero__art"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="hero__ring" />
          <div className="hero__halo" />
          <Gem className="hero__gem hero__gem--main" />
          <Gem className="hero__gem hero__gem--left" />
          <Gem className="hero__gem hero__gem--right" />
          <Sparkle className="hero__sparkle--a" />
          <Sparkle className="hero__sparkle--b" />
          <Sparkle className="hero__sparkle--c" />
        </motion.div>
      </div>

      <Link to="/#about" className="hero__scroll" aria-label="Scroll to about section">
        <span />
      </Link>
    </section>
  );
}
