import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <span className="brand">Sycamore Creek</span>
        </div>

        <div className="footer-center">
          <span className="principal">Owen Howe | Principal | Washington, D.C.</span>
        </div>

        <div className="footer-right">
          <Link to="/insights" className="footer-link">Insights</Link>
          <span className="separator">|</span>
          <Link to="/faq" className="footer-link">FAQ</Link>
          <span className="separator">|</span>
          <Link to="/for-candidates" className="footer-link">For Candidates</Link>
          <span className="separator">|</span>
          <a href="mailto:owen@howe.app" className="footer-link">owen@howe.app</a>
          <span className="separator">|</span>
          <a href="https://www.linkedin.com/in/owen-howe-wm2016/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: var(--color-pine-deep);
          color: var(--color-text-inverse);
          padding: 3rem 24px;
          font-family: var(--font-body);
          font-size: 0.85rem;
          border-top: 1px solid var(--hair-brass);
        }

        .footer-container {
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .brand {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          letter-spacing: -0.01em;
          color: var(--color-text-inverse);
        }

        .footer-center {
          color: rgba(244, 239, 230, 0.6);
        }

        .footer-right {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.25rem 0;
        }

        .footer-link {
          color: rgba(244, 239, 230, 0.82);
          transition: color 0.2s var(--ease);
        }

        .footer-link:hover {
          color: var(--color-brass-lite);
        }

        .separator {
          margin: 0 0.65rem;
          color: rgba(244, 239, 230, 0.28);
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
