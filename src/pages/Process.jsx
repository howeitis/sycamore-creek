import React from 'react';
import { Link } from 'react-router';
import { trackEvent } from '../utils/analytics';
import '../styles/Process.css';
import Seo from '../components/Seo';
import CreekLine from '../components/CreekLine';

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
    return (
        <div className="page-wrapper">
            <Seo path="/process" />

            {/* Header */}
            <section className="process-header-section has-creek">
                <CreekLine />
                <div className="content-container">
                    <p className="eyebrow process-eyebrow">Our Process</p>
                    <h1 className="process-headline">
                        How a search <em>actually runs.</em>
                    </h1>
                    <p className="process-subhead">
                        A retained search is a partnership, not a transaction. Here is exactly how
                        an engagement runs — from the first conversation to the weeks after your new
                        hire starts.
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
                    <h3 className="cta-headline">
                        Have a search in mind? Let's start with a conversation.
                    </h3>
                    <Link
                        to="/contact"
                        className="btn-primary"
                        onClick={() => trackEvent('cta_click', { location: 'process' })}
                    >
                        Start the Conversation{' '}
                        <span className="btn-arrow" aria-hidden="true">
                            &rarr;
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Process;
