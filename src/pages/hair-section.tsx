import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Hair() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@400;600&display=swap');

        :root {
          --cream: #f5efe6;
          --warm-brown: #8B6347;
          --deep-brown: #3d2b1f;
          --gold: #c9a96e;
          --soft-gold: #e8d5b7;
          --dark-accent: #2a1a0e;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: var(--cream);
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
          background: var(--cream);
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
          background: linear-gradient(to right, rgba(61,43,31,0.25), transparent);
          pointer-events: none;
          z-index: 10;
        }

        .page {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        .left-panel {
          background: var(--deep-brown);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px;
          position: relative;
          overflow: hidden;
        }

        .left-panel::after {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,169,110,0.12), transparent 70%);
        }

        .eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .page-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(72px, 10vw, 110px);
          font-weight: 300;
          color: var(--cream);
          line-height: 0.9;
          margin-bottom: 32px;
          letter-spacing: -2px;
        }

        .page-title em {
          font-style: italic;
          color: var(--gold);
        }

        .divider {
          width: 60px;
          height: 1px;
          background: var(--gold);
          margin-bottom: 28px;
        }

        .tagline {
          font-size: 15px;
          color: rgba(245,239,230,0.6);
          line-height: 1.8;
          font-weight: 300;
          max-width: 320px;
          font-style: italic;
        }

        .right-panel {
          background: var(--cream);
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .page-actions {
          display: flex;
          justify-content: flex-end;
          gap: 40px;
          align-items: center;
        }

        .page-action {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--warm-brown);
          background: transparent;
          border: 0;
          cursor: pointer;
          padding: 0;
        }

        .page-action.primary {
          color: var(--deep-brown);
          font-weight: 600;
        }

        .services {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: var(--soft-gold);
        }

        .service-card {
          background: var(--cream);
          padding: 36px 28px;
          cursor: pointer;
        }

        .bottom-cta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .book-btn {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          background: var(--deep-brown);
          color: var(--cream);
          border: none;
          padding: 16px 40px;
          cursor: pointer;
          text-decoration: none;
        }

        .page-curl {
          position: fixed;
          bottom: 0; right: 0;
          width: 0; height: 0;
          border-style: solid;
          border-width: 0 0 60px 60px;
          border-color: transparent transparent var(--soft-gold) transparent;
          opacity: 0.6;
          pointer-events: none;
        }
      `}</style>

      <div className="page-wrapper">
        <div className={`page-content ${mounted ? "flipped-in" : ""}`}>
          <div className="page">
            {/* LEFT */}
            <div className="left-panel">
              <p className="eyebrow">The Studio · Est. 2019</p>
              <h1 className="page-title">
                <em>Hair</em>
                <br />
                Studio
              </h1>
              <div className="divider" />
              <p className="tagline">
                Every strand tells a story. We craft yours with precision,
                passion, and artistry.
              </p>
            </div>

            {/* RIGHT */}
            <div className="right-panel">
              <nav className="page-actions" aria-label="Hair actions">
                <Link to="/hair/book-session" className="page-action primary">Book Session</Link>
                <Link to="/hair/products" className="page-action">Products</Link>
              </nav>

              <div className="services">
                {[
                  {
                    icon: "✂️",
                    name: "Cut & Style",
                    desc: "Precision cuts tailored to your face shape",
                    price: "From KES 2,500",
                  },
                  {
                    icon: "🎨",
                    name: "Colour",
                    desc: "Balayage, highlights & full colour services",
                    price: "From KES 5,000",
                  },
                  {
                    icon: "💆",
                    name: "Treatment",
                    desc: "Deep conditioning & keratin therapy",
                    price: "From KES 3,500",
                  },
                  {
                    icon: "👑",
                    name: "Bridal",
                    desc: "Complete bridal hair & trial session",
                    price: "From KES 12,000",
                  },
                ].map((s) => (
                  <div className="service-card" key={s.name}>
                    <span>{s.icon}</span>
                    <p>{s.name}</p>
                    <p>{s.desc}</p>
                    <p>{s.price}</p>
                  </div>
                ))}
              </div>

              <div className="bottom-cta">
                <Link to="/hair/book-session" className="book-btn">Book Appointment</Link>
                <span>01 / 03</span>
              </div>
            </div>
          </div>
        </div>

        <div className="page-curl" />
      </div>
    </>
  );
}
