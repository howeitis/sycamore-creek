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
        { name: 'Track Record', path: '/track-record' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Sycamore Creek" className="navbar-logo" />
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
                    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%);
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
                    display: flex;
                    align-items: center;
                }

                .navbar-logo {
                    height: 48px;
                    width: auto;
                    transition: all 0.3s ease;
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
                    color: #ffffff;
                    text-decoration: none;
                    transition: color 0.2s;
                    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
                }

                .navbar.scrolled .nav-link {
                    color: var(--color-text-primary);
                    text-shadow: none;
                }

                .nav-link:hover, .nav-link.current {
                    opacity: 0.8;
                }

                .navbar.scrolled .nav-link:hover,
                .navbar.scrolled .nav-link.current {
                    color: var(--color-bg-emphasis);
                    opacity: 1;
                }

                .nav-cta-button {
                    background-color: #ffffff;
                    color: var(--color-bg-emphasis);
                    padding: 0.6rem 1.2rem;
                    border-radius: 4px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    transition: all 0.2s ease;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                }

                .navbar.scrolled .nav-cta-button {
                    background-color: var(--color-bg-emphasis);
                    color: var(--color-text-inverse);
                    box-shadow: none;
                }

                .nav-cta-button:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
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
                    background-color: #ffffff;
                    position: relative;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.5);
                }

                .navbar.scrolled .hamburger {
                    background-color: var(--color-text-primary);
                    box-shadow: none;
                }

                .hamburger::before,
                .hamburger::after {
                    content: '';
                    position: absolute;
                    width: 24px;
                    height: 2px;
                    background-color: #ffffff;
                    transition: all 0.3s ease;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.5);
                }

                .navbar.scrolled .hamburger::before,
                .navbar.scrolled .hamburger::after {
                    background-color: var(--color-text-primary);
                    box-shadow: none;
                }

                .hamburger::before { top: -8px; }
                .hamburger::after { top: 8px; }

                @media (max-width: 768px) {
                    .mobile-menu-toggle {
                        display: block;
                    }

                    .navbar {
                        padding: 1rem 0;
                    }

                    .navbar.menu-open {
                        background: white;
                        box-shadow: none;
                    }

                    .navbar.menu-open .hamburger,
                    .navbar.menu-open .hamburger::before,
                    .navbar.menu-open .hamburger::after {
                        background-color: var(--color-text-primary);
                        box-shadow: none;
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

                    .navbar-links .nav-link {
                        color: var(--color-text-primary);
                        text-shadow: none;
                    }

                    .navbar-links.active {
                        transform: translateY(0);
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
