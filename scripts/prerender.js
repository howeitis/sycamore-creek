/**
 * Build-time prerenderer.
 *
 * Runs after `vite build` (client) and `vite build --ssr`. For every route in
 * the route registry it:
 *   1. renders the React app to HTML via the SSR bundle,
 *   2. writes the page's <title>, meta description, canonical, Open Graph /
 *      Twitter tags and JSON-LD into <head> — all read from the SEO manifest
 *      (src/seo/seoData.js), the same object the <Seo> component renders from,
 *   3. moves any resource hints React hoisted (e.g. the hero preload) into <head>,
 *   4. writes dist/<route>/index.html (and dist/404.html), and
 *   5. generates dist/sitemap.xml from the same route list.
 *
 * The result: content-complete HTML in the initial response, so crawlers and AI
 * answer engines see the page without executing JavaScript. The client bundle
 * hydrates the markup (main.jsx, hydrateRoot).
 *
 * There is no SPA fallback on Vercel: unknown paths get dist/404.html with a
 * real 404 status, so every page must be listed in src/routes.js.
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

const { render, prerenderRoutes, seoManifest, SITE_ORIGIN, NOT_FOUND_ROUTE } = await import(
    pathToFileURL(ssrEntry).href
);

/** Escaping for text placed inside an HTML attribute value. */
const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/** Escaping for text placed inside an element (e.g. <title>). */
const text = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Replace the content="…" of a <meta> matched by `matcher`, if present. */
function setMetaContent(head, matcher, value) {
    const re = new RegExp(`(<meta[^>]*${matcher}[^>]*content=")([^"]*)(")`, 'i');
    return re.test(head) ? head.replace(re, `$1${attr(value)}$3`) : head;
}

/** Append tags just before </head>. */
const intoHead = (head, tags) => head.replace('</head>', `  ${tags.join('\n  ')}\n</head>`);

async function buildPage(route) {
    const seo = seoManifest[route];
    if (!seo) throw new Error(`prerender: no SEO manifest entry for ${route}`);
    const isNotFound = route === NOT_FOUND_ROUTE;
    const appHtml = await render(route);

    // React 19 hoists <title>/<meta> rendered by <Seo> to the top of the
    // markup, and emits resource hints (the hero image preload) the same way.
    // Lift them all out of the body: metadata is written from the manifest
    // below, and hints belong in <head>.
    const preloads = appHtml.match(/<link\s+rel="preload"[^>]*>/gi) || [];
    const body = appHtml
        .replace(/<title>[\s\S]*?<\/title>/i, '')
        .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, '')
        .replace(/<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i, '')
        .replace(/<link\s+rel="preload"[^>]*>/gi, '');

    const canonical = SITE_ORIGIN + (route === '/' ? '/' : route);
    const isArticle = route.startsWith('/insights/');

    // --- <head> rewrites -------------------------------------------------
    let head = template;
    head = head.replace(/<title>[\s\S]*?<\/title>/i, `<title>${text(seo.title)}</title>`);
    head = setMetaContent(head, 'name="description"', seo.description);
    head = setMetaContent(head, 'property="og:title"', seo.title);
    head = setMetaContent(head, 'name="twitter:title"', seo.title);
    head = setMetaContent(head, 'property="og:description"', seo.description);
    head = setMetaContent(head, 'name="twitter:description"', seo.description);

    const extra = [];
    if (isNotFound) {
        // No canonical, no og:url, and keep it out of the index.
        head = head.replace(/\s*<meta\s+property="og:url"[^>]*>/i, '');
        extra.push('<meta name="robots" content="noindex" />');
    } else {
        head = setMetaContent(head, 'property="og:url"', canonical);
        extra.push(`<link rel="canonical" href="${canonical}" />`);
    }

    if (seo.image) {
        head = setMetaContent(head, 'property="og:image"', seo.image);
        head = setMetaContent(head, 'name="twitter:image"', seo.image);
        if (seo.imageAlt) head = setMetaContent(head, 'property="og:image:alt"', seo.imageAlt);
    }

    if (isArticle) {
        head = setMetaContent(head, 'property="og:type"', 'article');
        if (seo.lastmod)
            extra.push(`<meta property="article:published_time" content="${seo.lastmod}" />`);
        // jsonLd may be an array of nodes; the BlogPosting is the first.
        const posting = Array.isArray(seo.jsonLd) ? seo.jsonLd[0] : seo.jsonLd;
        if (posting?.author?.name)
            extra.push(`<meta property="article:author" content="${attr(posting.author.name)}" />`);
    }

    // Per-page JSON-LD (id matches the page's useJsonLd id → no client dup).
    if (seo.jsonLd) {
        extra.push(
            `<script type="application/ld+json" id="${seo.jsonLdId}">${JSON.stringify(seo.jsonLd)}</script>`,
        );
    }

    head = intoHead(head, [...extra, ...preloads]);

    // Inject rendered content into the root container.
    return head.replace(/<div id="root">\s*<\/div>/i, `<div id="root">${body}</div>`);
}

/** Cheap post-build checks for the failure modes this pipeline has had. */
function verify(route, html) {
    const problems = [];
    if (/&amp;#x?\d+;|&amp;(quot|lt|gt|amp);/.test(html)) problems.push('double-escaped entity');
    if ((html.match(/<title>/g) || []).length !== 1) problems.push('expected exactly one <title>');
    if ((html.match(/name="description"/g) || []).length !== 1)
        problems.push('expected exactly one meta description');
    if (route !== '/' && /hero_background/.test(html))
        problems.push('hero image referenced off the home page');
    if (
        route !== NOT_FOUND_ROUTE &&
        !html.includes(
            `<link rel="canonical" href="${SITE_ORIGIN}${route === '/' ? '/' : route}" />`,
        )
    ) {
        problems.push('canonical missing or wrong');
    }
    if (/<div id="root"><\/div>/.test(html)) problems.push('empty root (nothing rendered)');
    for (const m of html.matchAll(
        /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    )) {
        try {
            JSON.parse(m[1]);
        } catch {
            problems.push('invalid JSON-LD');
        }
    }
    if (problems.length) {
        throw new Error(`prerender check failed for ${route}: ${problems.join('; ')}`);
    }
}

function buildSitemap() {
    const urls = prerenderRoutes.map((route) => {
        const seo = seoManifest[route];
        const loc = SITE_ORIGIN + (route === '/' ? '/' : route);
        const lastmod = seo.lastmod ? `\n    <lastmod>${seo.lastmod}</lastmod>` : '';
        return `  <url>\n    <loc>${loc}</loc>${lastmod}\n  </url>`;
    });
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

let count = 0;
for (const route of [...prerenderRoutes, NOT_FOUND_ROUTE]) {
    const html = await buildPage(route);
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

/** RSS 2.0 feed of the Insights articles, newest first. */
function buildFeed() {
    const esc = (v) => text(String(v)).replace(/"/g, '&quot;');
    const articles = prerenderRoutes
        .filter((r) => r.startsWith('/insights/'))
        .map((r) => ({ route: r, seo: seoManifest[r] }))
        .sort((x, y) => (x.seo.lastmod < y.seo.lastmod ? 1 : -1));
    const rfc822 = (iso) => new Date(iso + 'T12:00:00Z').toUTCString();
    const items = articles.map(({ route, seo }) => {
        const url = SITE_ORIGIN + route;
        const title = seo.title.replace(/ \| Sycamore Creek Consulting$/, '');
        const enclosure = seo.image
            ? `\n      <enclosure url="${seo.image}" type="image/jpeg" length="0" />`
            : '';
        return `    <item>
      <title>${esc(title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(seo.lastmod)}</pubDate>
      <description>${esc(seo.description)}</description>${enclosure}
    </item>`;
    });
    const latest = articles[0] ? rfc822(articles[0].seo.lastmod) : new Date().toUTCString();
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sycamore Creek Consulting — Insights</title>
    <link>${SITE_ORIGIN}/insights</link>
    <atom:link href="${SITE_ORIGIN}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Field notes on hiring scarce technical talent: compensation, recruiting models, and how to reach the engineers who are not looking.</description>
    <language>en-us</language>
    <lastBuildDate>${latest}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>
`;
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemap(), 'utf-8');
fs.writeFileSync(path.join(distDir, 'feed.xml'), buildFeed(), 'utf-8');
console.log('  generated    feed.xml');
console.log(`  generated    sitemap.xml  (${prerenderRoutes.length} urls)`);
console.log(`\n✓ prerendered ${count} page${count === 1 ? '' : 's'}`);

// Tidy the intermediate SSR bundle so it never ships.
fs.rmSync(path.join(root, '.prerender-ssr'), { recursive: true, force: true });
