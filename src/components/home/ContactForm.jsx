import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faEnvelope, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a backend API
    alert('Thank you for contacting us. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact section">
      <div className="container">
        <div className="section-title text-center">
          <h3>Get In Touch</h3>
          <h2>Let's Build Your Future Together</h2>
          <p className="section-subtitle">Whether you're starting your career or expanding your staff, WorkFly is here to bridge the gap.</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Your Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">
            <FontAwesomeIcon icon={faPaperPlane} /> Submit Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm; 