import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Background3D from './components/UI/Background3D';
import LoadingScreen from './components/UI/LoadingScreen';
import ScrollToTop from './components/UI/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Education = lazy(() => import('./pages/Education'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Wrapper for animated transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingScreen />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--deep-black)] text-white font-sans selection:bg-[var(--neon-green)] selection:text-black relative overflow-hidden">
        <Background3D />
        <div className="relative z-10">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
