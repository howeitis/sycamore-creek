# Changelog

All notable changes to this project are documented here.

---

## [Unreleased]

See `BACKLOG.md` for pending work.

---

## 2026-02-18 (latest)

### Bug Fixes
- **Hero images break on return navigation** — With `base: './'`, Vite generated relative asset URLs (`./logo.png`, `./hero_background.png`). Browsers resolve relative CSS `url()` values against the URL context active when the `<style>` tag was first parsed, not the current URL — causing images to 404 after SPA navigation away and back. Fixed by reading `VITE_BASE_PATH` in `vite.config.js` (defaults to `/` for Netlify). The GitHub Actions workflow sets `VITE_BASE_PATH=/sycamore-creek/`, producing absolute paths that are URL-independent across all SPA navigation.
- **Mobile navbar bar stays transparent when menu opens** — When the hamburger menu was opened, the top bar remained transparent (showing the gradient) while the dropdown below it was white, creating a visual mismatch. Fixed by adding a `menu-open` class to `<nav>` when `mobileMenuOpen` is true. On mobile, `.navbar.menu-open` overrides the gradient with `background: white` to match the dropdown panel. Hamburger lines also switch to dark to remain visible on the white background.

---

## 2026-02-18

### Bug Fixes
- **Favicon regression** — React 19's `<link>` metadata hoisting was interfering with the static `<link rel="icon">` in `index.html`, causing the browser tab favicon to disappear. Replaced all JSX `<link rel="canonical">` tags with a `useCanonical()` hook (`src/hooks/useCanonical.js`) that sets the canonical tag via `useEffect` + direct DOM manipulation, bypassing React 19's hoisting entirely.
- **Navbar invisible on Services page** — Navbar was `background: transparent` with white text. The Services page header uses a parchment background, making white nav links invisible. Fixed by replacing the transparent background with a subtle dark-to-transparent gradient (`linear-gradient(rgba(0,0,0,0.35), transparent)`), ensuring readability over any page background.
- **Navbar logo broken on GitHub Pages** — Logo `src` was hardcoded as `/logo.png` (absolute path). On the `/sycamore-creek/` subdirectory, this resolved to the wrong URL. Fixed to use `${import.meta.env.BASE_URL}logo.png` (relative), consistent with the hero image.

### Engineering
- **GitHub Pages deployment** — Added `.github/workflows/deploy.yml`. On every push to `main`, GitHub Actions builds the project (with `VITE_ROUTER_BASENAME=/sycamore-creek`) and deploys to GitHub Pages. Manual trigger available via the Actions tab.
- **SPA routing on GitHub Pages** — Added `public/404.html` and a decode script in `index.html` to handle direct URL access and page-refresh on any route. Without this, navigating to `https://howeitis.github.io/sycamore-creek/about` would return a GitHub Pages 404.
- **BrowserRouter basename** — `main.jsx` now reads `VITE_ROUTER_BASENAME` env var for the React Router basename (defaults to `/`). GitHub Pages build sets this to `/sycamore-creek`; Netlify build leaves it unset.

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
- **Meta tags** — Added `<meta name="description">`, Open Graph, and Twitter Card tags to `index.html`. `og:url` set to `https://sycamorecreekconsulting.com`.
- **Security header** — Fixed invalid `X-Frame-Options: ALLOWALL` → `SAMEORIGIN` in `netlify.toml`. Site is hosted exclusively on Netlify; Google Sites embedding is no longer required.
