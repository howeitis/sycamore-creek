/**
 * Firm identity and contact details — the single source of truth.
 *
 * Every place the site shows or emits these (footer, contact page, candidate
 * page, error boundary, privacy page, JSON-LD, llms.txt) reads from here, so
 * changing the email address or adding a company LinkedIn page is a one-line
 * edit followed by `npm run build`.
 */
export const FIRM = {
    name: 'Sycamore Creek Consulting',
    shortName: 'Sycamore Creek',
    origin: 'https://sycamorecreekconsulting.com',
    email: 'owen@howe.app',
    city: 'Washington',
    region: 'DC',
    country: 'US',
    /** Public profiles for schema.org `sameAs`. Add the LinkedIn company page here when it exists. */
    sameAs: ['https://www.linkedin.com/in/owen-howe-wm2016/'],
};

export const PRINCIPAL = {
    name: 'Owen Howe',
    jobTitle: 'Founder & Principal',
    linkedin: 'https://www.linkedin.com/in/owen-howe-wm2016/',
};
