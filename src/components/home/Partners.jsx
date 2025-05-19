function Partners() {
  const partnerLogos = [
    { name: 'Wipro', logo: '/logos/wiprologo.svg' },
    { name: 'Infosys', logo: '/logos/infosyslogo.svg' },
    { name: 'Google', logo: '/logos/googlelogo.svg' },
    { name: 'Cisco', logo: '/logos/ciscologo.svg' },
    { name: 'NVIDIA', logo: '/logos/nvidialogo.svg' }
  ];

  return (
    <section className="partners section">
      <div className="container">
        <div className="section-title text-center">
          <h3>Companies We Work With</h3>
          <h2>Our Partners</h2>
          <p className="section-subtitle">
            We collaborate with leading organizations across various industries to connect them with top-tier talent
          </p>
        </div>
        
        <div className="partner-logos">
          {partnerLogos.map((partner, index) => (
            <img 
              key={index}
              src={partner.logo} 
              alt={`${partner.name} logo`} 
              className="partner-logo"
              title={partner.name}
              onError={e => { e.target.onerror = null; e.target.src = '/logos/partner-placeholder.png'; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners; 