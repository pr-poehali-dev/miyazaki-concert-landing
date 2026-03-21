import Icon from "@/components/ui/icon";
import { SectionStars } from "@/components/stars";

const heroImage = "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/ce1bc687-6056-4997-9310-c32fe42d72ec.jpg";

const program = [
  {
    film: "Унесённые призраками",
    pieces: ["Путь реки / Всегда со мной", "Легенда Дзэнибы"],
    character: "Тихиро и Безликий",
    year: "2001",
    color: "#7b5ea7",
    img: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/f3c7be50-a50b-42d6-a58f-56b7ccf5a041.jpg",
  },
  {
    film: "Мой сосед Тоторо",
    pieces: ["Прогулка", "Тоторо"],
    character: "Тоторо",
    year: "1988",
    color: "#4a9e6a",
    img: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/1f585d01-facc-45e2-bf61-3256e9923d89.jpg",
  },
  {
    film: "Принцесса Мононоке",
    pieces: ["Тема Ашитаки", "Лес богов"],
    character: "Сан и Ситиками",
    year: "1997",
    color: "#4a9e9e",
    img: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/b935b8b0-02c6-4b53-bf75-79dc9029e0f0.jpg",
  },
  {
    film: "Ходячий замок",
    pieces: ["Тема Хаула", "Марш Пустоши"],
    character: "Хаул",
    year: "2004",
    color: "#c8a84b",
    img: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/06bd79fa-7b6e-438e-b2b9-c8013f53692d.jpg",
  },
  {
    film: "Навсикая из Долины ветров",
    pieces: ["Поле орм", "Реквием"],
    character: "Навсикая",
    year: "1984",
    color: "#9e7a4a",
    img: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/65acfad1-58dd-4384-97b2-1d4ee4b3d21e.jpg",
  },
  {
    film: "Замок Калиостро",
    pieces: ["Тема погони", "Рассвет над замком"],
    character: "Люпен III",
    year: "1979",
    color: "#5a7ab5",
    img: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/83959779-8993-4554-9649-c20fb738674f.jpg",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-32 px-6 section-with-bg">
      <SectionStars id="about" />
      <div className="section-nebula" style={{ background: "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(123,94,167,0.13) 0%, transparent 100%)" }} />
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
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(200, 216, 240, 0.65)" }}>Впервые в Нижнем Новгороде — уникальный концерт, где саундтреки культовых аниме-фильмов Хаяо Миядзаки звучат живьём под настоящим звёздным небом.</p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(200, 216, 240, 0.65)" }}>Купол Планетария 1 превратится в магическое пространство, где виолончель и фортепиано перенесут вас в миры Тоторо, Хаула и Сан — прямо среди звёзд.</p>
            <div className="flex flex-col gap-4">
              {[
                { icon: "MapPin", label: "Планетарий 1", sub: "просп. Гагарина, 35Н, Парк Швейцария" },
                { icon: "Clock", label: "19 апреля 2025", sub: "Начало в 18:00" },
                { icon: "Music", label: "~75 минут", sub: "Без антракта" },
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
          </div>
        </div>
      </div>
    </section>
  );
}

export function AtmosphereSection() {
  const moments = [
    {
      icon: "Star",
      title: "Живой звук",
      text: "Виолончель и фортепиано звучат вживую — каждая нота рождается здесь и сейчас, неповторимая и единственная в своём роде.",
    },
    {
      icon: "Globe",
      title: "Купол планетария",
      text: "Над вами — настоящее звёздное небо. Проекция тысяч звёзд создаёт ощущение, что вы парите где-то между мирами Миядзаки.",
    },
    {
      icon: "Wind",
      title: "Полное погружение",
      text: "Никаких экранов, никаких записей. Только музыка, темнота и звёзды — пространство, где можно по-настоящему отпустить себя.",
    },
    {
      icon: "Heart",
      title: "Общий момент",
      text: "Рядом — люди, которые так же любят эти миры. Концерт объединяет зал в одно дыхание, в одно переживание.",
    },
  ];

  return (
    <section id="atmosphere" className="relative z-10 py-32 px-6 section-with-bg">
      <SectionStars id="atmosphere" />
      <div
        className="section-nebula"
        style={{ background: "radial-gradient(ellipse 70% 60% at 30% 60%, rgba(74,158,158,0.09) 0%, transparent 100%)" }}
      />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--spirit-teal)" }}>
            Атмосфера
          </p>
          <h2
            className="text-5xl md:text-6xl font-light leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}
          >
            Магия живого
            <br />
            <em className="italic" style={{ color: "var(--star-gold)" }}>выступления</em>
          </h2>
          <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(200, 216, 240, 0.6)" }}>
            Живой концерт — это не просто музыка. Это момент, который невозможно поставить на паузу, перемотать или повторить. Он происходит один раз — и остаётся с вами навсегда.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Фото */}
          <div className="relative rounded-2xl overflow-hidden animate-glow-pulse" style={{ border: "1px solid rgba(232, 201, 122, 0.2)" }}>
            <img
              src="https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/a5c31b23-3709-46e6-b368-416c9c44acda.jpg"
              alt="Атмосфера концерта в планетарии"
              className="w-full object-cover"
              style={{ maxHeight: 520 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(7,11,26,0.5) 0%, transparent 60%)" }}
            />
          </div>

          {/* Карточки */}
          <div className="flex flex-col gap-5">
            {moments.map(({ icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl p-6 flex gap-5"
                style={{ background: "rgba(200, 216, 240, 0.04)", border: "1px solid rgba(232, 201, 122, 0.12)" }}
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(232, 201, 122, 0.1)" }}
                >
                  <Icon name={icon} fallback="Circle" size={18} style={{ color: "var(--star-gold)" }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-light mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(200, 216, 240, 0.55)" }}>
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramSection() {
  return (
    <section id="program" className="relative z-10 py-32 px-6 section-with-bg">
      <SectionStars id="program" />
      <div className="section-nebula" style={{ background: "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(74,158,158,0.1) 0%, transparent 100%)" }} />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--spirit-teal)" }}>Программа вечера</p>
          <h2 className="text-5xl md:text-6xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}>
            Миры, которые
            <br />
            <em className="italic" style={{ color: "var(--star-gold)" }}>оживут в звуке</em>
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {program.map(({ film, pieces, color, img, year }, i) => (
            <div key={film} className="program-card group" style={{ "--card-color": color } as React.CSSProperties}>
              <div className="program-card-img">
                <img src={img} alt={film} className="w-full h-full object-cover" />
                <div className="program-card-img-overlay" style={{ background: `linear-gradient(to top, rgba(7,11,26,0.97) 0%, rgba(7,11,26,0.3) 50%, transparent 100%)` }} />
                <div className="program-card-year">{year}</div>
              </div>
              <div className="program-card-body">
                <div className="program-card-number">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="program-card-title">{film}</h3>
                <div className="program-card-divider" style={{ background: `linear-gradient(90deg, ${color}60, transparent)` }} />
                <div className="program-card-pieces">
                  {pieces.map((piece) => (
                    <p key={piece} className="program-card-piece">
                      <span style={{ color }}>♩</span> {piece}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-10" style={{ color: "rgba(200, 216, 240, 0.3)" }}>
          Программа может быть незначительно изменена
        </p>
      </div>
    </section>
  );
}

export function PerformersSection() {
  return (
    <section id="performers" className="relative z-10 py-32 px-6 section-with-bg">
      <SectionStars id="performers" />
      <div className="section-nebula" style={{ background: "radial-gradient(ellipse 80% 60% at 20% 60%, rgba(123,94,167,0.12) 0%, transparent 100%)" }} />
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
              name: "Николай Максимов",
              role: "Виолончель",
              bio: "Лауреат международных конкурсов, лауреат фестиваля «Новые имена», концертмейстер виолончелей оркестра консерватории. Своей харизмой и музыкальностью погружает слушателей в истории, которые не расскажешь словами.",
              photo: "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/bucket/6d35cabe-55be-4a46-b0a6-bd80265f5e70.jpeg",
              color: "var(--mist-purple)",
            },
            {
              name: "Михаил Соколов",
              role: "Фортепиано",
              bio: "Выпускник Московской консерватории. Специализируется на современной и кино-музыке, виртуозно сочетая классическую школу с живой импровизацией.",
              photo: null,
              color: "var(--spirit-teal)",
            },
          ].map(({ name, role, bio, photo, color }) => (
            <div key={name} className="performer-card rounded-2xl overflow-hidden text-center">
              {photo ? (
                <div className="relative h-96 overflow-hidden">
                  <img src={photo} alt={name} className="w-full h-full object-cover" style={{ objectPosition: "center 20%" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,11,26,0.85) 0%, transparent 60%)" }} />
                </div>
              ) : (
                <div className="h-72 flex items-center justify-center text-5xl" style={{ background: `${color}10` }}>
                  🎹
                </div>
              )}
              <div className="p-8">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TicketsSection() {
  return (
    <section id="tickets" className="relative z-10 py-32 px-6 section-with-bg">
      <SectionStars id="tickets" />
      <div className="section-nebula" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 20%, rgba(200,168,75,0.08) 0%, transparent 100%)" }} />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--spirit-teal)" }}>Билеты</p>
          <h2 className="text-5xl md:text-6xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--star-silver)" }}>
            Проведите свой вечер
            <br />
            <em className="italic" style={{ color: "var(--star-gold)" }}>среди музыки и звёзд</em>
          </h2>
        </div>

        {/* ── Виджет билетного оператора ── */}
        {/* Вставьте сюда код виджета (например, от Ticketscloud, Radario, Timepad и др.) */}
        <div className="ticket-widget-slot rounded-2xl mb-12 flex flex-col items-center justify-center gap-4" style={{ minHeight: 220 }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(232,201,122,0.1)", border: "1px solid rgba(232,201,122,0.25)" }}>
            <Icon name="Ticket" size={24} style={{ color: "var(--star-gold)" }} />
          </div>
          <div className="text-center">
            <p className="text-base font-light mb-1" style={{ color: "var(--star-silver)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem" }}>
              Здесь появится виджет продажи билетов
            </p>
            <p className="text-xs" style={{ color: "rgba(200,216,240,0.35)" }}>
              Вставьте код виджета билетного оператора вместо этого блока
            </p>
          </div>
        </div>

        <p className="text-center text-xs mt-4" style={{ color: "rgba(200, 216, 240, 0.3)" }}>
          Возврат билетов до 12 апреля 2025 • 18+
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6" style={{ borderTop: "1px solid rgba(232, 201, 122, 0.1)" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span style={{ color: "var(--star-gold)" }}>✦</span>
          <span className="text-sm" style={{ color: "rgba(200, 216, 240, 0.4)", fontFamily: "'Golos Text', sans-serif" }}>
            Миядзаки в Планетарии — 19 апреля 2025
          </span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-xs nav-link">Политика конфиденциальности</a>
          <a href="#" className="text-xs nav-link">Контакты</a>
        </div>
      </div>
    </footer>
  );
}