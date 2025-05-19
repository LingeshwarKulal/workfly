import Hero from './Hero';
import About from './About';
import Services from './Services';
import Partners from './Partners';
import ContactForm from './ContactForm';
// These components will be implemented later
// import Testimonials from './Testimonials';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Partners />
      <ContactForm />
      {/* Uncomment these when you implement the components
      <Testimonials />
      */}
    </>
  );
}

export default HomePage; 