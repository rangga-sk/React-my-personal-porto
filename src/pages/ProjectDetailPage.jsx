import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { toParagraphs } from '../lib/portfolio';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectPager from '../components/projects/ProjectPager';
import Reveal from '../components/ui/Reveal';
import { ArrowLeft, ExternalLink } from '../components/ui/Icons';
import NotFoundPage from './NotFoundPage';
import '../styles/project-detail.css';

const enter = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] },
});

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { projects, profile } = usePortfolio();
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];

  useDocumentTitle(project ? `${project.title} · ${profile.name}` : null);

  if (!project) {
    return (
      <NotFoundPage
        title="Project not found"
        message="This project doesn’t exist or may have been renamed."
        backTo="/#projects"
        backLabel="All projects"
      />
    );
  }

  const paragraphs = toParagraphs(project.description);
  const primaryLink = project.links[0];

  return (
    <main className="page project-detail" key={project.slug}>
      <section className="pd-hero">
        <div className="pd-hero__bg" aria-hidden="true" />
        <div className="container">
          <motion.div {...enter()}>
            <Link to="/#projects" className="pd-back">
              <ArrowLeft /> All projects
            </Link>
          </motion.div>

          <motion.header className="pd-header" {...enter(0.08)}>
            {project.category && <span className="eyebrow">{project.category}</span>}
            <h1 className="pd-title">{project.title}</h1>
            {project.summary && <p className="pd-summary">{project.summary}</p>}
            {primaryLink && (
              <a href={primaryLink.href} target="_blank" rel="noreferrer" className="btn btn--primary">
                {primaryLink.label || 'Visit project'} <ExternalLink />
              </a>
            )}
          </motion.header>

          {project.cover && (
            <motion.figure className="pd-cover" {...enter(0.16)}>
              <img src={project.cover} alt={`${project.title} preview`} />
            </motion.figure>
          )}
        </div>
      </section>

      <section className="section pd-body">
        <div className="container pd-body__grid">
          <div className="pd-main">
            {paragraphs.length > 0 && (
              <Reveal className="pd-block">
                <h2 className="pd-block__title">Overview</h2>
                <div className="pd-prose">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            )}

            {project.highlights.length > 0 && (
              <Reveal className="pd-block">
                <h2 className="pd-block__title">Key highlights</h2>
                <ul className="pd-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.images.length > 0 && (
              <Reveal className="pd-block">
                <h2 className="pd-block__title">Gallery</h2>
                <ProjectGallery images={project.images} title={project.title} />
              </Reveal>
            )}
          </div>

          <Reveal as="aside" delay={0.1} className="pd-aside">
            <ProjectInfo project={project} />
          </Reveal>
        </div>

        <div className="container">
          <ProjectPager projects={projects} currentIndex={index} />
        </div>
      </section>
    </main>
  );
}
