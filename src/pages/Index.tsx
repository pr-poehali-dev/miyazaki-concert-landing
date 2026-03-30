import { lazy, Suspense, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import { StarsBackground } from "@/components/stars";
import { AboutSection } from "@/components/sections";
import { useInView } from "@/hooks/useInView";

const AtmosphereSection = lazy(() => import("@/components/sections").then(m => ({ default: m.AtmosphereSection })));
const ProgramSection = lazy(() => import("@/components/sections").then(m => ({ default: m.ProgramSection })));
const PerformersSection = lazy(() => import("@/components/sections").then(m => ({ default: m.PerformersSection })));
const VideoCarousel = lazy(() => import("@/components/VideoCarousel"));
const TicketsSection = lazy(() => import("@/components/sections").then(m => ({ default: m.TicketsSection })));
const Footer = lazy(() => import("@/components/sections").then(m => ({ default: m.Footer })));

const heroImage = "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/ce1bc687-6056-4997-9310-c32fe42d72ec.jpg";

function BelowFold() {
  const { ref, inView } = useInView("300px");
  return (
    <div ref={ref}>
      {inView && (
        <Suspense fallback={null}>
          <AtmosphereSection />
          <ProgramSection />
          <PerformersSection />
          <VideoCarousel />
          <TicketsSection />
          <Footer />
        </Suspense>
      )}
    </div>
  );
}

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".stagger-1, .stagger-2, .stagger-3, .stagger-4, .stagger-5");
    items.forEach((item) => {
      item.classList.add("animate-float-up");
    });
  }, []);

  return (
    <div className="relative min-h-screen" style={{ background: "var(--night-deep)" }}>
      {/* Global parallax hero image background */}
      <div className="global-bg-image" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="global-bg-overlay" />

      <StarsBackground />

      {/* NAV */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl" style={{ color: "var(--star-gold)" }}>✦</span>
          <span className="font-light text-sm tracking-widest uppercase" style={{ color: "var(--star-silver)", fontFamily: "'Golos Text', sans-serif" }}>МИЯДЗАКИ В ПЛАНЕТАРИИ 1</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link">О концерте</a>
          <a href="#program" className="nav-link">Программа</a>
          <a href="#performers" className="nav-link">Исполнители</a>
          <a href="#tickets" className="nav-link">Билеты</a>
        </div>
        <a href="#tickets" className="btn-gold px-5 py-2 rounded text-sm cursor-pointer">Билеты</a>
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 -mt-20">
        <div className="max-w-4xl mx-auto">
          <p
            className="stagger-1 text-base md:text-lg tracking-[0.25em] uppercase mb-6 font-medium"
            style={{ color: "var(--star-silver)", fontFamily: "'Golos Text', sans-serif", textShadow: "0 0 20px rgba(200,216,240,0.3)" }}
          >
            19 апреля 2025 • Начало в 19:00
          </p>

          <h1
            className="stagger-2 text-6xl md:text-8xl lg:text-9xl font-light mb-4 leading-none"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="gold-shimmer">Миядзаки</span>
          </h1>

          <h2
            className="stagger-3 text-2xl md:text-3xl font-light mb-8"
            style={{ color: "var(--star-silver)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Живые саундтреки под звёздным куполом
          </h2>

          <p
            className="stagger-4 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(200, 216, 240, 0.65)" }}
          >
            Виолончель и Фортепиано.
            <br />
            Музыка: Дзё Хисаиси
            <br />
            Планетарий 1
          </p>

          <div className="stagger-5 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#tickets" className="btn-gold px-8 py-3.5 rounded text-sm w-full sm:w-auto cursor-pointer">
              Выбрать билет
            </a>
            <a href="#about" className="btn-ghost-gold px-8 py-3.5 rounded text-sm w-full sm:w-auto cursor-pointer">
              Узнать больше
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-12 flex flex-col items-center gap-2 animate-scroll-indicator"
          style={{ color: "rgba(232, 201, 122, 0.4)" }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Golos Text', sans-serif" }}>Листай</span>
          <Icon name="ChevronDown" size={16} />
        </div>
      </section>

      <AboutSection />
      <BelowFold />
    </div>
  );
}