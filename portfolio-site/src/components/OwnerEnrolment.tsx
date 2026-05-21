"use client";

import { useEffect } from "react";
import { OWNER_KEY, OWNER_FLAG_KEY } from "@/lib/case-study-access";

// Mounted in the root layout so the owner key works from ANY page.
// Visit /?owner=<OWNER_KEY> once on each of your devices and that browser
// is permanently unlocked.
export default function OwnerEnrolment() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("owner") === OWNER_KEY) {
      localStorage.setItem(OWNER_FLAG_KEY, "1");
    }
  }, []);
  return null;
}
