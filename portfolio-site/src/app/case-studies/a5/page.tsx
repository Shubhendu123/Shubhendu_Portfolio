"use client";

import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────
   SVG: Allocated vs Actual Used bar chart
───────────────────────────────────────── */
function AllocationChart() {
  const customers = [
    { name: "Smarte Carte", allocated: 8, usedGB: 310, packs: 60, formula: "5 + (60÷20) = 8" },
    { name: "CFA Institute", allocated: 7, usedGB: 280, packs: 40, formula: "5 + (40÷20) = 7" },
    { name: "TESSCO", allocated: 6, usedGB: 220, packs: 30, formula: "5 + (30÷20) = 6" },
    { name: "Forest Lawn", allocated: 6, usedGB: 190, packs: 20, formula: "5 + (20÷20) = 6" },
    { name: "Forged Fiber", allocated: 6, usedGB: 150, packs: 20, formula: "5 + (20÷20) = 6" },
  ];
  const maxAlloc = 8;
  const barW = 300;
  const rowH = 52;
  const H = customers.length * rowH + 24;

  return (
    <svg viewBox={`0 0 680 ${H}`} className="w-full" aria-label="Allocated vs actual storage used">
      {/* Column headers */}
      <text x={130} y={14} fontSize="9" fontWeight="600" fill="#6b7280" textAnchor="middle">ALLOCATED</text>
      <text x={480} y={14} fontSize="9" fontWeight="600" fill="#6b7280">FORMULA VERIFIED</text>

      {customers.map((c, i) => {
        const y = i * rowH + 24;
        const allocBarW = (c.allocated / maxAlloc) * barW;
        const usedFrac = (c.usedGB / 1000) / c.allocated;
        const usedBarW = allocBarW * usedFrac;
        const util = ((c.usedGB / 1000) / c.allocated * 100).toFixed(1);

        return (
          <g key={c.name}>
            {/* Customer label */}
            <text x={0} y={y + 18} fontSize="11" fontWeight="600" fill="#e5e7eb">{c.name}</text>
            <text x={0} y={y + 30} fontSize="9" fill="#6b7280">{c.packs} user packs</text>

            {/* Allocated bar (background) */}
            <rect x={90} y={y + 4} width={allocBarW} height={24} rx="5" fill="#1f2937"/>
            {/* Used bar (foreground) */}
            <rect x={90} y={y + 4} width={Math.max(usedBarW, 4)} height={24} rx="5" fill="#22d3ee" opacity="0.8"/>

            {/* Allocated TB label */}
            <text x={90 + allocBarW + 6} y={y + 19} fontSize="11" fontWeight="700" fill="#f3f4f6">
              {c.allocated} TB
            </text>

            {/* Util % */}
            <text x={90 + allocBarW + 6} y={y + 30} fontSize="9" fill="#ef4444">
              {util}% used
            </text>

            {/* Formula */}
            <text x={445} y={y + 19} fontSize="10" fontWeight="600" fill="#22d3ee">{c.formula} ✓</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────
   SVG: Schema Donut Chart
───────────────────────────────────────── */
function SchemaDonut({ segments }: { segments: { label: string; gb: number; color: string; note: string }[] }) {
  const total = segments.reduce((s, x) => s + x.gb, 0);
  const r = 15.9;
  const cx = 21;
  const cy = 21;
  let offset = 25;

  const drawn = segments.map((seg) => {
    const pct = (seg.gb / total) * 100;
    const el = { ...seg, pct, offset };
    offset = ((offset - pct) % 100 + 100) % 100;
    return el;
  });

  return (
    <div className="flex flex-col sm:flex-row items-start gap-6">
      <svg width="130" height="130" viewBox="0 0 42 42" className="shrink-0">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1f2937" strokeWidth="5" />
        {drawn.map((s) => (
          <circle
            key={s.label}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={s.color}
            strokeWidth="5"
            strokeDasharray={`${s.pct.toFixed(1)} ${(100 - s.pct).toFixed(1)}`}
            strokeDashoffset={s.offset}
            strokeLinecap="butt"
          />
        ))}
        <text x={cx} y={cy - 2} textAnchor="middle" fontSize="5.5" fontWeight="800" fill="#e5e7eb">
          {total.toFixed(0)}
        </text>
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize="3" fill="#6b7280">GB total</text>
      </svg>

      <div className="flex flex-col gap-2.5 flex-1">
        {segments.map((s) => (
          <div key={s.label} className="flex items-start gap-2">
            <span className="w-2.5 h-2.5 rounded-sm mt-0.5 shrink-0" style={{ background: s.color }} />
            <div>
              <p className="text-xs font-semibold text-gray-200">{s.label}
                <span className="font-bold ml-2" style={{ color: s.color }}>{s.gb.toFixed(1)} GB</span>
              </p>
              <p className="text-xs text-gray-500">{s.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Page
───────────────────────────────────────── */
const anomalyTabs = [
  {
    id: "ghm",
    label: "Grand Home Mart",
    sub: "inst60016",
    stats: [
      { label: "Allocated", value: "8 TB", color: "text-red-400" },
      { label: "Entitled", value: "5 TB (Enterprise)", color: "text-gray-300" },
      { label: "Actual Used", value: "313 GB", color: "text-cyan-400" },
      { label: "Utilization", value: "~4%", color: "text-red-400" },
      { label: "User Packs", value: "0 (was 250)", color: "text-amber-400" },
    ],
    rootCause: "Originally had 250 User Packs — which auto-provisioned 8 TB under the formula. User Packs were later reduced to zero, but ADW storage was never scaled back. No scale-down was triggered in the provisioning system.",
    schemas: [
      { label: "SSB (Demo Data)", gb: 162.42, color: "#ef4444", note: "Oracle sample dataset — should not be on a production instance" },
      { label: "OAX$DW (NSAW Data)", gb: 137.60, color: "#22d3ee", note: "Actual analytics data" },
      { label: "SYS (System)", gb: 10.86, color: "#6b7280", note: "System tables" },
      { label: "Other", gb: 2.29, color: "#374151", note: "Small Oracle schemas" },
    ],
    finding: "SSB demo data (162 GB) consumes more storage than actual NSAW data. Zero custom customer schemas — this instance is barely used.",
  },
  {
    id: "c20",
    label: "Consumer 2.0",
    sub: "inst10010",
    stats: [
      { label: "Allocated", value: "5 TB", color: "text-red-400" },
      { label: "Entitled", value: "3 TB (Premium)", color: "text-gray-300" },
      { label: "Actual Used", value: "294 GB", color: "text-cyan-400" },
      { label: "Utilization", value: "~6%", color: "text-red-400" },
      { label: "Provisioned Users", value: "6", color: "text-amber-400" },
    ],
    rootCause: "Downgraded from Enterprise to Premium in Dec 2025, but ADW storage remained at 5 TB instead of scaling down to the 3 TB Premium entitlement. Enterprise features (APEX, AI/ML Workbench) may still be accessible post-downgrade.",
    schemas: [
      { label: "SSB (Demo Data)", gb: 162.42, color: "#ef4444", note: "Same Oracle demo dataset — present on both anomaly instances" },
      { label: "MRR_BILLING_DATA", gb: 76.04, color: "#f59e0b", note: "Customer own billing data — only real custom schema" },
      { label: "SYS (System)", gb: 37.61, color: "#6b7280", note: "System tables" },
      { label: "OAX$DW (NSAW Data)", gb: 9.35, color: "#22d3ee", note: "Minimal analytics data — 6 provisioned users" },
      { label: "Other", gb: 8.24, color: "#374151", note: "Infrastructure schemas" },
    ],
    finding: "76 GB in custom MRR_BILLING_DATA — the only customer with real custom data. Still: 5 TB allocated for 6 users consuming 294 GB total.",
  },
];

export default function ExcessCapacityCaseStudy() {
  const [activeTab, setActiveTab] = useState("ghm");
  const tab = anomalyTabs.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen" style={{ background: "#0a0e17", color: "#e5e7eb" }}>

      {/* Header */}
      <header className="border-b sticky top-0 z-10" style={{ borderColor: "#1f2937", background: "#0d1117" }}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-gray-300 hover:text-cyan-400 transition-colors text-sm">
            ← SV
          </Link>
          <span className="text-xs font-mono text-gray-500">A3 / Case Study</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* ── HERO ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono px-2 py-1 rounded text-gray-400" style={{ background: "#1f2937" }}>A3</span>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Forensic Audit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Excess Capacity<br />Investigation
          </h1>
          <p className="text-lg leading-relaxed mb-10 max-w-3xl" style={{ color: "#9ca3af" }}>
            A forensic audit of 100+ enterprise customers revealed a systemic gap between commercial entitlements
            and technical provisioning — uncovering ~$1M in recoverable capacity and a process breakdown
            spanning Provisioning, Finance, and Legal.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: "100+", label: "Customers Audited", color: "#22d3ee" },
              { value: "~$1M", label: "Revenue Impact", color: "#10b981" },
              { value: "5 TB", label: "Excess Storage Found", color: "#f59e0b" },
              { value: "4", label: "Root Causes Identified", color: "#ef4444" },
            ].map((m) => (
              <div key={m.label} className="p-4 rounded-xl border" style={{ background: "#111827", borderColor: "#1f2937" }}>
                <p className="text-2xl font-black mb-1" style={{ color: m.color }}>{m.value}</p>
                <p className="text-xs" style={{ color: "#6b7280" }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 01: PROBLEM ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400">01</span>
            <div className="flex-1 h-px" style={{ background: "#1f2937" }} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
          <p className="leading-relaxed mb-4" style={{ color: "#9ca3af" }}>
            NSAW provisions ADW storage based on customer tier — Standard (1 TB), Premium (3 TB), Enterprise (5 TB).
            During a routine compliance review, 100+ customers were flagged with storage allocations significantly
            exceeding their licensed entitlements, totaling <span className="text-white font-semibold">~$2.7M in combined ARR</span>.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
            Legal and Finance needed a complete audit trail before proceeding with the Capacity Pack pricing decision —
            specifically whether to charge these customers for the excess or grandfather their existing allocations.
            The entire pricing proposal was blocked pending this investigation.
          </p>

          {/* Why it was hard */}
          <div className="p-5 rounded-xl border-l-4 border-red-500" style={{ background: "#1a0f0f", borderRightColor: "#1f2937", borderTopColor: "#1f2937", borderBottomColor: "#1f2937", borderRight: "1px solid #1f2937", borderTop: "1px solid #1f2937", borderBottom: "1px solid #1f2937" }}>
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">Why This Was Hard</p>
            <p className="text-sm leading-relaxed" style={{ color: "#fca5a5" }}>
              No Jira SD tickets existed for 75+ of 100 customers. Fleet Manager showed no scaling activity whatsoever.
              The storage appeared out of thin air — no documentation, no audit trail, no owner.
              Standard investigation paths led nowhere.
            </p>
          </div>
        </section>

        {/* ── SECTION 02: INVESTIGATION TIMELINE ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400">02</span>
            <div className="flex-1 h-px" style={{ background: "#1f2937" }} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-8">The Investigation</h2>

          <div className="relative pl-10">
            <div className="absolute left-3.5 top-2 bottom-2 w-0.5" style={{ background: "linear-gradient(to bottom, #22d3ee, #10b981)" }} />
            {[
              {
                week: "Week 1", icon: "🔍", title: "Discovery",
                desc: "Identified 100+ customers with ADW storage exceeding entitlements. Shared customer list with Provisioning Ops — received scaling details for fewer than 25 of 100+. Fleet Manager showed no footprint of scale-up activity for the remaining 75+. Dead end.",
                color: "#22d3ee",
              },
              {
                week: "Week 2", icon: "🧮", title: "Root Cause Breakthrough",
                desc: "Working with Provisioning Ops, uncovered the User Pack provisioning logic — every 20 packs auto-provisions 1 TB on top of base entitlement. Cross-referenced User Pack quantities and verified the math across 5 customers. Exact match across all 5.",
                color: "#a78bfa",
              },
              {
                week: "Week 3", icon: "🗄️", title: "Schema-Level Deep Dive",
                desc: "Pulled schema-level DB breakdowns for the 2 anomaly accounts. Discovered SSB (Oracle demo dataset) consuming 162 GB on both production instances. Obtained provisioned user counts from Product Analytics. Investigated tier downgrade history.",
                color: "#f59e0b",
              },
              {
                week: "Week 4", icon: "📋", title: "Resolution & Report",
                desc: "Categorized all 100+ customers into 4 buckets with documented root causes. Filed Jira SD tickets for the anomaly accounts. Established process requiring Provisioning Ops to CC Product on all future scale-up tickets. Delivered complete report to Legal and Compliance.",
                color: "#10b981",
              },
            ].map((item, i) => (
              <div key={item.week} className="relative mb-8 last:mb-0">
                <div className="absolute -left-10 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm"
                  style={{ borderColor: item.color, background: "#0a0e17" }}>
                  {item.icon}
                </div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest mb-1" style={{ color: item.color }}>{item.week}</p>
                <p className="font-bold text-white mb-1">{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 03: BREAKTHROUGH ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400">03</span>
            <div className="flex-1 h-px" style={{ background: "#1f2937" }} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">The Breakthrough</h2>
          <p className="leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
            Working with Provisioning Ops, I discovered that every 20 User Packs automatically adds 1 TB of ADW
            storage on top of the base entitlement. This was by design — but commercial entitlement tiers did not
            account for it, creating a silent gap between what was sold and what was provisioned.
          </p>

          {/* Formula block */}
          <div className="rounded-xl p-6 mb-8 border" style={{ background: "#0d1117", borderColor: "#22d3ee33" }}>
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">User Pack Provisioning Formula</p>
            <div className="flex flex-wrap items-center gap-2 font-mono text-lg font-bold text-white">
              <span className="text-gray-400">Base Entitlement</span>
              <span className="text-cyan-400">+</span>
              <span className="px-3 py-1 rounded text-cyan-400" style={{ background: "#1f2937" }}>⌊ User Packs ÷ 20 ⌋</span>
              <span className="text-cyan-400">×</span>
              <span className="text-amber-400">1 TB</span>
              <span className="text-cyan-400">=</span>
              <span className="text-white">Actual Provisioned Storage</span>
            </div>
            <p className="text-xs mt-3" style={{ color: "#6b7280" }}>
              By design — but commercially invisible. No entitlement tier accounted for this auto-scaling behavior.
            </p>
          </div>

          {/* Verification chart */}
          <div className="rounded-xl p-6 border" style={{ background: "#111827", borderColor: "#1f2937" }}>
            <p className="text-sm font-semibold text-white mb-1">Allocated vs Actual Used — 5 Verified Customers</p>
            <p className="text-xs mb-5" style={{ color: "#6b7280" }}>All 5 matched the formula exactly. Cyan bar = actual usage. Gray bar = allocated capacity.</p>
            <AllocationChart />
          </div>
        </section>

        {/* ── SECTION 04: CATEGORIZATION ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400">04</span>
            <div className="flex-1 h-px" style={{ background: "#1f2937" }} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Systematic Categorization</h2>
          <p className="leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
            After cross-referencing fleet reports, provisioning data, Jira SD tickets, and User Pack quantities
            for each customer, all 100+ were classified into four distinct buckets.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                count: "30", label: "User Pack Based — Verified",
                desc: "Storage explained by User Pack quantities. Formula verified for each customer. Math matched exactly.",
                color: "#22d3ee", borderColor: "#164e63", bg: "#083344",
              },
              {
                count: "25", label: "Jira SD Ticket Available",
                desc: "Scale-up documented via service desk tickets. Provisioning Ops had clear records. No anomaly.",
                color: "#10b981", borderColor: "#065f46", bg: "#022c22",
              },
              {
                count: "32", label: "Storage Within Entitlement",
                desc: "Current storage matches licensed tier. No excess detected. No action required.",
                color: "#6b7280", borderColor: "#374151", bg: "#111827",
              },
              {
                count: "13", label: "Anomaly — Storage Not Scaled Down",
                desc: "Storage exceeds entitlement with no documented reason. User Packs reduced / tier downgraded but storage persisted.",
                color: "#ef4444", borderColor: "#7f1d1d", bg: "#1a0f0f",
              },
            ].map((c) => (
              <div key={c.label} className="p-5 rounded-xl border-l-4" style={{ background: c.bg, borderLeftColor: c.color, borderRight: `1px solid ${c.borderColor}`, borderTop: `1px solid ${c.borderColor}`, borderBottom: `1px solid ${c.borderColor}` }}>
                <div className="flex items-start justify-between mb-2">
                  <p className="text-3xl font-black" style={{ color: c.color }}>{c.count}</p>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ color: c.color, background: `${c.color}20` }}>customers</span>
                </div>
                <p className="font-semibold text-white mb-1 text-sm">{c.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="px-4 py-3 rounded-lg text-sm" style={{ background: "#1f2937", color: "#d1d5db" }}>
            <span className="text-cyan-400 font-bold">87 of 100+</span> customers resolved through investigation ·{" "}
            <span className="text-red-400 font-bold">13 anomalies</span> required escalation and Jira SD filings
          </div>
        </section>

        {/* ── SECTION 05: ANOMALY DEEP DIVE ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400">05</span>
            <div className="flex-1 h-px" style={{ background: "#1f2937" }} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Anomaly Deep Dive</h2>
          <p className="leading-relaxed mb-6" style={{ color: "#9ca3af" }}>
            Among the 13 anomaly accounts, two cases revealed the deepest investigation findings — storage that could
            not be explained by User Packs, Jira tickets, or entitlement tiers. Each required schema-level database
            investigation to understand what was actually consuming the space.
          </p>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {anomalyTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{
                  background: activeTab === t.id ? "#164e63" : "#111827",
                  color: activeTab === t.id ? "#22d3ee" : "#6b7280",
                  border: `1px solid ${activeTab === t.id ? "#22d3ee66" : "#1f2937"}`,
                }}
              >
                {t.label}
                <span className="ml-2 text-xs font-mono opacity-60">{t.sub}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="rounded-2xl border p-6" style={{ background: "#111827", borderColor: "#1f2937" }}>
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {tab.stats.map((s) => (
                <div key={s.label} className="p-3 rounded-lg" style={{ background: "#0d1117" }}>
                  <p className={`text-lg font-black ${s.color}`}>{s.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Root cause */}
            <div className="p-4 rounded-lg mb-6 border-l-4 border-amber-500" style={{ background: "#1c1204" }}>
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Root Cause</p>
              <p className="text-sm leading-relaxed" style={{ color: "#fde68a" }}>{tab.rootCause}</p>
            </div>

            {/* Schema donut */}
            <div>
              <p className="text-sm font-semibold text-white mb-4">Schema-Level Storage Breakdown</p>
              <SchemaDonut segments={tab.schemas} />
              <div className="mt-4 p-3 rounded-lg border border-cyan-900/40" style={{ background: "#083344" }}>
                <p className="text-xs text-cyan-300 leading-relaxed">
                  <span className="font-bold">Finding:</span> {tab.finding}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 06: CROSS-FUNCTIONAL ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400">06</span>
            <div className="flex-1 h-px" style={{ background: "#1f2937" }} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Cross-Functional Orchestration</h2>
          <p className="leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
            No single team owned this problem. Resolution required coordinating across six functions —
            each holding a different piece of the puzzle.
          </p>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              { team: "Provisioning Ops", person: "Vinod", role: "Scaling history, SKU mapping, User Pack provisioning logic, capacity breakup per instance", color: "#22d3ee" },
              { team: "Engineering", person: "Tarun", role: "Schema-level DB queries, CADW diagnostics, storage breakdowns for both anomaly accounts", color: "#a78bfa" },
              { team: "Engineering Mgmt", person: "Minu", role: "Customer tier history, User Pack counts, Enterprise-to-Premium downgrade timeline", color: "#f59e0b" },
              { team: "Product Analytics", person: "Nicole", role: "Provisioned user counts from PA tool for both anomaly accounts", color: "#34d399" },
              { team: "Legal", person: "Brian", role: "Compliance review requirements, pricing proposal dependency and decision timeline", color: "#f87171" },
              { team: "Product Lead", person: "Himanshu", role: "Executive updates, final review before Legal and Compliance submission", color: "#fb923c" },
            ].map((s) => (
              <div key={s.team} className="flex gap-4 p-4 rounded-xl border" style={{ background: "#111827", borderColor: "#1f2937" }}>
                <div className="w-1 rounded-full shrink-0" style={{ background: s.color }} />
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <p className="font-semibold text-sm text-white">{s.team}</p>
                    <span className="text-xs font-mono" style={{ color: s.color }}>{s.person}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 07: OUTCOMES ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400">07</span>
            <div className="flex-1 h-px" style={{ background: "#1f2937" }} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-8">Outcomes & Impact</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: "💰", title: "Revenue Recovery",
                desc: "~$1M in identifiable excess capacity across anomaly accounts, enabling the Capacity Pack pricing decision for Finance and Legal.",
                highlight: "~$1M", hcolor: "#10b981",
              },
              {
                icon: "📊", title: "Complete Audit Trail",
                desc: "All 100+ customers categorized with documented root causes. Legal received actionable data to proceed with the pricing proposal — decision unblocked.",
                highlight: "100+ resolved", hcolor: "#22d3ee",
              },
              {
                icon: "🔧", title: "Process Fix",
                desc: "Established requirement for Provisioning Ops to CC Product team on all future scale-up Jira SD tickets. Simple, lightweight, prevents recurrence.",
                highlight: "0 bureaucracy added", hcolor: "#a78bfa",
              },
              {
                icon: "🧩", title: "Systemic Insight",
                desc: "Exposed the gap between commercial entitlement tiers and technical provisioning logic — User Pack auto-scaling was by design but commercially undocumented.",
                highlight: "Root cause documented", hcolor: "#f59e0b",
              },
            ].map((o) => (
              <div key={o.title} className="p-5 rounded-xl border" style={{ background: "#111827", borderColor: "#1f2937" }}>
                <div className="text-2xl mb-3">{o.icon}</div>
                <p className="font-bold text-white mb-1">{o.title}</p>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "#9ca3af" }}>{o.desc}</p>
                <p className="text-sm font-bold" style={{ color: o.hcolor }}>{o.highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 08: PM CRAFT ── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-cyan-400">08</span>
            <div className="flex-1 h-px" style={{ background: "#1f2937" }} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-8">PM Judgment on Display</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Forensic analysis", desc: "Traced storage anomalies across fleet reports, provisioning systems, DB schemas, and commercial entitlements — across 4 weeks and 6 teams — when no standard path led anywhere." },
              { title: "Stakeholder management", desc: "Coordinated 6 teams across Ops, Engineering, Legal, Finance, and Product — each holding a different piece of the puzzle — without formal authority over any of them." },
              { title: "Systems thinking", desc: "Connected the User Pack provisioning logic to commercial tier design, exposing a systemic gap that no single team could see from their vantage point." },
              { title: "Business acumen", desc: "Framed technical findings in business terms — ~$1M recovery, grandfathering vs. charging, compliance risk, Capacity Pack pricing unblock — for a Legal and Finance audience." },
              { title: "Process design", desc: "Designed a lightweight fix (CC on Jira SD tickets) that prevents the gap from recurring without adding overhead or bureaucracy to existing workflows." },
              { title: "Executive communication", desc: "Translated a month-long forensic investigation into crisp executive updates with clear asks, status on each of 100+ accounts, and a decisive recommendation." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-5 rounded-xl border" style={{ background: "#111827", borderColor: "#1f2937" }}>
                <div className="w-1 rounded-full shrink-0 mt-1" style={{ background: "#22d3ee", minHeight: "100%" }} />
                <div>
                  <p className="font-semibold text-white mb-1 text-sm">{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 flex justify-between items-center border-t" style={{ borderColor: "#1f2937" }}>
          <Link href="/" className="text-sm transition-colors" style={{ color: "#6b7280" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3ee")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}>
            ← All case studies
          </Link>
          <span className="text-xs font-mono" style={{ color: "#374151" }}>A3 · Excess Capacity Investigation</span>
        </div>
      </main>
    </div>
  );
}
