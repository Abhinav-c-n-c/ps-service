import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const teamDatabase = {
  "pradeep kumar": {
    name: "Pradeep Kumar",
    position: "Founder & CEO",
    specialty: "Business Consulting & Sourcing Strategy",
    image: "/assets/img/team/pradeep.png",
    description: "Pradeep Kumar is the visionary Founder and CEO of Point to Source Services (PS Services). Under his hands-on leadership, the firm has consistently delivered elite-level recruitment and headcount mapping strategies for startups and major enterprises across India. Pradeep specializes in executive search, payroll compliance frameworks, SLA alignment, and organizational capability audits, ensuring every hire translates to long-term business value.",
    points: [
      "Advanced capability in C-suite headhunting, executive search, and leadership onboarding.",
      "Pioneer of key vetting frameworks that reduce early-stage placement attrition rates by 40%.",
      "Advisor on payroll compliance, SLA integration, and talent market intelligence across India."
    ],
    phone: "+91 88505 68104",
    website: "psservices.com",
    gender: "Male",
    email: "thepsservices@gmail.com",
    nationality: "Indian",
    address: "H No - 6/2, Sethi Enclave, Mohan Garden, Street No - 2, Uttam Nagar, West Delhi, Delhi - 110059",
    skills: [
      { name: "Executive Search", level: 98 },
      { name: "Sourcing Strategy", level: 95 },
      { name: "HR Advisory", level: 90 }
    ],
    education: [
      { step: "1st", title: "Master of Business Administration", period: "2015 - 2017" },
      { step: "2nd", title: "Bachelor of Commerce", period: "2012 - 2015" }
    ]
  },
  "pradeep kanojia": {
    name: "Pradeep Kumar",
    position: "Founder & CEO",
    specialty: "Business Consulting & Sourcing Strategy",
    image: "/assets/img/team/pradeep.png",
    description: "Pradeep Kumar is the visionary Founder and CEO of Point to Source Services (PS Services). Under his hands-on leadership, the firm has consistently delivered elite-level recruitment and headcount mapping strategies for startups and major enterprises across India. Pradeep specializes in executive search, payroll compliance frameworks, SLA alignment, and organizational capability audits, ensuring every hire translates to long-term business value.",
    points: [
      "Advanced capability in C-suite headhunting, executive search, and leadership onboarding.",
      "Pioneer of key vetting frameworks that reduce early-stage placement attrition rates by 40%.",
      "Advisor on payroll compliance, SLA integration, and talent market intelligence across India."
    ],
    phone: "+91 88505 68104",
    website: "psservices.com",
    gender: "Male",
    email: "thepsservices@gmail.com",
    nationality: "Indian",
    address: "H No - 6/2, Sethi Enclave, Mohan Garden, Street No - 2, Uttam Nagar, West Delhi, Delhi - 110059",
    skills: [
      { name: "Executive Search", level: 98 },
      { name: "Sourcing Strategy", level: 95 },
      { name: "HR Advisory", level: 90 }
    ],
    education: [
      { step: "1st", title: "Master of Business Administration", period: "2015 - 2017" },
      { step: "2nd", title: "Bachelor of Commerce", period: "2012 - 2015" }
    ]
  },
  "shweta kumari": {
    name: "Shweta Kumari",
    position: "Sr HR Manager",
    specialty: "Talent Acquisition & Sourcing Strategy",
    image: "/assets/img/team/shweta.png",
    description: "Shweta Kumari is the Senior HR Manager at Point to Source Services (PS Services). She possesses extensive expertise in talent acquisition, workforce planning, and developing customized sourcing strategies for growing start-ups and enterprise-level businesses. Shweta is dedicated to streamlining hiring funnels, auditing skill alignment, and ensuring that every candidate is thoroughly pre-vetted to deliver maximum immediate business value.",
    points: [
      "Expertise in full-lifecycle recruitment and managing large-scale staffing campaigns.",
      "Specializes in talent mapping, skills assessment, and cultural alignment audits.",
      "Committed to enhancing candidate experience and maintaining high placement retention rates."
    ],
    phone: "+91 88505 68104",
    website: "psservices.com",
    gender: "Female",
    email: "thepsservices@gmail.com",
    nationality: "Indian",
    address: "H No - 6/2, Sethi Enclave, Mohan Garden, Street No - 2, Uttam Nagar, West Delhi, Delhi - 110059",
    skills: [
      { name: "Talent Sourcing", level: 96 },
      { name: "Client Relations", level: 93 },
      { name: "Candidate Vetting", level: 95 }
    ],
    education: [
      { step: "1st", title: "Master of Business Administration (HR)", period: "2018 - 2020" },
      { step: "2nd", title: "Bachelor of Business Administration", period: "2015 - 2018" }
    ]
  }
};

const defaultMember = {
  name: "Richard Paul",
  position: "Business Consulting Partner",
  specialty: "Strategic Advisor",
  image: "https://placehold.co/600x600/1e293b/ffffff?text=Richard+Paul",
  description: "Richard Paul is a veteran business consulting advisor with over a decade of corporate structure planning. He specializes in process optimization, budget planning, and team capability scaling.",
  points: [
    "Expert advisor for international trade operations.",
    "Certified trainer in process analysis and risk assessment."
  ],
  phone: "+123 556 8824",
  website: "psservices.com",
  gender: "Male",
  email: "thepsservices@gmail.com",
  nationality: "American",
  address: "2972 Westheimer Rd, Illinois 85486",
  skills: [
    { name: "Talent Sourcing", level: 80 },
    { name: "Candidate Vetting", level: 85 },
    { name: "Strategic Advisory", level: 90 }
  ],
  education: [
    { step: "1st", title: "Business Expert", period: "2022 - Present (Consulter)" },
    { step: "2nd", title: "Experience Employee", period: "2015 - 2021 (Company)" }
  ]
};

const TeamDetails = () => {
  const [searchParams] = useSearchParams();
  const nameParam = searchParams.get('name') || '';
  const searchKey = nameParam.toLowerCase().trim();

  // Match member from database or fallback to default
  const member = teamDatabase[searchKey] || defaultMember;

  return (
    <>
      <SEO
        title={`${member.name} – ${member.position} | PS Services Consultant`}
        description={`${member.name} is a ${member.position} at PS Services, specialising in ${member.specialty}. ${member.description ? member.description.slice(0, 100) + '...' : 'Expert staffing consultant at PS Services, Delhi.'}`}
        keywords={`${member.name}, ${member.position}, PS Services consultant, recruitment expert Delhi, HR specialist India, staffing advisor`}
        canonical="/team-details"
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: member.name,
            jobTitle: member.position,
            description: member.description,
            email: member.email,
            telephone: member.phone,
            image: member.image,
            worksFor: { '@type': 'Organization', name: 'Point To Source Services', url: 'https://psservices.in' }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://psservices.in' },
              { '@type': 'ListItem', position: 2, name: 'Team', item: 'https://psservices.in/team' },
              { '@type': 'ListItem', position: 3, name: member.name, item: `https://psservices.in/team-details?name=${encodeURIComponent(member.name)}` }
            ]
          }
        ]}
      />
      <section 
        className="hero-banner-wrap pt-180 pb-120 position-relative overflow-hidden d-flex align-items-center"
        style={{
          minHeight: '65vh',
          backgroundImage: 'linear-gradient(180deg, rgba(8, 12, 24, 0.92) 0%, rgba(8, 12, 24, 0.78) 100%), url("/assets/img/banner/team_details_banner.png")',
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
                  Consultant <br />
                  <span style={{ color: 'var(--accent-emerald)' }}>Professional Profile</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp} 
                  className="mb-5 hero-desc" 
                  style={{ fontSize: '18px', maxWidth: '560px', lineHeight: '1.7' }}
                >
                  Learn more about the credentials, sourcing background, and skills of {member.name}, our professional advisor at Point to Source Services.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="theme-btn btn-emerald text-decoration-none">
                    Book an Appointment <i className="fas fa-arrow-right ml-1" style={{ fontSize: '12px' }}></i>
                  </Link>
                  <Link to="/team" className="theme-btn btn-white-border text-decoration-none" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.25)' }}>
                    Meet All Advisors
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
                  <span className="text-white-50 d-block text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>Vetting Standards</span>
                  <h4 className="fw-bold mb-1 mt-1">100% Quality</h4>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Elite capability benchmarks</p>
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
                    <span className="fw-bold" style={{ fontSize: '14px' }}>Active Consultation</span>
                  </div>
                  <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>Providing client SLA checks, payroll setups, and screening.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient background glows */}
        <div style={{ position: 'absolute', bottom: '-10%', left: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.08)', filter: 'blur(100px)', pointerEvents: 'none' }}></div>
      </section>

      {/* Consultant Profile Details */}
      <section className="team-details py-100 bg-section-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Profile image with zoom */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative overflow-hidden" style={{ borderRadius: '16px', border: '1px solid var(--border-color)', height: '480px' }}>
                <img 
                  src={member.image} 
                  className="img-fluid w-100 h-100" 
                  style={{ objectFit: 'cover' }} 
                  alt={member.name} 
                  onError={(e) => {
                    e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`;
                  }}
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="col-lg-6 text-start">
              <div className="pl-lg-4">
                <span className="sub-title mb-3">Overview</span>
                <h2 className="title fw-bold mb-3">{member.name}</h2>
                <span className="d-inline-block text-uppercase fw-600 mb-4" style={{ fontSize: '14px', color: 'var(--accent-emerald)', letterSpacing: '0.05em' }}>
                  {member.position}
                </span>

                <p className="text-muted mb-4" style={{ fontSize: '15.5px', lineHeight: '1.7' }}>
                  {member.description}
                </p>

                <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-muted">
                  {member.points.map((pt, i) => (
                    <li key={i} className="d-flex align-items-center gap-2">
                      <i className="fas fa-check-circle text-success" style={{ width: '20px' }}></i>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Grid info container */}
                <div className="glass-card p-4">
                  <h5 className="fw-bold mb-3">Advisory Metadata</h5>
                  <div className="row text-muted" style={{ fontSize: '14px' }}>
                    <div className="col-sm-6 mb-3">
                      <span className="d-block text-muted" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Phone</span>
                      <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="fw-500">{member.phone}</a>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <span className="d-block text-muted" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Email</span>
                      <a href={`mailto:${member.email}`} className="fw-500">{member.email}</a>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <span className="d-block text-muted" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Nationality</span>
                      <span className="fw-500">{member.nationality}</span>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <span className="d-block text-muted" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Address</span>
                      <span className="fw-500">{member.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-12">
              <hr style={{ borderColor: 'var(--border-color)' }} />
            </div>
          </div>

          {/* Skills & Background Details */}
          <div className="row text-start">
            {/* Skills */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <span className="sub-title mb-3">Skills</span>
              <h3 className="fw-bold mb-4">Core Sourcing Competency</h3>
              
              <div className="progress-bar__wrapper mt-4">
                {member.skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <h6 className="fw-bold mb-0">{skill.name}</h6>
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
              </div>
            </div>

            {/* Timeline */}
            <div className="col-lg-6">
              <span className="sub-title mb-3">Timeline</span>
              <h3 className="fw-bold mb-4">Credentials & Background</h3>
 
              <div className="d-flex flex-column gap-3 mt-4">
                {member.education.map((edu, idx) => (
                  <div key={idx} className="glass-card p-3 d-flex align-items-center gap-3">
                    <div 
                      className="d-flex align-items-center justify-content-center bg-success text-dark fw-bold rounded-circle" 
                      style={{ width: '40px', height: '40px', flexShrink: 0 }}
                    >
                      {edu.step}
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1" style={{ fontSize: '15px' }}>{edu.title}</h5>
                      <span className="text-muted" style={{ fontSize: '12px' }}>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
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

export default TeamDetails;
