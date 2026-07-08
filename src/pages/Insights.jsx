import React from 'react';
import { Link } from 'react-router-dom';
import { useCanonical } from '../hooks/useCanonical';
import { useJsonLd } from '../hooks/useJsonLd';
import { insightsIndexSchema } from '../seo/seoData';
import { insights } from '../data/insights';

const Insights = () => {
    useCanonical('https://sycamorecreekconsulting.com/insights');
    useJsonLd('jsonld-insights', insightsIndexSchema);

    return (
        <div className="insights-wrapper">
            <title>Insights | Sycamore Creek Consulting</title>
            <meta name="description" content="Field notes on technical and executive hiring — compensation benchmarks, recruiting models, and how to hire scarce engineering talent in defense, AI, and hardware." />

            <section className="insights-header">
                <div className="insights-container">
                    <h1 className="insights-headline">Insights</h1>
                    <p className="insights-subhead">
                        Field notes on hiring scarce technical talent — compensation, recruiting
                        models, and how to reach the engineers who aren’t looking.
                    </p>
                </div>
            </section>

            <section className="insights-list-section">
                <div className="insights-container">
                    <ul className="insights-grid">
                        {insights.map((a) => (
                            <li key={a.slug} className="insight-card">
                                <Link to={`/insights/${a.slug}`} className="insight-card-link">
                                    <span className="insight-card-category">{a.category}</span>
                                    <h2 className="insight-card-title">{a.title}</h2>
                                    <p className="insight-card-excerpt">{a.excerpt}</p>
                                    <span className="insight-card-meta">{a.readingTime}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <style>{`
                .insights-wrapper {
                    background-color: var(--color-bg-base);
                    min-height: 100vh;
                }
                .insights-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                .insights-header {
                    background-color: var(--color-bg-emphasis);
                    color: var(--color-text-inverse);
                    padding: 8rem 0 4rem;
                }
                .insights-headline {
                    font-family: var(--font-heading);
                    font-size: 3.5rem;
                    font-weight: 700;
                    line-height: 1.1;
                    margin-bottom: 1.25rem;
                    color: var(--color-text-inverse);
                }
                .insights-subhead {
                    font-family: var(--font-body);
                    font-size: 1.25rem;
                    font-weight: 300;
                    line-height: 1.6;
                    max-width: 640px;
                    opacity: 0.9;
                }
                .insights-list-section { padding: 4rem 0 5rem; }
                .insights-grid {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }
                .insight-card {
                    background: #ffffff;
                    border: 1px solid #e6e6e0;
                    border-radius: 10px;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .insight-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
                }
                .insight-card-link {
                    display: block;
                    padding: 1.75rem;
                    text-decoration: none;
                    height: 100%;
                }
                .insight-card-category {
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    font-size: 0.7rem;
                    color: var(--color-bg-accent);
                }
                .insight-card-title {
                    font-family: var(--font-heading);
                    font-size: 1.35rem;
                    font-weight: 700;
                    line-height: 1.25;
                    margin: 0.6rem 0 0.75rem;
                    color: var(--color-text-primary);
                }
                .insight-card-excerpt {
                    font-family: var(--font-body);
                    font-size: 1rem;
                    line-height: 1.6;
                    color: #555;
                    margin-bottom: 1rem;
                }
                .insight-card-meta {
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    color: #8a8a8a;
                }
                @media (max-width: 768px) {
                    .insights-headline { font-size: 2.5rem; }
                    .insights-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default Insights;
