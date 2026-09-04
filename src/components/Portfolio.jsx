import './Portfolio.css';

const PROJECTS = [
  {
    name: 'Aurora Retail Rebrand',
    category: 'Branding & Identity',
    image: '/assets/work-aurora.png',
  },
  {
    name: 'Nomad Hospitality Group',
    category: 'Social Media & Content',
    image: '/assets/work-nomad.png',
  }
];

function Portfolio() {
  return (
    <section id="work" className="portfolio">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">Our Work</span>
          <h2>A few results we&rsquo;re proud to talk about.</h2>
        </div>

        <div className="portfolio__grid">
          {PROJECTS.map((project, i) => (
            <a
              href="#contact"
              className="project-card"
              key={project.name}
              data-aos="fade-up"
              data-aos-delay={i * 90}
            >
              <div className="project-card__media">
                <img src={project.image} alt={`${project.name} project preview`} loading="lazy" />
              </div>
              <div className="project-card__info">
                <h3>{project.name}</h3>
                <span>{project.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
