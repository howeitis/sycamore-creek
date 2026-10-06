import React from 'react';
import { Link } from 'react-router';
import { insights } from '../data/insights';
import useInView from '../hooks/useInView';
import '../styles/LatestInsights.css';

/** The three most recent articles, for the home page. */
const latest = [...insights].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

const LatestInsights = () => {
    const [ref, inView] = useInView();

    return (
        <section
            ref={ref}
            className={`latest-section reveal ${inView ? 'is-inview' : ''}`}
            aria-labelledby="latest-heading"
        >
            <div className="latest-container">
                <div className="latest-head">
                    <div>
                        <p className="eyebrow latest-eyebrow">Field notes</p>
                        <h2 className="latest-title" id="latest-heading">
                            What we&rsquo;re seeing in the <em>market.</em>
                        </h2>
                    </div>
                    <Link to="/insights" className="btn-ghost latest-all">
                        All insights{' '}
                        <span className="btn-arrow" aria-hidden="true">
                            &rarr;
                        </span>
                    </Link>
                </div>

                <ul className="latest-grid">
                    {latest.map((a) => (
                        <li key={a.slug} className="latest-item">
                            <Link to={`/insights/${a.slug}`} className="latest-link">
                                <span className="latest-category">{a.category}</span>
                                <span className="latest-item-title">{a.title}</span>
                                <span className="latest-excerpt">{a.excerpt}</span>
                                <span className="latest-meta">{a.readingTime}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default LatestInsights;
