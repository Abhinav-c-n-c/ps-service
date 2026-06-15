import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import TestimonialCarousel from '../components/TestimonialCarousel';

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

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [quoteData, setQuoteData] = useState({ name: '', email: '' });
  const [quoteStatus, setQuoteStatus] = useState('');

  const handleQuoteChange = (e) => {
    const { name, value } = e.target;
    setQuoteData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    if (!quoteData.name || !quoteData.email) return;

    setQuoteStatus('Redirecting...');
    const waNumber = "918850568104";
    const waText = `Hello PS Services, I am interested in a free quote.%0A%0A*Name:* ${encodeURIComponent(quoteData.name)}%0A*Email:* ${encodeURIComponent(quoteData.email)}`;
    const url = `https://wa.me/${waNumber}?text=${waText}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setQuoteData({ name: '', email: '' });
      setQuoteStatus('');
    }, 800);
  };

  const faqData = [
    {
      id: 0,
      question: "What specific criteria and parameters should I prepare for a sourcing campaign?",
      answer: "To launch an accelerated talent search, we recommend sharing the target job profiles (technical stacks, languages, frameworks, or operational qualifications), target experience ranges, key functional deliverables, location preferences (on-site, hybrid, remote), budget bands, and approximate timeline for onboarding. This allows our consultants to build a precise candidate profile map on day one."
    },
    {
      id: 1,
      question: "How does PS Services maintain candidate quality and reduce early-stage attrition?",
      answer: "Every candidate we submit undergoes a multi-layered screening process. First, we cross-reference technical claims through practical capability tests or detailed screening calls led by HR leads. Second, we audit cultural fit, career expectations, and background references before scheduling a client interview. This comprehensive vetting ensures that only high-compatibility professionals enter your interview funnel, boosting offer-acceptance rates and long-term placement retention."
    },
    {
      id: 2,
      question: "What is your standard turnaround time and do you support contract-to-hire options?",
      answer: "For individual mid-level roles, we typically deliver our initial short-list of pre-vetted profiles within 3 to 5 business days. Yes, we support contract, contract-to-hire, and direct permanent placements. We structure clear SLA agreements containing replacement guarantee clauses (typically 90 days) to protect your investment and ensure continuous talent alignment."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-banner-wrap pt-180 pb-120 position-relative overflow-hidden d-flex align-items-center"
        style={{
          minHeight: '65vh',
          backgroundImage: 'linear-gradient(180deg, rgba(8, 12, 24, 0.92) 0%, rgba(8, 12, 24, 0.78) 100%), url("/assets/img/banner/services_banner.png")',
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
                  Our Offerings
                </motion.span>
                
                <motion.h1 
                  variants={fadeInUp} 
                  className="title fw-bold hero-title mb-4" 
                  style={{ fontSize: 'calc(1.8rem + 2.5vw)', fontWeight: '800', lineHeight: '1.1' }}
                >
                  Accelerating Growth With <br />
                  <span style={{ color: 'var(--accent-emerald)' }}>Vetted Talent</span> Solutions
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp} 
                  className="mb-5 hero-desc" 
                  style={{ fontSize: '18px', maxWidth: '560px', lineHeight: '1.7' }}
                >
                  Professional talent acquisition solutions built to support startup and enterprise growth. We connect you with software engineers, finance leads, and operational specialists.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="theme-btn btn-emerald text-decoration-none">
                    Book an Appointment <i className="fas fa-arrow-right ml-1" style={{ fontSize: '12px' }}></i>
                  </Link>
                  <Link to="/contact" className="theme-btn btn-white-border text-decoration-none" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.25)' }}>
                    Get Free Quote
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
                  <span className="text-white-50 d-block text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>Sourcing Channels</span>
                  <h4 className="fw-bold mb-1 mt-1">10+ Active</h4>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Deep candidate community network</p>
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
                    <span className="fw-bold" style={{ fontSize: '14px' }}>Turnaround Time</span>
                  </div>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Vetted profiles delivered within 3 to 5 business days.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient background glows */}
        <div style={{ position: 'absolute', bottom: '-10%', left: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.08)', filter: 'blur(100px)', pointerEvents: 'none' }}></div>
      </section>

      {/* Domain Cards */}
      <section className="digital-area py-100 bg-section-white">
        <div className="container">
          <div className="row justify-content-center mb-5 text-center">
            <div className="col-lg-8">
              <span className="sub-title mb-3">Core Expertise</span>
              <h2 className="title fw-bold">Flexible Staffing Models</h2>
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
              { icon: "fa-user-tie", title: "Executive Search & Headhunting", desc: "Our executive advisory desk conducts highly confidential, national search campaigns to secure C-suite leaders (CEOs, CTOs, COOs, VPs) who possess the proven leadership, financial acumen, and industry track record needed to steer enterprise operations." },
              { icon: "fa-laptop-code", title: "IT & Software Engineering Sourcing", desc: "We map active tech hubs to source pre-screened developers, DevOps engineers, software architects, product managers, and QA specialists proficient in modern stacks, reducing technical vetting burden by 70% for engineering leads." },
              { icon: "fa-handshake", title: "Non-IT & Enterprise Placements", desc: "We place business professionals in administrative, financial, branch management, sales, and HR roles across domains such as banking, logistics, hospitality, and corporate operations, ensuring alignment with corporate standards." },
              { icon: "fa-users", title: "Contract Staffing & Agile Scaling", desc: "Manage operational workload surges and temporary project timelines with our contract-to-hire staffing models. We handle payrolling, initial onboarding overhead, and contract legal compliance to facilitate speed." }
            ].map((srv, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="col-xl-3 col-lg-6 mb-4">
                <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="icon mb-4 text-success" style={{ fontSize: '28px' }}>
                      <i className={`fas ${srv.icon}`}></i>
                    </div>
                    <h5 className="fw-bold mb-3">{srv.title}</h5>
                    <p className="text-muted mb-4" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>{srv.desc}</p>
                  </div>
                  <Link to="/contact" className="text-decoration-none text-success fw-bold d-flex align-items-center gap-1" style={{ fontSize: '14px' }}>
                    Inquire Now <i className="fas fa-angle-double-right"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote CTA Banner */}
      <section className="get-free py-5 bg-section-sky">
        <div className="container">
          <div className="glass-card p-4 p-md-5">
            <div className="row align-items-center">
              <div className="col-lg-6 text-start mb-4 mb-lg-0">
                <h3 className="fw-bold mb-2">Request an Enterprise Sourcing Quote</h3>
                <p className="text-muted mb-0" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  Let's coordinate on your hiring objectives. Provide your contact details and our senior sourcing consultants will analyze your criteria to deliver a customized operational quote and talent availability report within 24 hours.
                </p>
              </div>

              <div className="col-lg-6">
                <form onSubmit={handleQuoteSubmit} className="row g-3">
                  <div className="col-sm-5">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      name="name" 
                      value={quoteData.name} 
                      onChange={handleQuoteChange}
                      required 
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-5">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      name="email" 
                      value={quoteData.email} 
                      onChange={handleQuoteChange}
                      required 
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-2">
                    <button type="submit" className="theme-btn btn-emerald w-100 py-3" style={{ borderRadius: '12px' }}>
                      {quoteStatus || 'Go'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Domains List */}
      <section className="domains-showcase py-100 bg-section-white">
        <div className="container">
          <div className="row text-start mb-5 justify-content-between align-items-end">
            <div className="col-lg-6">
              <span className="sub-title mb-3">Industries</span>
              <h2 className="title fw-bold">Domain Specific Staffing</h2>
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
            ].map((domain, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="col-lg-4 col-md-6 mb-4">
                <div className="glass-card p-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="d-flex align-items-center justify-content-center bg-success text-dark rounded-circle" style={{ width: '40px', height: '40px' }}>
                        <i className={`fas ${domain.icon}`}></i>
                      </div>
                      <h5 className="fw-bold mb-0" style={{ fontSize: '16px' }}>{domain.title}</h5>
                    </div>
                    <div className="media overflow-hidden mb-4" style={{ borderRadius: '10px', height: '180px' }}>
                      <img src={domain.img} className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} alt={domain.title} onError={(e) => e.target.src = domain.fallback} />
                    </div>
                  </div>
                  <Link to="/contact" className="theme-btn btn-white-border text-center w-100 py-2">Inquire Now</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="faq-section py-100 bg-section-sky"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-start mb-5 mb-lg-0">
              <span className="sub-title mb-3">FAQ</span>
              <h2 className="title fw-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted mb-4">Have specific queries regarding contract periods, sourcing pipelines, or legal agreements? Find quick answers here.</p>
              <img 
                src="/assets/img/services/why-choose-2.png" 
                alt="FAQs illustration" 
                className="img-fluid d-none d-lg-block mt-4" 
                style={{ borderRadius: '12px', border: '1px solid var(--border-color)', height: '240px', width: '80%', objectFit: 'cover' }}
                onError={(e) => e.target.src = "https://placehold.co/400x240/1e293b/ffffff?text=Recruitment+Advisory"}
              />
            </div>

            <div className="col-lg-6 text-start">
              <div className="accordion-list">
                {faqData.map((faq) => (
                  <div key={faq.id} className="accordion-item" style={{ border: '1px solid var(--border-color)', background: 'var(--card-bg)' }}>
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === faq.id ? '' : 'collapsed'}`} 
                        type="button" 
                        onClick={() => setActiveFaq(activeFaq === faq.id ? -1 : faq.id)}
                        style={{ padding: '20px' }}
                      >
                        {faq.question}
                      </button>
                    </h2>

                    <AnimatePresence initial={false}>
                      {activeFaq === faq.id && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="accordion-body text-muted" style={{ padding: '20px', borderTop: '1px solid var(--border-color)', fontSize: '14px' }}>
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

export default Services;
