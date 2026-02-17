import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <span className="copyright">Sycamore Creek Consulting</span>
        </div>

        <div className="footer-center">
          <span className="principal">Owen Howe | Principal | Washington, D.C.</span>
        </div>

        <div className="footer-right">
          <a href="contact.html" className="footer-link">Initiate a Search</a>
          <span className="separator">|</span>
          <a href="mailto:owen@howe.app" className="footer-link">owen@howe.app</a>
          <span className="separator">|</span>
          <a href="https://www.linkedin.com/in/owen-howe-wm2016/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: var(--color-text-primary); /* Charcoal */
          color: var(--color-text-inverse); /* Cream */
          padding: 3rem 20px;
          font-family: var(--font-body);
          font-size: 0.85rem;
        }

        .footer-container {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-center {
          opacity: 0.7;
        }

        .footer-link {
          transition: opacity 0.2s;
        }

        .footer-link:hover {
          opacity: 0.8;
          text-decoration: underline;
        }

        .separator {
          margin: 0 0.5rem;
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
