import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, faIndustry, faRocket, faGraduationCap, 
  faHandshake, faBullseye, faBuilding, faBriefcase 
} from '@fortawesome/free-solid-svg-icons';
import Services from '../../components/home/Services';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <>
      {/* Hero Banner for Services Page */}
      <section className="page-banner section" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="container">
          <div className="text-center">
            <h1 style={{ color: 'white', marginBottom: '1.5rem' }}>Tailored Recruitment Solutions for Job Seekers & Companies</h1>
            <p className="lead" style={{ color: 'white', fontSize: '1.25rem' }}>From interview calls to talent acquisition, we do it all for you.</p>
          </div>
        </div>
      </section>

      {/* Introduction Section with the provided content */}
      <section className="section bg-pattern">
        <div className="container">
          <div className="section-title text-center">
            <h3>Who We Are</h3>
            <h2>Connecting Talent with Opportunity</h2>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="content-box">
                <p className="text-center mb-5">
                  At WorkFly, we believe in bridging the gap between skilled professionals and thriving industries. 
                  Whether you're a job seeker looking for placement in Pune or a company searching for the right candidate, 
                  our expert team ensures a seamless recruitment experience. As one of the top recruitment agencies in Pune, 
                  we specialize in personalized career guidance and talent acquisition strategies that drive success.
                </p>
                <p className="text-center">
                  With a strong foothold in the IT sector and MIDC industries, our placement services in Pune 
                  provides access to premier job opportunities and top-tier professionals. Whether you're a fresher 
                  stepping into the job market or a company seeking reliable staffing solutions, WorkFly is here to 
                  support your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Seekers Section */}
      <section className="job-seekers-section section">
        <div className="container">
          <div className="section-title text-center">
            <h3>For Job Seekers</h3>
            <h2>Your Path to Career Success</h2>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="content-box">
                <p className="text-center mb-5">
                  We provide placement assistance for 2 months, ensuring you get multiple interview opportunities 
                  tailored to your skill set and industry preference. Our team helps you with:
                </p>
                
                <div className="seeker-benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <h4>Interview Scheduling</h4>
                    <p>Connecting you with leading companies in IT and MIDC sectors.</p>
                  </div>

                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <h4>HR Round Preparation</h4>
                    <p>Expert counseling to refine communication, confidence, and professional etiquette.</p>
                  </div>

                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <h4>Resume Enhancement</h4>
                    <p>Crafting an ATS-friendly CV that increases your selection chances.</p>
                  </div>

                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </div>
                    <h4>Personalized Career Guidance</h4>
                    <p>Assessing your strengths and recommending job roles that fit your expertise.</p>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <p className="highlight-text">
                    WorkFly is among the best placement Services in Pune, helping professionals land jobs in top organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="companies-section section">
        <div className="container">
          <div className="section-title text-center">
            <h3>For Companies</h3>
            <h2>Find the Right Talent for Your Business</h2>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="content-box">
                <p className="text-center mb-5">
                  Hiring the right candidate can be challenging. As a trusted employment agency in Pune, 
                  we assist companies in:
                </p>
                
                <div className="company-benefits-grid">
                  <div className="company-card">
                    <div className="company-icon">
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <h4>Candidate Sourcing & Screening</h4>
                    <p>Access a pre-vetted talent pool from diverse industries.</p>
                  </div>

                  <div className="company-card">
                    <div className="company-icon">
                      <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <h4>End-to-End Hiring Support</h4>
                    <p>From initial interviews to final onboarding.</p>
                  </div>

                  <div className="company-card">
                    <div className="company-icon">
                      <FontAwesomeIcon icon={faIndustry} />
                    </div>
                    <h4>Industry-Specific Placements</h4>
                    <p>We provide candidates suited to various industries, including software development, manufacturing, and IT infrastructure.</p>
                  </div>

                  <div className="company-card">
                    <div className="company-icon">
                      <FontAwesomeIcon icon={faRocket} />
                    </div>
                    <h4>Flexible Hiring Solutions</h4>
                    <p>Whether full-time, contractual, or project-based, we cater to your business needs.</p>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <p className="highlight-text company-highlight">
                    With our job placement consultancy in Pune, your hiring process becomes more efficient and effective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="services-details section">
        <div className="container">
          <div className="section-title text-center">
            <h3>What We Offer</h3>
            <h2>Comprehensive Services</h2>
            <p className="section-subtitle">
              Our suite of specialized recruitment and placement services designed to meet your specific needs
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h4>Talent Acquisition</h4>
              <p>Our comprehensive talent acquisition strategy includes sourcing, screening, and presenting candidates who not only meet the technical requirements but also fit your company culture.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faIndustry} />
              </div>
              <h4>Industry-Specific Recruitment</h4>
              <p>We specialize in recruitment for IT, manufacturing, engineering, and various MIDC sector industries, understanding the unique needs of each sector.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h4>Career Counseling</h4>
              <p>One-on-one career guidance sessions to help job seekers understand their strengths, improve their skills, and navigate career opportunities effectively.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h4>Interview Preparation</h4>
              <p>Comprehensive coaching for technical and HR interviews, including mock interviews, feedback sessions, and industry-specific preparation materials.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h4>Resume Building</h4>
              <p>Professional resume writing and optimization services that highlight your skills and experience to stand out to potential employers and ATS systems.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h4>Placement Services</h4>
              <p>Dedicated placement assistance with our two-month support system to ensure candidates find positions that match their career goals and qualifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="process-section section bg-light">
        <div className="container">
          <div className="section-title text-center">
            <h3>How We Work</h3>
            <h2>Our Recruitment Process</h2>
            <p className="section-subtitle">
              A streamlined approach designed to find the perfect match efficiently
            </p>
          </div>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Understanding Requirements</h4>
              <p>We begin by thoroughly understanding the job requirements or candidate skills to ensure precise matching.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Sourcing & Screening</h4>
              <p>Our team sources and screens candidates using a multi-tiered evaluation process to ensure quality matches.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Interview Coordination</h4>
              <p>We handle all aspects of interview scheduling and provide preparation assistance to both parties.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Offer & Onboarding</h4>
              <p>We assist with the offer negotiation process and provide support through the onboarding phase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Get Started?</h2>
            <p>Whether you're looking to hire top talent or find your dream job, we're here to help.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Contact Us Today</a>
              <a href="tel:+917066001076" className="btn btn-secondary">Call: +91 7066001076</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage; 