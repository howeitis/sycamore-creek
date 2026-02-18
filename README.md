# Sycamore Creek Consulting — Website

Marketing website for Sycamore Creek Consulting, a boutique talent advisory firm based in Washington, D.C.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Routing | React Router DOM v7 (SPA, client-side) |
| Hosting | Netlify (auto-deploys on push to `main`) |
| Forms | Formspree (endpoint ID: `xzdaglle`) |
| Analytics | Google Analytics 4 (ID: `G-GPXQ5ZX30P`) |
| Domain | `https://sycamorecreekconsulting.com` |

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
│   ├── data/
│   │   └── placements.js      # Track Record stats and placement card data
│   ├── App.jsx                # Route definitions
│   ├── App.css                # App-level layout styles
│   ├── main.jsx               # React entry point
│   └── index.css              # Global CSS variables, typography, animations
├── index.html                 # HTML entry — meta tags, OG tags, JSON-LD, GA4
├── vite.config.js             # Vite config (relative base path for Netlify)
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

Netlify auto-deploys on every push to `main`. No manual deploy step required.

To trigger a deploy manually:
```bash
git push origin main
```

Build command: `npm run build` — output directory: `dist`.

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

- **Per-page titles and meta descriptions** — set via React 19 document metadata hoisting in each page component
- **Open Graph + Twitter Card tags** — in `index.html` for social sharing previews
- **JSON-LD structured data** — `ProfessionalService` schema in `index.html` covering the business entity, founder, services, and geography
- **Sitemap** — `/public/sitemap.xml`, submitted to Google Search Console
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
