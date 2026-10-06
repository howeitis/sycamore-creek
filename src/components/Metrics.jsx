import React from 'react';
import { Link } from 'react-router';
import { stats } from '../data/placements';
import useInView from '../hooks/useInView';
import '../styles/Metrics.css';

const DIGITS = '0123456789'.split('');

/**
 * A figure set as mechanical counter wheels: each digit is a reel of 0–9
 * resting on its real value, so the prerendered page (and anyone with motion
 * off) reads the true number. When `rolling` turns on, every reel spins up
 * from 0 to its digit, staggered left to right. Non-digit runs ("$", "M+",
 * " days") sit still. The plain value is kept for screen readers.
 */
const Odometer = ({ value, rolling }) => {
    const parts = value.match(/\d|\D+/g) || [];
    let reel = 0;
    return (
        <>
            <span className="sr-only">{value}</span>
            <span className={`odo ${rolling ? 'is-rolling' : ''}`} aria-hidden="true">
                {parts.map((part, i) =>
                    /\d/.test(part) ? (
                        <span key={i} className="odo-col" style={{ '--d': part, '--i': reel++ }}>
                            <span className="odo-reel">
                                {DIGITS.map((d) => (
                                    <span key={d}>{d}</span>
                                ))}
                            </span>
                        </span>
                    ) : (
                        <span key={i} className="odo-text">
                            {part}
                        </span>
                    ),
                )}
            </span>
        </>
    );
};

const Metrics = () => {
    const [ref, inView] = useInView();

    return (
        <section ref={ref} className={`metrics-home reveal ${inView ? 'is-inview' : ''}`}>
            <div className="metrics-home-container">
                <p className="eyebrow metrics-home-eyebrow">The Track Record</p>
                <h2 className="metrics-home-title">
                    We are defined by the offers we <em>close.</em>
                </h2>

                <div className="metrics-home-strip">
                    {stats.map((stat, i) => (
                        <div key={i} className="metric-cell">
                            <span className="metric-cell-value">
                                <Odometer value={stat.value} rolling={inView} />
                            </span>
                            <span className="metric-cell-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <p className="metrics-home-note">
                    Figures reflect completed engagements; identities withheld for confidentiality.
                    <Link to="/track-record" className="metrics-home-link">
                        {' '}
                        See the full record{' '}
                        <span className="arrow-ring" aria-hidden="true">
                            &rarr;
                        </span>
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Metrics;
