/**
 * Server entry for build-time prerendering (scripts/prerender.js).
 *
 * Renders the app to static HTML for a given route using StaticRouter, so each
 * page ships its content in the initial HTML response — visible to search
 * crawlers and AI answer engines that do not execute JavaScript. The client
 * still boots normally via main.jsx (createRoot) and takes over interactivity.
 *
 * Re-exports the SEO manifest so the prerender script can read routes and
 * per-page structured data from a single bundle.
 */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.jsx';

export function render(url) {
    return renderToStaticMarkup(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>,
    );
}

export { prerenderRoutes, seoManifest, SITE_ORIGIN } from './seo/seoData.js';
