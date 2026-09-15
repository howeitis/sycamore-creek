import React from 'react';
import { Link } from 'react-router';
import { insights } from '../data/insights';
import '../styles/Insights.css';
import Seo from '../components/Seo';
import CreekLine from '../components/CreekLine';

const Insights = () => {
    return (
        <div className="insights-wrapper">
            <Seo path="/insights" />

            <section className="insights-header has-creek">
                <CreekLine />
                <div className="insights-container">
                    <p className="eyebrow insights-eyebrow">Field notes</p>
                    <h1 className="insights-headline">
                        Insights on <em>technical hiring.</em>
                    </h1>
                    <p className="insights-subhead">
                        Field notes on hiring scarce technical talent — compensation, recruiting
                        models, and how to reach the engineers who aren’t looking.
                    </p>
                    <a href="/feed.xml" className="insights-rss" type="application/rss+xml">
                        Subscribe via RSS
                    </a>
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
        </div>
    );
};

export default Insights;
