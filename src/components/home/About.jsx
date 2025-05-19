import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faUserTie, faBuilding, faClock, faCogs } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section className="about section bg-pattern">
      <div className="container">
        <div className="section-title text-center">
          <h3>We are WorkFly</h3>
          <h2>Your Trusted Job Placement Partner</h2>
          <p className="section-subtitle">
            Connecting talented professionals with forward-thinking companies for mutual growth and success
          </p>
        </div>
        
        <div className="about-content">
          <p className="text-center">
            A <strong>leading job consultancy in Pune</strong>, committed to bridging the gap between <strong>job seekers</strong> and <strong>employers</strong>. 
            Whether you are an individual looking for <strong>career growth</strong> or a company searching for <strong>qualified candidates</strong>, 
            our <strong>placement consultancy</strong> ensures the right match through expert recruitment solutions.
          </p>
          
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h4>Comprehensive Placement</h4>
              <p>Get interview opportunities across various industries, including IT and MIDC sectors.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <h4>Expert Career Guidance</h4>
              <p>Receive HR round counseling and resume-building support from industry professionals.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <h4>Strong Employer Network</h4>
              <p>Connect with top companies through our extensive recruitment network in Pune.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h4>Two-Month Support</h4>
              <p>We work closely with job seekers for up to two months to help them secure the right position.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faCogs} />
              </div>
              <h4>Custom Hiring Solutions</h4>
              <p>Companies can leverage our placement services to fill open roles efficiently and effectively.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 