import { useEffect } from 'react';

/**
 * Injects a page-level JSON-LD structured-data <script> into <head>.
 *
 * Uses direct DOM manipulation (mirroring useCanonical) instead of rendering
 * a JSX <script>, avoiding React 19's script/metadata hoisting quirks. The
 * script is keyed by a stable id so it is replaced (not duplicated) on
 * re-render and removed on unmount, leaving the static business-entity
 * JSON-LD in index.html untouched.
 *
 * @param {string} id   Stable element id (e.g. 'jsonld-services').
 * @param {object} data The schema.org object to serialize.
 */
export function useJsonLd(id, data) {
    useEffect(() => {
        let script = document.getElementById(id);
        if (!script) {
            script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = id;
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(data);

        return () => {
            const existing = document.getElementById(id);
            if (existing) existing.remove();
        };
    }, [id, data]);
}
