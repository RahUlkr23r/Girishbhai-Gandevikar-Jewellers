import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion, useMotionValue, animate, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Ultra-Smooth Infinite Carousel:
 * - Physics-based real-time 1:1 pointer drag (touch & mouse)
 * - Seamless infinite forward/backward rotation (no awkward rewind)
 * - Deceleration with luxury maison cubic-bezier curve [0.16, 1, 0.3, 1]
 * - Mathematically exact pixel-aligned card widths and gaps
 * - High-precision ResizeObserver responsiveness
 * - Accidental click prevention on drag gestures
 * - Native image drag suppression
 * - Auto-advance with pause on hover/focus/drag/tab-switch
 * - Fluid active dot indicators and accessible keyboard arrows
 * - Full prefers-reduced-motion support
 */
export default function Carousel({
  items = [],
  renderItem,
  autoPlay = true,
  interval = 4500,
  perView = { base: 1, sm: 2, lg: 4 },
  gap = 16,
  className = '',
}) {
  const reduce = useReducedMotion();
  const total = items.length;

  const viewportRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [perPage, setPerPage] = useState(perView.base || 1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items-per-page calculation
  useEffect(() => {
    const updatePerPage = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerPage(perView.lg || 4);
      else if (w >= 640) setPerPage(perView.sm || 2);
      else setPerPage(perView.base || 1);
    };
    updatePerPage();
    window.addEventListener('resize', updatePerPage, { passive: true });
    return () => window.removeEventListener('resize', updatePerPage);
  }, [perView]);

  // Precise container width measurement via ResizeObserver
  useEffect(() => {
    if (!viewportRef.current) return;
    const el = viewportRef.current;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0) {
        setContainerWidth(rect.width);
      }
    };
    measure();

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        if (w > 0) setContainerWidth(w);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Compute exact pixel card width and step distance (cardWidth + gap)
  const cardWidth = useMemo(() => {
    if (!containerWidth || containerWidth <= 0) return 0;
    return Math.max(0, (containerWidth - (perPage - 1) * gap) / perPage);
  }, [containerWidth, perPage, gap]);

  const step = useMemo(() => {
    return cardWidth > 0 ? cardWidth + gap : 0;
  }, [cardWidth, gap]);

  // Triplicate items for seamless infinite wrap-around
  const displayItems = useMemo(() => {
    if (total === 0) return [];
    return [...items, ...items, ...items];
  }, [items, total]);

  // Track state: start in the middle copy (index = total)
  const currentIndexRef = useRef(total);
  const x = useMotionValue(0);
  const currentAnimRef = useRef(null);

  // Sync position on mount or whenever step width changes
  useEffect(() => {
    if (step > 0) {
      currentAnimRef.current?.stop();
      x.set(-currentIndexRef.current * step);
    }
  }, [step, x]);

  // Core smooth glide function
  const glideTo = useCallback(
    (targetIndex, immediate = false) => {
      if (step <= 0 || total === 0) return;
      currentAnimRef.current?.stop();

      const targetX = -targetIndex * step;

      // Update active dot immediately for instantaneous user feedback
      const normalizedDot = ((targetIndex % total) + total) % total;
      setActiveIndex(normalizedDot);

      if (immediate || reduce) {
        x.set(targetX);
        currentIndexRef.current = targetIndex;
        return;
      }

      currentAnimRef.current = animate(x, targetX, {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1], // luxury deceleration curve
        onComplete: () => {
          // Seamless normalization: keep currentIndex within [total, 2*total - 1]
          let finalIndex = targetIndex;
          if (finalIndex >= 2 * total) {
            finalIndex = finalIndex - total;
            x.set(-finalIndex * step);
          } else if (finalIndex < total) {
            finalIndex = finalIndex + total;
            x.set(-finalIndex * step);
          }
          currentIndexRef.current = finalIndex;
        },
      });
    },
    [step, total, reduce, x]
  );

  // Next / Previous helpers
  const goNext = useCallback(() => {
    if (step <= 0) return;
    const curX = x.get();
    const approxIndex = Math.round(-curX / step);
    glideTo(approxIndex + 1);
  }, [step, glideTo, x]);

  const goPrev = useCallback(() => {
    if (step <= 0) return;
    const curX = x.get();
    const approxIndex = Math.round(-curX / step);
    glideTo(approxIndex - 1);
  }, [step, glideTo, x]);

  const goToDot = useCallback(
    (dotIndex) => {
      if (step <= 0 || total === 0) return;
      const currentNorm = ((currentIndexRef.current % total) + total) % total;
      let diff = dotIndex - currentNorm;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;
      glideTo(currentIndexRef.current + diff);
    },
    [step, total, glideTo]
  );

  // Pointer drag logic (real-time 1:1 hardware-accelerated tracking)
  const isDraggingRef = useRef(false);
  const pointerIdRef = useRef(null);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const startOffsetRef = useRef(0);
  const startTimeRef = useRef(0);
  const hasMovedRef = useRef(false);
  const draggedRef = useRef(false);

  const onPointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    if (step <= 0) return;

    currentAnimRef.current?.stop();
    pointerIdRef.current = e.pointerId;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}

    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    startOffsetRef.current = x.get();
    startTimeRef.current = performance.now();
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    setIsPaused(true);
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current || e.pointerId !== pointerIdRef.current) return;

    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - startYRef.current;

    if (!hasMovedRef.current) {
      // If user is clearly scrolling vertically, cancel drag & release capture
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 8) {
        isDraggingRef.current = false;
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch (_) {}
        setIsPaused(false);
        return;
      }

      if (Math.abs(dx) > 5) {
        hasMovedRef.current = true;
        draggedRef.current = true;
      }
    }

    if (hasMovedRef.current) {
      x.set(startOffsetRef.current + dx);
    }
  };

  const onPointerUp = (e) => {
    if (!isDraggingRef.current || e.pointerId !== pointerIdRef.current) return;
    isDraggingRef.current = false;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}

    if (!hasMovedRef.current) {
      // Tap without drag: allow click
      draggedRef.current = false;
      setIsPaused(false);
      return;
    }

    const dx = e.clientX - startXRef.current;
    const dt = performance.now() - startTimeRef.current;
    const velocity = dx / Math.max(dt, 1); // px per ms

    let targetIndex;
    if (dx < -40 || velocity < -0.3) {
      targetIndex = Math.ceil(-startOffsetRef.current / step);
      if (targetIndex <= Math.round(-startOffsetRef.current / step)) {
        targetIndex++;
      }
    } else if (dx > 40 || velocity > 0.3) {
      targetIndex = Math.floor(-startOffsetRef.current / step);
      if (targetIndex >= Math.round(-startOffsetRef.current / step)) {
        targetIndex--;
      }
    } else {
      targetIndex = Math.round(-x.get() / step);
    }

    glideTo(targetIndex);

    // Briefly suppress clicks on child links
    setTimeout(() => {
      draggedRef.current = false;
    }, 120);

    setIsPaused(false);
  };

  const onPointerCancel = (e) => {
    if (isDraggingRef.current) {
      onPointerUp(e);
    }
  };

  // Intercept child link clicks if user was swiping
  const onClickCapture = (e) => {
    if (draggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Keyboard navigation
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
  };

  // Auto-play timer
  useEffect(() => {
    if (!autoPlay || isPaused || reduce || total <= perPage || step <= 0) return;

    const timer = setInterval(() => {
      if (isDraggingRef.current) return;
      const curX = x.get();
      const approxIndex = Math.round(-curX / step);
      glideTo(approxIndex + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, reduce, total, perPage, step, interval, glideTo, x]);

  // Pause when browser tab is inactive
  useEffect(() => {
    const onVis = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  if (total === 0) return null;

  return (
    <div
      className={`relative select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (!isDraggingRef.current) setIsPaused(false);
      }}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onClickCapture={onClickCapture}
    >
      {/* Viewport */}
      <div
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Jewellery Occasions Carousel"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B46A] focus-visible:ring-offset-2 rounded-xs"
      >
        <motion.div
          style={{
            x,
            display: 'flex',
            gap: `${gap}px`,
            width: 'max-content',
            willChange: 'transform',
          }}
          className={`transition-opacity duration-300 ${
            containerWidth > 0 ? 'opacity-100' : 'opacity-0'
          } [&_img]:pointer-events-none [&_img]:select-none`}
        >
          {displayItems.map((item, i) => (
            <div
              key={`${i}-${item.id || item.nameKey || item.defaultName || i}`}
              style={{
                width: cardWidth > 0 ? `${cardWidth}px` : `${100 / perPage}%`,
                flexShrink: 0,
              }}
              className="min-w-0"
            >
              {renderItem(item, i % total)}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Prev Navigation Button */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={goPrev}
        className="absolute -left-3 sm:-left-5 top-[38%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md border border-[#D7B46A]/50 text-[#8C1B22] shadow-md hover:shadow-xl hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1B22]"
      >
        <ChevronLeft className="w-5 h-5 text-[#8C1B22]" />
      </button>

      {/* Next Navigation Button */}
      <button
        type="button"
        aria-label="Next slide"
        onClick={goNext}
        className="absolute -right-3 sm:-right-5 top-[38%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md border border-[#D7B46A]/50 text-[#8C1B22] shadow-md hover:shadow-xl hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1B22]"
      >
        <ChevronRight className="w-5 h-5 text-[#8C1B22]" />
      </button>

      {/* Elegant Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {items.map((cat, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}: ${cat.defaultName || ''}`}
              aria-current={isActive}
              onClick={() => goToDot(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'w-8 bg-[#8C1B22] shadow-sm'
                  : 'w-2 bg-[#8C1B22]/25 hover:bg-[#8C1B22]/60 hover:scale-125'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
