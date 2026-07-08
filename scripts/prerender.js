/**
 * Build-time prerenderer.
 *
 * Runs after `vite build` (client) and `vite build --ssr`. For every route in
 * the SEO manifest it:
 *   1. renders the React app to static HTML via the SSR bundle,
 *   2. lifts the page's <title>/<meta description> into <head> (pages remain the
 *      source of truth — React 19 renders them inline in the markup),
 *   3. sets a per-page canonical link and per-page Open Graph / Twitter tags,
 *   4. injects per-page JSON-LD (FAQPage, BlogPosting, …) into <head>, and
 *   5. writes dist/<route>/index.html.
 *
 * The result: content-complete HTML in the initial response, so crawlers and AI
 * answer engines see the page without executing JavaScript. The client bundle
 * still boots and takes over (main.jsx uses createRoot, which replaces the
 * prerendered markup — no hydration mismatch to manage).
 *
 * Vercel serves an existing static file before applying the SPA rewrite in
 * vercel.json, so /about resolves to dist/about/index.html while unknown deep
 * links still fall back to the SPA.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, '.prerender-ssr', 'entry-server.js');

// Read the client-built HTML as the template (has hashed asset references).
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const { render, prerenderRoutes, seoManifest, SITE_ORIGIN } = await import(
    pathToFileURL(ssrEntry).href
);

/** Minimal escaping for text placed inside an HTML attribute value. */
const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/** Replace the content="…" of a <meta> matched by `matcher`, if present. */
function setMetaContent(head, matcher, value) {
    const re = new RegExp(`(<meta[^>]*${matcher}[^>]*content=")([^"]*)(")`, 'i');
    return re.test(head) ? head.replace(re, `$1${attr(value)}$3`) : head;
}

function buildPage(route) {
    const appHtml = render(route);

    // Pages render <title>/<meta description> inline (React 19). Lift them out.
    const titleMatch = appHtml.match(/<title>([\s\S]*?)<\/title>/i);
    const descMatch = appHtml.match(/<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/i);
    const pageTitle = titleMatch ? titleMatch[1] : 'Sycamore Creek Consulting';
    const pageDesc = descMatch ? descMatch[1] : '';

    // Strip the lifted tags from the body so they aren't duplicated.
    const body = appHtml
        .replace(/<title>[\s\S]*?<\/title>/i, '')
        .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, '');

    const canonical = SITE_ORIGIN + (route === '/' ? '/' : route);

    // --- <head> rewrites -------------------------------------------------
    let head = template;
    head = head.replace(/<title>[\s\S]*?<\/title>/i, `<title>${pageTitle}</title>`);
    if (pageDesc) head = setMetaContent(head, 'name="description"', pageDesc);
    head = setMetaContent(head, 'property="og:title"', pageTitle);
    head = setMetaContent(head, 'name="twitter:title"', pageTitle);
    if (pageDesc) {
        head = setMetaContent(head, 'property="og:description"', pageDesc);
        head = setMetaContent(head, 'name="twitter:description"', pageDesc);
    }
    head = setMetaContent(head, 'property="og:url"', canonical);

    // Per-page canonical (template has none; it is set client-side otherwise).
    const canonicalTag = `<link rel="canonical" href="${canonical}" />`;
    head = head.includes('rel="canonical"')
        ? head.replace(/<link\s+rel="canonical"[^>]*>/i, canonicalTag)
        : head.replace('</head>', `  ${canonicalTag}\n</head>`);

    // Per-page JSON-LD (id matches the page's useJsonLd id → no client dup).
    const entry = seoManifest[route];
    if (entry?.jsonLd) {
        const script = `<script type="application/ld+json" id="${entry.jsonLdId}">${JSON.stringify(entry.jsonLd)}</script>`;
        head = head.replace('</head>', `  ${script}\n</head>`);
    }

    // Inject rendered content into the root container.
    return head.replace(
        /<div id="root">\s*<\/div>/i,
        `<div id="root">${body}</div>`,
    );
}

let count = 0;
for (const route of prerenderRoutes) {
    const html = buildPage(route);
    const outPath =
        route === '/'
            ? path.join(distDir, 'index.html')
            : path.join(distDir, route, 'index.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf-8');
    count += 1;
    console.log(`  prerendered  ${route}  →  ${path.relative(root, outPath)}`);
}
console.log(`\n✓ prerendered ${count} route${count === 1 ? '' : 's'}`);

// Tidy the intermediate SSR bundle so it never ships.
fs.rmSync(path.join(root, '.prerender-ssr'), { recursive: true, force: true });
