import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shape one"></div>
      <div className="footer-shape two"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logos/logo.png" alt="WorkFly Logo" className="footer-logo-img" />
            <p>From job placement to hiring solutions, WorkFly is dedicated to connecting the right talent with the right opportunities. Let's build your future together.</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              </a>
            </div>
          </div>
          
          <div className="footer-links-container">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-links-container">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services/recruitment">Recruitment</Link></li>
              <li><Link to="/services/career-guidance">Career Guidance</Link></li>
              <li><Link to="/services/interview-prep">Interview Preparation</Link></li>
              <li><Link to="/services/resume-building">Resume Building</Link></li>
            </ul>
          </div>
          
          <div className="footer-links-container">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>Copyright © {new Date().getFullYear()} WorkFly. Website Designed & Development by Digivik Business Solution.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 