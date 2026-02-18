import { useEffect } from 'react';

/**
 * Sets the canonical link tag via direct DOM manipulation.
 * Using useEffect instead of JSX <link rel="canonical"> avoids React 19's
 * metadata hoisting, which can interfere with static <link> elements in index.html
 * (including the favicon).
 */
export function useCanonical(href) {
    useEffect(() => {
        let link = document.querySelector('link[rel="canonical"]');
        if (link) {
            link.setAttribute('href', href);
        } else {
            link = document.createElement('link');
            link.rel = 'canonical';
            link.href = href;
            document.head.appendChild(link);
        }
    }, [href]);
}
