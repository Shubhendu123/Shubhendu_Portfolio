"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-md border-b border-ink/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 shrink-0">
          <div className="w-7 h-7 rounded-full bg-ink flex items-center justify-center shrink-0">
            <span className="text-parchment font-bold text-[10px] tracking-tight">
              SV
            </span>
          </div>
          <span className="font-serif italic text-ink text-base tracking-tight hidden sm:inline">
            Shubhendu Vimal
          </span>
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-x-3.5 gap-y-1 md:gap-7 flex-wrap justify-end">
          {[
            { label: "Work", href: "#case-studies" },
            { label: "AI Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Connect", href: "#connect" },
          ].map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="group text-[11px] font-medium text-ink/70 hover:text-accent transition-colors tracking-[0.18em] uppercase whitespace-nowrap"
            >
              <span
                className="font-mono text-[9px] text-accent mr-1 hidden md:inline"
                aria-hidden="true"
              >
                0{i + 1}
              </span>
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-ink border border-ink/40 px-3.5 py-1.5 hover:bg-ink hover:text-parchment transition-all duration-200"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
