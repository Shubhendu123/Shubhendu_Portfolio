import Link from "next/link";

const phases = [
  {
    phase: "Phase 1",
    title: "Reduce Reconstruction",
    color: "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200",
    accent: "border-zinc-300 dark:border-zinc-600",
    items: ["Better categorization", "Better policy reasoning", "Better explanations"],
    outcome: "Less manual effort",
    outcomeColor: "text-zinc-600 dark:text-zinc-400",
  },
  {
    phase: "Phase 2",
    title: "Eliminate Routine Reconstruction",
    color: "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200",
    accent: "border-amber-300 dark:border-amber-700",
    items: ["Auto-file routine expenses", "Auto-generate documentation", "Auto-submit compliant reports"],
    outcome: "Most reports require no employee action",
    outcomeColor: "text-amber-700 dark:text-amber-300",
  },
  {
    phase: "Phase 3",
    title: "Exception-Only Workflows",
    color: "bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200",
    accent: "border-orange-300 dark:border-orange-700",
    items: ["Managers review exceptions only", "Finance reviews exceptions only"],
    outcome: "Humans govern uncertainty, not routine spend",
    outcomeColor: "text-orange-700 dark:text-orange-300",
  },
  {
    phase: "Phase 4",
    title: "Spend Intelligence",
    color: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200",
    accent: "border-emerald-300 dark:border-emerald-700",
    items: ["Predict policy violations", "Recommend policy changes", "Surface spend anomalies", "Highlight budget risks"],
    outcome: "Move from recording spend to influencing spend",
    outcomeColor: "text-emerald-700 dark:text-emerald-300",
  },
];

const personas = [
  {
    role: "Employee",
    label: "USES",
    job: "Submit expenses quickly and accurately.",
    frustration: "Expense reporting steals time from revenue-generating work.",
    metric: "Minutes spent on expenses.",
    bg: "bg-zinc-50 dark:bg-zinc-800",
    border: "border-zinc-200 dark:border-zinc-700",
  },
  {
    role: "Manager / Approver",
    label: "GOVERNS",
    job: "Review and approve spend efficiently.",
    frustration: "Reviewing low-risk expenses creates approval fatigue.",
    metric: "Exception rate.",
    bg: "bg-zinc-900 dark:bg-zinc-950",
    border: "border-zinc-700",
    dark: true,
  },
  {
    role: "Finance & Admin",
    label: "OWNS",
    job: "Control spend, enforce policy, and maintain audit readiness.",
    frustration: "Discovering policy violations after money has already been spent.",
    metric: "Policy leakage prevented.",
    bg: "bg-zinc-900 dark:bg-zinc-950",
    border: "border-zinc-700",
    dark: true,
  },
];

const moatLayers = [
  { label: "Global Compliance", sub: "Tax, audit & regulation across geographies" },
  { label: "ERP Integrations", sub: "Posts to the financial system of record" },
  { label: "Approval Workflows", sub: "Routing, delegation, governance" },
  { label: "Policy Engine", sub: "Rules, limits & per-diems enforced" },
  { label: "Spend Data", sub: "Every transaction, receipt & card feed" },
];

export default function ConcurTeardownPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            ← SV
          </Link>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">A6 / Product Teardown</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded">A6</span>
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded uppercase tracking-wide">Product Teardown</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-6">
            Concur Expense —<br />Product Teardown & Vision
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-10">
            Concur digitized expense reporting — but the economic burden never left. Processing still costs $58 per report.
            1 in 5 reports contains errors. Companies waste ~$500K a year just fixing them.
            The problem isn&apos;t the product — it&apos;s the workflow model. Here&apos;s the teardown and a 4-phase path to trusted autonomy.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="/concur-expense-teardown.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-semibold text-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              ↓ View Teardown Deck (PDF)
            </a>
            <a
              href="https://concur-expense.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-zinc-100 rounded-lg font-semibold text-sm hover:border-zinc-500 dark:hover:border-zinc-400 transition-colors"
            >
              ▶ Open Live Prototype
              <span className="text-[10px] font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 px-1.5 py-0.5 rounded">Vibe Coded</span>
            </a>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "92M", label: "Concur users globally" },
              { value: "$58", label: "Cost per expense report" },
              { value: "1 in 5", label: "Reports contain errors" },
              { value: "5 → 2", label: "Human steps eliminated" },
            ].map((m) => (
              <div key={m.label} className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{m.value}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Concur Actually Sells */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">What Concur Actually Sells</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-3xl">
            Customers aren&apos;t buying receipt capture — they&apos;re buying control. Expense reporting is merely the mechanism.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Spend Visibility", sub: "Every dollar, visible in real time" },
              { label: "Policy Enforcement", sub: "Rules applied automatically, up front" },
              { label: "Compliance", sub: "Audit-ready records by default" },
              { label: "Financial Control", sub: "Limits, approvals, and GL posting" },
            ].map((item) => (
              <div key={item.label} className="p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-center">
                <p className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">{item.label}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* The moat */}
          <div className="p-6 bg-zinc-900 dark:bg-zinc-800 rounded-2xl text-white">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">The Moat — 5 layers a challenger must replicate</p>
            <div className="space-y-2 mb-6">
              {moatLayers.map((layer) => (
                <div key={layer.label} className="flex items-center gap-4 p-3 bg-zinc-800 dark:bg-zinc-700 rounded-lg">
                  <p className="font-semibold text-zinc-100 w-48 shrink-0">{layer.label}</p>
                  <p className="text-sm text-zinc-400">{layer.sub}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-zinc-800/60 dark:bg-zinc-700/60 rounded-xl border border-zinc-700 dark:border-zinc-600">
              <p className="text-zinc-300 font-medium">Card-first challengers win on UX and automation.</p>
              <p className="text-white font-bold mt-0.5">Concur wins on enterprise compliance, global tax, and deep ERP integration.</p>
              <p className="text-zinc-400 text-sm mt-2">Each layer is years of data, integrations, and compliance work — not a feature a challenger ships in a quarter.</p>
            </div>
          </div>
        </section>

        {/* Three Users */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">One Report. Three Customers. Three Definitions of Success.</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-3xl">
            The strategic insight: Finance is the economic buyer, but employees are the primary users. Any strategy that improves employee UX without improving financial control will struggle to justify enterprise adoption.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {personas.map((p) => (
              <div key={p.role} className={`rounded-xl border p-6 ${p.bg} ${p.border}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${p.dark ? "text-zinc-400" : "text-zinc-500"}`}>{p.label}</p>
                <h3 className={`text-lg font-bold mb-4 ${p.dark ? "text-white" : "text-zinc-900"}`}>{p.role}</h3>

                <div className="space-y-3">
                  <div>
                    <p className={`text-[10px] font-semibold uppercase tracking-wide mb-1 ${p.dark ? "text-zinc-500" : "text-zinc-400"}`}>Core Job</p>
                    <p className={`text-sm leading-snug ${p.dark ? "text-zinc-300" : "text-zinc-600"}`}>{p.job}</p>
                  </div>
                  <div>
                    <p className={`text-[10px] font-semibold uppercase tracking-wide mb-1 ${p.dark ? "text-zinc-500" : "text-zinc-400"}`}>Biggest Frustration</p>
                    <p className={`text-sm leading-snug ${p.dark ? "text-zinc-300" : "text-zinc-600"}`}>{p.frustration}</p>
                  </div>
                  <div className="pt-2 border-t border-zinc-200 dark:border-zinc-700">
                    <p className={`text-[10px] font-semibold uppercase tracking-wide mb-0.5 ${p.dark ? "text-zinc-500" : "text-zinc-400"}`}>Success Metric</p>
                    <p className={`text-sm font-bold ${p.dark ? "text-amber-300" : "text-zinc-900"}`}>{p.metric}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost of the Status Quo */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">The Cost of the Status Quo</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-3xl">
            Every expense report is a quiet tax on the business. Concur digitized the workflow — the economic burden never left.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { value: "~20 min", label: "Manual reconstruction per report", sub: "Reassembling data Concur already has" },
              { value: "1 in 5", label: "Reports contain errors", sub: "Each adds $52 & 18 min of rework" },
              { value: "$58", label: "Processing cost per report", sub: "vs. under $10 with automation" },
              { value: "~$500K", label: "Enterprise waste per year", sub: "Just fixing errors — per company" },
            ].map((m) => (
              <div key={m.label} className="p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">{m.value}</p>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1 leading-snug">{m.label}</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 leading-snug">{m.sub}</p>
              </div>
            ))}
          </div>

          <div className="p-5 bg-zinc-900 dark:bg-zinc-800 rounded-xl text-white">
            <p className="font-bold text-white mb-1">Automation does the same work for under $10 a report.</p>
            <p className="text-zinc-300 text-sm">The waste is a choice, not a constant.</p>
            <p className="text-zinc-500 text-xs mt-2">Source: GBTA Foundation — "Expense Reporting: Global Practices and Pain Points"</p>
          </div>
        </section>

        {/* The Reconstruction Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Expense Reporting Is Still Reconstruction Work</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-3xl">
            The friction isn&apos;t isolated — it appears at every stage. If Concur already knows the transaction, receipt, travel context, and policy — why is the employee still doing the reconstruction?
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-6">
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">What Concur Already Knows</p>
              <ul className="space-y-2">
                {["Card transaction", "Receipt", "Travel booking", "Policy"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-zinc-900 dark:bg-zinc-800 rounded-xl border border-zinc-700">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-3">Yet Humans Still</p>
              <ul className="space-y-2">
                {["Categorize", "Justify", "Reconstruct", "Submit"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-200">
                    <span className="w-4 h-4 rounded-full bg-amber-900/40 text-amber-300 flex items-center justify-center text-[10px] font-bold shrink-0">↻</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Workflow Evidence</p>
              <ul className="space-y-2">
                {[
                  { step: "Capture", issue: "Receipts fail to sync" },
                  { step: "Categorize", issue: "Auto-fill requires correction" },
                  { step: "Submit", issue: "Re-entry still required" },
                  { step: "Approve", issue: "Approvals stall" },
                  { step: "Reimburse", issue: "Slow processing" },
                ].map((row) => (
                  <li key={row.step} className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 rounded-full bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✗</span>
                    <span>
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">{row.step} </span>
                      <span className="text-zinc-500">{row.issue}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-5 bg-zinc-900 dark:bg-zinc-800 rounded-xl text-white">
            <p className="text-zinc-400 text-xs mb-1">The problem is systemic</p>
            <p className="font-bold text-lg">Not one broken feature — human effort embedded throughout the workflow.</p>
          </div>
        </section>

        {/* 4-Phase Roadmap */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">From Reconstruction to Trusted Autonomy</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-3xl">
            Concur&apos;s evolution is not AI for expense reports. It is the gradual removal of expense reporting as a task. Human steps: 5 → 2.
          </p>

          {/* Before / After */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="p-6 bg-zinc-900 dark:bg-zinc-800 rounded-xl">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Current — Every step is the human&apos;s</p>
              <ol className="space-y-2">
                {[
                  "Employee collects receipts",
                  "Employee creates the report",
                  "Employee submits",
                  "Manager reviews",
                  "Finance audits",
                ].map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="w-5 h-5 rounded-full bg-zinc-700 text-zinc-300 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Future — Concur does the work; humans handle exceptions</p>
              <ol className="space-y-2">
                {[
                  { step: "Spend occurs", human: false },
                  { step: "Concur understands context", human: false },
                  { step: "Concur assembles the report", human: false },
                  { step: "Manager reviews exceptions", human: true },
                  { step: "Finance receives a trusted record", human: true },
                ].map((item, i) => (
                  <li key={item.step} className="flex items-center gap-3 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${item.human ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400" : "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300"}`}>{i + 1}</span>
                    <span className={item.human ? "text-zinc-500" : "text-zinc-900 dark:text-zinc-100 font-medium"}>{item.step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Human steps</p>
                <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">5 → 2</p>
                <p className="text-xs text-zinc-500 mt-0.5">The employee&apos;s three steps disappear.</p>
              </div>
            </div>
          </div>

          {/* Phase cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((p) => (
              <div key={p.phase} className={`p-5 bg-white dark:bg-zinc-900 rounded-xl border ${p.accent}`}>
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-3 ${p.color}`}>
                  {p.phase}
                </span>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm mb-3 leading-snug">{p.title}</h3>
                <ul className="space-y-1 mb-4">
                  {p.items.map((item) => (
                    <li key={item} className="text-xs text-zinc-500 dark:text-zinc-400 flex gap-1.5">
                      <span className="shrink-0 mt-0.5">·</span>{item}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wide mb-0.5">Outcome</p>
                  <p className={`text-xs font-semibold leading-snug ${p.outcomeColor}`}>{p.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Prototype */}
        <section className="mb-16">
          <div className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-amber-300 bg-amber-900/40 border border-amber-700 px-2 py-0.5 rounded uppercase tracking-wide">Vibe Coded</span>
              <span className="text-xs text-zinc-400">Next.js · Tailwind · Vercel</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">The Live Prototype</h3>
            <p className="text-zinc-300 text-base leading-relaxed mb-2 max-w-2xl">
              To bring Phase 2–3 of the roadmap to life, I built a clickable prototype of the &quot;Trusted Autonomy&quot; future state — a finance manager dashboard showing 93% of expense reports auto-filed, with AI confidence scores and exception-only human review.
            </p>
            <p className="text-zinc-400 text-sm mb-6">39 of 42 reports auto-filed · 18.4 hours saved · 3 exceptions routed for human review</p>
            <a
              href="https://concur-expense.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-lg font-semibold text-sm hover:bg-zinc-100 transition-colors"
            >
              ▶ Open Live Prototype →
            </a>
          </div>
        </section>

        {/* PM Craft */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">PM Judgment on Display</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Economic buyer vs. primary user",
                desc: "Finance owns the budget; employees do the work. Every product decision in the teardown runs this dual lens — what improves employee UX must also strengthen financial control, or it won't earn enterprise adoption.",
              },
              {
                title: "The moat isn't the features",
                desc: "Card-first challengers (Navan, Ramp, Brex) can match individual features. What they can't replicate in a quarter: 5 stacked layers of global compliance, ERP integrations, and institutional spend data. The moat is depth, not breadth.",
              },
              {
                title: "Systemic framing over feature lists",
                desc: "The reconstruction problem isn't one broken screen — it's human effort embedded in every stage of a workflow Concur already has the data to eliminate. Framing it systemically turns a backlog into a product strategy.",
              },
              {
                title: "Roadmap sequenced by trust, not tech",
                desc: "Phase 1 reduces effort; Phase 2 eliminates routine work; Phase 3 routes exceptions only; Phase 4 predicts violations before they happen. Each phase requires the trust foundation of the previous one.",
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
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center flex-wrap gap-4">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            ← All case studies
          </Link>
          <div className="flex gap-4">
            <a
              href="/concur-expense-teardown.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              ↓ Teardown Deck
            </a>
            <a
              href="https://concur-expense.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              ▶ Live Prototype →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
