import React from 'react';

const ServiceHierarchy = () => {
    return (
        <section className="service-hierarchy">
            {/* Block A: Retained Search (lead service) */}
            <div className="hierarchy-block block-apex">
                <div className="block-content">
                    <p className="eyebrow block-eyebrow">Lead Service</p>
                    <h2 className="block-headline">Retained Search</h2>
                    <p className="block-body">
                        Dedicated, end-to-end ownership of your most critical hires. When a mis-hire isn&rsquo;t an option &mdash; cleared engineering leads, AI-native specialists, confidential replacements &mdash; we run the search from market map to signed offer.
                    </p>
                </div>
            </div>

            {/* Block B: The other two core services */}
            <div className="hierarchy-block block-foundation">
                <div className="foundation-grid">
                    <div className="foundation-col">
                        <h3 className="foundation-headline">Embedded Recruiting</h3>
                        <p className="foundation-body">
                            We integrate directly into your team for a defined engagement &mdash; inside your ATS and standups &mdash; building pipeline and scaling hiring without the overhead of a full-time recruiter.
                        </p>
                    </div>
                    <div className="foundation-col">
                        <h3 className="foundation-headline">Strategic Advising</h3>
                        <p className="foundation-body">
                            When the problem is the process &mdash; slow interviews, uncompetitive offers, an org navigating AI-driven change &mdash; we advise leadership on compensation, interview design, and talent strategy.
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
                        AI is rewriting the org chart, and the cleared world is racing to keep up. We specialize in the hardest technical searches &mdash; LLM-native engineers, FPGA and reverse-engineering talent, research leadership &mdash; and the leaders who build those teams. From early-career cohorts to executive leadership, across DC, NYC, and nationwide.
                    </p>
                </div>
            </div>

            <style>{`
        .service-hierarchy {
          display: flex;
          flex-direction: column;
        }

        .hierarchy-block {
          padding: clamp(4.5rem, 8vw, 7rem) 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .block-content {
          max-width: 760px;
        }

        .block-eyebrow {
          justify-content: center;
          margin-bottom: 1.4rem;
        }

        .block-eyebrow--light {
          color: var(--color-brass-lite);
        }

        .block-headline {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 500;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          line-height: 1.08;
        }

        .block-body {
          font-family: var(--font-body);
          font-size: clamp(1.1rem, 1.5vw, 1.25rem);
          line-height: 1.65;
          font-weight: 300;
        }

        /* Block A: Apex — Deep Pine */
        .block-apex {
          background-color: var(--color-pine);
          color: var(--color-text-inverse);
        }

        .block-apex .block-body {
          color: rgba(244, 239, 230, 0.85);
        }

        /* Block B: Foundation — Parchment */
        .block-foundation {
          background-color: var(--color-bg-base);
          color: var(--color-text-primary);
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
          font-size: 1.6rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--color-text-primary);
          padding-bottom: 0.75rem;
          margin-bottom: 1.1rem;
          display: block;
          position: relative;
        }

        .foundation-headline::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 2.5rem;
          height: 2px;
          background: var(--color-teal);
        }

        .foundation-body {
          font-family: var(--font-body);
          font-size: 1.05rem;
          color: var(--color-ink-soft);
          line-height: 1.65;
        }

        /* Block C: Differentiator — Teal (company color) */
        .block-diff {
          background-color: var(--color-teal);
          color: var(--color-text-inverse);
        }

        .block-diff .block-body {
          color: rgba(244, 239, 230, 0.88);
        }

        @media (max-width: 768px) {
          .foundation-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
        </section>
    );
};

export default ServiceHierarchy;
