import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.jsx';
import { trackEvent } from './utils/analytics.js';

const container = document.getElementById('root');
const app = (
    <StrictMode>
        <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASENAME || '/'}>
            <App />
        </BrowserRouter>
    </StrictMode>
);

if (container.hasChildNodes()) {
    // Production: every route is prerendered to static HTML at build time, so
    // the client hydrates the existing markup instead of discarding and
    // re-rendering it — no second paint, no replayed entrance animations, no
    // lost <details> state.
    hydrateRoot(container, app, {
        onRecoverableError(error) {
            // A hydration mismatch is recoverable (React re-renders the
            // subtree) but it means the prerender and client disagree.
            // Surface it so it gets fixed rather than silently costing CPU.
            console.error('Hydration issue:', error);
            trackEvent('exception', {
                description: `hydration: ${error?.message || error}`,
                fatal: false,
            });
        },
    });
} else {
    // Dev server (no prerendered markup): plain client render.
    createRoot(container).render(app);
}
