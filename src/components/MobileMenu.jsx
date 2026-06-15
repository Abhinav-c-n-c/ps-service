import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`mobile-nav mobile-nav-red ${isOpen ? 'active' : ''}`}>
        <button type="button" className="close-nav" onClick={onClose}>
          <i className="fas fa-times-circle"></i>
        </button>

        <nav className="sidebar-nav text-start">
          <div className="navigation">
            <div className="consulter-mobile-nav">
              <ul>
                <li><Link to="/" onClick={onClose}>Home</Link></li>
                <li><Link to="/about" onClick={onClose}>About</Link></li>
                <li><Link to="/services" onClick={onClose}>Services</Link></li>
                <li><Link to="/our-clients" onClick={onClose}>Our Clients</Link></li>
                <li><Link to="/our-project" onClick={onClose}>Projects</Link></li>
                <li><Link to="/team" onClick={onClose}>Our Team</Link></li>
                <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
              </ul>
            </div>

            <div className="sidebar-nav__bottom mt-20">
              <div className="sidebar-nav__bottom-contact-infos mb-20">
                <h6 className="color-white mb-5">Contact Info</h6>

                <ul className="list-unstyled">
                  <li className="mb-2 text-white-50"><i className="far fa-clock mr-2"></i> Mon – Fri: 8.00 – 18.00</li>
                  <li className="mb-2">
                    <a href="mailto:thepsservices@gmail.com" className="text-decoration-none text-white-50">
                      <i className="fas fa-envelope mr-2"></i>thepsservices@gmail.com
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="tel:+918850568104" className="header-contact d-flex align-items-center text-decoration-none">
                      <div className="icon mr-2">
                        <i className="fas fa-phone-volume text-danger"></i>
                      </div>
                      <div className="text text-start">
                        <span className="font-la mb-1 d-block fw-500 text-muted" style={{ fontSize: '11px' }}>Contact For Support</span>
                        <h5 className="fw-500 mb-0 text-white" style={{ fontSize: '15px' }}>+91 88505 68104</h5>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-nav__bottom-social">
                <h6 className="color-white mb-5">Follow On:</h6>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item"><a href="#" className="text-white-50"><i className="fab fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="text-white-50"><i className="fab fa-twitter"></i></a></li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/ps_services_consultant?utm_source=qr&igsh=MW1yNjV1eTZ0YmF4NA==" className="text-white-50" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/company/point-to-source-services/" className="text-white-50" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Overlay backdrop */}
      {isOpen && <div className="offcanvas-overlay" style={{ display: 'block', opacity: 1 }} onClick={onClose}></div>}
    </>
  );
};

export default MobileMenu;
