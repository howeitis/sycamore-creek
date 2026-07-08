import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

const Closing = () => {
    return (
        <section className="closing-section">
            <div className="closing-container">
                <p className="eyebrow closing-eyebrow">How We Work</p>
                <h2 className="section-title">Three steps from brief to signed offer.</h2>

                <div className="steps-container">
                    <div className="step-item">
                        <span className="step-number">01</span>
                        <h3 className="step-title">Alignment</h3>
                        <p className="step-desc">We define the precise technical requirements, cultural non-negotiables, and market realities.</p>
                    </div>
                    <div className="step-item">
                        <span className="step-number">02</span>
                        <h3 className="step-title">Calibration</h3>
                        <p className="step-desc">Within 72 hours, we deliver a targeted cross-section of passive profiles to align on the exact target.</p>
                    </div>
                    <div className="step-item">
                        <span className="step-number">03</span>
                        <h3 className="step-title">Delivery</h3>
                        <p className="step-desc">A discreet, high-touch outreach effort &mdash; we present a shortlist of fully vetted finalists, engaged and ready to move.</p>
                    </div>
                </div>

                <div className="cta-container">
                    <Link to="/process" className="btn-ghost process-link">See our full process <span className="btn-arrow" aria-hidden="true">&rarr;</span></Link>
                    <Link to="/contact" className="btn-primary" onClick={() => trackEvent('cta_click', { location: 'home_closing' })}>Initiate a Search <span className="btn-arrow" aria-hidden="true">&rarr;</span></Link>
                </div>
            </div>

            <style>{`
        .closing-section {
          background-color: var(--color-surface);
          padding: clamp(5rem, 9vw, 8rem) 24px;
          color: var(--color-text-primary);
        }

        .closing-container {
            max-width: 1080px;
            margin: 0 auto;
            text-align: center;
        }

        .closing-eyebrow {
            justify-content: center;
            margin-bottom: 1.5rem;
        }

        .section-title {
            font-family: var(--font-heading);
            font-size: clamp(2rem, 3.8vw, 3rem);
            font-weight: 500;
            letter-spacing: -0.02em;
            margin-bottom: 4rem;
            max-width: 20ch;
            margin-left: auto;
            margin-right: auto;
        }

        .steps-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
            margin-bottom: 4rem;
            text-align: left;
            border-top: 1px solid var(--hair-on-light);
        }

        .step-item {
            padding: 2.5rem 2rem 1rem 0;
            position: relative;
        }

        .step-item + .step-item {
            padding-left: 2rem;
            border-left: 1px solid var(--hair-on-light);
        }

        .step-number {
            display: block;
            font-family: var(--font-mono);
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            color: var(--color-brass-deep);
            margin-bottom: 1rem;
            font-weight: 500;
        }

        .step-title {
            font-family: var(--font-heading);
            font-size: 1.4rem;
            font-weight: 500;
            letter-spacing: -0.01em;
            margin-bottom: 0.6rem;
            color: var(--color-text-primary);
        }

        .step-desc {
            font-family: var(--font-body);
            font-size: 1rem;
            color: var(--color-ink-soft);
            line-height: 1.6;
            margin: 0;
        }

        .cta-container {
            padding-top: 3rem;
            border-top: 1px solid var(--hair-on-light);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.75rem;
        }

        @media (max-width: 768px) {
            .steps-container {
                grid-template-columns: 1fr;
            }
            .step-item,
            .step-item + .step-item {
                padding: 2rem 0 1rem 0;
                border-left: none;
                border-top: 1px solid var(--hair-on-light);
            }
            .step-item:first-of-type { border-top: none; }
        }
      `}</style>
        </section>
    );
};

export default Closing;
