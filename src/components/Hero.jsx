import React from 'react';
import { Link } from 'react-router';
import { trackEvent } from '../utils/analytics';
import '../styles/Hero.css';

const BASE = import.meta.env.BASE_URL;

const Hero = () => {
    return (
        <section className="hero-section">
            {/* The canopy photo is a real <img> (not a CSS background) so the browser
          picks the right size per viewport and can fetch it at high priority
          straight from the prerendered HTML — it is the LCP element. */}
            <img
                className="hero-bg"
                src={`${BASE}hero_background.webp`}
                srcSet={`${BASE}hero_background-960.webp 960w, ${BASE}hero_background-1440.webp 1440w, ${BASE}hero_background.webp 1920w`}
                sizes="100vw"
                width="1920"
                height="1446"
                alt=""
                fetchPriority="high"
                decoding="async"
                aria-hidden="true"
            />
            <div className="hero-overlay" aria-hidden="true"></div>
            <div className="hero-grain" aria-hidden="true"></div>

            <div className="hero-content">
                <p className="hero-eyebrow">
                    Cleared&nbsp;&middot;&nbsp;R&amp;D&nbsp;&middot;&nbsp;AI-Native Engineering
                </p>

                <h1 className="hero-headline">
                    We find the people who <em>aren&rsquo;t looking.</em>
                </h1>

                <p className="hero-subhead">
                    Boutique retained search for cleared, defense, and AI-native engineering &mdash;
                    and the leaders who build those teams.
                </p>

                <Link
                    to="/contact"
                    className="btn-inverse hero-cta"
                    onClick={() => trackEvent('cta_click', { location: 'hero' })}
                >
                    Initiate a Search{' '}
                    <span className="btn-arrow" aria-hidden="true">
                        &rarr;
                    </span>
                </Link>
            </div>

            <div className="hero-scroll" aria-hidden="true">
                <span className="hero-scroll-line"></span>
            </div>
        </section>
    );
};

export default Hero;
