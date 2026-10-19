import { Link } from 'react-router-dom';
import Gem from '../ui/Gem';
import { ArrowRight } from '../ui/Icons';
import TechStack from './TechStack';

export default function ProjectCard({ project, featured = false }) {
  const { slug, title, category, year, summary, stack, cover, images } = project;
  const meta = [category, year].filter(Boolean).join(' · ');

  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''}`}>
      <div className="project-card__media">
        {cover ? (
          <img src={cover} alt="" loading="lazy" />
        ) : (
          <Gem className="project-card__placeholder" />
        )}
        {images.length > 1 && (
          <span className="project-card__count">{images.length} screenshots</span>
        )}
      </div>

      <div className="project-card__body">
        {meta && <span className="project-card__meta">{meta}</span>}
        <h3 className="project-card__title">
          {/* ::after link ini menutupi seluruh kartu sehingga kartu bisa diklik di mana saja */}
          <Link to={`/projects/${slug}`} className="project-card__link">
            {title}
          </Link>
        </h3>
        {summary && <p className="project-card__summary">{summary}</p>}
        <TechStack items={stack} max={featured ? 6 : 4} />
        <span className="project-card__cta" aria-hidden="true">
          View details <ArrowRight />
        </span>
      </div>
    </article>
  );
}
