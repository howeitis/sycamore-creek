import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

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

    // Close the mobile menu when the route changes. Render-phase update
    // (React's recommended replacement for a setState-in-effect): when the
    // path differs from the one the menu was last synced to, close it.
    const [menuPath, setMenuPath] = useState(location.pathname);
    if (location.pathname !== menuPath) {
        setMenuPath(location.pathname);
        setMobileMenuOpen(false);
    }

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Process', path: '/process' },
        { name: 'Track Record', path: '/track-record' },
        { name: 'Insights', path: '/insights' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="Sycamore Creek" className="navbar-logo" />
                    <span className="navbar-brand-name">Sycamore Creek Consulting</span>
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
                    <Link
                        to="/contact"
                        className="nav-cta-button"
                        onClick={() => trackEvent('cta_click', { location: 'navbar' })}
                    >
                        Initiate Search
                    </Link>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={mobileMenuOpen}
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
                    background-color: rgba(251, 249, 244, 0.97);
                    backdrop-filter: saturate(1.1) blur(6px);
                    box-shadow: 0 1px 0 var(--hair-on-light), 0 6px 24px rgba(7,20,15,0.06);
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

                .navbar-brand-name {
                    margin-left: 0.75rem;
                    font-family: var(--font-heading);
                    font-size: 1.05rem;
                    font-weight: 500;
                    letter-spacing: 0.01em;
                    color: #ffffff;
                    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
                    transition: color 0.3s ease;
                    white-space: nowrap;
                }

                .navbar.scrolled .navbar-brand-name {
                    color: var(--color-text-primary);
                    text-shadow: none;
                }

                @media (max-width: 480px) {
                    .navbar-logo {
                        height: 48px;
                    }

                    .navbar-brand-name {
                        margin-left: 0.6rem;
                        font-size: 1.05rem;
                        white-space: normal;
                        line-height: 1.15;
                        max-width: 180px;
                    }
                }

                .navbar-links {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }

                .nav-link {
                    font-family: var(--font-body);
                    font-weight: 500;
                    font-size: 0.9rem;
                    letter-spacing: 0.01em;
                    color: #ffffff;
                    text-decoration: none;
                    padding-bottom: 3px;
                    border-bottom: 1px solid transparent;
                    transition: color 0.2s var(--ease), border-color 0.2s var(--ease), opacity 0.2s var(--ease);
                    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
                }

                .navbar.scrolled .nav-link {
                    color: var(--color-text-primary);
                    text-shadow: none;
                }

                .nav-link:hover {
                    opacity: 0.82;
                }

                .nav-link.current {
                    border-bottom-color: var(--color-brass);
                }

                .navbar.scrolled .nav-link:hover,
                .navbar.scrolled .nav-link.current {
                    color: var(--color-teal);
                    opacity: 1;
                }

                .nav-cta-button {
                    background-color: #ffffff;
                    color: var(--color-pine);
                    padding: 0.6rem 1.3rem;
                    border-radius: var(--radius);
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.78rem;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    border-bottom: none;
                    transition: transform 0.2s var(--ease), background-color 0.2s var(--ease), color 0.2s var(--ease), box-shadow 0.2s var(--ease);
                    box-shadow: 0 2px 10px rgba(7,20,15,0.22);
                }

                .navbar.scrolled .nav-cta-button {
                    background-color: var(--color-teal);
                    color: var(--color-text-inverse);
                    box-shadow: none;
                }

                .nav-cta-button:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(7,20,15,0.28);
                }

                .navbar.scrolled .nav-cta-button:hover {
                    background-color: var(--color-pine);
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
