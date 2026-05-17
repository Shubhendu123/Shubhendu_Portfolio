"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
          ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#0F6B6B]/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#0F6B6B] flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-[10px] tracking-tight">SV</span>
          </div>
          <span
            className="font-bold text-[#1A1A1A] text-sm tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Shubhendu Vimal
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-7">
          {[
            { label: "Work", href: "#case-studies" },
            { label: "AI Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Connect", href: "#connect" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-[#5C5C5C] hover:text-[#0F6B6B] transition-colors tracking-widest uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#0F6B6B] border border-[#0F6B6B] px-3 py-1.5 rounded-full hover:bg-[#0F6B6B] hover:text-white transition-all duration-200"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
