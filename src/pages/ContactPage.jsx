import ContactForm from '../components/home/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

function ContactPage() {
  return (
    <>
      {/* Hero Banner for Contact Page */}
      <section className="page-banner section" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="text-center">
            <h1>Contact Us</h1>
            <p className="lead">Reach out to discuss how we can help with your recruitment needs</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title text-center">
            <h3>Our Details</h3>
            <h2>How To Reach Us</h2>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h4>Visit Us</h4>
              <p>Office no 605 sixth floor<br/>
              Navale Icon near Navale Bridge<br/>
              Vadgaon BK, Pune 411041</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h4>Call Us</h4>
              <p>Phone: +91 7066001076</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h4>Email Us</h4>
              <p>joinworkfly@gmail.com</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h4>Working Hours</h4>
              <p>Monday - Friday: 9 AM - 6 PM<br/>
              Saturday: 10 AM - 2 PM<br/>
              Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section">
        <div className="container">
          <div className="section-title text-center">
            <h3>Our Location</h3>
            <h2>Find Us On The Map</h2>
          </div>
          
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.085436356674!2d73.84501847475803!3d18.477174982614683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2956df5e6f0f1%3A0x7077f358af0e31c5!2sNavale%20Bridge%2C%20Wadgaon%20Budruk%2C%20Narhe%2C%20Pune%2C%20Maharashtra%20411041!5e0!3m2!1sen!2sin!4v1709705012345!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen="" 
              loading="lazy" 
              title="WorkFly Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
}

export default ContactPage; 