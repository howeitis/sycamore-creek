import React, { useState } from 'react';
import { trackEvent } from '../utils/analytics';
import '../styles/Contact.css';
import Seo from '../components/Seo';

const Contact = () => {
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
            <Seo path="/contact" />
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
                            <img src={`${import.meta.env.BASE_URL}hero_profile.webp`} alt="Owen Howe, Principal" className="principal-photo" loading="lazy" />
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
        </div>
    );
};

export default Contact;
