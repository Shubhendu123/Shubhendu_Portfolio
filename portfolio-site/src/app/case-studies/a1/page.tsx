import Link from "next/link";
import CaseStudyGate from "@/components/CaseStudyGate";

const journeys = [
  {
    id: 1,
    priority: "P0",
    priorityColor: "red",
    title: "Instance Provisioning & Setup",
    problem:
      "Customers clicked Enable NSAW and nothing happened — the instance failed to create silently. Over 100 setup failures traced to hidden prerequisites (inactive DWI role, missing billing provisioning, unsupported characters in company names) with no validation at point of action. In two separate cases, customers permanently lost their entire NSAW instance and all historical data after performing a routine disable/re-enable toggle — a destructive action presented as a benign switch, with no warning and no recovery path.",
    rootCause:
      "Multiple hidden prerequisites must be met before NSAW can be enabled, but there is no validation at the point of action. The system fails silently in the backend. The disable/re-enable flow is destructive with no guard.",
    gap: "No pre-flight validation before the Enable button is clickable. No inline error messaging. No confirmation dialog with data-loss warning. No soft disable. No recovery path.",
    pattern: "System doesn't validate before acting and doesn't explain when it fails.",
  },
  {
    id: 2,
    priority: "P0",
    priorityColor: "red",
    title: "User Management & Role Provisioning",
    problem:
      "Admins couldn't log into their own instance after re-provisioning — the new instance didn't inherit admin mappings. Deleting a departed employee from NSAW was officially unsupported; customers were told to file a ticket. Setting up a new user required navigating three separate systems (NetSuite, NSAW, OAC) with three independent role models and no unified interface. One customer accumulated six support cases on user configuration alone before churning.",
    rootCause:
      "Each system (NS, NSAW, OAC) has its own identity and role model. One-way sync from NetSuite means deletion doesn't cascade. Re-provisioning creates a new instance that doesn't inherit admin mappings.",
    gap: "No single-pane user management. No role inheritance NS → NSAW → OAC. No user deletion. No bi-directional sync. No self-service admin recovery.",
    pattern: "User management requires expertise across 3 products. Basic operations are broken or unsupported.",
  },
  {
    id: 3,
    priority: "P0",
    priorityColor: "red",
    title: "Pipeline Health Monitoring",
    problem:
      "Pipelines failed silently. Customers discovered stale data days or weeks after the fact — in one case, a business-critical environment ran on two-week-old data before anyone noticed. No proactive alerts existed. Pipeline status was buried in a separate portal that most customers never visited. Support tickets bounced between NetSuite, NSAW, and OAC teams with no single owner.",
    rootCause:
      "No customer-facing notification system. Status page exists in a separate portal most customers never visit. Pipeline spans 3 systems with no unified health ownership.",
    gap: "No proactive alerting. No pipeline status inside NetSuite. No data freshness timestamp on dashboards. No sync history. No unified triage framework.",
    pattern: "Blind to pipeline status. Failures silent, diagnosis impossible, escalation ping-pongs.",
  },
  {
    id: 4,
    priority: "P0",
    priorityColor: "red",
    title: "Data Transforms & Connector Configuration",
    problem:
      "Three connector types, three different UIs, and documentation scattered across four or more sites. OAuth tokens expired every 24 hours with no auto-refresh, requiring manual intervention every cycle. In one pattern, the wrong connector type was sold during pre-sales because no compatibility matrix existed — discovered only when Professional Services tried to implement it. A senior PM described the experience directly: Findability. We are struggling. Two PMs are struggling.",
    rootCause:
      "Connectors evolved across 3 teams with no unified view. No auto token refresh. No compatibility matrix. Sales doesn't know version constraints.",
    gap: "No unified catalog. No decision guide. No single UI. No compatibility matrix. No auto-refresh. No retry logic for token expiry.",
    pattern: "3 types × 3 UIs × 4+ doc sites = can't find, choose, configure, or maintain connectors.",
  },
  {
    id: 5,
    priority: "P1",
    priorityColor: "orange",
    title: "Data Availability — Where's My Data?",
    problem:
      "After enablement, customers had no progress indicator, no ETA, and no notification when the initial data load completed. Many expected full NetSuite data parity — never told during setup that only a subset of functional areas would be available. The question Where is my data? became one of the most common first-week support triggers.",
    rootCause:
      "Initial load is backend-only with no progress or ETA visible. Functional area implications are not communicated during setup.",
    gap: "No progress bar. No ETA. No data-ready notification. No data coverage preview. No included/excluded mapping.",
    pattern: "Working blind — don't know what data they have, when it arrived, or what's missing.",
  },
  {
    id: 6,
    priority: "P1",
    priorityColor: "orange",
    title: "Custom Attribute Mapping (CAM)",
    problem:
      "Mapping custom fields was a trial-and-error loop: configure, wait for pipeline refresh (hours to overnight), check, discover the failure, repeat. In one high-profile case, a product update silently halved the character limit on mapped fields (8,000 → 4,000 characters), breaking existing configurations with no advance notice and no migration path offered.",
    rootCause:
      "Type mismatches and naming conflicts cause silent failures. Docs list supported types generically, not per customer schema. Breaking changes deployed without proactive communication.",
    gap: "No config validation. No data preview before refresh. No dynamic eligible-fields list. No impact preview for feature updates. No migration paths for breaking changes.",
    pattern: "High-value feature with trial-and-error experience — map, wait, check, fix, repeat.",
  },
  {
    id: 7,
    priority: "P1",
    priorityColor: "orange",
    title: "OAC Report Building & Visualization",
    problem:
      "To see their first chart, mid-market customers had to learn Oracle Analytics Cloud — a separate enterprise product with its own navigation, terminology, and semantic data model. NetSuite users think in saved searches and records; OAC requires understanding star schemas and subject areas. No translation layer, no guided path, no starter templates.",
    rootCause:
      "OAC has its own learning curve, terminology, and navigation — entirely separate from NetSuite. No simplified report builder in NS. NS users think in records; OAC uses a semantic model.",
    gap: "No simplified report builder in NetSuite. No guided path to insight. No NS → NSAW concept translation. No starter templates.",
    pattern: "Last mile to insight requires leaving NS and learning a new product.",
  },
  {
    id: 8,
    priority: "P1",
    priorityColor: "orange",
    title: "Sandbox Instance Management",
    problem:
      "Customers who purchased a sandbox environment waited over a month for access due to manual handoffs in the provisioning workflow. When the sandbox finally came online, it didn't mirror production configuration — making it unreliable for safe testing. The sandbox itself became a recurring source of escalations.",
    rootCause:
      "Separate provisioning workflow with handoff gaps. Provisioned independently from production with no config sync.",
    gap: "No self-service provisioning. No status visibility. No SLA. No config cloning. No sandbox-specific docs.",
    pattern: "Sandbox — meant for safe testing — is itself a source of escalations.",
  },
  {
    id: 9,
    priority: "P2",
    priorityColor: "blue",
    title: "Third-Party Connector Integration",
    problem:
      "Connector limitations weren't disclosed during sales — discovered during implementation. At least one customer churned to a competing ETL tool after months of failed integration attempts. Documentation showed where to enter credentials but not how to obtain them from the source system.",
    rootCause:
      "Connector ecosystem fragmented vs. dedicated ETL tools. Docs written from NSAW perspective only — source-side setup left to the customer.",
    gap: "No roadmap visibility. No extensibility. No end-to-end guides covering source + NSAW setup.",
    pattern: "Connectors sold as a feature, delivered as: figure it out yourself.",
  },
  {
    id: 10,
    priority: "P2",
    priorityColor: "blue",
    title: "Storage Management & Capacity Planning",
    problem:
      "When one customer hit the 5TB storage ceiling, every pipeline stopped. No warning had been given. Emergency capacity provisioning required manual coordination across PM, Provisioning, and OCI infrastructure teams and took days. A fleet audit revealed 12+ customers already operating above safe thresholds.",
    rootCause:
      "No monitoring or alerts. Zero visibility into usage vs. entitlement. Emergency allocation is a fully manual process.",
    gap: "No storage tile. No threshold alerts. No self-service. No automated scaling. No SLA for emergency allocation.",
    pattern: "Low frequency, catastrophic impact — everything stops and recovery is slow.",
  },
  {
    id: 11,
    priority: "P2",
    priorityColor: "blue",
    title: "SSO & Identity Management",
    problem:
      "Misconfigured SSO locked all users out of an instance with no rollback path and no test mode. Unsupported identity providers were discovered post-purchase, after implementation had already begun. One customer accumulated 12 SSO-related support cases over several months.",
    rootCause:
      "IDCS is a separate product. Misconfiguration locks all users with no rollback. Supported IDP list buried in docs with no pre-sales validation.",
    gap: "No validation before activation. No test mode. No rollback. No IDP compatibility checker. No fallback auth method.",
    pattern: "High-stakes config with no safety net — no test, no rollback, no validation.",
  },
  {
    id: 12,
    priority: "P2",
    priorityColor: "blue",
    title: "Documentation & Self-Service Support",
    problem:
      "Six or more separate documentation sites existed, each organized by product rather than by customer task. Content was written for experienced analytics professionals, not mid-market operators. Customers who followed the documentation and still failed had no escalation path other than opening a support ticket.",
    rootCause:
      "Docs owned by product team, organized by product, not by task. Written for enterprise admins. No progressive disclosure.",
    gap: "No journey-based docs. No single entry point. No getting-started wizard. No contextual help. No skill-level paths.",
    pattern: "Documentation exists but is unfindable, fragmented, and assumes expertise.",
  },
];

const rootCauses = [
  {
    label: "I didn't know",
    description: "Prerequisite, limitation, or step not documented or surfaced",
    journeys: "1, 4, 5, 6, 8, 9, 11, 12",
    gap: "No pre-flight validation. No progressive disclosure. No journey-based docs.",
    color: "red",
  },
  {
    label: "I can't see",
    description: "No visibility into status, health, or progress",
    journeys: "3, 5, 8, 10",
    gap: "No proactive alerts. No status dashboards in NetSuite. No monitoring.",
    color: "amber",
  },
  {
    label: "I'm stuck",
    description: "Error with no forward path, bounced between NS / NSAW / OAC teams",
    journeys: "2, 3, 4, 7, 11",
    gap: "No unified triage. No self-service recovery. No single-pane management.",
    color: "blue",
  },
];

const funnelStages = [
  { label: "Enable & Provision", pct: 100, drop: 25, color: "#3b82f6", journey: "J1 · Instance Provisioning", badge: "P0" },
  { label: "Instance Created", pct: 75, drop: 12, color: "#6366f1", journey: "J2 · User Management", badge: "P0" },
  { label: "Users Provisioned", pct: 63, drop: 14, color: "#7c3aed", journey: "J3 · Pipeline Health", badge: "P0" },
  { label: "Pipeline Running", pct: 49, drop: 11, color: "#b45309", journey: "J4–J5 · Data & Transforms", badge: "P0/P1" },
  { label: "Data Available", pct: 38, drop: 11, color: "#c2410c", journey: "J7 · OAC Report Building", badge: "P1" },
  { label: "Reports Built", pct: 27, drop: 9, color: "#dc2626", journey: "J9–J11 · Connectors / SSO / Storage", badge: "P2" },
  { label: "Value Realized", pct: 18, drop: 0, color: "#059669", journey: "", badge: "" },
];

// Badge colors — two sets for light / dark (SVG can't use Tailwind media queries so we use a
// data-scheme trick: the SVG itself is inside a card that flips colour via prefers-color-scheme,
// but SVG fill attributes don't inherit CSS variables out of the box.  We use a single neutral
// palette that is readable against BOTH white and zinc-900 backgrounds.
function badgeColors(badge: string): { fill: string; text: string } {
  if (badge.startsWith("P0")) return { fill: "#fee2e2", text: "#b91c1c" }; // red-100 / red-700
  if (badge === "P1")         return { fill: "#ffedd5", text: "#c2410c" }; // orange-100 / orange-700
  if (badge === "P2")         return { fill: "#dbeafe", text: "#1d4ed8" }; // blue-100 / blue-700
  return { fill: "#f4f4f5", text: "#52525b" };
}

function CustomerFunnel() {
  const cx = 270;
  const maxW = 480;
  const sh = 58;
  const svgH = funnelStages.length * sh + 28;
  const annotX = cx + maxW / 2 + 22;

  const edges = (pct: number) => {
    const w = (pct / 100) * maxW;
    return { l: cx - w / 2, r: cx + w / 2, w };
  };

  return (
    <svg viewBox={`0 0 820 ${svgH}`} className="w-full" role="img" aria-label="Customer funnel showing drop-off by stage">
      {/* Dark backdrop for funnel */}
      <rect x={cx - maxW / 2 - 12} y={0} width={maxW + 24} height={svgH - 20} rx="12" fill="#18181b"/>

      {funnelStages.map((s, i) => {
        const y = i * sh;
        const midY = y + sh / 2;
        const curr = edges(s.pct);
        const next = edges(i < funnelStages.length - 1 ? funnelStages[i + 1].pct : s.pct);
        const isLast = i === funnelStages.length - 1;

        return (
          <g key={s.label}>
            {/* Leak zones — red glow on sides */}
            {!isLast && (
              <>
                <polygon
                  points={`${cx - maxW / 2},${y} ${curr.l},${y} ${next.l},${y + sh} ${cx - maxW / 2},${y + sh}`}
                  fill="#ef4444" opacity="0.18"
                />
                <polygon
                  points={`${curr.r},${y} ${cx + maxW / 2},${y} ${cx + maxW / 2},${y + sh} ${next.r},${y + sh}`}
                  fill="#ef4444" opacity="0.18"
                />
              </>
            )}

            {/* Main funnel shape */}
            {isLast ? (
              <rect x={curr.l} y={y + 6} width={curr.w} height={sh - 12} rx="8" fill={s.color}/>
            ) : (
              <polygon
                points={`${curr.l},${y + 2} ${curr.r},${y + 2} ${next.r},${y + sh - 2} ${next.l},${y + sh - 2}`}
                fill={s.color}
                opacity="0.92"
              />
            )}

            {/* Stage label + % inside the shape */}
            <text x={cx} y={midY - 7} textAnchor="middle" fill="white" fontSize="10" fontWeight="600" opacity="0.85">
              {s.label}
            </text>
            <text x={cx} y={midY + 10} textAnchor="middle" fill="white" fontSize="15" fontWeight="800">
              {s.pct}%
            </text>

            {/* Drip dots on sides at transition points */}
            {!isLast && (
              <>
                <circle cx={next.l - 6} cy={y + sh} r="3" fill="#ef4444" opacity="0.6"/>
                <circle cx={next.l - 14} cy={y + sh + 6} r="2" fill="#ef4444" opacity="0.35"/>
                <circle cx={next.r + 6} cy={y + sh} r="3" fill="#ef4444" opacity="0.6"/>
                <circle cx={next.r + 14} cy={y + sh + 6} r="2" fill="#ef4444" opacity="0.35"/>
              </>
            )}

            {/* Right-side annotation */}
            {!isLast && (
              <>
                <line x1={curr.r + 2} y1={midY} x2={annotX - 6} y2={midY} stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
                <text x={annotX} y={midY - 6} fill="#ef4444" fontSize="13" fontWeight="800">
                  -{s.drop}% leak
                </text>
                <text x={annotX} y={midY + 10} className="fill-zinc-400 dark:fill-zinc-500" fontSize="10">
                  {s.journey}
                </text>
                {s.badge && (() => {
                  const bc = badgeColors(s.badge);
                  return (
                    <>
                      <rect x={annotX} y={midY + 16} width={s.badge.length * 7 + 8} height={14} rx="3" fill={bc.fill} opacity="0.85"/>
                      <text x={annotX + s.badge.length * 3.5 + 4} y={midY + 26} textAnchor="middle" fill={bc.text} fontSize="9" fontWeight="700">
                        {s.badge}
                      </text>
                    </>
                  );
                })()}
              </>
            )}

            {/* Final stage annotation */}
            {isLast && (
              <>
                <line x1={curr.r + 2} y1={midY} x2={annotX - 6} y2={midY} stroke="#059669" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
                <text x={annotX} y={midY - 4} fill="#059669" fontSize="13" fontWeight="800">
                  Value Realized
                </text>
                <text x={annotX} y={midY + 12} className="fill-zinc-400 dark:fill-zinc-500" fontSize="10">
                  Goal: 100%
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Bottom note */}
      <text x={cx} y={svgH - 4} textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400" fontSize="9">
        Illustrative — derived from 400+ escalation patterns over 24 months
      </text>
    </svg>
  );
}

const leakBars = [
  { stage: "Enable & Provision", drop: 25, badge: "P0", color: "bg-blue-500" },
  { stage: "Users Provisioned", drop: 14, badge: "P0", color: "bg-violet-500" },
  { stage: "Pipeline Running", drop: 12, badge: "P0", color: "bg-indigo-500" },
  { stage: "Data Available", drop: 11, badge: "P0/P1", color: "bg-amber-500" },
  { stage: "Reports Built", drop: 11, badge: "P1", color: "bg-orange-500" },
  { stage: "Connectors / SSO", drop: 9, badge: "P2", color: "bg-red-500" },
];

const priorityBadge = (p: string) => {
  if (p === "P0") return "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300";
  if (p === "P1") return "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300";
  return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";
};

const borderAccent = (p: string) => {
  if (p === "P0") return "border-l-red-500";
  if (p === "P1") return "border-l-orange-400";
  return "border-l-blue-400";
};

export default function NSAWSimplificationCaseStudyPage() {
  return (
    <CaseStudyGate>
      <NSAWSimplificationCaseStudy />
    </CaseStudyGate>
  );
}

function NSAWSimplificationCaseStudy() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            ← SV
          </Link>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">A1 / Case Study</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded">A1</span>
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">Oracle NetSuite · Principal PM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-6">
            NSAW Simplification<br />Initiative
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-10">
            NetSuite Analytics Warehouse was powerful — but mid-market customers couldn't operate it independently.
            I analyzed 400+ escalations over two years, identified 12 critical friction points across the product, and
            built a prioritized roadmap to let customers ride without training wheels.
          </p>

          {/* Metrics bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "400+", label: "Escalations analyzed" },
              { value: "2 yrs", label: "Data window" },
              { value: "12", label: "Journeys identified" },
              { value: "3", label: "Root cause themes" },
            ].map((m) => (
              <div key={m.label} className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{m.value}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">The Challenge</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-4">
              NSAW (NetSuite Analytics Warehouse) was designed for enterprise customers — configurable, powerful, and
              backed by a full Professional Services engagement. But the product's fastest-growing segment was
              mid-market: smaller companies with limited IT bandwidth, no dedicated analytics team, and the expectation
              that the product would work without ongoing expert help.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-4">
              The gap between what the product required and what mid-market operators could manage independently generated
              a sustained escalation crisis over two years. Customers needed to bring back their implementation partner
              or Professional Services for even routine changes. The business cost: at-risk renewals, escalating support
              spend, and churn to competing tools.
            </p>
          </div>

          {/* Escalation breakdown */}
          <div className="mt-8 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide mb-4">Escalation Volume by Category</h3>
            <div className="space-y-3">
              {[
                { cat: "Pipeline failures", pct: 21, n: "~85 cases" },
                { cat: "Data Transforms / Connectors", pct: 20, n: "~80 cases" },
                { cat: "NetSuite provisioning & setup", pct: 14, n: "~55 cases" },
                { cat: "ADW / Data discrepancies", pct: 9, n: "~36 cases" },
                { cat: "OAC reporting issues", pct: 7, n: "~28 cases" },
                { cat: "User access / identity", pct: 7, n: "~28 cases" },
                { cat: "Initial setup failures (separate audit)", pct: 22, n: "~100+ cases" },
              ].map((row) => (
                <div key={row.cat} className="flex items-center gap-3">
                  <div className="w-48 text-sm text-zinc-600 dark:text-zinc-400 shrink-0">{row.cat}</div>
                  <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <div className="text-xs text-zinc-500 w-24 text-right shrink-0">{row.n}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEAKY BUCKET ── */}
        <section className="mb-16">
          <div className="flex items-end gap-3 mb-2">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">The Leaky Bucket Problem</h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-3xl">
            Each stage of the NSAW customer journey has a hole. Customers leak out silently — not because the product lacks features,
            but because friction at every handoff prevents them from reaching the next step independently.
            Only <span className="font-bold text-red-600 dark:text-red-400">18% of customers</span> who purchase NSAW reach full, independent value realization.
          </p>

          {/* Stat highlights */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { value: "82%", label: "of customers hit at least one critical blocker", color: "text-red-600 dark:text-red-400" },
              { value: "6", label: "distinct stages where customers leak out before value", color: "text-orange-600 dark:text-orange-400" },
              { value: "18%", label: "reach full independent value — the bucket empties fast", color: "text-emerald-600 dark:text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-center">
                <p className={`text-3xl font-black mb-1 ${s.color}`}>{s.value}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Funnel + leak bars side by side */}
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* SVG Funnel */}
            <div className="md:col-span-3 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-4">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3 text-center">Customer Journey — Drop-off by Stage</p>
              <CustomerFunnel />
            </div>

            {/* Leak rate bars */}
            <div className="md:col-span-2 flex flex-col justify-center gap-1">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Leak Rate per Stage</p>
              {leakBars.map((b) => (
                <div key={b.stage} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-tight">{b.stage}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                        b.badge.startsWith("P0") ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
                        : b.badge === "P1" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                      }`}>{b.badge}</span>
                      <span className="text-xs font-bold text-red-600 dark:text-red-400 w-8 text-right">-{b.drop}%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className={`h-full ${b.color} rounded-full transition-all`} style={{ width: `${(b.drop / 25) * 100}%` }}/>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-800">
                <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Total customer loss</p>
                <p className="text-3xl font-black text-red-600 dark:text-red-400">−82%</p>
                <p className="text-xs text-red-600/70 dark:text-red-400/70 mt-1 leading-snug">
                  before reaching independent value realization
                </p>
              </div>

              <div className="mt-3 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1">If we fix P0 journeys alone</p>
                <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">+51pp</p>
                <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70 mt-1 leading-snug">
                  more customers reach the pipeline-running stage
                </p>
              </div>
            </div>
          </div>

          {/* The bucket metaphor breakdown */}
          <div className="mt-8 p-6 bg-zinc-900 dark:bg-zinc-800 rounded-2xl text-white">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Where the bucket leaks — mapped to the 3 root causes</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  theme: "I didn't know",
                  color: "text-red-300",
                  border: "border-red-500/40",
                  bg: "bg-red-500/10",
                  stages: ["Enable & Provision (hidden prereqs)", "Pipeline Running (silent failures)", "Data Available (no ETA shown)"],
                  leak: "39% of total leak",
                },
                {
                  theme: "I can't see",
                  color: "text-amber-300",
                  border: "border-amber-500/40",
                  bg: "bg-amber-500/10",
                  stages: ["Pipeline Running (no status in NS)", "Data Available (no freshness)", "Storage (no usage tile)"],
                  leak: "25% of total leak",
                },
                {
                  theme: "I'm stuck",
                  color: "text-blue-300",
                  border: "border-blue-500/40",
                  bg: "bg-blue-500/10",
                  stages: ["Users Provisioned (3 systems)", "Reports Built (OAC learning curve)", "SSO config (no rollback)"],
                  leak: "36% of total leak",
                },
              ].map((t) => (
                <div key={t.theme} className={`p-4 rounded-xl border ${t.border} ${t.bg}`}>
                  <p className={`text-sm font-bold mb-3 ${t.color}`}>{t.theme}</p>
                  <ul className="space-y-1.5 mb-3">
                    {t.stages.map((s) => (
                      <li key={s} className="text-xs text-zinc-400 flex gap-2">
                        <span className="text-zinc-600 shrink-0">→</span>{s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-semibold text-zinc-300">{t.leak}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Framework */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">The Framework</h2>
          <div className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4">The Unifying Metaphor</p>
            <h3 className="text-2xl font-bold mb-4 relative z-10">"Bicycle with Training Wheels"</h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6 relative z-10 max-w-3xl">
              The customer is the bicycle. The implementation partner and Professional Services team are the training wheels.
              Training wheels help during learning — but when even routine changes require putting them back on, it creates
              ongoing cost, delays, and frustration.
            </p>
            <p className="text-blue-300 font-semibold text-lg relative z-10">
              Our goal: let customers ride independently.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-4 relative z-10">
              {[
                { label: "Enterprise today", desc: "Feature-rich, highly configurable, requires expert setup" },
                { label: "Mid-market reality", desc: "Limited IT bandwidth, wants fast onboarding, no dedicated analytics team" },
                { label: "Target state", desc: "Guided workflows, self-service recovery, no partner dependency for routine tasks" },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white/10 rounded-xl">
                  <p className="text-sm font-semibold text-zinc-200 mb-1">{item.label}</p>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">What I Did</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                step: "01",
                title: "Escalation Mining",
                desc: "Pulled and structured 400+ support cases across 11 data categories spanning two years. Normalized customer language into product-level failure patterns.",
              },
              {
                step: "02",
                title: "Journey Mapping",
                desc: "Mapped every escalation pattern to the customer journey where the friction occurred. Identified 12 distinct journeys as the unit of simplification.",
              },
              {
                step: "03",
                title: "Problem → Root Cause → Gap",
                desc: "For each journey: documented what customers experienced, diagnosed why it happened technically, and specified exactly what was missing in the product.",
              },
              {
                step: "04",
                title: "Cross-Cutting Synthesis",
                desc: "Identified 3 systemic root cause themes cutting across all 12 journeys — turned 12 separate bug reports into a coherent product strategy.",
              },
              {
                step: "05",
                title: "Priority Matrix",
                desc: "Scored each journey across escalation frequency, mid-market revenue impact, and engineering complexity. Produced a defensible P0/P1/P2 sequencing.",
              },
              {
                step: "06",
                title: "Phased Roadmap",
                desc: "Defined Phase 1 quick wins (high ROI, low complexity) and Phase 2 platform investments. Aligned roadmap across 3 product teams (NS, NSAW, OAC).",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <span className="text-2xl font-bold text-zinc-200 dark:text-zinc-700 shrink-0">{item.step}</span>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 12 Journeys */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">The 12 Customer Journeys</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">Each entry: what customers experienced → why it happened → what was missing</p>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 rounded font-medium">P0 Critical</span>
              <span className="px-2 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 rounded font-medium">P1 High</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded font-medium">P2 Systemic</span>
            </div>
          </div>

          <div className="space-y-5">
            {journeys.map((j) => (
              <div
                key={j.id}
                className={`bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 border-l-4 ${borderAccent(j.priority)} overflow-hidden`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-zinc-400 w-5">{j.id}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${priorityBadge(j.priority)}`}>
                      {j.priority}
                    </span>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{j.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">Customer Experience</p>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{j.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">Root Cause</p>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{j.rootCause}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">Product Gap</p>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{j.gap}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <p className="text-xs text-zinc-400 dark:text-zinc-500">
                      <span className="font-semibold">Pattern:</span> {j.pattern}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 Root Causes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Three Root Causes Behind All 12 Journeys</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8">
            Rather than treating each journey as isolated, I surfaced three systemic failure patterns that made 12
            separate problems into one coherent product strategy.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {rootCauses.map((rc) => {
              const colors = {
                red: "border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/30",
                amber: "border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30",
                blue: "border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30",
              }[rc.color];
              const labelColors = {
                red: "text-red-700 dark:text-red-300",
                amber: "text-amber-700 dark:text-amber-300",
                blue: "text-blue-700 dark:text-blue-300",
              }[rc.color];
              return (
                <div key={rc.label} className={`p-6 rounded-xl border ${colors}`}>
                  <p className={`text-xl font-bold mb-2 ${labelColors}`}>{rc.label}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{rc.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1">Journeys Affected</p>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">{rc.journeys}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1">Systemic Gap</p>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">{rc.gap}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">The Roadmap</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phase 1 */}
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Phase 1 — Quick Wins</h3>
              </div>
              <p className="text-xs text-zinc-500 mb-4">Highest ROI · Lowest Complexity</p>
              <ul className="space-y-3">
                {[
                  "Pre-flight validation checklist before Enable NSAW is clickable — eliminates 100+ setup failure pattern",
                  "Unified user management from NetSuite UI, replacing the three-system model (targeted 26.1 release)",
                  "Pipeline status dashboard embedded in NetSuite — no separate portal required",
                  "Connector compatibility matrix and end-to-end setup guides covering source + NSAW",
                  "Journey-based documentation replacing six fragmented product-organized doc sites",
                  "Data freshness indicator showing last sync time per functional area",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="text-blue-500 shrink-0 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-zinc-400 dark:bg-zinc-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Phase 2 — Platform Level</h3>
              </div>
              <p className="text-xs text-zinc-500 mb-4">Deeper Investment · Larger Surface Area</p>
              <ul className="space-y-3">
                {[
                  "Connector configuration managed directly from NetSuite UI",
                  "Saved Searches and SuiteAnalytics Datasets ingested natively into NSAW",
                  "Targeted writeback from NSAW analytics back to NetSuite ERP records",
                  "NSAW AI (MCP) Connector for agentic analytics use cases",
                  "Embedded content delivery scoped to NetSuite roles — no separate OAC login",
                  "Automated storage monitoring and self-service capacity expansion",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="text-zinc-400 shrink-0 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PM Craft */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">PM Judgment on Display</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Evidence over intuition",
                desc: "Every journey was ranked across three independent dimensions — escalation frequency, mid-market revenue impact, and engineering complexity. Sequencing decisions were defensible, not instinctive.",
              },
              {
                title: "Root cause over symptom",
                desc: "The 400+ escalations were symptoms. The three cross-cutting root causes were the actual product strategy. Fixing individual bugs without addressing the three failure patterns would have produced incremental relief, not a category shift.",
              },
              {
                title: "Stakeholder-ready framing",
                desc: "The Bicycle with Training Wheels metaphor made the strategy immediately legible to engineering, CS, and executive leadership — and made every roadmap tradeoff discussable without a deck.",
              },
              {
                title: "Revenue lens",
                desc: "Multiple escalation patterns were directly linked to churn signals. The simplification initiative wasn't a UX exercise. It was a retention strategy anchored in lost and at-risk revenue.",
              },
              {
                title: "Cross-functional scope",
                desc: "The initiative spanned three product teams (NetSuite, NSAW, OAC), Provisioning, Professional Services, and Customer Support. Each team could act on their portion of the roadmap independently.",
              },
              {
                title: "Structured problem decomposition",
                desc: "12 journeys → 3 systemic root causes → 2 delivery phases. A sprawling support data set became a clean, actionable narrative that product leadership could rally around.",
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
          <span className="text-xs text-zinc-400 font-mono">A1 · NSAW Simplification Initiative</span>
        </div>
      </main>
    </div>
  );
}
