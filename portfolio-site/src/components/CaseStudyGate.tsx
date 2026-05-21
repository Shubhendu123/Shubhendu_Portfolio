"use client";

import { useEffect, useState } from "react";

// Change this value (or set NEXT_PUBLIC_CASE_STUDY_PASSWORD in Vercel) to rotate the password.
const PASSWORD =
  process.env.NEXT_PUBLIC_CASE_STUDY_PASSWORD ?? "shubhendu-2026";

const STORAGE_KEY = "case-study-unlocked";

const REQUEST_MAILTO =
  "mailto:shubhendus@gmail.com" +
  "?subject=" +
  encodeURIComponent("Case study access request") +
  "&body=" +
  encodeURIComponent(
    "Hi Shubhendu,\n\nI'd like access to your Track A case studies. " +
      "Could you share the password?\n\nThanks!"
  );

export default function CaseStudyGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
      setReady(true);
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("p");
    if (fromUrl && fromUrl === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    }
    setReady(true);
  }, []);

  if (!ready) return null;
  if (unlocked) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
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
            href={REQUEST_MAILTO}
            className="text-[#0F6B6B] font-semibold hover:underline"
          >
            Request access
          </a>
        </p>
      </div>
    </div>
  );
}
