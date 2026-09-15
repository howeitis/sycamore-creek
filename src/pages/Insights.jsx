import React from 'react';
import { Link } from 'react-router-dom';
import { insights } from '../data/insights';
import '../styles/Insights.css';
import Seo from '../components/Seo';

const Insights = () => {

    return (
        <div className="insights-wrapper">
            <Seo path="/insights" />

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
        </div>
    );
};

export default Insights;
