import React from 'react';
import { Link } from 'react-router-dom';
import { stats } from '../data/placements';

const Metrics = () => {
    return (
        <section className="metrics-home">
            <div className="metrics-home-container">
                <p className="eyebrow metrics-home-eyebrow">The Track Record</p>
                <h2 className="metrics-home-title">We are defined by the offers we <em>close.</em></h2>

                <div className="metrics-home-strip">
                    {stats.map((stat, i) => (
                        <div key={i} className="metric-cell">
                            <span className="metric-cell-value">{stat.value}</span>
                            <span className="metric-cell-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <p className="metrics-home-note">
                    Figures reflect completed engagements; identities withheld for confidentiality.
                    <Link to="/track-record" className="metrics-home-link"> See the full record <span aria-hidden="true">&rarr;</span></Link>
                </p>
            </div>

            <style>{`
                .metrics-home {
                    background-color: var(--color-pine);
                    color: var(--color-text-inverse);
                    padding: clamp(4.5rem, 8vw, 7rem) 24px;
                }

                .metrics-home-container {
                    max-width: 1080px;
                    margin: 0 auto;
                }

                .metrics-home-eyebrow {
                    color: var(--color-brass-lite);
                    margin-bottom: 1.5rem;
                }

                .metrics-home-title {
                    font-family: var(--font-heading);
                    font-size: clamp(1.9rem, 3.6vw, 2.9rem);
                    font-weight: 500;
                    letter-spacing: -0.015em;
                    line-height: 1.12;
                    max-width: 18ch;
                    margin-bottom: 3.5rem;
                    color: var(--color-text-inverse);
                }

                .metrics-home-title em {
                    font-style: italic;
                    font-weight: 400;
                    color: var(--color-brass-lite);
                }

                .metrics-home-strip {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    border-top: 1px solid var(--hair-on-dark);
                    border-bottom: 1px solid var(--hair-on-dark);
                }

                .metric-cell {
                    padding: 2.5rem 1.5rem;
                    text-align: left;
                    position: relative;
                }

                .metric-cell + .metric-cell {
                    border-left: 1px solid var(--hair-on-dark);
                }

                .metric-cell-value {
                    display: block;
                    font-family: var(--font-heading);
                    font-size: clamp(2.4rem, 4.5vw, 3.6rem);
                    font-weight: 400;
                    line-height: 1;
                    color: var(--color-brass-lite);
                    letter-spacing: -0.02em;
                    font-variant-numeric: tabular-nums;
                    margin-bottom: 0.9rem;
                }

                .metric-cell-label {
                    display: block;
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    font-size: 0.72rem;
                    color: rgba(244, 239, 230, 0.62);
                    line-height: 1.4;
                }

                .metrics-home-note {
                    margin-top: 2rem;
                    font-family: var(--font-body);
                    font-size: 0.92rem;
                    color: rgba(244, 239, 230, 0.55);
                    max-width: none;
                }

                .metrics-home-link {
                    color: var(--color-brass-lite);
                    font-weight: 700;
                    border-bottom: 1px solid transparent;
                    white-space: nowrap;
                    margin-left: 0.35rem;
                }

                .metrics-home-link:hover {
                    border-bottom-color: var(--color-brass-lite);
                }

                @media (max-width: 720px) {
                    .metrics-home-strip {
                        grid-template-columns: 1fr 1fr;
                    }
                    .metric-cell {
                        padding: 2rem 1.25rem;
                    }
                    .metric-cell:nth-child(odd) {
                        border-left: none;
                    }
                    .metric-cell:nth-child(n+3) {
                        border-top: 1px solid var(--hair-on-dark);
                    }
                }
            `}</style>
        </section>
    );
};

export default Metrics;
