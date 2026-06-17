import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Rashtradeep Pachauri",
    position: "CEO: SP Infocom",
    image: "/assets/img/testimonial/Rasthradeep.jpg",
    rating: 5,
    text: "The efficiency and speed with which Point To Source Services operates have significantly streamlined our hiring process. Their proactive approach, combined with a robust screening and vetting process, is unmatched."
  },
  {
    id: 2,
    name: "Madhuri Sasane",
    position: "Sr. TA: Persistent Systems Ltd.",
    image: "/assets/img/testimonial/Madhuri sasane.jpg",
    rating: 5,
    text: "The team provided outstanding service from start to finish. Their expertise in the field is evident, and their ability to understand our unique needs and provide customized solutions has been incredibly beneficial."
  },
  {
    id: 3,
    name: "Mohit more",
    position: "Senior HR: Tech Unique Pvt Ltd",
    image: "/assets/img/testimonial/Mohit more.jpg",
    rating: 5,
    text: "POINT TO SOURCE SERVICE (PS SERVICES) delivered outstanding results by helping us fill a crucial Sr. Java Developer position within a tight limited timeframe. Pradeep's expertise, dedication, and proactive communication."
  },
  {
    id: 4,
    name: "Kriti Barman",
    position: "TA : Calsoft Inc",
    image: "/assets/img/testimonial/Kriti.jpg",
    rating: 5,
    text: "Point To Source Service (PS Services) provides excellent service. Your team’s knowledge and ability to satisfy our specific requirements with tailored solutions have been priceless. We appreciate your attention and hard work."
  },
  {
    id: 5,
    name: "Neelanjan Sarkar",
    position: "Sr Human Resource : Skyselect",
    image: "/assets/img/testimonial/neelanjan.png",
    rating: 5,
    text: "I have had the privilege of working with Point to Source Services, and I must say their professionalism and dedication to excellence are truly remarkable. Under the leadership of Pradeep Kumar, the agency has consistently demonstrated a deep understanding of recruitment needs, delivering top-quality talent with efficiency and care. Pradeep’s vision, integrity, and hands-on approach make the entire process seamless and trustworthy. His ability to connect the right people with the right opportunities reflects not only his expertise but also his genuine passion for helping businesses grow and individuals succeed. Point to Source Services stands out for its reliability, personalized attention, and commitment to building long-term relationships. I wholeheartedly recommend them to anyone seeking a recruitment partner who goes above and beyond expectations."
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-section-container">
      {/* Title Header */}
      <div className="text-center mb-5">
        <span className="sub-title mb-3">Client Reviews</span>
        <h2 className="title fw-bold text-dark mt-2">What Clients Say About Us</h2>
        <p className="text-muted mx-auto mt-2" style={{ maxWidth: '580px', fontSize: '15px' }}>
          Hear directly from corporate hiring managers and HR leads who have scaled their development teams with PS Services.
        </p>
      </div>

      {/* Static Reviews Grid */}
      <div className="row justify-content-center">
        {testimonialsData.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 mb-5 d-flex">
            <div className={`glass-card testimonial-jumbled-card w-100 p-4 p-md-5 text-start d-flex flex-column justify-content-between testimonial-card-rotate-${item.id}`}>
              {/* Quote Icon */}
              <div className="quote-icon-top">
                <i className="fas fa-quote-right"></i>
              </div>
              
              {/* Top: Quote and text */}
              <div className="flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="stars">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <i key={i} className="fas fa-star text-warning" style={{ fontSize: '13px', marginRight: '4px' }}></i>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-body-text mb-4">
                    <p className="mb-0" style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      "{item.text}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom: Reviewer Identity */}
              <div className="testimonial-footer-identity border-top pt-3 mt-3 d-flex align-items-center gap-3">
                <div className="media overflow-hidden" style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid rgba(16, 185, 129, 0.25)', flexShrink: 0 }}>
                  <img 
                    src={item.image} 
                    className="img-fluid w-100 h-100" 
                    alt={item.name} 
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    onError={(e) => {
                      e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${item.name}`;
                    }}
                  />
                </div>
                <div>
                  <h5 className="mb-0 fw-bold text-dark" style={{ fontSize: '15px' }}>{item.name}</h5>
                  <span className="text-muted" style={{ fontSize: '12px' }}>{item.position}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;

