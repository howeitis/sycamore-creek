import React from 'react';

const ServiceHierarchy = () => {
    return (
        <section className="service-hierarchy">
            {/* Block A: Retained Search (lead service) */}
            <div className="hierarchy-block block-apex">
                <div className="block-content">
                    <h3 className="block-headline">RETAINED SEARCH</h3>
                    <p className="block-body">
                        Dedicated, end-to-end ownership of your most critical hires. When a mis-hire isn't an option — cleared engineering leads, AI-native specialists, confidential replacements — we run the search from market map to signed offer.
                    </p>
                </div>
            </div>

            {/* Block B: The other two core services */}
            <div className="hierarchy-block block-foundation">
                <div className="foundation-grid">
                    <div className="foundation-col">
                        <h4 className="foundation-headline">EMBEDDED RECRUITING</h4>
                        <p className="foundation-body">
                            We integrate directly into your team for a defined engagement — inside your ATS and standups — building pipeline and scaling hiring without the overhead of a full-time recruiter.
                        </p>
                    </div>
                    <div className="foundation-col">
                        <h4 className="foundation-headline">STRATEGIC ADVISING</h4>
                        <p className="foundation-body">
                            When the problem is the process — slow interviews, uncompetitive offers, an org navigating AI-driven change — we advise leadership on compensation, interview design, and talent strategy.
                        </p>
                    </div>
                </div>
            </div>

            {/* Block C: Our focus / niche */}
            <div className="hierarchy-block block-diff">
                <div className="block-content">
                    <h3 className="block-headline">OUR FOCUS: CLEARED, DEFENSE &amp; AI-NATIVE TALENT</h3>
                    <p className="block-body">
                        AI is rewriting the org chart, and the cleared world is racing to keep up. We specialize in the hardest technical searches — LLM-native engineers, FPGA and reverse-engineering talent, research leadership — and the leaders who build those teams. From early-career cohorts to executive leadership, across DC, NYC, and nationwide.
                    </p>
                </div>
            </div>

            <style>{`
        .service-hierarchy {
          display: flex;
          flex-direction: column;
        }

        .hierarchy-block {
          padding: 5rem 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .block-content {
          max-width: 800px;
        }

        .block-headline {
          font-family: var(--font-heading);
          font-size: 2rem; /* Consistent H2/H3 size */
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .block-body {
          font-family: var(--font-body);
          font-size: 1.25rem;
          line-height: 1.6;
          font-weight: 300;
        }

        /* Block A: Apex */
        .block-apex {
          background-color: var(--color-bg-emphasis); /* British Racing Green */
          color: var(--color-text-inverse); /* Cream */
        }

        /* Block B: Foundation */
        .block-foundation {
          background-color: var(--color-bg-base); /* Parchment */
          color: var(--color-text-primary); /* Charcoal */
        }

        .foundation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1000px;
          text-align: left;
        }

        .foundation-headline {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          text-transform: uppercase;
          color: var(--color-text-primary);
          border-bottom: 2px solid var(--color-bg-accent);
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .foundation-body {
          font-family: var(--font-body);
          font-size: 1rem;
          color: #555;
        }

        /* Block C: Differentiator */
        .block-diff {
          background-color: var(--color-bg-accent); /* Teal */
          color: var(--color-text-inverse); /* Cream */
        }

        @media (max-width: 768px) {
          .foundation-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hierarchy-block {
             padding: 4rem 20px;
          }
        }
      `}</style>
        </section>
    );
};

export default ServiceHierarchy;
