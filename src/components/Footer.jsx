import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import '../styles/Footer.css';

const CONTACT_EMAIL = 'owen@howe.app';
const LINKEDIN_URL = 'https://www.linkedin.com/in/owen-howe-wm2016/';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-brand-col">
                    <Link to="/" className="footer-brand">
                        Sycamore Creek Consulting
                    </Link>
                    <p className="footer-statement">
                        Boutique retained search and talent advisory for cleared, defense, and
                        AI-native engineering &mdash; and the leaders who build those teams.
                    </p>
                    <p className="footer-place">Washington, D.C. &middot; Placing nationwide</p>
                </div>

                <nav className="footer-nav" aria-label="Footer">
                    <h2 className="footer-heading">The firm</h2>
                    <ul className="footer-list">
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/process">Process</Link>
                        </li>
                        <li>
                            <Link to="/track-record">Track Record</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/insights">Insights</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/for-candidates">For Candidates</Link>
                        </li>
                    </ul>
                </nav>

                <div className="footer-contact">
                    <h2 className="footer-heading">Owen Howe, Principal</h2>
                    <ul className="footer-list">
                        <li>
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                onClick={() =>
                                    trackEvent('contact_click', {
                                        method: 'email',
                                        location: 'footer',
                                    })
                                }
                            >
                                {CONTACT_EMAIL}
                            </a>
                        </li>
                        <li>
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() =>
                                    trackEvent('contact_click', {
                                        method: 'linkedin',
                                        location: 'footer',
                                    })
                                }
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <Link to="/contact">Start a conversation</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                {/* Year is computed at build and again in the browser; a New
                    Year's Day mismatch is harmless, so don't flag it. */}
                <span suppressHydrationWarning>&copy; {year} Sycamore Creek Consulting</span>
                <Link to="/privacy">Privacy</Link>
            </div>
        </footer>
    );
};

export default Footer;
