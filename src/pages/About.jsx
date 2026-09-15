import React from 'react';
import { Link } from 'react-router';
import { trackEvent } from '../utils/analytics';
import '../styles/About.css';
import Seo from '../components/Seo';
import CreekLine from '../components/CreekLine';

const About = () => {
    return (
        <div className="page-wrapper">
            <Seo path="/about" />
            {/* Section A - Page Header */}
            <section className="about-header-section has-creek">
                <CreekLine />
                <div className="content-container">
                    <p className="eyebrow about-eyebrow">About the Firm</p>
                    <h1 className="about-headline">
                        Built for the searches others <em>can&rsquo;t close.</em>
                    </h1>
                    <p className="about-subhead">
                        Sycamore Creek is a boutique talent advisory built on a single premise: the
                        best people aren't applying. That's especially true in the cleared, defense,
                        and AI-native engineering world, where the talent pool is small and the
                        margin for error is zero. Reaching those people requires precision,
                        discretion, and a principal who understands your technical environment as
                        well as your team does.
                    </p>
                </div>
            </section>

            {/* Section B - Founder Profile */}
            <section className="founder-section">
                <div className="content-container founder-grid">
                    <div className="founder-image-col">
                        <img
                            src={`${import.meta.env.BASE_URL}hero_profile.webp`}
                            alt="Owen Howe, Founder and Principal of Sycamore Creek Consulting"
                            className="founder-image"
                        />
                    </div>
                    <div className="founder-text-col">
                        <span className="founder-label">OWEN HOWE</span>
                        <h2 className="founder-title">Founder & Principal</h2>
                        <div className="founder-bio">
                            <p>
                                Owen Howe is the Founder and Principal of Sycamore Creek Consulting.
                                Before launching the firm, he spent years embedded inside both
                                high-growth startups and globally recognized institutions, building
                                and scaling recruiting functions from the ground up. He has hired
                                across the full seniority spectrum — from early-career internship
                                cohorts to executive leadership — and has operated in environments
                                where the margin for error on a hire is effectively zero.
                            </p>
                            <p>
                                Sycamore Creek was founded on the conviction that recruiting
                                consulting should be a craft, not a volume game. Owen works directly
                                with every client engagement, bringing the same rigor to a
                                five-person startup building its founding team as he does to a
                                legacy enterprise transforming its talent strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section C - Philosophy */}
            <section className="philosophy-section">
                <div className="content-container">
                    <h3 className="philosophy-title">How We Think</h3>
                    <div className="proof-grid proof-grid--inverse">
                        <div className="proof-item">
                            <h4 className="proof-title">Precision Over Volume</h4>
                            <p className="proof-desc">
                                We don't send you fifty resumes and hope for the best. Every
                                candidate we present has been sourced against a detailed technical
                                and cultural scorecard built with you before the search begins.
                            </p>
                        </div>
                        <div className="proof-item">
                            <h4 className="proof-title">Principals, Not Associates</h4>
                            <p className="proof-desc">
                                There is no handoff after the sales call. The person who scopes your
                                search is the same person running it, evaluating candidates, and
                                managing your offer negotiations. That continuity is the difference
                                between a placed candidate and a retained one.
                            </p>
                        </div>
                        <div className="proof-item">
                            <h4 className="proof-title">Market Intelligence</h4>
                            <p className="proof-desc">
                                Every engagement produces durable knowledge — compensation
                                benchmarks, competitor org charts, talent density maps — that
                                informs your hiring strategy long after the search closes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section D - CTA Block */}
            <section className="cta-section">
                <div className="content-container cta-container">
                    <h3 className="cta-headline">
                        Effective leadership changes everything. Let's find your next principal.
                    </h3>
                    <Link
                        to="/contact"
                        className="btn-primary"
                        onClick={() => trackEvent('cta_click', { location: 'about' })}
                    >
                        Start the Conversation{' '}
                        <span className="btn-arrow" aria-hidden="true">
                            &rarr;
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
