import Link from "next/link";

const keyDecisions = [
  {
    decision: "3 simple roles instead of mapping all NetSuite roles",
    why: "NetSuite has 50+ granular roles. A 1:1 mapping would be unmanageable for admins and impossible to maintain as roles evolved. Simplifying to Admin / Author / Viewer gave customers governance control without complexity.",
    impact: "Reduced user configuration support cases — the 3-role model was self-explanatory to admins with no training.",
  },
  {
    decision: "SSO-only for MVP scope",
    why: "SSO guarantees a reliable, verifiable identity. Without it, NSAW would need to manage passwords, handle account recovery, and maintain its own credential store — all out of scope for an analytics product.",
    impact: "Eliminated an entire class of identity-related support issues. Customers on SSO had near-zero login failures.",
  },
  {
    decision: "Center-based prioritization over flat ordering",
    why: "Finance users should see AR Aging before Sales Pipeline. A flat alphabetical or admin-assigned-only list wouldn't reflect functional context. Center weighting made the landing page feel personalized without requiring user configuration.",
    impact: "Directly enabled the Smart Landing Page MVP (A6) — the priority calculation was the core logic behind personalized dashboard ordering.",
  },
  {
    decision: "Admin assigns dashboards; user self-service in Phase 2",
    why: "For MVP, governance control was the priority. Giving users the ability to self-assign dashboards before admins had tooling to audit or override would create a support and audit risk.",
    impact: "Clean separation of admin and user actions. Admin had full visibility; users had a curated, relevant experience on day one.",
  },
  {
    decision: "NetSuite Account ID as primary key across all systems",
    why: "Multiple systems (NSAW Console, OAC, provisioning backend) needed a shared identifier. The NetSuite Account ID was already a stable, unique key across the Oracle ecosystem.",
    impact: "Enabled reliable cross-system lookups with no custom ID generation or sync issues.",
  },
];

const challenges = [
  {
    challenge: "Three systems, three identity models",
    detail: "NetSuite, NSAW Console, and OAC each had their own user and role models. A user deleted in NetSuite wouldn't be removed from NSAW. An admin role in NetSuite didn't automatically mean admin access in OAC. Each system's concept of 'user' was slightly different.",
    howISolved: "Designed a mapping layer where NSAW Console acted as the config layer — the single place admins managed users for both NSAW and OAC. Defined explicit mapping rules: NetSuite role → NSAW role → OAC access level. Documented the sync gaps as known limitations with workarounds until a full bidirectional sync could be built.",
  },
  {
    challenge: "SSO misconfiguration = complete lockout with no recovery",
    detail: "If an admin configured SSO incorrectly, every user — including the admin — could be locked out with no fallback authentication method. This was a live escalation pattern that had occurred multiple times before I joined.",
    howISolved: "Specified a validation-before-activation requirement in the SSO setup flow: test the SSO configuration with a non-admin account before activating for all users. Proposed a breakglass admin recovery mechanism as a Phase 2 safety feature. For MVP, documented the test procedure prominently in setup guides.",
  },
  {
    challenge: "Auto-provisioning vs. controlled access tension",
    detail: "SSO auto-provisioning (creating a user on first login) was convenient but created a governance risk — anyone with valid SSO credentials could access NSAW as a Viewer without admin approval.",
    howISolved: "Made auto-provisioning an admin-configurable toggle, defaulting to off. Admins who wanted frictionless onboarding could enable it; those with stricter access controls kept it off. Documented both modes with use-case guidance.",
  },
  {
    challenge: "Dashboard URL fragility",
    detail: "OAC dashboard URLs encoded the workbook name. If an admin renamed a workbook, the URL broke silently — users would get a 404 with no explanation.",
    howISolved: "Specified URL validation on save in the User Management interface. Flagged this as a known limitation in documentation. Proposed a broken-URL detection and admin alert system as a roadmap item, deprioritized for MVP.",
  },
];

const pmImpact = [
  {
    metric: "3 systems unified",
    description: "Designed the logic that let NetSuite, NSAW Console, and OAC operate as a coherent user management experience — despite each having independent identity models.",
  },
  {
    metric: "50+ roles → 3",
    description: "Collapsed NetSuite's complex role hierarchy into Admin / Author / Viewer. Made user configuration self-service for admins who had previously needed support tickets for role changes.",
  },
  {
    metric: "SSO-first architecture",
    description: "Scoped MVP to SSO-enabled customers — the highest-reliability identity path. This eliminated a category of login and credential support issues from day one.",
  },
  {
    metric: "Foundation for Smart Landing Page",
    description: "The center-based priority calculation designed here directly powered the Smart Landing Page MVP (A6). Mapping logic was the prerequisite for personalized dashboard ordering.",
  },
];

export default function MappingLogicCaseStudy() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            ← SV
          </Link>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">A7 / Case Study</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded">A7</span>
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">Oracle NetSuite · Principal PM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-6">
            Customer & User<br />Mapping Logic
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-10">
            NSAW sits between NetSuite ERP and Oracle Analytics Cloud — three systems with three independent identity
            models. I designed the mapping logic that made them behave as one: customer-level provisioning, user
            identity flow, role simplification, center-based personalization, and SSO-first authentication.
          </p>

          {/* Metrics bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "3", label: "Systems unified" },
              { value: "3", label: "Roles (from 50+)" },
              { value: "7", label: "Edge cases specified" },
              { value: "SSO-first", label: "MVP identity scope" },
            ].map((m) => (
              <div key={m.label} className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{m.value}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">The Problem</h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed">
            <p>
              When a NetSuite customer purchases NSAW, they expect a seamless experience — log into NetSuite, click
              into analytics, see their data. The reality was a three-system configuration challenge that most
              mid-market admins were not equipped to manage.
            </p>
            <p>
              NetSuite had its own user and role system. NSAW Console had its own. OAC had its own. A user added
              in one system didn't automatically exist in the others. A role change in NetSuite didn't propagate.
              A deleted employee in NetSuite remained an active user in NSAW until manually removed. Admins were
              fielding tickets for basic user access issues that should have been self-service.
            </p>
            <p>
              There was no documented mapping logic — no specification for how identities should flow from NetSuite
              through NSAW and into OAC. Engineering teams were making implementation decisions without a coherent
              model. Support was handling escalations with no canonical answer.
            </p>
          </div>

          {/* Three system architecture */}
          <div className="mt-8 p-6 bg-zinc-900 dark:bg-zinc-800 rounded-2xl text-white">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-5">The Three-System Architecture</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  name: "NetSuite ERP",
                  role: "Source",
                  color: "border-blue-500/40 bg-blue-500/10",
                  labelColor: "text-blue-300",
                  items: ["Transactions & Records", "Users / Roles (50+)", "Account ID", "Subsidiaries"],
                },
                {
                  name: "NSAW Console",
                  role: "Config Layer",
                  color: "border-indigo-500/40 bg-indigo-500/10",
                  labelColor: "text-indigo-300",
                  items: ["User Management", "Connector Setup", "Role Mapping", "Provisioning"],
                },
                {
                  name: "OAC",
                  role: "Analytics",
                  color: "border-emerald-500/40 bg-emerald-500/10",
                  labelColor: "text-emerald-300",
                  items: ["Dashboards", "Workbooks", "Reports", "Visualizations"],
                },
              ].map((sys) => (
                <div key={sys.name} className={`p-4 rounded-xl border ${sys.color}`}>
                  <div className="flex items-center justify-between mb-3">
                    <p className={`text-sm font-bold ${sys.labelColor}`}>{sys.name}</p>
                    <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">{sys.role}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {sys.items.map((item) => (
                      <li key={item} className="text-xs text-zinc-400 flex gap-2">
                        <span className="text-zinc-600 shrink-0">·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-3 text-xs text-zinc-500">
              <span className="px-3 py-1 bg-zinc-800 rounded-full">NetSuite Account ID → primary key across all 3 systems</span>
            </div>
          </div>
        </section>

        {/* PM Impact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">PM Impact</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-sm">What this design work actually changed for customers and engineering.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {pmImpact.map((item) => (
              <div key={item.metric} className="flex gap-4 p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <div className="shrink-0">
                  <span className="inline-block text-lg font-black text-indigo-600 dark:text-indigo-400">{item.metric}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Mapping Logic */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">How the Mapping Works</h2>

          {/* Step 1: Customer */}
          <div className="mb-8 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Customer-Level Mapping</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              When a customer purchases NSAW, their NetSuite Account ID becomes the primary key linking all downstream
              systems. Provisioning creates an ADW instance, an OAC instance, and NSAW Console access — all tied to
              that one identifier. SSO is configured against the customer's identity provider (IdP).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-100 dark:border-zinc-800">
                    <th className="text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide pb-2 pr-4">NetSuite Field</th>
                    <th className="text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide pb-2 pr-4">NSAW Field</th>
                    <th className="text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide pb-2">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800">
                  {[
                    ["Account ID", "Customer ID", "Primary identifier across all systems"],
                    ["Company Name", "Instance Name", "Display in Console and OAC"],
                    ["Account Type", "Tier / Edition", "Feature entitlements (Standard / Premium / Enterprise)"],
                    ["Subsidiary Structure", "Data Scope", "Multi-subsidiary analytics access"],
                  ].map(([ns, nsaw, purpose]) => (
                    <tr key={ns}>
                      <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300 font-mono text-xs">{ns}</td>
                      <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300 font-mono text-xs">{nsaw}</td>
                      <td className="py-2 text-zinc-500 dark:text-zinc-400 text-xs">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 2: Role mapping */}
          <div className="mb-8 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Role Simplification — 50+ Roles → 3</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              NetSuite has granular roles (Administrator, Accountant, Sales Rep, Controller, and dozens more). Mapping
              each one to NSAW permissions would be unmanageable. I defined three NSAW roles with clear capability
              boundaries and a deterministic assignment rule.
            </p>
            <div className="space-y-3">
              {[
                {
                  role: "Admin",
                  color: "border-l-red-500 bg-red-50 dark:bg-red-950/20",
                  badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
                  caps: "User management · Connector config · All dashboards",
                  ns: "Administrator · Full Access",
                },
                {
                  role: "Author",
                  color: "border-l-amber-500 bg-amber-50 dark:bg-amber-950/20",
                  badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
                  caps: "Create & edit dashboards · Access all data",
                  ns: "Controller · CFO · Analyst · Report Writer",
                },
                {
                  role: "Viewer",
                  color: "border-l-blue-500 bg-blue-50 dark:bg-blue-950/20",
                  badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
                  caps: "View assigned dashboards only",
                  ns: "All other roles (default)",
                },
              ].map((r) => (
                <div key={r.role} className={`p-4 rounded-lg border-l-4 ${r.color}`}>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${r.badge}`}>{r.role}</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{r.caps}</span>
                  </div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">NetSuite source roles: {r.ns}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Center-based prioritization */}
          <div className="mb-8 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Center-Based Dashboard Prioritization</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Users belong to a functional Center in NetSuite (Finance, Sales, Operations, etc.). I used this to weight
              dashboard priority — Finance users see AR Aging first; Sales users see Pipeline first. The priority is
              calculated, not manually configured per user.
            </p>
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-700 dark:text-zinc-300 mb-4">
              <p className="text-zinc-500 dark:text-zinc-500 mb-2">// Priority formula</p>
              <p>Final Priority = Admin_Priority + Role_Weight + Center_Weight</p>
              <p className="text-zinc-500 dark:text-zinc-500 mt-1">// Lower number = shows first</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-100 dark:border-zinc-800">
                    <th className="text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide pb-2 pr-4">User Center</th>
                    <th className="text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide pb-2 pr-4">Primary Dashboards</th>
                    <th className="text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide pb-2">Priority Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800">
                  {[
                    ["Executive", "Executive Summary, KPIs", "5 (highest)"],
                    ["Finance", "AR Aging, Cash Flow, P&L", "10"],
                    ["Sales", "Pipeline, Bookings, Revenue", "20"],
                    ["Operations", "Inventory, Fulfillment", "30"],
                    ["General", "All dashboards equal", "50"],
                  ].map(([center, dashboards, weight]) => (
                    <tr key={center}>
                      <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300 text-xs font-medium">{center}</td>
                      <td className="py-2 pr-4 text-zinc-500 dark:text-zinc-400 text-xs">{dashboards}</td>
                      <td className="py-2 text-zinc-500 dark:text-zinc-400 text-xs">{weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 4: SSO flow */}
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">SSO Identity Flow (MVP Scope)</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
              For MVP, I scoped user identity to SSO-enabled customers only. SSO provides a reliable, verified
              identity token — eliminating password management, credential storage, and manual provisioning for
              each login. The token carries the attributes needed to look up or create the NSAW user record.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {[
                { label: "NetSuite UI", sub: "User clicks NSAW link" },
                { label: "Customer IdP", sub: "Validates credentials" },
                { label: "IDCS (Oracle)", sub: "Issues SAML token" },
                { label: "NSAW Console", sub: "Validates & creates session" },
                { label: "OAC", sub: "User lands on dashboard" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 rounded-lg text-center min-w-[80px]">
                    <p className="font-semibold text-indigo-700 dark:text-indigo-300 text-[11px]">{step.label}</p>
                    <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">{step.sub}</p>
                  </div>
                  {i < 4 && <span className="text-zinc-300 dark:text-zinc-600 font-bold">→</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Challenges I Faced & How I Solved Them</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-sm max-w-3xl">
            The mapping logic sounds straightforward on paper. The hard part was anticipating the gaps, edge cases,
            and failure modes that engineering teams would encounter without a spec.
          </p>
          <div className="space-y-5">
            {challenges.map((c) => (
              <div key={c.challenge} className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                <div className="p-6">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">{c.challenge}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2">The Problem</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{c.detail}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-2">How I Solved It</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{c.howISolved}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Edge Cases */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Edge Cases Specified</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "User in NetSuite, not in NSAW",
                scenario: "New employee tries to access NSAW",
                logic: "If SSO auto-provisioning on → create Viewer. If off → show 'Contact your NSAW Admin'.",
              },
              {
                title: "User removed from NetSuite",
                scenario: "Employee offboarding",
                logic: "SSO fails → user blocked from NSAW. Manual cleanup in User Management required (auto-cleanup as roadmap item).",
              },
              {
                title: "NetSuite role change",
                scenario: "Sales Rep promoted to Sales Manager",
                logic: "NSAW role doesn't auto-change (intentional). Admin manually adjusts if elevated access is needed.",
              },
              {
                title: "Multi-subsidiary user",
                scenario: "User has US + UK subsidiary access in NetSuite",
                logic: "User sees dashboards for all subsidiaries. Data scoped by subsidiary; consolidated view available.",
              },
              {
                title: "Dashboard URL breaks",
                scenario: "Admin renames a workbook in OAC",
                logic: "Old URL becomes invalid. Admin must update in User Management. Future: broken URL detection and alert.",
              },
              {
                title: "Re-provisioned instance",
                scenario: "Customer disables and re-enables NSAW",
                logic: "New instance doesn't inherit admin mappings. Admin must reconfigure users. Documented as known limitation; soft-disable proposed for Phase 2.",
              },
            ].map((ec) => (
              <div key={ec.title} className="p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1 text-sm">{ec.title}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3 italic">{ec.scenario}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{ec.logic}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Decisions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Key PM Decisions</h2>
          <div className="space-y-4">
            {keyDecisions.map((d) => (
              <div key={d.decision} className="p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">{d.decision}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">Why</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{d.why}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1.5">Impact</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{d.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PM Craft */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">PM Judgment on Display</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Systems architecture thinking",
                desc: "Mapped how three independent systems with three different identity models needed to behave as one — from provisioning through authentication to dashboard delivery.",
              },
              {
                title: "Simplification under constraints",
                desc: "Collapsed 50+ NetSuite roles into 3 NSAW roles without losing governance. The constraint was admin usability — not feature completeness.",
              },
              {
                title: "Edge case ownership",
                desc: "Specified 7 failure scenarios with explicit handling logic before engineering started building. This prevented ad-hoc decisions during implementation.",
              },
              {
                title: "MVP scoping discipline",
                desc: "SSO-only for MVP was a deliberate constraint. It reduced scope, eliminated credential management complexity, and delivered a more reliable product faster.",
              },
              {
                title: "Dependency mapping",
                desc: "The mapping logic here was a prerequisite for the Smart Landing Page (A6). Identifying and sequencing that dependency prevented a downstream rework.",
              },
              {
                title: "Documentation as product",
                desc: "The mapping spec became the source of truth for engineering, support, and onboarding. Clear specs reduce interpretation gaps and support escalations.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{item.title}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tags */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-2">
            {["Identity Management", "SSO", "User Mapping", "Data Architecture", "Enterprise SaaS", "Multi-tenant", "Role-Based Access", "NetSuite", "Oracle", "Systems Thinking"].map((tag) => (
              <span key={tag} className="text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            ← All case studies
          </Link>
          <span className="text-xs text-zinc-400 font-mono">A7 · Customer & User Mapping Logic</span>
        </div>
      </main>
    </div>
  );
}
