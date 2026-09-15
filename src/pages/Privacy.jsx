import React from 'react';
import { Link } from 'react-router';
import '../styles/Privacy.css';
import Seo from '../components/Seo';
import { FIRM } from '../data/firm';
import CreekLine from '../components/CreekLine';

const EFFECTIVE = 'September 15, 2026';

const Privacy = () => {
    return (
        <div className="page-wrapper">
            <Seo path="/privacy" />

            <section className="privacy-header has-creek">
                <CreekLine />
                <div className="content-container">
                    <p className="eyebrow privacy-eyebrow">Privacy</p>
                    <h1 className="privacy-headline">
                        How we handle <em>your information.</em>
                    </h1>
                    <p className="privacy-subhead">
                        Sycamore Creek Consulting is a small firm that lives on discretion. This
                        page explains, plainly, what this website collects, why, and who else is
                        involved. Effective {EFFECTIVE}.
                    </p>
                </div>
            </section>

            <section className="privacy-body">
                <div className="content-container privacy-prose">
                    <h2>What we collect</h2>
                    <p>
                        <strong>Contact form.</strong> When you use the form on the{' '}
                        <Link to="/contact">Contact</Link> page we receive what you type: your name,
                        email address, company (optional), the kind of enquiry, and your message. It
                        is delivered to us by Formspree and read personally by the principal.
                    </p>
                    <p>
                        <strong>Email and LinkedIn.</strong> If you email us or connect on LinkedIn,
                        we hold that correspondence like any professional would.
                    </p>
                    <p>
                        <strong>Analytics.</strong> We use Google Analytics 4 to understand which
                        pages are read and how visitors arrive. It sets cookies and records
                        approximate location, device and browser type, and the pages you view. IP
                        addresses are not stored by Google Analytics 4. We do not use advertising
                        features, remarketing, or cross-site tracking.
                    </p>

                    <h2>Why we collect it</h2>
                    <ul>
                        <li>To reply to you and, if you ask us to, to scope an engagement.</li>
                        <li>To keep in touch with candidates who have asked to stay in touch.</li>
                        <li>
                            To see which articles and pages are useful, so we write more of them.
                        </li>
                    </ul>
                    <p>
                        We do not sell, rent, or trade personal information, and we do not send
                        marketing email to anyone who has not asked for it.
                    </p>

                    <h2>Candidates</h2>
                    <p>
                        Conversations with candidates are confidential. We do not contact your
                        current employer, share your details with a client, or move your candidacy
                        forward without your explicit say-so. Candidate information is held only for
                        as long as it is useful to a search you are part of or have asked to be
                        considered for.
                    </p>

                    <h2>Who else is involved</h2>
                    <ul>
                        <li>
                            <strong>Formspree</strong> delivers contact form submissions.
                        </li>
                        <li>
                            <strong>Google Analytics</strong> provides site analytics; Google Fonts
                            serves the typefaces.
                        </li>
                        <li>
                            <strong>Vercel</strong> hosts the site and keeps standard server logs.
                        </li>
                    </ul>
                    <p>
                        Each of these providers processes data under its own privacy policy. We
                        choose them for reliability and do not grant them any other use of your
                        information.
                    </p>

                    <h2>Cookies</h2>
                    <p>
                        The only cookies set by this site are the Google Analytics cookies described
                        above. You can block them with a browser extension or your browser&rsquo;s
                        settings without affecting anything on the site.
                    </p>

                    <h2>Your choices</h2>
                    <p>
                        You can ask us at any time what we hold about you, ask us to correct it, or
                        ask us to delete it. Email{' '}
                        <a href={`mailto:${FIRM.email}?subject=Privacy%20request`}>{FIRM.email}</a>{' '}
                        and we will respond personally.
                    </p>

                    <h2>Changes</h2>
                    <p>
                        If this page changes in a way that matters, the effective date above will
                        change with it.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
