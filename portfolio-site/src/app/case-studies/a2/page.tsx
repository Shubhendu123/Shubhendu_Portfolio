import Link from "next/link";

/* ── SVG: Instance Breakdown Bar Chart ── */
function InstanceBreakdownChart() {
  const bars = [
    { label: "Cleanup", count: 223, pct: 52, color: "#f97316" },
    { label: "No Action", count: 91, pct: 21, color: "#94a3b8" },
    { label: "In Use", count: 90, pct: 21, color: "#10b981" },
    { label: "Orphan", count: 22, pct: 5, color: "#ef4444" },
  ];
  const W = 480, H = bars.length * 52 + 20;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-label="Instance breakdown by category">
      {bars.map((b, i) => {
        const y = i * 52 + 10;
        const barW = (b.pct / 52) * 300;
        return (
          <g key={b.label}>
            <text x={0} y={y + 16} fontSize="12" fontWeight="600" className="fill-zinc-700 dark:fill-zinc-300">{b.label}</text>
            <rect x={80} y={y} width={300} height={28} rx="6" className="fill-zinc-100 dark:fill-zinc-700"/>
            <rect x={80} y={y} width={barW} height={28} rx="6" fill={b.color} opacity="0.85"/>
            <text x={80 + barW + 8} y={y + 18} fontSize="12" fontWeight="700" fill={b.color}>{b.count}</text>
            <text x={440} y={y + 18} fontSize="11" className="fill-zinc-400 dark:fill-zinc-500" textAnchor="end">{b.pct}%</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── SVG: Department Distribution ── */
function DepartmentChart() {
  const depts = [
    { label: "Std Demo", count: 147, color: "#3b82f6" },
    { label: "Training", count: 115, color: "#7c3aed" },
    { label: "PS Demo", count: 111, color: "#0891b2" },
    { label: "Support", count: 20, color: "#059669" },
    { label: "Univ Demo", count: 14, color: "#d97706" },
    { label: "Product", count: 12, color: "#dc2626" },
    { label: "SDN Demo", count: 7, color: "#475569" },
  ];
  const max = 147;
  const H = depts.length * 46 + 10;
  return (
    <svg viewBox={`0 0 480 ${H}`} className="w-full" aria-label="Accounts by department">
      {depts.map((d, i) => {
        const y = i * 46 + 8;
        const barW = (d.count / max) * 300;
        return (
          <g key={d.label}>
            <text x={0} y={y + 15} fontSize="11" fontWeight="600" className="fill-zinc-700 dark:fill-zinc-300">{d.label}</text>
            <rect x={80} y={y} width={300} height={26} rx="5" className="fill-zinc-100 dark:fill-zinc-700"/>
            <rect x={80} y={y} width={barW} height={26} rx="5" fill={d.color} opacity="0.82"/>
            <text x={80 + barW + 6} y={y + 17} fontSize="11" fontWeight="700" fill={d.color}>{d.count}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── SVG: Ownership Donut ── */
function OwnershipDonut() {
  const segments = [
    { label: "Admin + Active", count: 233, pct: 54.7, color: "#2563eb" },
    { label: "Proxy Only", count: 108, pct: 25.4, color: "#60a5fa" },
    { label: "Admin Only", count: 3, pct: 0.7, color: "#94a3b8" },
    { label: "No Contact", count: 82, pct: 19.2, color: "#ef4444" },
  ];
  const r = 15.9, cx = 21, cy = 21;
  let offset = 25;
  const circles = segments.map((s) => {
    const el = { ...s, offset };
    offset = (offset - s.pct + 100) % 100;
    return el;
  });

  return (
    <div className="flex items-center gap-6">
      <svg width="140" height="140" viewBox="0 0 42 42" className="shrink-0">
        <circle cx={cx} cy={cy} r={r} fill="none" className="stroke-zinc-200 dark:stroke-zinc-700" strokeWidth="5"/>
        {circles.map((s) => (
          <circle
            key={s.label}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={s.color}
            strokeWidth="5"
            strokeDasharray={`${s.pct} ${100 - s.pct}`}
            strokeDashoffset={s.offset}
            strokeLinecap="round"
          />
        ))}
        <text x={cx} y={cy - 1} textAnchor="middle" fontSize="7" fontWeight="800" className="fill-zinc-900 dark:fill-zinc-100">81%</text>
        <text x={cx} y={cy + 5} textAnchor="middle" fontSize="3.2" className="fill-zinc-500 dark:fill-zinc-400">covered</text>
      </svg>
      <div className="flex flex-col gap-2">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: s.color }}/>
            <span>{s.label}:</span>
            <span className="font-bold text-zinc-900 dark:text-zinc-100">{s.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestDriveCleanupCaseStudy() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">

      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            ← SV
          </Link>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">A2 / Case Study</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded">A2</span>
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">Oracle NetSuite · Principal PM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-6">
            Test Drive Infrastructure<br />Cleanup at Scale
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-10">
            426 cloud instances. 7 departments. Nobody knew who owned them.
            I designed a three-layer ownership framework to safely decommission unused enterprise analytics
            infrastructure — recovering ~$800K–$1M in annual OCI spend without a single business disruption.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "426", label: "Instances audited" },
              { value: "59%", label: "Zero usage (90 days)", red: true },
              { value: "7", label: "Departments mapped" },
              { value: "~$1M", label: "Annual OCI savings", green: true },
            ].map((m) => (
              <div key={m.label} className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <p className={`text-2xl font-bold ${m.red ? "text-red-600 dark:text-red-400" : m.green ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-900 dark:text-zinc-100"}`}>
                  {m.value}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">The Problem</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-4">
            An enterprise analytics platform built on Oracle Autonomous Data Warehouse had accumulated
            426 Test Drive instances consuming OCI resources. Finance was asking why infrastructure costs
            kept climbing. The answer was clear — but executing the cleanup safely was not.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
            The pressure from leadership was to send a mass email and delete everything inactive. I pushed back.
            The data quality and organizational complexity demanded a structured approach — one that would
            protect active business commitments while still moving fast enough to matter.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                badge: "59% zero usage",
                color: "red",
                title: "199 active instances with no activity in 90 days",
                desc: "No WAF calls, no customer activity, no control plane operations — yet still consuming OCI resources and incurring charges.",
              },
              {
                badge: "50% stale contacts",
                color: "orange",
                title: "Admin email lists were unreliable",
                desc: "Half of listed admin emails were copied during provisioning and never updated. A blanket email would reach the wrong people — or no one.",
              },
              {
                badge: "7 owners",
                color: "blue",
                title: "Ownership spanned 7 departments",
                desc: "No single team owned the Test Drive program. Accounts belonged to Std Demo, PS, Training, University, Product, SDN, and Support — each with different contacts and processes.",
              },
              {
                badge: "Real risk",
                color: "purple",
                title: "Deletion risked active business commitments",
                desc: "Some accounts held active customer demos, IP, or ongoing PS engagements. A blanket teardown could directly impact revenue and customer satisfaction.",
              },
            ].map((c) => {
              const colors: Record<string, string> = {
                red: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800",
                orange: "bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800",
                blue: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800",
                purple: "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800",
              };
              const badgeColors: Record<string, string> = {
                red: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
                orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
                blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
                purple: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
              };
              return (
                <div key={c.title} className={`p-5 rounded-xl border ${colors[c.color]}`}>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded mb-3 inline-block ${badgeColors[c.color]}`}>{c.badge}</span>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{c.title}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Three-Layer Ownership Model */}
        <section className="mb-16">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Solution · Part 1</span>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-2 mb-3">Three-Layer Ownership Model</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl">
            Each account had three potential ownership sources — and none were individually sufficient.
            The breakthrough was understanding how they complemented each other to achieve near-complete coverage.
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 mb-6">
            {[
              {
                n: "1",
                title: "Distribution List — Program Owners",
                desc: "Communication channel. Who to route the cleanup request through. Department DLs were reliable even when individual contacts weren't.",
                status: "Complete",
                statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
              },
              {
                n: "2",
                title: "-5 Admin Email — Account Provisioner",
                desc: "Decision maker. The person accountable for keep vs. delete. Present in most accounts but 190 were missing or stale.",
                status: "190 gaps",
                statusColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
              },
              {
                n: "3",
                title: "Active Users — CMU Check",
                desc: "Safety net. Confirmed who was actually using the account today. Used to recover proxy contacts for 108 of the 190 gap accounts.",
                status: "108 proxies found",
                statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
              },
            ].map((layer, i) => (
              <div key={layer.n} className={`flex items-center gap-4 p-5 bg-white dark:bg-zinc-900 ${i < 2 ? "border-b border-zinc-100 dark:border-zinc-800" : ""}`}>
                <span className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">{layer.n}</span>
                <div className="flex-1">
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{layer.title}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">{layer.desc}</p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${layer.statusColor}`}>{layer.status}</span>
              </div>
            ))}
          </div>

          {/* Key insight callout */}
          <div className="p-5 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
              <span className="font-bold">Key insight:</span> 190 accounts had no -5 admin email. By cross-referencing with active CMU user data,
              I recovered proxy contacts for 108 of them — reducing the true ownership gap from 190 to just 22 orphaned accounts.
              That is an 88% gap recovery rate through structured data triangulation.
            </p>
          </div>
        </section>

        {/* Data Analysis + Charts */}
        <section className="mb-16">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Solution · Part 2</span>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-2 mb-8">Data-Driven Categorization</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Instance breakdown */}
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-4">Accounts by Category</p>
              <InstanceBreakdownChart />
              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-2 gap-3">
                {[
                  { label: "Cleanup target", val: "223", color: "text-orange-600" },
                  { label: "Safely in use", val: "90", color: "text-emerald-600" },
                  { label: "No action needed", val: "91", color: "text-zinc-500" },
                  { label: "True orphans", val: "22", color: "text-red-600" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className={`text-xl font-black ${s.color}`}>{s.val}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ownership donut */}
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-4">Ownership Coverage</p>
              <OwnershipDonut />
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">81% of accounts</span> had a reachable contact before any outreach.
                  The remaining 19% (82 accounts) required escalation to department DLs and sign-off from program managers.
                </p>
              </div>
            </div>
          </div>

          {/* Department chart - full width */}
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-4">Accounts by Department</p>
            <DepartmentChart />
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-4">
              Three departments (Std Demo, Training, PS Demo) accounted for 87% of all instances.
              Std Demo alone held 147 — making it the highest-priority outreach target.
            </p>
          </div>
        </section>

        {/* Outreach Workflow */}
        <section className="mb-16">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Solution · Part 3</span>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-2 mb-3">Structured Outreach Workflow</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Rather than a mass email blast, I designed a 6-step cascading outreach with built-in safeguards
            to prevent business disruption while maintaining enough velocity to hit quarterly targets.
          </p>

          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 hidden md:block"/>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative z-10">
              {[
                { n: "01", label: "Segment by Department" },
                { n: "02", label: "Email via DL / Contact" },
                { n: "03", label: "Admin Cascades Down" },
                { n: "04", label: "Fill Gaps via Proxy" },
                { n: "05", label: "Track & Follow Up" },
                { n: "06", label: "Orphan Sign-off" },
              ].map((s, i) => (
                <div key={s.n} className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 ${
                    i < 2 ? "bg-blue-600" : i < 4 ? "bg-violet-600" : i === 4 ? "bg-orange-500" : "bg-emerald-600"
                  }`}>
                    {s.n}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { title: "Department-specific comms", desc: "Each of the 7 departments received a tailored sheet with their accounts only, categorized and pre-filled with usage data — reducing friction to a simple KEEP / DELETE response." },
              { title: "48-hour initial response SLA", desc: "First confirmations came back within 48 hours of outreach. The pre-segmented approach meant owners could respond immediately without needing to investigate." },
              { title: "Escalation paths for non-responders", desc: "Accounts with no response after 5 days were escalated to the DL owner. True orphans (22 accounts) went through program manager sign-off before any deletion action." },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2 text-sm">{item.title}</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">Execution Timeline</h2>
          <div className="relative pl-10">
            <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"/>
            {[
              {
                week: "Week 1",
                title: "Data Collection & Analysis",
                desc: "Consolidated 426 accounts from two SQL queries. Cross-referenced NetSuite feature flags with OCI infrastructure status. Identified 199 zero-activity active instances. Flagged one anomaly: a single account consuming 68% of all WAF traffic.",
              },
              {
                week: "Week 2",
                title: "Ownership Framework Design",
                desc: "Developed the three-layer ownership model. Mapped all 7 departments to distribution lists and contacts. Identified 190 admin email gaps and resolved 108 through the active user proxy methodology — reducing true orphans to 22.",
              },
              {
                week: "Week 3",
                title: "Outreach Execution",
                desc: "Sent department-specific sheets to all 7 groups with categorized accounts, pre-filled usage data, and a simple KEEP / DELETE response column. Received first confirmations within 48 hours.",
              },
              {
                week: "Weeks 4–6",
                title: "Response Tracking & Cleanup",
                desc: "Tracked KEEP/DELETE responses, followed up with non-responders, coordinated NSAW instance decommissioning for confirmed deletions. Zero business disruptions across all 245 flagged accounts.",
              },
            ].map((item, i) => (
              <div key={item.week} className="relative mb-8 last:mb-0">
                <div className={`absolute -left-10 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                  i === 3 ? "border-emerald-500 bg-emerald-50 text-emerald-600 dark:bg-emerald-950" : "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-950"
                }`}>{i + 1}</div>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">{item.week}</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Impact</h2>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { value: "~$800K–$1M", label: "Estimated annual OCI cost recovery", color: "from-blue-600 to-violet-600" },
              { value: "245", label: "Instances flagged and decommissioned", color: "from-orange-500 to-red-500" },
              { value: "0", label: "Business disruptions across all departments", color: "from-emerald-500 to-teal-500" },
            ].map((m) => (
              <div key={m.label} className="p-6 bg-zinc-900 dark:bg-zinc-800 rounded-2xl text-center">
                <p className={`text-3xl font-black bg-gradient-to-r ${m.color} bg-clip-text text-transparent mb-2`}>{m.value}</p>
                <p className="text-xs text-zinc-400 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">Anomaly discovered during analysis</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              One account was consuming <span className="font-bold text-orange-600 dark:text-orange-400">68% of all WAF traffic</span> across the entire Test Drive fleet —
              an outlier invisible in aggregated cost reports. Surfaced during per-account usage analysis and escalated separately for investigation.
              This kind of signal is only findable through granular, account-level audit work.
            </p>
          </div>
        </section>

        {/* PM Craft */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">PM Judgment on Display</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Pushed back on the easy path",
                desc: "The ask was a mass email and blanket deletion. I presented data showing that 50% of admin contacts were stale and that active business commitments existed within the flagged set. Structured approach won.",
              },
              {
                title: "Framework over one-time fix",
                desc: "The three-layer ownership model became the organizational standard for Test Drive lifecycle management — not just a cleanup spreadsheet. A repeatable process was the real deliverable.",
              },
              {
                title: "Data triangulation to close gaps",
                desc: "190 accounts had no admin contact. Rather than writing them off or escalating to leadership, I used active CMU user data as a proxy source — recovering 108 contacts through cross-referencing.",
              },
              {
                title: "Stakeholder navigation across 7 teams",
                desc: "Each department had different processes, contacts, and risk profiles. Department-specific communications reduced friction and got first responses back in 48 hours instead of weeks.",
              },
              {
                title: "Granular analysis surfaced invisible signals",
                desc: "Per-account WAF analysis found a single outlier consuming 68% of all traffic — a signal invisible in aggregate cost reports. Careful data work creates leverage beyond the stated goal.",
              },
              {
                title: "Velocity without recklessness",
                desc: "245 instances decommissioned across 7 departments, multiple outreach cycles, and zero business disruptions. Speed and safety are not a tradeoff when the process is designed correctly.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{item.title}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            ← All case studies
          </Link>
          <Link href="/case-studies/a1" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            ← A1: NSAW Simplification
          </Link>
        </div>
      </main>
    </div>
  );
}
