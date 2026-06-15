import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ClientMarquee from '../components/ClientMarquee';
import ContactForm from '../components/ContactForm';

const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: 'blur(4px)' },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatReverse = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const homeTeamMembers = [
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

const homeValuesItems = [
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

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 0,
      num: "01",
      title: "Assess & Partner",
      desc: "We analyze your tech stack, team environment, and business requirements to establish the ideal candidate footprint.",
      icon: "fas fa-search",
      themeColor: "#059669",
      bgLight: "#e6f4ea",
      items: [
        { icon: "fas fa-users", text: "Identify talent gaps and organizational context" },
        { icon: "fas fa-bullseye", text: "Formulate customized search requirements & candidate persona" },
        { icon: "fas fa-map-marked-alt", text: "Map skill sets to key target profiles & business goals" },
        { icon: "fas fa-file-invoice-dollar", text: "Define payroll, compliance, and SLA expectations" },
        { icon: "fas fa-chart-line", text: "Align on success metrics, timelines, and role expectations" }
      ]
    },
    {
      id: 1,
      num: "02",
      title: "Strategize Sourcing",
      desc: "Our sourcing advisors create customized search criteria, tapping into deep active professional communities across India.",
      icon: "fas fa-bullseye",
      themeColor: "#2563eb",
      bgLight: "#eff6ff",
      items: [
        { icon: "fas fa-search-plus", text: "Outline high-priority sourcing channels & talent pools" },
        { icon: "fas fa-database", text: "Tapping into active professional communities across India" },
        { icon: "fas fa-paper-plane", text: "Run initial candidate mapping & outreach campaigns" },
        { icon: "fas fa-comments", text: "Coordinate passive candidate engagement & interest checks" },
        { icon: "fas fa-share-alt", text: "Optimize referral networks & inbound lead captures" }
      ]
    },
    {
      id: 2,
      num: "03",
      title: "Execute Vetting",
      desc: "Candidates undergo rigorous initial screening, background validation, and technical interviews before selection.",
      icon: "fas fa-clipboard-check",
      themeColor: "#7c3aed",
      bgLight: "#f5f3ff",
      items: [
        { icon: "fas fa-laptop-code", text: "Run technical assessments & programming tests" },
        { icon: "fas fa-user-shield", text: "Conduct behavioral & cultural fit audits" },
        { icon: "fas fa-id-card-alt", text: "Validate background credentials and work history" },
        { icon: "fas fa-clipboard-list", text: "Perform peer-review style mock interviews" },
        { icon: "fas fa-file-signature", text: "Structure shortlist dossiers with vetting feedback" }
      ]
    },
    {
      id: 3,
      num: "04",
      title: "Shortlist & Select",
      desc: "We present detailed candidate dossiers, coordinate panel interviews, and support team selection assessments.",
      icon: "fas fa-user-check",
      themeColor: "#ec4899",
      bgLight: "#fdf2f8",
      items: [
        { icon: "fas fa-id-card", text: "Present detailed dossiers of top 3 pre-vetted candidates" },
        { icon: "fas fa-calendar-alt", text: "Coordinate client interview scheduling and feedback loops" },
        { icon: "fas fa-chalkboard-teacher", text: "Facilitate case study presentations & panel sessions" },
        { icon: "fas fa-clipboard-check", text: "Gather post-interview evaluations and alignment reviews" },
        { icon: "fas fa-vote-yea", text: "Support final candidate ranking & hiring decision audits" }
      ]
    },
    {
      id: 4,
      num: "05",
      title: "Board & Optimize",
      desc: "We assist with final interviews, placement contracts, onboarding support, and continuous candidate feedback.",
      icon: "fas fa-handshake",
      themeColor: "#d97706",
      bgLight: "#fffbeb",
      items: [
        { icon: "fas fa-user-plus", text: "Coordinate final onboarding schedules and check-ins" },
        { icon: "fas fa-comments-dollar", text: "Assist with salary benchmarking and offer negotiation" },
        { icon: "fas fa-briefcase", text: "Manage placement contract signing and onboarding support" },
        { icon: "fas fa-sync-alt", text: "Integrate candidate feedback loops for first 90 days" },
        { icon: "fas fa-award", text: "Conduct quarterly client reviews for retention audits" }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section (Image 1 layout inspiration) */}
      {/* Hero Section (Eleven Degrees layout inspiration) */}
      <section 
        className="hero-banner-wrap pt-180 pb-120 position-relative overflow-hidden d-flex align-items-center"
        style={{
          minHeight: '90vh',
          backgroundImage: 'linear-gradient(180deg, rgba(8, 12, 24, 0.92) 0%, rgba(8, 12, 24, 0.78) 100%), url("/assets/img/banner/luxury_office_workspace.png")',
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
                <motion.span variants={fadeInUp} className="mb-4">
                  {" "}
                </motion.span>
                
                <motion.h1 
                  variants={fadeInUp} 
                  className="title fw-bold hero-title mb-4 mt-5" 
                  style={{ fontSize: 'calc(1.8rem + 2.5vw)', fontWeight: '800', lineHeight: '1.1' }}
                >
                  Leading Sourcing & <br />
                  <span style={{ color: 'var(--accent-emerald)' }}>Hiring Innovation</span> Across India
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp} 
                  className="mb-5 hero-desc" 
                  style={{ fontSize: '18px', maxWidth: '560px', lineHeight: '1.7' }}
                >
                  Accelerate your organization's growth with elite, multi-stage vetted technical and executive professionals. We connect high-performing software engineers, finance leaders, and operational specialists with top-tier enterprises across India through customized strategic sourcing campaigns.
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
                  variants={floatAnimation}
                  animate="animate"
                  className="hero-glass-card p-4 text-start d-inline-block shadow-lg"
                  style={{ minWidth: '260px', transform: 'rotate(-2deg)' }}
                >
                  <span className="text-white-50 d-block text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>Sourcing Stats</span>
                  <h4 className="fw-bold mb-1 mt-1">+500 Positions</h4>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Pre-vetted engineering & non-IT staff</p>
                </motion.div>

                {/* Floating Widget 2 */}
                <motion.div 
                  variants={floatReverse}
                  animate="animate"
                  className="hero-glass-card p-4 text-start d-inline-block shadow-lg"
                  style={{ minWidth: '280px', transform: 'rotate(1deg)' }}
                >
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="d-block" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
                    <span className="fw-bold" style={{ fontSize: '14px' }}>Interview Vetted</span>
                  </div>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Rigorous evaluation for technical competencies and leadership values.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient background glows */}
        <div style={{ position: 'absolute', bottom: '-10%', left: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.08)', filter: 'blur(100px)', pointerEvents: 'none' }}></div>
      </section>

      <ClientMarquee />

      {/* Know Our Company Stats */}
      <section className="about-stats-area py-100 border-bottom border-light bg-section-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Side Graphics */}
            <div className="col-lg-6 mb-5 mb-lg-0 text-start">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="position-relative pr-lg-4"
              >
                <img 
                  src="/assets/img/about/our-company-1.png" 
                  alt="Corporate meeting" 
                  className="img-fluid w-100" 
                  style={{ borderRadius: '16px', border: '1px solid var(--border-color)', height: '420px', objectFit: 'cover' }} 
                  onError={(e) => e.target.src = "https://placehold.co/600x420/1e293b/ffffff?text=Corporate+Consulting"} 
                />
                
                {/* Year counter overlay */}
                <div 
                  className="glass-card p-4 text-center position-absolute"
                  style={{ bottom: '-20px', right: '20px', minWidth: '160px' }}
                >
                  <h3 className="fw-bold text-dark mb-0" style={{ fontSize: '36px' }}>4+</h3>
                  <span className="text-muted" style={{ fontSize: '13px' }}>Years Sourcing Expertise</span>
                </div>
              </motion.div>
            </div>

            {/* Content Area */}
            <div className="col-lg-6 text-start">
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
                className="pl-lg-4"
              >
                <motion.span variants={fadeInUp} className="section-tag"><i className="fas fa-info-circle"></i> About PS Services</motion.span>
                <motion.h2 variants={fadeInUp} className="title mb-4 fw-bold">Delivering Quality Hires Through Advanced Sourcing</motion.h2>
                <motion.p variants={fadeInUp} className="text-muted mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  Point to Source Services (PS Services) is a premier recruitment consulting and strategic sourcing firm established in 2022. We maintain a steadfast commitment to bridging the critical talent gap for growing startups and established enterprises across India. By combining data-driven candidate mapping with meticulous technical vetting, we ensure every placement drives immediate operational value.
                </motion.p>
                
                {/* Micro highlights grid */}
                <motion.div variants={fadeInUp} className="row mt-4">
                  <div className="col-6 mb-3">
                    <div className="glass-card p-3 h-100">
                      <h5 className="text-dark fw-bold mb-2">+95%</h5>
                      <span className="text-muted" style={{ fontSize: '13px' }}>Retention Success</span>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="glass-card p-3 h-100">
                      <h5 className="text-dark fw-bold mb-2">10+ Days</h5>
                      <span className="text-muted" style={{ fontSize: '13px' }}>Average Turnaround</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: "-100px" }}
        className="sourcing-process-area py-100 position-relative overflow-hidden bg-section-sky" 
      >
        {/* Decorative Dot Patterns */}
        <div className="sourcing-dots-pattern sourcing-dots-top-right"></div>
        <div className="sourcing-dots-pattern sourcing-dots-bottom-left"></div>

        <div className="container position-relative" style={{ zIndex: 5 }}>
          <div className="row justify-content-center mb-5">
            <motion.div variants={fadeInUp} className="col-lg-8 text-center">
              <div className="d-flex justify-content-center mb-3">
                <span className="section-tag m-0">
                  <i className="fas fa-users-cog"></i> Our Sourcing Process
                </span>
              </div>
              <h2 className="title fw-bold" style={{ fontSize: 'calc(1.8rem + 1.2vw)', letterSpacing: '-0.025em' }}>How We Find Your Perfect Talent</h2>
              <p className="text-muted mt-2" style={{ fontSize: '15px' }}>A proven 4-step process to connect you with exceptional talent, faster.</p>
            </motion.div>
          </div>

          <div className="row align-items-stretch">
            {/* Timeline list */}
            <motion.div variants={fadeInUp} className="col-lg-5 text-start mb-5 mb-lg-0 d-flex flex-column">
              <div className="sourcing-timeline h-100 d-flex flex-column justify-content-between">
                {processSteps.map((step) => {
                  const isActive = activeStep === step.id;
                  return (
                    <div 
                      key={step.id} 
                      className={`sourcing-timeline-item ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveStep(step.id)}
                    >
                      <div className="sourcing-timeline-node">
                        {step.num}
                      </div>
                      <div className="sourcing-timeline-card">
                        <div className="d-flex align-items-center gap-3">
                          <div 
                            className="sourcing-card-icon-wrap" 
                            style={{ 
                              background: isActive ? step.bgLight : 'rgba(241, 245, 249, 0.8)', 
                              color: isActive ? step.themeColor : '#94a3b8' 
                            }}
                          >
                            <i className={step.icon}></i>
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="fw-bold mb-1" style={{ fontSize: '16px', color: isActive ? 'var(--text-light)' : '#64748b' }}>
                              {step.title}
                            </h5>
                            <p className="text-muted mb-0" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Dynamic Visual Mockup side */}
            <motion.div variants={fadeInUp} className="col-lg-7 d-flex flex-column justify-content-between">
              {/* Illustration Card */}
              <div className="active-stage-card p-0 overflow-hidden" style={{ height: '360px' }}>
                <img 
                  src={
                    activeStep === 0 ? "/assets/img/process/process_assess.png" :
                    activeStep === 1 ? "/assets/img/process/process_strategize.png" :
                    activeStep === 2 ? "/assets/img/process/process_execute.png" :
                    activeStep === 3 ? "/assets/img/process/process_execute.png" :
                    "/assets/img/process/process_optimize.png"
                  }
                  alt={processSteps[activeStep].title}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', transition: 'all 0.5s ease' }}
                />
              </div>
              
              {/* Active Stage Details Card */}
              <div className="active-stage-card text-start flex-grow-1 mt-4 d-flex flex-column justify-content-between">
                <div>
                  <span className="active-stage-badge">
                    <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#137333', marginRight: '6px' }}></span>
                    Active Stage
                  </span>
                  
                  <h3 className="text-dark fw-bold mb-3" style={{ fontSize: '24px' }}>
                    {processSteps[activeStep].num}. {processSteps[activeStep].title}
                  </h3>
                  <p className="text-muted mb-4" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                    {processSteps[activeStep].desc}
                  </p>
                  
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    {processSteps[activeStep].items.map((item, idx) => (
                      <li key={idx} className="d-flex align-items-center gap-3">
                        <div className="active-stage-list-icon" style={{ background: processSteps[activeStep].themeColor }}>
                          <i className={item.icon}></i>
                        </div>
                        <span className="fw-500 text-dark" style={{ fontSize: '14.5px' }}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sourcing features horizontal bar */}
          <motion.div variants={fadeInUp} className="row mt-5">
            <div className="col-12">
              <div className="sourcing-features-bar d-flex justify-content-between align-items-center flex-wrap gap-4 text-start">
                <div className="sourcing-feature-item">
                  <div className="sourcing-feature-icon-circle" style={{ color: '#059669' }}>
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div>
                    <h6 className="text-white fw-bold mb-0" style={{ fontSize: '14.5px' }}>Quality First</h6>
                    <span className="text-muted-white" style={{ fontSize: '12px' }}>Rigorous screening for top-tier talent</span>
                  </div>
                </div>
                
                <div className="sourcing-feature-item">
                  <div className="sourcing-feature-icon-circle" style={{ color: '#2563eb' }}>
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <div>
                    <h6 className="text-white fw-bold mb-0" style={{ fontSize: '14.5px' }}>Faster Hiring</h6>
                    <span className="text-muted-white" style={{ fontSize: '12px' }}>Reduce time-to-hire with our proven process</span>
                  </div>
                </div>
                
                <div className="sourcing-feature-item">
                  <div className="sourcing-feature-icon-circle" style={{ color: '#8b5cf6' }}>
                    <i className="fas fa-users"></i>
                  </div>
                  <div>
                    <h6 className="text-white fw-bold mb-0" style={{ fontSize: '14.5px' }}>Expert Sourcing</h6>
                    <span className="text-muted-white" style={{ fontSize: '12px' }}>Access to deep & active talent communities</span>
                  </div>
                </div>
                
                <div className="sourcing-feature-item">
                  <div className="sourcing-feature-icon-circle" style={{ color: '#d97706' }}>
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div>
                    <h6 className="text-white fw-bold mb-0" style={{ fontSize: '14.5px' }}>Long-term Partnership</h6>
                    <span className="text-muted-white" style={{ fontSize: '12px' }}>Ongoing support even after placement</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Case Study Portfolio */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: "-100px" }}
        className="portfolio-case-studies py-100 border-bottom border-light bg-section-white"
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <motion.div variants={fadeInUp} className="col-lg-8 text-center">
              <span className="section-tag">
                <i className="fas fa-briefcase"></i> Case Studies
              </span>
              <h2 className="title fw-bold mt-2">Sourcing Excellence In Practice</h2>
              <p className="text-muted mx-auto mt-2" style={{ maxWidth: '600px', fontSize: '15px' }}>
                Real-world recruitment achievements showing how we scale technology, leadership, and operational teams across India.
              </p>
            </motion.div>
          </div>

          <motion.div variants={staggerContainer} className="row">
            {[
              { 
                title: "Fintech Scale-up Architecture Unit", 
                category: "IT Recruitment", 
                stat: "12 Roles in 15 Days",
                challenge: "A hyper-growth fintech startup needed to build a core 12-person backend engineering and DevOps unit in just 18 days to support their Series B transaction processing scale.",
                strategy: "We mobilized our pre-vetted developer network in India, screening 400+ profiles and conducting 48 technical evaluations using automated assessments and peer interviews.",
                impact: "Delivered all 12 senior engineering placements on day 15. The team successfully migrated the legacy monolith to microservices, reducing average time-to-hire by 45% and lowering cloud spend by 30%.",
                img: "/assets/img/home/our-portfolio-home__item-1.png", 
                fallback: "https://placehold.co/400x260/1e293b/ffffff?text=IT+Scaling" 
              },
              { 
                title: "Banking Executive Transformation", 
                category: "Executive Search", 
                stat: "Filled in 42 Days",
                challenge: "A national retail bank required a discreet search for a Chief Operating Officer (COO) to lead a legacy-to-digital IT modernization and core platform migration.",
                strategy: "Our executive advisory desk executed a targeted mapping campaign across fintech and tier-1 banking institutions, identifying 35 confidential leaders with modernization credentials.",
                impact: "Successfully placed the COO in 42 days. The new leader launched a digital-first mobile app onboarding 1.2M users in 10 months and reduced operational overhead by 22%.",
                img: "/assets/img/home/our-portfolio-home__item-2.png", 
                fallback: "https://placehold.co/400x260/2563eb/ffffff?text=Executive" 
              },
              { 
                title: "Enterprise Institutional Staffing", 
                category: "Staffing Support", 
                stat: "40+ Key Leaders",
                challenge: "A premier academic network scaling across 12 campuses faced high turnover and slow fills for critical administrative registrars, deans, and division heads.",
                strategy: "We built a customized sourcing funnel and standardized vetting checklists for academic leadership, conducting combined behavioral and credential audits.",
                impact: "Filled 40+ key leadership roles within 60 days. Maintained a 98% two-year candidate retention rate and reduced external recruiting agency spend by 65%.",
                img: "/assets/img/home/our-portfolio-home__item-3.png", 
                fallback: "https://placehold.co/400x260/0d9488/ffffff?text=Staffing" 
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="col-lg-4 col-md-6 mb-4 text-start">
                <div className="glass-card overflow-hidden h-100 d-flex flex-column position-relative shadow-sm" style={{ border: '1px solid rgba(15, 23, 42, 0.08)', borderRadius: '16px' }}>
                  {/* Floating Key Metric Badge */}
                  <div className="position-absolute" style={{ top: '15px', right: '15px', background: 'rgba(5, 150, 105, 0.95)', color: '#ffffff', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', backdropFilter: 'blur(8px)', zIndex: 10, boxShadow: '0 4px 12px rgba(5,150,105,0.2)' }}>
                    {item.stat}
                  </div>

                  <div className="media" style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={item.img} 
                      className="img-fluid w-100 h-100" 
                      style={{ objectFit: 'cover' }} 
                      alt={item.title} 
                      onError={(e) => e.target.src = item.fallback} 
                    />
                  </div>
                  
                  <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <span className="text-uppercase fw-600 mb-2 d-inline-block px-2 py-1 rounded" style={{ fontSize: '10px', color: 'var(--accent-emerald)', background: 'rgba(5, 150, 105, 0.06)', letterSpacing: '0.08em' }}>{item.category}</span>
                      <h4 className="text-dark fw-bold mb-3 mt-1" style={{ fontSize: '19px', lineHeight: '1.3' }}>{item.title}</h4>
                      
                      <div className="d-flex flex-column gap-3 mb-4" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                        <div>
                          <span className="d-flex align-items-center gap-2 text-dark fw-bold mb-1" style={{ fontSize: '13px' }}>
                            <i className="fas fa-exclamation-circle text-warning"></i> Challenge
                          </span>
                          <p className="text-muted mb-0">{item.challenge}</p>
                        </div>
                        <div>
                          <span className="d-flex align-items-center gap-2 text-dark fw-bold mb-1" style={{ fontSize: '13px' }}>
                            <i className="fas fa-bullseye text-primary"></i> Sourcing Strategy
                          </span>
                          <p className="text-muted mb-0">{item.strategy}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto p-3" style={{ background: 'rgba(5, 150, 105, 0.04)', borderLeft: '4px solid var(--accent-emerald)', borderRadius: '0 8px 8px 0' }}>
                      <span className="d-flex align-items-center gap-2 text-success fw-bold mb-1" style={{ fontSize: '13px' }}>
                        <i className="fas fa-chart-line"></i> Impact / Business Value
                      </span>
                      <p className="text-dark mb-0 fw-500" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>{item.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Professional Sourcing Team (Image 3 arch shaped frames with colorful backdrops) */}
      {/* Professional Sourcing Team (Premium White Card Layout) */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: "-100px" }}
        className="team-premium-section" 
      >
        <div className="container position-relative" style={{ zIndex: 5 }}>
          {/* Split Header layout matching reference image */}
          <div className="row justify-content-between align-items-end mb-5 text-start">
            <motion.div variants={fadeInUp} className="col-lg-6 mb-4 mb-lg-0">
              <span className="team-section-badge">
                <i className="fas fa-users"></i> Meet Our Team
              </span>
              <h2 className="title fw-bold mt-2 mb-0" style={{ fontSize: 'calc(1.8rem + 1vw)', letterSpacing: '-0.02em', lineHeight: '1.2', color: '#0f172a' }}>
                Bringing Passion and <br />Expertise Together
              </h2>
              <div className="team-heading-bar"></div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col-lg-5">
              <p className="text-muted mb-0" style={{ fontSize: '15px', lineHeight: '1.75' }}>
                Welcome to our team page, where you get a glimpse into the heart and soul of our organization. We are a diverse group of recruitment experts, each bringing unique talents, perspectives, and industry knowledge to the table.
              </p>
            </motion.div>
          </div>

          {/* Team Grid Cards */}
          <motion.div 
            variants={staggerContainer}
            className="row justify-content-center text-start g-4"
          >
            {homeTeamMembers.map((member, index) => (
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
                      <h3 className="team-member-name mb-3">{member.name}</h3>
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
                  {homeValuesItems.map((val, vIdx) => (
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
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="testimonials-area py-100 border-bottom border-light bg-section-white"
      >
        <div className="container">
          <TestimonialCarousel />
        </div>
      </motion.section>

      {/* CTA section with Contact Form (Lets Work Together) */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: "-100px" }}
        className="cta-contact-area py-100 position-relative overflow-hidden bg-section-sky"
      >
        
        <div className="container position-relative" style={{ zIndex: 5 }}>
          {/* Header Banner - Redesigned & Elevated */}
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

export default Home;
