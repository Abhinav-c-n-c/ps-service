import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const teamMembers = [
  {
    name: "Pradeep Kumar",
    position: "Founder & CEO",
    image: "/assets/img/team/pradeep.png",
    linkedin: "https://www.linkedin.com/in/pradeep-kumar-8661111a3",
    accentClass: "team-blue-accent",
    linkedinBg: "#0077b5",
    description: "Visionary leader with a commitment to delivering talent solutions that drive business success.",
    points: [
      { icon: "fas fa-users", label: "10+ Years Experience" },
      { icon: "fas fa-bullseye", label: "Talent Strategy Expert" },
      { icon: "fas fa-star", label: "Leadership & Innovation" }
    ]
  },
  {
    name: "Shweta Kumari",
    position: "Sr HR Manager",
    image: "/assets/img/team/shweta.png",
    linkedin: "https://www.linkedin.com/in/shweta-kumari-471b603b8",
    accentClass: "team-green-accent",
    linkedinBg: "#10b981",
    description: "HR professional dedicated to building people-first cultures and driving organizational growth.",
    points: [
      { icon: "fas fa-users", label: "6+ Years Experience" },
      { icon: "fas fa-user-friends", label: "People & Culture Specialist" },
      { icon: "fas fa-chart-line", label: "Employee Engagement Expert" }
    ]
  }
];

const valuesItems = [
  {
    title: "Diverse Perspectives",
    desc: "We bring varied backgrounds and ideas to solve complex talent challenges.",
    icon: "fas fa-users",
    iconClass: "team-value-icon-blue"
  },
  {
    title: "Industry Expertise",
    desc: "Deep recruitment knowledge to connect you with the right talent.",
    icon: "fas fa-lightbulb",
    iconClass: "team-value-icon-green"
  },
  {
    title: "Trusted by Clients",
    desc: "Building long-term partnerships through trust, transparency, and results.",
    icon: "fas fa-shield-alt",
    iconClass: "team-value-icon-blue"
  },
  {
    title: "Driven by Purpose",
    desc: "We are passionate about people and committed to your success.",
    icon: "fas fa-rocket",
    iconClass: "team-value-icon-green"
  }
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
      staggerChildren: 0.12
    }
  }
};

const Team = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-banner-wrap pt-180 pb-120 position-relative overflow-hidden d-flex align-items-center"
        style={{
          minHeight: '65vh',
          backgroundImage: 'linear-gradient(180deg, rgba(8, 12, 24, 0.92) 0%, rgba(8, 12, 24, 0.78) 100%), url("/assets/img/banner/team_banner.png")',
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
                  Meet Our Team
                </motion.span>
                
                <motion.h1 
                  variants={fadeInUp} 
                  className="title fw-bold hero-title mb-4" 
                  style={{ fontSize: 'calc(1.8rem + 2.5vw)', fontWeight: '800', lineHeight: '1.1' }}
                >
                  Our Advisors & <br />
                  <span style={{ color: 'var(--accent-emerald)' }}>Sourcing Consultants</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp} 
                  className="mb-5 hero-desc" 
                  style={{ fontSize: '18px', maxWidth: '560px', lineHeight: '1.7' }}
                >
                  Welcome to our team page, where you get a glimpse into the heart and soul of our organization. We are a diverse group of recruitment experts.
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
                  <span className="text-white-50 d-block text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>Team Growth</span>
                  <h4 className="fw-bold mb-1 mt-1">HR Specialists</h4>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>100% committed to your success</p>
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
                    <span className="fw-bold" style={{ fontSize: '14px' }}>Consultant Support</span>
                  </div>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Providing dedicated HR advisory & recruiting expertise.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient background glows */}
        <div style={{ position: 'absolute', bottom: '-10%', left: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.08)', filter: 'blur(100px)', pointerEvents: 'none' }}></div>
      </section>

      {/* Main Team Section */}
      <section className="team-premium-section py-100 bg-section-white">
        <div className="container">
          {/* Split Header layout matching reference image */}
          <div className="row justify-content-between align-items-end mb-5 text-start">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <span className="team-section-badge">
                <i className="fas fa-users"></i> Meet Our Team
              </span>
              <h2 className="fw-bold mt-2 mb-0" style={{ fontSize: 'calc(1.8rem + 1.2vw)', letterSpacing: '-0.03em', lineHeight: '1.15', color: '#0f172a' }}>
                Bringing Passion and <br />Expertise Together
              </h2>
              <div className="team-heading-bar"></div>
            </div>
            <div className="col-lg-5">
              <p className="text-muted mb-0" style={{ fontSize: '15px', lineHeight: '1.75' }}>
                Welcome to our team page, where you get a glimpse into the heart and soul of our organization. We are a diverse group of recruitment experts, each bringing unique talents, perspectives, and industry knowledge to the table.
              </p>
            </div>
          </div>

          {/* Team Grid Cards */}
          <motion.div 
            variants={staggerContainer}
            className="row justify-content-center text-start g-4"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="col-lg-6 col-md-12 mb-3">
                <div className={`team-premium-card ${member.accentClass}`}>
                  <div className="row g-4 align-items-center">
                    {/* Left Column: Image wrapper */}
                    <div className="col-md-5 col-sm-12">
                      <div className="team-card-image-wrap">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          onError={(e) => {
                            e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`;
                          }}
                        />
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="team-linkedin-btn-overlay"
                            style={{ backgroundColor: member.linkedinBg }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        )}
                      </div>
                    </div>
                    
                    {/* Right Column: Member details */}
                    <div className="col-md-7 col-sm-12">
                      <span className="team-member-role d-block">{member.position}</span>
                      <div className="team-accent-line"></div>
                      <h3 className="team-member-name mb-3">
                        <Link to={`/team-details?name=${encodeURIComponent(member.name)}`} className="text-decoration-none text-dark hover-emerald">
                          {member.name}
                        </Link>
                      </h3>
                      <p className="team-member-desc mb-4">{member.description}</p>
                      
                      <ul className="team-points-list">
                        {member.points.map((pt, pIdx) => (
                          <li key={pIdx} className="team-point-item">
                            <div className="team-point-icon-circle">
                              <i className={pt.icon}></i>
                            </div>
                            <span className="team-point-label">{pt.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom values bar */}
          <motion.div variants={fadeInUp} className="row mt-4">
            <div className="col-12">
              <div className="team-values-bar">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-start">
                  {valuesItems.map((val, vIdx) => (
                    <div key={vIdx} className="col">
                      <div className="team-value-item">
                        <div className={`team-value-icon-circle ${val.iconClass}`}>
                          <i className={val.icon}></i>
                        </div>
                        <div className="team-value-text">
                          <h4 className="team-value-title">{val.title}</h4>
                          <p className="team-value-desc">{val.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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

export default Team;

