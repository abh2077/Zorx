import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CTASection.css';

function CTASection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta" ref={sectionRef}>
      <div className="cta__bg" ref={bgRef} aria-hidden="true" />
      <div className="container cta__inner" data-aos="fade-up">
        <h2>Let&rsquo;s grow your brand.</h2>
        <p>
          Tell us where you are and where you want to be — we&rsquo;ll map
          the rest.
        </p>
        <a href="#contact" className="btn-primary">
          Start a Project
        </a>
      </div>
    </section>
  );
}

export default CTASection;
