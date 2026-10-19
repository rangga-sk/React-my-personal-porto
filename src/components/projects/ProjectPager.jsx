import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '../ui/Icons';

function PagerLink({ project, direction }) {
  const isNext = direction === 'next';
  return (
    <Link to={`/projects/${project.slug}`} className={`pager__link pager__link--${direction}`}>
      <span className="pager__label">
        {!isNext && <ArrowLeft />}
        {isNext ? 'Next project' : 'Previous project'}
        {isNext && <ArrowRight />}
      </span>
      <span className="pager__title">{project.title}</span>
    </Link>
  );
}

// Navigasi project sebelumnya / berikutnya (berputar). Disembunyikan bila hanya ada 1 project.
export default function ProjectPager({ projects, currentIndex }) {
  if (projects.length < 2) return null;
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <nav className="pager" aria-label="More projects">
      {prev.slug !== next.slug && <PagerLink project={prev} direction="prev" />}
      <PagerLink project={next} direction="next" />
    </nav>
  );
}
