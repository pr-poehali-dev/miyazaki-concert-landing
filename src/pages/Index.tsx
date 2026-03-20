import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const heroImage = "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/ce1bc687-6056-4997-9310-c32fe42d72ec.jpg";

const STARS_COUNT = 160;

function StarsBackground() {
  return (
    <div className="stars-bg">
      {Array.from({ length: STARS_COUNT }).map((_, i) => {
        const size = Math.random() * 2.5 + 0.5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 4 + 2;
        const delay = Math.random() * 5;
        const minOpacity = Math.random() * 0.3 + 0.1;
        return (
          <div
            key={i}
            className="star"
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              "--duration": `${duration}s`,
              "--delay": `${delay}s`,
              "--min-opacity": minOpacity,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}

const program = [
  { film: "Унесённые призраками", pieces: ["Путь реки / Всегда со мной", "Легенда Дзэнибы"] },
  { film: "Мой сосед Тоторо", pieces: ["Прогулка", "Тоторо"] },
  { film: "Принцесса Мононоке", pieces: ["Тема Ашитаки", "Лес богов"] },
  { film: "Ходячий замок", pieces: ["Тема Хаула", "Марш Пустоши"] },
  { film: "Навсикая из Долины ветров", pieces: ["Поле орм", "Реквием"] },
  { film: "Замок Калиостро", pieces: ["Тема погони", "Рассвет над замком"] },
];

const tickets = [
  {
    tier: "Галерея",
    price: "2 500 ₽",
    description: "Места на верхнем ярусе с видом на купол",
    perks: ["Входной билет", "Программка концерта"],
    featured: false,
  },
  {
    tier: "Партер",
    price: "4 500 ₽",
    description: "Лучший обзор — в самом сердце звёздного купола",
    perks: ["Входной билет", "Программка с автографами", "Бокал шампанского", "Приоритетный вход"],
    featured: true,
  },
  {
    tier: "VIP",
    price: "8 000 ₽",
    description: "Эксклюзивный опыт с доступом за кулисы",
    perks: ["Входной билет", "Программка с автографами", "Шампанское и канапе", "Встреча с исполнителями", "Памятная фотография"],
    featured: false,
  },
];

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
      <StarsBackground />

      {/* Atmospheric blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute animate-drift"
          style={{
            width: 600,
            height: 600,
            top: "-15%",
            left: "-10%",
            background: "radial-gradient(ellipse, rgba(123, 94, 167, 0.12) 0%, transparent 70%)",
            borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
            filter: "blur(30px)",
            animationDuration: "15s",
          }}
        />
        <div
          className="absolute animate-drift"
          style={{
            width: 500,
            height: 500,
            bottom: "10%",
            right: "-8%",
            background: "radial-gradient(ellipse, rgba(74, 158, 158, 0.1) 0%, transparent 70%)",
            borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
            filter: "blur(30px)",
            animationDuration: "18s",
            animationDelay: "3s",
          }}
        />
      </div>

      {/* NAV */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl" style={{ color: "var(--star-gold)" }}>✦</span>
          <span className="font-light text-sm tracking-widest uppercase" style={{ color: "var(--star-silver)", fontFamily: "'Golos Text', sans-serif" }}>
            Миядзаки в Планетарии
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link">О концерте</a>
          <a href="#program" className="nav-link">Программа</a>
          <a href="#performers" className="nav-link">Исполнители</a>
          <a href="#tickets" className="nav-link">Билеты</a>
        </div>
        <a href="#tickets" className="btn-gold px-5 py-2 rounded text-sm cursor-pointer">
          Купить билет
        </a>
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 -mt-20">
        <div className="max-w-4xl mx-auto">
          <p
            className="stagger-1 text-xs tracking-[0.35em] uppercase mb-6"
            style={{ color: "var(--spirit-teal)", fontFamily: "'Golos Text', sans-serif" }}
          >
            14 июня 2025 • Начало в 20:00
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
            Виолончель и фортепиано. Московский Планетарий.
            <br />
            Музыка Хисаиси Дзё в окружении живых звёзд.
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

      {/* ABOUT */}
      <section id="about" className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider w-full max-w-2xl mb-20 mx-auto" />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--spirit-teal)" }}>О концерте</p>
              <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}>
                Когда музыка
                <br />
                <em className="italic" style={{ color: "var(--star-gold)" }}>встречает небо</em>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(200, 216, 240, 0.65)" }}>
                Впервые в Москве — уникальный концерт, где саундтреки культовых аниме-фильмов Хаяо Миядзаки звучат живьём под настоящим звёздным небом.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(200, 216, 240, 0.65)" }}>
                Купол Московского Планетария превратится в магическое пространство, где виолончель и фортепиано перенесут вас в миры Тоторо, Хаула и Сан — прямо среди звёзд.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "MapPin", label: "Московский Планетарий", sub: "Садовая-Кудринская, 5" },
                  { icon: "Clock", label: "14 июня 2025", sub: "Начало в 20:00" },
                  { icon: "Music", label: "~90 минут", sub: "Без антракта" },
                ].map(({ icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ background: "rgba(232, 201, 122, 0.1)" }}>
                      <Icon name={icon} fallback="Circle" size={14} style={{ color: "var(--star-gold)" }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--star-silver)" }}>{label}</p>
                      <p className="text-xs" style={{ color: "rgba(200, 216, 240, 0.45)" }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="animate-glow-pulse rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(232, 201, 122, 0.2)" }}>
                <img
                  src={heroImage}
                  alt="Концерт в планетарии"
                  className="w-full h-80 object-cover"
                  style={{ animation: "drift 12s ease-in-out infinite" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(7,11,26,0.6) 0%, transparent 50%)" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card px-5 py-3 rounded-xl">
                <p className="text-xs" style={{ color: "rgba(200, 216, 240, 0.6)" }}>Мест осталось</p>
                <p className="text-2xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-gold)" }}>47</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="relative z-10 py-32 px-6" style={{ background: "rgba(13, 21, 53, 0.3)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--spirit-teal)" }}>Программа вечера</p>
            <h2 className="text-5xl md:text-6xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}>
              Миры, которые
              <br />
              <em className="italic" style={{ color: "var(--star-gold)" }}>оживут в звуке</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {program.map(({ film, pieces }, i) => (
              <div key={film} className="glass-card program-item rounded-xl px-6 py-5">
                <div className="flex items-start gap-3">
                  <span
                    className="text-xs font-medium mt-0.5 min-w-[20px]"
                    style={{ color: "rgba(232, 201, 122, 0.45)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-light mb-2" style={{ color: "var(--star-silver)", fontFamily: "'Cormorant Garamond', serif" }}>
                      {film}
                    </h3>
                    {pieces.map((piece) => (
                      <p key={piece} className="text-sm mb-1" style={{ color: "rgba(200, 216, 240, 0.5)" }}>
                        — {piece}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-8" style={{ color: "rgba(200, 216, 240, 0.3)" }}>
            Программа может быть незначительно изменена
          </p>
        </div>
      </section>

      {/* PERFORMERS */}
      <section id="performers" className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--spirit-teal)" }}>Исполнители</p>
            <h2 className="text-5xl md:text-6xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}>
              Голоса этого
              <br />
              <em className="italic" style={{ color: "var(--star-gold)" }}>вечера</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Анна Лебедева",
                role: "Виолончель",
                bio: "Лауреат международных конкурсов, солистка Московской филармонии. Её виолончель способна рассказывать истории так, как не могут слова.",
                emoji: "🎻",
                color: "var(--mist-purple)",
              },
              {
                name: "Михаил Соколов",
                role: "Фортепиано",
                bio: "Выпускник Московской консерватории. Специализируется на современной и кино-музыке, виртуозно сочетая классическую школу с живой импровизацией.",
                emoji: "🎹",
                color: "var(--spirit-teal)",
              },
            ].map(({ name, role, bio, emoji, color }) => (
              <div key={name} className="performer-card rounded-2xl p-8 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
                  style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                >
                  {emoji}
                </div>
                <h3
                  className="text-2xl font-light mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}
                >
                  {name}
                </h3>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color }}>
                  {role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(200, 216, 240, 0.55)" }}>
                  {bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKETS */}
      <section id="tickets" className="relative z-10 py-32 px-6" style={{ background: "rgba(13, 21, 53, 0.4)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--spirit-teal)" }}>Билеты</p>
            <h2 className="text-5xl md:text-6xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}>
              Выберите свой
              <br />
              <em className="italic" style={{ color: "var(--star-gold)" }}>вечер среди звёзд</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tickets.map(({ tier, price, description, perks, featured }) => (
              <div key={tier} className={`ticket-card rounded-2xl p-7 ${featured ? "featured" : ""}`}>
                {featured && (
                  <div
                    className="text-xs tracking-[0.2em] uppercase text-center mb-5 py-1 px-3 rounded-full mx-auto w-fit"
                    style={{ background: "rgba(232, 201, 122, 0.15)", color: "var(--star-gold)", border: "1px solid rgba(232, 201, 122, 0.3)" }}
                  >
                    Популярный выбор
                  </div>
                )}
                <h3 className="text-2xl font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}>
                  {tier}
                </h3>
                <p className="text-sm mb-5" style={{ color: "rgba(200, 216, 240, 0.5)" }}>{description}</p>
                <p className="text-4xl font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-gold)" }}>
                  {price}
                </p>
                <div className="space-y-2.5 mb-8">
                  {perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2.5">
                      <span style={{ color: "var(--star-gold)" }}>✦</span>
                      <span className="text-sm" style={{ color: "rgba(200, 216, 240, 0.65)" }}>{perk}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3 rounded text-sm cursor-pointer ${featured ? "btn-gold" : "btn-ghost-gold"}`}
                >
                  Купить билет
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-10" style={{ color: "rgba(200, 216, 240, 0.3)" }}>
            Возврат билетов до 7 июня 2025 • 18+
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-12 px-6" style={{ borderTop: "1px solid rgba(232, 201, 122, 0.1)" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--star-gold)" }}>✦</span>
            <span className="text-sm" style={{ color: "rgba(200, 216, 240, 0.4)", fontFamily: "'Golos Text', sans-serif" }}>
              Миядзаки в Планетарии — 14 июня 2025
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs nav-link">Политика конфиденциальности</a>
            <a href="#" className="text-xs nav-link">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}