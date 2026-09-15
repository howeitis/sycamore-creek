# Sycamore Creek Consulting — Website

Marketing website for Sycamore Creek Consulting, a boutique talent advisory firm based in Washington, D.C.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Routing | React Router DOM v7 (SPA, client-side) |
| Hosting | Vercel — `https://sycamorecreekconsulting.com` |
| CI/CD | Vercel Git integration (auto-deploy on push to `main`) |
| Forms | Formspree (endpoint ID: `xzdaglle`) |
| Analytics | Google Analytics 4 (ID: `G-GPXQ5ZX30P`) |

---

## Project Structure

```
sycamore-creek/
├── public/
│   ├── logo.png               # schema.org logo (512px)
│   ├── favicon.ico / favicon-*.png / apple-touch-icon.png   # Favicon set (derived from logo.png)
│   ├── logo.webp              # On-page brand logo (navbar)
│   ├── hero_background*.webp  # Hero photo at 1920 / 1440 / 960 wide (responsive <img> srcset)
│   ├── founder.webp           # Founder photo (About page)
│   ├── sitemap.xml            # Submitted to Google Search Console
│   ├── robots.txt             # Crawler directives
│   ├── llms.txt               # Plain-text AI crawler file
│   ├── callback.html          # OAuth callback (Sonos widget deep link)
│   ├── .well-known/           # Android App Links verification (assetlinks.json)
│   └── vite.svg               # Unused default asset (safe to delete)
├── src/
│   ├── pages/
│   │   ├── Home.jsx           # Landing page (Hero + Pedigree + ServiceHierarchy + Metrics + Closing)
│   │   ├── About.jsx          # Founder profile and firm philosophy
│   │   ├── Services.jsx       # Retained Search, Embedded Recruiting, Strategic Advising
│   │   ├── TrackRecord.jsx    # Stats and placement cards
│   │   ├── Contact.jsx        # Contact form (Formspree) + direct contact info
│   │   └── NotFound.jsx       # 404 catch-all page
│   ├── components/
│   │   ├── Navbar.jsx         # Fixed nav with scroll detection and mobile menu
│   │   ├── Footer.jsx         # Site footer with contact links
│   │   ├── Hero.jsx           # Full-bleed hero section
│   │   ├── Pedigree.jsx       # Capability highlights (Home page)
│   │   ├── ServiceHierarchy.jsx # Service blocks (Home page)
│   │   ├── Metrics.jsx        # Track-record proof strip (Home page; reads src/data/placements.js)
│   │   └── Closing.jsx        # "How We Work" process + CTA (Home page)
│   ├── hooks/
│   │   └── useCanonical.js    # Sets <link rel="canonical"> via DOM (avoids React 19 hoisting)
│   ├── data/
│   │   └── placements.js      # Track Record stats and placement card data
│   ├── App.jsx                # Route definitions
│   ├── App.css                # App-level layout styles
│   ├── main.jsx               # React entry point (reads VITE_ROUTER_BASENAME, defaults to /)
│   └── index.css              # Global CSS variables, typography, animations
├── index.html                 # HTML entry — meta tags, OG tags, JSON-LD, GA4
├── vite.config.js             # Vite config (base path via VITE_BASE_PATH, defaults to /)
├── vercel.json                # SPA rewrites, /callback rewrite, security headers
├── eslint.config.js           # ESLint flat config (React hooks + refresh)
└── package.json
```

---

## Local Development

```bash
npm install
npm run dev
```

Visit the port Vite prints (the `.claude/launch.json` configs use 5299 and 5311; the Vite default is 5173).

---

## Deployment

Hosted on **Vercel**, which auto-deploys `https://sycamorecreekconsulting.com` on every push to `main` via the Git integration. Preview deployments are created automatically for pull requests.

- **Build command:** `npm run build` (Vite default)
- **Output directory:** `dist`
- **Framework preset:** Vite (auto-detected)

No build-time env vars are set on Vercel: `VITE_BASE_PATH` and `VITE_ROUTER_BASENAME` both default to `/`, which is correct for a root-domain deployment.

### Routing, redirects & headers (`vercel.json`)

- **Static routes, real 404s** — every route is prerendered to `dist/<route>/index.html`, so there is no SPA catch-all rewrite. Unknown paths are served `dist/404.html` (prerendered from `NotFound.jsx`, `noindex`) with a genuine 404 status. `trailingSlash: false` redirects `/about/` → `/about` so each page has one URL. Adding a route means adding it to `prerenderRoutes` in `src/seo/seoData.js`, or it will 404 in production.
- **`/callback`** — rewrites to `/callback.html` (OAuth callback for the Sonos widget deep link); `noindex` via meta tag, `X-Robots-Tag`, and `robots.txt`.
- **`/.well-known/*`** — served with `Content-Type: application/json` and `Access-Control-Allow-Origin: *` (Android App Links verification).
- **Security headers** — `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a restrictive `Permissions-Policy` on all routes. (HSTS is added by Vercel.)

### DNS

Domain registered at Squarespace; DNS is delegated to Vercel's nameservers. Vercel manages the apex (`sycamorecreekconsulting.com`, primary) and `www` (308 redirect to apex), and auto-provisions TLS.

---

## Images

All on-page images are served as **WebP** for fast loading:

| File | Use | Notes |
|---|---|---|
| `hero_background.webp`, `-1440`, `-960` | Hero photo, rendered as a responsive `<img srcset>` with `fetchpriority="high"` (LCP element) | 1920 / 1440 / 960 wide, q58 with a 0.6–0.9px soften (invisible under the overlay + grain); 387 / 229 / 124 KB. React emits the matching responsive preload into `<head>` on Home only. |
| `logo.webp` | Navbar logo (`<img>`) | 512×512 |
| `hero_profile.webp` | About page portrait + Contact avatar | 1024×747 |
| `favicon.ico`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png` | Favicon set | Derived from `logo.png`; ~2 KB / 2 KB / 42 KB / 39 KB |
| `logo.png` | schema.org logo | 512×512 |
| `og-image.jpg` | OpenGraph + Twitter social share card | 1200×630 — hero canopy, logo, and tagline; referenced absolutely in `index.html` |

> **Why the logo has both formats:** On-page `<img>` references use `logo.webp`; the schema.org logo uses `logo.png`, and the favicon set is derived from it. The social-share preview (OpenGraph/Twitter) is a dedicated 1200×630 card, `og-image.jpg`, because Facebook, LinkedIn, and iMessage scrapers do not reliably render WebP.

---

## Design System

Tokens live in `src/index.css` under `:root`. Legacy aliases (`--color-bg-emphasis`, `--color-bg-accent`) are retained and point at the new values so components inherit the palette automatically.

| Token | Value | Usage |
|---|---|---|
| Sycamore Teal (`--color-teal`) | `#2C4C48` | Company color — nav CTA, feature bands, buttons, accents |
| Deep Pine (`--color-pine`) | `#0B2F24` | Richest dark ground — hero, headers, proof band |
| Deepest Pine (`--color-pine-deep`) | `#071C16` | Footer, vignettes |
| Sycamore Shade (`--color-shade`) | `#123A2D` | Layering / cards on dark |
| Warm Parchment (`--color-bg-base`) | `#F4EFE6` | Page base background |
| Warm Surface (`--color-surface`) | `#FBF9F4` | Cards, forms, light sections |
| Warm Ink (`--color-text-primary`) | `#1C2620` | Body text |
| Ink Soft (`--color-ink-soft`) | `#47544C` | Secondary body text |
| Sage (`--color-sage`) | `#5E6E63` | Captions, metadata — ≈5:1 on parchment/white |
| Brass (`--color-brass`) | `#C6A15B` | Restrained accent — hairlines, rules, large figures |
| Brass Ink (`--color-brass-deep`) | `#7F6128` | Brass for *small text* on light grounds (eyebrows, step numbers, categories) — ≈5:1 contrast on parchment |
| Heading font | **Newsreader** (editorial serif) | All `h1`–`h6`; italics carry emphasis |
| Body font | Lato (sans-serif) | All body copy |
| Mono font | system mono stack | Labels, step numbers, metadata |

Buttons use a shared language defined in `index.css`: `.btn-primary` (teal fill), `.btn-inverse` (cream fill for dark/photo grounds), and `.btn-ghost` (editorial underlined link). Fonts are loaded via Google Fonts CDN in `index.css`.

---

## SEO

The following SEO infrastructure is in place:

- **Static prerendering** — every route is rendered to content-complete HTML at build time (see below), so search crawlers **and AI answer engines that don't execute JavaScript** (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) see the full page in the initial response, not an empty `<div id="root">`.
- **Per-page titles and meta descriptions** — authored via React 19 native document metadata (`<title>`/`<meta>` in page components); the prerender step lifts them into `<head>` in the static HTML.
- **Per-page Open Graph + Twitter tags** — the base tags live in `index.html`; the prerender step overrides `og:title`/`og:description`/`og:url` and Twitter equivalents per route.
- **Canonical tags** — `useCanonical()` hook at runtime; the prerender step also writes a per-route `<link rel="canonical">` into the static `<head>`.
- **JSON-LD structured data**:
  - `ProfessionalService` (business entity) — static in `index.html`, present on every page.
  - `FAQPage` (`/faq`), `CollectionPage` (`/insights`), and `BlogPosting` (each article) — defined once in `src/seo/seoData.js` and injected into the static `<head>` by the prerender step. The client `useJsonLd()` hook reuses the same element `id`, so nothing is duplicated after boot.
- **Sitemap** — `/public/sitemap.xml`, includes all content routes with `lastmod` on articles.
- **robots.txt** — `/public/robots.txt`, allows all crawlers.
- **llms.txt** — `/public/llms.txt`, plain-text AI crawler file (lists Insights + FAQ).
- **Security header** — `X-Frame-Options: SAMEORIGIN` set in `vercel.json`.
- **Hero image** — a responsive `<img>` with `fetchpriority="high"`; React 19 emits the matching `<link rel="preload" imagesrcset>` which the prerender lifts into `<head>` on the home page only.
- **Real 404s** — `dist/404.html` is prerendered with `noindex`; unknown URLs no longer return the home page with a 200.

### Static prerendering

`npm run build` runs three steps:

1. `vite build` — the normal client bundle.
2. `vite build --ssr src/entry-server.jsx` — a Node bundle exporting a `render(url)` function (`StaticRouter` + `renderToStaticMarkup`) plus the SEO manifest, emitted to `.prerender-ssr/` (git-ignored, deleted at the end).
3. `node scripts/prerender.js` — renders each route in `prerenderRoutes` (from `src/seo/seoData.js`) into `dist/<route>/index.html`, plus `dist/404.html`, using the client `dist/index.html` as the template (so all pages share the hashed asset references). Each page is checked for double-escaped entities, exactly one `<title>`, and no hero-image references off the home page; the build fails if a check fails.

The client still boots normally via `main.jsx` (`createRoot`, which replaces the prerendered markup — no hydration to manage). On Vercel, `/faq` resolves to `dist/faq/index.html`; there is no SPA fallback, so unknown deep links get `dist/404.html` with a 404 status.

To rebuild only the client bundle without prerendering: `npm run build:client`.

**Content is centralized to prevent drift:** FAQ Q&A lives in `src/data/faqs.js` (and derives the `FAQPage` schema); article metadata lives in `src/data/insights.js` (and derives `BlogPosting` schema); article bodies live in `src/pages/insights/*.jsx` behind the shared `src/components/ArticleLayout.jsx`.

---

## Known Issues

### npm audit vulnerabilities
Running `npm audit` reports vulnerabilities in `ajv` and `minimatch`, both transitive dependencies of ESLint. These are **dev-only** — they are not included in the production build and do not affect site visitors. No action required until ESLint ships an update.

---

## Key Integrations

**Formspree** — Contact form POSTs to `https://formspree.io/f/xzdaglle`. On success, a confirmation message is shown in-page. No backend required.

**Google Analytics 4** — Tracking ID `G-GPXQ5ZX30P`. Script loaded async in `index.html`.
