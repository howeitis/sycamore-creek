import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import '../styles/Navbar.css';

/**
 * Routes whose page header sits on a light (parchment) ground. The nav is
 * "light" tone on these — dark ink, no photo gradient — instead of the white
 * text it uses over the hero and the pine/teal page headers.
 */
const isLightHeader = (pathname) =>
    pathname === '/services' || (pathname.startsWith('/insights/') && pathname !== '/insights');

/** Trailing-slash-insensitive path, so client and prerender agree on tone. */
const normalizePath = (pathname) => pathname.replace(/\/+$/, '') || '/';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const pathname = normalizePath(location.pathname);

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
    const [menuPath, setMenuPath] = useState(pathname);
    if (pathname !== menuPath) {
        setMenuPath(pathname);
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
        // Candidates are half the network; the desktop row is full, so this
        // shows in the menu (and the footer carries it everywhere).
        { name: 'For Candidates', path: '/for-candidates', secondary: true },
    ];

    // Tone is a property of the page ground, not just scroll position.
    const tone = scrolled || mobileMenuOpen || isLightHeader(pathname) ? 'light' : 'dark';

    return (
        <nav
            className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}
            data-tone={tone}
            aria-label="Primary"
        >
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <img
                        src={`${import.meta.env.BASE_URL}logo.webp`}
                        alt="Sycamore Creek"
                        className="navbar-logo"
                        width="48"
                        height="48"
                    />
                    <span className="navbar-brand-name">Sycamore Creek Consulting</span>
                </Link>

                <div id="primary-nav" className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${pathname === link.path ? 'current' : ''} ${link.secondary ? 'nav-link--secondary' : ''}`}
                            aria-current={pathname === link.path ? 'page' : undefined}
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
        </nav>
    );
};

export default Navbar;
