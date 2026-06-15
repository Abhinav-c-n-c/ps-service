import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const fadeInUp = {
  initial: { opacity: 0, y: 35, filter: 'blur(3px)' },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-banner-wrap pt-180 pb-120 position-relative overflow-hidden d-flex align-items-center"
        style={{
          minHeight: '65vh',
          backgroundImage: 'linear-gradient(180deg, rgba(8, 12, 24, 0.92) 0%, rgba(8, 12, 24, 0.78) 100%), url("/assets/img/banner/contact_banner.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '0'
        }}
      >
        <div className="container position-relative" style={{ zIndex: 5 }}>
          <div className="row align-items-center">
            {/* Hero Text Content */}
            <div className="col-lg-7 text-start">
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="banner-content"
              >
                <motion.span variants={fadeInUp} className="sub-title hero-sub-title mb-4">
                  Support Desk
                </motion.span>
                
                <motion.h1 
                  variants={fadeInUp} 
                  className="title fw-bold hero-title mb-4" 
                  style={{ fontSize: 'calc(1.8rem + 2.5vw)', fontWeight: '800', lineHeight: '1.1' }}
                >
                  Connect With Our <br />
                  <span style={{ color: 'var(--accent-emerald)' }}>Sourcing Desk</span> Today
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp} 
                  className="mb-5 hero-desc" 
                  style={{ fontSize: '18px', maxWidth: '560px', lineHeight: '1.7' }}
                >
                  Reach out to coordinate recruitment search parameters, request custom talent grids, or get initial organizational staffing consultations.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="d-flex flex-wrap gap-3">
                  <a href="tel:+918850568104" className="theme-btn btn-emerald text-decoration-none">
                    Call support desk <i className="fas fa-phone-alt ml-1" style={{ fontSize: '12px' }}></i>
                  </a>
                  <Link to="/services" className="theme-btn btn-white-border text-decoration-none" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.25)' }}>
                    Explore Services
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Glass Panels */}
            <div className="col-lg-5 position-relative mt-5 mt-lg-0">
              <div className="d-flex flex-column gap-4 align-items-lg-end">
                {/* Floating Widget 1 */}
                <motion.div 
                  animate={{
                    y: [0, -10, 0],
                    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="hero-glass-card p-4 text-start d-inline-block shadow-lg"
                  style={{ minWidth: '260px', transform: 'rotate(-2deg)' }}
                >
                  <span className="text-white-50 d-block text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>Response Time</span>
                  <h4 className="fw-bold mb-1 mt-1">Under 24 Hours</h4>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Fast candidate mapping feedback</p>
                </motion.div>

                {/* Floating Widget 2 */}
                <motion.div 
                  animate={{
                    y: [0, 8, 0],
                    transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="hero-glass-card p-4 text-start d-inline-block shadow-lg"
                  style={{ minWidth: '280px', transform: 'rotate(1deg)' }}
                >
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="d-block" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
                    <span className="fw-bold" style={{ fontSize: '14px' }}>National Search</span>
                  </div>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Serving startups and legacy corporate clients across India.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient background glows */}
        <div style={{ position: 'absolute', bottom: '-10%', left: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.08)', filter: 'blur(100px)', pointerEvents: 'none' }}></div>
      </section>

      {/* Info Boxes */}
      <section className="contact-us py-100 bg-section-white">
        <div className="container text-start">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <span className="sub-title mb-3">Reach Out</span>
                <h2 className="title fw-bold mb-4">Let's Establish a Talent Partnership</h2>
                <p className="text-muted mb-0" style={{ fontSize: '15.5px', lineHeight: '1.8' }}>
                  Our sourcing and placement advisory desk is prepared to coordinate your technical or executive search campaigns. Contact us today to request customized talent grids, outline specific headcount profiles, or schedule an initial organizational staffing analysis. Our HR consultants typically review and respond to inquiries within one business day.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-7">
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
                className="row"
              >
                {/* Location */}
                <motion.div variants={fadeInUp} className="col-sm-12 mb-4">
                  <div className="glass-card p-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="d-flex align-items-center justify-content-center bg-success text-dark rounded-circle" style={{ width: '36px', height: '36px' }}>
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <h5 className="fw-bold mb-0">Office Location</h5>
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                      H No - 6/2, Sethi Enclave, Mohan Garden, Street No - 2, Uttam Nagar, West Delhi, Delhi - 110059
                    </p>
                  </div>
                </motion.div>

                {/* Call */}
                <motion.div variants={fadeInUp} className="col-sm-6 mb-4">
                  <div className="glass-card p-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="d-flex align-items-center justify-content-center bg-success text-dark rounded-circle" style={{ width: '36px', height: '36px' }}>
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <h5 className="fw-bold mb-0">Phone support</h5>
                    </div>
                    <a href="tel:+918850568104" className="text-success fw-bold text-decoration-none" style={{ fontSize: '15px' }}>+91 88505 68104</a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeInUp} className="col-sm-6 mb-4">
                  <div className="glass-card p-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="d-flex align-items-center justify-content-center bg-success text-dark rounded-circle" style={{ width: '36px', height: '36px' }}>
                        <i className="fas fa-envelope"></i>
                      </div>
                      <h5 className="fw-bold mb-0">Email Support</h5>
                    </div>
                    <a href="mailto:thepsservices@gmail.com" className="text-success fw-bold text-decoration-none" style={{ fontSize: '15px' }}>thepsservices@gmail.com</a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="row py-4">
            <div className="col-12">
              <hr style={{ borderColor: 'var(--border-color)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section with Contact Form */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: "-100px" }}
        className="cta-contact-area py-100 position-relative overflow-hidden bg-section-sky"
      >
        <div className="container position-relative" style={{ zIndex: 5 }}>
          <div className="row justify-content-center mb-5">
            <motion.div variants={fadeInUp} className="col-lg-8 text-center">
              <span className="section-tag">
                <i className="far fa-envelope-open"></i> Get In Touch
              </span>
              <h2 className="title fw-bold mt-2 mb-3" style={{ fontSize: 'calc(2rem + 1.2vw)', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
                Let's Work <span style={{ background: 'linear-gradient(135deg, var(--accent-emerald) 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '800' }}>Together</span>
              </h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '560px', fontSize: '15.5px', lineHeight: '1.6' }}>
                Ready to hire elite vetted professionals or launch custom strategic staffing campaigns? Submit your requirements below to start your partnership.
              </p>
            </motion.div>
          </div>

          <div className="row">
            {/* Left Card: Info & Map */}
            <motion.div variants={fadeInUp} className="col-lg-5 mb-4 mb-lg-0 text-start">
              <div className="contact-info-modern-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
                <div className="d-flex flex-column gap-4">
                  {/* Call */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="info-icon-circle-purple d-flex align-items-center justify-content-center flex-shrink-0">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <span className="info-label-muted d-block">Call us</span>
                      <a href="tel:+918850568104" className="info-value-bold text-decoration-none">+91 88505 68104</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="info-icon-circle-purple d-flex align-items-center justify-content-center flex-shrink-0">
                      <i className="far fa-envelope"></i>
                    </div>
                    <div>
                      <span className="info-label-muted d-block">Email</span>
                      <a href="mailto:thepsservices@gmail.com" className="info-value-bold text-decoration-none">thepsservices@gmail.com</a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="d-flex align-items-start gap-3">
                    <div className="info-icon-circle-purple d-flex align-items-center justify-content-center flex-shrink-0 mt-1">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <span className="info-label-muted d-block">Location</span>
                      <span className="info-value-bold" style={{ fontSize: '14.5px', lineHeight: '1.5' }}>
                        H No - 6/2, Sethi Enclave, Mohan Garden, Street No - 2, Uttam Nagar, West Delhi, Delhi - 110059
                      </span>
                    </div>
                  </div>
                </div>

                {/* Embedded Map */}
                <div className="contact-map-iframe-container mt-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.517319985959!2d77.038101!3d28.621773999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05051a82f3ef%3A0xe54dcf9c4ad3d9e8!2sSethi%20Enclave%2C%20Mohan%20Garden%2C%20Razapur%20Khurd%2C%20Uttam%20Nagar%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1716354549988!5m2!1sen!2sin" 
                    width="100%" 
                    height="200" 
                    style={{ border: 0, borderRadius: '16px' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="contact-office-map"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Right Card: Form */}
            <motion.div variants={fadeInUp} className="col-lg-7">
              <ContactForm showHeader={false} />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
