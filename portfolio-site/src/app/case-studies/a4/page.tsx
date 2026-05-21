import Link from "next/link";
import CaseStudyGate from "@/components/CaseStudyGate";

/* ── Three-box architecture flow diagram ── */
function ArchitectureFlow() {
  const steps = [
    {
      icon: "👤",
      step: "01",
      title: "Admin Configuration",
      desc: "Admin copies OAC dashboard URLs into NSAW User Management and assigns them to users by role.",
    },
    {
      icon: "⚙️",
      step: "02",
      title: "URL Parsing",
      desc: "NSAW extracts the dashboard name from the URL's reportpath parameter — no API call needed.",
    },
    {
      icon: "✨",
      step: "03",
      title: "Smart Landing Page",
      desc: "User sees a personalized list of dashboards with favorites and a configurable default view.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-3">
      {steps.map((s, i) => (
        <div key={s.step} className="flex flex-col md:flex-row items-center flex-1 gap-3">
          <div className="flex-1 w-full p-5 rounded-xl border bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800/50">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-violet-500 dark:text-violet-400">{s.step}</span>
              <span className="text-lg">{s.icon}</span>
            </div>
            <p className="font-bold text-violet-800 dark:text-violet-200 text-sm mb-2">{s.title}</p>
            <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{s.desc}</p>
          </div>
          {i < 2 && (
            <div className="text-violet-300 dark:text-violet-600 font-bold text-xl md:rotate-0 rotate-90 shrink-0">→</div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Before / After mock UI cards ── */
function BeforeAfter() {
  const painPoints = ["No personalization", "No favorites or defaults", "5+ clicks to reach a dashboard", "Lost context switching from NetSuite"];
  const gains = ["1-click access to favorites", "Default dashboard auto-loads on entry", "Role-relevant dashboards surfaced first", "Seamless transition from NetSuite ERP"];
  const mockDashboards = [
    { name: "Project Hours & Timesheet", fav: true, isDefault: true },
    { name: "Financial Overview — Q1", fav: true, isDefault: false },
    { name: "Supply Chain Dashboard", fav: false, isDefault: false },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Before */}
      <div className="rounded-xl border p-6 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
          <p className="text-xs font-bold text-red-500 uppercase tracking-widest">Before — Generic OAC Interface</p>
        </div>
        <div className="rounded-lg bg-zinc-200 dark:bg-zinc-800 p-3 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
          📁 Catalog → shared → Custom → Financials → NSAW POC Report → …
        </div>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-4 font-medium">5+ folder levels to navigate every session</p>
        <div className="space-y-2">
          {painPoints.map((p) => (
            <div key={p} className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <span className="text-red-400 mt-0.5 shrink-0">✕</span>
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* After */}
      <div className="rounded-xl border p-6 bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800/50">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
          <p className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">After — Smart Landing Page</p>
        </div>
        <div className="space-y-2 mb-4">
          {mockDashboards.map((d) => (
            <div key={d.name} className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800/40 text-xs">
              <span className="text-base">{d.fav ? "⭐" : "☆"}</span>
              <span className="flex-1 font-medium text-zinc-700 dark:text-zinc-200">{d.name}</span>
              {d.isDefault && (
                <span className="px-1.5 py-0.5 bg-violet-100 dark:bg-violet-800 text-violet-600 dark:text-violet-300 rounded text-[10px] font-bold">Default</span>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {gains.map((g) => (
            <div key={g} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
              <span className="text-violet-500 mt-0.5 shrink-0">✓</span>
              <span>{g}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function SmartLandingPageCaseStudyPage() {
  return (
    <CaseStudyGate>
      <SmartLandingPageCaseStudy />
    </CaseStudyGate>
  );
}

function SmartLandingPageCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

      {/* Header */}
      <header className="border-b sticky top-0 z-10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-zinc-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm">
            ← SV
          </Link>
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">A4 / Case Study</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* ── HERO ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">A4</span>
            <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">Constraint-Driven Delivery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900 dark:text-white">
            Smart Landing Page<br />MVP
          </h1>
          <p className="text-lg leading-relaxed mb-10 max-w-3xl text-zinc-500 dark:text-zinc-400">
            When the Access Token API we needed became unavailable with no timeline, I discovered that OAC URLs
            already contain the dashboard names we need — and shipped the full feature in 4–5 weeks without
            any external dependency.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: "4–5 wks", label: "Time to MVP", color: "#8b5cf6" },
              { value: "0", label: "External Dependencies", color: "#10b981" },
              { value: "100%", label: "Feature Parity", color: "#3b82f6" },
              { value: "SSO", label: "Customers Served", color: "#f59e0b" },
            ].map((m) => (
              <div key={m.label} className="p-4 rounded-xl border bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                <p className="text-2xl font-black mb-1" style={{ color: m.color }}>{m.value}</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 01: THE PROBLEM ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">01</span>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">The Problem</h2>
          <p className="leading-relaxed mb-8 text-zinc-500 dark:text-zinc-400">
            NSAW users were clicking from NetSuite ERP into Oracle Analytics Cloud and landing on a generic
            folder tree with no context, no personalization, and no memory of where they were last time.
            The product team had committed to a Smart Landing Page — a personalized dashboard hub with favorites
            and a configurable default view. Then the dependency that made it possible disappeared.
          </p>

          {/* User pain points grid */}
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {[
              { icon: "🧭", title: "Disconnected Journey", desc: "Users clicked from NetSuite into NSAW and landed on a generic OAC interface with no continuity between the two products." },
              { icon: "🔍", title: "Findability Failure", desc: "Each session started with navigating 5+ folder levels to find the same dashboards they used yesterday." },
              { icon: "⭐", title: "No Personalization", desc: "No way to favorite dashboards, set a default view, or have role-relevant content surfaced automatically." },
              { icon: "🔄", title: "Context Switching", desc: "Users lost their analytical thread every time they moved between the NetSuite ERP and the analytics layer." },
            ].map((p) => (
              <div key={p.title} className="flex gap-4 p-4 rounded-xl border bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                <span className="text-2xl shrink-0">{p.icon}</span>
                <div>
                  <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">{p.title}</p>
                  <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The Blocker */}
          <div className="p-5 rounded-xl border-l-4 border-red-500 border border-zinc-200 dark:border-zinc-800 bg-red-50 dark:bg-red-950/20">
            <p className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-2">The Blocker</p>
            <p className="text-sm leading-relaxed text-red-700 dark:text-red-300 mb-3">
              The original implementation required an <span className="font-bold">Access Token API</span> from the OAC team to
              dynamically retrieve each user&apos;s available dashboards. This API was not available — and had no confirmed timeline.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {["API not available", "No confirmed timeline", "Committed feature blocked"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-xs text-red-600 dark:text-red-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 02: THE INSIGHT ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">02</span>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">The Insight</h2>
          <p className="leading-relaxed mb-8 text-zinc-500 dark:text-zinc-400">
            While analyzing OAC workbook URLs to understand the system architecture, I noticed something the engineering
            team had overlooked: <span className="font-semibold text-zinc-700 dark:text-zinc-200">OAC URLs are self-describing.</span> The dashboard name we needed from the API
            was already sitting in the URL — encoded, but readable. We didn&apos;t need an API at all.
          </p>

          {/* URL Parsing Visualization */}
          <div className="space-y-3">
            {/* Step 1 */}
            <div className="rounded-xl p-5 border bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
              <p className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3">Step 1 — Raw OAC URL</p>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 break-all leading-relaxed">
                https://oaxinst10052.analytics.ocp.oraclecloud.com/ui/dv/home.jsp?pageid=visualAnalyzer&amp;
                <span className="bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-1 rounded-sm font-bold">
                  reportpath=%2F%40Catalog%2Fshared%2FCustom%2FFinancials%2FNSAW%20POC%20Report%2FProject%20Hours%20and%20Timesheet
                </span>
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-3 pl-6">
              <div className="w-px h-5 bg-violet-300 dark:bg-violet-700" />
              <p className="text-xs font-mono text-violet-600 dark:text-violet-400 font-bold">URL-decode the reportpath parameter ↓</p>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl p-5 border bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/40">
              <p className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3">Step 2 — Decoded Path</p>
              <code className="text-sm font-mono text-amber-800 dark:text-amber-200 break-all leading-relaxed">
                /@Catalog/shared/Custom/Financials/NSAW POC Report/<span className="font-black bg-amber-200 dark:bg-amber-800/60 px-1 rounded-sm">Project Hours and Timesheet</span>
              </code>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-3 pl-6">
              <div className="w-px h-5 bg-violet-300 dark:bg-violet-700" />
              <p className="text-xs font-mono text-violet-600 dark:text-violet-400 font-bold">extract the last path segment ↓</p>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl p-5 border bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800/50">
              <p className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">Step 3 — Dashboard Name Extracted</p>
              <p className="text-2xl font-black text-violet-700 dark:text-violet-200">Project Hours and Timesheet</p>
              <p className="text-xs text-violet-500 dark:text-violet-400 mt-2 font-medium">
                Ready to display on the Smart Landing Page. No API call. No external dependency.
              </p>
            </div>
          </div>

          {/* Callout */}
          <div className="mt-6 p-4 rounded-xl bg-violet-50 dark:bg-violet-950/20 border border-violet-200 dark:border-violet-800/50">
            <p className="text-sm text-violet-700 dark:text-violet-300 leading-relaxed">
              <span className="font-bold">The core insight:</span> The URL&apos;s <code className="font-mono text-xs bg-violet-100 dark:bg-violet-900/40 px-1 rounded">reportpath</code> parameter,
              once URL-decoded, is a structured file path — and the last segment is always the workbook name. ~10 lines of parsing logic.
              Zero API dependency.
            </p>
          </div>
        </section>

        {/* ── SECTION 03: THE SOLUTION ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">03</span>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">The Solution</h2>
          <p className="leading-relaxed mb-8 text-zinc-500 dark:text-zinc-400">
            Instead of waiting for a blocked API, I proposed a URL-based configuration approach. Admins would paste
            OAC dashboard URLs directly into User Management — the system would do the rest. This kept all logic
            inside the NSAW team&apos;s control and made the feature forward-compatible with the API when it eventually shipped.
          </p>

          <ArchitectureFlow />

          {/* MVP Scope */}
          <div className="mt-8 rounded-xl border p-6 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">MVP Scope</p>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                "Admin saves OAC dashboard URLs per user via User Management",
                "URLs parsed to extract workbook names as display labels",
                "Dashboard list prioritized by User Role and Center",
                "Favorites and default dashboard fully functional",
                "Scoped to SSO-enabled customers (simplified auth flow)",
                "Forward-compatible: API can replace URL parsing seamlessly",
              ].map((s) => (
                <div key={s} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="text-violet-500 mt-0.5 shrink-0">·</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 04: BEFORE vs AFTER ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">04</span>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">User Experience: Before vs After</h2>
          <p className="leading-relaxed mb-8 text-zinc-500 dark:text-zinc-400">
            The same committed feature delivered in full — with a personalized, role-aware dashboard experience that
            replaced a folder-tree navigation nightmare.
          </p>
          <BeforeAfter />
        </section>

        {/* ── SECTION 05: KEY DECISIONS ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">05</span>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">Key Decisions & Tradeoffs</h2>
          <p className="leading-relaxed mb-8 text-zinc-500 dark:text-zinc-400">
            Every constraint-driven decision was made with a clear rationale and an explicit plan for how the
            tradeoff would be retired in Phase 2.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                decision: "URL-based approach vs. waiting for the API",
                chose: "URL-based",
                rationale: "Unblocks delivery immediately. Fully forward-compatible — when the Access Token API ships, URL parsing can be swapped out without any user-facing change.",
                color: "violet",
              },
              {
                decision: "Admin-only configuration vs. user self-service",
                chose: "Admin-only for MVP",
                rationale: "Simpler governance model. Enterprise admins already control user access — adding dashboard assignment to their workflow is natural. User self-service is the obvious Phase 2.",
                color: "blue",
              },
              {
                decision: "SSO customers only vs. full customer base",
                chose: "SSO-only",
                rationale: "SSO customers cover the majority of enterprise accounts and have a simplified auth flow. Non-SSO complexity can be addressed post-MVP without blocking the majority use case.",
                color: "green",
              },
            ].map((d) => (
              <div key={d.decision} className={`p-5 rounded-xl border-l-4 border bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800`}
                style={{ borderLeftColor: d.color === "violet" ? "#8b5cf6" : d.color === "blue" ? "#3b82f6" : "#10b981" }}>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-mono mb-2">{d.decision}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Chose:</p>
                  <p className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">{d.chose}</p>
                </div>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{d.rationale}</p>
              </div>
            ))}
          </div>

          {/* Tradeoffs table */}
          <div className="rounded-xl border overflow-hidden border-zinc-200 dark:border-zinc-800">
            <div className="grid grid-cols-2 bg-zinc-100 dark:bg-zinc-800 px-5 py-3">
              <p className="text-xs font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-widest">Tradeoff Accepted</p>
              <p className="text-xs font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-widest">Mitigation / Phase 2 Path</p>
            </div>
            {[
              { tradeoff: "Manual URL entry by admin", mitigation: "Bulk upload capability in roadmap; API migration makes it automatic" },
              { tradeoff: "Static dashboard configuration", mitigation: "Admin can update anytime; API integration planned to make it dynamic" },
              { tradeoff: "No real-time permission validation", mitigation: "OAC handles access control at click-through — unauthorized users get an OAC-level error, not a NSAW crash" },
            ].map((row, i) => (
              <div key={row.tradeoff} className={`grid grid-cols-2 px-5 py-4 gap-4 ${i < 2 ? "border-b border-zinc-100 dark:border-zinc-800" : ""}`}>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{row.tradeoff}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">{row.mitigation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 06: OUTCOMES ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">06</span>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">Outcomes & Impact</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                icon: "🚀", title: "Shipped in 4–5 Weeks",
                desc: "MVP delivered on the original commitment timeline — despite the API blocker — by reframing the technical approach entirely.",
                highlight: "vs. indefinite wait", hcolor: "#8b5cf6",
              },
              {
                icon: "🔗", title: "Zero External Dependencies",
                desc: "All implementation logic stayed within the NSAW team. No API, no cross-team coordination, no blocked releases.",
                highlight: "100% team-controlled", hcolor: "#10b981",
              },
              {
                icon: "📐", title: "100% Feature Parity",
                desc: "Every requirement in the original PRD — favorites, defaults, role-based prioritization — was delivered in the MVP.",
                highlight: "No scope compromise", hcolor: "#3b82f6",
              },
            ].map((o) => (
              <div key={o.title} className="p-5 rounded-xl border bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                <div className="text-2xl mb-3">{o.icon}</div>
                <p className="font-bold text-zinc-900 dark:text-zinc-100 mb-2 text-sm">{o.title}</p>
                <p className="text-xs leading-relaxed mb-3 text-zinc-500 dark:text-zinc-400">{o.desc}</p>
                <p className="text-sm font-bold" style={{ color: o.hcolor }}>{o.highlight}</p>
              </div>
            ))}
          </div>

          {/* Pattern established callout */}
          <div className="p-5 rounded-xl border border-violet-200 dark:border-violet-800/50 bg-violet-50 dark:bg-violet-950/20">
            <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">Pattern Established</p>
            <p className="text-sm leading-relaxed text-violet-700 dark:text-violet-300">
              This project demonstrated a repeatable model: when an external API blocks a committed feature,
              examine what structured data already exists in the system. The URL-based approach is now the
              established interim pattern for similar NSAW features with API dependencies in flight.
            </p>
          </div>
        </section>

        {/* ── SECTION 07: PM JUDGMENT ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">07</span>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">PM Judgment on Display</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Creative problem solving", desc: "Recognised that OAC URLs encode the exact data the blocked API was supposed to return — a non-obvious structural insight that unblocked delivery entirely." },
              { title: "Technical product thinking", desc: "Understood URL encoding, path structures, and the OAC data model well enough to propose a solution the engineering team could implement in days, not months." },
              { title: "MVP scoping under constraint", desc: "Made three deliberate tradeoffs (URL-based, admin-only, SSO-only) that preserved 100% of user-facing value while eliminating all external blockers." },
              { title: "Stakeholder alignment", desc: "Aligned engineering, product leadership, and cross-functional teams on the alternative approach — including a clear Phase 2 path that made the interim solution easy to accept." },
              { title: "Systems thinking", desc: "Understood the three-system architecture (NetSuite → NSAW → OAC) and designed a solution that works cleanly across all three without breaking any existing integration." },
              { title: "Technical documentation", desc: "Produced a feasibility document, implementation spec, URL parsing logic spec, data model design, and admin UI wireframes — everything engineering needed to ship without ambiguity." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-5 rounded-xl border bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                <div className="w-1 rounded-full shrink-0 mt-1 bg-violet-400 dark:bg-violet-500" style={{ minHeight: "100%" }} />
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1 text-sm">{item.title}</p>
                  <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            ← All case studies
          </Link>
          <span className="text-xs font-mono text-zinc-300 dark:text-zinc-700">A4 · Smart Landing Page MVP</span>
        </div>
      </main>
    </div>
  );
}
