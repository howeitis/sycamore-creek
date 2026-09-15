import React from 'react';
import { Link } from 'react-router';
import { trackEvent } from '../utils/analytics';
import '../styles/Services.css';
import Seo from '../components/Seo';
import CreekLine from '../components/CreekLine';

const Services = () => {
    return (
        <div className="page-wrapper">
            <Seo path="/services" />
            {/* Section A - Page Header */}
            <section className="services-header-section has-creek has-creek--light">
                <CreekLine />
                <div className="content-container">
                    <p className="eyebrow services-eyebrow">Our Services</p>
                    <h1 className="services-headline">
                        Different problems require <em>different engagements.</em>
                    </h1>
                    <p className="services-subhead">
                        We offer a focused set of services because recruiting challenges are not
                        one-size-fits-all. Whether you need a single critical hire or an entire
                        talent function built from scratch, we structure the engagement around the
                        outcome — not around billing hours.
                    </p>
                </div>
            </section>

            {/* Section B - Retained Search (lead service) */}
            <section className="service-band service-band--pine">
                <div className="content-container service-band-inner">
                    <p className="eyebrow service-eyebrow service-eyebrow--light">Lead service</p>
                    <h2 className="service-title">Retained Search</h2>
                    <p className="service-desc">
                        For roles where a mis-hire is not an option. We own the search end to end —
                        from building the market map and defining the candidate scorecard to
                        managing every stage of outreach, evaluation, and offer negotiation.
                        Retained engagements are our highest-touch service: fully dedicated
                        bandwidth, weekly progress reporting, and a commitment to fill the role.
                    </p>
                    <p className="best-for">
                        <span className="best-for-label">Best for</span>
                        Cleared and defense engineering leads, AI-native specialists, senior
                        technical leadership, confidential replacements, and any position where the
                        talent pool is small and the stakes are high.
                    </p>
                </div>
            </section>

            {/* Section C - Embedded Recruiting */}
            <section className="service-band service-band--surface">
                <div className="content-container embedded-grid">
                    <div className="embedded-left">
                        <p className="eyebrow service-eyebrow">For scaling teams</p>
                        <h2 className="service-title">Embedded Recruiting</h2>
                        <p className="service-desc">
                            We integrate directly into your team for a defined engagement period. We
                            attend your standups, work inside your ATS and Slack, run intake
                            sessions with your hiring managers, and operate as a seamless extension
                            of your internal recruiting function — without the overhead of a
                            full-time hire.
                        </p>
                        <p className="best-for">
                            <span className="best-for-label">Best for</span>
                            Startups scaling rapidly after a funding round, companies without an
                            internal recruiting team, or any organization facing a surge in hiring
                            volume that their current team cannot absorb.
                        </p>
                    </div>
                    <div className="embedded-right">
                        <h3 className="included-title">What&rsquo;s included</h3>
                        <ul className="included-list">
                            <li>
                                Dedicated sourcing and screening aligned to your technical stack
                            </li>
                            <li>Intake and calibration sessions with every hiring manager</li>
                            <li>Pipeline management inside your existing tools</li>
                            <li>
                                Weekly reporting on pipeline health, conversion rates, and market
                                feedback
                            </li>
                            <li>Offer strategy and negotiation support</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section D - Strategic Advising */}
            <section className="service-band service-band--teal">
                <div className="content-container service-band-inner">
                    <p className="eyebrow service-eyebrow service-eyebrow--light">For leadership</p>
                    <h2 className="service-title">Strategic Advising</h2>
                    <p className="service-desc">
                        Not every hiring problem is solved by adding a recruiter. Sometimes the
                        problem is the process itself — the interviews are too slow, the offers are
                        uncompetitive, or the employer brand isn&rsquo;t reaching the right people.
                        We advise leadership on the structural and strategic dimensions of talent
                        acquisition: compensation architecture, interview design, employer
                        positioning, and organizational planning for teams in transition.
                    </p>
                    <p className="best-for">
                        <span className="best-for-label">Best for</span>
                        Founders losing candidates and unsure why, HR teams seeking an outside
                        perspective, and leadership navigating AI-driven workforce restructuring.
                    </p>
                </div>
            </section>

            {/* Section E - CTA Block */}
            <section className="cta-section">
                <div className="content-container cta-container">
                    <h2 className="cta-headline">
                        Not sure which engagement fits? Let&rsquo;s talk.
                    </h2>
                    <Link
                        to="/contact"
                        className="btn-primary"
                        onClick={() => trackEvent('cta_click', { location: 'services' })}
                    >
                        Get in Touch{' '}
                        <span className="btn-arrow" aria-hidden="true">
                            &rarr;
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
