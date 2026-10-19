import { Link } from 'react-router-dom';
import Gem from '../components/ui/Gem';
import { ArrowLeft } from '../components/ui/Icons';

export default function NotFoundPage({
  title = 'Page not found',
  message = 'The page you are looking for doesn’t exist or has been moved.',
  backTo = '/',
  backLabel = 'Back to home',
}) {
  return (
    <main className="page status-screen">
      <div className="status-screen__box">
        <Gem />
        <h1 className="section-title">{title}</h1>
        <p>{message}</p>
        <Link to={backTo} className="btn btn--primary">
          <ArrowLeft /> {backLabel}
        </Link>
      </div>
    </main>
  );
}
