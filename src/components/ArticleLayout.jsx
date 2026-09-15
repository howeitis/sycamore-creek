import React from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import { insightBySlug, AUTHOR } from '../data/insights';
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
            </article>
        </div>
    );
};

export default ArticleLayout;
