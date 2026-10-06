# Changelog

All notable changes to this project are documented here.

---

## [Unreleased]

See `BACKLOG.md` for pending work, and `future-work/` for parked design explorations.

---

## 2026-10-06 — Motion refinements

### Design
Small, single-gesture motion added throughout the site. Every piece is fully visible before it animates and is skipped under reduced motion.
- **Creek line draws itself** in every page header, left to right, once per page view.
- **Circled-arrow links**: `.btn-ghost` arrows (and "See the full record") sit in a brass ring. On hover the arrow passes through and the ring fills. This replaces the ghost link's brass underline.
- **Brass underline on heading emphasis**: drawn on load for page-header `h1`s, and on scroll-in for the Home section `h2`s. Article prose is excluded.
- **Track record odometer** on Home: each digit is a reel that spins up to its value. The real figure is kept for screen readers.
- **Process line**: on Home, a brass line with a riding dot runs 01 → 03 and each step number lights as it arrives. On `/process`, a scroll-linked line grows down the list and the numbers light in turn (scroll-driven animations; unchanged in browsers without them).
- **Insight card peek**: on hover a second card peeks out from behind the lifted card on `/insights`.
- **Hero scroll cue**: a still hairline with a brass drop running down it; hover pauses it.

### Engineering
- **`src/hooks/useInView.js`**: a one-shot in-view flag that is hydration-safe (false on the server and on first render).
- **`.sr-only`** utility added to `index.css`.
- **`future-work/`**: motion demos for a logo build-in and printed placement cards, plus a note on trimming the global headline fade-up.

---

## 2026-09-15 — Signature motif, Home field notes, one-place contact details, cleanup, CI

### Design
- **Creek line** — the meandering-line motif from the brand direction, as a non-scaling hairline low in every interior page header (`CreekLine.jsx`; brass on pine/teal, teal on parchment via `--creek-color`).
- **Home "Field notes" strip** — the three newest articles between the proof band and the closing CTA, in the hairline-column style of the proof grid.

### Engineering
- **`src/data/firm.js`** — name, email, city, and public profiles in one place. Footer, Contact, For Candidates, ErrorBoundary, Privacy, all JSON-LD, and `llms.txt` (via `{{FIRM_EMAIL}}` tokens filled at build) read from it. Changing the email address is now a one-line edit.
- **Business-entity schema** moved from a static block in `index.html` into `seoData.js` (`organizationSchema` + `websiteSchema`, with `priceRange`, `image`, and a founder linked to `/about`) and injected on every page by the prerender.
- **`react-router-dom` → `react-router`** (v7 ships the DOM exports; the `-dom` package was a shim).
- **Repo cleanup** — removed `founder.webp` (unused), `vite.svg`, `react.svg`, the PDF/PRD extraction scripts and their outputs, and the never-applied `.reveal` CSS utility.
- **CI** — `.github/workflows/ci.yml` runs lint, `format:check`, and the full build (with the prerender's own checks) on push and PR.

### Product
- **"$50M+"** stat label clarified to "Comp negotiated for placed candidates" (the wording already used in `llms.txt`).

---

## 2026-09-15 — Insights: social cards, author box, related notes, RSS

- **Social cards** — `scripts/og-cards.js` (`npm run og`) renders a branded 1200×630 JPEG per article with satori + sharp (Newsreader/Lato as paths; fonts vendored in `scripts/fonts/`). Cards are committed under `public/og/` and set as `og:image` / `twitter:image` / `og:image:alt` per article by the prerender.
- **Structured data** — `BlogPosting` now carries the `image` Google requires for Article rich results and an author linked to `/about` (with LinkedIn `sameAs`); a `BreadcrumbList` is emitted alongside it in the same JSON-LD block.
- **Author box** — photo, name/title, a short bio (`AUTHOR.bio` in `src/data/insights.js`), and links to About and LinkedIn at the foot of every article.
- **Related field notes** — two cards after the CTA: same category first, then most recent (`relatedInsights()` in `src/data/insights.js`).
- **RSS** — `dist/feed.xml` generated at build (newest first, with card enclosures); `<link rel="alternate">` in `<head>` and a "Subscribe via RSS" link on `/insights`.

---

## 2026-09-15 — Review pass 3 (finish the system on interior pages)

### Design
- **Services** — the three service names are now serif display H2s with an eyebrow that says who each is for ("Lead service", "For scaling teams", "For leadership"); "Best for" is a labelled line; "What's included" is a hairline list with a brass tick. Pure-white band replaced with the warm surface.
- **Warm surfaces everywhere** — About founder section, Process steps, For Candidates body: `#ffffff` → `var(--color-surface)`. System radius/shadow tokens on the founder portrait.
- **One button language** — 404, error boundary, and For Candidates now use `.btn-primary` / `.btn-inverse` / `.btn-ghost`; their bespoke button rules (and two dead ones in FAQ/ArticleLayout) are gone. Remaining px letter-spacing converted to em.
- **Page headers** — FAQ and Insights get the same eyebrow + italic-emphasis header as every other page; header padding rhythm unified across interior pages.
- **Footer** — three columns: firm statement + location, site navigation, principal contact; © line and Privacy link. Contact links fire `contact_click`.
- **Home copy** — the hero subhead is one sentence; "Why Sycamore Creek" now says how the firm works (principal-led, scorecard); "Our Focus" carries the seniority and geography lines once. Hero uses `svh`; eyebrow tightened at phone width.

### Product
- **Privacy page** (`/privacy`) — what the site collects (form, analytics), why, third parties, candidate confidentiality, and how to ask for correction or deletion. Linked from the footer and the contact form.
- **Contact form** — inquiry-type select (routes the email subject and segments `generate_lead`), candidate-aware labels, `autocomplete` on every field, honeypot, `aria-busy` + `readOnly` during submit (no focus loss), "what happens next" and a confidentiality/reply-time note, error message with a direct mailto, and "send another / read the field notes" after success.
- **Navigation** — "For Candidates" added to the menu (mobile/tablet) as a secondary link.

---

## 2026-09-14 — Review pass 2 (consolidation)

### Engineering
- **Route registry** — `src/routes.js` is the single source of truth for pages; `App.jsx`, the server entry, the prerender, and the sitemap all derive from it. The build fails if a route has no SEO entry or vice versa. (Closes the "add it in two places or it 404s" contract from pass 1.)
- **SEO manifest** — titles, descriptions, and every JSON-LD block (now including `Person` and `Service`, which were client-only) live in `src/seo/seoData.js`; pages render `<Seo path>`; the prerender reads the same object instead of regex-lifting rendered HTML. Titles rewritten keyword-first. Articles get `og:type=article` + `article:*` tags; `og:site_name` and `max-image-preview:large` added.
- **Hydration** — `hydrateRoot` + `renderToString` replace `createRoot` + `renderToStaticMarkup`. Mismatches are logged and sent to GA4 as non-fatal exceptions. `vite preview` now mimics Vercel (`appType: 'mpa'`) so hydration can be verified locally.
- **Code splitting** — the five articles are separate chunks (main bundle 397 KB → 283 KB, 107 → 88 KB gzip). The server entry resolves loaders before rendering so articles still prerender in full.
- **CSS extracted** — all 18 inline `<style>` blocks (~2,500 lines) moved to `src/styles/*.css`; shared scaffolding de-duplicated into `layout.css`; container widths tokenised (`--container`, `--container-wide`, `--container-narrow`, `--gutter`). About's "How We Think" grid now uses the shared `.proof-grid` (inverse variant) instead of its own hover-lifting cards.
- **Fonts** — requested via `<link>` in `index.html` instead of `@import` inside the bundled CSS; Newsreader trimmed to the three faces in use.
- **CSP** — `Content-Security-Policy` enforced (self + Google Fonts + GA4 + Formspree, no `'unsafe-inline'`). The GA4 bootstrap and the Sonos callback script/styles moved to external files to comply.
- **Build checks** — prerender now also verifies exactly one meta description, a correct canonical, a non-empty root, and parseable JSON-LD on every page. Sitemap generated at build; `public/sitemap.xml` removed.
- **Tooling** — Prettier added (`npm run format`); `App.css` removed; ErrorBoundary resets on navigation.

### Bug Fixes
- Navbar tone and current-link checks are trailing-slash-insensitive, so the client and the prerender always agree (previously a `/insights/` URL could leave the nav in the wrong tone after client-side navigation).

---

## 2026-09-14 — Review pass 1 (verified defects)

### Bug Fixes
- **Nav unreadable on light-header pages** — the fixed nav painted white links over the parchment Services header (and article pages). The nav now carries a `data-tone` (`dark` over the hero/pine/teal grounds; `light` over parchment, when scrolled, or when the mobile menu is open) and all ink, gradient, and CTA colours key off it. Nav CTA copy unified to "Initiate a Search".
- **Mobile menu** — brand name and CTA were white-on-white when open. Panel is now the warm surface colour, brand name is ink, CTA is teal; hamburger becomes an X; Escape closes; page scroll is locked while open; `aria-controls`/`aria-label` added. The closed menu is `visibility: hidden` so its links leave the tab order.
- **Prerender double-escaped meta descriptions** (`can&amp;#x27;t` on `/about`) — lifted text is decoded, then re-escaped for its context. A post-build check now fails the build on double-escaped entities.
- **Hero image preloaded on every route** — the static `<link rel="preload">` in `index.html` was the template for all 13 pages. The hero is now a responsive `<img srcset fetchpriority="high">`; React's matching preload is lifted into `<head>` on Home only. A build check enforces no hero references off Home.
- **Soft 404s** — unknown URLs returned Home's prerendered HTML with a 200. `dist/404.html` is now prerendered (`noindex`, no canonical) and the SPA catch-all rewrite is removed; `trailingSlash: false` normalises `/about/` → `/about`.

### Performance
- Hero photo recompressed: 2560px / 1.73 MB → 1920px / 387 KB, plus 1440px (229 KB) and 960px (124 KB) variants. Favicon set (`favicon.ico`, 32/192px PNG, 180px apple-touch-icon) replaces the 240 KB `logo.png` favicon; `theme-color` added.

### Accessibility
- `--color-brass-deep` → `#7F6128` and `--color-sage` → `#5E6E63` so eyebrow text, step numbers, categories and captions meet WCAG AA (≈5:1) on parchment and white. `--color-brass` (`#C6A15B`) is unchanged for hairlines and large figures.

### Security / SEO
- `vercel.json`: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` added. `/callback` (Sonos widget OAuth page) is `noindex` via meta, `X-Robots-Tag`, and `robots.txt`.

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
