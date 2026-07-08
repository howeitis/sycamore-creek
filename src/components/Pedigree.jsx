import React from 'react';

const Pedigree = () => {
  return (
    <section className="pedigree-section">
      <div className="pedigree-container">
        <p className="eyebrow pedigree-eyebrow">Why Sycamore Creek</p>

        <h2 className="pedigree-lead">
          You don&rsquo;t need another resume screener. You need a <em>talent engine.</em>
        </h2>

        <p className="pedigree-body">
          From stealth defense startups to global institutions, we navigate complex, high-stakes hiring &mdash; reaching the specialists other firms can&rsquo;t, across the full seniority spectrum from early-career cohorts to executive leadership.
        </p>

        <div className="proof-grid">
          <div className="proof-item">
            <h3 className="proof-title">Cleared &amp; Defense Talent</h3>
            <p className="proof-desc">Deep fluency in the cleared and defense ecosystem &mdash; from FPGA and reverse engineering to research leadership.</p>
          </div>
          <div className="proof-item">
            <h3 className="proof-title">AI-Native Hiring</h3>
            <p className="proof-desc">We know where LLM-native engineers actually are, and how to bring them to the teams building the frontier.</p>
          </div>
          <div className="proof-item">
            <h3 className="proof-title">Hard-to-Reach Talent</h3>
            <p className="proof-desc">The best people aren&rsquo;t applying. We reach them discreetly, treat them well, and earn the conversation.</p>
          </div>
        </div>
      </div>

      <style>{`
        .pedigree-section {
          background-color: var(--color-bg-base);
          padding: clamp(4.5rem, 8vw, 7rem) 24px;
          color: var(--color-text-primary);
        }

        .pedigree-container {
          max-width: 1080px;
          margin: 0 auto;
        }

        .pedigree-eyebrow {
          margin-bottom: 1.75rem;
        }

        .pedigree-lead {
          font-family: var(--font-heading);
          font-size: clamp(1.9rem, 3.6vw, 2.9rem);
          font-weight: 500;
          color: var(--color-text-primary);
          margin-bottom: 1.75rem;
          line-height: 1.14;
          letter-spacing: -0.015em;
          max-width: 18ch;
        }

        .pedigree-lead em {
          font-style: italic;
          font-weight: 400;
          color: var(--color-teal);
        }

        .pedigree-body {
          font-family: var(--font-body);
          font-size: 1.15rem;
          margin-bottom: 4rem;
          max-width: 62ch;
          font-weight: 300;
          color: var(--color-ink-soft);
        }

        .proof-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 0;
          border-top: 1px solid var(--hair-on-light);
        }

        .proof-item {
          padding: 2.5rem 2rem 2rem 0;
          position: relative;
        }

        .proof-item + .proof-item {
          padding-left: 2rem;
          border-left: 1px solid var(--hair-on-light);
        }

        .proof-item::before {
          content: "";
          position: absolute;
          top: -1px;
          left: 0;
          width: 2.25rem;
          height: 2px;
          background: var(--color-brass);
        }

        .proof-item + .proof-item::before {
          left: 2rem;
        }

        .proof-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 500;
          margin-bottom: 0.6rem;
          color: var(--color-teal);
          letter-spacing: -0.01em;
        }

        .proof-desc {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-ink-soft);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 640px) {
          .proof-item,
          .proof-item + .proof-item {
            padding: 2.25rem 0 1.5rem 0;
            border-left: none;
            border-top: 1px solid var(--hair-on-light);
          }
          .proof-item:first-of-type { border-top: none; }
          .proof-item + .proof-item::before { left: 0; }
        }
      `}</style>
    </section>
  );
};

export default Pedigree;
