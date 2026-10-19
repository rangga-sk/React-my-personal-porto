import { usePortfolio } from '../../context/PortfolioContext';
import Reveal from '../ui/Reveal';
import { ContactIcon } from '../ui/Icons';
import '../../styles/footer.css';

export default function Footer() {
  const { profile } = usePortfolio();

  return (
    <footer className="footer" id="contact">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container footer__inner">
        <Reveal className="footer__cta">
          <span className="eyebrow eyebrow--light">Contact</span>
          <h2 className="footer__title">
            Let’s build something <span className="text-crystal">great together.</span>
          </h2>
          <p className="footer__lead">Feel free to reach out through any of the channels below.</p>
          {profile.contacts.length > 0 && (
            <div className="footer__links">
              {profile.contacts.map((contact) => {
                const isMail = contact.href.startsWith('mailto:');
                return (
                  <a
                    key={contact.href}
                    href={contact.href}
                    className="btn btn--glass"
                    target={isMail ? undefined : '_blank'}
                    rel={isMail ? undefined : 'noreferrer'}
                  >
                    <ContactIcon label={contact.label} />
                    {contact.label}
                  </a>
                );
              })}
            </div>
          )}
        </Reveal>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with React &amp; Vite</span>
        </div>
      </div>
    </footer>
  );
}
