import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ContactForm from '../components/ContactForm';

const brands = [
  { name: "Client 1", logo: "/assets/clients_processed/client_1.png" },
  { name: "Client 2", logo: "/assets/clients_processed/client_2.png" },
  { name: "Client 3", logo: "/assets/clients_processed/client_3.png" },
  { name: "Client 4", logo: "/assets/clients_processed/client_4.png" },
  { name: "Client 5", logo: "/assets/clients_processed/client_5.png" },
  { name: "Client 6", logo: "/assets/clients_processed/client_6.png" },
  { name: "Client 7", logo: "/assets/clients_processed/client_7.png" },
  { name: "Client 9", logo: "/assets/clients_processed/client_9.png" },
  { name: "Client 10", logo: "/assets/clients_processed/client_10.png" },
  { name: "Client 11", logo: "/assets/clients_processed/client_11.png" },
  { name: "Client 12", logo: "/assets/clients_processed/client_12.png" },
  { name: "Client 13", logo: "/assets/clients_processed/client_13.png" },
  { name: "Client 14", logo: "/assets/clients_processed/client_14.png" },
  { name: "Client 15", logo: "/assets/clients_processed/client_15.png" },
  { name: "Client 16", logo: "/assets/clients_processed/client_16.png" },
  { name: "Client 17", logo: "/assets/clients_processed/client_17.png" },
  { name: "Client 18", logo: "/assets/clients_processed/client_18.png" }
];

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
      staggerChildren: 0.08
    }
  }
};

const OurClients = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-banner-wrap pt-180 pb-120 position-relative overflow-hidden d-flex align-items-center"
        style={{
          minHeight: '65vh',
          backgroundImage: 'linear-gradient(180deg, rgba(8, 12, 24, 0.92) 0%, rgba(8, 12, 24, 0.78) 100%), url("/assets/img/banner/clients_banner.png")',
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
                className="banner-content mt-5"
              >
                
                <motion.h1 
                  variants={fadeInUp} 
                  className="title fw-bold hero-title mb-4" 
                  style={{ fontSize: 'calc(1.8rem + 2.5vw)', fontWeight: '800', lineHeight: '1.1' }}
                >
                  Trusted Sourcing Partners <br />
                  <span style={{ color: 'var(--accent-emerald)' }}>Across India</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp} 
                  className="mb-5 hero-desc" 
                  style={{ fontSize: '18px', maxWidth: '560px', lineHeight: '1.7' }}
                >
                  We build scalable talent acquisition channels alongside industry-leading technology enterprises and corporate firms, matching credentials and long-term values.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="theme-btn btn-emerald text-decoration-none">
                    Book an Appointment <i className="fas fa-arrow-right ml-1" style={{ fontSize: '12px' }}></i>
                  </Link>
                  <Link to="/services" className="theme-btn btn-white-border text-decoration-none" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.25)' }}>
                    Our Services
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
                  <span className="text-white-50 d-block text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>Retention Rate</span>
                  <h4 className="fw-bold mb-1 mt-1">95% Success</h4>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Unmatched talent alignment</p>
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
                    <span className="fw-bold" style={{ fontSize: '14px' }}>Sourcing Accuracy</span>
                  </div>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Pre-vetted candidates that stay for the long term.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient background glows */}
        <div style={{ position: 'absolute', bottom: '-10%', left: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.08)', filter: 'blur(100px)', pointerEvents: 'none' }}></div>
      </section>

      {/* Sourcing Partners Grid */}
      <section className="why-choose py-100 bg-section-white">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <span className="badge-pill-green">
                <i className="fas fa-handshake"></i> Partners
              </span>
              <h2 className="title fw-bold mt-3 mb-3" style={{ fontSize: '2.5rem', color: '#0f172a' }}>
                Our Sourcing Partners
              </h2>
              <p className="text-muted mx-auto mb-4" style={{ maxWidth: '650px', fontSize: '16px', lineHeight: '1.6' }}>
                We collaborate with leading organizations to deliver exceptional talent and drive meaningful impact.
              </p>
              <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-emerald)', margin: '0 auto 40px auto', borderRadius: '2px' }}></div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              {/* Premium partner grid containing jumbled brand cards */}
              <motion.div 
                variants={staggerContainer} 
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, margin: "-100px" }}
                className="premium-partner-grid"
              >
                {(() => {
                  const jumbledStyles = [
                    { rotate: -3.5, y: -6 },
                    { rotate: 2.8, y: 7 },
                    { rotate: -2, y: -4 },
                    { rotate: 3.5, y: 5 },
                    { rotate: -3, y: -7 },
                    { rotate: 2.2, y: 4 },
                    { rotate: -4, y: -5 },
                    { rotate: 1.8, y: 3 },
                    { rotate: -2.8, y: -6 },
                    { rotate: 3.2, y: 8 }
                  ];

                  return brands.map((brand, idx) => {
                    const tilt = jumbledStyles[idx % jumbledStyles.length];
                    return (
                      <motion.div 
                        key={idx} 
                        variants={fadeInUp}
                      >
                        <div 
                          className="premium-partner-card"
                          style={{ 
                            transform: `rotate(${tilt.rotate}deg) translateY(${tilt.y}px)` 
                          }}
                        >
                          <img 
                            src={brand.logo} 
                            alt={brand.name} 
                            onError={(e) => {
                              e.target.src = `https://placehold.co/150x45/ffffff/0f172a?text=${encodeURIComponent(brand.name)}`;
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  });
                })()}
              </motion.div>
            </div>
          </div>

          {/* Centered Green Badge Footer */}
          <div className="row justify-content-center mt-5 pt-2">
            <div className="col-auto d-flex align-items-center justify-content-center gap-3 green-border-divider">
              <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '36px', height: '36px', backgroundColor: 'var(--accent-emerald)', color: '#ffffff', flexShrink: 0 }}>
                <i className="fas fa-users" style={{ fontSize: '14px' }}></i>
              </div>
              <p className="text-muted mb-0 fw-semibold" style={{ fontSize: '14.5px', letterSpacing: '-0.01em' }}>
                Proud to partner with innovative leaders shaping a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="testimonial-section py-100 bg-section-sky"
      >
        <div className="container">
          <TestimonialCarousel />
        </div>
      </motion.section>

      {/* CTA section with Contact Form */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: "-100px" }}
        className="cta-contact-area py-100 position-relative overflow-hidden bg-section-white"
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

export default OurClients;
