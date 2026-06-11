"use client";

import { useEffect, useRef, useState } from "react";

const SEEN_KEY = "sv-intro-seen";
const COUNT_MS = 1100;
const EXIT_MS = 650;

// Inline script runs before paint: shows the overlay only for first-time
// visitors in this session who haven't asked for reduced motion. Also tags
// <html> with .js so scroll-reveal styles never hide content without JS.
const bootScript = `
document.documentElement.classList.add('js');
try {
  if (!sessionStorage.getItem('${SEEN_KEY}') &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.setAttribute('data-intro', '');
  }
} catch (e) {}
`;

export default function IntroReveal() {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    if (!html.hasAttribute("data-intro")) return;

    const finish = () => {
      html.removeAttribute("data-intro");
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    };

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / COUNT_MS, 1);
      setCount(Math.round(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        window.setTimeout(finish, EXIT_MS);
      }
    };
    raf = requestAnimationFrame(tick);

    // Safety net: never let the overlay outlive its welcome.
    const failsafe = window.setTimeout(finish, COUNT_MS + EXIT_MS + 1500);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      <div
        ref={overlayRef}
        aria-hidden="true"
        className={`intro-overlay ${exiting ? "intro-exit" : ""}`}
      >
        <div className="relative w-full max-w-6xl mx-auto px-6">
          <p className="font-serif italic text-parchment text-xl md:text-2xl absolute left-6 top-1/2 -translate-y-1/2 hidden sm:block">
            Shubhendu Vimal<span className="text-accent">.</span>
          </p>
          <p className="text-center font-serif text-parchment text-7xl md:text-9xl tabular-nums leading-none">
            {count}
            <span className="text-accent text-2xl md:text-4xl align-super">%</span>
          </p>
        </div>
      </div>
    </>
  );
}
