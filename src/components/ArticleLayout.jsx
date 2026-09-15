import React from 'react';
import { Link } from 'react-router';
import Seo from './Seo';
import { insightBySlug, relatedInsights, AUTHOR } from '../data/insights';
import { trackEvent } from '../utils/analytics';
import '../styles/ArticleLayout.css';

/**
 * Shared chrome for a single Insights article.
 *
 * Reads the article's metadata from the insights registry (by slug) so the
 * byline, date, title, and description never drift from the index card or the
 * BlogPosting JSON-LD. The article body is passed as children.
 */
const ArticleLayout = ({ slug, children }) => {
    const article = insightBySlug[slug];
    const related = relatedInsights(slug);

    const dateLabel = new Date(article.date + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="article-wrapper">
            <Seo path={`/insights/${slug}`} />

            <article className="article">
                <header className="article-header">
                    <Link to="/insights" className="article-back">
                        ← Insights
                    </Link>
                    <span className="article-category">{article.category}</span>
                    <h1 className="article-title">{article.title}</h1>
                    <p className="article-meta">
                        By {AUTHOR.name} · <time dateTime={article.date}>{dateLabel}</time> ·{' '}
                        {article.readingTime}
                    </p>
                </header>

                <div className="article-prose">{children}</div>

                <aside className="article-author">
                    <img
                        src={`${import.meta.env.BASE_URL}hero_profile.webp`}
                        alt=""
                        className="article-author-photo"
                        width="72"
                        height="72"
                        loading="lazy"
                    />
                    <div className="article-author-text">
                        <p className="article-author-name">
                            <Link to="/about">{AUTHOR.name}</Link>
                            <span> &mdash; {AUTHOR.title}</span>
                        </p>
                        <p className="article-author-bio">{AUTHOR.bio}</p>
                        <p className="article-author-links">
                            <Link to="/about">About the firm</Link>
                            <a href={AUTHOR.url} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </p>
                    </div>
                </aside>

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
                        Start a Conversation{' '}
                        <span className="btn-arrow" aria-hidden="true">
                            &rarr;
                        </span>
                    </Link>
                </aside>

                {related.length > 0 && (
                    <section className="article-related" aria-labelledby="related-heading">
                        <p className="eyebrow article-related-eyebrow" id="related-heading">
                            Related field notes
                        </p>
                        <ul className="article-related-list">
                            {related.map((r) => (
                                <li key={r.slug} className="article-related-item">
                                    <Link
                                        to={`/insights/${r.slug}`}
                                        className="article-related-link"
                                    >
                                        <span className="article-related-category">
                                            {r.category}
                                        </span>
                                        <span className="article-related-title">{r.title}</span>
                                        <span className="article-related-meta">
                                            {r.readingTime}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </article>
        </div>
    );
};

export default ArticleLayout;
