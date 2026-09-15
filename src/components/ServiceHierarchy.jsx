import React from 'react';
import '../styles/ServiceHierarchy.css';

const ServiceHierarchy = () => {
    return (
        <section className="service-hierarchy">
            {/* Block A: Retained Search (lead service) */}
            <div className="hierarchy-block block-apex">
                <div className="block-content">
                    <p className="eyebrow block-eyebrow">Lead Service</p>
                    <h2 className="block-headline">Retained Search</h2>
                    <p className="block-body">
                        Dedicated, end-to-end ownership of your most critical hires. When a mis-hire
                        isn&rsquo;t an option &mdash; cleared engineering leads, AI-native
                        specialists, confidential replacements &mdash; we run the search from market
                        map to signed offer.
                    </p>
                </div>
            </div>

            {/* Block B: The other two core services */}
            <div className="hierarchy-block block-foundation">
                <div className="foundation-grid">
                    <div className="foundation-col">
                        <h3 className="foundation-headline">Embedded Recruiting</h3>
                        <p className="foundation-body">
                            We integrate directly into your team for a defined engagement &mdash;
                            inside your ATS and standups &mdash; building pipeline and scaling
                            hiring without the overhead of a full-time recruiter.
                        </p>
                    </div>
                    <div className="foundation-col">
                        <h3 className="foundation-headline">Strategic Advising</h3>
                        <p className="foundation-body">
                            When the problem is the process &mdash; slow interviews, uncompetitive
                            offers, an org navigating AI-driven change &mdash; we advise leadership
                            on compensation, interview design, and talent strategy.
                        </p>
                    </div>
                </div>
            </div>

            {/* Block C: Our focus / niche */}
            <div className="hierarchy-block block-diff">
                <div className="block-content">
                    <p className="eyebrow block-eyebrow block-eyebrow--light">Our Focus</p>
                    <h2 className="block-headline">Cleared, Defense &amp; AI-Native Talent</h2>
                    <p className="block-body">
                        AI is rewriting the org chart, and the cleared world is racing to keep up.
                        We specialize in the hardest technical searches &mdash; LLM-native
                        engineers, FPGA and reverse-engineering talent, research leadership &mdash;
                        across the full seniority spectrum, from early-career cohorts to the
                        executive suite. Rooted in DC and NYC, placing nationwide.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServiceHierarchy;
