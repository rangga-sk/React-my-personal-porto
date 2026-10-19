import { Route, Routes } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { PortfolioContext } from './context/PortfolioContext';
import usePortfolioData from './hooks/usePortfolioData';
import Loader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollManager from './components/layout/ScrollManager';
import ScrollTopButton from './components/layout/ScrollTopButton';
import Gem from './components/ui/Gem';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function ErrorScreen({ onRetry }) {
  return (
    <main className="status-screen">
      <div className="status-screen__box">
        <Gem />
        <h1 className="section-title">Couldn’t load the portfolio</h1>
        <p>Please check your internet connection and try again.</p>
        <button type="button" className="btn btn--primary" onClick={onRetry}>
          Try again
        </button>
      </div>
    </main>
  );
}

export default function App() {
  const portfolio = usePortfolioData();

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{portfolio.status === 'loading' && <Loader key="loader" />}</AnimatePresence>

      {portfolio.status === 'error' && <ErrorScreen onRetry={portfolio.reload} />}

      {portfolio.status === 'ready' && (
        <PortfolioContext.Provider value={portfolio}>
          <ScrollManager />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
          <ScrollTopButton />
        </PortfolioContext.Provider>
      )}
    </MotionConfig>
  );
}
