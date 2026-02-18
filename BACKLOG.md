# Sycamore Creek — Improvement Backlog

> Ranked by impact/complexity ratio within each category.
> Complexity: Low = hours | Medium = half-day | High = multiple sessions
> See `CHANGELOG.md` for completed work.

---

## Product

| # | Issue | Impact | Complexity | Status | Notes |
|---|---|---|---|---|---|
| P1 | Add a 404 / Not Found page | High | Low | ✅ Done | Resolved by E1. `NotFound.jsx` renders on any unmatched route. |
| P2 | Unify CTA copy | High | Low | ✅ Closed | Reviewed and closed. Per-page CTA variation ("Start the Conversation" on About, "Get in Touch" on Services, "Initiate a Search" on Track Record) maps to user intent at each funnel stage and is intentionally kept. |
| P3 | Enrich Track Record placement cards | High | Medium | Pending | Nine cards show only role, company type, and city. Even one sentence of context per card would sharpen credibility. Requires content input from Owen. |
| P4 | Clarify the "$50M+" stat | High | Low | Pending | Ambiguous — total comp negotiated for candidates? Saved for clients? A short clarifier makes it land harder. Requires input on what the number actually represents. |
| P5 | Resolve "Unicorn Hunting" gap | Medium | Low | Pending | Named capability on Home page (Pedigree section) has no corresponding entry on the Services page. Either expand it on Services or remove it from Home. |
| P6 | Add an FAQ or "How Retainers Work" explainer | Medium | Medium | Pending | No pricing signals anywhere. A short explainer on how retained search engagements work mechanically would reduce friction for first-time buyers. |
| P7 | Add testimonials or client signals | High | High | Pending | Stats are strong but anonymous. Even one attributed quote from a client or hiring manager would meaningfully increase conversion. Requires sourcing real content. |
| P8 | Clarify Embedded Recruiting duration | Low | Low | Pending | "2-3 month engagements" appears without rationale. One sentence on why that window exists makes it feel deliberate rather than arbitrary. |

---

## Engineering

| # | Issue | Impact | Complexity | Status | Notes |
|---|---|---|---|---|---|
| E1 | Add a 404 route in React Router | High | Low | ✅ Done | `NotFound.jsx` created. Catch-all `<Route path="*">` added to `App.jsx`. |
| E2 | Preload the hero background image | Medium | Low | ✅ Done | `<link rel="preload">` for `hero_background.png` added to `index.html`. |
| E3 | Remove `pdf-parse` dependency | Low | Low | ✅ Done | Uninstalled via `npm uninstall pdf-parse`. Removed from `package.json`. |
| E4 | Remove unused imports in `vite.config.js` | Low | Low | ✅ Done | Removed `resolve`, `fileURLToPath`, `dirname`, and `__dirname`. |
| E5 | Remove unused `mailtoLink` variable in `Closing.jsx` | Low | Low | ✅ Done | Removed unused `const mailtoLink` declaration. |
| E6 | Optimize images to WebP | Medium | Medium | Pending | `hero_background.png` and `founder.jpg` are likely large. Converting to WebP with appropriate compression reduces page weight and improves mobile load times. |
| E7 | Extract shared inline styles to a CSS module | Medium | High | Pending | Every page and component has a `<style>` block with duplicated rules (`.cta-button`, `.content-container`, `.page-wrapper`, etc.). A shared stylesheet would make design changes a single-file edit. |
| E8 | Add an error boundary | Low | Medium | Pending | No React error boundary exists. An unhandled render error crashes the entire app to a blank white page with no recovery path. |

---

## SEO

| # | Issue | Impact | Complexity | Status | Notes |
|---|---|---|---|---|---|
| S1 | Add `robots.txt` | Medium | Low | Pending | No `robots.txt` in `/public`. A basic file explicitly allowing all crawlers is standard hygiene. Should include `Sitemap: https://sycamorecreek.com/sitemap.xml`. |
| S2 | Fix heading hierarchy on Services page | Medium | Low | Pending | The three service names (Retained Search, Embedded Recruiting, Strategic Advising) are `<span>` elements, not headings. These are the most important keywords on the page and are invisible to crawlers. Change to `<h2>`. |
| S3 | Add `llms.txt` | Medium | Low | Pending | A plain-text file at `/llms.txt` per the emerging AI crawler standard. Describes the firm, services, and contact in a format optimized for LLM ingestion. Complements the JSON-LD already in place. |
| S4 | Submit sitemap to Google Search Console | High | Low | Pending | No code change needed — action only. Log in to Search Console, add the property, and submit `https://sycamorecreek.com/sitemap.xml`. Required for active Google indexing. |
| S5 | Improve founder photo alt text | Low | Low | Pending | `alt="Owen Howe"` in `About.jsx:21`. Expand to `"Owen Howe, Founder and Principal of Sycamore Creek Consulting"` for keyword signal and accessibility. |
| S6 | Hero image preload (Core Web Vitals) | Medium | Low | ✅ Done | Resolved by E2. `<link rel="preload">` added to `index.html`. |
| S7 | Add page-level structured data for Services and About | Medium | Medium | Pending | Current JSON-LD covers the business entity. Adding a `Service` schema on the Services page and a `Person` schema on About gives crawlers and AI tools richer per-page signals. |
| S8 | Add canonical tags | Low | Low | Pending | Add `<link rel="canonical">` per page to prevent duplicate content issues if the site becomes accessible at multiple URLs (e.g., Netlify subdomain alongside custom domain). |
