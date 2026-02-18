# Product Fixes — High Priority

> Scope: Three production-blocking issues identified in the initial product review.
> Files touched: `index.html`, `netlify.toml`

---

## Fix 1 — Favicon: Replace Vite logo with site logo

**Problem**
The browser tab currently shows the Vite default logo because `index.html` still points to `/vite.svg`. Every visitor sees a third-party tool's branding instead of Sycamore Creek's.

**Current code** (`index.html` line 6):
```html
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
```

**Fix**
Replace that single line with two `<link>` tags — one for modern browsers (PNG), one legacy fallback:
```html
<link rel="icon" type="image/png" href="/logo.png" />
<link rel="shortcut icon" href="/logo.png" />
```

**Asset check**
`logo.png` already exists in `/public/logo.png` — no new file needed.

**Acceptance criteria**
- [ ] Browser tab shows the Sycamore Creek logo, not the Vite triangle
- [ ] Works in Chrome, Firefox, and Safari
- [ ] `/vite.svg` reference is removed from `index.html`

---

## Fix 2 — Meta tags: Add Open Graph and description tags

**Problem**
`index.html` has no `<meta name="description">` and no Open Graph tags. When the URL is shared on LinkedIn, Slack, or iMessage, the preview is blank — no image, no description, just a raw URL. This undermines credibility at the exact moment someone is deciding whether to click.

**Current state** (`index.html` head — relevant lines only):
```html
<title>Sycamore Creek Consulting</title>
<!-- nothing else descriptive -->
```

**Fix**
Add the following block to `<head>` in `index.html`, directly after the `<title>` tag:
```html
<meta name="description" content="Sycamore Creek Consulting is a boutique talent advisory firm specializing in retained search for technical and leadership roles in DC and NYC." />

<!-- Open Graph (LinkedIn, Slack, iMessage, Facebook) -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Sycamore Creek Consulting" />
<meta property="og:description" content="We find the people who aren't looking. Retained search and talent advisory for technical and leadership roles." />
<meta property="og:image" content="/logo.png" />
<meta property="og:url" content="https://sycamorecreek.com" />

<!-- Twitter / X card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Sycamore Creek Consulting" />
<meta name="twitter:description" content="We find the people who aren't looking. Retained search and talent advisory for technical and leadership roles." />
<meta name="twitter:image" content="/logo.png" />
```

**Notes**
- Update `og:url` to the live domain once confirmed.
- If you have a dedicated OG image (e.g., a 1200×630 branded card), replace `/logo.png` with that path. The logo works as a fallback but a purpose-built social image performs better.

**Acceptance criteria**
- [ ] Pasting the URL into the LinkedIn post composer shows a title, description, and image preview
- [ ] Pasting the URL into Slack shows a rich unfurl (title + description)
- [ ] `<meta name="description">` is present and under 160 characters
- [ ] `og:url` reflects the actual live domain

---

## Fix 3 — Security header: Remove invalid X-Frame-Options value

**Problem**
`netlify.toml` sets `X-Frame-Options = "ALLOWALL"` to allow embedding in Google Sites. `ALLOWALL` is **not a valid value** for this header — the only valid values are `DENY`, `SAMEORIGIN`, and the deprecated `ALLOW-FROM <uri>`. Browsers silently ignore the header when the value is unrecognized, so the intended effect (allowing embedding) is not achieved anyway.

**Current code** (`netlify.toml` lines 10–14):
```toml
[[headers]]
  for = "/*"
    [headers.values]
    X-Frame-Options = "ALLOWALL" # Critical for Google Sites Embedding
```

**Fix**

*Option A — Remove the header entirely (recommended)*
If the goal is to allow embedding everywhere (including Google Sites), simply remove the `X-Frame-Options` header. Without this header, browsers apply no frame restrictions.

```toml
[[headers]]
  for = "/*"
    [headers.values]
    # X-Frame-Options removed — no framing restriction needed
```

Or remove the entire `[[headers]]` block if no other headers are needed.

*Option B — Use the modern CSP approach instead*
If you want explicit control, use `Content-Security-Policy: frame-ancestors` instead, which is the current standard and supports wildcards:
```toml
[[headers]]
  for = "/*"
    [headers.values]
    Content-Security-Policy = "frame-ancestors *;"
```

**Recommendation:** Go with Option A unless there is a specific reason to enumerate frame sources.

**Acceptance criteria**
- [ ] `ALLOWALL` is no longer present in `netlify.toml`
- [ ] The site can be embedded in an iframe on Google Sites without browser console errors
- [ ] No `X-Frame-Options` header is sent in the response (verify in browser DevTools → Network → response headers)

---

## Implementation order

These three fixes all touch `index.html` or `netlify.toml` and are fully independent — they can be done in a single commit.

```
1. Fix favicon        → index.html line 6
2. Add meta tags      → index.html <head>, after <title>
3. Fix netlify header → netlify.toml [[headers]] block
```
