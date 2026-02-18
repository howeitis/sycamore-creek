# Sycamore Creek — Improvement Backlog

> Ranked by impact/complexity ratio within each category.
> Complexity: Low = hours | Medium = half-day | High = multiple sessions

---

## Product

| # | Issue | Impact | Complexity | Status | Notes |
|---|---|---|---|---|---|
| P1 | Add a 404 / Not Found page | High | Low | ✅ Done | Resolved by E1. `NotFound.jsx` renders on any unmatched route. |
| P2 | Unify CTA copy | High | Low | Three different CTAs across the site: "Initiate Search", "Start the Conversation", "Get in Touch". Pick one primary phrase and apply it consistently. |
| P3 | Enrich Track Record placement cards | High | Medium | Nine cards with only a role, company type, and city. No context for what made the hire hard or meaningful. Even one sentence per card would sharpen credibility significantly. |
| P4 | Clarify the "$50M+" stat | High | Low | Ambiguous — total comp negotiated for candidates? Saved for clients? A four-word clarifier makes it land harder. |
| P5 | Resolve "Unicorn Hunting" gap | Medium | Low | Appears as a named capability on the Home page (Pedigree section) but has no corresponding entry on the Services page. Either expand it there or remove it from Home. |
| P6 | Add an FAQ or "How Retainers Work" explainer | Medium | Medium | No pricing signals anywhere. A short explainer on how retained search engagements are structured (not pricing, just mechanics) would reduce friction for first-time buyers. |
| P7 | Add testimonials or client signals | High | High | The stats are strong but anonymous. Even one attributed quote from a client or hiring manager would meaningfully increase conversion. Requires sourcing real content. |
| P8 | Clarify Embedded Recruiting duration | Low | Low | "2-3 month engagements" appears without rationale. One sentence on why that window exists would make it feel deliberate rather than arbitrary. |

---

## Engineering

| # | Issue | Impact | Complexity | Status | Notes |
|---|---|---|---|---|---|
| E1 | Add a 404 route in React Router | High | Low | ✅ Done | `NotFound.jsx` created. Catch-all `<Route path="*">` added to `App.jsx`. |
| E2 | Preload the hero background image | Medium | Low | ✅ Done | `<link rel="preload">` for `hero_background.png` added to `index.html`. |
| E3 | Remove `pdf-parse` dependency | Low | Low | ✅ Done | Uninstalled via `npm uninstall pdf-parse`. Removed from `package.json`. |
| E4 | Remove unused imports in `vite.config.js` | Low | Low | ✅ Done | Removed `resolve`, `fileURLToPath`, `dirname`, and `__dirname`. |
| E5 | Remove unused `mailtoLink` variable in `Closing.jsx` | Low | Low | ✅ Done | Removed unused `const mailtoLink` declaration. |
| E6 | Optimize images to WebP | Medium | Medium | Pending | `hero_background.png` and `founder.jpg` are likely large. Converting to WebP with appropriate compression would reduce page weight and improve load times, especially on mobile. |
| E7 | Extract shared inline styles to a CSS module | Medium | High | Pending | Every page and component has a large `<style>` block with duplicated rules (`.cta-button`, `.content-container`, `.page-wrapper`, etc.). Consolidating into a shared stylesheet would reduce bundle size and make design changes a single-file edit. |
| E8 | Add an error boundary | Low | Medium | Pending | No React error boundary exists. An unhandled render error currently crashes the entire app to a blank page with no recovery path. |

---

## SEO

| # | Issue | Impact | Complexity | Notes |
|---|---|---|---|---|
| S1 | Add `robots.txt` | Medium | Low | No `robots.txt` in `/public`. A basic file explicitly allowing all crawlers removes ambiguity and is standard hygiene. Also add `Sitemap:` directive pointing to `/sitemap.xml`. |
| S2 | Fix heading hierarchy on Services page | Medium | Low | The three service names (Retained Search, Embedded Recruiting, Strategic Advising) are rendered as `<span>` elements, not headings. These are the most important keywords on that page and are invisible to crawlers. Change to `<h2>`. |
| S3 | Add `llms.txt` | Medium | Low | A plain-text file at `/llms.txt` following the emerging standard for AI crawlers. Describes the firm, services, and contact in a format optimized for LLM ingestion. Complements the JSON-LD schema already in place. |
| S4 | Submit sitemap to Google Search Console | High | Low | No code change needed — just an action. Log in to Search Console, add the property, and submit `https://sycamorecreek.com/sitemap.xml`. This is what tells Google to actively index the site. |
| S5 | Improve founder photo alt text | Low | Low | `alt="Owen Howe"` on `About.jsx`. More descriptive text like `"Owen Howe, Founder and Principal of Sycamore Creek Consulting"` adds keyword signal and improves accessibility. |
| S6 | Add hero image preload (Core Web Vitals) | Medium | Low | See E2 — same fix, dual benefit. LCP is a Google ranking factor. A slow-loading hero directly affects search rank. |
| S7 | Add page-level structured data for Services and About | Medium | Medium | The current JSON-LD in `index.html` covers the business entity. Adding a `Service` schema to the Services page and a `Person` schema to the About page gives crawlers and AI tools richer per-page signals. |
| S8 | Add canonical tags | Low | Low | Add `<link rel="canonical">` per page to prevent duplicate content issues if the site is ever accessible at multiple URLs (e.g., with/without trailing slash, or via the Netlify subdomain alongside the custom domain). |
