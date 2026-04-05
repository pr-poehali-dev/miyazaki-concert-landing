import { useState, useRef, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";
import { SectionStars } from "@/components/stars";

function VideoThumb({ src, onClick }: { src: string; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onLoaded = () => { video.currentTime = 0.5; };
    video.addEventListener("loadedmetadata", onLoaded);
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  return (
    <button
      type="button"
      onClick={onClick}
      className="video-slot flex-shrink-0"
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer", position: "relative", zIndex: 25 }}
    >
      <div className="video-poster">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <div className="video-overlay" style={{ opacity: 1, background: "linear-gradient(to top, rgba(7,11,26,0.7) 0%, rgba(7,11,26,0.1) 60%, transparent 100%)" }}>
          <div className="play-btn">
            <Icon name="Play" size={22} style={{ color: "var(--night-deep)", marginLeft: "3px" }} />
          </div>
        </div>
      </div>
    </button>
  );
}

const videos = [
  { id: 1, src: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/6de5cb58-ed24-4d47-81d4-2cc60b232ea1.mp4", title: "За кулисами", caption: "Подготовка к концерту" },
  { id: 2, src: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/1e8d4344-2d6a-45e6-8f31-c0b210f69e86.mp4", title: "Репетиция", caption: "Анна за виолончелью" },
  { id: 3, src: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/ad0407a2-01ed-4402-b21a-45fa4cdba218.mp4", title: "Звёздный купол", caption: "Планетарий изнутри" },
  { id: 4, src: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/f9c6273b-9d7e-4e52-808e-c769ca2c5199.mp4", title: "Михаил", caption: "Фортепианный мотив" },
];

const VISIBLE = 3;

export default function VideoCarousel() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const maxSlide = Math.max(0, videos.length - VISIBLE);

  const prev = useCallback(() => setCurrentSlide((s) => Math.max(0, s - 1)), []);
  const next = useCallback(() => setCurrentSlide((s) => Math.min(maxSlide, s + 1)), [maxSlide]);

  const pendingPlay = useRef(false);

  const openVideo = (idx: number) => {
    pendingPlay.current = true;
    setActiveIdx(idx);
  };

  const closeVideo = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setActiveIdx(null);
  };

  const handleVideoReady = (el: HTMLVideoElement | null) => {
    modalVideoRef.current = el;
    if (el && pendingPlay.current) {
      pendingPlay.current = false;
      el.play().catch(() => {});
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeVideo(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const slideOffset = currentSlide * (100 / VISIBLE);

  return (
    <section id="videos" className="relative py-32 px-6 section-with-bg" style={{ zIndex: 10 }}>
      <SectionStars id="videos" />
      <div className="section-nebula" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(74,100,158,0.1) 0%, transparent 100%)" }} />

      <div className="max-w-5xl mx-auto" style={{ position: "relative", zIndex: 20 }}>
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--spirit-teal)" }}>Видео</p>
          <h2 className="text-5xl md:text-6xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}>
            Фрагменты
            <br />
            <em className="italic" style={{ color: "var(--star-gold)" }}>предыдущих концертов</em>
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Стрелки */}
          <button onClick={prev} disabled={currentSlide === 0} className="video-arrow" style={{ position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)", zIndex: 30 }}>
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button onClick={next} disabled={currentSlide >= maxSlide} className="video-arrow" style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", zIndex: 30 }}>
            <Icon name="ChevronRight" size={20} />
          </button>

          <div style={{ overflow: "hidden", borderRadius: "16px" }}>
            <div
              style={{
                display: "flex",
                gap: "16px",
                transform: `translateX(calc(-${slideOffset}% - ${currentSlide * 16 / VISIBLE}px))`,
                transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {videos.map((video, idx) => (
                <div
                  key={video.id}
                  style={{
                    width: `calc(${100 / VISIBLE}% - ${(16 * (VISIBLE - 1)) / VISIBLE}px)`,
                    flexShrink: 0,
                  }}
                >
                  <VideoThumb src={video.src} onClick={() => openVideo(idx)} />
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
        <div
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(7,11,26,0.95)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
          onClick={closeVideo}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: "380px" }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideo}
              style={{ position: "absolute", top: "-40px", right: 0, background: "none", border: "none", cursor: "pointer", zIndex: 10 }}
            >
              <Icon name="X" size={24} style={{ color: "var(--star-silver)" }} />
            </button>
            <video
              key={activeIdx}
              ref={handleVideoReady}
              src={videos[activeIdx].src}
              controls
              playsInline
              style={{ width: "100%", borderRadius: "16px", maxHeight: "85vh", display: "block" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}