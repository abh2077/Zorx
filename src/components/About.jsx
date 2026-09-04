import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__copy" data-aos="fade-up">
          <span className="eyebrow">About ZORX</span>
          <h2>
            A Dubai-based agency, built for brands with global ambition.
          </h2>
          <p>
            ZORX is a digital marketing agency headquartered in Dubai,
            working with businesses across the UAE and beyond. We combine
            strategic thinking, sharp design and modern technology to help
            brands stand out in a market that moves fast — and rewards
            those who move faster.
          </p>
          <p>
            From first campaign to full brand transformation, we partner
            close with our clients, treating every account like a growth
            problem worth solving properly, not a checklist to clear.
          </p>
        </div>

        <div className="about__stats" data-aos="fade-up" data-aos-delay="150">
          <div className="about__stat">
            <span className="about__stat-value">120+</span>
            <span className="about__stat-label">Campaigns launched</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-value">40+</span>
            <span className="about__stat-label">Brands partnered with</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-value">6</span>
            <span className="about__stat-label">Core services under one roof</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-value">Dubai</span>
            <span className="about__stat-label">Headquartered, UAE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
