import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="nf-wrapper">
            <title>Page Not Found | Sycamore Creek Consulting</title>
            <section className="nf-header">
                <div className="nf-container">
                    <p className="nf-code">404</p>
                    <h1 className="nf-headline">Page not found.</h1>
                    <p className="nf-body">
                        The page you're looking for doesn't exist or has moved.
                    </p>
                    <Link to="/" className="nf-button">Back to Home</Link>
                </div>
            </section>

            <style>{`
                .nf-wrapper {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                .nf-header {
                    flex: 1;
                    background-color: var(--color-bg-emphasis);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 6rem 20px;
                    color: var(--color-text-inverse);
                }

                .nf-container {
                    max-width: 600px;
                }

                .nf-code {
                    font-family: var(--font-heading);
                    font-size: 6rem;
                    font-weight: 900;
                    opacity: 0.2;
                    line-height: 1;
                    margin-bottom: 1rem;
                }

                .nf-headline {
                    font-family: var(--font-heading);
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: var(--color-text-inverse);
                }

                .nf-body {
                    font-family: var(--font-body);
                    font-size: 1.1rem;
                    opacity: 0.8;
                    margin-bottom: 2.5rem;
                }

                .nf-button {
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

                .nf-button:hover {
                    opacity: 0.85;
                }
            `}</style>
        </div>
    );
};

export default NotFound;
