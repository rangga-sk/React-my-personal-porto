import { usePortfolio } from '../../context/PortfolioContext';
import { collectSkills, toParagraphs } from '../../lib/portfolio';
// import Gem from '../ui/Gem';
import Reveal from '../ui/Reveal';
import { GraduationCap, MapPin } from '../ui/Icons';
import '../../styles/about.css';

function InfoItem({ icon, label, title, detail }) {
  return (
    <li className="about__info">
      <span className="about__info-icon">{icon}</span>
      <div>
        <span className="about__info-label">{label}</span>
        <p className="about__info-title">{title}</p>
        {detail && <p className="about__info-detail">{detail}</p>}
      </div>
    </li>
  );
}

export default function About() {
  const { profile, about, experience } = usePortfolio();
  const skills = collectSkills(experience);

  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <Reveal className="about__media">
          <div className="about__frame">
            {about.photo ? (
              <img src={about.photo} alt={`Portrait of ${profile.name}`} loading="lazy" />
            ) : (
              <div className="about__placeholder" />
            )}
          </div>
          {/* <Gem className="about__gem" /> */}
        </Reveal>

        <div className="about__content">
          <Reveal className="section-head">
            <span className="eyebrow">About me</span>
            <h2 className="section-title">Crafting clean, reliable web experiences.</h2>
          </Reveal>

          <Reveal delay={0.1} className="about__text">
            {toParagraphs(about.description).map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal as="ul" delay={0.15} className="about__infos">
            {about.location && (
              <InfoItem icon={<MapPin />} label="Location" title={about.location} />
            )}
            {about.education.map((edu) => (
              <InfoItem
                key={edu.school}
                icon={<GraduationCap />}
                label="Education"
                title={edu.school}
                detail={[edu.major, edu.period].filter(Boolean).join(' · ')}
              />
            ))}
          </Reveal>

          {skills.length > 0 && (
            <Reveal delay={0.2} className="about__skills">
              <span className="about__skills-label">Toolkit</span>
              <ul className="chip-list">
                {skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
