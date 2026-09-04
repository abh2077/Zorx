import './WhyZorx.css';

const REASONS = [
  {
    title: 'Creative approach',
    desc: 'Every brief starts from an idea worth remembering, not a template we reuse.',
  },
  {
    title: 'Results-driven marketing',
    desc: 'We plan and report against numbers that matter to your business, not vanity metrics.',
  },
  {
    title: 'Modern technology',
    desc: 'Current tools and platforms across analytics, automation and delivery — no legacy drag.',
  },
  {
    title: 'Experienced team',
    desc: 'Strategists, designers and developers who have shipped work across the region.',
  },
];

function WhyZorx() {
  return (
    <section id="why-zorx" className="why">
      <div className="container why__grid">
        <div className="why__intro" data-aos="fade-up">
          <span className="eyebrow">Why ZORX</span>
          <h2>Built to perform, not just to look good.</h2>
          <p>
            We pair creative instinct with disciplined execution — so every
            campaign we ship is judged on what it actually delivers.
          </p>
        </div>

        <ul className="why__list">
          {REASONS.map((reason, i) => (
            <li
              key={reason.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyZorx;
