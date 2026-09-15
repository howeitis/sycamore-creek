import React from 'react';
import { FIRM } from '../data/firm';
import '../styles/ErrorBoundary.css';

/**
 * App-level error boundary.
 *
 * Without this, an unhandled render error unmounts the whole React tree and
 * leaves the visitor on a blank white page with no recovery path. This catches
 * the error and shows a branded fallback with a way back to a working page.
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Surface for debugging; also forward to GA4 if available.
        console.error('Render error caught by ErrorBoundary:', error, info);
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'exception', {
                description: error?.message || 'render_error',
                fatal: true,
            });
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="eb-wrapper">
                    <section className="eb-header">
                        <div className="eb-container">
                            <h1 className="eb-headline">Something went wrong.</h1>
                            <p className="eb-body">
                                We hit an unexpected error. Please reload the page, or reach out
                                directly and we&apos;ll help right away.
                            </p>
                            <div className="eb-actions">
                                {/* Full reload guarantees a clean React tree. */}
                                <a href="/" className="btn-inverse">
                                    Back to Home{' '}
                                    <span className="btn-arrow" aria-hidden="true">
                                        &rarr;
                                    </span>
                                </a>
                                <a href={`mailto:${FIRM.email}`} className="btn-ghost">
                                    Email Owen{' '}
                                    <span className="btn-arrow" aria-hidden="true">
                                        &rarr;
                                    </span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
