import './Services.css';

const SERVICES = [
  {
    title: 'Digital Marketing',
    desc: 'Full-funnel campaigns across search, social and display, built around real growth targets.',
  },
  {
    title: 'Social Media Marketing',
    desc: 'Content and community strategy that turns followers into customers, platform by platform.',
  },
  {
    title: 'Branding & Graphic Design',
    desc: 'Identity systems, visual language and design guidelines that hold up across every touchpoint.',
  },
  {
    title: 'Website Development',
    desc: 'Fast, modern, conversion-focused websites built to reflect the brand behind them.',
  },
  {
    title: 'SEO',
    desc: 'Technical, on-page and content SEO that compounds your organic visibility over time.',
  },
  {
    title: 'Video Production',
    desc: 'Brand films, social content and campaign videos shot and edited for how people actually watch.',
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">Our Services</span>
          <h2>Everything a growing brand needs, under one roof.</h2>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <article
              className="service-card"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
