import { useEffect, useRef, useState } from 'react';

/**
 * One-shot "has this scrolled into view?" flag for scroll-triggered motion.
 *
 * Starts false on the server and on the first client render, so prerendered
 * markup and hydration agree; flips to true once and stays true. The default
 * bottom margin is slightly positive so an animation starts a beat before
 * its element reaches the viewport rather than visibly snapping first.
 */
export default function useInView({ rootMargin = '0px 0px 5% 0px', threshold = 0 } = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || inView || typeof IntersectionObserver === 'undefined') return undefined;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            { rootMargin, threshold },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [inView, rootMargin, threshold]);

    return [ref, inView];
}
