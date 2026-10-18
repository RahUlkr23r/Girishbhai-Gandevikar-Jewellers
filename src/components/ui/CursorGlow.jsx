import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function CursorGlow() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    // Only enable on fine pointers (desktop/trackpad)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let raf;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[5] w-[420px] h-[420px] rounded-full opacity-0 md:opacity-100"
      style={{
        background:
          'radial-gradient(circle, rgba(215,180,106,0.14) 0%, rgba(215,180,106,0.06) 40%, transparent 70%)',
        mixBlendMode: 'screen',
        transition: 'opacity 0.4s',
      }}
    />
  );
}
