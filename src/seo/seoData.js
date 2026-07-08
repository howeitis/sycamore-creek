/**
 * Centralized SEO / structured-data manifest.
 *
 * Single source of truth shared by:
 *   - client-side pages (via the useJsonLd hook), and
 *   - the build-time prerender script (scripts/prerender.js),
 * which injects the same JSON-LD into the static HTML <head> using the same
 * element id. Because the id matches, when the client hydrates, useJsonLd finds
 * the prerendered <script> and updates it in place instead of duplicating it.
 *
 * Keeping schema here (rather than inline in each page) guarantees the markup
 * that crawlers and AI answer engines read is present in the raw HTML — before
 * any JavaScript runs.
 */
import { faqs } from '../data/faqs.js';
import { insights, insightBySlug, AUTHOR } from '../data/insights.js';

export const SITE_ORIGIN = 'https://sycamorecreekconsulting.com';
const ORG = {
    '@type': 'Organization',
    name: 'Sycamore Creek Consulting',
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/logo.png`,
};

/** FAQPage schema, derived from the shared faqs array. */
export const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
    })),
};

/** BlogPosting schema for a single article, derived from its registry entry. */
export function articleSchema(slug) {
    const a = insightBySlug[slug];
    if (!a) return null;
    const url = `${SITE_ORIGIN}/insights/${a.slug}`;
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: a.title,
        description: a.description,
        datePublished: a.date,
        dateModified: a.date,
        author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
        publisher: ORG,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
    };
}

/** CollectionPage schema listing all articles (for the /insights index). */
export const insightsIndexSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Insights — Sycamore Creek Consulting',
    url: `${SITE_ORIGIN}/insights`,
    hasPart: insights.map((a) => ({
        '@type': 'BlogPosting',
        headline: a.title,
        url: `${SITE_ORIGIN}/insights/${a.slug}`,
        datePublished: a.date,
    })),
};

/**
 * Per-route SEO manifest consumed by the prerender script.
 *   jsonLdId → the <script> element id (must match the page's useJsonLd id)
 *   jsonLd   → the structured-data object to serialize into <head>
 */
export const seoManifest = {
    '/faq': { jsonLdId: 'jsonld-faq', jsonLd: faqPageSchema },
    '/insights': { jsonLdId: 'jsonld-insights', jsonLd: insightsIndexSchema },
    ...Object.fromEntries(
        insights.map((a) => [
            `/insights/${a.slug}`,
            { jsonLdId: `jsonld-article-${a.slug}`, jsonLd: articleSchema(a.slug) },
        ]),
    ),
};

/** Every route the prerender script should emit as static HTML. */
export const prerenderRoutes = [
    '/',
    '/about',
    '/services',
    '/process',
    '/track-record',
    '/for-candidates',
    '/contact',
    '/faq',
    '/insights',
    ...insights.map((a) => `/insights/${a.slug}`),
];
