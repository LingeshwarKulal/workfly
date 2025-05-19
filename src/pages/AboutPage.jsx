import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, faUserTie, faBuilding, faClock, faCogs, 
  faTrophy, faHistory, faUsers, faLightbulb, faBriefcase, faQuoteLeft, faRocket, faChartLine, faQuoteRight, faStar
} from '@fortawesome/free-solid-svg-icons';
import './AboutPage.css';

function AboutPage() {
  return (
    <>
      {/* Hero Banner for About Page */}
      <section className="page-banner section" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="text-center">
            <h1>Connecting Talent with Opportunity, One Step at a Time</h1>
            <p className="lead">WorkFly is more than a placement agency—we are your career partners.</p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="about section bg-pattern">
        <div className="animated-bg"></div>
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="container">
          <div className="section-title text-center">
            <h3>About Us</h3>
          </div>
          
          <div className="about-content">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="content-box highlight-box">
                  <div className="highlight-text">
                    <span className="highlight-line"></span>
                    At WorkFly, we're here to make job hunting and hiring easier, clearer, and more effective.
                  </div>
                  
                  <p className="animated-text">
                    The job market today is tough—there's competition, evolving industry needs, and a constant 
                    push for the "perfect fit." Whether you're looking for a job or trying to hire the right 
                    talent, the process can feel overwhelming. That's exactly why we exist. As a placement 
                    consultancy in Pune, our goal is simple: connect job seekers with real opportunities and 
                    help businesses find capable employees who actually fit their needs.
                  </p>
                  
                  <div className="key-points">
                    <div className="point">
                      <div className="point-icon">
                        <FontAwesomeIcon icon={faHandshake} />
                      </div>
                      <span>Genuine Care</span>
                    </div>
                    <div className="point">
                      <div className="point-icon">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                      <span>HR Counseling</span>
                    </div>
                    <div className="point">
                      <div className="point-icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                      </div>
                      <span>Interview Prep</span>
                    </div>
                  </div>
                  
                  <p className="animated-text">
                    We aren't just another name in the list of recruitment agencies in Pune—we're a team that 
                    genuinely cares. For job seekers, we offer placement services in Pune with HR counseling, 
                    interview preparation, and placement assistance for two months. For companies, we provide 
                    reliable hiring solutions, making the search for the right candidates easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe In Section */}
      <section className="beliefs-section section">
        <div className="animated-bg"></div>
        <div className="floating-shape shape4"></div>
        <div className="floating-shape shape5"></div>
        <div className="floating-shape shape6"></div>
        <div className="container">
          <div className="section-title text-center">
            <h3>What We Believe In</h3>
          </div>
          
          <div className="beliefs-content">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="content-box highlight-box">
                  <div className="highlight-text">
                    <span className="highlight-line"></span>
                    The job market is changing, and we believe in keeping up with it while keeping people at the center of it all.
                  </div>
                  
                  <p className="animated-text">
                    Finding a job isn't just about landing an interview; it's about building a career, 
                    financial stability, and self-confidence. Similarly, hiring isn't just about filling 
                    roles; it's about building strong teams that drive businesses forward.
                  </p>

                  <div className="key-points beliefs-points">
                    <div className="point">
                      <div className="point-icon">
                        <FontAwesomeIcon icon={faUserTie} />
                      </div>
                      <span>Career Building</span>
                    </div>
                    <div className="point">
                      <div className="point-icon">
                        <FontAwesomeIcon icon={faLightbulb} />
                      </div>
                      <span>Personal Growth</span>
                    </div>
                    <div className="point">
                      <div className="point-icon">
                        <FontAwesomeIcon icon={faBuilding} />
                      </div>
                      <span>Team Development</span>
                    </div>
                  </div>
                  
                  <p className="animated-text">
                    As one of the best job consultancies in Pune, we take a personal approach. We work with 
                    candidates to improve their chances of getting hired, offering guidance, interview support, 
                    and career insights. For businesses, we ensure that our recommendations aren't just resumes 
                    on paper but potential assets to their team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder's Message Section */}
      <section className="founder-section section bg-pattern">
        <div className="animated-bg gradient-purple"></div>
        <div className="floating-shape shape7 purple-glow"></div>
        <div className="floating-shape shape8 blue-glow"></div>
        <div className="floating-shape shape9 purple-glow"></div>
        <div className="container">
          <div className="section-title text-center">
            <h3 className="gradient-text">A Message from Our Founder</h3>
            <h2 className="founder-name">Sudarshan Rameshwar Gadekar</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="founder-content">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="content-box highlight-box founder-box">
                  <div className="quote-icon gradient-icon">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </div>

                  <div className="message-blocks">
                    <div className="message-block animated-text fade-in">
                      <p>
                        In today's fast-paced world, the job market is evolving at an unprecedented rate. 
                        With industries transforming, technology reshaping traditional roles, and businesses 
                        demanding ever-evolving skill sets, job seekers and employers alike find themselves 
                        navigating an increasingly complex hiring landscape. As someone who has closely 
                        observed these shifts, I founded WorkFly with a vision—to simplify this journey 
                        and make job opportunities accessible to everyone.
                      </p>
                    </div>

                    <div className="vision-points animated-grid">
                      <div className="vision-point fade-in">
                        <div className="vision-icon gradient-icon">
                          <FontAwesomeIcon icon={faRocket} />
                        </div>
                        <h4>Our Mission</h4>
                        <p>To empower individuals and organizations through strategic recruitment solutions.</p>
                      </div>
                      <div className="vision-point fade-in">
                        <div className="vision-icon gradient-icon">
                          <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <h4>Our Approach</h4>
                        <p>Precision, care, and a human-first methodology in every placement.</p>
                      </div>
                    </div>

                    <div className="message-block animated-text fade-in">
                      <p>
                        At WorkFly, we don't just see recruitment as a process; we see it as a mission to 
                        empower individuals and organizations. Job seekers, whether fresh graduates or 
                        experienced professionals, deserve the right opportunities to showcase their potential. 
                        On the other hand, businesses need the right talent to innovate and grow. Yet, finding 
                        the perfect match between the two remains a challenge. That's where we step in. As a 
                        dedicated placement consultancy in Pune, we bridge the gap with precision, care, and 
                        a human-first approach.
                      </p>
                    </div>

                    <div className="message-block animated-text fade-in">
                      <p>
                        We believe that employment is more than just securing a paycheck—it's about career 
                        fulfillment, personal growth, and long-term stability. That's why the recruitment 
                        agencies in Pune need to go beyond just arranging interviews; we guide, mentor, and 
                        support candidates through every step of their professional journey. For companies, 
                        our placement services in Pune ensure hiring is a breeze while helping organizations 
                        build teams that drive success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-title text-center">
            <h3>What We Stand For</h3>
            <h2>Our Core Values</h2>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h4>Integrity</h4>
              <p>We operate with complete transparency and honesty in all our dealings with clients and candidates.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h4>Innovation</h4>
              <p>We constantly evolve our recruitment strategies to stay ahead of industry trends and deliver better results.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h4>People-First</h4>
              <p>We believe in treating every candidate and client with respect, understanding that people are our greatest asset.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="about section bg-light">
        <div className="container">
          <div className="section-title text-center">
            <h3>Why Choose Us</h3>
            <h2>What Sets Us Apart</h2>
          </div>
          
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
      </section>
      
      {/* Our Journey */}
      <section className="section">
        <div className="container">
          <div className="section-title text-center">
            <h3>Our Story</h3>
            <h2>The WorkFly Journey</h2>
          </div>
          
          <div className="content-box">
            <p className="text-center mb-5">
              Founded with a vision to transform the recruitment landscape in Pune, WorkFly has grown from a small operation
              to a trusted recruitment partner for businesses of all sizes. Our journey has been defined by a commitment
              to excellence, innovation, and building lasting relationships with both clients and candidates.
            </p>
            <p className="text-center">
              Today, we continue to expand our reach and services, constantly adapting to the evolving needs of the job market
              while staying true to our core mission: connecting the right talent with the right opportunity at the right time.
            </p>
          </div>
        </div>
      </section>
      
      {/* How We Help Your Business Section */}
      <section className="business-help-section section bg-pattern">
        <div className="animated-bg gradient-blue"></div>
        <div className="floating-shape shape10 blue-glow"></div>
        <div className="floating-shape shape11 teal-glow"></div>
        <div className="floating-shape shape12 blue-glow"></div>
        <div className="container">
          <div className="section-title text-center">
            <h3 className="gradient-text">How We Help</h3>
            <h2>Your Business Growth Partner</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="business-solutions-grid">
            <div className="solution-card fade-in">
              <div className="solution-icon gradient-icon">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h4>Startups</h4>
              <p>WorkFly is a trusted job consultancy in Pune, helping startups build strong teams with the right talent from the ground up.</p>
            </div>
            
            <div className="solution-card fade-in">
              <div className="solution-icon gradient-icon">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <h4>Enterprises</h4>
              <p>We provide top recruitment agencies in Pune services to large organizations, streamlining hiring and reducing time-to-fill for key positions.</p>
            </div>
            
            <div className="solution-card fade-in">
              <div className="solution-icon gradient-icon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h4>Growing Businesses</h4>
              <p>As your company scales, finding the right people becomes crucial. Our recruitment agencies in Pune ensure you get skilled professionals who align with your vision.</p>
            </div>
            
            <div className="solution-card fade-in">
              <div className="solution-icon gradient-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h4>Staffing Solutions</h4>
              <p>From temporary staffing to permanent placements, our manpower services in Pune cater to diverse workforce needs, ensuring seamless operations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="animated-bg gradient-success"></div>
        <div className="floating-shape shape13 success-glow"></div>
        <div className="floating-shape shape14 success-glow"></div>
        <div className="floating-shape shape15 success-glow"></div>
        <div className="container">
          <div className="section-title text-center">
            <h3 className="gradient-text">Success Stories</h3>
            <h2>See What Others Have Achieved With Us</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card fade-in">
              <div className="quote-icon">
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
              </div>
              <p className="testimonial-text">
                "After months of struggling to find a job, WorkFly got me interview calls within weeks. Their HR counseling was a game changer."
              </p>
              <div className="testimonial-author">
                <h4>Rohit Deshmukh</h4>
                <span>Software Engineer</span>
              </div>
            </div>

            <div className="testimonial-card fade-in">
              <div className="quote-icon">
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
              </div>
              <p className="testimonial-text">
                "Most agencies just send you job links. WorkFly actually prepares you. Their placement consultancy in Pune is hands down the best support I received in my job search."
              </p>
              <div className="testimonial-author">
                <h4>Pooja Kulkarni</h4>
                <span>Marketing Executive</span>
              </div>
            </div>

            <div className="testimonial-card fade-in">
              <div className="quote-icon">
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
              </div>
              <p className="testimonial-text">
                "Our company was struggling to find the right talent. WorkFly understood our needs and provided excellent candidates. We've made multiple hires through them."
              </p>
              <div className="testimonial-author">
                <h4>Vikram Joshi</h4>
                <span>HR Manager at an IT Firm</span>
              </div>
            </div>

            <div className="testimonial-card fade-in">
              <div className="quote-icon">
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
              </div>
              <p className="testimonial-text">
                "I needed a job fast, and WorkFly helped me find one in an MIDC factory in just a few weeks. Highly recommend their placement services in Pune!"
              </p>
              <div className="testimonial-author">
                <h4>Neha Patil</h4>
                <span>Factory Supervisor</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Work With Us?</h2>
            <p>Connect with our team to discuss how we can help you achieve your recruitment or career goals.</p>
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

export default AboutPage; 