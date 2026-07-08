import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import '../index.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-grain" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">Cleared&nbsp;&middot;&nbsp;Defense&nbsp;&middot;&nbsp;AI-Native</p>

        <h1 className="hero-headline">We find the people who <em>aren&rsquo;t looking.</em></h1>

        <p className="hero-subhead">
          A boutique talent advisory firm for high-stakes technical hiring &mdash; cleared, defense, and AI-native engineering, and the leaders who build those teams. We reach the specialists others can&rsquo;t, from DC and NYC to nationwide.
        </p>

        <Link
          to="/contact"
          className="btn-inverse hero-cta"
          onClick={() => trackEvent('cta_click', { location: 'hero' })}
        >
          Initiate a Search <span className="btn-arrow" aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-line"></span>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 92vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--color-text-inverse);
          padding: 128px 24px 72px;
          overflow: hidden;
          isolation: isolate;
        }

        /* Photo lives on its own layer so it can drift slowly without moving the overlay. */
        .hero-bg {
          position: absolute;
          inset: -4%;
          z-index: 0;
          background-image: url('${import.meta.env.BASE_URL}hero_background.webp');
          background-size: cover;
          background-position: center;
          animation: heroZoom 18s var(--ease) forwards;
        }

        /* Brand-tinted gradient instead of a flat black scrim:
           canopy light up top, deepening pine toward the base for legibility. */
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(120% 80% at 70% 8%, rgba(198,161,91,0.20) 0%, rgba(198,161,91,0) 46%),
            linear-gradient(180deg,
              rgba(7,20,15,0.34) 0%,
              rgba(11,47,36,0.52) 46%,
              rgba(7,20,15,0.82) 100%);
        }

        /* Faint film grain — a premium, tactile touch. */
        .hero-grain {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.06;
          mix-blend-mode: overlay;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 860px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-eyebrow {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--color-brass-lite);
          margin-bottom: 1.6rem;
          padding-bottom: 0.9rem;
          position: relative;
        }

        .hero-eyebrow::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 3rem;
          height: 1px;
          background: var(--color-brass);
          opacity: 0.8;
        }

        .hero-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          font-weight: 500;
          line-height: 1.04;
          margin-bottom: 1.6rem;
          letter-spacing: -0.02em;
          max-width: 16ch;
          text-shadow: 0 2px 30px rgba(7,20,15,0.35);
        }

        .hero-headline em {
          font-style: italic;
          font-weight: 400;
          color: var(--color-brass-lite);
        }

        .hero-subhead {
          font-family: var(--font-body);
          font-size: clamp(1.05rem, 1.6vw, 1.22rem);
          font-weight: 300;
          line-height: 1.65;
          max-width: 54ch;
          margin: 0 auto;
          color: rgba(244, 239, 230, 0.86);
        }

        .hero-cta {
          margin-top: 2.75rem;
          box-shadow: 0 6px 24px rgba(7,20,15,0.35);
        }

        .hero-scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        }

        .hero-scroll-line {
          display: block;
          width: 1px;
          height: 3rem;
          background: linear-gradient(to bottom, rgba(244,239,230,0), rgba(244,239,230,0.7));
          animation: scrollPulse 2.4s var(--ease) infinite;
          transform-origin: top;
        }

        @keyframes scrollPulse {
          0%   { transform: scaleY(0.3); opacity: 0.2; }
          50%  { transform: scaleY(1);   opacity: 0.9; }
          100% { transform: scaleY(0.3); opacity: 0.2; }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 88vh;
            padding: 108px 20px 64px;
          }
          .hero-scroll { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg { animation: none; }
          .hero-scroll-line { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
