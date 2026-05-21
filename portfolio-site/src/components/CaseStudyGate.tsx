"use client";

import { useEffect, useState } from "react";

// Change this value (or set NEXT_PUBLIC_CASE_STUDY_PASSWORD in Vercel) to rotate the password.
const PASSWORD =
  process.env.NEXT_PUBLIC_CASE_STUDY_PASSWORD ?? "shubhendu-2026";

// Owner bypass: visit ANY page on the site with `?owner=<OWNER_KEY>` once on
// your laptop/phone, and that browser is permanently unlocked (localStorage).
// Rotate this if you ever shared it by accident.
const OWNER_KEY =
  process.env.NEXT_PUBLIC_OWNER_KEY ?? "shubhendu-owner-2026-pv9";

const SESSION_UNLOCK_KEY = "case-study-unlocked";
const OWNER_FLAG_KEY = "portfolio-owner";

const REQUEST_URL =
  "https://mail.google.com/mail/?view=cm&fs=1" +
  "&to=" +
  encodeURIComponent("shubhendus@gmail.com") +
  "&su=" +
  encodeURIComponent("Case study access request") +
  "&body=" +
  encodeURIComponent(
    "Hi Shubhendu,\n\n" +
      "I'd like access to your Track A case studies. Could you share the password?\n\n" +
      "Thanks!"
  );

export default function CaseStudyGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Owner bypass — permanent on this browser
    if (localStorage.getItem(OWNER_FLAG_KEY) === "1") {
      setUnlocked(true);
      setReady(true);
      return;
    }

    const params = new URLSearchParams(window.location.search);

    // Owner enrolment: `?owner=<OWNER_KEY>` → set localStorage permanently
    if (params.get("owner") === OWNER_KEY) {
      localStorage.setItem(OWNER_FLAG_KEY, "1");
      setUnlocked(true);
      setReady(true);
      return;
    }

    // Per-session unlock (visitor already entered the password this session)
    if (sessionStorage.getItem(SESSION_UNLOCK_KEY) === "1") {
      setUnlocked(true);
      setReady(true);
      return;
    }

    // Shareable pre-unlocked link: `?p=<PASSWORD>` → unlock for this session
    if (params.get("p") === PASSWORD) {
      sessionStorage.setItem(SESSION_UNLOCK_KEY, "1");
      setUnlocked(true);
    }

    setReady(true);
  }, []);

  if (!ready) return null;
  if (unlocked) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(SESSION_UNLOCK_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#FAF7F2]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#0F6B6B]/10 p-7">
        <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">
          Enter password
        </h2>
        <p className="text-sm text-[#5C5C5C] leading-relaxed mb-5">
          This case study is gated. If you were given a link, it may include the
          password automatically.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (error) setError(false);
            }}
            placeholder="Password"
            autoFocus
            className={`w-full px-4 py-3 rounded-lg border text-sm text-[#1A1A1A] placeholder-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#0F6B6B]/30 ${
              error ? "border-red-400" : "border-[#0F6B6B]/40"
            }`}
          />
          {error && (
            <p className="text-xs text-red-500 mt-2">
              Incorrect password. Try again or request access below.
            </p>
          )}
          <button
            type="submit"
            className="mt-4 w-full px-4 py-3 rounded-lg bg-[#0F6B6B] text-white text-sm font-semibold hover:bg-[#0d5e5e] transition-colors"
          >
            Unlock
          </button>
        </form>
        <p className="text-xs text-[#5C5C5C] mt-5 text-center">
          Don&apos;t have a password?{" "}
          <a
            href={REQUEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0F6B6B] font-semibold hover:underline"
          >
            Request access
          </a>
        </p>
      </div>
    </div>
  );
}
