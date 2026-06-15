import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-modern-wrap">
      {/* Ambient background glows */}
      <div className="footer-glow footer-glow-left"></div>
      <div className="footer-glow footer-glow-right"></div>

      <div className="container position-relative" style={{ zIndex: 5 }}>
        {/* Top: Branding & Tagline */}
        <div className="row justify-content-center text-center pt-80 pb-50">
          <div className="col-lg-8">
            <Link to="/" className="d-inline-block mb-3">
              <img 
                src="/assets/img/logo/footer-logo-3.png" 
                alt="PS Services Logo" 
                className="footer-brand-logo"
                onError={(e) => {
                  e.target.src = "https://placehold.co/180x50/0f172a/ffffff?text=PS+SERVICES";
                }} 
              />
            </Link>
            <h2 className="footer-lead-title text-white mb-3">
              Uncover a new approach to talent sourcing
            </h2>
            <p className="footer-lead-subtitle text-white-50 mx-auto mb-4" style={{ maxWidth: '580px', fontSize: '15px' }}>
              Partner with PS Services and build a high-performing hiring pipeline. Connect with India's top pre-vetted technical and executive professionals.
            </p>
            <Link to="/contact" className="theme-btn footer-cta-btn text-decoration-none">
              Get started for free <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>

        {/* Middle: Expanded Link Columns */}
        <div className="row justify-content-between py-5 border-top border-secondary">
          {/* Column 1: Sourcing Solutions */}
          <div className="col-6 col-md-3 mb-4 mb-md-0 text-start">
            <h6 className="footer-col-title mb-4 text-uppercase">// Sourcing</h6>
            <ul className="list-unstyled footer-links-list">
              <li className="mb-2"><Link to="/services" className="footer-link-item">IT Recruitment</Link></li>
              <li className="mb-2"><Link to="/services" className="footer-link-item">Executive Search</Link></li>
              <li className="mb-2"><Link to="/services" className="footer-link-item">Non-IT Staffing</Link></li>
              <li className="mb-2"><Link to="/services" className="footer-link-item">Technical Vetting</Link></li>
              <li className="mb-2"><Link to="/services" className="footer-link-item">Scale Operations</Link></li>
              <li className="mb-2"><Link to="/our-project" className="footer-link-item">Success Stories</Link></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="col-6 col-md-3 mb-4 mb-md-0 text-start">
            <h6 className="footer-col-title mb-4 text-uppercase">// Resources</h6>
            <ul className="list-unstyled footer-links-list">
              <li className="mb-2"><Link to="/about" className="footer-link-item">Hiring Guides</Link></li>
              <li className="mb-2"><Link to="/our-clients" className="footer-link-item">Client Reviews</Link></li>
              <li className="mb-2"><Link to="/our-project" className="footer-link-item">Recent Projects</Link></li>
              <li className="mb-2"><Link to="/contact" className="footer-link-item">FAQ & Support</Link></li>
              <li className="mb-2"><Link to="/contact" className="footer-link-item">Consultation Tips</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="col-6 col-md-3 mb-4 mb-md-0 text-start">
            <h6 className="footer-col-title mb-4 text-uppercase">// Company</h6>
            <ul className="list-unstyled footer-links-list">
              <li className="mb-2"><Link to="/about" className="footer-link-item">About Us</Link></li>
              <li className="mb-2"><Link to="/team" className="footer-link-item">Meet the Team</Link></li>
              <li className="mb-2"><Link to="/our-clients" className="footer-link-item">Our Clients</Link></li>
              <li className="mb-2"><Link to="/contact" className="footer-link-item">Contact Us</Link></li>
              <li className="mb-2"><a href="https://www.linkedin.com/company/point-to-source-services/" target="_blank" rel="noopener noreferrer" className="footer-link-item">LinkedIn Page</a></li>
              <li className="mb-2"><a href="https://www.instagram.com/ps_services_consultant?utm_source=qr&igsh=MW1yNjV1eTZ0YmF4NA==" target="_blank" rel="noopener noreferrer" className="footer-link-item">Instagram</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Info */}
          <div className="col-6 col-md-3 mb-4 mb-md-0 text-start">
            <h6 className="footer-col-title mb-4 text-uppercase">// Get in Touch</h6>
            <ul className="list-unstyled footer-links-list text-white-50">
              <li className="mb-3 d-flex align-items-start gap-2">
                <i className="fas fa-map-marker-alt text-emerald mt-1"></i>
                <span style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  Sethi Enclave, Mohan Garden, Uttam Nagar, West Delhi, Delhi - 110059, India
                </span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <i className="fas fa-phone-alt text-emerald"></i>
                <a href="tel:+918850568104" className="footer-link-item">+91 88505 68104</a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <i className="far fa-envelope text-emerald"></i>
                <a href="mailto:thepsservices@gmail.com" className="footer-link-item">thepsservices@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Newsletter and Copyright */}
        <div className="row justify-content-between pt-5 pb-4 border-top border-secondary align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0 text-start">
            <h5 className="text-white fw-bold mb-2" style={{ fontSize: '16px' }}>Never miss an update</h5>
            <p className="text-white-50 mb-0" style={{ fontSize: '13px', maxWidth: '440px', lineHeight: '1.6' }}>
              Get all the latest news, staffing reports, and candidate insights from PS Services. Delivered directly to your inbox.
            </p>
          </div>
          <div className="col-lg-5">
            <form onSubmit={(e) => e.preventDefault()} className="footer-newsletter-form d-flex gap-2">
              <input 
                type="email" 
                className="form-control bg-dark text-white border-secondary rounded-3 px-3 py-2" 
                placeholder="example@gmail.com" 
                style={{ fontSize: '14px' }}
                required 
              />
              <button type="submit" className="theme-btn btn-emerald rounded-3 px-4 py-2" style={{ flexShrink: 0 }}>
                Join
              </button>
            </form>
            <div className="form-check text-start mt-2">
              <input className="form-check-input" type="checkbox" id="agreeCheckbox" defaultChecked />
              <label className="form-check-label text-white-50" htmlFor="agreeCheckbox" style={{ fontSize: '11px' }}>
                I agree to receive staffing insights and news from PS Services
              </label>
            </div>
          </div>
        </div>

        {/* Copyright segment */}
        <div className="row justify-content-between pt-4 border-top border-secondary mt-4 align-items-center pb-4">
          <div className="col-md-6 text-center text-md-start text-white-50 mb-2 mb-md-0" style={{ fontSize: '12px' }}>
            © 2024 PS Services, Designed by Tuhel Rana & Antigravity.
          </div>
          <div className="col-md-6 text-center text-md-end text-white-50" style={{ fontSize: '12px' }}>
            <Link to="/contact" className="text-white-50 text-decoration-none footer-hover-link" style={{ marginRight: '16px' }}>Privacy Policy</Link>
            <Link to="/contact" className="text-white-50 text-decoration-none footer-hover-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
