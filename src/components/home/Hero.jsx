import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section className="hero">
      {/* Animated floating shapes for interactivity */}
      <div className="hero-shape one"></div>
      <div className="hero-shape two"></div>
      <div className="container">
        <div className="hero-content">
          <h2>Your Gateway to</h2>
          <h1>Career Success & Top Talent</h1>
          <p>Empowering job seekers with the right opportunities & helping businesses find the perfect candidates.</p>
          <div className="hero-buttons">
            <a href="tel:+917066001076" className="btn btn-secondary">
              <FontAwesomeIcon icon={faPhone} /> CALL NOW
            </a>
            <Link to="/contact" className="btn btn-primary">
              <FontAwesomeIcon icon={faPaperPlane} /> REQUEST CALLBACK
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 