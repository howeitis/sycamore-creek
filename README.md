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
│   ├── logo.png               # Favicon / OpenGraph / Twitter / schema.org logo (optimized PNG)
│   ├── logo.webp              # On-page brand logo (navbar + hero)
│   ├── hero_background.webp   # Hero section background image
│   ├── founder.webp           # Founder photo (About page)
│   ├── sitemap.xml            # Submitted to Google Search Console
│   ├── robots.txt             # Crawler directives
│   ├── llms.txt               # Plain-text AI crawler file
│   ├── callback.html          # OAuth callback (Sonos widget deep link)
│   ├── .well-known/           # Android App Links verification (assetlinks.json)
│   └── vite.svg               # Unused default asset (safe to delete)
├── src/
│   ├── pages/
│   │   ├── Home.jsx           # Landing page (Hero + Pedigree + ServiceHierarchy + Closing)
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

Visit `http://localhost:5173`.

---

## Deployment

Hosted on **Vercel**, which auto-deploys `https://sycamorecreekconsulting.com` on every push to `main` via the Git integration. Preview deployments are created automatically for pull requests.

- **Build command:** `npm run build` (Vite default)
- **Output directory:** `dist`
- **Framework preset:** Vite (auto-detected)

No build-time env vars are set on Vercel: `VITE_BASE_PATH` and `VITE_ROUTER_BASENAME` both default to `/`, which is correct for a root-domain deployment.

### Routing, redirects & headers (`vercel.json`)

- **SPA fallback** — all non-file routes rewrite to `/index.html` so React Router handles client-side navigation and deep-link refreshes.
- **`/callback`** — rewrites to `/callback.html` (OAuth callback for the Sonos widget deep link).
- **`/.well-known/*`** — served with `Content-Type: application/json` and `Access-Control-Allow-Origin: *` (Android App Links verification).
- **Security header** — `X-Frame-Options: SAMEORIGIN` on all routes.

### DNS

Domain registered at Squarespace; DNS is delegated to Vercel's nameservers. Vercel manages the apex (`sycamorecreekconsulting.com`, primary) and `www` (308 redirect to apex), and auto-provisions TLS.

---

## Images

All on-page images are served as **WebP** for fast loading:

| File | Use | Notes |
|---|---|---|
| `hero_background.webp` | Hero background (CSS) + LCP preload | Downscaled to 2560px wide |
| `logo.webp` | Navbar + hero logo (`<img>`) | 512×512 |
| `founder.webp` | About page portrait | 1440×1080 |
| `logo.png` | Favicon + schema.org logo | Kept as PNG (512×512) — favicons are safest as PNG |
| `og-image.jpg` | OpenGraph + Twitter social share card | 1200×630 — hero canopy, logo, and tagline; referenced absolutely in `index.html` |

> **Why the logo has both formats:** On-page `<img>`/CSS references use `logo.webp`; the favicon and schema.org logo use the optimized `logo.png` (favicons are safest as PNG). The social-share preview (OpenGraph/Twitter) is a dedicated 1200×630 card, `og-image.jpg`, because Facebook, LinkedIn, and iMessage scrapers do not reliably render WebP.

---

## Design System

| Token | Value | Usage |
|---|---|---|
| British Racing Green | `#004225` | Primary backgrounds, CTAs, headings |
| Sycamore Teal | `#2C4C48` | Secondary backgrounds, accents |
| Parchment | `#F5F5F0` | Page base background |
| Charcoal | `#333333` | Body text, footer |
| Cream | `#F5F5F0` | Inverse text on dark backgrounds |
| Heading font | Merriweather (serif) | All `h1`–`h6` |
| Body font | Lato (sans-serif) | All body copy |

Fonts are loaded via Google Fonts CDN in `index.css`.

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
- **Hero image preload** — `<link rel="preload">` in `index.html` for LCP.

### Static prerendering

`npm run build` runs three steps:

1. `vite build` — the normal client bundle.
2. `vite build --ssr src/entry-server.jsx` — a Node bundle exporting a `render(url)` function (`StaticRouter` + `renderToStaticMarkup`) plus the SEO manifest, emitted to `.prerender-ssr/` (git-ignored, deleted at the end).
3. `node scripts/prerender.js` — renders each route in `prerenderRoutes` (from `src/seo/seoData.js`) into `dist/<route>/index.html`, using the client `dist/index.html` as the template (so all pages share the hashed asset references).

The client still boots normally via `main.jsx` (`createRoot`, which replaces the prerendered markup — no hydration to manage). On Vercel, an existing static file is served **before** the SPA rewrite in `vercel.json` (`rewrites` are filesystem-aware), so `/faq` resolves to `dist/faq/index.html` while unknown deep links still fall back to the SPA.

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
