import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    id: "A1",
    title: "NSAW Simplification Initiative",
    metric: "400+ escalations · 12 journeys · 2-yr analysis",
    description: "Identified 3 systemic root causes behind all escalations. Built P0/P1/P2 roadmap across 3 product teams.",
    href: "/case-studies/a1",
  },
  {
    id: "A2",
    title: "Test Drive Infrastructure Cleanup",
    metric: "426 instances · 7 depts · ~$1M OCI savings",
    description: "Three-layer ownership model, 88% gap recovery, zero business disruptions.",
    href: "/case-studies/a2",
  },
  {
    id: "A3",
    title: "Storage Usage Tile & API",
    metric: "10 API specs · 3-tier threshold logic",
    description: "Full requirement doc, entitled vs accessible storage insight, 4 UI alert states.",
    href: null,
  },
  {
    id: "A4",
    title: "Configuration Page Redesign",
    metric: "1-click navigation · dual-gateway UX",
    description: "Reduced setup path from 3 steps to 1. Task-oriented layout with before/after validation.",
    href: null,
  },
  {
    id: "A5",
    title: "Excess Capacity Investigation",
    metric: "16 customers · ~$200K/yr recovery",
    description: "Schema-level forensics across 16 accounts. Surfaced 2 anomalies, proposed Capacity Pack SKU.",
    href: null,
  },
  {
    id: "A6",
    title: "Smart Landing Page MVP",
    metric: "Shipped without API dependency",
    description: "Constraint-driven URL-based approach. Role-prioritized delivery without Access Token API.",
    href: null,
  },
];

const aiProjects = [
  {
    id: "P0",
    title: "AskERP",
    skill: "Agentic RAG · NL Analytics · Multi-Agent",
    description: "Conversational analytics agent for ERP data. Ask in plain English — a reasoning agent interprets intent, retrieves the right data, and returns a narrated insight with automatic driver analysis across segments, categories, and regions.",
    status: "live",
    href: "https://askerp.vercel.app/chat",
  },
  {
    id: "P1",
    title: "PRD Generator",
    skill: "Multi-Agent Orchestration",
    description: "AI-generated PRDs reviewed in parallel by engineer, designer, and executive agent personas.",
    status: "live",
    href: null,
  },
  {
    id: "P2",
    title: "RAG NSAW Assistant",
    skill: "RAG Architecture · RAGAS Eval",
    description: "Document Q&A over enterprise help content with citation tracking and retrieval evaluation.",
    status: "coming",
    href: null,
  },
  {
    id: "P3",
    title: "MCP Connector Hub",
    skill: "MCP Protocol · Tool Integration",
    description: "AI-assisted connector setup using Model Context Protocol — grounded in real connector journey research.",
    status: "coming",
    href: null,
  },
  {
    id: "P4",
    title: "CPG Demand Planner",
    skill: "Agentic Workflows · Human-in-the-Loop",
    description: "End-to-end demand planning agent with human approval gates, confidence scoring, and override tracking.",
    status: "coming",
    href: null,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">

      {/* ── Header ────────────────────────────────────────────────────── */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-indigo-500 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xs">SV</span>
            </div>
            <span className="font-semibold text-white text-sm tracking-tight">Shubhendu Vimal</span>
            <span className="hidden sm:inline text-slate-600 text-xs">|</span>
            <span className="hidden sm:inline text-slate-400 text-xs">Principal PM · AI Products</span>
          </div>
          <nav className="flex gap-6">
            <Link href="#case-studies" className="text-slate-400 hover:text-white transition-colors text-xs font-medium tracking-widest uppercase">
              Case Studies
            </Link>
            <Link href="#projects" className="text-slate-400 hover:text-white transition-colors text-xs font-medium tracking-widest uppercase">
              AI Projects
            </Link>
            <Link href="#about" className="text-slate-400 hover:text-white transition-colors text-xs font-medium tracking-widest uppercase">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-14">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to AI PM roles · Bangalore
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
                I ship{" "}
                <span className="text-indigo-600">AI products</span>
                <br className="hidden sm:block" />
                {" "}and prove it with working demos.
              </h1>
              <p className="text-lg text-slate-500 max-w-xl mb-3 leading-relaxed">
                11+ years building analytics and AI products at Oracle NetSuite and Fractal Analytics — from demand forecasting models to enterprise ERP platforms.
              </p>
              <p className="text-sm text-slate-400 mb-8">
                PhD in Finance · Principal PM · Strong ML &amp; Data Science foundation
              </p>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://linkedin.com/in/shubhendu-vimal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Shubhendu123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-indigo-100 scale-110" />
                <Image
                  src="/profile.jpeg"
                  alt="Shubhendu Vimal"
                  width={192}
                  height={192}
                  className="relative rounded-full object-cover w-44 h-44 ring-4 ring-white shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* KPI strip */}
          <div className="mt-14 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "11+", label: "Years in PM" },
              { value: "$1M+", label: "Infra savings driven" },
              { value: "5", label: "AI projects built" },
              { value: "6", label: "Enterprise case studies" },
            ].map((kpi) => (
              <div key={kpi.label} className="text-center">
                <p className="text-3xl font-bold text-slate-900 tracking-tight">{kpi.value}</p>
                <p className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wide">{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ──────────────────────────────────────────────── */}
      <section id="case-studies" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold text-indigo-600 uppercase tracking-widest bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-3">
              Track A — Real PM Work
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Enterprise Case Studies</h2>
            <p className="text-slate-500 text-sm mt-1.5 max-w-xl">
              Sanitized work from Oracle NetSuite — Principal PM judgment at enterprise scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((study) => {
              const card = (
                <div className={`
                  group bg-white rounded-xl p-6 h-full flex flex-col
                  border border-slate-100 shadow-sm
                  transition-all duration-200
                  ${study.href ? "hover:shadow-md hover:border-indigo-200 cursor-pointer" : "opacity-75"}
                `}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded font-mono">
                      {study.id}
                    </span>
                    {study.href && (
                      <span className="text-[11px] text-indigo-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read →
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 leading-snug mb-3">
                    {study.title}
                  </h3>

                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 mb-3">
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                      {study.metric}
                    </p>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {study.description}
                  </p>

                  {!study.href && (
                    <p className="text-[10px] text-slate-300 mt-3 font-medium uppercase tracking-wider">
                      Detail page coming soon
                    </p>
                  )}
                </div>
              );

              return study.href ? (
                <Link key={study.id} href={study.href} className="block">
                  {card}
                </Link>
              ) : (
                <div key={study.id}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AI Projects ───────────────────────────────────────────────── */}
      <section id="projects" className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-3">
              Track B — AI Demo Projects
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Built, Not Just Specced</h2>
            <p className="text-slate-500 text-sm mt-1.5 max-w-xl">
              Hands-on AI projects demonstrating technical fluency with modern agentic architecture patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiProjects.map((project) => {
              const isLive = project.status === "live";
              const card = (
                <div className={`
                  group bg-white rounded-xl p-6 h-full flex flex-col
                  border shadow-sm transition-all duration-200
                  ${project.href
                    ? "border-slate-200 hover:shadow-md hover:border-indigo-200 cursor-pointer"
                    : isLive
                    ? "border-slate-200"
                    : "border-slate-100 opacity-70"}
                `}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded font-mono">
                      {project.id}
                    </span>
                    {isLive ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Live
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-slate-300 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">
                        Coming soon
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 leading-snug mb-2">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.skill.split(" · ").map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {project.href && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">askerp.vercel.app</span>
                      <span className="text-xs text-indigo-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Try it →
                      </span>
                    </div>
                  )}
                </div>
              );

              return project.href ? (
                <a
                  key={project.id}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              ) : (
                <div key={project.id}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section id="about" className="py-16 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              About
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">Shubhendu Vimal</h2>
            <p className="text-slate-500 text-sm font-medium mb-6">
              Principal PM &nbsp;·&nbsp; AI Products &amp; Enterprise Analytics &nbsp;·&nbsp; Oracle NetSuite
            </p>

            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
              <p>
                I&apos;ve spent 11+ years at the intersection of data and product — building ML-powered products
                across finance, CPG, and operations at Oracle NetSuite and Fractal Analytics. AR collections forecasting,
                customer churn prediction, pricing optimization engines, LLM-powered analytics assistants.
                If there&apos;s a decision buried in messy enterprise data, I&apos;ve probably built something to surface it.
              </p>
              <p>
                My edge: a PhD in Finance, a decade of hands-on AI product work, and the ability to sit with a
                data scientist in the morning, a business stakeholder in the afternoon, and a UX researcher the
                next day — and speak each language fluently.
              </p>
              <p>
                This portfolio is two things: the PM judgment behind real enterprise work (sanitized case studies),
                and the AI tools I&apos;m building myself — because the best AI PMs ship, not just spec.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["PhD Finance", "Oracle NetSuite", "Fractal Analytics", "11+ yrs PM", "LLM · RAG · Agents", "Enterprise SaaS"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-indigo-500 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-[9px]">SV</span>
            </div>
            <p className="text-sm text-slate-500">Built with Next.js &amp; Claude Code</p>
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/shubhendu-vimal" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/Shubhendu123" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">GitHub</a>
            <a href="mailto:shubhendus@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
