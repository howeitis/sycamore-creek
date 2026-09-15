import React from 'react';

/**
 * The firm's signature motif: a single meandering creek line, drawn as a
 * hairline that sits low in a page header and runs off the right edge.
 *
 * Purely decorative. Colour comes from the parent's `--creek-color` (brass on
 * pine/teal grounds, teal on parchment) so one component serves every header.
 * The stroke is non-scaling, so it stays a hairline at any width.
 */
const CreekLine = () => (
    <svg
        className="creek-line"
        viewBox="0 0 1200 240"
        preserveAspectRatio="xMaxYMax meet"
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M-40 156 C 120 80, 220 236, 400 160 S 620 52, 790 150 S 1010 262, 1260 110"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
        />
        <path
            d="M-40 178 C 110 108, 230 252, 405 184 S 630 84, 800 176 S 1020 280, 1260 140"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.45"
            vectorEffect="non-scaling-stroke"
        />
    </svg>
);

export default CreekLine;
