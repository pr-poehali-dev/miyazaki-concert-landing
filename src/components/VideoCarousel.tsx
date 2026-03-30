import { useState, useRef, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";
import { SectionStars } from "@/components/stars";

const videos = [
  { id: 1, src: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/b38c6f89-5c1e-4564-b031-d27c3390810b.mp4", title: "За кулисами", caption: "Подготовка к концерту" },
  { id: 2, src: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/2f6559b9-ab9d-4b5e-8bcf-463ba64a25ff.mp4", title: "Репетиция", caption: "Анна за виолончелью" },
  { id: 3, src: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/78bc8bbe-c505-4750-8deb-325e93983984.mp4", title: "Звёздный купол", caption: "Планетарий изнутри" },
  { id: 4, src: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/e2f1bd41-651d-4dd6-bc7f-8c7bb2c8f45f.mp4", title: "Михаил", caption: "Фортепианный мотив" },
  { id: 5, src: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/f20357a1-2ad2-4255-b036-c83a0afed351.mp4", title: "Анонс", caption: "19 апреля · Москва" },
  { id: 6, src: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/01eed1dd-517a-48e0-8c6c-4f0421ea94c3.mp4", title: "Финал", caption: "Музыка под звёздным небом" },
];

const VISIBLE = 3;

export default function VideoCarousel() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const maxSlide = Math.max(0, videos.length - VISIBLE);

  const prev = useCallback(() => setCurrentSlide((s) => Math.max(0, s - 1)), []);
  const next = useCallback(() => setCurrentSlide((s) => Math.min(maxSlide, s + 1)), [maxSlide]);

  const openVideo = (idx: number) => {
    setActiveIdx(idx);
  };

  const closeVideo = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setActiveIdx(null);
  };

  useEffect(() => {
    if (activeIdx !== null) {
      const timer = setTimeout(() => {
        modalVideoRef.current?.play().catch(() => {});
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeIdx]);

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
                <button
                  key={video.id}
                  type="button"
                  onClick={() => openVideo(idx)}
                  className="video-slot flex-shrink-0"
                  style={{
                    width: `calc(${100 / VISIBLE}% - ${(16 * (VISIBLE - 1)) / VISIBLE}px)`,
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 25,
                  }}
                >
                  <div className="video-poster">
                    <video
                      src={video.src}
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="w-full h-full object-cover"
                    />
                    <div className="video-overlay" style={{ opacity: 1, background: "linear-gradient(to top, rgba(7,11,26,0.7) 0%, rgba(7,11,26,0.1) 60%, transparent 100%)" }}>
                      <div className="play-btn">
                        <Icon name="Play" size={22} style={{ color: "var(--night-deep)", marginLeft: "3px" }} />
                      </div>
                    </div>
                  </div>
                </button>
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
              ref={modalVideoRef}
              src={videos[activeIdx].src}
              controls
              autoPlay
              playsInline
              style={{ width: "100%", borderRadius: "16px", maxHeight: "85vh", display: "block" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}