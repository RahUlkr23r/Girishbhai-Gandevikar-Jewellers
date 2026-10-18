import React from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Infinite horizontal marquee. Children are duplicated so the loop is seamless.
 * Pauses on hover. Respects prefers-reduced-motion.
 */
export default function Marquee({
  children,
  speed = 30, // seconds for one full loop
  pauseOnHover = true,
  className = '',
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={`overflow-x-auto ${className}`}>
        <div className="flex gap-8">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        className={`flex w-max gap-8 ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {children}
        {/* duplicate for seamless loop */}
        <div aria-hidden="true" className="flex gap-8">
          {children}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </div>
  );
}
