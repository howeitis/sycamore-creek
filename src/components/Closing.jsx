import React from 'react';

const Closing = () => {
    const mailtoLink = "mailto:owen@howe.app";

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
                    <a href="https://www.sycamorecreekconsulting.com/contact" className="cta-button" target="_top">INITIATE A SEARCH</a>
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
            padding: 1rem;
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
