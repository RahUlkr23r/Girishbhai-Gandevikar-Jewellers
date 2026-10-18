import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Attaches a scroll-linked parallax transform to a ref'd element.
 * @param {number} speed - positive = moves slower than scroll (bg), negative = faster (fg)
 * @returns {React.RefObject} attach to any element
 */
export function useParallax(speed = 0.2) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress: -1 (below viewport) → 0 (centered) → 1 (above)
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const offset = progress * speed * 100;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed, reduce]);

  return ref;
}
