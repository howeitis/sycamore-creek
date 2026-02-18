import React from 'react';
import { Link } from 'react-router-dom';

const Closing = () => {
    return (
        <section className="closing-section">
            <div className="closing-container">
                <h2 className="section-title">How We Work</h2>

                <div className="steps-container">
                    <div className="step-item">
                        <span className="step-number">01</span>
                        <h4 className="step-title">Alignment</h4>
                        <p className="step-desc">We define the precise technical requirements, cultural non-negotiables, and market realities.</p>
                    </div>
                    <div className="step-item">
                        <span className="step-number">02</span>
                        <h4 className="step-title">Calibration</h4>
                        <p className="step-desc">Within 72 hours, we deliver a targeted cross-section of passive profiles to align on the exact target.</p>
                    </div>
                    <div className="step-item">
                        <span className="step-number">03</span>
                        <h4 className="step-title">Extraction</h4>
                        <p className="step-desc">We run a discreet, high-touch outreach campaign, delivering fully vetted finalists ready to close.</p>
                    </div>
                </div>

                <div className="cta-container">
                    <Link to="/contact" className="cta-button">INITIATE A SEARCH</Link>
                </div>
            </div>

            <style>{`
        .closing-section {
          background-color: #ffffff; /* White/Light Grey */
          padding: 6rem 20px;
          color: var(--color-text-primary);
        }

        .closing-container {
            max-width: 1000px;
            margin: 0 auto;
            text-align: center;
        }

        .section-title {
            font-family: var(--font-heading);
            font-size: 2.5rem;
            margin-bottom: 4rem;
        }

        .steps-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-bottom: 5rem;
            text-align: left;
        }

        .step-item {
            padding: 1.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 8px;
        }

        .step-item:hover {
            transform: translateY(-5px);
            background-color: rgba(0,0,0,0.02);
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        .step-number {
            display: block;
            font-family: var(--font-heading);
            font-size: 1.5rem;
            color: var(--color-bg-emphasis);
            opacity: 0.3;
            margin-bottom: 0.5rem;
            font-weight: 900;
        }

        .step-title {
            font-family: var(--font-heading);
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
            color: var(--color-text-primary);
        }

        .step-desc {
            font-family: var(--font-body);
            font-size: 1rem;
            color: #666;
            line-height: 1.5;
        }

        .cta-container {
            padding-top: 2rem;
            border-top: 1px solid #eee;
            margin-top: 2rem;
        }

        .cta-bridge {
            font-family: var(--font-heading); /* Heavy Serif */
            font-size: 1.5rem;
            margin-bottom: 2rem;
            font-weight: 700;
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
            border-radius: 4px; /* Slight rounding, not full pill */
            transition: background-color 0.2s;
        }

        .cta-button:hover {
            background-color: #00331b; /* Darker Green */
            box-shadow: 0 0 15px var(--color-bg-accent);
            transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
            .steps-container {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
            .step-item {
                text-align: center;
            }
        }
      `}</style>
        </section>
    );
};

export default Closing;
