import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

/**
 * Routes whose page header sits on a light (parchment) ground. The nav is
 * "light" tone on these — dark ink, no photo gradient — instead of the white
 * text it uses over the hero and the pine/teal page headers.
 */
const isLightHeader = (pathname) =>
    pathname === '/services' || pathname.startsWith('/insights/');

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
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

    // While the mobile menu is open: Escape closes it and the page behind it
    // doesn't scroll.
    useEffect(() => {
        if (!mobileMenuOpen) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') setMobileMenuOpen(false);
        };
        document.addEventListener('keydown', onKey);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Process', path: '/process' },
        { name: 'Track Record', path: '/track-record' },
        { name: 'Insights', path: '/insights' },
        { name: 'Contact', path: '/contact' },
    ];

    // Tone is a property of the page ground, not just scroll position.
    const tone =
        scrolled || mobileMenuOpen || isLightHeader(location.pathname) ? 'light' : 'dark';

    return (
        <nav
            className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}
            data-tone={tone}
            aria-label="Primary"
        >
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="Sycamore Creek" className="navbar-logo" width="48" height="48" />
                    <span className="navbar-brand-name">Sycamore Creek Consulting</span>
                </Link>

                <div id="primary-nav" className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'current' : ''}`}
                            aria-current={location.pathname === link.path ? 'page' : undefined}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="nav-cta-button"
                        onClick={() => trackEvent('cta_click', { location: 'navbar' })}
                    >
                        Initiate a Search
                    </Link>
                </div>

                <button
                    type="button"
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="primary-nav"
                >
                    <span className="hamburger" aria-hidden="true"></span>
                </button>
            </div>

            <style>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1000;
                    transition: background-color 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease;
                    padding: 1.5rem 0;
                }

                /* Tone: "dark" = white ink over photo / pine / teal grounds,
                   "light" = warm ink over parchment or the scrolled surface bar. */
                .navbar[data-tone="dark"] {
                    --nav-ink: #ffffff;
                    --nav-shadow: 0 1px 3px rgba(0,0,0,0.3);
                    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%);
                }

                .navbar[data-tone="light"] {
                    --nav-ink: var(--color-text-primary);
                    --nav-shadow: none;
                    background: none;
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
                    color: var(--nav-ink);
                    text-shadow: var(--nav-shadow);
                    transition: color 0.3s ease;
                    white-space: nowrap;
                }

                @media (max-width: 480px) {
                    .navbar-brand-name {
                        margin-left: 0.6rem;
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
                    color: var(--nav-ink);
                    text-decoration: none;
                    padding-bottom: 3px;
                    border-bottom: 1px solid transparent;
                    transition: color 0.2s var(--ease), border-color 0.2s var(--ease), opacity 0.2s var(--ease);
                    text-shadow: var(--nav-shadow);
                }

                .nav-link:hover {
                    opacity: 0.82;
                }

                .nav-link.current {
                    border-bottom-color: var(--color-brass);
                }

                .navbar[data-tone="light"] .nav-link:hover,
                .navbar[data-tone="light"] .nav-link.current {
                    color: var(--color-teal);
                    opacity: 1;
                }

                .nav-cta-button {
                    padding: 0.6rem 1.3rem;
                    border-radius: var(--radius);
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.78rem;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    border-bottom: none;
                    white-space: nowrap;
                    transition: transform 0.2s var(--ease), background-color 0.2s var(--ease), color 0.2s var(--ease), box-shadow 0.2s var(--ease);
                }

                .navbar[data-tone="dark"] .nav-cta-button {
                    background-color: #ffffff;
                    color: var(--color-pine);
                    box-shadow: 0 2px 10px rgba(7,20,15,0.22);
                }

                .navbar[data-tone="dark"] .nav-cta-button:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(7,20,15,0.28);
                }

                .navbar[data-tone="light"] .nav-cta-button {
                    background-color: var(--color-teal);
                    color: var(--color-text-inverse);
                    box-shadow: none;
                }

                .navbar[data-tone="light"] .nav-cta-button:hover {
                    background-color: var(--color-pine);
                    transform: translateY(-1px);
                }

                .mobile-menu-toggle {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    min-width: 44px;
                    min-height: 44px;
                    align-items: center;
                    justify-content: center;
                }

                .hamburger,
                .hamburger::before,
                .hamburger::after {
                    display: block;
                    width: 24px;
                    height: 2px;
                    background-color: var(--nav-ink);
                    box-shadow: var(--nav-shadow);
                    transition: transform 0.3s var(--ease), top 0.3s var(--ease), opacity 0.2s var(--ease), background-color 0.3s ease;
                }

                .hamburger {
                    position: relative;
                }

                .hamburger::before,
                .hamburger::after {
                    content: '';
                    position: absolute;
                    left: 0;
                }

                .hamburger::before { top: -8px; }
                .hamburger::after { top: 8px; }

                /* Open state: the three bars become an X. */
                .navbar.menu-open .hamburger { background-color: transparent; box-shadow: none; }
                .navbar.menu-open .hamburger::before { top: 0; transform: rotate(45deg); }
                .navbar.menu-open .hamburger::after { top: 0; transform: rotate(-45deg); }

                @media (max-width: 768px) {
                    .mobile-menu-toggle {
                        display: flex;
                    }

                    .navbar {
                        padding: 1rem 0;
                    }

                    .navbar.menu-open {
                        background: var(--color-surface);
                        box-shadow: 0 1px 0 var(--hair-on-light);
                    }

                    .navbar-links {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background-color: var(--color-surface);
                        flex-direction: column;
                        padding: 2rem;
                        box-shadow: 0 12px 30px rgba(7,20,15,0.10);
                        border-top: 1px solid var(--hair-on-light);
                        transform: translateY(-150%);
                        /* Closed: hidden from the accessibility tree and the
                           tab order too, not just moved off-screen. */
                        visibility: hidden;
                        transition: transform 0.3s ease, visibility 0s linear 0.3s;
                        z-index: 999;
                    }

                    .navbar-links .nav-link {
                        color: var(--color-text-primary);
                        text-shadow: none;
                    }

                    .navbar-links.active {
                        transform: translateY(0);
                        visibility: visible;
                        transition: transform 0.3s ease, visibility 0s;
                    }

                    .navbar-links .nav-cta-button {
                        background-color: var(--color-teal);
                        color: var(--color-text-inverse);
                        box-shadow: none;
                        margin-top: 0.5rem;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .navbar-links { transition: none; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
