import { useCallback, useState } from 'react';
import { Expand } from '../ui/Icons';
import Lightbox from './Lightbox';

export default function ProjectGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const close = useCallback(() => setActiveIndex(null), []);

  if (images.length === 0) return null;

  return (
    <>
      <ul className="gallery">
        {images.map((src, index) => (
          <li key={index}>
            <button
              type="button"
              className="gallery__item"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open screenshot ${index + 1} of ${images.length}`}
            >
              <img src={src} alt="" loading="lazy" />
              <span className="gallery__zoom" aria-hidden="true">
                <Expand />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        images={images}
        index={activeIndex}
        title={title}
        onClose={close}
        onChange={setActiveIndex}
      />
    </>
  );
}
