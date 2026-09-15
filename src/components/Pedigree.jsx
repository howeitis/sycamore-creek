import React from 'react';
import '../styles/Pedigree.css';

const Pedigree = () => {
    return (
        <section className="pedigree-section">
            <div className="pedigree-container">
                <p className="eyebrow pedigree-eyebrow">Why Sycamore Creek</p>

                <h2 className="pedigree-lead">
                    You don&rsquo;t need another resume screener. You need a <em>talent engine.</em>
                </h2>

                <p className="pedigree-body">
                    One principal runs every search from scoping to signed offer &mdash; no handoff,
                    no associates. From stealth defense startups to global institutions, we reach
                    the specialists other firms can&rsquo;t and close them on a scorecard built with
                    you.
                </p>

                <div className="proof-grid">
                    <div className="proof-item">
                        <h3 className="proof-title">Cleared &amp; Defense Talent</h3>
                        <p className="proof-desc">
                            Deep fluency in the cleared and defense ecosystem &mdash; from FPGA and
                            reverse engineering to research leadership.
                        </p>
                    </div>
                    <div className="proof-item">
                        <h3 className="proof-title">AI-Native Hiring</h3>
                        <p className="proof-desc">
                            We know where LLM-native engineers actually are, and how to bring them
                            to the teams building the frontier.
                        </p>
                    </div>
                    <div className="proof-item">
                        <h3 className="proof-title">Hard-to-Reach Talent</h3>
                        <p className="proof-desc">
                            The best people aren&rsquo;t applying. We reach them discreetly, treat
                            them well, and earn the conversation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pedigree;
