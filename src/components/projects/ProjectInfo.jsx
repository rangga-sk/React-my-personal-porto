import { ExternalLink } from '../ui/Icons';
import TechStack from './TechStack';

export default function ProjectInfo({ project }) {
  const rows = [
    ['Role', project.role],
    ['Client', project.client],
    ['Category', project.category],
    ['Year', project.year],
  ].filter(([, value]) => value);

  if (rows.length === 0 && project.stack.length === 0 && project.links.length === 0) return null;

  return (
    <div className="project-info card">
      <h2 className="project-info__title">Project info</h2>

      {rows.length > 0 && (
        <dl className="project-info__list">
          {rows.map(([label, value]) => (
            <div key={label} className="project-info__row">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}

      {project.stack.length > 0 && (
        <div className="project-info__group">
          <span className="project-info__label">Tech stack</span>
          <TechStack items={project.stack} />
        </div>
      )}

      {project.links.length > 0 && (
        <div className="project-info__links">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline btn--sm"
            >
              {link.label || 'Visit'} <ExternalLink />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
