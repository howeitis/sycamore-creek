import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Track Record', path: '/track-record' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    Sycamore Creek
                </Link>

                <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'current' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="nav-cta-button">
                        Initiate Search
                    </Link>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="hamburger"></span>
                </button>
            </div>

            <style>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1000;
                    transition: all 0.3s ease;
                    background-color: transparent;
                    padding: 1.5rem 0;
                }

                .navbar.scrolled {
                    background-color: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    padding: 0.75rem 0;
                }

                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .navbar-brand {
                    font-family: var(--font-heading);
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: var(--color-bg-emphasis); /* British Racing Green */
                    text-decoration: none;
                    letter-spacing: -0.5px;
                }

                .navbar-links {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }

                .nav-link {
                    font-family: var(--font-body);
                    font-weight: 500;
                    font-size: 0.95rem;
                    color: var(--color-text-primary);
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .nav-link:hover, .nav-link.current {
                    color: var(--color-bg-emphasis); /* Green */
                }

                .nav-cta-button {
                    background-color: var(--color-bg-emphasis);
                    color: var(--color-text-inverse);
                    padding: 0.6rem 1.2rem;
                    border-radius: 4px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    transition: background-color 0.2s ease, transform 0.2s ease;
                }

                .nav-cta-button:hover {
                    background-color: #00331b;
                    transform: translateY(-1px);
                }

                .mobile-menu-toggle {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                }

                .hamburger {
                    display: block;
                    width: 24px;
                    height: 2px;
                    background-color: var(--color-text-primary);
                    position: relative;
                }

                .hamburger::before,
                .hamburger::after {
                    content: '';
                    position: absolute;
                    width: 24px;
                    height: 2px;
                    background-color: var(--color-text-primary);
                    transition: all 0.3s ease;
                }

                .hamburger::before { top: -8px; }
                .hamburger::after { top: 8px; }

                @media (max-width: 768px) {
                    .mobile-menu-toggle {
                        display: block;
                    }

                    .navbar-links {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background-color: white;
                        flex-direction: column;
                        padding: 2rem;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                        transform: translateY(-150%);
                        transition: transform 0.3s ease;
                        z-index: 999;
                    }

                    .navbar-links.active {
                        transform: translateY(0);
                    }

                    .navbar {
                        background-color: white; /* Always solid on mobile */
                        padding: 1rem 0;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
