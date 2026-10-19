import { motion } from 'framer-motion';
import Gem from '../ui/Gem';
import '../../styles/loader.css';

export default function Loader() {
  return (
    <motion.div
      className="loader"
      role="status"
      aria-live="polite"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
    >
      <div className="loader__glow" aria-hidden="true" />
      <Gem className="loader__gem" />
      <div className="loader__bar" aria-hidden="true">
        <span />
      </div>
      <span className="loader__text">Loading</span>
    </motion.div>
  );
}
