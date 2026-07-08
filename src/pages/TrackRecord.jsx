import React from 'react';
import { Link } from 'react-router-dom';
import { stats, placements } from '../data/placements';
import { useCanonical } from '../hooks/useCanonical';
import { trackEvent } from '../utils/analytics';

const TrackRecord = () => {
    useCanonical('https://sycamorecreekconsulting.com/track-record');
    return (
        <div className="page-wrapper">
            <title>Track Record | Sycamore Creek Consulting</title>
            <meta name="description" content="$50M+ in compensation negotiated. 87% offer acceptance, 96% of searches filled, 58-day average time to fill. Placements across stealth research labs, global media organizations, and high-growth startups in DC and NYC." />
            {/* Section A - Header */}
            <section className="tr-header-section">
                <div className="content-container">
                    <p className="eyebrow tr-eyebrow">The Track Record</p>
                    <h1 className="tr-headline">We are defined by the offers we <em>close.</em></h1>
                    <p className="tr-subhead">
                        From stealth research labs to global media organizations, we secure the talent that builds the future.
                    </p>
                </div>
            </section>

            {/* Section B - Metrics */}
            <section className="metrics-section">
                <div className="content-container">
                    <div className="metrics-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="metric-item">
                                <span className="metric-value">{stat.value}</span>
                                <span className="metric-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                    <p className="metrics-caption">Rooted in DC and NYC &mdash; placing talent nationwide.</p>
                    <p className="metrics-note">Figures reflect completed engagements, identities withheld for confidentiality.</p>
                </div>
            </section>

            {/* Section C - Placements Grid */}
            <section className="placements-section">
                <div className="content-container">
                    <p className="eyebrow placements-eyebrow">Selected Placements</p>
                    <div className="placements-grid">
                        {placements.map((job, index) => (
                            <div key={index} className="placement-card">
                                <div className="card-top">
                                    <span className="placement-type">{job.type}</span>
                                    <span className="placement-location">{job.location}</span>
                                </div>
                                <h2 className="placement-role">{job.role}</h2>
                                <p className="placement-company">{job.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section D - CTA */}
            <section className="cta-section">
                <div className="content-container cta-container">
                    <h2 className="cta-headline">Ready to add to this list?</h2>
                    <Link to="/contact" className="btn-primary" onClick={() => trackEvent('cta_click', { location: 'track_record' })}>Initiate a Search <span className="btn-arrow" aria-hidden="true">&rarr;</span></Link>
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
                    max-width: 1080px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                /* Header - Deep Pine */
                .tr-header-section {
                    background-color: var(--color-pine);
                    padding: clamp(7rem, 12vw, 9rem) 0 clamp(3.5rem, 6vw, 5rem);
                    color: var(--color-text-inverse);
                }

                .tr-eyebrow {
                    color: var(--color-brass-lite);
                    margin-bottom: 1.5rem;
                }

                .tr-headline {
                    font-family: var(--font-heading);
                    font-size: clamp(2.6rem, 5.5vw, 4rem);
                    font-weight: 500;
                    letter-spacing: -0.02em;
                    line-height: 1.06;
                    margin-bottom: 1.5rem;
                    max-width: 16ch;
                    color: var(--color-text-inverse);
                }

                .tr-headline em {
                    font-style: italic;
                    font-weight: 400;
                    color: var(--color-brass-lite);
                }

                .tr-subhead {
                    font-family: var(--font-body);
                    font-size: 1.2rem;
                    font-weight: 300;
                    line-height: 1.65;
                    max-width: 52ch;
                    color: rgba(244, 239, 230, 0.86);
                }

                /* Metrics - Parchment */
                .metrics-section {
                    background-color: var(--color-bg-base);
                    color: var(--color-text-primary);
                    padding: clamp(4rem, 7vw, 6rem) 0;
                }

                .metrics-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    border-top: 1px solid var(--hair-on-light);
                    border-bottom: 1px solid var(--hair-on-light);
                }

                .metric-item {
                    padding: 2.5rem 1.5rem;
                    text-align: left;
                }

                .metric-item + .metric-item {
                    border-left: 1px solid var(--hair-on-light);
                }

                .metric-value {
                    display: block;
                    font-family: var(--font-heading);
                    font-size: clamp(2.4rem, 4.5vw, 3.6rem);
                    font-weight: 400;
                    line-height: 1;
                    color: var(--color-teal);
                    letter-spacing: -0.02em;
                    font-variant-numeric: tabular-nums;
                    margin-bottom: 0.9rem;
                }

                .metric-label {
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    font-size: 0.72rem;
                    color: var(--color-sage);
                    line-height: 1.4;
                }

                .metrics-caption {
                    text-align: center;
                    margin-top: 2.5rem;
                    font-family: var(--font-heading);
                    font-style: italic;
                    font-size: 1.15rem;
                    color: var(--color-ink-soft);
                }

                .metrics-note {
                    text-align: center;
                    margin-top: 0.75rem;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    color: var(--color-sage);
                }

                /* Placements - Teal (company color) */
                .placements-section {
                    padding: clamp(4.5rem, 8vw, 7rem) 0;
                    background-color: var(--color-teal);
                }

                .placements-eyebrow {
                    color: var(--color-brass-lite);
                    margin-bottom: 2.5rem;
                }

                .placements-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.25rem;
                }

                .placement-card {
                    background-color: var(--color-surface);
                    border: 1px solid transparent;
                    padding: 2rem;
                    border-radius: var(--radius);
                    transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
                    display: flex;
                    flex-direction: column;
                    min-height: 190px;
                }

                .placement-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                }

                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    gap: 1rem;
                    margin-bottom: auto;
                    padding-bottom: 1.5rem;
                }

                .placement-type {
                    font-family: var(--font-mono);
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-brass-deep);
                }

                .placement-location {
                    font-family: var(--font-body);
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-sage);
                    font-weight: 700;
                }

                .placement-role {
                    font-family: var(--font-heading);
                    font-size: 1.3rem;
                    font-weight: 500;
                    letter-spacing: -0.01em;
                    margin-bottom: 0.35rem;
                    color: var(--color-text-primary);
                    line-height: 1.2;
                }

                .placement-company {
                    font-family: var(--font-body);
                    font-size: 0.98rem;
                    color: var(--color-ink-soft);
                    margin: 0;
                }

                /* CTA */
                .cta-section {
                    background-color: var(--color-bg-base);
                    padding: clamp(5rem, 8vw, 7rem) 0;
                    text-align: center;
                }

                .cta-headline {
                     font-family: var(--font-heading);
                     font-size: clamp(1.8rem, 3.4vw, 2.6rem);
                     font-weight: 500;
                     letter-spacing: -0.015em;
                     margin-bottom: 2rem;
                     color: var(--color-text-primary);
                }

                @media (max-width: 720px) {
                    .metrics-grid { grid-template-columns: 1fr 1fr; }
                    .metric-item:nth-child(odd) { border-left: none; }
                    .metric-item:nth-child(n+3) { border-top: 1px solid var(--hair-on-light); }
                }
            `}</style>
        </div>
    );
};

export default TrackRecord;
