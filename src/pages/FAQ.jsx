import React from 'react';
import { Link } from 'react-router-dom';
import { useCanonical } from '../hooks/useCanonical';
import { useJsonLd } from '../hooks/useJsonLd';
import { faqPageSchema } from '../seo/seoData';
import { faqs } from '../data/faqs';
import { trackEvent } from '../utils/analytics';

/**
 * FAQ page. Uses native <details>/<summary> so every answer is present in the
 * DOM (and the prerendered HTML) without JavaScript — exactly what crawlers and
 * AI answer engines extract. The FAQPage JSON-LD is derived from the same faqs
 * array via seoData, so the visible copy and the structured data can't drift.
 */
const FAQ = () => {
    useCanonical('https://sycamorecreekconsulting.com/faq');
    useJsonLd('jsonld-faq', faqPageSchema);

    return (
        <div className="faq-wrapper">
            <title>Frequently Asked Questions | Sycamore Creek Consulting</title>
            <meta name="description" content="Answers to common questions about retained search, recruiting fees, timelines, cleared and defense hiring, embedded recruiting, and how Sycamore Creek works." />

            <section className="faq-header">
                <div className="faq-container">
                    <h1 className="faq-headline">Frequently asked questions</h1>
                    <p className="faq-subhead">
                        Straight answers on how retained search works, what it costs, and how we
                        run an engagement. Don’t see your question?{' '}
                        <Link to="/contact" className="faq-inline-link">Ask us directly.</Link>
                    </p>
                </div>
            </section>

            <section className="faq-list-section">
                <div className="faq-container">
                    {faqs.map((item, i) => (
                        <details key={i} className="faq-item">
                            <summary className="faq-question">{item.q}</summary>
                            <p className="faq-answer">{item.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            <section className="faq-cta">
                <div className="faq-container faq-cta-inner">
                    <h2 className="faq-cta-headline">Still have a question?</h2>
                    <Link
                        to="/contact"
                        className="btn-inverse"
                        onClick={() => trackEvent('cta_click', { location: 'faq' })}
                    >
                        Get in Touch <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </section>

            <style>{`
                .faq-wrapper {
                    background-color: var(--color-bg-base);
                    min-height: 100vh;
                }
                .faq-container {
                    max-width: 820px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                .faq-header {
                    background-color: var(--color-bg-emphasis);
                    color: var(--color-text-inverse);
                    padding: 8rem 0 4rem;
                }
                .faq-headline {
                    font-family: var(--font-heading);
                    font-size: clamp(2.5rem, 5vw, 3.5rem);
                    font-weight: 500;
                    letter-spacing: -0.02em;
                    line-height: 1.06;
                    margin-bottom: 1.25rem;
                    color: var(--color-text-inverse);
                }
                .faq-subhead {
                    font-family: var(--font-body);
                    font-size: 1.2rem;
                    font-weight: 300;
                    line-height: 1.6;
                    opacity: 0.92;
                }
                .faq-inline-link { color: var(--color-brass-lite); text-decoration: underline; text-underline-offset: 3px; }
                .faq-list-section { padding: clamp(3rem, 6vw, 4.5rem) 0; }
                .faq-item {
                    border-bottom: 1px solid var(--hair-on-light);
                    padding: 0.5rem 0;
                }
                .faq-question {
                    font-family: var(--font-heading);
                    font-size: 1.3rem;
                    font-weight: 500;
                    letter-spacing: -0.01em;
                    color: var(--color-text-primary);
                    cursor: pointer;
                    list-style: none;
                    padding: 1.1rem 2.5rem 1.1rem 0;
                    position: relative;
                }
                .faq-question::-webkit-details-marker { display: none; }
                .faq-question::after {
                    content: '+';
                    position: absolute;
                    right: 0.25rem;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 1.6rem;
                    font-weight: 400;
                    color: var(--color-bg-accent);
                    transition: transform 0.2s;
                }
                .faq-item[open] .faq-question::after {
                    content: '−';
                }
                .faq-answer {
                    font-family: var(--font-body);
                    font-size: 1.08rem;
                    line-height: 1.7;
                    color: var(--color-ink-soft);
                    padding: 0 2.5rem 1.25rem 0;
                    margin: 0;
                }
                .faq-cta {
                    background-color: var(--color-bg-accent);
                    padding: 4rem 0;
                }
                .faq-cta-inner { text-align: center; }
                .faq-cta-headline {
                    font-family: var(--font-heading);
                    font-size: clamp(1.6rem, 3vw, 2.2rem);
                    font-weight: 500;
                    letter-spacing: -0.015em;
                    color: var(--color-text-inverse);
                    margin-bottom: 1.75rem;
                }
                .faq-cta-button {
                    display: inline-block;
                    background: #ffffff;
                    color: var(--color-bg-emphasis);
                    padding: 0.9rem 2.25rem;
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.85rem;
                    border-radius: 4px;
                    text-decoration: none;
                    transition: transform 0.2s;
                }
                .faq-cta-button:hover { transform: translateY(-2px); }
                @media (max-width: 768px) {
                    .faq-headline { font-size: 2.4rem; }
                }
            `}</style>
        </div>
    );
};

export default FAQ;
