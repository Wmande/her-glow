"use client";

import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import HerBanner from "../assets/herbanner.png";

export default function Home() {
  const location = useLocation();
  const pathname = location.pathname;

  const [displayChildren, setDisplayChildren] = useState<ReactNode>(null);
  const [transitionStage, setTransitionStage] = useState<"idle" | "exit" | "enter">("idle");

  const prevPathname = useRef(pathname);

  useEffect(() => {
    setDisplayChildren(<HomeContent />);

    if (pathname !== prevPathname.current) {
      setTransitionStage("exit");

      const exitTimer = setTimeout(() => {
        setDisplayChildren(<HomeContent />);
        setTransitionStage("enter");
        prevPathname.current = pathname;

        const enterTimer = setTimeout(() => {
          setTransitionStage("idle");
        }, 900);

        return () => clearTimeout(enterTimer);
      }, 600);

      return () => clearTimeout(exitTimer);
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

        .book-page--exit { animation: flipOut 0.55s cubic-bezier(0.4, 0, 0.6, 1) forwards; }
        .book-page--enter { animation: flipIn 0.75s cubic-bezier(0.2, 0, 0.2, 1) forwards; }

        body { margin: 0; padding: 0; overflow: hidden; }
      `}</style>

      <div className={`book-page ${transitionStage === "exit" ? "book-page--exit" : ""} ${transitionStage === "enter" ? "book-page--enter" : ""}`}>
        {displayChildren}
      </div>

    </>
  );
}

/* ---------------- HOME PAGE CONTENT ---------------- */

function HomeContent() {
  return (
    <div style={{ background: "#f9f0eb", minHeight: "100svh" }}>
      {/* =============== CLEAN HERO BANNER =============== */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100svh",
          minHeight: "650px",
          overflow: "hidden",
        }}
      >
        {/* The Hero Image */}
        <img
          src={HerBanner}
          alt="Her Glow Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.85) 100%)",
          }}
        />

        {/* Text Content - Centered like your screenshot */}
        <div
          style={{
            position: "absolute",
            bottom: "18%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            color: "#fff",
            zIndex: 2,
            width: "90%",
            maxWidth: "520px",
          }}
        >
          <p 
            style={{ 
              fontSize: "14px", 
              letterSpacing: "3.5px", 
              textTransform: "uppercase", 
              marginBottom: "6px", 
              opacity: 0.95 
            }}
          >
            WELCOME
          </p>
          
          <h1 
            style={{ 
              fontSize: "clamp(48px, 9vw, 78px)", 
              fontWeight: "700", 
              lineHeight: 1.05,
              margin: "0 0 10px 0",
              textShadow: "0 4px 20px rgba(0,0,0,0.5)"
            }}
          >
            
          </h1>
          
          <p style={{ fontSize: "17px", marginBottom: "32px", opacity: 0.95 }}>
            Your beauty, your story.
          </p>

          {/* <button
            style={{
              background: "#fff",
              color: "#4C1D95",
              border: "none",
              borderRadius: "50px",
              padding: "14px 38px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
              marginTop: "12px",
            }}
          >
            Explore Now
          </button> */}
        </div>
      </div>

      {/* Rest of Page Content */}
      <div style={{ padding: "60px 16px", background: "#fff" }}>
        <p>Welcome to Her Glow!</p>
        {/* Add more sections here */}
      </div>
    </div>
  );
}
