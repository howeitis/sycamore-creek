import React from 'react';
import { Link } from 'react-router-dom';
import { stats, placements } from '../data/placements';
import { trackEvent } from '../utils/analytics';
import '../styles/TrackRecord.css';
import Seo from '../components/Seo';

const TrackRecord = () => {
    return (
        <div className="page-wrapper">
            <Seo path="/track-record" />
            {/* Section A - Header */}
            <section className="tr-header-section">
                <div className="content-container">
                    <p className="eyebrow tr-eyebrow">The Track Record</p>
                    <h1 className="tr-headline">
                        We are defined by the offers we <em>close.</em>
                    </h1>
                    <p className="tr-subhead">
                        From stealth research labs to global media organizations, we secure the
                        talent that builds the future.
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
                    <p className="metrics-caption">
                        Rooted in DC and NYC &mdash; placing talent nationwide.
                    </p>
                    <p className="metrics-note">
                        Figures reflect completed engagements, identities withheld for
                        confidentiality.
                    </p>
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
                    <Link
                        to="/contact"
                        className="btn-primary"
                        onClick={() => trackEvent('cta_click', { location: 'track_record' })}
                    >
                        Initiate a Search{' '}
                        <span className="btn-arrow" aria-hidden="true">
                            &rarr;
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TrackRecord;
