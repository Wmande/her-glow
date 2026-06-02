import { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  const tabs = [
    {
      href: "/",
      label: "Home",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 10v10h14V10" />
        </svg>
      ),
    },
    {
      href: "/hair",
      label: "Hair",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 3c0 3-2 5-2 8s2 5 2 8" />
          <path d="M12 3c0 3-2 5-2 8s2 5 2 8" />
          <path d="M15 3c0 3-2 5-2 8s2 5 2 8" />
          <path d="M5 19h14" />
        </svg>
      ),
    },
    {
      href: "/nails",
      label: "Nails",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="7" y="2" width="10" height="13" rx="3" />
          <path d="M7 11c0 4-2 7-2 9h14c0-2-2-5-2-9" />
        </svg>
      ),
    },
    {
      href: "/spa",
      label: "Spa",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C6 6 4 11 4 14a8 8 0 0 0 16 0c0-3-2-8-8-12z" />
          <path d="M12 14c0-2 1-4 3-5" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap');

        .mobile-nav {
          position: fixed;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 999px;
          padding: 8px 10px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          z-index: 9999;
        }

        .nav-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          width: 80px;
          height: 56px;
          border-radius: 999px;
          text-decoration: none;
          color: #9ca3af;
          transition: all 0.25s ease;
        }

        .nav-tab:hover {
          color: #111;
          background: rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }

        .nav-tab.active {
          color: #fff;
          background: #111;
          transform: translateY(-4px);
        }

        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-label {
          font-family: 'Cinzel', serif;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-weight: 600;
        }

        .nav-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(0,0,0,0.12);
        }
      `}</style>

      <nav className="mobile-nav" aria-label="Main navigation">
        {tabs.map((tab, i) => (
          <Fragment key={tab.href}>
            <NavLink
              to={tab.href}
              end={tab.href === "/"}
              className={({ isActive }) =>
                `nav-tab${isActive ? " active" : ""}`
              }
            >
              <span className="nav-icon">{tab.icon}</span>
              <span className="nav-label">{tab.label}</span>
            </NavLink>

            {i < tabs.length - 1 && <span className="nav-dot" />}
          </Fragment>
        ))}
      </nav>
    </>
  );
}
