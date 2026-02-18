import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="page-wrapper">
            <title>Services | Sycamore Creek Consulting</title>
            <meta name="description" content="Retained search, embedded recruiting, and strategic talent advising for high-growth teams. Engagements structured around outcomes, not billable hours." />
            <link rel="canonical" href="https://sycamorecreekconsulting.com/services" />
            {/* Section A - Page Header */}
            <section className="services-header-section">
                <div className="content-container">
                    <h1 className="services-headline">Different problems require different engagements.</h1>
                    <p className="services-subhead">
                        We offer a focused set of services because recruiting challenges are not one-size-fits-all. Whether you need a single critical hire or an entire talent function built from scratch, we structure the engagement around the outcome — not around billing hours.
                    </p>
                </div>
            </section>

            {/* Section B - Retained Search */}
            <section className="retained-section">
                <div className="content-container">
                    <h2 className="service-label-inverse">RETAINED SEARCH</h2>
                    <p className="retained-desc">
                        For roles where a mis-hire is not an option. We own the search end to end — from building the market map and defining the candidate scorecard to managing every stage of outreach, evaluation, and offer negotiation. Retained engagements are our highest-touch service: fully dedicated bandwidth, weekly progress reporting, and a commitment to fill the role.
                    </p>
                    <p className="best-for-inverse">
                        <strong>Best for:</strong> Senior technical leadership, niche engineering roles, confidential replacements, and any position where the talent pool is small and the stakes are high.
                    </p>
                </div>
            </section>

            {/* Section C - Embedded Recruiting */}
            <section className="embedded-section">
                <div className="content-container embedded-grid">
                    <div className="embedded-left">
                        <h2 className="service-label-underline">EMBEDDED RECRUITING</h2>
                        <p className="embedded-desc">
                            We integrate directly into your team for a defined engagement period. We attend your standups, work inside your ATS and Slack, run intake sessions with your hiring managers, and operate as a seamless extension of your internal recruiting function — without the overhead of a full-time hire.
                        </p>
                        <p className="best-for">
                            <strong>Best for:</strong> Startups scaling rapidly after a funding round, companies without an internal recruiting team, or any organization facing a surge in hiring volume that their current team cannot absorb.
                        </p>
                    </div>
                    <div className="embedded-right">
                        <span className="whats-included">WHAT'S INCLUDED</span>
                        <ul className="included-list">
                            <li>Dedicated sourcing and screening aligned to your technical stack</li>
                            <li>Intake and calibration sessions with every hiring manager</li>
                            <li>Pipeline management inside your existing tools</li>
                            <li>Weekly reporting on pipeline health, conversion rates, and market feedback</li>
                            <li>Offer strategy and negotiation support</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section D - Strategic Advising */}
            <section className="advising-section">
                <div className="content-container">
                    <h2 className="service-label-inverse">STRATEGIC ADVISING</h2>
                    <p className="advising-desc">
                        Not every hiring problem is solved by adding a recruiter. Sometimes the problem is the process itself — the interviews are too slow, the offers are uncompetitive, or the employer brand isn't reaching the right people. We advise leadership on the structural and strategic dimensions of talent acquisition: compensation architecture, interview design, employer positioning, and organizational planning for teams in transition.
                    </p>
                    <p className="best-for-inverse">
                        <strong>Best for:</strong> Founders losing candidates and unsure why, HR teams seeking an outside perspective, and leadership navigating AI-driven workforce restructuring.
                    </p>
                </div>
            </section>

            {/* Section E - CTA Block */}
            <section className="cta-section">
                <div className="content-container cta-container">
                    <h3 className="cta-headline">Not sure which engagement fits? Let's talk.</h3>
                    <Link to="/contact" className="cta-button">GET IN TOUCH</Link>
                </div>
            </section>


            <style>{`
                .page-wrapper {
                    background-color: var(--color-bg-base);
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                .content-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                /* Header */
                 .services-header-section {
                    background-color: var(--color-bg-base);
                    padding: 6rem 0 4rem;
                }

                .services-headline {
                    font-family: var(--font-heading);
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                    max-width: 800px;
                    color: var(--color-text-primary);
                }

                .services-subhead {
                    font-family: var(--font-body);
                    font-size: 1.25rem;
                    font-weight: 300;
                    line-height: 1.6;
                    max-width: 800px;
                    color: var(--color-text-primary);
                    opacity: 0.9;
                }

                /* Retained Search */
                .retained-section {
                    background-color: var(--color-bg-emphasis); /* Racing Green */
                    color: var(--color-text-inverse);
                    padding: 5rem 0;
                    text-align: center;
                }

                .service-label-inverse {
                    display: block;
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 1.5rem;
                    opacity: 0.8;
                }

                .retained-desc {
                    font-family: var(--font-body);
                    font-size: 1.25rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                    font-weight: 300;
                }

                .best-for-inverse {
                    font-family: var(--font-body);
                    font-size: 1rem;
                    opacity: 0.9;
                    max-width: 800px;
                    margin: 0 auto;
                }

                /* Embedded Recruiting */
                .embedded-section {
                    background-color: #FFFFFF;
                    padding: 5rem 0;
                    color: var(--color-text-primary);
                }

                .embedded-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                }

                .service-label-underline {
                    display: inline-block;
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1.5rem;
                    border-bottom: 2px solid var(--color-bg-accent); /* Teal underline */
                    padding-bottom: 0.25rem;
                }

                .embedded-desc {
                    font-family: var(--font-body);
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    color: #444;
                }
                
                .best-for {
                     font-family: var(--font-body);
                     font-size: 1rem;
                     color: #666;
                }

                .whats-included {
                    display: block;
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1rem;
                    color: #666;
                    font-size: 0.85rem;
                }
                
                .included-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .included-list li {
                    font-family: var(--font-body);
                    font-size: 1rem;
                    margin-bottom: 0.75rem;
                    padding-left: 1.5rem;
                    position: relative;
                    color: #444;
                }
                
                .included-list li::before {
                    content: "•";
                    color: var(--color-bg-emphasis);
                    position: absolute;
                    left: 0;
                    font-weight: 700;
                }

                /* Strategic Advising */
                .advising-section {
                     background-color: var(--color-bg-accent); /* Teal */
                     color: var(--color-text-inverse);
                     padding: 5rem 0;
                     text-align: center;
                }

                .advising-desc {
                     font-family: var(--font-body);
                     font-size: 1.25rem;
                     line-height: 1.6;
                     margin-bottom: 2rem;
                     max-width: 800px;
                     margin-left: auto;
                     margin-right: auto;
                     font-weight: 300;
                }

                /* CTA Section */
                .cta-section {
                    background-color: var(--color-bg-base);
                    padding: 5rem 0;
                    text-align: center;
                }

                .cta-headline {
                     font-family: var(--font-heading);
                     font-size: 1.5rem;
                     font-weight: 700;
                     margin-bottom: 2rem;
                     color: var(--color-text-primary);
                }

                .cta-button {
                    display: inline-block;
                    background-color: var(--color-bg-emphasis); /* British Racing Green */
                    color: var(--color-text-inverse);
                    padding: 1rem 2.5rem;
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-radius: 4px;
                    transition: background-color 0.2s;
                    text-decoration: none;
                }

                .cta-button:hover {
                    background-color: #00331b;
                    box-shadow: 0 0 15px var(--color-bg-accent);
                    transform: translateY(-2px);
                }

                @media (max-width: 768px) {
                    .services-headline {
                        font-size: 2.5rem;
                    }
                    .embedded-grid {
                         grid-template-columns: 1fr;
                         gap: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Services;
