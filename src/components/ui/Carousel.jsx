import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Infinite carousel with:
 * - auto-advance (pauses on hover / when tab is hidden)
 * - keyboard arrows
 * - dot indicators
 * - drag on touch
 * - respects reduced motion
 */
export default function Carousel({
  items,
  renderItem,
  autoPlay = true,
  interval = 5000,
  perView = { base: 1, sm: 2, lg: 4 },
  gap = 16,
  className = '',
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [perPage, setPerPage] = useState(perView.base);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);
  const total = items.length;
  const pageCount = Math.ceil(total / perPage);

  // Responsive perView
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerPage(perView.lg);
      else if (w >= 640) setPerPage(perView.sm);
      else setPerPage(perView.base);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [perView]);

  // Reset index when pageCount shrinks
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, pageCount - 1)));
  }, [pageCount]);

  // Auto-advance
  useEffect(() => {
    if (!autoPlay || paused || reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % pageCount);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, reduce, interval, pageCount]);

  // Pause when tab hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + pageCount) % pageCount),
    [pageCount]
  );

  // Keyboard arrows
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    }
  };

  // Drag
  const dragStart = useRef(null);
  const onPointerDown = (e) => {
    dragStart.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (dragStart.current == null) return;
    const delta = e.clientX - dragStart.current;
    if (Math.abs(delta) > 40) go(delta > 0 ? -1 : 1);
    dragStart.current = null;
  };

  const trackStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))`,
    gap: `${gap}px`,
    width: `${(total / perPage) * 100}%`,
    transform: `translate3d(-${(index * perPage * 100) / total}%, 0, 0)`,
    transition: reduce ? 'none' : 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured collections"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        className="overflow-hidden rounded-xs touch-pan-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B46A] focus-visible:ring-offset-2"
      >
        <div style={trackStyle}>
          {items.map((item, i) => (
            <div key={i} className="min-w-0">
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute -left-3 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/95 border border-[#E8E3D8] text-[#8C1B22] shadow-md hover:bg-white hover:scale-105 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1B22]"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute -right-3 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/95 border border-[#E8E3D8] text-[#8C1B22] shadow-md hover:bg-white hover:scale-105 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1B22]"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-6">
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              i === index
                ? 'w-6 bg-[#8C1B22]'
                : 'w-1.5 bg-[#8C1B22]/30 hover:bg-[#8C1B22]/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
