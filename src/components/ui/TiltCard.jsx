import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function TiltCard({ children, className = '', maxTilt = 8 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * maxTilt * 2;
    const ry = (px - 0.5) * maxTilt * 2;
    el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}
