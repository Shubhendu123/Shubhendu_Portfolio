import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import IntroReveal from "@/components/IntroReveal";
import Reveal from "@/components/Reveal";
import Contour from "@/components/Contour";
import Ticker from "@/components/Ticker";
import { caseStudies } from "@/data/case-studies";
import { projects } from "@/data/projects";
import { aiCategories } from "@/data/categories";
import { testimonials } from "@/data/testimonials";
import { heroStats } from "@/data/hero-stats";

function SectionHeader({
  index,
  eyebrow,
  heading,
  sub,
}: {
  index: string;
  eyebrow: string;
  heading: string;
  sub?: string;
}) {
  return (
    <Reveal className="mb-14">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-[11px] text-accent tracking-widest">
          {index}
        </span>
        <span className="h-px flex-1 max-w-24 bg-ink/20" aria-hidden="true" />
        <p className="text-[11px] font-semibold text-muted uppercase tracking-[0.22em]">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.05] max-w-3xl">
        {heading}
      </h2>
      {sub && (
        <p className="text-muted text-sm mt-4 max-w-xl leading-relaxed">{sub}</p>
      )}
    </Reveal>
  );
}

export default function Home() {
  const liveCaseStudies = caseStudies.filter((s) => s.status === "live");
  const liveProjects = projects.filter((p) => p.status === "live");

  return (
    <div className="min-h-screen bg-parchment text-ink">
      <IntroReveal />
      <NavBar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden min-h-screen flex flex-col justify-end px-6 pt-32 pb-12"
      >
        <Contour className="absolute inset-0 w-full h-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative">
          {/* Eyebrow */}
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold text-muted uppercase tracking-[0.24em] mb-10">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent inline-block"
                aria-hidden="true"
              />
              <span>
                AI-Native Principal PM · Enterprise{" "}
                <span className="normal-case">SaaS</span>
              </span>
            </p>
          </Reveal>

          {/* Headline + portrait */}
          <div className="relative">
            <Reveal>
              <h1 className="font-serif font-bold text-ink tracking-tight leading-[0.92] mb-12">
                <span className="block text-[clamp(3.2rem,10vw,8.75rem)]">
                  I build
                </span>
                <span className="block text-[clamp(3.2rem,10vw,8.75rem)] md:pl-[10vw]">
                  AI products
                </span>
                <span className="block italic text-accent text-[clamp(3.2rem,11.5vw,10rem)] md:text-right">
                  that ship.
                </span>
              </h1>
            </Reveal>

            {/* Portrait — anchored beside the first headline lines on desktop */}
            <Reveal
              delay={150}
              className="lg:absolute lg:top-0 lg:right-0 mb-10 lg:mb-0 w-40 lg:w-36 xl:w-44 2xl:w-52"
            >
              <div className="relative border border-ink/20 p-1.5 bg-parchment">
                <Image
                  src="/profile.jpeg"
                  alt="Shubhendu Vimal"
                  width={280}
                  height={280}
                  className="w-full aspect-square object-cover"
                  priority
                />
                <span
                  className="absolute -bottom-2 -left-2 w-full h-full border border-accent/40 -z-10"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          </div>

          {/* Supporting copy + CTAs */}
          <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
            <Reveal delay={100} className="md:col-span-5 md:col-start-1">
              <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-3">
                11+ years at Oracle NetSuite and Fractal Analytics. Ph.D.
                Finance. $5M+ revenue impact, 25% adoption lift.
              </p>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                Shipped GenAI, Predictive AI, NLP, and Agentic products —{" "}
                <em>and</em> built hands-on demos to prove it.
              </p>
            </Reveal>

            <Reveal delay={200} className="md:col-span-5 md:col-start-8">
              <div className="flex gap-3 flex-wrap md:justify-end">
                <a
                  href="#case-studies"
                  className="px-6 py-3.5 bg-ink text-parchment hover:bg-accent transition-colors text-[11px] font-semibold uppercase tracking-[0.18em]"
                >
                  View Case Studies
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-ink/40 text-ink hover:border-accent hover:text-accent transition-colors text-[11px] font-semibold uppercase tracking-[0.18em]"
                >
                  Download Resume
                </a>
              </div>
            </Reveal>
          </div>

          {/* Stats strip */}
          <Reveal delay={250}>
            <div className="border-t border-ink/20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {heroStats.map((stat, i) => (
                <div key={stat.label}>
                  <p className="font-mono text-[10px] text-accent tracking-widest mb-2">
                    0{i + 1}
                  </p>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-ink">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-muted mt-1.5 font-medium uppercase tracking-[0.18em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Skills ticker ─────────────────────────────────────────── */}
      <Ticker />

      {/* ── AI Across Categories ──────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="01"
            eyebrow="AI Fluency"
            heading="Four categories of AI shipped."
            sub="Not just specced — built and deployed at Oracle NetSuite and Fractal Analytics."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
            {aiCategories.map((cat, i) => (
              <Reveal key={cat.label} delay={i * 80} className="bg-parchment">
                <div className="p-7 h-full flex flex-col gap-4 hover:bg-parchment-deep transition-colors duration-300">
                  <p className="font-mono text-[10px] text-accent tracking-widest">
                    0{i + 1}
                  </p>
                  <div>
                    <p className="font-serif text-3xl font-bold text-ink leading-tight">
                      {cat.label}
                    </p>
                    <p className="text-[10px] text-muted-light font-medium mt-1.5 uppercase tracking-[0.16em]">
                      {cat.sublabel}
                    </p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {cat.proof}
                  </p>
                  {cat.link.external ? (
                    <a
                      href={cat.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-rule self-start text-xs font-semibold text-accent uppercase tracking-[0.14em]"
                    >
                      {cat.link.label} →
                    </a>
                  ) : (
                    <Link
                      href={cat.link.href}
                      className="link-rule self-start text-xs font-semibold text-accent uppercase tracking-[0.14em]"
                    >
                      {cat.link.label} →
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies — Track A ────────────────────────────────── */}
      <section id="case-studies" className="py-24 px-6 border-t border-ink/15">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="02"
            eyebrow="Track A — Enterprise Case Studies"
            heading="Principal PM judgment at enterprise scale."
            sub="Sanitized work from Oracle NetSuite and Fractal Analytics. Real problems, real constraints, real outcomes."
          />

          <div>
            {liveCaseStudies.map((study, i) => {
              const even = i % 2 === 1;
              const inner = (
                <div
                  className={`group grid md:grid-cols-12 gap-x-8 gap-y-4 items-start py-12 border-t border-ink/15 ${
                    study.href ? "cursor-pointer" : "opacity-75"
                  }`}
                >
                  {/* Ghost index */}
                  <div
                    className={`md:col-span-2 ${
                      even ? "md:order-3 md:text-right" : ""
                    }`}
                  >
                    <span
                      className="font-serif text-6xl md:text-7xl text-ink/10 group-hover:text-accent/25 transition-colors duration-300 leading-none select-none"
                      aria-hidden="true"
                    >
                      {study.id}
                    </span>
                  </div>

                  {/* Body */}
                  <div
                    className={`md:col-span-7 ${
                      even ? "md:order-2 md:col-start-4" : ""
                    }`}
                  >
                    <p className="font-serif text-3xl md:text-4xl font-bold text-ink group-hover:text-accent transition-colors duration-300 leading-tight mb-3">
                      {study.metricLabel}
                    </p>
                    <h3 className="text-base font-semibold text-ink mb-2">
                      {study.title}
                      {study.tag && (
                        <span className="ml-3 align-middle inline-block text-[9px] font-semibold text-accent border border-accent/40 px-2 py-0.5 uppercase tracking-[0.14em]">
                          {study.tag}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed max-w-xl">
                      {study.description}
                    </p>
                  </div>

                  {/* Meta */}
                  <div
                    className={`md:col-span-3 flex md:flex-col md:items-end justify-between gap-3 ${
                      even ? "md:order-1 md:items-start" : ""
                    }`}
                  >
                    <p
                      className={`font-mono text-xs md:text-sm text-muted tracking-wide leading-relaxed ${
                        even ? "" : "md:text-right"
                      }`}
                    >
                      {study.metricSub}
                    </p>
                    {study.href && (
                      <span className="text-[11px] font-semibold text-accent uppercase tracking-[0.16em] whitespace-nowrap">
                        Read case{" "}
                        <span
                          className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              );

              return study.href ? (
                <Reveal key={study.id}>
                  <Link href={study.href} className="block">
                    {inner}
                  </Link>
                </Reveal>
              ) : (
                <Reveal key={study.id}>{inner}</Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AI Projects — Track B ─────────────────────────────────── */}
      <section id="projects" className="py-24 px-6 border-t border-ink/15">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="03"
            eyebrow="Track B — Agentic Architecture"
            heading="I don't just spec AI. I architect and ship it."
            sub="Full-stack AI systems — RAG pipelines, Trust Consoles, MCP integrations, and agentic orchestration — built end-to-end."
          />

          <div className="space-y-px">
            {liveProjects.map((project, i) => {
              const hasLive = !!project.liveUrl;
              const hasGitHub = !!project.githubUrl;
              const primaryHref = project.liveUrl ?? project.githubUrl ?? "#";
              const even = i % 2 === 1;

              return (
                <Reveal key={project.id}>
                  <div className="group relative grid md:grid-cols-12 gap-x-8 gap-y-5 py-14 border-t border-ink/15 cursor-pointer">
                    {/* Meta rail */}
                    <div
                      className={`md:col-span-3 flex md:flex-col gap-4 md:gap-5 items-baseline md:items-start ${
                        even ? "md:order-2 md:items-end" : ""
                      }`}
                    >
                      <span className="font-mono text-[11px] text-muted-light tracking-widest">
                        {project.id}
                      </span>
                      <span className="inline-flex items-center gap-2 text-[10px] font-semibold text-accent uppercase tracking-[0.16em]">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {hasLive ? "Live" : "GitHub"}
                      </span>
                      <p
                        className={`font-mono text-[10px] text-muted-light leading-relaxed ${
                          even ? "md:text-right" : ""
                        }`}
                      >
                        {project.tags.join(" / ")}
                      </p>
                    </div>

                    {/* Body */}
                    <div
                      className={`md:col-span-8 ${
                        even
                          ? "md:order-1 md:col-start-1"
                          : "md:col-start-5"
                      }`}
                    >
                      <h3 className="font-serif text-4xl md:text-5xl font-bold text-ink group-hover:text-accent transition-colors duration-300 leading-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-muted uppercase tracking-[0.2em] font-medium mb-5">
                        {project.tagline}
                      </p>
                      <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl mb-7">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-6">
                        <a
                          href={primaryHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="text-xs font-semibold text-accent uppercase tracking-[0.16em] before:absolute before:inset-0 before:content-['']"
                        >
                          {hasLive ? "Try it" : "View on GitHub"}{" "}
                          <span
                            className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </a>
                        {!hasLive && hasGitHub && (
                          <span className="text-xs text-muted-light">
                            Live demo coming soon
                          </span>
                        )}
                        {hasLive && hasGitHub && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-rule relative z-10 text-xs text-muted hover:text-accent transition-colors uppercase tracking-[0.16em]"
                          >
                            GitHub →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section id="testimonials" className="py-24 px-6 border-t border-ink/15">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="04"
            eyebrow="Testimonials"
            heading="Kind Words from Teammates & Partners"
          />

          <div className="columns-1 md:columns-2 gap-10 max-w-6xl">
            {testimonials.map((t, i) => (
              <Reveal key={i} className="break-inside-avoid mb-10">
                <figure className="border-t border-ink/15 pt-6">
                  <span
                    className="font-serif text-5xl text-accent leading-none block mb-3 select-none"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="font-serif italic text-lg text-ink-soft leading-relaxed mb-5">
                    {t.quote}
                  </blockquote>
                  <figcaption>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="font-mono text-[10px] text-muted-light mt-1 leading-relaxed">
                      {[t.title, t.company, t.date].filter(Boolean).join(" · ")}
                    </p>
                    {t.linkedinUrl && (
                      <a
                        href={t.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-rule text-xs text-accent mt-3 inline-block uppercase tracking-[0.14em]"
                      >
                        View on LinkedIn
                      </a>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section id="about" className="relative overflow-hidden py-24 px-6 border-t border-ink/15">
        <Contour className="absolute inset-0 w-full h-full pointer-events-none -scale-x-100" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-12 gap-10">
            <Reveal className="md:col-span-3">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] text-accent tracking-widest">
                  05
                </span>
                <p className="text-[11px] font-semibold text-muted uppercase tracking-[0.22em]">
                  About
                </p>
              </div>
            </Reveal>

            <div className="md:col-span-8 md:col-start-5">
              <Reveal>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-[1.05] tracking-tight mb-10">
                  I turn ambiguous enterprise problems into{" "}
                  <span className="italic text-accent">shipped AI products.</span>
                </h2>
              </Reveal>

              {/* Existing paragraphs — untouched */}
              <Reveal delay={100}>
                <div className="space-y-5 text-muted text-[15px] md:text-base leading-relaxed mb-10 max-w-2xl">
                  <p>
                    I&apos;ve spent 11+ years at the intersection of data and
                    product — building ML-powered products across finance, CPG,
                    and operations at Oracle NetSuite and Fractal Analytics. AR
                    collections forecasting, customer churn prediction, pricing
                    optimization engines, LLM-powered analytics assistants. If
                    there&apos;s a decision buried in messy enterprise data,
                    I&apos;ve probably built something to surface it.
                  </p>
                  <p>
                    My edge: a Ph.D. in Finance, a decade of hands-on AI product
                    work, and the ability to sit with a data scientist in the
                    morning, a business stakeholder in the afternoon, and a UX
                    researcher the next day — and speak each language fluently.
                  </p>
                  <p>
                    This portfolio is two things: the PM judgment behind real
                    enterprise work (sanitized case studies), and the AI tools
                    I&apos;m building myself — because the best AI PMs ship, not
                    just spec.
                  </p>
                </div>
              </Reveal>

              {/* Tags */}
              <Reveal delay={150}>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-10 font-mono text-[11px] text-ink-soft uppercase tracking-[0.14em]">
                  {[
                    "GenAI",
                    "Predictive AI",
                    "NLP",
                    "Agentic",
                    "Enterprise SaaS",
                    "Ph.D. Finance",
                    "ISB alumnus",
                    "Oracle NetSuite alumnus",
                    "Fractal Analytics alumnus",
                  ].map((tag, i, arr) => (
                    <li key={tag} className="flex items-center gap-5">
                      {tag}
                      {i < arr.length - 1 && (
                        <span className="text-accent text-[8px]" aria-hidden="true">
                          ◆
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Personal touch */}
              <Reveal delay={200}>
                <p className="text-sm text-muted leading-relaxed border-l-2 border-accent pl-5 max-w-xl">
                  Outside work: fitness, swimming, tennis, and family time in
                  Bangalore. Also a long-running curiosity about Vedic
                  philosophy and how it intersects with decision-making.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Let's connect ─────────────────────────────────────────── */}
      <section id="connect" className="bg-ink text-parchment pt-28 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-10">
              <span className="font-mono text-[11px] text-accent tracking-widest">
                06
              </span>
              <span
                className="h-px flex-1 max-w-24 bg-parchment/25"
                aria-hidden="true"
              />
            </div>
            <h2 className="font-serif font-bold text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight mb-8">
              Let&apos;s{" "}
              <span className="italic text-accent">connect.</span>
            </h2>
            <p className="text-parchment/70 text-base mb-14 max-w-md leading-relaxed">
              Open to collaborations or trading notes on enterprise AI.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-24">
              <a
                href="mailto:shubhendus@gmail.com"
                className="link-rule self-start text-sm font-semibold uppercase tracking-[0.18em] text-parchment hover:text-accent transition-colors"
              >
                Email me
              </a>
              <a
                href="https://linkedin.com/in/shubhendu-vimal"
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule self-start text-sm font-semibold uppercase tracking-[0.18em] text-parchment hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Shubhendu123"
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule self-start text-sm font-semibold uppercase tracking-[0.18em] text-parchment hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </Reveal>

          {/* ── Footer ─────────────────────────────────────────────── */}
          <footer className="border-t border-parchment/15 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full border border-parchment/40 flex items-center justify-center shrink-0">
                <span className="text-parchment font-bold text-[8px]">SV</span>
              </div>
              <p className="text-sm text-parchment/50">
                © {new Date().getFullYear()} Shubhendu Vimal
              </p>
            </div>
            <div className="flex gap-7">
              <a
                href="https://linkedin.com/in/shubhendu-vimal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.14em] text-parchment/50 hover:text-parchment transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Shubhendu123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.14em] text-parchment/50 hover:text-parchment transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:shubhendus@gmail.com"
                className="text-xs uppercase tracking-[0.14em] text-parchment/50 hover:text-parchment transition-colors"
              >
                Email
              </a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
