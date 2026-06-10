import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { caseStudies } from "@/data/case-studies";
import { projects } from "@/data/projects";
import { aiCategories } from "@/data/categories";
import { testimonials } from "@/data/testimonials";
import { heroStats } from "@/data/hero-stats";

export default function Home() {
  const liveCaseStudies = caseStudies.filter((s) => s.status === "live");
  const liveProjects = projects.filter((p) => p.status === "live");

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <NavBar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden pt-32 pb-24 px-6 bg-[#FAF7F2]"
      >
        {/* Decorative gold line */}
        <svg
          className="absolute top-0 right-0 w-[520px] h-full pointer-events-none opacity-25"
          viewBox="0 0 520 700"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 480 0 C 320 120, 200 280, 380 480 C 460 580, 500 640, 420 700"
            stroke="#C9A961"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 500 80 C 360 180, 260 340, 400 520"
            stroke="#C9A961"
            strokeWidth="0.75"
            fill="none"
            opacity="0.5"
          />
        </svg>

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-16">

            {/* Left: text */}
            <div className="flex-1 min-w-0">
              {/* Eyebrow */}
              <p className="text-xs font-semibold text-[#0F6B6B] uppercase tracking-[0.2em] mb-5">
                AI-Native Principal PM · Enterprise <span className="normal-case">SaaS</span>
              </p>

              {/* Headline */}
              <h1
                className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight"
              >
                I build AI products
                <br />
                <span className="text-[#0F6B6B]">that ship.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg text-[#5C5C5C] max-w-[480px] leading-relaxed mb-3">
                11+ years at Oracle NetSuite and Fractal Analytics. Ph.D. Finance. $5M+ revenue impact, 25% adoption lift.
              </p>
              <p className="text-base text-[#5C5C5C] max-w-[480px] leading-relaxed mb-8">
                Shipped GenAI, Predictive AI, NLP, and Agentic products —{" "}
                <em>and</em> built hands-on demos to prove it.
              </p>

              {/* CTAs */}
              <div className="flex gap-3 flex-wrap mb-5">
                <a
                  href="#case-studies"
                  className="px-6 py-3 bg-[#0F6B6B] text-white rounded-lg hover:bg-[#0D5C5C] transition-colors text-sm font-semibold"
                >
                  View Case Studies
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[#0F6B6B] text-[#0F6B6B] rounded-lg hover:bg-[#E8F3F3] transition-colors text-sm font-semibold"
                >
                  Download Resume
                </a>
              </div>

            </div>

            {/* Right: photo */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 rounded-full bg-[#E8F3F3] scale-110" />
              <div className="absolute -inset-3 rounded-full border border-[#C9A961]/30" />
              <Image
                src="/profile.jpeg"
                alt="Shubhendu Vimal"
                width={280}
                height={280}
                className="relative rounded-full object-cover w-56 h-56 md:w-64 md:h-64 ring-4 ring-white shadow-xl"
                priority
              />
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 pt-10 border-t border-[#0F6B6B]/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-serif text-4xl font-bold text-[#0F6B6B]"
                >
                  {stat.value}
                </p>
                <p className="text-xs text-[#5C5C5C] mt-1.5 font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Across Categories ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-t border-[#0F6B6B]/8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold text-[#0F6B6B] uppercase tracking-widest mb-2">
              AI Fluency
            </p>
            <h2
              className="font-serif text-3xl font-bold text-[#1A1A1A] tracking-tight"
            >
              Four categories of AI shipped.
            </h2>
            <p className="text-[#5C5C5C] text-sm mt-2 max-w-xl">
              Not just specced — built and deployed at Oracle NetSuite and Fractal Analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aiCategories.map((cat) => (
              <div
                key={cat.label}
                className="bg-[#FAF7F2] rounded-xl p-6 flex flex-col gap-3 border border-[#0F6B6B]/10 hover:border-[#0F6B6B]/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div>
                  <p
                    className="font-serif text-2xl font-bold text-[#0F6B6B] leading-tight"
                  >
                    {cat.label}
                  </p>
                  <p className="text-xs text-[#9A9A9A] font-medium mt-0.5 uppercase tracking-wide">
                    {cat.sublabel}
                  </p>
                </div>
                <div className="w-8 h-px bg-[#C9A961]" />
                <p className="text-sm text-[#5C5C5C] leading-relaxed flex-1">
                  {cat.proof}
                </p>
                {cat.link.external ? (
                  <a
                    href={cat.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#0F6B6B] hover:underline mt-1"
                  >
                    {cat.link.label} →
                  </a>
                ) : (
                  <Link
                    href={cat.link.href}
                    className="text-xs font-semibold text-[#0F6B6B] hover:underline mt-1"
                  >
                    {cat.link.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies — Track A ────────────────────────────────── */}
      <section id="case-studies" className="py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold text-[#0F6B6B] uppercase tracking-widest bg-[#E8F3F3] border border-[#0F6B6B]/15 px-3 py-1 rounded-full mb-3">
              Track A — Enterprise Case Studies
            </span>
            <h2
              className="font-serif text-3xl font-bold text-[#1A1A1A] tracking-tight"
            >
              Principal PM judgment at enterprise scale.
            </h2>
            <p className="text-[#5C5C5C] text-sm mt-2 max-w-xl">
              Sanitized work from Oracle NetSuite and Fractal Analytics. Real problems, real constraints, real outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {liveCaseStudies.map((study) => {
              const card = (
                <div
                  className={`group bg-white rounded-xl p-6 h-full flex flex-col border border-[#0F6B6B]/10 shadow-sm transition-all duration-200 ${
                    study.href
                      ? "hover:shadow-md hover:border-[#0F6B6B]/30 hover:-translate-y-0.5 cursor-pointer"
                      : "opacity-75"
                  }`}
                >
                  {/* ID badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-block text-[10px] font-bold text-[#0F6B6B] bg-[#E8F3F3] border border-[#0F6B6B]/15 px-2 py-0.5 rounded font-mono">
                        {study.id}
                      </span>
                      {study.tag && (
                        <span className="inline-block text-[10px] font-semibold text-[#7C5C1E] bg-[#FDF3DC] border border-[#C9A961]/30 px-2 py-0.5 rounded">
                          {study.tag}
                        </span>
                      )}
                    </div>
                    {study.href && (
                      <span className="text-[11px] text-[#0F6B6B] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read case →
                      </span>
                    )}
                  </div>

                  {/* Big metric — leads the card */}
                  <p
                    className="font-serif text-xl font-bold text-[#0F6B6B] leading-tight mb-1"
                  >
                    {study.metricLabel}
                  </p>
                  <p className="text-[11px] text-[#9A9A9A] font-medium mb-3 leading-snug">
                    {study.metricSub}
                  </p>

                  {/* Project name */}
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2 leading-snug">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5C5C5C] leading-relaxed flex-1">
                    {study.description}
                  </p>

                  {/* Gold accent line */}
                  <div className="w-6 h-px bg-[#C9A961] mt-4" />
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

      {/* ── AI Projects — Track B ─────────────────────────────────── */}
      <section id="projects" className="py-20 px-6 bg-white border-t border-[#0F6B6B]/8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold text-[#0F6B6B] uppercase tracking-widest bg-[#E8F3F3] border border-[#0F6B6B]/15 px-3 py-1 rounded-full mb-3">
              Track B — Agentic Architecture
            </span>
            <h2
              className="font-serif text-3xl font-bold text-[#1A1A1A] tracking-tight"
            >
              I don&apos;t just spec AI. I architect and ship it.
            </h2>
            <p className="text-[#5C5C5C] text-sm mt-2 max-w-xl">
              Full-stack AI systems — RAG pipelines, Trust Consoles, MCP integrations, and agentic orchestration — built end-to-end.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {liveProjects.map((project) => {
              const hasLive = !!project.liveUrl;
              const hasGitHub = !!project.githubUrl;
              const primaryHref = project.liveUrl ?? project.githubUrl ?? "#";
              const primaryIsExternal = true;

              return (
                <div
                  key={project.id}
                  className="relative bg-[#FAF7F2] rounded-xl p-7 flex flex-col border border-[#0F6B6B]/10 hover:border-[#0F6B6B]/25 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block text-[10px] font-bold text-[#5C5C5C] bg-white border border-[#0F6B6B]/10 px-2 py-0.5 rounded font-mono">
                      {project.id}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0F6B6B] bg-[#E8F3F3] border border-[#0F6B6B]/15 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F6B6B]" />
                      {hasLive ? "Live" : "GitHub"}
                    </span>
                  </div>

                  {/* Title + tagline */}
                  <h3
                    className="font-serif text-2xl font-bold text-[#1A1A1A] mb-1"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#9A9A9A] uppercase tracking-wider font-medium mb-4">
                    {project.tagline}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-[#0F6B6B] bg-[#E8F3F3] border border-[#0F6B6B]/15 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#5C5C5C] leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#0F6B6B]/8">
                    <a
                      href={primaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="text-sm font-semibold text-[#0F6B6B] hover:underline before:absolute before:inset-0 before:content-['']"
                    >
                      {hasLive ? "Try it →" : "View on GitHub →"}
                    </a>
                    {!hasLive && hasGitHub && (
                      <span className="text-xs text-[#9A9A9A]">
                        Live demo coming soon
                      </span>
                    )}
                    {hasLive && hasGitHub && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 text-xs text-[#9A9A9A] hover:text-[#0F6B6B] transition-colors"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section id="testimonials" className="py-20 px-6 bg-[#FAF7F2] border-t border-[#0F6B6B]/8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2
              className="font-serif text-3xl font-bold text-[#1A1A1A] tracking-tight"
            >
              Kind Words from Teammates & Partners
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 flex flex-col border border-[#0F6B6B]/10"
              >
                <div className="w-6 h-px bg-[#C9A961] mb-4" />
                <p className="text-sm text-[#5C5C5C] leading-relaxed italic flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
                  <p className="text-xs text-[#9A9A9A]">
                    {[t.title, t.company, t.date].filter(Boolean).join(" · ")}
                  </p>
                  {t.linkedinUrl && (
                    <a
                      href={t.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#0F6B6B] hover:underline mt-2 inline-block"
                    >
                      View on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section id="about" className="py-20 px-6 bg-white border-t border-[#0F6B6B]/8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-widest mb-5">
              About
            </p>

            {/* Serif opening line */}
            <h2
              className="font-serif text-3xl font-bold text-[#1A1A1A] leading-tight mb-6"
            >
              I turn ambiguous enterprise problems into shipped AI products.
            </h2>

            {/* Existing paragraphs — untouched */}
            <div className="space-y-4 text-[#5C5C5C] text-[15px] leading-relaxed mb-8">
              <p>
                I&apos;ve spent 11+ years at the intersection of data and product — building ML-powered products
                across finance, CPG, and operations at Oracle NetSuite and Fractal Analytics. AR collections forecasting,
                customer churn prediction, pricing optimization engines, LLM-powered analytics assistants.
                If there&apos;s a decision buried in messy enterprise data, I&apos;ve probably built something to surface it.
              </p>
              <p>
                My edge: a Ph.D. in Finance, a decade of hands-on AI product work, and the ability to sit with a
                data scientist in the morning, a business stakeholder in the afternoon, and a UX researcher the
                next day — and speak each language fluently.
              </p>
              <p>
                This portfolio is two things: the PM judgment behind real enterprise work (sanitized case studies),
                and the AI tools I&apos;m building myself — because the best AI PMs ship, not just spec.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "GenAI",
                "Predictive AI",
                "NLP",
                "Agentic",
                "Enterprise SaaS",
                "Ph.D. Finance",
                "Oracle NetSuite alumnus",
                "Fractal Analytics alumnus",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-[#0F6B6B] bg-[#E8F3F3] border border-[#0F6B6B]/15 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Personal touch */}
            <p className="text-sm text-[#9A9A9A] leading-relaxed border-l-2 border-[#C9A961] pl-4">
              Outside work: fitness, swimming, tennis, and family time in Bangalore. Also a long-running curiosity
              about Vedic philosophy and how it intersects with decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* ── Let&apos;s connect ──────────────────────────────────────────── */}
      <section id="connect" className="py-20 px-6 bg-[#0F6B6B]">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="font-serif text-4xl font-bold text-white mb-4 tracking-tight"
          >
            Let&apos;s connect.
          </h2>
          <p className="text-[#E8F3F3] text-base mb-10 max-w-md mx-auto">
            Open to collaborations or trading notes on enterprise AI.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:shubhendus@gmail.com"
              className="px-7 py-3 bg-white text-[#0F6B6B] rounded-lg hover:bg-[#FAF7F2] transition-colors text-sm font-semibold"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com/in/shubhendu-vimal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border-2 border-white/50 text-white rounded-lg hover:border-white hover:bg-white/10 transition-all text-sm font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Shubhendu123"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border-2 border-white/50 text-white rounded-lg hover:border-white hover:bg-white/10 transition-all text-sm font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="bg-[#1A1A1A] border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#0F6B6B] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-[9px]">SV</span>
            </div>
            <p className="text-sm text-white/40">© {new Date().getFullYear()} Shubhendu Vimal</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/shubhendu-vimal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Shubhendu123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:shubhendus@gmail.com"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
