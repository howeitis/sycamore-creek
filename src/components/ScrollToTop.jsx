import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll to the top on every route change.
 *
 * React Router preserves the window scroll position across client-side
 * navigations, which lands users partway down a new page. This scrolls to
 * the top whenever the path changes. Renders nothing.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
