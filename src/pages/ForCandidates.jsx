import React from 'react';
import { useCanonical } from '../hooks/useCanonical';
import { trackEvent } from '../utils/analytics';

const ForCandidates = () => {
    useCanonical('https://sycamorecreekconsulting.com/for-candidates');
    return (
        <div className="page-wrapper">
            <title>For Candidates | Sycamore Creek Consulting</title>
            <meta name="description" content="For exceptional engineers and leaders in the cleared, defense, and AI-native world. A confidential relationship with a principal who treats candidates as carefully as clients." />

            {/* Header */}
            <section className="cand-header-section">
                <div className="content-container">
                    <p className="eyebrow cand-eyebrow">For Candidates</p>
                    <h1 className="cand-headline">The best conversations start <em>before there&rsquo;s a job.</em></h1>
                    <p className="cand-subhead">
                        Most of the people we place were never on the market. If you're exceptional at what you do — in cleared and defense engineering, AI, or technical leadership — it's worth knowing us before you ever need to.
                    </p>
                </div>
            </section>

            {/* Body */}
            <section className="cand-body-section">
                <div className="content-container cand-grid">
                    <div className="cand-principles">
                        <div className="cand-item">
                            <h2 className="cand-item-title">Discretion, always</h2>
                            <p className="cand-item-body">A conversation with us is confidential. Nothing moves without your say-so, and your current employer never hears from us. We understand that cleared and sensitive work demands care.</p>
                        </div>
                        <div className="cand-item">
                            <h2 className="cand-item-title">Treated as a client, not a resume</h2>
                            <p className="cand-item-body">You work directly with the principal — the same person who scopes and runs the search. We represent your goals honestly, and we won't push you toward a role that isn't right for you.</p>
                        </div>
                        <div className="cand-item">
                            <h2 className="cand-item-title">A relationship over time</h2>
                            <p className="cand-item-body">Whether or not there's a fit today, we keep a small, trusted network of exceptional people. The right opportunity often arrives months later — and we'd rather already know you.</p>
                        </div>
                    </div>

                    <aside className="cand-cta-card">
                        <h3 className="cand-cta-title">Introduce yourself</h3>
                        <p className="cand-cta-body">
                            Reach out directly, or refer someone you rate. A short note is enough to start.
                        </p>
                        <a
                            href="mailto:owen@howe.app?subject=Introduction%20%E2%80%94%20Candidate"
                            className="cand-cta-button"
                            onClick={() => trackEvent('candidate_intro', { method: 'email' })}
                        >
                            Email Owen
                        </a>
                        <a
                            href="https://www.linkedin.com/in/owen-howe-wm2016/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cand-cta-link"
                            onClick={() => trackEvent('candidate_intro', { method: 'linkedin' })}
                        >
                            Connect on LinkedIn
                        </a>
                    </aside>
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
                .cand-header-section {
                    background-color: var(--color-bg-accent); /* Sycamore Teal */
                    padding: 6rem 0 4rem;
                    color: var(--color-text-inverse);
                }

                .cand-eyebrow {
                    color: var(--color-brass-lite);
                    margin-bottom: 1.5rem;
                }

                .cand-headline {
                    font-family: var(--font-heading);
                    font-size: clamp(2.4rem, 5vw, 3.4rem);
                    font-weight: 500;
                    letter-spacing: -0.02em;
                    margin-bottom: 1.5rem;
                    line-height: 1.08;
                    max-width: 18ch;
                    color: var(--color-text-inverse);
                }

                .cand-headline em {
                    font-style: italic;
                    font-weight: 400;
                    color: var(--color-brass-lite);
                }

                .cand-subhead {
                    font-family: var(--font-body);
                    font-size: 1.25rem;
                    font-weight: 300;
                    line-height: 1.6;
                    max-width: 750px;
                    color: var(--color-text-inverse);
                    opacity: 0.9;
                }

                /* Body */
                .cand-body-section {
                    background-color: #FFFFFF;
                    padding: 5rem 0;
                    flex-grow: 1;
                }

                .cand-grid {
                    display: grid;
                    grid-template-columns: 3fr 2fr;
                    gap: 4rem;
                    align-items: start;
                }

                .cand-item {
                    margin-bottom: 2.5rem;
                }

                .cand-item:last-child {
                    margin-bottom: 0;
                }

                .cand-item-title {
                    font-family: var(--font-heading);
                    font-size: 1.4rem;
                    font-weight: 500;
                    letter-spacing: -0.01em;
                    margin-bottom: 0.6rem;
                    color: var(--color-text-primary);
                }

                .cand-item-body {
                    font-family: var(--font-body);
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: var(--color-ink-soft);
                }

                /* CTA card */
                .cand-cta-card {
                    background-color: var(--color-bg-base);
                    border-left: 3px solid var(--color-brass);
                    border-radius: var(--radius);
                    padding: 2.25rem;
                    position: sticky;
                    top: 6rem;
                }

                .cand-cta-title {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    font-weight: 500;
                    letter-spacing: -0.01em;
                    margin-bottom: 0.75rem;
                    color: var(--color-text-primary);
                }

                .cand-cta-body {
                    font-family: var(--font-body);
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--color-ink-soft);
                    margin-bottom: 1.5rem;
                }

                .cand-cta-button {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    background-color: var(--color-teal);
                    color: var(--color-text-inverse);
                    padding: 0.9rem 1.5rem;
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    font-size: 0.82rem;
                    border-radius: var(--radius);
                    text-decoration: none;
                    transition: background-color 0.2s var(--ease), transform 0.2s var(--ease);
                    margin-bottom: 1rem;
                }

                .cand-cta-button:hover {
                    background-color: var(--color-pine);
                    transform: translateY(-2px);
                }

                .cand-cta-link {
                    display: block;
                    text-align: center;
                    font-family: var(--font-body);
                    font-weight: 700;
                    font-size: 0.95rem;
                    color: var(--color-teal);
                }

                .cand-cta-link:hover {
                    text-decoration: underline;
                }

                @media (max-width: 768px) {
                    .cand-headline {
                        font-size: 2.25rem;
                    }
                    .cand-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .cand-cta-card {
                        position: static;
                    }
                }
            `}</style>
        </div>
    );
};

export default ForCandidates;
