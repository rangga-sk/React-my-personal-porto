import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Close } from '../ui/Icons';

export default function Lightbox({ images, index, title, onClose, onChange }) {
  const isOpen = index !== null;
  const closeRef = useRef(null);
  const total = images.length;

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousFocus = document.activeElement;
    document.body.classList.add('no-scroll');
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove('no-scroll');
      previousFocus?.focus?.();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onChange((index + 1) % total);
      if (event.key === 'ArrowLeft') onChange((index - 1 + total) % total);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, index, total, onClose, onChange]);

  const stop = (handler) => (event) => {
    event.stopPropagation();
    handler();
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot ${index + 1} of ${total}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" aria-label="Close" onClick={stop(onClose)}>
            <Close />
          </button>

          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            className="lightbox__img"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          />

          {total > 1 && (
            <>
              <button
                type="button"
                className="lightbox__btn lightbox__prev"
                aria-label="Previous image"
                onClick={stop(() => onChange((index - 1 + total) % total))}
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                className="lightbox__btn lightbox__next"
                aria-label="Next image"
                onClick={stop(() => onChange((index + 1) % total))}
              >
                <ChevronRight />
              </button>
              <span className="lightbox__counter">
                {index + 1} / {total}
              </span>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
