import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, faUser, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './BlogPage.css';

// Direct image data URLs
const payrollComparisonImg = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/..."; // Base64 data for payroll image
const itRecruitmentImg = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/..."; // Base64 data for IT recruitment image

function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Company Payroll vs Third-Party Payroll: Understanding the Differences",
      date: { day: "30", month: "Apr", year: "2025" },
      slug: "payroll-comparison"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "IT vs Non-IT Recruitment: Key Differences and Best Practices",
      date: { day: "22", month: "Apr", year: "2025" },
      slug: "it-vs-non-it-recruitment"
    }
  ];

  return (
    <>
      {/* Hero Banner for Blog Page */}
      <section className="page-banner section">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="container">
          <div className="text-center">
            <h1>WorkFly Blog</h1>
            <p className="lead">Insights, Updates, and Industry Knowledge</p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-cards-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-preview-card">
                <div className="card-image-wrapper">
                  <img src={post.image} alt={post.title} className="card-image" />
                  <div className="date-badge">
                    <span className="day">{post.date.day}</span>
                    <span className="month">{post.date.month}</span>
                    <span className="year">{post.date.year}</span>
                  </div>
                </div>
                
                <div className="card-content">
                  <h2 className="card-title">{post.title}</h2>
                  
                  <Link to={`/blog/${post.slug}`} className="read-more-btn">
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage; 