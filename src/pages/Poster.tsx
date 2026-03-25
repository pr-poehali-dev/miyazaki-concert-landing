const heroImage =
  "https://cdn.poehali.dev/projects/bc5b0359-d47d-4d80-b141-57f2c7c367aa/files/ce1bc687-6056-4997-9310-c32fe42d72ec.jpg";

export default function Poster() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,400&family=Golos+Text:wght@400;600;700&display=swap');

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

        .poster__bg {
          position: absolute;
          inset: 0;
          background-image: url(${heroImage});
          background-size: cover;
          background-position: center center;
        }

        .poster__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(4,8,20,0.55) 0%,
            rgba(4,8,20,0.15) 35%,
            rgba(4,8,20,0.15) 55%,
            rgba(4,8,20,0.88) 78%,
            rgba(4,8,20,0.97) 100%
          );
        }

        .poster__content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 30mm 16mm 14mm;
        }

        /* ── ВЕРХ: дата + место ── */
        .poster__top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .poster__tag {
          font-family: 'Golos Text', sans-serif;
          font-size: 10pt;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #4a9e9e;
          line-height: 1.8;
        }

        .poster__date-block {
          text-align: right;
        }

        .poster__date-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 100pt;
          font-weight: 700;
          color: #e8c97a;
          line-height: 0.85;
          text-shadow: 0 2px 30px rgba(0,0,0,0.9);
        }

        .poster__date-month {
          font-family: 'Golos Text', sans-serif;
          font-size: 18pt;
          font-weight: 600;
          color: #c8d8f0;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-shadow: 0 2px 12px rgba(0,0,0,0.9);
          margin-top: 2mm;
        }

        .poster__date-time {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36pt;
          font-weight: 700;
          color: #e8c97a;
          letter-spacing: 0.05em;
          margin-top: 2mm;
          text-shadow: 0 2px 20px rgba(0,0,0,0.9);
        }

        /* ── НИЗ: название + исполнители + адрес ── */
        .poster__bottom {
          display: flex;
          flex-direction: column;
          gap: 6mm;
        }

        .poster__title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 130pt;
          font-weight: 700;
          line-height: 0.85;
          color: #ffffff;
          letter-spacing: -0.02em;
          text-shadow:
            0 4px 60px rgba(0,0,0,1),
            0 0 120px rgba(0,0,0,0.8);
        }

        .poster__subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22pt;
          font-style: italic;
          color: #e8c97a;
          letter-spacing: 0.04em;
          text-shadow: 0 2px 16px rgba(0,0,0,0.9);
        }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, rgba(232,201,122,0.6), rgba(232,201,122,0.1));
        }

        .poster__performers {
          font-family: 'Golos Text', sans-serif;
          font-size: 14pt;
          font-weight: 600;
          color: #c8d8f0;
          letter-spacing: 0.08em;
          text-shadow: 0 2px 12px rgba(0,0,0,0.9);
        }

        .poster__performers span {
          color: rgba(200,216,240,0.45);
          font-weight: 400;
          font-size: 11pt;
          letter-spacing: 0.05em;
        }

        .poster__venue-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .poster__venue-name {
          font-family: 'Golos Text', sans-serif;
          font-size: 13pt;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          text-shadow: 0 2px 12px rgba(0,0,0,0.9);
        }

        .poster__venue-addr {
          font-family: 'Golos Text', sans-serif;
          font-size: 9pt;
          color: rgba(200,216,240,0.5);
          letter-spacing: 0.05em;
          margin-top: 1.5mm;
          text-shadow: 0 1px 8px rgba(0,0,0,0.9);
        }

        .poster__age {
          font-family: 'Golos Text', sans-serif;
          font-size: 14pt;
          font-weight: 700;
          color: rgba(200,216,240,0.45);
          border: 1.5px solid rgba(200,216,240,0.25);
          border-radius: 4px;
          padding: 2mm 5mm;
          flex-shrink: 0;
        }

        /* Кнопка */
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
        }
        .print-btn:hover { background: #f0d68a; }

        @media print {
          @page { size: A3 portrait; margin: 0; }
          html, body { background: #000; }
          .poster-page { padding: 0; background: #000; min-height: unset; }
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
          <div className="poster__overlay" />

          <div className="poster__content">

            {/* ВЕРХ — название + дата */}
            <div className="poster__top">
              <h1 className="poster__title">Мияд&shy;заки</h1>
              <div className="poster__date-block">
                <div className="poster__date-num">19</div>
                <div className="poster__date-month">апреля 2025</div>
                <div className="poster__date-time">19:00</div>
              </div>
            </div>

            {/* НИЗ */}
            <div className="poster__bottom">
              <p className="poster__subtitle">Музыка под звёздным небом</p>

              <div className="divider" />

              <p className="poster__performers">
                Николай Максимов <span>· виолончель ·</span> Михаил Зайденберг <span>· фортепиано</span>
              </p>

              <div className="poster__venue-row">
                <div>
                  <div className="poster__venue-name">Планетарий 1</div>
                  <div className="poster__venue-addr">просп. Гагарина, 35Н · Парк Швейцария</div>
                </div>
                <div className="poster__age">12+</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}