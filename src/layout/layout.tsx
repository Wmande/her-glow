import { useLocation, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MobileNav from "../components/mobileNav";

export default function Layout() {
  const location = useLocation();
  const pathname = location.pathname;

  const [displayChildren, setDisplayChildren] = useState<React.ReactNode>(null);
  const [transitionStage, setTransitionStage] = useState<
    "idle" | "exit" | "enter"
  >("idle");

  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      setTransitionStage("exit");

      const exitTimer = setTimeout(() => {
        setDisplayChildren(<Outlet />);
        setTransitionStage("enter");
        prevPathname.current = pathname;

        const enterTimer = setTimeout(() => {
          setTransitionStage("idle");
        }, 900);

        return () => clearTimeout(enterTimer);
      }, 600);

      return () => clearTimeout(exitTimer);
    } else {
      setDisplayChildren(<Outlet />);
    }
  }, [pathname]);

  return (
    <>
      <style>{`
        @keyframes flipOut {
          from { transform: perspective(2000px) rotateY(0deg); opacity: 1; }
          to   { transform: perspective(2000px) rotateY(90deg); opacity: 0; }
        }

        @keyframes flipIn {
          from { transform: perspective(2000px) rotateY(-90deg); opacity: 0; }
          to   { transform: perspective(2000px) rotateY(0deg); opacity: 1; }
        }

        .book-page {
          transform-origin: left center;
          backface-visibility: hidden;
          min-height: 100vh;
          position: relative;
        }

        .book-page::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 60px;
          height: 100vh;
          background: linear-gradient(to right, rgba(0,0,0,0.18), transparent);
          pointer-events: none;
          z-index: 100;
        }

        .book-page--exit {
          animation: flipOut 0.55s cubic-bezier(0.4, 0, 0.6, 1) forwards;
        }

        .book-page--enter {
          animation: flipIn 0.75s cubic-bezier(0.2, 0, 0.2, 1) forwards;
        }
      `}</style>

      <div
        className={[
          "book-page",
          transitionStage === "exit" ? "book-page--exit" : "",
          transitionStage === "enter" ? "book-page--enter" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {displayChildren}
      </div>

      <MobileNav />
    </>
  );
}