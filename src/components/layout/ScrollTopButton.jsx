import { AnimatePresence, motion } from 'framer-motion';
import { useScrolledPast } from '../../hooks/useScrollState';
import { ArrowUp } from '../ui/Icons';

const style = {
  position: 'fixed',
  right: 'max(16px, env(safe-area-inset-right))',
  bottom: 'max(20px, env(safe-area-inset-bottom))',
  zIndex: 40,
  width: 48,
  height: 48,
  padding: 0,
};

export default function ScrollTopButton() {
  const visible = useScrolledPast(600);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="btn btn--primary"
          style={style}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
