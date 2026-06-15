import React from 'react';

const clientLogos = [
  "/assets/clients_processed/client_1.png",
  "/assets/clients_processed/client_2.png",
  "/assets/clients_processed/client_3.png",
  "/assets/clients_processed/client_4.png",
  "/assets/clients_processed/client_5.png",
  "/assets/clients_processed/client_6.png",
  "/assets/clients_processed/client_7.png",
  "/assets/clients_processed/client_9.png",
  "/assets/clients_processed/client_10.png",
  "/assets/clients_processed/client_11.png",
  "/assets/clients_processed/client_12.png",
  "/assets/clients_processed/client_13.png",
  "/assets/clients_processed/client_14.png",
  "/assets/clients_processed/client_15.png",
  "/assets/clients_processed/client_16.png",
  "/assets/clients_processed/client_17.png",
  "/assets/clients_processed/client_18.png"
];

const ClientMarquee = () => {
  return (
    <section className="client-marquee-section py-1 bg-section-white" style={{ borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
      <div className="client-marquee-container">
        <div className="client-marquee-track">
          {clientLogos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="client-marquee-logo-wrapper">
              <img 
                src={logo} 
                alt={`Client Partner ${index + 1}`} 
                className="client-marquee-logo" 
                onError={(e) => {
                  e.target.src = `https://placehold.co/120x40/ffffff/059669?text=Partner+${index + 1}`;
                }}
              />
            </div>
          ))}
          {clientLogos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="client-marquee-logo-wrapper">
              <img 
                src={logo} 
                alt={`Client Partner Duplicate ${index + 1}`} 
                className="client-marquee-logo" 
                onError={(e) => {
                  e.target.src = `https://placehold.co/120x40/ffffff/059669?text=Partner+${index + 1}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
