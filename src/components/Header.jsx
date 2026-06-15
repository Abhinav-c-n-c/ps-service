import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ onMobileNavOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = (e) => {
      let scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      
      // Handle potential inner scroll containers
      if (e && e.target && e.target !== document) {
        scrollPos = e.target.scrollTop || scrollPos;
      }

      if (scrollPos > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Use capture phase (true) to intercept scrolls inside any child container
    window.addEventListener('scroll', handleScroll, true);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/our-clients' },
    { name: 'Projects', path: '/our-project' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`header-main-wrap ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'on-home' : 'on-subpage'}`}>
      {/* Top Header Bar */}
      <div className="top-header-bar">
        <div className="container-fluid px-lg-5">
          <div className="d-flex align-items-center justify-content-between flex-wrap py-2 fs-xs">
            {/* Left: Socials */}
            <div className="top-bar-social d-flex align-items-center gap-3">
              <span className="follow-label text-white-50">Follow On:</span>
              <div className="social-icons d-flex align-items-center gap-2">
                <a href="#" className="social-icon-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon-link"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>

            {/* Right: Contact info */}
            <div className="top-bar-contact d-flex align-items-center gap-4 flex-wrap">
              <a href="tel:+918850568104" className="contact-item d-flex align-items-center gap-2">
                <i className="fas fa-phone-alt phone-icon-red"></i>
                <span>+91 88505 68104</span>
              </a>
              <a href="mailto:thepsservices@gmail.com" className="contact-item d-flex align-items-center gap-2">
                <i className="far fa-envelope mail-icon-red"></i>
                <span>thepsservices@gmail.com</span>
              </a>
              <span className="contact-item d-flex align-items-center gap-2">
                <i className="far fa-clock clock-icon-red"></i>
                <span>Mon – Fri: 8.00 - 18.00</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar-container">
        <div className="container-fluid px-lg-5">
          <div className="d-flex align-items-center justify-content-between navbar-inner-row">
            {/* Logo */}
            <div className="header-logo">
              <Link to="/">
                <img 
                  src="/assets/img/logo/logo-3.png" 
                  alt="PS Services Logo" 
                  className="brand-logo-img"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/150x40/0f172a/faf9f5?text=PS+SERVICES";
                  }} 
                />
              </Link>
            </div>

            {/* Main Menu (Visible on Desktop) */}
            <div className="header-menu d-none d-xl-block">
              <nav className="main-menu-nav">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Header Right Button */}
            <div className="header-right d-flex align-items-center gap-3">
              <Link to="/contact" className="header-btn-custom theme-btn">
                Get In Touch <i className="fas fa-arrow-right ml-1 arrow-icon" style={{ fontSize: '11px' }}></i>
              </Link>

              {/* Hamburger Button for Mobile */}
              <div 
                className="mobile-nav-bar d-block d-xl-none" 
                onClick={onMobileNavOpen} 
                style={{ cursor: 'pointer', padding: '6px' }}
              >
                <div className="mobile-nav-wrap">
                  <div id="hamburger">
                    <i className="fas fa-bars menu-bar-icon" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
