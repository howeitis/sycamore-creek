import React from 'react';

const ServiceHierarchy = () => {
    return (
        <section className="service-hierarchy">
            {/* Block A: Retained Search */}
            <div className="hierarchy-block block-apex">
                <div className="block-content">
                    <h3 className="block-headline">RETAINED SEARCH</h3>
                    <p className="block-body">
                        Dedicated, white-glove extraction of niche technical talent. When you cannot afford a mis-hire, we own the search from market map to offer acceptance.
                    </p>
                </div>
            </div>

            {/* Block B: The Foundation */}
            <div className="hierarchy-block block-foundation">
                <div className="foundation-grid">
                    <div className="foundation-col">
                        <h4 className="foundation-headline">EARLY-CAREER ARCHITECTURE</h4>
                        <p className="foundation-body">
                            Internships shouldn't be an afterthought. We build the frameworks to capture and convert top-tier emerging talent before the competition knows their names.
                        </p>
                    </div>
                    <div className="foundation-col">
                        <h4 className="foundation-headline">TALENT MARKET MAPPING</h4>
                        <p className="foundation-body">
                            Blind hiring is a liability. We deliver comprehensive intelligence on competitor talent pools, compensation benchmarks, and organizational structures.
                        </p>
                    </div>
                </div>
            </div>

            {/* Block C: The Differentiator */}
            <div className="hierarchy-block block-diff">
                <div className="block-content">
                    <h3 className="block-headline">THE AI TRANSITION</h3>
                    <p className="block-body">
                        AI is rewriting the org chart. We advise leadership on acquiring LLM-native engineers, integrating AI tools into HR operations, and restructuring legacy teams for the automated future.
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
