import React from 'react';
import { trackEvent } from '../utils/analytics';
import '../styles/ForCandidates.css';
import Seo from '../components/Seo';

const ForCandidates = () => {
    return (
        <div className="page-wrapper">
            <Seo path="/for-candidates" />

            {/* Header */}
            <section className="cand-header-section">
                <div className="content-container">
                    <p className="eyebrow cand-eyebrow">For Candidates</p>
                    <h1 className="cand-headline">
                        The best conversations start <em>before there&rsquo;s a job.</em>
                    </h1>
                    <p className="cand-subhead">
                        Most of the people we place were never on the market. If you're exceptional
                        at what you do — in cleared and defense engineering, AI, or technical
                        leadership — it's worth knowing us before you ever need to.
                    </p>
                </div>
            </section>

            {/* Body */}
            <section className="cand-body-section">
                <div className="content-container cand-grid">
                    <div className="cand-principles">
                        <div className="cand-item">
                            <h2 className="cand-item-title">Discretion, always</h2>
                            <p className="cand-item-body">
                                A conversation with us is confidential. Nothing moves without your
                                say-so, and your current employer never hears from us. We understand
                                that cleared and sensitive work demands care.
                            </p>
                        </div>
                        <div className="cand-item">
                            <h2 className="cand-item-title">Treated as a client, not a resume</h2>
                            <p className="cand-item-body">
                                You work directly with the principal — the same person who scopes
                                and runs the search. We represent your goals honestly, and we won't
                                push you toward a role that isn't right for you.
                            </p>
                        </div>
                        <div className="cand-item">
                            <h2 className="cand-item-title">A relationship over time</h2>
                            <p className="cand-item-body">
                                Whether or not there's a fit today, we keep a small, trusted network
                                of exceptional people. The right opportunity often arrives months
                                later — and we'd rather already know you.
                            </p>
                        </div>
                    </div>

                    <aside className="cand-cta-card">
                        <h3 className="cand-cta-title">Introduce yourself</h3>
                        <p className="cand-cta-body">
                            Reach out directly, or refer someone you rate. A short note is enough to
                            start.
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
        </div>
    );
};

export default ForCandidates;
