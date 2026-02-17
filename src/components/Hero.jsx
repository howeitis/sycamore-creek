import React from 'react';
import '../index.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="logo-container">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Sycamore Creek Consulting" className="logo-image" />
        </div>

        <h1 className="hero-headline">We find the people who aren't looking.</h1>

        <p className="hero-subhead">
          Sycamore Creek is a boutique talent advisory firm. We extract elite technical talent and architect recruiting engines for high-growth teams.
        </p>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          height: 90vh; /* High impact */
          width: 100%;
          background-image: url('${import.meta.env.BASE_URL}hero_background.png'); /* Assuming image is in public or assets */
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--color-text-inverse);
          padding: 0 20px;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* 40-50% dark overlay */
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-container {
          margin-bottom: 2rem;
        }

        .logo-image {
          max-width: 150px;
          height: auto;
          display: block;
        }

        .hero-headline {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .hero-subhead {
          font-family: var(--font-body);
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.9;
        }
        
        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2.5rem; // Scale down for mobile
          }
          .hero-section {
            height: 80vh;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
