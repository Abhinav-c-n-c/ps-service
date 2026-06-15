import React, { useState } from 'react';

const ContactForm = ({ showHeader = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus({ type: 'error', message: 'Name and E-mail are required!' });
      return;
    }

    setStatus({ type: 'success', message: 'Redirecting to WhatsApp for consultation...' });

    // Format WhatsApp message
    const waNumber = "918850568104";
    let waText = `Hello PS Services, I would like to get in touch:%0A%0A`;
    waText += `*Name:* ${encodeURIComponent(formData.name)}%0A`;
    waText += `*Email:* ${encodeURIComponent(formData.email)}%0A`;
    waText += `*Subject:* ${encodeURIComponent(formData.subject || 'Contact Inquiry')}%0A`;
    waText += `*Message:* ${encodeURIComponent(formData.message || 'N/A')}`;

    const url = `https://wa.me/${waNumber}?text=${waText}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus({ type: '', message: '' });
    }, 1200);
  };

  return (
    <div className="contact-form-modern-card p-4 p-md-5">
      {showHeader && (
        <div className="contact-form__header mb-4 text-start">
          <span className="sub-title mb-2">Get In Touch</span>
          <h3 className="title text-dark">Free Consultation</h3>
        </div>
      )}

      {status.message && (
        <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} text-start mb-4`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="text-start">
        <div className="row">
          {/* Name */}
          <div className="col-md-6 mb-3">
            <div className="form-group-custom">
              <label htmlFor="name" className="form-label-custom">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="form-control-custom"
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6 mb-3">
            <div className="form-group-custom">
              <label htmlFor="email" className="form-label-custom">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="example@gmail.com" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="form-control-custom"
              />
            </div>
          </div>
        </div>

        {/* Subject */}
        <div className="mb-3">
          <div className="form-group-custom">
            <label htmlFor="subject" className="form-label-custom">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="How can we help you?" 
              value={formData.subject}
              onChange={handleChange}
              className="form-control-custom"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-4">
          <div className="form-group-custom">
            <label htmlFor="message" className="form-label-custom">Leave us messages</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Write your message here..." 
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="form-control-custom"
            ></textarea>
          </div>
        </div>

        <button type="submit" className="theme-btn btn-send-messages">
          Send Messages
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
