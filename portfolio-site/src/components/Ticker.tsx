const TICKER_TERMS = [
  "GenAI",
  "Predictive AI",
  "NLP",
  "Agentic",
  "Enterprise SaaS",
  "Ph.D. Finance",
  "ISB alumnus",
  "Oracle NetSuite alumnus",
  "Fractal Analytics alumnus",
];

// Slim skills ticker. Terms come verbatim from the About section's skill
// tags. Pure CSS marquee — pauses on hover/focus, static under
// prefers-reduced-motion.
export default function Ticker() {
  return (
    <section
      aria-label="Skills"
      className="ticker border-y border-ink/15 bg-parchment py-5"
    >
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1}>
            {TICKER_TERMS.map((term) => (
              <li key={term} className="flex items-center">
                <span
                  className="ticker-term px-2 font-serif text-xl md:text-2xl text-ink"
                  tabIndex={copy === 0 ? 0 : -1}
                >
                  {term}
                </span>
                <span className="px-5 text-accent text-[10px]" aria-hidden="true">
                  ◆
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
