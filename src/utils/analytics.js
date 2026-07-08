/**
 * Lightweight GA4 event helper.
 *
 * gtag is loaded async in index.html. This no-ops safely when gtag is
 * unavailable — during local dev, when an ad blocker strips the script,
 * or before the tag finishes loading — so callers never need to guard.
 *
 * @param {string} name   GA4 event name (e.g. 'cta_click', 'generate_lead').
 * @param {object} params Optional event parameters.
 */
export function trackEvent(name, params = {}) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', name, params);
    }
}
