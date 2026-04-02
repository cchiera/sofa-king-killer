"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Hero slide data ────────────────────────────────────────────────────────
// Drop your PNG files into /public/hero/ and list them here.
// Each slide can have its own headline, sub-copy, and colour accent.
const SLIDES = [
  {
    image: "/slide-1.jpg", // ← replace with your PNGs
    alt: "Campaign one hero image",
    eyebrow: "Spring / Summer 2025",
    headline: "Chase the\nHorizon",
    body: "Bold moves. Bolder looks. A collection built for those who never stand still.",
    accent: "#E8C547", // golden yellow
    textDark: false,
  },
  {
    image: "/slide-2.jpg",
    alt: "Campaign two hero image",
    eyebrow: "Limited Edition",
    headline: "Structured\nSilence",
    body: "Restraint as rebellion. Architecture you can wear, silence you can hear.",
    accent: "#C4E8A0", // sage green
    textDark: false,
  },
  {
    image: "/slide-3.jpg",
    alt: "Campaign three hero image",
    eyebrow: "New Arrivals",
    headline: "Night\nGeometry",
    body: "After dark, the city rearranges itself. So do you.",
    accent: "#FF6B6B", // coral red
    textDark: false,
  },
  {
    image: "/slide-4.jpg",
    alt: "Campaign four hero image",
    eyebrow: "Essentials",
    headline: "Terra\nMemory",
    body: "Earth tones. Honest textures. Garments that remember where they've been.",
    accent: "#A8C8FF", // sky blue
    textDark: false,
  },
];

const INTERVAL_MS = 5500;
const TRANSITION_MS = 900;

// ─── Utility ─────────────────────────────────────────────────────────────────
function randomOrder(length: number): number[] {
  const arr = Array.from({ length }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function RotatingHero() {
  const [order, setOrder] = useState<number[]>([]);
  const [step, setStep] = useState(0); // index into `order`
  const [transitioning, setTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);

  // Build a shuffled play-order on mount
  useEffect(() => {
    setOrder(randomOrder(SLIDES.length));
  }, []);

  const advance = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setStep((s) => (s + 1) % SLIDES.length);
      setTransitioning(false);
    }, TRANSITION_MS);
  }, []);

  const goTo = (targetStep: number) => {
    if (targetStep === step) return;
    setTransitioning(true);
    setTimeout(() => {
      setStep(targetStep);
      setTransitioning(false);
    }, TRANSITION_MS);
  };

  // Auto-advance timer
  useEffect(() => {
    if (paused || order.length === 0) return;
    const id = setInterval(advance, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, order, advance]);

  if (order.length === 0) return null;

  const currentIndex = order[step];
  const slide = SLIDES[currentIndex];
  const dark = slide.textDark;

  return (
    <>
      {/* ── Fonts (load via <head> in layout.tsx for production) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:wght@300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .rh-root {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 560px;
          overflow: hidden;
          background: #0a0a0a;
          font-family: 'DM Mono', monospace;
        }

        /* ── Background image layer ── */
        .rh-bg {
          position: absolute;
          inset: 0;
          transition: opacity ${TRANSITION_MS}ms cubic-bezier(.4,0,.2,1),
                      transform ${TRANSITION_MS * 2}ms cubic-bezier(.4,0,.2,1);
        }
        .rh-bg.rh-hidden { opacity: 0; transform: scale(1.04); }
        .rh-bg.rh-visible { opacity: 1; transform: scale(1); }

        /* dark/light overlay */
        .rh-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0,0,0,.72) 0%,
            rgba(0,0,0,.18) 60%,
            rgba(0,0,0,.05) 100%
          );
          z-index: 1;
        }
        .rh-overlay.light {
          background: linear-gradient(
            135deg,
            rgba(255,255,255,.70) 0%,
            rgba(255,255,255,.10) 60%,
            rgba(255,255,255,.00) 100%
          );
        }

        /* ── Grain texture ── */
        .rh-grain {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: .045;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          pointer-events: none;
        }

        /* ── Content ── */
        .rh-content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(32px, 6vw, 80px) clamp(24px, 7vw, 100px);
          padding-bottom: clamp(80px, 10vh, 120px);
        }

        .rh-eyebrow {
          font-size: clamp(10px, 1.1vw, 13px);
          letter-spacing: .22em;
          text-transform: uppercase;
          margin-bottom: 20px;
          transition: opacity ${TRANSITION_MS}ms, transform ${TRANSITION_MS}ms;
        }
        .rh-eyebrow.rh-hidden { opacity: 0; transform: translateY(12px); }
        .rh-eyebrow.rh-visible { opacity: 1; transform: translateY(0); }

        .rh-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(48px, 8.5vw, 130px);
          font-weight: 900;
          line-height: 1.0;
          white-space: pre-line;
          margin-bottom: 24px;
          transition: opacity ${TRANSITION_MS}ms ${TRANSITION_MS * 0.1}ms,
                      transform ${TRANSITION_MS}ms ${TRANSITION_MS * 0.1}ms;
        }
        .rh-headline.rh-hidden { opacity: 0; transform: translateY(20px); }
        .rh-headline.rh-visible { opacity: 1; transform: translateY(0); }

        .rh-body {
          max-width: 460px;
          font-size: clamp(13px, 1.3vw, 16px);
          line-height: 1.7;
          font-weight: 300;
          opacity: .82;
          margin-bottom: 36px;
          transition: opacity ${TRANSITION_MS}ms ${TRANSITION_MS * 0.2}ms,
                      transform ${TRANSITION_MS}ms ${TRANSITION_MS * 0.2}ms;
        }
        .rh-body.rh-hidden { opacity: 0; transform: translateY(16px); }

        .rh-cta {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 14px 32px;
          border: 1.5px solid currentColor;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: .18em;
          text-transform: uppercase;
          cursor: pointer;
          background: transparent;
          text-decoration: none;
          transition: background 280ms, color 280ms, opacity ${TRANSITION_MS}ms ${TRANSITION_MS * 0.25}ms,
                      transform ${TRANSITION_MS}ms ${TRANSITION_MS * 0.25}ms;
        }
        .rh-cta:hover { background: currentColor; }
        .rh-cta:hover .rh-cta-label { mix-blend-mode: difference; }
        .rh-cta.rh-hidden { opacity: 0; transform: translateY(12px); }
        .rh-cta.rh-visible { opacity: 1; transform: translateY(0); }

        .rh-cta-arrow {
          width: 20px;
          height: 1px;
          background: currentColor;
          position: relative;
          transition: width 280ms;
        }
        .rh-cta:hover .rh-cta-arrow { width: 32px; }
        .rh-cta-arrow::after {
          content: '';
          position: absolute;
          right: 0; top: -3px;
          border: 4px solid transparent;
          border-left-color: currentColor;
        }

        /* ── Accent bar ── */
        .rh-accent-bar {
          position: absolute;
          left: 0; top: 0;
          width: 4px;
          height: 100%;
          z-index: 11;
          transition: background-color ${TRANSITION_MS}ms;
        }

        /* ── Slide counter ── */
        .rh-counter {
          position: absolute;
          top: clamp(24px, 4vw, 48px);
          right: clamp(24px, 5vw, 64px);
          z-index: 11;
          font-size: 11px;
          letter-spacing: .14em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* ── Dot nav ── */
        .rh-dots {
          position: absolute;
          bottom: clamp(32px, 4vh, 48px);
          right: clamp(24px, 5vw, 64px);
          z-index: 11;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .rh-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,.5);
          cursor: pointer;
          transition: background 280ms, border-color 280ms, transform 280ms;
          background: transparent;
          padding: 0;
        }
        .rh-dot.active {
          background: white;
          border-color: white;
          transform: scale(1.4);
        }
        .rh-dot.dark-mode { border-color: rgba(0,0,0,.5); }
        .rh-dot.dark-mode.active { background: #111; border-color: #111; }

        /* ── Progress bar ── */
        .rh-progress-wrap {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          z-index: 12;
          background: rgba(255,255,255,.12);
        }
        .rh-progress-fill {
          height: 100%;
          transition: background-color ${TRANSITION_MS}ms;
          animation: rh-progress ${INTERVAL_MS}ms linear infinite;
        }
        @keyframes rh-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .rh-progress-fill.paused { animation-play-state: paused; }

        /* ── Pause button ── */
        .rh-pause {
          position: absolute;
          top: clamp(24px, 4vw, 48px);
          left: clamp(20px, 3vw, 40px);
          z-index: 12;
          width: 36px; height: 36px;
          border: 1.5px solid rgba(255,255,255,.35);
          border-radius: 50%;
          background: rgba(0,0,0,.25);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          transition: border-color 200ms, background 200ms;
          padding: 0;
        }
        .rh-pause:hover { border-color: white; background: rgba(0,0,0,.5); }
        .rh-pause-bar {
          width: 3px; height: 12px;
          background: white;
          border-radius: 1px;
        }
        .rh-play-tri {
          width: 0; height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 10px solid white;
          margin-left: 2px;
        }

        /* responsive */
        @media (max-width: 600px) {
          .rh-dots { display: none; }
          .rh-counter { display: none; }
        }
      `}</style>

      <section
        className="rh-root"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label="Hero slideshow"
      >
        {/* Background images — all rendered, only current is visible */}
        {SLIDES.map((s, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={idx}
              className={`rh-bg ${isActive && !transitioning ? "rh-visible" : "rh-hidden"}`}
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          );
        })}

        {/* Overlay */}
        <div className={`rh-overlay${dark ? " light" : ""}`} />

        {/* Film grain */}
        <div className="rh-grain" />

        {/* Accent bar */}
        <div
          className="rh-accent-bar"
          style={{ backgroundColor: slide.accent }}
        />

        {/* Pause / play */}
        <button
          className="rh-pause"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
        >
          {paused ? (
            <span className="rh-play-tri" />
          ) : (
            <>
              <span className="rh-pause-bar" />
              <span className="rh-pause-bar" />
            </>
          )}
        </button>

        {/* Counter */}
        <div
          className="rh-counter"
          style={{ color: dark ? "rgba(0,0,0,.7)" : "rgba(255,255,255,.7)" }}
        >
          <span style={{ color: slide.accent, fontWeight: 700 }}>
            {String(step + 1).padStart(2, "0")}
          </span>
          &mdash;
          <span>{String(SLIDES.length).padStart(2, "0")}</span>
        </div>

        {/* Content */}
        <div className="rh-content" style={{ color: dark ? "#111" : "#fff" }}>
          <p
            className={`rh-eyebrow ${transitioning ? "rh-hidden" : "rh-visible"}`}
          >
            {slide.eyebrow}
          </p>

          <h1
            className={`rh-headline ${transitioning ? "rh-hidden" : "rh-visible"}`}
          >
            {slide.headline}
          </h1>

          <p className={`rh-body ${transitioning ? "rh-hidden" : ""}`}>
            {slide.body}
          </p>
          <Link href="/about" role="menuitem">
            {slide.alt}
          </Link>
        </div>

        {/* Dot navigation */}
        <nav className="rh-dots" aria-label="Slide navigation">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`rh-dot${dark ? " dark-mode" : ""}${
                order[step] === i ? " active" : ""
              }`}
              onClick={() => goTo(order.indexOf(i))}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </nav>

        {/* Progress bar */}
        <div className="rh-progress-wrap">
          <div
            className={`rh-progress-fill${paused ? " paused" : ""}`}
            style={{ backgroundColor: slide.accent }}
            key={`${step}-${currentIndex}`} /* re-mount restarts animation */
          />
        </div>
      </section>
    </>
  );
}
