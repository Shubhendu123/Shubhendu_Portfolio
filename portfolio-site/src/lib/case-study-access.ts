// Visitor password — share with trusted recipients.
// Rotate by changing this value or setting NEXT_PUBLIC_CASE_STUDY_PASSWORD in Vercel env vars.
export const PASSWORD =
  process.env.NEXT_PUBLIC_CASE_STUDY_PASSWORD ?? "shubhendu-2026";

// Owner key — only Shubhendu uses this. Visiting any page with `?owner=<OWNER_KEY>`
// (or entering it in the password field) sets a localStorage flag that permanently
// unlocks case studies on that browser. Rotate if it ever leaks.
export const OWNER_KEY =
  process.env.NEXT_PUBLIC_OWNER_KEY ?? "shubhendu-owner-2026-pv9";

export const OWNER_FLAG_KEY = "portfolio-owner";
export const SESSION_UNLOCK_KEY = "case-study-unlocked";
