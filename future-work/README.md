# Future work

Ideas that were explored and parked, not shipped. Nothing in this folder is part of the build.

---

## Motion demos — `motion-demos.html`

Open the file directly in a browser. Each demo has a Replay button and respects reduced motion.

### Mark grows in on first visit

The trunk draws up, branches reach out, the canopy buds from the centre outward, a creek line runs underneath, then the wordmark settles in (about 2.4s). Shown at full size, in a navbar mock-up, and at 64 / 32 / 16px.

- **Where:** navbar on the first page view of a visit only; large on the About header.
- **Blocker:** the logo is a raster image (`public/logo.webp`). The tree in the demo is a stand-in sketch; the real version needs the existing tree redrawn as an SVG first. That redraw would also fix how the logo reads at favicon size.
- **Effort:** vector redraw, then about half a day for the animation.

### Placements print in on `/track-record`

Each placement card's text starts as thin brass bars of uneven height, then a print head sweeps across and resolves them into letters. Cards print one after another as they scroll into view (about 0.9s each, 120ms stagger). The demo uses the real data from `src/data/placements.js`.

- **Where:** the placement cards on `/track-record` only.
- **Build note:** keep the real text in the prerendered HTML and only swap to bars once the card is in view, using `src/hooks/useInView.js`.
- **Effort:** about half a day.

---

## Note: trim the global headline fade-up

`src/index.css` fades up every `h1`, `.hero-subhead` and `.pedigree-body` on load (`fadeInUp`). Now that page headers have their own motion (the creek line drawing in, the brass underline on the emphasised phrase), that fade-up on every interior page competes with them.

- **Proposal:** keep the fade-up on the home hero only, and remove it from interior page headers.
- **Effort:** minutes, a selector change in `src/index.css`. Check that `.pedigree-body` still makes sense on its own.
