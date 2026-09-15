/**
 * Server entry for build-time prerendering (scripts/prerender.js).
 *
 * Renders the app to HTML for a given route using StaticRouter, so each page
 * ships its content in the initial HTML response — visible to search crawlers
 * and AI answer engines that do not execute JavaScript. The client hydrates
 * this markup (main.jsx, hydrateRoot) rather than re-rendering it.
 *
 * Every code-split page loader in the route registry is resolved before the
 * first render so the articles render their real content here instead of a
 * Suspense fallback.
 *
 * Re-exports the SEO manifest so the prerender script can read routes and
 * per-page metadata from a single bundle.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.jsx';
import { routes, NOT_FOUND_ROUTE } from './routes.js';

// Resolved lazily on first render, not at module evaluation: a top-level
// await here would deadlock, because the code-split chunks import shared
// modules from this entry bundle and that bundle would still be evaluating.
let resolvedPages;
async function resolvePages() {
    resolvedPages ??= Object.fromEntries(
        await Promise.all(
            routes.filter((r) => r.load).map(async (r) => [r.path, (await r.load()).default]),
        ),
    );
    return resolvedPages;
}

export async function render(url) {
    const resolved = await resolvePages();
    return renderToString(
        <StaticRouter location={url}>
            <App resolved={resolved} />
        </StaticRouter>,
    );
}

export { NOT_FOUND_ROUTE };
export { prerenderRoutes, seoManifest, SITE_ORIGIN } from './seo/seoData.js';
