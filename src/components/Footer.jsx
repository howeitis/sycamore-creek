import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

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
                    <Link to="/insights" className="footer-link">
                        Insights
                    </Link>
                    <span className="separator">|</span>
                    <Link to="/faq" className="footer-link">
                        FAQ
                    </Link>
                    <span className="separator">|</span>
                    <Link to="/for-candidates" className="footer-link">
                        For Candidates
                    </Link>
                    <span className="separator">|</span>
                    <a href="mailto:owen@howe.app" className="footer-link">
                        owen@howe.app
                    </a>
                    <span className="separator">|</span>
                    <a
                        href="https://www.linkedin.com/in/owen-howe-wm2016/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
