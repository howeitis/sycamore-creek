# Sycamore Creek — Improvement Backlog

> Ranked by impact/complexity ratio within each category.
> Complexity: Low = hours | Medium = half-day | High = multiple sessions

---

## Product

| # | Issue | Impact | Complexity | Notes |
|---|---|---|---|---|
| P1 | Add a 404 / Not Found page | High | Low | Currently a bad URL renders a blank page with nav and footer. Looks broken to any visitor who lands on a dead link. |
| P2 | Unify CTA copy | High | Low | Three different CTAs across the site: "Initiate Search", "Start the Conversation", "Get in Touch". Pick one primary phrase and apply it consistently. |
| P3 | Enrich Track Record placement cards | High | Medium | Nine cards with only a role, company type, and city. No context for what made the hire hard or meaningful. Even one sentence per card would sharpen credibility significantly. |
| P4 | Clarify the "$50M+" stat | High | Low | Ambiguous — total comp negotiated for candidates? Saved for clients? A four-word clarifier makes it land harder. |
| P5 | Resolve "Unicorn Hunting" gap | Medium | Low | Appears as a named capability on the Home page (Pedigree section) but has no corresponding entry on the Services page. Either expand it there or remove it from Home. |
| P6 | Add an FAQ or "How Retainers Work" explainer | Medium | Medium | No pricing signals anywhere. A short explainer on how retained search engagements are structured (not pricing, just mechanics) would reduce friction for first-time buyers. |
| P7 | Add testimonials or client signals | High | High | The stats are strong but anonymous. Even one attributed quote from a client or hiring manager would meaningfully increase conversion. Requires sourcing real content. |
| P8 | Clarify Embedded Recruiting duration | Low | Low | "2-3 month engagements" appears without rationale. One sentence on why that window exists would make it feel deliberate rather than arbitrary. |

---

## Engineering

| # | Issue | Impact | Complexity | Notes |
|---|---|---|---|---|
| E1 | Add a 404 route in React Router | High | Low | Add a catch-all `<Route path="*">` that renders a simple Not Found page. Pairs with P1. |
| E2 | Preload the hero background image | Medium | Low | The hero `background-image` is set in CSS, so the browser doesn't discover it until stylesheet parse time. A `<link rel="preload">` in `index.html` improves LCP (Largest Contentful Paint), which is a direct Google ranking signal. |
| E3 | Remove `pdf-parse` dependency | Low | Low | Listed in `package.json` dependencies but not imported or used anywhere in the codebase. Dead weight in the install. |
| E4 | Remove unused imports in `vite.config.js` | Low | Low | `resolve` and `__dirname` are imported but never used. Two lines to delete. |
| E5 | Remove unused `mailtoLink` variable in `Closing.jsx` | Low | Low | `const mailtoLink = "mailto:owen@howe.app"` is defined but never referenced. |
| E6 | Optimize images to WebP | Medium | Medium | `hero_background.png` and `founder.jpg` are likely large. Converting to WebP with appropriate compression would reduce page weight and improve load times, especially on mobile. |
| E7 | Extract shared inline styles to a CSS module | Medium | High | Every page and component has a large `<style>` block with duplicated rules (`.cta-button`, `.content-container`, `.page-wrapper`, etc.). Consolidating into a shared stylesheet would reduce bundle size and make design changes a single-file edit. |
| E8 | Add an error boundary | Low | Medium | No React error boundary exists. An unhandled render error currently crashes the entire app to a blank page with no recovery path. |

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
