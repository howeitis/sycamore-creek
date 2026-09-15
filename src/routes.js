/**
 * Route registry — the single source of truth for every page on the site.
 *
 * Consumed by:
 *   - src/App.jsx              → builds the <Routes> tree (articles code-split)
 *   - src/entry-server.jsx     → resolves every loader before prerendering
 *   - src/seo/seoData.js       → derives `prerenderRoutes` (and the sitemap)
 *
 * Adding a page means adding one entry here plus its SEO entry in seoData.
 * There is no SPA fallback in production (every route is a static file), so a
 * route that isn't listed here does not exist.
 *
 * `eager` pages are statically imported by App.jsx and ship in the main
 * bundle. The rest carry a `load` thunk (a dynamic import) and become their
 * own chunk, loaded on demand; this module itself pulls in no page code.
 */
import { insights } from './data/insights.js';

const articleLoaders = {
    'cleared-defense-ai-engineer-salary-guide-dc': () =>
        import('./pages/insights/ClearedAiSalaryGuide.jsx'),
    'retained-vs-contingency-vs-embedded-recruiting': () =>
        import('./pages/insights/RetainedVsContingencyVsEmbedded.jsx'),
    'how-to-hire-fpga-engineers': () => import('./pages/insights/HowToHireFpgaEngineers.jsx'),
    'how-to-hire-product-leaders': () => import('./pages/insights/HowToHireProductLeaders.jsx'),
    'how-to-hire-executives': () => import('./pages/insights/HowToHireExecutives.jsx'),
};

for (const a of insights) {
    if (!articleLoaders[a.slug]) {
        throw new Error(
            `routes.js: article "${a.slug}" is in data/insights.js but has no page component`,
        );
    }
}

export const routes = [
    { path: '/', eager: true },
    { path: '/about', eager: true },
    { path: '/services', eager: true },
    { path: '/process', eager: true },
    { path: '/track-record', eager: true },
    { path: '/for-candidates', eager: true },
    { path: '/contact', eager: true },
    { path: '/faq', eager: true },
    { path: '/insights', eager: true },
    ...insights.map((a) => ({ path: `/insights/${a.slug}`, load: articleLoaders[a.slug] })),
];

/** Every real page path, in registry order. */
export const routePaths = routes.map((r) => r.path);

/** Pseudo-route rendered by the prerenderer into dist/404.html. */
export const NOT_FOUND_ROUTE = '/__not_found__';
