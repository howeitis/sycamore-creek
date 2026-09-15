import React from 'react';
import { Link } from 'react-router-dom';
import { stats } from '../data/placements';
import '../styles/Metrics.css';

const Metrics = () => {
    return (
        <section className="metrics-home">
            <div className="metrics-home-container">
                <p className="eyebrow metrics-home-eyebrow">The Track Record</p>
                <h2 className="metrics-home-title">
                    We are defined by the offers we <em>close.</em>
                </h2>

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
                    <Link to="/track-record" className="metrics-home-link">
                        {' '}
                        See the full record <span aria-hidden="true">&rarr;</span>
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Metrics;
