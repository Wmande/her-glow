import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Spa() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@400;600&display=swap');

        :root {
          --stone: #f0ede8;
          --sage: #8a9e8c;
          --deep-sage: #3f5441;
          --moss: #2d3d2e;
          --warm-grey: #b0a898;
          --mist: #dfe8de;
          --gold-green: #9ea96e;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: var(--stone);
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
          background: var(--stone);
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
          background: linear-gradient(to right, rgba(45,61,46,0.2), transparent);
          pointer-events: none;
          z-index: 10;
        }

        .page {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        .left-panel {
          background: var(--moss);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 80px 60px;
          position: relative;
          overflow: hidden;
        }

        .eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--sage);
          text-transform: uppercase;
        }

        .page-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(72px, 10vw, 112px);
          font-weight: 300;
          color: var(--stone);
          line-height: 0.9;
          margin-bottom: 32px;
          letter-spacing: -2px;
        }

        .page-title em {
          font-style: italic;
          color: var(--sage);
        }

        .divider {
          width: 50px;
          height: 1px;
          background: var(--sage);
          margin-bottom: 28px;
        }

        .tagline {
          font-size: 14px;
          color: rgba(240,237,232,0.5);
          line-height: 1.9;
          font-style: italic;
          max-width: 300px;
        }

        .rituals {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ritual-tag {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--sage);
          opacity: 0.7;
        }

        .right-panel {
          background: var(--stone);
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
          color: var(--warm-grey);
          background: transparent;
          border: 0;
          cursor: pointer;
          padding: 0;
        }

        .page-action.primary {
          color: var(--moss);
          font-weight: 600;
        }

        .packages {
          border-top: 1px solid var(--mist);
        }

        .package {
          display: grid;
          grid-template-columns: 1fr auto;
          padding: 28px 0;
          border-bottom: 1px solid var(--mist);
          gap: 24px;
        }

        .package-name {
          font-family: 'Cinzel', serif;
          font-size: 13px;
          text-transform: uppercase;
          color: var(--moss);
        }

        .package-price {
          font-size: 18px;
          color: var(--deep-sage);
          text-align: right;
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
          background: var(--deep-sage);
          color: var(--stone);
          border: none;
          padding: 16px 40px;
          cursor: pointer;
          text-decoration: none;
        }

        .page-number {
          font-size: 11px;
          color: rgba(138,158,140,0.4);
        }
      `}</style>

      <div className="page-wrapper">
        <div className={`page-content ${mounted ? "flipped-in" : ""}`}>
          <div className="page">

            {/* LEFT */}
            <div className="left-panel">
              <p className="eyebrow">The Studio · Spa</p>

              <div>
                <h1 className="page-title">
                  <em>Spa</em> &amp;<br />Wellness
                </h1>
                <div className="divider" />
                <p className="tagline">
                  Surrender to stillness. Ancient rituals and modern healing in perfect harmony.
                </p>
              </div>

              <div className="rituals">
                <span className="ritual-tag">30 · 60 · 90 min sessions</span>
                <span className="ritual-tag">Couples & solo experiences</span>
                <span className="ritual-tag">Members & walk-ins welcome</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="right-panel">
              <nav className="page-actions" aria-label="Spa actions">
                <Link to="/spa/book-ritual" className="page-action primary">Book Ritual</Link>
                <Link to="/spa/packages" className="page-action">Packages</Link>
              </nav>

              <div className="packages">
                {[
                  { name: "Swedish Massage", duration: "60 min", desc: "Full-body relaxation with warm oils", price: "KES 4,500" },
                  { name: "Hot Stone Therapy", duration: "90 min", desc: "Volcanic stones ease tension", price: "KES 7,200" },
                  { name: "Facial Ritual", duration: "60 min", desc: "Cleanse, exfoliate & massage", price: "KES 5,000" },
                  { name: "Body Scrub & Wrap", duration: "75 min", desc: "Detoxifying botanical wrap", price: "KES 6,500" },
                  { name: "Couples Retreat", duration: "120 min", desc: "Side-by-side massages", price: "KES 18,000" },
                ].map((pkg) => (
                  <div className="package" key={pkg.name}>
                    <div>
                      <span className="package-name">{pkg.name}</span>
                    </div>
                    <div className="package-price">{pkg.price}</div>
                  </div>
                ))}
              </div>

              <div className="bottom-cta">
                <Link to="/spa/book-ritual" className="book-btn">Book Appointment</Link>
                <span className="page-number">03 / 03</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
