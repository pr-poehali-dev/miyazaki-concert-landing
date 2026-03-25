const heroImage =
  "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/fc513390-762a-47c7-9a68-78117f64bf34.jpg";

export default function Poster() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Golos+Text:wght@400;500;600;700&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        html, body { background: #111; }

        .poster-page {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          min-height: 100vh;
          padding: 32px;
          background: #111;
        }

        .poster {
          width: 297mm;
          height: 420mm;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* Картинка — весь фон */
        .poster__bg {
          position: absolute;
          inset: 0;
          background-image: url(${heroImage});
          background-size: cover;
          background-position: center center;
        }

        /* Тёмные градиенты поверх для читаемости текста */
        .poster__overlay-top {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(4,8,20,0.78) 0%,
            rgba(4,8,20,0.45) 30%,
            rgba(4,8,20,0.1) 55%,
            rgba(4,8,20,0.55) 75%,
            rgba(4,8,20,0.92) 100%
          );
        }

        .poster__content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 12mm 14mm 10mm;
        }

        /* ── ВЕРХ ── */
        .poster__top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .poster__label {
          font-family: 'Golos Text', sans-serif;
          font-size: 8.5pt;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #4a9e9e;
          line-height: 1.5;
        }

        .poster__date-badge {
          text-align: right;
        }

        .poster__date-day {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52pt;
          font-weight: 700;
          color: #e8c97a;
          line-height: 0.9;
          text-shadow: 0 2px 20px rgba(0,0,0,0.8);
        }

        .poster__date-rest {
          font-family: 'Golos Text', sans-serif;
          font-size: 11pt;
          font-weight: 600;
          color: #c8d8f0;
          letter-spacing: 0.1em;
          text-shadow: 0 2px 10px rgba(0,0,0,0.9);
        }

        .poster__date-time {
          font-family: 'Golos Text', sans-serif;
          font-size: 9pt;
          color: rgba(200,216,240,0.65);
          letter-spacing: 0.1em;
          margin-top: 1mm;
        }

        /* ── СЕРЕДИНА — заголовок ── */
        .poster__middle {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 6mm 0;
        }

        .poster__title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 116pt;
          font-weight: 700;
          line-height: 0.88;
          color: #ffffff;
          letter-spacing: -0.02em;
          text-shadow:
            0 4px 40px rgba(0,0,0,0.9),
            0 0 80px rgba(0,0,0,0.7);
        }

        .poster__subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20pt;
          font-style: italic;
          font-weight: 400;
          color: #e8c97a;
          letter-spacing: 0.04em;
          margin-top: 4mm;
          text-shadow: 0 2px 16px rgba(0,0,0,0.9);
        }

        .poster__performers {
          font-family: 'Golos Text', sans-serif;
          font-size: 10pt;
          font-weight: 500;
          color: rgba(200,216,240,0.8);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 5mm;
          text-shadow: 0 2px 10px rgba(0,0,0,0.9);
        }

        /* ── НИЗ ── */
        .poster__bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 6mm;
        }

        .poster__venue {
          flex: 1;
        }

        .poster__venue-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18pt;
          font-weight: 600;
          color: #ffffff;
          text-shadow: 0 2px 12px rgba(0,0,0,0.9);
        }

        .poster__venue-addr {
          font-family: 'Golos Text', sans-serif;
          font-size: 8pt;
          color: rgba(200,216,240,0.6);
          letter-spacing: 0.05em;
          margin-top: 1mm;
          text-shadow: 0 1px 8px rgba(0,0,0,0.9);
        }

        .poster__program {
          text-align: center;
          flex: 1;
        }

        .poster__program-label {
          font-family: 'Golos Text', sans-serif;
          font-size: 7pt;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #4a9e9e;
          margin-bottom: 2mm;
        }

        .poster__program-films {
          font-family: 'Cormorant Garamond', serif;
          font-size: 9pt;
          font-style: italic;
          color: rgba(200,216,240,0.7);
          line-height: 1.6;
          text-shadow: 0 1px 8px rgba(0,0,0,0.9);
        }

        .poster__age {
          font-family: 'Golos Text', sans-serif;
          font-size: 13pt;
          font-weight: 700;
          color: rgba(200,216,240,0.5);
          border: 1.5px solid rgba(200,216,240,0.3);
          border-radius: 4px;
          padding: 2mm 4mm;
          flex-shrink: 0;
          align-self: flex-end;
        }

        /* Кнопка печати */
        .print-btn {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 200;
          background: #e8c97a;
          color: #070b1a;
          border: none;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 700;
          border-radius: 10px;
          cursor: pointer;
          font-family: 'Golos Text', sans-serif;
          box-shadow: 0 4px 32px rgba(232,201,122,0.4);
          letter-spacing: 0.03em;
        }
        .print-btn:hover { background: #f0d68a; }

        @media print {
          @page { size: A3 portrait; margin: 0; }
          html, body { background: #000; }
          .poster-page { padding: 0; background: #000; }
          .print-btn { display: none !important; }
          .poster { width: 297mm; height: 420mm; }
        }
      `}</style>

      <button className="print-btn" onClick={() => window.print()}>
        Сохранить PDF / Печать
      </button>

      <div className="poster-page">
        <div className="poster">
          <div className="poster__bg" />
          <div className="poster__overlay-top" />

          <div className="poster__content">

            {/* ВЕРХ */}
            <div className="poster__top">
              <div>
                <p className="poster__label">Живой концерт</p>
                <p className="poster__label" style={{ color: "#c8d8f0", marginTop: "1mm" }}>Нижний Новгород</p>
                <p className="poster__label" style={{ color: "rgba(200,216,240,0.45)", fontWeight: 400, marginTop: "1mm" }}>Планетарий 1</p>
              </div>

              <div className="poster__date-badge">
                <div className="poster__date-day">19</div>
                <div className="poster__date-rest">апреля 2025</div>
                <div className="poster__date-time">начало в 19:00</div>
              </div>
            </div>

            {/* СЕРЕДИНА */}
            <div className="poster__middle">
              <h1 className="poster__title">Мияд&shy;заки</h1>
              <p className="poster__subtitle">Музыка под звёздным небом</p>
              <p className="poster__performers">
                Николай Максимов · виолончель &nbsp;·&nbsp; Михаил Зайденберг · фортепиано
              </p>
            </div>

            {/* НИЗ */}
            <div className="poster__bottom">
              <div className="poster__venue">
                <div className="poster__venue-name">Планетарий 1</div>
                <div className="poster__venue-addr">просп. Гагарина, 35Н · Парк Швейцария</div>
                <div className="poster__venue-addr" style={{ marginTop: "1mm" }}>~75 минут · без антракта</div>
              </div>

              <div className="poster__program">
                <div className="poster__program-label">Программа</div>
                <div className="poster__program-films">
                  Унесённые призраками · Мой сосед Тоторо<br />
                  Принцесса Мononoke · Ходячий замок<br />
                  Навсикая · Замок Калиостро
                </div>
              </div>

              <div className="poster__age">12+</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}