import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import TrackRecord from './pages/TrackRecord';
import ForCandidates from './pages/ForCandidates';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Insights from './pages/Insights';
import { routes } from './routes';
import './styles/layout.css';

/**
 * Pages that ship in the main bundle. Anything in routes.js not listed here
 * (the Insights articles) is code-split and loaded on demand.
 */
const eager = {
    '/': Home,
    '/about': About,
    '/services': Services,
    '/process': Process,
    '/track-record': TrackRecord,
    '/for-candidates': ForCandidates,
    '/contact': Contact,
    '/faq': FAQ,
    '/insights': Insights,
};

for (const r of routes) {
    if (r.eager && !eager[r.path]) throw new Error(`App: eager route ${r.path} has no component`);
    if (!r.eager && !r.load)
        throw new Error(`App: route ${r.path} has neither a component nor a loader`);
}

// Module-scoped so lazy components keep their identity across renders.
const lazyPages = Object.fromEntries(
    routes.filter((r) => r.load).map((r) => [r.path, lazy(r.load)]),
);

/**
 * @param {object} [props]
 * @param {Record<string, React.ComponentType>} [props.resolved]
 *   Pre-resolved page components, supplied by the server entry so that
 *   prerendering never hits a Suspense fallback. Omitted on the client.
 */
function App({ resolved = {} }) {
    const { pathname } = useLocation();
    return (
        <div className="app-container">
            <ScrollToTop />
            <Navbar />
            <div className="main-content">
                {/* Keyed on the path so a render error on one page does not
                    persist after the visitor navigates away from it. */}
                <ErrorBoundary key={pathname}>
                    <Routes>
                        {routes.map((r) => {
                            const Page = eager[r.path] || resolved[r.path] || lazyPages[r.path];
                            return (
                                <Route
                                    key={r.path}
                                    path={r.path}
                                    element={
                                        <Suspense fallback={null}>
                                            <Page />
                                        </Suspense>
                                    }
                                />
                            );
                        })}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </ErrorBoundary>
            </div>
            <Footer />
        </div>
    );
}

export default App;
