import Link from "next/link";

const caseStudies = [
  {
    id: "A1",
    title: "NSAW Simplification Initiative",
    metric: "56+ escalations analyzed",
    description: "12 journeys identified, priority matrix, P0/P1/P2 roadmap",
  },
  {
    id: "A2",
    title: "Test Drive Infrastructure Cleanup",
    metric: "~$800K/yr savings",
    description: "426 instances categorized, 7-department outreach, ownership model",
  },
  {
    id: "A3",
    title: "Storage Usage Tile & API",
    metric: "10 API specs",
    description: "Full requirement doc, 3-tier threshold logic, UI state design",
  },
  {
    id: "A4",
    title: "Configuration Page Redesign",
    metric: "1-click navigation",
    description: "Dual-gateway approach, task-oriented layout, before/after UX",
  },
  {
    id: "A5",
    title: "Excess Capacity Investigation",
    metric: "~$200K/yr recovery",
    description: "16-customer audit, anomaly identification, pricing fix",
  },
  {
    id: "A6",
    title: "Smart Landing Page MVP",
    metric: "Shipped without dependency",
    description: "Constraint-driven design, URL-based approach, role prioritization",
  },
];

const aiProjects = [
  {
    id: "P0",
    title: "PRD Generator",
    skill: "Multi-Agent Orchestration",
    description: "AI-generated PRDs reviewed by engineer, designer, executive agents",
    status: "live",
  },
  {
    id: "P1",
    title: "RAG NSAW Assistant",
    skill: "RAG Architecture",
    description: "Document Q&A with citation tracking and RAGAS evaluation",
    status: "coming",
  },
  {
    id: "P2",
    title: "Financial Analyst Agent",
    skill: "Tool Use & Guardrails",
    description: "Multi-agent system for revenue analysis and pricing simulation",
    status: "coming",
  },
  {
    id: "P3",
    title: "MCP Connector Hub",
    skill: "MCP Protocol",
    description: "AI-assisted connector setup using Model Context Protocol",
    status: "coming",
  },
  {
    id: "P4",
    title: "CPG Demand Planner",
    skill: "Agentic Workflows",
    description: "End-to-end demand planning with human-in-the-loop approval",
    status: "coming",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">SV</span>
          <nav className="flex gap-6 text-sm">
            <Link href="#case-studies" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Case Studies
            </Link>
            <Link href="#projects" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              AI Projects
            </Link>
            <Link href="#about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Shubhendu Vimal &mdash; Principal PM | AI Products &amp; Enterprise Analytics
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8">
            11+ years building AI-powered products from early-stage models to enterprise-scale platforms.
          </p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/shubhendu-vimal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Shubhendu123"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-zinc-300 rounded-lg hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 px-6 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Track A</span>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">Real PM Work</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">
              Sanitized case studies from Oracle NetSuite demonstrating Principal PM judgment at enterprise scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              >
                <span className="text-xs font-mono text-zinc-500">{study.id}</span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
                  {study.title}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-2">
                  {study.metric}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Projects */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Track B</span>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">AI Demo Projects</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">
              Hands-on AI projects demonstrating technical fluency with modern architecture patterns.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-zinc-500">{project.id}</span>
                  {project.status === "live" ? (
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                      Live
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 rounded-full">
                      Coming
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
                  {project.title}
                </h3>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-2">
                  {project.skill}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Shubhendu Vimal</h2>
          <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400 mb-2">Principal PM &nbsp;|&nbsp; AI Products &amp; Enterprise Analytics</p>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8">
            11+ years turning complex data into products people rely on — across finance, CPG, and operations at Oracle NetSuite and Fractal Analytics.
          </p>
          <div className="prose dark:prose-invert max-w-2xl">
            <p className="text-zinc-600 dark:text-zinc-400">
              I&apos;ve built ML-powered products across industries: AR collections forecasting, customer churn prediction, pricing optimization engines, and LLM-powered analytics assistants. If there&apos;s a decision buried in messy data, I&apos;ve probably built something to surface it.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4">
              My edge: a PhD in Finance, a decade of hands-on AI product work, and the ability to sit with a data scientist in the morning, a business stakeholder in the afternoon, and a UX researcher the next day — and speak each language fluently.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4">
              This portfolio is two things: the PM judgment behind real enterprise work (sanitized case studies from Oracle and Fractal), and the AI tools I&apos;m building myself — because the best AI PMs ship, not just spec.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            Built with Next.js and Claude Code
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://linkedin.com/in/shubhendu-vimal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Shubhendu123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              GitHub
            </a>
            <a
              href="mailto:shubhendus@gmail.com"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
