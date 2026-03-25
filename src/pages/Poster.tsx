import "@/index.css";

const heroImage =
  "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/ce1bc687-6056-4997-9310-c32fe42d72ec.jpg";

const films = [
  "Унесённые призраками",
  "Мой сосед Тоторо",
  "Принцесса Мononoke",
  "Ходячий замок",
  "Навсикая из Долины ветров",
  "Замок Калиостро",
];

export default function Poster() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Golos+Text:wght@400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: #1a1a2e;
        }

        .poster-wrap {
          width: 297mm;
          min-height: 420mm;
          margin: 0 auto;
          background: #070b1a;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        @media print {
          @page {
            size: A3 portrait;
            margin: 0;
          }
          body { background: #070b1a; }
          .print-btn { display: none !important; }
          .poster-wrap {
            width: 297mm;
            min-height: 420mm;
            margin: 0;
          }
        }

        .print-btn {
          position: fixed;
          top: 24px;
          right: 24px;
          z-index: 100;
          background: #e8c97a;
          color: #070b1a;
          border: none;
          padding: 12px 28px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          font-family: 'Golos Text', sans-serif;
          box-shadow: 0 4px 24px rgba(232,201,122,0.3);
        }
        .print-btn:hover { background: #f0d68a; }
      `}</style>

      <button className="print-btn" onClick={() => window.print()}>
        Сохранить PDF / Печать
      </button>

      <div className="poster-wrap">
        {/* Фон — картинка */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.18,
        }} />

        {/* Градиентный оверлей */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(7,11,26,0.4) 0%, rgba(7,11,26,0.7) 50%, rgba(7,11,26,0.97) 100%)",
        }} />

        {/* Звёзды декоративные */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {[...Array(60)].map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              left: `${Math.sin(i * 137.5) * 50 + 50}%`,
              top: `${Math.cos(i * 97.3) * 50 + 50}%`,
              width: i % 7 === 0 ? "3px" : "1.5px",
              height: i % 7 === 0 ? "3px" : "1.5px",
              borderRadius: "50%",
              background: i % 5 === 0 ? "#e8c97a" : "#c8d8f0",
              opacity: 0.15 + (i % 4) * 0.1,
            }} />
          ))}
        </div>

        {/* Контент */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "420mm", padding: "14mm 16mm" }}>

          {/* Шапка */}
          <div style={{ textAlign: "center", marginBottom: "10mm" }}>
            <p style={{
              fontFamily: "'Golos Text', sans-serif",
              fontSize: "9pt",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#4a9e9e",
              marginBottom: "6mm",
            }}>
              Живой концерт · Нижний Новгород
            </p>

            {/* Главный заголовок */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "88pt",
              fontWeight: 300,
              lineHeight: 0.9,
              color: "#c8d8f0",
              letterSpacing: "-0.01em",
              marginBottom: "4mm",
            }}>
              Миядзаки
            </h1>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18pt",
              fontStyle: "italic",
              color: "#e8c97a",
              letterSpacing: "0.05em",
              marginBottom: "8mm",
            }}>
              Музыка под звёздным небом
            </p>

            {/* Разделитель */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12mm", marginBottom: "8mm" }}>
              <div style={{ height: "1px", width: "40mm", background: "linear-gradient(to right, transparent, rgba(232,201,122,0.5))" }} />
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e8c97a", opacity: 0.7 }} />
              <div style={{ height: "1px", width: "40mm", background: "linear-gradient(to left, transparent, rgba(232,201,122,0.5))" }} />
            </div>
          </div>

          {/* Дата и место — главный блок */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "10mm",
            marginBottom: "10mm",
          }}>
            {[
              { top: "19 апреля 2025", bottom: "суббота" },
              { top: "19:00", bottom: "начало концерта" },
              { top: "~75 минут", bottom: "без антракта" },
            ].map(({ top, bottom }) => (
              <div key={top} style={{
                textAlign: "center",
                padding: "5mm 8mm",
                border: "1px solid rgba(232,201,122,0.25)",
                borderRadius: "6mm",
                background: "rgba(232,201,122,0.06)",
                minWidth: "52mm",
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "22pt",
                  fontWeight: 600,
                  color: "#e8c97a",
                  lineHeight: 1.1,
                }}>
                  {top}
                </p>
                <p style={{
                  fontFamily: "'Golos Text', sans-serif",
                  fontSize: "8pt",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "rgba(200,216,240,0.5)",
                  marginTop: "1.5mm",
                }}>
                  {bottom}
                </p>
              </div>
            ))}
          </div>

          {/* Место */}
          <div style={{ textAlign: "center", marginBottom: "10mm" }}>
            <p style={{
              fontFamily: "'Golos Text', sans-serif",
              fontSize: "13pt",
              fontWeight: 600,
              color: "#c8d8f0",
              letterSpacing: "0.05em",
            }}>
              Планетарий 1
            </p>
            <p style={{
              fontFamily: "'Golos Text', sans-serif",
              fontSize: "9pt",
              color: "rgba(200,216,240,0.5)",
              marginTop: "1.5mm",
              letterSpacing: "0.05em",
            }}>
              просп. Гагарина, 35Н · Парк Швейцария
            </p>
          </div>

          {/* Большая картинка */}
          <div style={{
            borderRadius: "6mm",
            overflow: "hidden",
            border: "1px solid rgba(232,201,122,0.2)",
            marginBottom: "10mm",
            flexShrink: 0,
            height: "90mm",
            position: "relative",
          }}>
            <img src={heroImage} alt="Концерт" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,11,26,0.6) 0%, transparent 60%)" }} />
          </div>

          {/* Программа */}
          <div style={{ marginBottom: "10mm" }}>
            <p style={{
              fontFamily: "'Golos Text', sans-serif",
              fontSize: "8pt",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#4a9e9e",
              textAlign: "center",
              marginBottom: "5mm",
            }}>
              Программа концерта
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3mm" }}>
              {films.map((film) => (
                <div key={film} style={{
                  padding: "3mm 5mm",
                  border: "1px solid rgba(232,201,122,0.15)",
                  borderRadius: "3mm",
                  background: "rgba(232,201,122,0.04)",
                  textAlign: "center",
                }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "11pt",
                    fontStyle: "italic",
                    color: "#c8d8f0",
                    lineHeight: 1.3,
                  }}>
                    {film}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Исполнители */}
          <div style={{ marginBottom: "10mm", textAlign: "center" }}>
            <p style={{
              fontFamily: "'Golos Text', sans-serif",
              fontSize: "8pt",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#4a9e9e",
              marginBottom: "4mm",
            }}>
              Исполнители
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16mm" }}>
              {[
                { name: "Николай Максимов", role: "виолончель" },
                { name: "Михаил Зайденберг", role: "фортепиано" },
              ].map(({ name, role }) => (
                <div key={name}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "16pt",
                    fontWeight: 400,
                    color: "#c8d8f0",
                  }}>
                    {name}
                  </p>
                  <p style={{
                    fontFamily: "'Golos Text', sans-serif",
                    fontSize: "8pt",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "rgba(200,216,240,0.45)",
                    marginTop: "1mm",
                  }}>
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Нижняя полоса */}
          <div style={{ marginTop: "auto" }}>
            <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(232,201,122,0.3), transparent)", marginBottom: "5mm" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{
                fontFamily: "'Golos Text', sans-serif",
                fontSize: "8pt",
                color: "rgba(200,216,240,0.35)",
                letterSpacing: "0.1em",
              }}>
                12+
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "11pt",
                fontStyle: "italic",
                color: "rgba(232,201,122,0.5)",
                letterSpacing: "0.05em",
              }}>
                Когда музыка встречает небо
              </p>
              <p style={{
                fontFamily: "'Golos Text', sans-serif",
                fontSize: "8pt",
                color: "rgba(200,216,240,0.35)",
                letterSpacing: "0.1em",
              }}>
                16+
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
