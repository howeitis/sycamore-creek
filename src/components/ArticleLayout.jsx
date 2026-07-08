import React from 'react';
import { Link } from 'react-router-dom';
import { useCanonical } from '../hooks/useCanonical';
import { useJsonLd } from '../hooks/useJsonLd';
import { articleSchema } from '../seo/seoData';
import { insightBySlug, AUTHOR } from '../data/insights';
import { trackEvent } from '../utils/analytics';

/**
 * Shared chrome for a single Insights article.
 *
 * Reads the article's metadata from the insights registry (by slug) so the
 * byline, date, title, and description never drift from the index card or the
 * BlogPosting JSON-LD. The article body is passed as children.
 */
const ArticleLayout = ({ slug, children }) => {
    const article = insightBySlug[slug];
    const canonical = `https://sycamorecreekconsulting.com/insights/${slug}`;
    useCanonical(canonical);
    useJsonLd(`jsonld-article-${slug}`, articleSchema(slug));

    const dateLabel = new Date(article.date + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="article-wrapper">
            <title>{`${article.title} | Sycamore Creek Consulting`}</title>
            <meta name="description" content={article.description} />

            <article className="article">
                <header className="article-header">
                    <Link to="/insights" className="article-back">← Insights</Link>
                    <span className="article-category">{article.category}</span>
                    <h1 className="article-title">{article.title}</h1>
                    <p className="article-meta">
                        By {AUTHOR.name} · <time dateTime={article.date}>{dateLabel}</time> · {article.readingTime}
                    </p>
                </header>

                <div className="article-prose">{children}</div>

                <aside className="article-cta">
                    <h2 className="article-cta-headline">Hiring for a role like this?</h2>
                    <p className="article-cta-sub">
                        Sycamore Creek runs retained and embedded searches for exactly these
                        markets. Let’s talk about what you’re trying to fill.
                    </p>
                    <Link
                        to="/contact"
                        className="btn-inverse"
                        onClick={() => trackEvent('cta_click', { location: `article:${slug}` })}
                    >
                        Start a Conversation <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                    </Link>
                </aside>
            </article>

            <style>{`
                .article-wrapper {
                    background-color: var(--color-bg-base);
                    min-height: 100vh;
                }
                .article {
                    max-width: 760px;
                    margin: 0 auto;
                    padding: 8rem 20px 5rem;
                }
                .article-back {
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--color-teal);
                    text-decoration: none;
                    letter-spacing: 0.3px;
                }
                .article-back:hover { color: var(--color-brass-deep); }
                .article-category {
                    display: block;
                    margin-top: 2rem;
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-size: 0.75rem;
                    color: var(--color-brass-deep);
                }
                .article-title {
                    font-family: var(--font-heading);
                    font-size: clamp(2.1rem, 4.5vw, 3rem);
                    font-weight: 500;
                    letter-spacing: -0.02em;
                    line-height: 1.1;
                    margin: 0.75rem 0 1rem;
                    color: var(--color-text-primary);
                }
                .article-meta {
                    font-family: var(--font-body);
                    font-size: 0.95rem;
                    color: var(--color-sage);
                    margin-bottom: 2.5rem;
                    padding-bottom: 2.5rem;
                    border-bottom: 1px solid var(--hair-on-light);
                }
                .article-prose {
                    font-family: var(--font-body);
                    font-size: 1.15rem;
                    line-height: 1.75;
                    color: var(--color-text-primary);
                }
                .article-prose h2 {
                    font-family: var(--font-heading);
                    font-size: 1.75rem;
                    font-weight: 500;
                    letter-spacing: -0.015em;
                    line-height: 1.25;
                    margin: 2.75rem 0 1rem;
                    color: var(--color-text-primary);
                }
                .article-prose h3 {
                    font-family: var(--font-heading);
                    font-size: 1.3rem;
                    font-weight: 500;
                    margin: 2rem 0 0.75rem;
                    color: var(--color-text-primary);
                }
                .article-prose p { margin: 0 0 1.4rem; }
                .article-prose ul, .article-prose ol {
                    margin: 0 0 1.4rem;
                    padding-left: 1.4rem;
                }
                .article-prose li { margin-bottom: 0.6rem; }
                .article-prose strong { color: var(--color-text-primary); }
                .article-prose a {
                    color: var(--color-teal);
                    text-decoration: underline;
                    text-decoration-color: var(--color-brass);
                    text-underline-offset: 3px;
                }
                .article-prose .lede {
                    font-family: var(--font-heading);
                    font-size: 1.4rem;
                    line-height: 1.5;
                    color: var(--color-ink-soft);
                    font-style: italic;
                    font-weight: 300;
                }
                .article-prose table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 0 0 1.6rem;
                    font-size: 1rem;
                }
                .article-prose th, .article-prose td {
                    text-align: left;
                    padding: 0.7rem 0.9rem;
                    border-bottom: 1px solid var(--hair-on-light);
                }
                .article-prose th {
                    font-family: var(--font-body);
                    font-weight: 700;
                    background: rgba(44,76,72,0.06);
                    color: var(--color-text-primary);
                }
                .article-prose blockquote {
                    margin: 2rem 0;
                    padding: 0.5rem 0 0.5rem 1.5rem;
                    border-left: 3px solid var(--color-brass);
                    font-family: var(--font-heading);
                    font-style: italic;
                    font-size: 1.25rem;
                    line-height: 1.5;
                    color: var(--color-ink-soft);
                }
                .article-prose .callout {
                    background: var(--color-bg-alt);
                    border-left: 3px solid var(--color-teal);
                    border-radius: var(--radius);
                    padding: 1.25rem 1.5rem;
                    margin: 2rem 0;
                    font-size: 1.02rem;
                }
                .article-cta {
                    margin-top: 4rem;
                    padding: 2.75rem;
                    background: var(--color-pine);
                    border-radius: var(--radius-lg);
                    text-align: center;
                    color: var(--color-text-inverse);
                }
                .article-cta-headline {
                    font-family: var(--font-heading);
                    font-size: 1.7rem;
                    font-weight: 500;
                    letter-spacing: -0.015em;
                    margin-bottom: 0.75rem;
                    color: var(--color-text-inverse);
                }
                .article-cta-sub {
                    font-family: var(--font-body);
                    font-size: 1.05rem;
                    line-height: 1.6;
                    opacity: 0.9;
                    max-width: 480px;
                    margin: 0 auto 1.75rem;
                }
                .article-cta-button {
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
                .article-cta-button:hover { transform: translateY(-2px); }

                @media (max-width: 768px) {
                    .article { padding: 6.5rem 20px 4rem; }
                    .article-title { font-size: 2rem; }
                    .article-prose { font-size: 1.08rem; }
                }
            `}</style>
        </div>
    );
};

export default ArticleLayout;
