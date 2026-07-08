import React from 'react';

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
                                We hit an unexpected error. Please reload the page, or reach
                                out directly and we&apos;ll help right away.
                            </p>
                            <div className="eb-actions">
                                {/* Full reload guarantees a clean React tree. */}
                                <a href="/" className="eb-button">Back to Home</a>
                                <a href="mailto:owen@howe.app" className="eb-link">owen@howe.app</a>
                            </div>
                        </div>
                    </section>

                    <style>{`
                        .eb-wrapper {
                            min-height: 100vh;
                            display: flex;
                            flex-direction: column;
                        }
                        .eb-header {
                            flex: 1;
                            background-color: var(--color-bg-emphasis);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            padding: 6rem 20px;
                            color: var(--color-text-inverse);
                        }
                        .eb-container { max-width: 600px; }
                        .eb-headline {
                            font-family: var(--font-heading);
                            font-size: 2.5rem;
                            font-weight: 700;
                            margin-bottom: 1rem;
                            color: var(--color-text-inverse);
                        }
                        .eb-body {
                            font-family: var(--font-body);
                            font-size: 1.1rem;
                            opacity: 0.8;
                            margin-bottom: 2.5rem;
                        }
                        .eb-actions {
                            display: flex;
                            gap: 1.5rem;
                            align-items: center;
                            justify-content: center;
                            flex-wrap: wrap;
                        }
                        .eb-button {
                            display: inline-block;
                            background-color: var(--color-text-inverse);
                            color: var(--color-bg-emphasis);
                            padding: 0.9rem 2rem;
                            font-family: var(--font-body);
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            border-radius: 4px;
                            text-decoration: none;
                            transition: opacity 0.2s;
                        }
                        .eb-button:hover { opacity: 0.85; }
                        .eb-link {
                            font-family: var(--font-body);
                            color: var(--color-text-inverse);
                            opacity: 0.8;
                            border-bottom: 1px solid rgba(245, 245, 240, 0.5);
                        }
                        .eb-link:hover { opacity: 1; }
                    `}</style>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
