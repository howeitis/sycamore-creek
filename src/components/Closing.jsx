import React from 'react';
import { Link } from 'react-router';
import { trackEvent } from '../utils/analytics';
import useInView from '../hooks/useInView';
import '../styles/Closing.css';

const Closing = () => {
    const [stepsRef, stepsInView] = useInView({ rootMargin: '0px 0px -15% 0px' });

    return (
        <section className="closing-section">
            <div className="closing-container">
                <p className="eyebrow closing-eyebrow">How We Work</p>
                <h2 className="section-title">Three steps from brief to signed offer.</h2>

                <div ref={stepsRef} className={`steps-container ${stepsInView ? 'is-inview' : ''}`}>
                    {/* A brass line runs 01 → 03 with a dot riding its tip. */}
                    <span className="steps-progress" aria-hidden="true">
                        <span className="steps-dot"></span>
                    </span>
                    <div className="step-item">
                        <span className="step-number">01</span>
                        <h3 className="step-title">Alignment</h3>
                        <p className="step-desc">
                            We define the precise technical requirements, cultural non-negotiables,
                            and market realities.
                        </p>
                    </div>
                    <div className="step-item">
                        <span className="step-number">02</span>
                        <h3 className="step-title">Calibration</h3>
                        <p className="step-desc">
                            Within 72 hours, we deliver a targeted cross-section of passive profiles
                            to align on the exact target.
                        </p>
                    </div>
                    <div className="step-item">
                        <span className="step-number">03</span>
                        <h3 className="step-title">Delivery</h3>
                        <p className="step-desc">
                            A discreet, high-touch outreach effort &mdash; we present a shortlist of
                            fully vetted finalists, engaged and ready to move.
                        </p>
                    </div>
                </div>

                <div className="closing-cta">
                    <Link to="/process" className="btn-ghost process-link">
                        See our full process{' '}
                        <span className="btn-arrow" aria-hidden="true">
                            &rarr;
                        </span>
                    </Link>
                    <Link
                        to="/contact"
                        className="btn-primary"
                        onClick={() => trackEvent('cta_click', { location: 'home_closing' })}
                    >
                        Initiate a Search{' '}
                        <span className="btn-arrow" aria-hidden="true">
                            &rarr;
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Closing;
