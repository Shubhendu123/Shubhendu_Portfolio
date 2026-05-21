export type AICategory = {
  label: string;
  sublabel: string;
  proof: string;
  link: { label: string; href: string; external: boolean };
};

export const aiCategories: AICategory[] = [
  {
    label: "Agentic",
    sublabel: "Multi-agent · RAG · Trust Console",
    proof:
      "Counsel-AI — agentic RAG legal knowledge platform with a Trust Console for grounded, citation-backed answers. Built end-to-end: Next.js, API, MCP-compatible Connector SDK.",
    link: {
      label: "View on GitHub",
      href: "https://github.com/Shubhendu123/Counsel-AI",
      external: true,
    },
  },
  {
    label: "GenAI",
    sublabel: "Conversational analytics",
    proof:
      "AskERP — agentic RAG assistant shipped at Oracle NSAW. Natural-language ERP analytics with automatic driver analysis across segments, categories, and regions.",
    link: { label: "Try it", href: "https://askerp.vercel.app/chat", external: true },
  },
  {
    label: "Predictive AI",
    sublabel: "Pricing & decisioning",
    proof:
      "Asper.ai at Fractal Analytics — ML-powered Revenue Growth Management for CPG. Improved pricing accuracy by 8%, drove $1.8M annual revenue lift.",
    link: { label: "Read case", href: "/case-studies/a1", external: false },
  },
  {
    label: "NLP",
    sublabel: "Customer intelligence",
    proof:
      "AIDE at Fractal Analytics — NLP root-cause analysis on chat, feedback, and survey data. Lifted product adoption by 25% through voice-of-customer insight loops.",
    link: { label: "Read case", href: "/case-studies/a1", external: false },
  },
];
