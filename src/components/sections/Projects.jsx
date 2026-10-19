import { usePortfolio } from '../../context/PortfolioContext';
import ProjectGrid from '../projects/ProjectGrid';
import Reveal from '../ui/Reveal';

export default function Projects() {
  const { projects } = usePortfolio();
  const count = String(projects.length).padStart(2, '0');

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div className="section-head">
            <span className="eyebrow">Projects</span>
            <h2 className="section-title">Selected work.</h2>
            <p className="section-lead">
              A collection of projects I’ve built. Open a project to see the full story, features
              and screenshots.
            </p>
          </div>
          <span className="projects__count">
            {count} {projects.length === 1 ? 'project' : 'projects'}
          </span>
        </Reveal>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
