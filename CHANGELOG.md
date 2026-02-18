# Changelog

All notable changes to this project are documented here.

---

## [Unreleased]

See `BACKLOG.md` for pending work.

---

## 2026-02-18

### Engineering
- **E1** — Added `NotFound.jsx` (404 page). Catch-all `<Route path="*">` wired in `App.jsx`. On-brand design matching site styles.
- **E2** — Added `<link rel="preload">` for `hero_background.png` in `index.html` to improve Largest Contentful Paint (LCP).
- **E3** — Removed unused `pdf-parse` dependency (`npm uninstall pdf-parse`). Removed 4 packages.
- **E4** — Removed unused imports (`resolve`, `fileURLToPath`, `dirname`, `__dirname`) from `vite.config.js`.
- **E5** — Removed unused `mailtoLink` variable from `Closing.jsx`.

### SEO
- Added per-page `<title>` and `<meta name="description">` to all five page components using React 19 native document metadata hoisting. No external library required.
- Fixed broken `href="contact.html"` CTA in `Closing.jsx` → `<Link to="/contact">`.
- Added `public/sitemap.xml` covering all five routes.
- Added `ProfessionalService` JSON-LD structured data block to `index.html` with founder, services, geography, contact, and `knowsAbout` signals for AI tool discoverability.

### Product / Meta
- Updated `About` page title: removed founder name (`"About Owen Howe | ..."` → `"About | Sycamore Creek Consulting"`).
- Created `BACKLOG.md` with ranked product, engineering, and SEO improvement lists.
- Created `CHANGELOG.md` (this file).
- Rewrote `README.md` to reflect current stack (React 19, Netlify) and accurate project structure.

---

## 2026-02-18 (earlier)

### Product — High Priority Fixes
- **Favicon** — Replaced Vite default (`vite.svg`) with `logo.png` in `index.html`.
- **Meta tags** — Added `<meta name="description">`, Open Graph, and Twitter Card tags to `index.html`. `og:url` set to `https://sycamorecreek.com`.
- **Security header** — Fixed invalid `X-Frame-Options: ALLOWALL` → `SAMEORIGIN` in `netlify.toml`. Site is hosted exclusively on Netlify; Google Sites embedding is no longer required.
