import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import '../styles/Contact.css';
import Seo from '../components/Seo';

const FORMSPREE = 'https://formspree.io/f/xzdaglle';
const CONTACT_EMAIL = 'owen@howe.app';
const LINKEDIN_URL = 'https://www.linkedin.com/in/owen-howe-wm2016/';

/**
 * Inquiry types. The value routes the email subject (so a candidate note and
 * a retained-search brief don't land in the same pile) and is attached to the
 * GA4 lead event so conversions can be segmented.
 */
const INQUIRY_TYPES = [
    { value: 'retained-search', label: 'Retained search — a critical hire' },
    { value: 'embedded-recruiting', label: 'Embedded recruiting — scaling a team' },
    { value: 'advising', label: 'Strategic advising — comp, process, org' },
    { value: 'candidate', label: "I'm a candidate — introducing myself" },
    { value: 'other', label: 'Something else' },
];

const Contact = () => {
    const [status, setStatus] = useState('IDLE'); // IDLE, SUBMITTING, SUCCESS, ERROR
    const [inquiry, setInquiry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('SUBMITTING');

        const form = e.target;
        const data = new FormData(form);
        const type = data.get('inquiry') || 'other';
        const label = INQUIRY_TYPES.find((t) => t.value === type)?.label || 'Inquiry';
        data.set(
            '_subject',
            `[${label.split(' — ')[0]}] New inquiry via sycamorecreekconsulting.com`,
        );

        try {
            const response = await fetch(FORMSPREE, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            });

            if (response.ok) {
                setStatus('SUCCESS');
                trackEvent('generate_lead', { form: 'contact', inquiry_type: type });
                form.reset();
            } else {
                setStatus('ERROR');
            }
        } catch {
            setStatus('ERROR');
        }
    };

    const submitting = status === 'SUBMITTING';

    return (
        <div className="page-wrapper">
            <Seo path="/contact" />
            {/* Section A - Page Header */}
            <section className="contact-header-section">
                <div className="content-container">
                    <p className="eyebrow contact-eyebrow">Get in Touch</p>
                    <h1 className="contact-headline">
                        Every engagement starts with a <em>conversation.</em>
                    </h1>
                    <p className="contact-subhead">
                        Tell us what you&rsquo;re trying to build and we&rsquo;ll tell you how we
                        can help. No pitch decks, no pressure &mdash; just a direct conversation
                        with the principal.
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
                                <h2 className="success-title">Message received.</h2>
                                <p className="success-body">
                                    Thank you. Owen reads every inquiry personally and usually
                                    replies within one business day.
                                </p>
                                <div className="success-actions">
                                    <button
                                        type="button"
                                        className="btn-ghost"
                                        onClick={() => {
                                            setInquiry('');
                                            setStatus('IDLE');
                                        }}
                                    >
                                        Send another message{' '}
                                        <span className="btn-arrow" aria-hidden="true">
                                            &rarr;
                                        </span>
                                    </button>
                                    <Link to="/insights" className="btn-ghost">
                                        Read the field notes{' '}
                                        <span className="btn-arrow" aria-hidden="true">
                                            &rarr;
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="contact-form"
                                aria-busy={submitting}
                            >
                                <label className="form-group">
                                    <span className="label-text">
                                        What brings you here? <span className="required">*</span>
                                    </span>
                                    <select
                                        name="inquiry"
                                        required
                                        value={inquiry}
                                        onChange={(e) => setInquiry(e.target.value)}
                                    >
                                        <option value="" disabled>
                                            Choose one
                                        </option>
                                        {INQUIRY_TYPES.map((t) => (
                                            <option key={t.value} value={t.value}>
                                                {t.label}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <div className="form-row">
                                    <label className="form-group">
                                        <span className="label-text">
                                            Name <span className="required">*</span>
                                        </span>
                                        <input
                                            type="text"
                                            name="name"
                                            autoComplete="name"
                                            required
                                            readOnly={submitting}
                                        />
                                    </label>

                                    <label className="form-group">
                                        <span className="label-text">
                                            {inquiry === 'candidate' ? 'Current role' : 'Company'}
                                        </span>
                                        <input
                                            type="text"
                                            name="company"
                                            autoComplete={
                                                inquiry === 'candidate'
                                                    ? 'organization-title'
                                                    : 'organization'
                                            }
                                            readOnly={submitting}
                                        />
                                    </label>
                                </div>

                                <label className="form-group">
                                    <span className="label-text">
                                        Email <span className="required">*</span>
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        inputMode="email"
                                        required
                                        readOnly={submitting}
                                    />
                                </label>

                                <label className="form-group">
                                    <span className="label-text">
                                        {inquiry === 'candidate'
                                            ? 'A few lines about you'
                                            : 'What are you trying to fill?'}{' '}
                                        <span className="required">*</span>
                                    </span>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        readOnly={submitting}
                                    ></textarea>
                                </label>

                                {/* Honeypot: hidden from people, filled by bots. Formspree
                                    silently discards any submission where it has a value. */}
                                <input
                                    type="text"
                                    name="_gotcha"
                                    tabIndex="-1"
                                    autoComplete="off"
                                    aria-hidden="true"
                                    className="hp-field"
                                />
                                <input type="hidden" name="_subject" value="New inquiry" />

                                <div className="submit-row">
                                    <button
                                        type="submit"
                                        className="btn-primary submit-button"
                                        disabled={submitting}
                                    >
                                        {submitting ? (
                                            'Sending…'
                                        ) : (
                                            <>
                                                Send Message{' '}
                                                <span className="btn-arrow" aria-hidden="true">
                                                    &rarr;
                                                </span>
                                            </>
                                        )}
                                    </button>
                                    <p className="form-note">
                                        Confidential. Owen replies personally, usually within one
                                        business day. See our{' '}
                                        <Link to="/privacy">privacy policy</Link>.
                                    </p>
                                </div>

                                {status === 'ERROR' && (
                                    <p className="error-message" role="alert">
                                        The message didn&rsquo;t send. Please try again, or email{' '}
                                        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{' '}
                                        directly.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>

                    {/* RIGHT COLUMN — DIRECT CONTACT */}
                    <div className="info-column">
                        <div className="principal-card">
                            <img
                                src={`${import.meta.env.BASE_URL}hero_profile.webp`}
                                alt="Owen Howe, Principal"
                                className="principal-photo"
                                width="72"
                                height="72"
                                loading="lazy"
                            />
                            <p className="principal-quote">
                                &ldquo;I read every inquiry myself. Expect a direct, considered
                                reply &mdash; never a form response.&rdquo;
                            </p>
                            <p className="principal-name">
                                Owen Howe <span>&mdash; Principal</span>
                            </p>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Email Direct</span>
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="info-link"
                                onClick={() =>
                                    trackEvent('contact_click', {
                                        method: 'email',
                                        location: 'contact_page',
                                    })
                                }
                            >
                                {CONTACT_EMAIL}
                            </a>
                        </div>
                        <div className="info-item">
                            <span className="info-label">LinkedIn</span>
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="info-link"
                                onClick={() =>
                                    trackEvent('contact_click', {
                                        method: 'linkedin',
                                        location: 'contact_page',
                                    })
                                }
                            >
                                Connect with Owen
                            </a>
                        </div>
                        <div className="info-item">
                            <span className="info-label">What happens next</span>
                            <ol className="next-steps">
                                <li>Owen replies with a few questions or a time to talk.</li>
                                <li>A direct conversation to scope the role and the market.</li>
                                <li>
                                    A written proposal &mdash; only if it&rsquo;s the right fit.
                                </li>
                            </ol>
                        </div>
                        <div className="info-location">
                            <p>
                                Based in Washington, D.C.
                                <br />
                                Working with clients nationwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
