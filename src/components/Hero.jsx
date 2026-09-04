import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

function Hero() {
  const rootRef = useRef(null);
  const shapeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero__eyebrow', { opacity: 0, y: 16, duration: 0.6 })
        .from(
          '.hero__title-line',
          { opacity: 0, y: 40, duration: 0.9, stagger: 0.12 },
          '-=0.3'
        )
        .from('.hero__tagline', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
        .from(
          '.hero__actions',
          { opacity: 0, y: 20, duration: 0.7 },
          '-=0.5'
        )
        .from(
          shapeRef.current,
          { opacity: 0, scale: 0.9, duration: 1.1, ease: 'power2.out' },
          '-=0.8'
        );

      // Parallax: background mark drifts slower than scroll
      gsap.to(shapeRef.current, {
        yPercent: 22,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="hero" ref={rootRef}>
      <div className="hero__mark" ref={shapeRef} aria-hidden="true" />

      <div className="container hero__inner">
        <span className="eyebrow hero__eyebrow">
          Digital Marketing Agency — Dubai, UAE
        </span>

        <h1 className="hero__title">
          <span className="hero__title-line">ZORX Digital</span>
          <span className="hero__title-line">Marketing Agency</span>
        </h1>

        <p className="hero__tagline">
          We build brands that move markets — strategy, design and
          technology, engineered for measurable growth.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn-primary">
            Let&rsquo;s Work Together
          </a>
          <a href="#work" className="btn-outline">
            See Our Work
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  );
}

export default Hero;
