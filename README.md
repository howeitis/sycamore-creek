# Sycamore Creek Consulting — Website

Marketing website for Sycamore Creek Consulting, a boutique talent advisory firm based in Washington, D.C.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Routing | React Router DOM v7 (SPA, client-side) |
| Hosting (production) | Netlify — `https://sycamorecreekconsulting.com` |
| Hosting (preview) | GitHub Pages — `https://howeitis.github.io/sycamore-creek/` |
| CI/CD | GitHub Actions (`.github/workflows/deploy.yml`) |
| Forms | Formspree (endpoint ID: `xzdaglle`) |
| Analytics | Google Analytics 4 (ID: `G-GPXQ5ZX30P`) |

---

## Project Structure

```
sycamore-creek/
├── public/
│   ├── logo.png               # Primary brand logo
│   ├── hero_background.png    # Hero section background image
│   ├── founder.jpg            # Founder photo (About page)
│   ├── sitemap.xml            # Submitted to Google Search Console
│   └── vite.svg               # Unused default asset (safe to delete)
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions: build + deploy to GitHub Pages
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
│   ├── main.jsx               # React entry point (reads VITE_ROUTER_BASENAME)
│   └── index.css              # Global CSS variables, typography, animations
├── index.html                 # HTML entry — meta tags, OG tags, JSON-LD, GA4
├── vite.config.js             # Vite config (base path set via VITE_BASE_PATH env var)
├── netlify.toml               # Netlify build config, SPA redirect, security headers
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

### Production (Netlify)

Auto-deploys to `https://sycamorecreekconsulting.com` on every push to `main` when Netlify auto-deploy is enabled.

Build command: `npm run build` — output directory: `dist` (includes `404.html` hack for GH Pages routing).

> **Note:** Netlify builds without env vars set. `VITE_BASE_PATH` defaults to `/` (absolute root paths) and `VITE_ROUTER_BASENAME` defaults to `/` (correct for a root-domain deployment).

### Preview (GitHub Pages)

GitHub Actions builds and deploys to `https://howeitis.github.io/sycamore-creek/` on every push to `main`.

The workflow (`.github/workflows/deploy.yml`) sets two env vars for the build:

| Var | Value | Effect |
|---|---|---|
| `VITE_BASE_PATH` | `/sycamore-creek/` | Vite generates absolute asset paths (`/sycamore-creek/logo.png`, etc.) — required to prevent images from 404ing after SPA navigation |
| `VITE_ROUTER_BASENAME` | `/sycamore-creek` | React Router resolves routes under the subdirectory path |

To trigger a deploy manually: go to the **Actions** tab on GitHub → **Deploy to GitHub Pages** → **Run workflow**.

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

- **Per-page titles and meta descriptions** — set via React 19 native document metadata hoisting (`<title>` and `<meta>` in page components)
- **Canonical tags** — managed by `useCanonical()` hook (`src/hooks/useCanonical.js`) via `useEffect` + direct DOM manipulation. JSX `<link rel="canonical">` is intentionally avoided: React 19's `<link>` hoisting interferes with the static `<link rel="icon">` in `index.html`.
- **Open Graph + Twitter Card tags** — in `index.html` for social sharing previews
- **JSON-LD structured data** — `ProfessionalService` schema in `index.html` covering the business entity, founder, services, and geography
- **Sitemap** — `/public/sitemap.xml`, submitted to Google Search Console
- **robots.txt** — `/public/robots.txt`, allows all crawlers
- **llms.txt** — `/public/llms.txt`, plain-text AI crawler file
- **Security header** — `X-Frame-Options: SAMEORIGIN` set in `netlify.toml`
- **Hero image preload** — `<link rel="preload">` in `index.html` for LCP

---

## Known Issues

### npm audit vulnerabilities
Running `npm audit` reports 7 vulnerabilities (3 moderate, 4 high) in `ajv` and `minimatch`, both transitive dependencies of ESLint. These are **dev-only** — they are not included in the production build and do not affect site visitors. ESLint 9.39.2 is already the latest version; upstream fixes have not been released. No action required until ESLint ships an update.

---

## Key Integrations

**Formspree** — Contact form POSTs to `https://formspree.io/f/xzdaglle`. On success, a confirmation message is shown in-page. No backend required.

**Google Analytics 4** — Tracking ID `G-GPXQ5ZX30P`. Script loaded async in `index.html`.
