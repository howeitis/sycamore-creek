/**
 * Insights / articles registry — single source of truth for metadata.
 *
 * Consumed by:
 *   - src/pages/Insights.jsx           → renders the article index cards
 *   - src/pages/insights/*.jsx         → each article reads its own entry for the byline/date
 *   - src/seo/seoData.js               → derives BlogPosting JSON-LD per article
 *   - scripts/prerender.js (indirect)  → routes come from seoData.prerenderRoutes
 *
 * Article *bodies* live in their page components (they are richly formatted).
 * This file holds only the shared metadata so titles, descriptions, dates, and
 * URLs never drift between the visible page, the index card, and the schema.
 *
 * `slug` is the path segment under /insights. Keep dates in ISO (YYYY-MM-DD).
 */
export const AUTHOR = {
    name: 'Owen Howe',
    title: 'Founder & Principal, Sycamore Creek Consulting',
    url: 'https://www.linkedin.com/in/owen-howe-wm2016/',
};

export const insights = [
    {
        slug: 'cleared-defense-ai-engineer-salary-guide-dc',
        title: 'Cleared & Defense AI/ML Engineer Salary Guide (DC & Northern Virginia, 2026)',
        description:
            'What cleared and defense-sector AI, ML, and FPGA engineers actually earn in the DC / Northern Virginia market in 2026 — base, total comp, and the premiums driven by clearance level and scarcity.',
        excerpt:
            'Clearance level, not just seniority, is the single biggest multiplier on engineering compensation in the DC market. Here is how the numbers break down in 2026 — and why the posted salary band is almost never the real one.',
        category: 'Compensation',
        date: '2026-06-24',
        readingTime: '7 min read',
    },
    {
        slug: 'retained-vs-contingency-vs-embedded-recruiting',
        title: 'Retained vs. Contingency vs. Embedded Recruiting: Which Model Should You Use?',
        description:
            'A practical comparison of the three ways to buy recruiting help — retained search, contingency recruiting, and embedded recruiting — with a decision framework for which fits which hiring problem.',
        excerpt:
            'Most hiring teams choose a recruiting model by habit or by whoever emailed them last. The three models solve genuinely different problems. Here is a straight comparison and a simple way to pick.',
        category: 'Hiring Strategy',
        date: '2026-06-17',
        readingTime: '8 min read',
    },
    {
        slug: 'how-to-hire-fpga-engineers',
        title: 'How to Hire FPGA Engineers (When Almost None of Them Are Looking)',
        description:
            'A hiring manager’s guide to recruiting FPGA and hardware engineers: why the talent pool is so thin, how to write a role that lands, where the candidates actually are, and how to evaluate them.',
        excerpt:
            'FPGA engineering is one of the tightest talent markets in tech: a small population, deeply specialized, and almost entirely passive. A job posting will not reach them. Here is what works instead.',
        category: 'Technical Hiring',
        date: '2026-06-10',
        readingTime: '9 min read',
    },
];

/** Convenience lookup by slug. */
export const insightBySlug = Object.fromEntries(insights.map((a) => [a.slug, a]));
