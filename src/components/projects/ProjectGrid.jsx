import Reveal from '../ui/Reveal';
import ProjectCard from './ProjectCard';
import '../../styles/projects.css';

// Project pertama tampil lebih besar (featured), sisanya dalam grid.
export default function ProjectGrid({ projects, featureFirst = true }) {
  if (projects.length === 0) {
    return <p className="project-grid__empty">New projects are coming soon.</p>;
  }

  return (
    <ul className="project-grid">
      {projects.map((project, index) => {
        const featured = featureFirst && index === 0;
        return (
          <Reveal
            as="li"
            key={project.slug}
            delay={featured ? 0 : (index % 3) * 0.08}
            className={featured ? 'project-grid__featured' : undefined}
          >
            <ProjectCard project={project} featured={featured} />
          </Reveal>
        );
      })}
    </ul>
  );
}
