import React from 'react';
import Footer from '../components/Footer';
import { stats, placements } from '../data/placements';

const TrackRecord = () => {
    return (
        <div className="page-wrapper">
            {/* Section A - Header */}
            <section className="tr-header-section">
                <div className="content-container">
                    <h1 className="tr-headline">The Track Record</h1>
                    <p className="tr-subhead">
                        We are defined by the offers we close. From stealth research labs to global media organizations, we secure the talent that builds the future.
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
                </div>
            </section>

            {/* Section C - Placements Grid */}
            <section className="placements-section">
                <div className="content-container">
                    <div className="placements-grid">
                        {placements.map((job, index) => (
                            <div key={index} className="placement-card">
                                <div className="card-top">
                                    <span className="placement-location">{job.location}</span>
                                </div>
                                <h3 className="placement-role">{job.role}</h3>
                                <p className="placement-company">{job.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section D - CTA */}
            <section className="cta-section">
                <div className="content-container cta-container">
                    <h3 className="cta-headline">Ready to add to this list?</h3>
                    <a href="contact.html" className="cta-button">INITIATE A SEARCH</a>
                </div>
            </section>

            <Footer />

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
                .tr-header-section {
                    background-color: var(--color-bg-base);
                    padding: 6rem 0 4rem;
                    text-align: center;
                }

                .tr-headline {
                    font-family: var(--font-heading);
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    color: var(--color-text-primary);
                }

                .tr-subhead {
                    font-family: var(--font-body);
                    font-size: 1.25rem;
                    font-weight: 300;
                    line-height: 1.6;
                    max-width: 700px;
                    margin: 0 auto;
                    color: var(--color-text-primary);
                    opacity: 0.9;
                }

                /* Metrics */
                .metrics-section {
                    background-color: var(--color-text-primary); /* Dark Text Color as BG */
                    color: var(--color-text-inverse);
                    padding: 3rem 0;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }

                .metrics-grid {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 2rem;
                    text-align: center;
                }

                .metric-value {
                    display: block;
                    font-family: var(--font-heading);
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--color-bg-accent); /* Teal */
                    margin-bottom: 0.5rem;
                }

                .metric-label {
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.85rem;
                    opacity: 0.8;
                }

                /* Placements */
                .placements-section {
                    padding: 5rem 0;
                    background-color: #fcfcfc;
                }

                .placements-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                .placement-card {
                    background-color: #ffffff;
                    border: 1px solid #eee;
                    padding: 2rem;
                    border-radius: 4px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 180px;
                }

                /* Modern Card Hover Effect */
                .placement-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
                    border-color: var(--color-bg-accent); /* Teal Border on hover */
                }

                .card-top {
                    margin-bottom: 1rem;
                }

                .placement-location {
                    font-family: var(--font-body);
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #999;
                    font-weight: 700;
                }

                .placement-role {
                    font-family: var(--font-heading);
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-primary);
                    line-height: 1.3;
                }

                .placement-company {
                    font-family: var(--font-body);
                    font-size: 1rem;
                    color: #555;
                }

                /* CTA Section */
                .cta-section {
                    background-color: var(--color-bg-base);
                    padding: 6rem 0;
                    text-align: center;
                }

                .cta-headline {
                     font-family: var(--font-heading);
                     font-size: 2rem;
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
                    .tr-headline { font-size: 2.5rem; }
                    .metrics-grid { flex-direction: column; gap: 3rem; }
                }
            `}</style>
        </div>
    );
};

export default TrackRecord;
