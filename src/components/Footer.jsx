import './Footer.css';

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'X / Twitter', href: 'https://x.com/' },
  { label: 'Facebook', href: 'https://facebook.com/' },
];

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img
            src="/assets/zorx-logo-white.png"
            alt="ZORX — Fueling Brands Growth"
          className="footer__logo"
          />
          <p>
            Digital marketing agency based in Dubai, UAE — working with
            brands across the region and beyond.
          </p>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:hello@zorx.agency">hello@zorx.agency</a>
            </li>
            <li>
              <a href="tel:+97140000000">+971 4 000 0000</a>
            </li>
            <li>Dubai, United Arab Emirates</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Follow</h4>
          <ul>
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} ZORX Digital Marketing Agency. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
