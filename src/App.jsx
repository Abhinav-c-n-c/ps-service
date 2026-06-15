import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import Preloader from './components/Preloader';
import PageWrapper from './components/PageWrapper';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import OurClients from './pages/OurClients';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import OurProject from './pages/OurProject';
import Contact from './pages/Contact';

// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Subcomponent to wrap routes with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/our-clients" element={<PageWrapper><OurClients /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
        <Route path="/team-details" element={<PageWrapper><TeamDetails /></PageWrapper>} />
        <Route path="/our-project" element={<PageWrapper><OurProject /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      
      {/* Mobile drawer menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />

      {/* Main header navbar */}
      <Header onMobileNavOpen={handleMobileMenuOpen} />

      {/* Page Routes with transition triggers */}
      <AnimatedRoutes />

      {/* Main footer */}
      <Footer />
    </Router>
  );
};

export default App;
