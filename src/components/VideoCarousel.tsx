import { useState, useRef, useCallback, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { SectionStars } from "@/components/stars";

const videos = [
  { id: 1, src: "", title: "За кулисами", caption: "Подготовка к концерту" },
  { id: 2, src: "", title: "Репетиция", caption: "Анна за виолончелью" },
  { id: 3, src: "", title: "Звёздный купол", caption: "Планетарий изнутри" },
  { id: 4, src: "", title: "Михаил", caption: "Фортепианный мотив" },
  { id: 5, src: "", title: "Анонс", caption: "14 июня · Москва" },
];

export default function VideoCarousel() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);

  const VISIBLE = 3;
  const maxSlide = Math.max(0, videos.length - VISIBLE);

  const prev = useCallback(() => setCurrentSlide((s) => Math.max(0, s - 1)), []);
  const next = useCallback(() => setCurrentSlide((s) => Math.min(maxSlide, s + 1)), [maxSlide]);

  const openVideo = (idx: number) => {
    setActiveIdx(idx);
    const vid = videoRefs.current[idx];
    if (vid) { vid.muted = false; vid.play(); }
  };

  const closeVideo = () => {
    if (activeIdx !== null) {
      const vid = videoRefs.current[activeIdx];
      if (vid) { vid.pause(); vid.currentTime = 0; }
    }
    setActiveIdx(null);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragDelta(0);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragDelta(e.clientX - dragStart);
  };
  const onPointerUp = () => {
    if (dragDelta < -60) next();
    else if (dragDelta > 60) prev();
    setIsDragging(false);
    setDragDelta(0);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeVideo(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIdx]);

  const slideOffset = currentSlide * (100 / VISIBLE);

  return (
    <section id="videos" className="relative z-10 py-32 px-6 section-with-bg">
      <SectionStars id="videos" />
      <div className="section-nebula" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(74,100,158,0.1) 0%, transparent 100%)" }} />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--spirit-teal)" }}>Видео</p>
          <h2 className="text-5xl md:text-6xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}>
            Фрагменты
            <br />
            <em className="italic" style={{ color: "var(--star-gold)" }}>предыдущих концертов</em>
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prev}
            disabled={currentSlide === 0}
            className="video-arrow left-0"
            style={{ left: "-20px" }}
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={next}
            disabled={currentSlide >= maxSlide}
            className="video-arrow right-0"
            style={{ right: "-20px" }}
          >
            <Icon name="ChevronRight" size={20} />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div
              ref={trackRef}
              className="flex"
              style={{
                transform: `translateX(calc(-${slideOffset}% + ${isDragging ? dragDelta : 0}px))`,
                transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                gap: "16px",
                cursor: isDragging ? "grabbing" : "grab",
                userSelect: "none",
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            >
              {videos.map((video, idx) => (
                <div
                  key={video.id}
                  className="video-slot flex-shrink-0"
                  style={{ width: `calc(${100 / VISIBLE}% - ${(16 * (VISIBLE - 1)) / VISIBLE}px)` }}
                  onClick={() => !isDragging && Math.abs(dragDelta) < 10 && openVideo(idx)}
                >
                  <div className="video-poster">
                    {video.src ? (
                      <video
                        ref={(el) => { videoRefs.current[idx] = el; }}
                        src={video.src}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="video-placeholder">
                        <div className="video-placeholder-inner">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                            style={{ background: "rgba(232, 201, 122, 0.15)", border: "1px solid rgba(232,201,122,0.3)" }}>
                            <Icon name="Video" size={20} style={{ color: "var(--star-gold)" }} />
                          </div>
                          <p className="text-xs text-center" style={{ color: "rgba(200,216,240,0.4)" }}>Видео<br />появится позже</p>
                        </div>
                      </div>
                    )}
                    <div className="video-overlay">
                      <div className="play-btn">
                        <Icon name="Play" size={22} style={{ color: "var(--night-deep)", marginLeft: "3px" }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="video-dot"
                style={{ background: i === currentSlide ? "var(--star-gold)" : "rgba(232,201,122,0.25)" }}
              />
            ))}
          </div>
        </div>
      </div>

      {activeIdx !== null && (
        <div className="video-modal-backdrop" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideo}>
              <Icon name="X" size={20} style={{ color: "var(--star-silver)" }} />
            </button>
            <div className="video-modal-player">
              {videos[activeIdx].src ? (
                <video
                  ref={(el) => { videoRefs.current[activeIdx] = el; }}
                  src={videos[activeIdx].src}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-contain rounded-2xl"
                  style={{ maxHeight: "85vh" }}
                />
              ) : (
                <div className="video-modal-placeholder">
                  <Icon name="Video" size={40} style={{ color: "var(--star-gold)", marginBottom: "12px" }} />
                  <p style={{ color: "rgba(200,216,240,0.45)", fontSize: "0.85rem", marginTop: "6px" }}>
                    Видео будет доступно ближе к дате концерта
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
