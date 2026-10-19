import { usePortfolio } from '../../context/PortfolioContext';
import Reveal from '../ui/Reveal';
import { Briefcase } from '../ui/Icons';
import '../../styles/experience.css';

export default function Experience() {
  const { experience } = usePortfolio();
  if (experience.length === 0) return null;

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I’ve been working.</h2>
        </Reveal>

        <ol className="timeline">
          {experience.map((item, index) => (
            <Reveal as="li" key={`${item.role}-${index}`} delay={index * 0.08} className="timeline__item">
              <span className="timeline__marker" aria-hidden="true" />
              <article className="timeline__card card">
                <header className="timeline__header">
                  <span className="timeline__icon" aria-hidden="true">
                    <Briefcase />
                  </span>
                  <div>
                    <h3 className="timeline__role">{item.role}</h3>
                    {item.period && <p className="timeline__period">{item.period}</p>}
                  </div>
                </header>
                {item.description && <p className="timeline__desc">{item.description}</p>}
                {item.skills.length > 0 && (
                  <ul className="chip-list">
                    {item.skills.map((skill) => (
                      <li key={skill} className="chip chip--muted">
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
