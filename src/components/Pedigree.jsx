import React from 'react';

const Pedigree = () => {
    return (
        <section className="pedigree-section">
            <div className="pedigree-container">
                <h3 className="pedigree-lead">
                    You don't need another resume screener. You need a talent engine.
                </h3>

                <p className="pedigree-body">
                    We specialize in navigating heavily constrained, complex engineering environments and scaling specialized pipelines for globally recognized legacy brands.
                </p>

                <div className="proof-grid">
                    <div className="proof-item">
                        <h4 className="proof-title">The R&D Strike</h4>
                        <p className="proof-desc">Placed a founding ML engineer for a Series A startup in 14 days.</p>
                    </div>
                    <div className="proof-item">
                        <h4 className="proof-title">The Scale Engine</h4>
                        <p className="proof-desc">Architected and scaled non-newsroom internship and early-career pipelines for a premier global media institution.</p>
                    </div>
                    <div className="proof-item">
                        <h4 className="proof-title">The Extraction</h4>
                        <p className="proof-desc">Secured foundational, cleared technical talent for highly competitive, specialized startup environments.</p>
                    </div>
                </div>
            </div>

            <style>{`
        .pedigree-section {
          background-color: var(--color-bg-base);
          padding: 5rem 20px;
          color: var(--color-text-primary);
        }

        .pedigree-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .pedigree-lead {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.3;
          max-width: 800px;
        }

        .pedigree-body {
          font-family: var(--font-body);
          font-size: 1.1rem;
          margin-bottom: 4rem;
          max-width: 700px;
          font-weight: 300;
        }

        .proof-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: 3rem;
        }

        .proof-title {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--color-bg-emphasis); /* Using Green for accent in headers here */
        }

        .proof-desc {
          font-family: var(--font-body);
          font-size: 1rem;
          color: #555;
        }
      `}</style>
        </section>
    );
};

export default Pedigree;
