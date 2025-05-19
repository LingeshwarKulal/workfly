import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, faBriefcase, faIndustry, faGraduationCap, 
  faHandshake, faChartLine, faBullseye, faRocket 
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section className="services section">
      <div className="container">
        <div className="section-title text-center">
          <h3>What We Offer</h3>
          <h2>Our Services</h2>
          <p className="section-subtitle">
            We provide specialized services for both employers looking to hire top talent and job seekers aiming for career advancement
          </p>
        </div>
        
        <div className="services-content">
          <div className="services-category">
            <h3>For Employers</h3>
            <div className="service-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <h4>Candidate Sourcing</h4>
                <p>We provide pre-screened, skilled professionals tailored to your specific industry requirements and company culture.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faIndustry} />
                </div>
                <h4>Industry-Specific Hiring</h4>
                <p>From IT and technology to manufacturing and factory sector jobs, we cater to various industries with specialized expertise.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
                <h4>Efficient Recruitment</h4>
                <p>Our streamlined recruitment process ensures you find the right talent quickly, saving you time and resources.</p>
              </div>
            </div>
          </div>
          
          <div className="services-category">
            <h3>For Job Seekers</h3>
            <div className="service-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <h4>Career Growth Guidance</h4>
                <p>We assist both freshers and experienced professionals in navigating the job market and finding the right career path.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <h4>Interview Preparation</h4>
                <p>Get comprehensive coaching for HR and technical interviews with expert counseling tailored to your target role.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faBullseye} />
                </div>
                <h4>Targeted Placement</h4>
                <p>We help candidates secure job placements by connecting them with hiring companies that match their skills and career goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; 