import React from 'react';
import { seoManifest, SITE_ORIGIN } from '../seo/seoData';
import { useCanonical } from '../hooks/useCanonical';
import { useJsonLd } from '../hooks/useJsonLd';

/**
 * Per-page head metadata, driven entirely by the SEO manifest.
 *
 * Renders <title> and <meta name="description"> (React 19 hoists both into
 * <head>), sets the canonical link, and injects the page's JSON-LD if the
 * manifest defines one. The prerender script writes the same manifest values
 * into the static HTML, so the two can never disagree.
 *
 * @param {string} path  The route path as listed in routes.js (e.g. '/about').
 */
const Seo = ({ path }) => {
    const entry = seoManifest[path];
    if (!entry) throw new Error(`Seo: no manifest entry for ${path}`);

    useCanonical(entry.noindex ? null : SITE_ORIGIN + (path === '/' ? '/' : path));
    useJsonLd(entry.jsonLdId, entry.jsonLd);

    return (
        <>
            <title>{entry.title}</title>
            <meta name="description" content={entry.description} />
            {entry.noindex && <meta name="robots" content="noindex" />}
        </>
    );
};

export default Seo;
