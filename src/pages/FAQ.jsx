import React from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import { trackEvent } from '../utils/analytics';
import '../styles/FAQ.css';
import Seo from '../components/Seo';

/**
 * FAQ page. Uses native <details>/<summary> so every answer is present in the
 * DOM (and the prerendered HTML) without JavaScript — exactly what crawlers and
 * AI answer engines extract. The FAQPage JSON-LD is derived from the same faqs
 * array via seoData, so the visible copy and the structured data can't drift.
 */
const FAQ = () => {
    return (
        <div className="faq-wrapper">
            <Seo path="/faq" />

            <section className="faq-header">
                <div className="faq-container">
                    <p className="eyebrow faq-eyebrow">Straight answers</p>
                    <h1 className="faq-headline">
                        Frequently asked <em>questions.</em>
                    </h1>
                    <p className="faq-subhead">
                        Straight answers on how retained search works, what it costs, and how we run
                        an engagement. Don’t see your question?{' '}
                        <Link to="/contact" className="faq-inline-link">
                            Ask us directly.
                        </Link>
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
                        Get in Touch{' '}
                        <span className="btn-arrow" aria-hidden="true">
                            &rarr;
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
