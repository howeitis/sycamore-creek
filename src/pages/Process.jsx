import React from 'react';
import { Link } from 'react-router-dom';
import { useCanonical } from '../hooks/useCanonical';
import { trackEvent } from '../utils/analytics';

const steps = [
    {
        num: '01',
        title: 'Discovery & Intake',
        body: "We sit down with you to understand the business — not just the job description. What the team is trying to build, the problems this hire needs to solve, who they'll report to, how success will be measured, and the constraints that shape the search. The better we understand your world, the sharper the search.",
    },
    {
        num: '02',
        title: 'The Scorecard',
        body: 'Together we build a detailed technical and cultural scorecard: the must-haves, the nice-to-haves, the deal-breakers, and exactly how each will be evaluated. This becomes the objective standard every candidate is measured against — and keeps everyone aligned as the search unfolds.',
    },
    {
        num: '03',
        title: 'Market Map',
        body: 'We map the talent market: where the right people are, who they work for today, what they are paid, and how competitor organizations are structured. You keep this intelligence — compensation benchmarks and org maps — whether or not we ultimately make a hire.',
    },
    {
        num: '04',
        title: 'Outreach & Engagement',
        body: "A discreet, high-touch campaign to reach passive candidates who aren't on the market. We represent your story with care — because how candidates are treated reflects on you, and because today's passive candidate is tomorrow's referral or future hire.",
    },
    {
        num: '05',
        title: 'Evaluation',
        body: 'Structured assessment against the scorecard, with clear written write-ups on every finalist. You receive a considered shortlist — the people worth your time — rather than a stack of resumes to sift through.',
    },
    {
        num: '06',
        title: 'Offer & Close',
        body: 'We manage the offer, the negotiation, and the close — anticipating counteroffers and competing processes before they derail the hire. This is where retained search earns its keep: getting the person you want to say yes.',
    },
    {
        num: '07',
        title: 'Follow-Through',
        body: 'We stay engaged through onboarding and the critical first weeks, and hand over the market intelligence gathered along the way. The engagement produces durable knowledge that informs your hiring strategy long after the search closes.',
    },
];

const Process = () => {
    useCanonical('https://sycamorecreekconsulting.com/process');
    return (
        <div className="page-wrapper">
            <title>Our Process | Sycamore Creek Consulting</title>
            <meta name="description" content="How a Sycamore Creek retained search works — from discovery and scorecard to market mapping, outreach, evaluation, offer, and follow-through. A partnership, not a transaction." />

            {/* Header */}
            <section className="process-header-section">
                <div className="content-container">
                    <h1 className="process-headline">How we work.</h1>
                    <p className="process-subhead">
                        A retained search is a partnership, not a transaction. Here is exactly how an engagement runs — from the first conversation to the weeks after your new hire starts.
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section className="process-steps-section">
                <div className="content-container">
                    <ol className="process-list">
                        {steps.map((step) => (
                            <li key={step.num} className="process-step">
                                <span className="process-num">{step.num}</span>
                                <div className="process-step-text">
                                    <h2 className="process-step-title">{step.title}</h2>
                                    <p className="process-step-body">{step.body}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="content-container cta-container">
                    <h3 className="cta-headline">Have a search in mind? Let's start with a conversation.</h3>
                    <Link to="/contact" className="cta-button" onClick={() => trackEvent('cta_click', { location: 'process' })}>START THE CONVERSATION</Link>
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
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                /* Header */
                .process-header-section {
                    background-color: var(--color-bg-emphasis); /* British Racing Green */
                    padding: 6rem 0 4rem;
                    color: var(--color-text-inverse);
                }

                .process-headline {
                    font-family: var(--font-heading);
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                    color: var(--color-text-inverse);
                }

                .process-subhead {
                    font-family: var(--font-body);
                    font-size: 1.25rem;
                    font-weight: 300;
                    line-height: 1.6;
                    max-width: 800px;
                    color: var(--color-text-inverse);
                    opacity: 0.9;
                }

                /* Steps */
                .process-steps-section {
                    background-color: #FFFFFF;
                    padding: 5rem 0;
                }

                .process-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    max-width: 820px;
                }

                .process-step {
                    display: grid;
                    grid-template-columns: 4rem 1fr;
                    gap: 1.5rem;
                    padding: 2rem 0;
                    border-top: 1px solid #ececec;
                }

                .process-step:first-child {
                    border-top: none;
                    padding-top: 0;
                }

                .process-num {
                    font-family: var(--font-heading);
                    font-size: 1.75rem;
                    font-weight: 900;
                    color: var(--color-bg-emphasis);
                    opacity: 0.35;
                    line-height: 1.2;
                }

                .process-step-title {
                    font-family: var(--font-heading);
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin-bottom: 0.6rem;
                    color: var(--color-text-primary);
                }

                .process-step-body {
                    font-family: var(--font-body);
                    font-size: 1.05rem;
                    line-height: 1.6;
                    color: #444;
                }

                /* CTA */
                .cta-section {
                    background-color: var(--color-bg-base);
                    padding: 5rem 0;
                    text-align: center;
                }

                .cta-headline {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    color: var(--color-text-primary);
                }

                .cta-button {
                    display: inline-block;
                    background-color: var(--color-bg-emphasis);
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
                    .process-headline {
                        font-size: 2.5rem;
                    }
                    .process-step {
                        grid-template-columns: 1fr;
                        gap: 0.5rem;
                    }
                    .process-num {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Process;
