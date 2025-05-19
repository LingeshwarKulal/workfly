import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Animated floating shapes for interactivity */}
      <div className="header-shape one"></div>
      <div className="header-shape two"></div>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo-link">
            <img src="/logos/logo.png" alt="WorkFly Logo" className="logo" />
          </Link>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
          
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          
          <div className="call-now">
            <a href="tel:+917066001076" className="btn btn-primary">
              <FontAwesomeIcon icon={faPhone} /> CALL NOW
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
} 