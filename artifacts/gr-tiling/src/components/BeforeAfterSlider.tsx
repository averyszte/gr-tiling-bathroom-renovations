import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  /**
   * Tailwind aspect-ratio class. Defaults to a wide-friendly 16:10.
   */
  aspectClassName?: string;
  className?: string;
}

/**
 * Interactive before/after image comparison slider.
 *
 * - Drag the divider handle (mouse or touch) to reveal more of the "before" image.
 * - Click anywhere inside the frame to jump the divider there.
 * - Use the keyboard arrow keys when focused for accessible adjustment.
 *
 * Both images are rendered at the same size with object-cover, and the
 * "before" image is clipped horizontally with clip-path so the dividing edge
 * is always perfectly aligned.
 */
export function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  aspectClassName = "aspect-[16/10]",
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(50);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* no-op */
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${aspectClassName} rounded-2xl overflow-hidden shadow-lg border bg-secondary/30 select-none touch-none cursor-ew-resize ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      role="slider"
      tabIndex={0}
      aria-label="Before and after image comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
    >
      {/* After image (full, bottom layer) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* After label */}
      <span
        className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-foreground/80 text-background text-[11px] sm:text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full pointer-events-none"
      >
        {afterLabel}
      </span>

      {/* Before image (top layer, clipped to position) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Before label (fades out as it gets clipped away) */}
      <span
        className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-foreground/80 text-background text-[11px] sm:text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full pointer-events-none transition-opacity"
        style={{ opacity: position > 8 ? 1 : 0 }}
      >
        {beforeLabel}
      </span>

      {/* Divider line + draggable handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-foreground -mr-1" />
          <ChevronRight className="w-4 h-4 text-foreground -ml-1" />
        </div>
      </div>
    </div>
  );
}
