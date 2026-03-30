import { memo } from "react";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
const STARS_COUNT = isMobile ? 25 : 60;
const SECTION_STARS = isMobile ? 10 : 30;

function makeStars(count: number, seed: number) {
  return Array.from({ length: count }, (_, i) => {
    const r = (((i * 9301 + seed * 49297) % 233280) / 233280);
    const r2 = (((i * 6037 + seed * 31337) % 233280) / 233280);
    const r3 = (((i * 3517 + seed * 12345) % 233280) / 233280);
    const r4 = (((i * 7919 + seed * 54321) % 233280) / 233280);
    const r5 = (((i * 2311 + seed * 98765) % 233280) / 233280);
    return {
      size: r * 2 + 0.5,
      x: r2 * 100,
      y: r3 * 100,
      twinkleDuration: r4 * 5 + 3,
      twinkleDelay: r5 * 8,
      driftDuration: r * 40 + 25,
      driftDelay: r2 * 15,
      minOpacity: r3 * 0.3 + 0.1,
      driftX: (r4 - 0.5) * 6,
      driftY: (r5 - 0.5) * 4,
    };
  });
}

export const bgStars = makeStars(STARS_COUNT, 42);
export const sectionStarSets: Record<string, ReturnType<typeof makeStars>> = {
  about: makeStars(SECTION_STARS, 101),
  program: makeStars(SECTION_STARS, 202),
  performers: makeStars(SECTION_STARS, 303),
  videos: makeStars(SECTION_STARS, 404),
  tickets: makeStars(SECTION_STARS, 505),
};

const StarDot = memo(function StarDot({ s }: { s: ReturnType<typeof makeStars>[number] }) {
  return (
    <div
      className="star star-drift"
      style={{
        width: s.size,
        height: s.size,
        left: `${s.x}%`,
        top: `${s.y}%`,
        "--twinkle-duration": `${s.twinkleDuration}s`,
        "--twinkle-delay": `${s.twinkleDelay}s`,
        "--drift-duration": `${s.driftDuration}s`,
        "--drift-delay": `${s.driftDelay}s`,
        "--min-opacity": s.minOpacity,
        "--drift-x": `${s.driftX}px`,
        "--drift-y": `${s.driftY}px`,
      } as React.CSSProperties}
    />
  );
});

export const StarsBackground = memo(function StarsBackground() {
  return (
    <div className="stars-bg">
      {bgStars.map((s, i) => <StarDot key={i} s={s} />)}
    </div>
  );
});

export const SectionStars = memo(function SectionStars({ id }: { id: string }) {
  const stars = sectionStarSets[id] ?? [];
  return (
    <div className="section-stars-layer" aria-hidden>
      {stars.map((s, i) => <StarDot key={i} s={s} />)}
    </div>
  );
});