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

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-banner-wrap pt-180 pb-120 position-relative overflow-hidden d-flex align-items-center"
        style={{
          minHeight: '65vh',
          backgroundImage: 'linear-gradient(180deg, rgba(8, 12, 24, 0.92) 0%, rgba(8, 12, 24, 0.78) 100%), url("/assets/img/banner/about_banner.png")',
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
                  About Us
                </motion.span>
                
                <motion.h1 
                  variants={fadeInUp} 
                  className="title fw-bold hero-title mb-4" 
                  style={{ fontSize: 'calc(1.8rem + 2.5vw)', fontWeight: '800', lineHeight: '1.1' }}
                >
                  Who We Are & <br />
                  <span style={{ color: 'var(--accent-emerald)' }}>Our Company</span> Overview
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp} 
                  className="mb-5 hero-desc" 
                  style={{ fontSize: '18px', maxWidth: '560px', lineHeight: '1.7' }}
                >
                  Learn more about our vision, core skills, and values in recruitment consultancy. Point to Source Services (PS Services) was founded in 2022 to redefine how organizations in India discover, evaluate, and acquire elite talent.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="theme-btn btn-emerald text-decoration-none">
                    Book an Appointment <i className="fas fa-arrow-right ml-1" style={{ fontSize: '12px' }}></i>
                  </Link>
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
                  <span className="text-white-50 d-block text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>Established</span>
                  <h4 className="fw-bold mb-1 mt-1">Since 2022</h4>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Redefining corporate headhunting</p>
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
                    <span className="fw-bold" style={{ fontSize: '14px' }}>National Reach</span>
                  </div>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Connecting enterprise businesses with top-tier candidates across India.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient background glows */}
        <div style={{ position: 'absolute', bottom: '-10%', left: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.08)', filter: 'blur(100px)', pointerEvents: 'none' }}></div>
      </section>

      {/* Corporate Summary section */}
      <section className="our-company py-100 bg-section-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 text-start">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                className="our-company__media" 
                style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)' }}
              >
                <img src="/assets/img/about/Banner-1.jpg" alt="PS Services Office" className="img-fluid w-100" onError={(e) => e.target.src = "https://placehold.co/600x400/1e293b/ffffff?text=Our+Consultancy+Team"} />
              </motion.div>
            </div>

            <div className="col-lg-6 text-start">
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
                className="pl-lg-4"
              >
                <motion.span variants={fadeInUp} className="sub-title mb-3">Who We Are</motion.span>
                <motion.h2 variants={fadeInUp} className="title fw-bold mb-4">Empowering Enterprise Growth Since 2022</motion.h2>
                <motion.div variants={fadeInUp} className="text-muted" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                  <p className="mb-4">
                    Point to Source Services (PS Services) was founded in 2022 with a clear and singular objective: to redefine how organizations in India discover, evaluate, and acquire talent. Over the years, we have grown from a boutique staffing desk into an expansive, highly responsive recruiting network that serves tech startups, legacy manufacturing companies, top-tier educational networks, and corporate banking firms.
                  </p>
                  <p className="mb-4">
                    We specialize in both high-level IT headhunting and volume non-IT placements. We recognize that true recruitment is not just about matching resumes to keywords; it is about alignment of values, technical competency, and cultural compatibility. Our dedicated advisors utilize customized sourcing channels to bring you candidates who are prepared to make an immediate, long-term impact on your operations.
                  </p>
                  <p className="mb-0">
                    By handling the entire lifecycle of sourcing—including initial profile mapping, multi-stage skill assessments, detailed background checks, and salary onboarding coordination—we drastically minimize time-to-hire and operational strain on your internal HR managers. Let us optimize your recruiting pipeline while your leadership focuses on scaling core business goals.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="about-services py-100 bg-section-sky">
        <div className="container">
          <div className="row justify-content-center mb-5 text-center">
            <div className="col-lg-8">
              <span className="sub-title mb-3">Scope</span>
              <h2 className="title fw-bold">Primary Service Sectors</h2>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="row text-start"
          >
            {[
              { icon: "fa-chart-line", title: "IT Recruitment Services", img: "/assets/img/services/services-2.png", fallback: "https://placehold.co/400x200/1e293b/ffffff?text=IT+Recruitment" },
              { icon: "fa-university", title: "Banking Recruitment", img: "/assets/img/project-details/project-details-2.png", fallback: "https://placehold.co/400x200/2563eb/ffffff?text=Banking+Staffing" },
              { icon: "fa-graduation-cap", title: "Educational Recruitment", img: "/assets/img/project-details/project-details-3.png", fallback: "https://placehold.co/400x200/0d9488/ffffff?text=Education+Staffing" }
            ].map((srv, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="col-lg-4 col-md-6 mb-4">
                <div className="glass-card p-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="d-flex align-items-center justify-content-center bg-success text-dark rounded-circle" style={{ width: '40px', height: '40px' }}>
                        <i className={`fas ${srv.icon}`}></i>
                      </div>
                      <h5 className="fw-bold mb-0" style={{ fontSize: '16px' }}>{srv.title}</h5>
                    </div>
                    <div className="media overflow-hidden mb-4" style={{ borderRadius: '10px', height: '180px' }}>
                      <img src={srv.img} className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} alt={srv.title} onError={(e) => e.target.src = srv.fallback} />
                    </div>
                  </div>
                  <Link to="/services" className="theme-btn btn-white-border text-center w-100 py-2">Read Details</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills & Capability Progress */}
      <section className="company-skill py-100 bg-section-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-start mb-5 mb-lg-0">
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
              >
                <motion.span variants={fadeInUp} className="sub-title mb-3">Capabilities</motion.span>
                <motion.h2 variants={fadeInUp} className="title fw-bold mb-4">Why Top Enterprises Trust Our Sourcing Methodology</motion.h2>
                <motion.p variants={fadeInUp} className="text-muted mb-4" style={{ fontSize: '15.5px', lineHeight: '1.7' }}>
                  Our sourcing success is built upon a highly disciplined candidate qualification process. We don't just supply lists of names; we deliver fully vetted professionals who fit your organization's exact cultural and operational requirements, reducing attrition and accelerating team velocity.
                </motion.p>
 
                <motion.div variants={fadeInUp} className="progress-bar__wrapper mt-4">
                  {[
                    { title: "Recruitment Services", level: 100 },
                    { title: "Sourcing & Headhunting", level: 100 },
                    { title: "Client Boarding Advisory", level: 90 }
                  ].map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <h6 className="fw-bold mb-0">{skill.title}</h6>
                        <span className="fw-bold text-success">{skill.level}%</span>
                      </div>
                      <div className="progress" style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                        <motion.div 
                          className="progress-bar bg-success" 
                          role="progressbar" 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: false }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          style={{ height: '100%', borderRadius: '4px' }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                className="glass-card p-4 text-center border-light shadow-lg"
              >
                <img 
                  src="/assets/img/about/company-skill-meida.png" 
                  alt="Presentation" 
                  className="img-fluid" 
                  style={{ borderRadius: '12px' }}
                  onError={(e) => e.target.src = "https://placehold.co/550x340/111827/ffffff?text=Recruitment+Advisory"}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: "-100px" }}
        className="counter-area py-80 bg-section-sky"
      >
        <div className="container">
          <motion.div variants={staggerContainer} className="row text-start justify-content-center">
            {[
              { icon: "fa-handshake", val: "20", text: "Corporate Partners" },
              { icon: "fa-users-cog", val: "10", text: "Expert Consultants" },
              { icon: "fa-check-double", val: "100", suffix: "%", text: "Vetting Standards" },
              { icon: "fa-grin-stars", val: "100", suffix: "%", text: "Client Satisfaction" }
            ].map((cnt, i) => (
              <motion.div key={i} variants={fadeInUp} className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div className="glass-card p-4 d-flex align-items-center gap-3">
                  <div className="icon text-success" style={{ fontSize: '28px' }}>
                    <i className={`fas ${cnt.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-1" style={{ fontSize: '24px' }}>
                      {cnt.val}{cnt.suffix || "+"}
                    </h3>
                    <span className="text-muted" style={{ fontSize: '13px' }}>{cnt.text}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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

export default About;
