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

/**
 * React has already HTML-escaped the <title>/<meta> text we lift out of the
 * rendered markup. Decode it back to plain text first, then re-escape for the
 * context it lands in — otherwise an apostrophe ships as `&amp;#x27;`.
 */
const decode = (s) =>
    String(s)
        .replace(/&#x27;/g, "'")
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');

/** Escaping for text placed inside an HTML attribute value. */
const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/** Escaping for text placed inside an element (e.g. <title>). */
const text = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Route rendered into dist/404.html. Vercel serves that file with a real 404
 * status for any path that has no static file, so unknown URLs no longer get
 * the home page's markup with a 200 (a soft 404 to crawlers).
 */
const NOT_FOUND_ROUTE = '/__not_found__';

/** Replace the content="…" of a <meta> matched by `matcher`, if present. */
function setMetaContent(head, matcher, value) {
    const re = new RegExp(`(<meta[^>]*${matcher}[^>]*content=")([^"]*)(")`, 'i');
    return re.test(head) ? head.replace(re, `$1${attr(value)}$3`) : head;
}

function buildPage(route) {
    const isNotFound = route === NOT_FOUND_ROUTE;
    const appHtml = render(route);

    // Pages render <title>/<meta description> inline (React 19). Lift them out.
    const titleMatch = appHtml.match(/<title>([\s\S]*?)<\/title>/i);
    const descMatch = appHtml.match(/<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/i);
    const pageTitle = decode(titleMatch ? titleMatch[1] : 'Sycamore Creek Consulting');
    const pageDesc = decode(descMatch ? descMatch[1] : '');

    // React hoists resource hints (<link rel="preload">) to the top of the
    // markup; move them into <head> where they belong, so only the pages that
    // actually render the resource carry the hint.
    const preloads = appHtml.match(/<link\s+rel="preload"[^>]*>/gi) || [];

    // Strip the lifted tags from the body so they aren't duplicated.
    const body = appHtml
        .replace(/<title>[\s\S]*?<\/title>/i, '')
        .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, '')
        .replace(/<link\s+rel="preload"[^>]*>/gi, '');

    const canonical = SITE_ORIGIN + (route === '/' ? '/' : route);

    // --- <head> rewrites -------------------------------------------------
    let head = template;
    head = head.replace(/<title>[\s\S]*?<\/title>/i, `<title>${text(pageTitle)}</title>`);
    if (pageDesc) head = setMetaContent(head, 'name="description"', pageDesc);
    head = setMetaContent(head, 'property="og:title"', pageTitle);
    head = setMetaContent(head, 'name="twitter:title"', pageTitle);
    if (pageDesc) {
        head = setMetaContent(head, 'property="og:description"', pageDesc);
        head = setMetaContent(head, 'name="twitter:description"', pageDesc);
    }

    if (isNotFound) {
        // No canonical, no og:url, and keep it out of the index.
        head = head.replace(/\s*<meta\s+property="og:url"[^>]*>/i, '');
        head = head.replace('</head>', `  <meta name="robots" content="noindex" />\n</head>`);
    } else {
        head = setMetaContent(head, 'property="og:url"', canonical);

        // Per-page canonical (template has none; it is set client-side otherwise).
        const canonicalTag = `<link rel="canonical" href="${canonical}" />`;
        head = head.includes('rel="canonical"')
            ? head.replace(/<link\s+rel="canonical"[^>]*>/i, canonicalTag)
            : head.replace('</head>', `  ${canonicalTag}\n</head>`);
    }

    if (preloads.length) {
        head = head.replace('</head>', `  ${preloads.join('\n  ')}\n</head>`);
    }

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

/** Cheap post-build checks for the failure modes this pipeline has had. */
function verify(route, html) {
    const problems = [];
    if (/&amp;#x?\d+;|&amp;(quot|lt|gt|amp);/.test(html)) problems.push('double-escaped entity');
    if ((html.match(/<title>/g) || []).length !== 1) problems.push('expected exactly one <title>');
    if (route !== '/' && route !== NOT_FOUND_ROUTE && /hero_background/.test(html)) {
        problems.push('hero image referenced off the home page');
    }
    if (problems.length) {
        throw new Error(`prerender check failed for ${route}: ${problems.join('; ')}`);
    }
}

let count = 0;
for (const route of [...prerenderRoutes, NOT_FOUND_ROUTE]) {
    const html = buildPage(route);
    verify(route, html);
    let outPath;
    if (route === '/') outPath = path.join(distDir, 'index.html');
    else if (route === NOT_FOUND_ROUTE) outPath = path.join(distDir, '404.html');
    else outPath = path.join(distDir, route, 'index.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf-8');
    count += 1;
    console.log(`  prerendered  ${route}  →  ${path.relative(root, outPath)}`);
}
console.log(`\n✓ prerendered ${count} page${count === 1 ? '' : 's'}`);

// Tidy the intermediate SSR bundle so it never ships.
fs.rmSync(path.join(root, '.prerender-ssr'), { recursive: true, force: true });
