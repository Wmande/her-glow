import { Link } from "react-router-dom";

type ActionPageProps = {
  accent: string;
  backLabel: string;
  backTo: string;
  background: string;
  dark: string;
  eyebrow: string;
  items: Array<{
    detail: string;
    meta: string;
    title: string;
  }>;
  note: string;
  primaryAction: string;
  secondaryAction: string;
  title: string;
};

function ActionPage({
  accent,
  backLabel,
  backTo,
  background,
  dark,
  eyebrow,
  items,
  note,
  primaryAction,
  secondaryAction,
  title,
}: ActionPageProps) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@400;600&display=swap');

        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: ${background};
          font-family: 'Cormorant Garamond', serif;
          overflow-x: hidden;
        }

        .action-page {
          min-height: 100vh;
          background:
            linear-gradient(90deg, ${dark} 0 36%, transparent 36%),
            ${background};
          color: ${dark};
          display: grid;
          grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.4fr);
          padding-bottom: 116px;
        }

        .action-hero {
          min-height: 100vh;
          padding: 76px 56px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: ${background};
          position: sticky;
          top: 0;
        }

        .action-eyebrow,
        .action-link,
        .action-pill,
        .action-meta,
        .action-button {
          font-family: 'Cinzel', serif;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .action-eyebrow {
          color: ${accent};
          font-size: 10px;
        }

        .action-title {
          font-size: clamp(64px, 8vw, 116px);
          font-weight: 300;
          line-height: 0.88;
          margin: 36px 0 28px;
        }

        .action-title em {
          color: ${accent};
          font-style: italic;
        }

        .action-note {
          color: color-mix(in srgb, ${background} 68%, transparent);
          font-size: 17px;
          line-height: 1.8;
          max-width: 330px;
        }

        .action-link {
          color: ${accent};
          font-size: 10px;
          text-decoration: none;
        }

        .action-main {
          padding: 76px 64px 96px;
          display: flex;
          flex-direction: column;
          gap: 44px;
        }

        .action-top {
          display: flex;
          justify-content: flex-end;
          gap: 34px;
        }

        .action-pill {
          color: ${dark};
          font-size: 10px;
          text-decoration: none;
        }

        .action-pill.muted {
          color: color-mix(in srgb, ${dark} 48%, ${background});
        }

        .action-intro {
          max-width: 680px;
          padding-top: 36px;
        }

        .action-intro h2 {
          font-size: clamp(38px, 5vw, 68px);
          font-weight: 300;
          line-height: 1;
          margin: 0 0 18px;
        }

        .action-intro p {
          color: color-mix(in srgb, ${dark} 70%, ${background});
          font-size: 18px;
          line-height: 1.75;
          margin: 0;
          max-width: 560px;
        }

        .action-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          background: color-mix(in srgb, ${accent} 38%, ${background});
        }

        .action-card {
          min-height: 210px;
          background: ${background};
          padding: 34px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .action-meta {
          color: ${accent};
          font-size: 10px;
        }

        .action-card h3 {
          font-family: 'Cinzel', serif;
          font-size: 15px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 26px 0 14px;
        }

        .action-card p {
          color: color-mix(in srgb, ${dark} 66%, ${background});
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        .action-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .action-button {
          border: 1px solid ${dark};
          color: ${background};
          background: ${dark};
          padding: 16px 30px;
          text-decoration: none;
          font-size: 10px;
        }

        .action-button.secondary {
          background: transparent;
          color: ${dark};
        }

        @media (max-width: 820px) {
          .action-page {
            display: block;
            background: ${background};
          }

          .action-hero {
            min-height: 460px;
            position: relative;
            padding: 52px 28px;
            background: ${dark};
          }

          .action-main {
            padding: 42px 24px 112px;
          }

          .action-top {
            justify-content: flex-start;
            flex-wrap: wrap;
          }

          .action-grid {
            grid-template-columns: 1fr;
          }

          .action-footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

      <main className="action-page">
        <aside className="action-hero">
          <div>
            <p className="action-eyebrow">{eyebrow}</p>
            <h1 className="action-title">
              <em>{title.split(" ")[0]}</em>
              <br />
              {title.split(" ").slice(1).join(" ")}
            </h1>
            <p className="action-note">{note}</p>
          </div>

          <Link className="action-link" to={backTo}>
            Back to {backLabel}
          </Link>
        </aside>

        <section className="action-main">
          <nav className="action-top" aria-label={`${backLabel} action navigation`}>
            <Link className="action-pill" to={backTo}>
              {backLabel}
            </Link>
            <Link className="action-pill muted" to="/">
              Home
            </Link>
          </nav>

          <div className="action-intro">
            <h2>{primaryAction}</h2>
            <p>{secondaryAction}</p>
          </div>

          <div className="action-grid">
            {items.map((item) => (
              <article className="action-card" key={item.title}>
                <span className="action-meta">{item.meta}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="action-footer">
            <Link className="action-button" to={backTo}>
              Choose a Service
            </Link>
            <Link className="action-button secondary" to="/">
              Return Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export function HairBookSession() {
  return (
    <ActionPage
      accent="#c9a96e"
      backLabel="Hair"
      backTo="/hair"
      background="#f5efe6"
      dark="#3d2b1f"
      eyebrow="Hair Studio - Booking"
      title="Book Session"
      note="A calm planning space for cuts, colour, treatments, and event styling."
      primaryAction="Reserve time with a stylist"
      secondaryAction="Select the appointment rhythm that fits your beauty day, from quick maintenance to full transformation work."
      items={[
        { meta: "45-60 min", title: "Cut and Finish", detail: "Shape consultation, precision cut, finishing, and styling guidance for daily wear." },
        { meta: "90-150 min", title: "Colour Session", detail: "Balayage, gloss, highlights, or full colour with strand-conscious preparation." },
        { meta: "60-90 min", title: "Repair Treatment", detail: "Hydration, bond support, and scalp care tailored to your hair texture." },
        { meta: "By consultation", title: "Bridal Styling", detail: "Trial planning, event styling, and a polished schedule for the full beauty morning." },
      ]}
    />
  );
}

export function HairProducts() {
  return (
    <ActionPage
      accent="#c9a96e"
      backLabel="Hair"
      backTo="/hair"
      background="#f5efe6"
      dark="#3d2b1f"
      eyebrow="Hair Studio - Products"
      title="Hair Products"
      note="Finishing essentials and treatment staples selected for salon-quality upkeep."
      primaryAction="Care that keeps the finish alive"
      secondaryAction="A tight product edit for gloss, moisture, hold, and scalp comfort between appointments."
      items={[
        { meta: "KES 2,800", title: "Silk Gloss Serum", detail: "A lightweight shine veil for smooth ends and frizz control." },
        { meta: "KES 3,600", title: "Bond Mask", detail: "Weekly repair mask for colour-treated and heat-styled hair." },
        { meta: "KES 2,200", title: "Scalp Mist", detail: "Cooling botanical mist for protective styles and dry scalps." },
        { meta: "KES 1,900", title: "Soft Hold Cream", detail: "Touchable hold for waves, curls, and polished blowouts." },
      ]}
    />
  );
}

export function NailsBookSession() {
  return (
    <ActionPage
      accent="#c87c8a"
      backLabel="Nails"
      backTo="/nails"
      background="#f9eff0"
      dark="#2c1a20"
      eyebrow="Nail Art - Booking"
      title="Book Nails"
      note="Plan a manicure, extensions, or detailed nail art with enough time for a beautiful finish."
      primaryAction="Choose your nail appointment"
      secondaryAction="From quiet classics to expressive sets, each booking is shaped around durability, detail, and your personal palette."
      items={[
        { meta: "45 min", title: "Classic Manicure", detail: "Shape, cuticle care, buffing, and polish for a refined everyday look." },
        { meta: "60 min", title: "Gel Manicure", detail: "Long-wear colour with a clean high-gloss finish." },
        { meta: "120 min", title: "Extensions", detail: "Sculpted length, structure, and styling for a custom set." },
        { meta: "Add-on", title: "Nail Art", detail: "Chrome, French details, hand-painted motifs, gems, and seasonal designs." },
      ]}
    />
  );
}

export function NailsPolishShop() {
  return (
    <ActionPage
      accent="#c87c8a"
      backLabel="Nails"
      backTo="/nails"
      background="#f9eff0"
      dark="#2c1a20"
      eyebrow="Nail Art - Polish Shop"
      title="Polish Shop"
      note="A curated shelf of wearable tones, gloss finishes, and treatment care for hands and feet."
      primaryAction="Colour stories for every mood"
      secondaryAction="Explore salon-favourite shades and small care rituals that make your manicure feel intentional longer."
      items={[
        { meta: "KES 900", title: "Rose Veil", detail: "A sheer blush polish for clean, soft, everyday nails." },
        { meta: "KES 1,100", title: "Wine Lacquer", detail: "Deep berry colour with a polished evening finish." },
        { meta: "KES 1,300", title: "Chrome Topper", detail: "Pearl-shift shine layered over your favourite base shade." },
        { meta: "KES 1,500", title: "Cuticle Oil", detail: "Daily botanical oil for flexible, healthy-looking nail beds." },
      ]}
    />
  );
}

export function SpaBookRitual() {
  return (
    <ActionPage
      accent="#8a9e8c"
      backLabel="Spa"
      backTo="/spa"
      background="#f0ede8"
      dark="#2d3d2e"
      eyebrow="Spa Wellness - Booking"
      title="Book Ritual"
      note="A restorative appointment path for massage, facial care, body work, and quiet recovery."
      primaryAction="Reserve your wellness ritual"
      secondaryAction="Choose the level of reset you need, whether it is thirty minutes of stillness or a full afternoon retreat."
      items={[
        { meta: "30 min", title: "Express Calm", detail: "Focused neck, shoulder, or foot work for a quick reset." },
        { meta: "60 min", title: "Full Body Massage", detail: "A flowing therapeutic massage with warm oil and measured pressure." },
        { meta: "75 min", title: "Facial Ritual", detail: "Cleanse, exfoliation, massage, mask, and hydration." },
        { meta: "120 min", title: "Couples Retreat", detail: "Side-by-side bodywork with a quiet lounge finish." },
      ]}
    />
  );
}

export function SpaPackages() {
  return (
    <ActionPage
      accent="#8a9e8c"
      backLabel="Spa"
      backTo="/spa"
      background="#f0ede8"
      dark="#2d3d2e"
      eyebrow="Spa Wellness - Packages"
      title="Spa Packages"
      note="Layered treatments built for birthdays, reset days, couples, and monthly care."
      primaryAction="Complete wellness packages"
      secondaryAction="Each package combines time, touch, scent, and skin care into one gracefully paced experience."
      items={[
        { meta: "KES 8,500", title: "Glow Reset", detail: "Massage, facial cleanse, and a hydration finish for luminous skin." },
        { meta: "KES 12,000", title: "Deep Rest", detail: "Hot stone therapy, scalp massage, and recovery tea service." },
        { meta: "KES 18,000", title: "Couples Stillness", detail: "Two massages, aromatherapy, and a shared lounge ritual." },
        { meta: "KES 22,000", title: "Full Day Muse", detail: "Body scrub, wrap, facial, massage, and private decompression time." },
      ]}
    />
  );
}
