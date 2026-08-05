import { useCallback, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
  /** Short label for the job, e.g. "Two-car garage · South Tampa" */
  caption: string;
  /** How long the job took, e.g. "3 hours" */
  duration?: string;
}

/**
 * Draggable before/after comparison.
 *
 * The existing BeforeAfter component puts these pairs in a carousel, which
 * shows one state at a time and asks the visitor to remember the other. For
 * junk removal the transformation IS the product, so the two states need to be
 * in the same frame at the same moment. Dragging the handle is also the single
 * most engaging thing on the page — it invites a hand.
 *
 * Pointer events rather than mouse/touch pairs so pen and touch work for free.
 */
const BeforeAfterSlider = ({
  before,
  after,
  alt,
  caption,
  duration,
}: BeforeAfterSliderProps) => {
  const [pct, setPct] = useState(55);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setDragging(true);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  };

  const endDrag = () => setDragging(false);

  // Keyboard support: the handle is a real slider, so arrow keys move it.
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPct((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPct((p) => Math.min(100, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPct(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPct(100);
    }
  };

  return (
    <figure className="group">
      <div
        ref={frameRef}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden bg-ink-900 md:aspect-[16/10]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        {/* AFTER sits underneath and is fully painted. */}
        <img
          src={after}
          alt={`${alt} — after`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />

        {/* BEFORE is clipped to the handle position. inset() keeps the image
            at its natural size so the two halves stay in register — animating
            width would scale the photo and break the illusion. */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${alt} — before`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <span className="pointer-events-none absolute left-4 top-4 bg-ink-900/85 px-3 py-1 font-display text-xs uppercase tracking-[0.18em] text-sand-50">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 bg-brand-green px-3 py-1 font-display text-xs uppercase tracking-[0.18em] text-ink-900">
          After
        </span>

        {/* Handle */}
        <div
          role="slider"
          tabIndex={0}
          aria-label={`Reveal before and after for ${alt}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          onKeyDown={onKeyDown}
          className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-sand-50 shadow-[0_0_0_1px_rgba(26,22,20,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          style={{ left: `${pct}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-sand-50 shadow-lg transition-transform duration-200 ease-out group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-ink-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 6 4 12l5 6M15 6l5 6-5 6" />
            </svg>
          </span>
        </div>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-ink-900/15 pt-3">
        <span className="font-display text-sm uppercase tracking-[0.14em] text-ink-900">
          {caption}
        </span>
        {duration && (
          <span className="text-sm text-ink-500">Cleared in {duration}</span>
        )}
      </figcaption>
    </figure>
  );
};

export default BeforeAfterSlider;
