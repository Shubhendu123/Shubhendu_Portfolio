export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "GenAI" | "Predictive" | "NLP" | "Agentic";
  tags: string[];
  status: "live" | "coming-soon" | "hidden";
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  // Card display rule:
  // - liveUrl present → primary CTA "Try it →"
  // - liveUrl absent + githubUrl present → primary CTA "View on GitHub →" + muted "Live demo coming soon"
  // - status "hidden" → filtered out of render
};

export const projects: Project[] = [
  {
    id: "P0",
    title: "AskERP",
    tagline: "Conversational ERP analytics",
    description:
      "Agentic RAG assistant for ERP data. Ask in plain English — a reasoning agent interprets intent, retrieves the right data, and returns a narrated insight with automatic driver analysis across segments, categories, and regions.",
    category: "GenAI",
    tags: ["Agentic RAG", "NL Analytics", "Multi-Agent", "Driver Analysis"],
    status: "live",
    liveUrl: "https://askerp.vercel.app/chat",
    githubUrl: "https://github.com/Shubhendu123/askerp",
  },
  {
    id: "P1",
    title: "Counsel-AI",
    tagline: "Agentic RAG legal knowledge platform",
    description:
      "Agentic RAG platform for legal knowledge with a Trust Console for grounded, citation-backed answers. Built end-to-end — Next.js full-stack, API routes, MCP-compatible Connector SDK, and a TRADEOFFS doc covering architectural decisions.",
    category: "Agentic",
    tags: ["Agentic RAG", "Trust Console", "MCP Connector", "Citation Grounding"],
    status: "live",
    githubUrl: "https://github.com/Shubhendu123/Counsel-AI",
    // swap githubUrl → liveUrl once the Vercel demo deploys
  },
  {
    id: "P2",
    title: "RAG NSAW Assistant",
    tagline: "Document Q&A over enterprise help content",
    description:
      "Document Q&A over enterprise help content with citation tracking and retrieval evaluation using RAGAS.",
    category: "GenAI",
    tags: ["RAG Architecture", "RAGAS Eval", "LangChain", "ChromaDB"],
    status: "hidden",
  },
  {
    id: "P3",
    title: "MCP Connector Hub",
    tagline: "AI-assisted connector setup via MCP",
    description:
      "AI-assisted connector setup using Model Context Protocol — grounded in real connector journey research.",
    category: "Agentic",
    tags: ["MCP Protocol", "Tool Integration", "Connector UX"],
    status: "hidden",
  },
  {
    id: "P4",
    title: "CPG Demand Planner",
    tagline: "End-to-end agentic demand planning",
    description:
      "Demand planning agent with human approval gates, confidence scoring, and override tracking.",
    category: "Agentic",
    tags: ["Agentic Workflows", "Human-in-the-Loop", "Prophet", "ARIMA"],
    status: "hidden",
  },
];
