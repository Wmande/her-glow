import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Nails() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@400;600&display=swap');

        :root {
          --blush: #f9eff0;
          --rose: #c87c8a;
          --deep-rose: #7d3f4f;
          --dusty-pink: #e8c4cb;
          --mauve: #b07080;
          --charcoal: #2c1a20;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: var(--blush);
          font-family: 'Cormorant Garamond', serif;
          overflow-x: hidden;
        }

        .page-wrapper {
          perspective: 2000px;
          min-height: 100vh;
        }

        .page-content {
          transform-origin: left center;
          transform: rotateY(-90deg);
          opacity: 0;
          transition: transform 0.85s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.4s ease;
          min-height: 100vh;
          backface-visibility: hidden;
          background: var(--blush);
        }

        .page-content.flipped-in {
          transform: rotateY(0deg);
          opacity: 1;
        }

        .page-content::before {
          content: '';
          position: fixed;
          top: 0; left: 0;
          width: 60px;
          height: 100vh;
          background: linear-gradient(to right, rgba(44,26,32,0.2), transparent);
          pointer-events: none;
          z-index: 10;
        }

        .page {
          display: grid;
          grid-template-columns: 380px 1fr;
          min-height: 100vh;
        }

        .left-panel {
          background: var(--charcoal);
          display: flex;
          flex-direction: column;
          padding: 80px 50px;
          position: relative;
          overflow: hidden;
        }

        .eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--rose);
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .page-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(72px, 9vw, 108px);
          font-weight: 300;
          color: var(--blush);
          line-height: 0.9;
          margin-bottom: 36px;
          letter-spacing: -2px;
        }

        .page-title em {
          font-style: italic;
          color: var(--rose);
        }

        .divider {
          width: 50px;
          height: 1px;
          background: var(--rose);
          margin-bottom: 28px;
        }

        .tagline {
          font-size: 14px;
          color: rgba(249,239,240,0.55);
          line-height: 1.9;
          font-style: italic;
          max-width: 280px;
        }

        .swatches {
          display: flex;
          gap: 10px;
          margin-top: auto;
          padding-top: 60px;
        }

        .swatch {
          width: 28px;
          height: 28px;
          border-radius: 50%;
        }

        .right-panel {
          background: var(--blush);
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .page-actions {
          display: flex;
          justify-content: flex-end;
          gap: 40px;
        }

        .page-action {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--mauve);
          background: transparent;
          border: 0;
          cursor: pointer;
          padding: 0;
        }

        .page-action.primary {
          color: var(--charcoal);
          font-weight: 600;
        }

        .nail-menu {
          display: grid;
        }

        .nail-item {
          display: grid;
          grid-template-columns: 40px 1fr auto;
          align-items: center;
          gap: 24px;
          padding: 22px 0;
          border-bottom: 1px solid var(--dusty-pink);
          cursor: pointer;
        }

        .bottom-cta {
          display: flex;
          justify-content: space-between;
        }

        .book-btn {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid var(--charcoal);
          color: var(--charcoal);
          padding: 16px 40px;
          cursor: pointer;
          text-decoration: none;
        }

        .page-number {
          font-size: 11px;
          color: rgba(176,112,128,0.4);
        }
      `}</style>

      <div className="page-wrapper">
        <div className={`page-content ${mounted ? "flipped-in" : ""}`}>
          <div className="page">

            {/* LEFT */}
            <div className="left-panel">
              <p className="eyebrow">The Studio · Nails</p>
              <h1 className="page-title">
                <em>Nail</em>
                <br />
                Art
              </h1>
              <div className="divider" />
              <p className="tagline">
                Your hands deserve a masterpiece. From classic elegance to avant-garde expression.
              </p>

              <div className="swatches">
                {["#c87c8a","#e8b4bc","#7d3f4f","#f5cdd4","#3d2030","#e8d5b7"].map((c) => (
                  <div className="swatch" key={c} style={{ background: c }} />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="right-panel">
              <nav className="page-actions" aria-label="Nails actions">
                <Link to="/nails/book-nails" className="page-action primary">Book Nails</Link>
                <Link to="/nails/polish-shop" className="page-action">Polish Shop</Link>
              </nav>

              <div className="nail-menu">
                {[
                  { num: "01", name: "Classic Manicure", desc: "Shape, buff & polish", price: "KES 1,200" },
                  { num: "02", name: "Gel Manicure", desc: "Long-lasting gel colour, 3 weeks", price: "KES 2,500" },
                  { num: "03", name: "Nail Extensions", desc: "Acrylic or gel overlay, full set", price: "KES 3,800" },
                  { num: "04", name: "Nail Art", desc: "Custom hand-painted designs", price: "From KES 800" },
                  { num: "05", name: "Pedicure Luxe", desc: "Soak, scrub, massage & colour", price: "KES 2,200" },
                  { num: "06", name: "Paraffin Wax", desc: "Hydrating wax treatment add-on", price: "KES 900" },
                ].map((item) => (
                  <div className="nail-item" key={item.num}>
                    <span>{item.num}</span>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="bottom-cta">
                <Link to="/nails/book-nails" className="book-btn">Book Appointment</Link>
                <span className="page-number">02 / 03</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
