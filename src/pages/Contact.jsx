import React, { useState } from 'react';
import { useCanonical } from '../hooks/useCanonical';
import { trackEvent } from '../utils/analytics';

const Contact = () => {
    useCanonical('https://sycamorecreekconsulting.com/contact');
    const [status, setStatus] = useState('IDLE'); // IDLE, SUBMITTING, SUCCESS, ERROR

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('SUBMITTING');

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xzdaglle", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('SUCCESS');
                trackEvent('generate_lead', { form: 'contact' });
                form.reset();
            } else {
                setStatus('ERROR');
            }
        } catch {
            setStatus('ERROR');
        }
    };

    return (
        <div className="page-wrapper">
            <title>Contact | Sycamore Creek Consulting</title>
            <meta name="description" content="Start a conversation with Owen Howe. Every engagement begins with a direct conversation with the principal. No pitch decks, no pressure." />
            {/* Section A - Page Header */}
            <section className="contact-header-section">
                <div className="content-container">
                    <p className="eyebrow contact-eyebrow">Get in Touch</p>
                    <h1 className="contact-headline">Every engagement starts with a <em>conversation.</em></h1>
                    <p className="contact-subhead">
                        Tell us what you&rsquo;re trying to build and we&rsquo;ll tell you how we can help. No pitch decks, no pressure &mdash; just a direct conversation with the principal.
                    </p>
                </div>
            </section>

            {/* Section B - Contact Form + Direct Info */}
            <section className="contact-grid-section">
                <div className="content-container contact-grid">

                    {/* LEFT COLUMN — CONTACT FORM */}
                    <div className="form-column" aria-live="polite">
                        {status === 'SUCCESS' ? (
                            <div className="success-message">
                                <h2 className="success-title">Message Received</h2>
                                <p className="success-body">
                                    Thank you for reaching out. Owen reviews every inquiry personally and will be in touch shortly.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="contact-form"
                            >
                                <label className="form-group">
                                    <span className="label-text">Name <span className="required">*</span></span>
                                    <input type="text" name="name" required disabled={status === 'SUBMITTING'} />
                                </label>

                                <label className="form-group">
                                    <span className="label-text">Company</span>
                                    <input type="text" name="company" disabled={status === 'SUBMITTING'} />
                                </label>

                                <label className="form-group">
                                    <span className="label-text">Email <span className="required">*</span></span>
                                    <input type="email" name="email" required disabled={status === 'SUBMITTING'} />
                                </label>

                                <label className="form-group">
                                    <span className="label-text">How can we help? <span className="required">*</span></span>
                                    <textarea name="message" rows="5" required disabled={status === 'SUBMITTING'}></textarea>
                                </label>

                                {/* Hidden fields for customization if needed later */}
                                <input type="hidden" name="_subject" value="New contact from Sycamore Creek Website" />

                                <button type="submit" className="btn-primary submit-button" disabled={status === 'SUBMITTING'}>
                                    {status === 'SUBMITTING' ? 'Sending…' : <>Send Message <span className="btn-arrow" aria-hidden="true">&rarr;</span></>}
                                </button>

                                {status === 'ERROR' && (
                                    <p className="error-message" role="alert">Something went wrong. Please try again or email directly.</p>
                                )}
                            </form>
                        )}
                    </div>

                    {/* RIGHT COLUMN — DIRECT CONTACT */}
                    <div className="info-column">
                        <div className="principal-card">
                            <img src={`${import.meta.env.BASE_URL}founder.webp`} alt="Owen Howe, Principal" className="principal-photo" loading="lazy" />
                            <p className="principal-quote">&ldquo;I read every inquiry myself. Expect a direct, considered reply &mdash; never a form response.&rdquo;</p>
                            <p className="principal-name">Owen Howe <span>&mdash; Principal</span></p>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Email Direct</span>
                            <a href="mailto:owen@howe.app" className="info-link">owen@howe.app</a>
                        </div>
                        <div className="info-item">
                            <span className="info-label">LinkedIn</span>
                            <a href="https://www.linkedin.com/in/owen-howe-wm2016/" target="_blank" rel="noopener noreferrer" className="info-link">Connect with Owen</a>
                        </div>
                        <div className="info-location">
                            <p>Based in Washington, D.C.<br />Working with clients nationwide.</p>
                        </div>
                    </div>

                </div>
            </section>


            <style>{`
                .page-wrapper {
                    background-color: var(--color-bg-base);
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                .content-container {
                    max-width: 1080px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                /* Header */
                 .contact-header-section {
                    background-color: var(--color-pine);
                    padding: clamp(7rem, 12vw, 9rem) 0 clamp(3.5rem, 6vw, 5rem);
                    color: var(--color-text-inverse);
                }

                .contact-eyebrow {
                    color: var(--color-brass-lite);
                    margin-bottom: 1.5rem;
                }

                .contact-headline {
                    font-family: var(--font-heading);
                    font-size: clamp(2.6rem, 5.5vw, 4rem);
                    font-weight: 500;
                    letter-spacing: -0.02em;
                    margin-bottom: 1.5rem;
                    line-height: 1.06;
                    max-width: 16ch;
                    color: var(--color-text-inverse);
                }

                .contact-headline em {
                    font-style: italic;
                    font-weight: 400;
                    color: var(--color-brass-lite);
                }

                .contact-subhead {
                    font-family: var(--font-body);
                    font-size: 1.2rem;
                    font-weight: 300;
                    line-height: 1.65;
                    max-width: 54ch;
                    color: rgba(244, 239, 230, 0.86);
                }

                /* Contact Grid */
                .contact-grid-section {
                    background-color: var(--color-surface);
                    padding: clamp(4rem, 7vw, 6rem) 0;
                    flex-grow: 1;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 3fr 2fr;
                    gap: clamp(2.5rem, 6vw, 5rem);
                }

                /* Form Styles */
                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                }

                .label-text {
                    font-family: var(--font-body);
                    font-weight: 700;
                    font-size: 0.72rem;
                    margin-bottom: 0.6rem;
                    color: var(--color-ink-soft);
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                }

                .required { color: var(--color-brass-deep); }

                .form-group input,
                .form-group textarea {
                    padding: 0.85rem 1rem;
                    border: 1px solid var(--hair-on-light);
                    border-radius: var(--radius);
                    font-family: var(--font-body);
                    font-size: 1rem;
                    color: var(--color-text-primary);
                    background-color: #fff;
                    transition: border-color 0.2s var(--ease), box-shadow 0.2s var(--ease);
                    width: 100%;
                    box-sizing: border-box;
                }

                .form-group textarea { resize: vertical; }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--color-teal);
                    box-shadow: 0 0 0 3px rgba(44, 76, 72, 0.12);
                }

                .submit-button {
                    align-self: flex-start;
                    margin-top: 0.5rem;
                }

                .submit-button:disabled { opacity: 0.6; cursor: default; }

                /* Direct Info Column */
                .info-column {
                    display: flex;
                    flex-direction: column;
                    gap: 2.25rem;
                }

                .principal-card {
                    padding-bottom: 2.25rem;
                    border-bottom: 1px solid var(--hair-on-light);
                }

                .principal-photo {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    object-fit: cover;
                    object-position: center top;
                    margin-bottom: 1.25rem;
                    box-shadow: var(--shadow-sm);
                }

                .principal-quote {
                    font-family: var(--font-heading);
                    font-style: italic;
                    font-size: 1.2rem;
                    line-height: 1.5;
                    color: var(--color-text-primary);
                    margin-bottom: 1rem;
                }

                .principal-name {
                    font-family: var(--font-body);
                    font-weight: 700;
                    font-size: 0.9rem;
                    color: var(--color-text-primary);
                    margin: 0;
                }

                .principal-name span {
                    font-weight: 400;
                    color: var(--color-sage);
                }

                .info-item {
                    display: flex;
                    flex-direction: column;
                }

                .info-label {
                    font-family: var(--font-body);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    font-size: 0.72rem;
                    color: var(--color-sage);
                    margin-bottom: 0.5rem;
                }

                .info-link {
                    font-family: var(--font-heading);
                    font-size: 1.25rem;
                    color: var(--color-text-primary);
                    text-decoration: none;
                    border-bottom: 1px solid transparent;
                    transition: border-color 0.2s var(--ease);
                    align-self: flex-start;
                }

                .info-link:hover {
                    border-bottom-color: var(--color-brass);
                }

                .info-location p {
                    font-family: var(--font-body);
                    font-size: 1rem;
                    color: var(--color-ink-soft);
                    line-height: 1.5;
                }

                @media (max-width: 768px) {
                    .contact-grid {
                         grid-template-columns: 1fr;
                    }

                    .contact-headline {
                        font-size: 2.5rem;
                    }

                    .submit-button {
                        width: 100%;
                        justify-content: center;
                    }
                }

                .success-message {
                    background-color: var(--color-bg-base);
                    padding: 2.5rem;
                    border-radius: var(--radius);
                    border-left: 3px solid var(--color-brass);
                }

                .success-title {
                    font-family: var(--font-heading);
                    font-weight: 500;
                    color: var(--color-pine);
                    margin-bottom: 1rem;
                    font-size: 1.6rem;
                }

                .success-body {
                    font-family: var(--font-body);
                    font-size: 1.1rem;
                    color: var(--color-text-primary);
                }

                .error-message {
                    color: #b23b3b;
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    margin-top: 1rem;
                }
            `}</style>
        </div>
    );
};

export default Contact;
