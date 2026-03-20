# 8-Week Agentic AI PM Sprint Plan (Revised)
### Shubhendu Vimal — March 20 to May 15, 2026

---

## What Changed from v1

| Original Assumption | Reality from Past Chats | Plan Adjustment |
|---|---|---|
| Treated portfolio as greenfield | You have 6+ real PM case studies (Simplification, Test Drive, Storage Tile, Config Redesign, Excess Capacity, Smart Landing Page) | Added a "Real Work" portfolio track — these go on the site as case studies with sanitized artifacts |
| AI learning from zero | You started March 7 with structured resources (DeepLearning.AI, Anthropic MCP course, Claude Code) and identified PRD Generator as first build | Compressed foundation phase; Week 1 ships the PRD Generator you already designed |
| MCP project was generic | Your Connector Journey #4 (Google Analytics → NSAW) with Sandhya's "findability" insight is a real MCP use case | Project 3 now directly extends your Simplification Initiative work |
| RAG project had no domain grounding | 56+ escalations, 12 journey docs, NSAW help documentation — all are real RAG corpus material | Project 1 now uses your actual escalation data and NSAW docs |
| Resume bullets needed creation | You already have quantified bullets: $800K Test Drive, $200K Excess Capacity, $1.8M Key Driver, 10 API specs | Week 7-8 just polishes what exists |
| No mention of PRD Generator | You designed it March 7 with agent personas (engineer, designer, executive) and project structure | Added as Project 0 (Day 1-3 quick win) |

---

## Strategy Summary

**Portfolio Thesis:** "I'm a Principal PM who shipped real enterprise AI/analytics products at Oracle and Fractal — AND I build AI-native tools to prove I understand the technology I manage."

**Two Portfolio Tracks:**

| Track | What It Shows | Content |
|---|---|---|
| **Track A: Real PM Work** (Case Studies) | Principal PM judgment, stakeholder management, business impact | Simplification Initiative, Test Drive Cleanup, Storage Tile, Config Redesign, Excess Capacity, Smart Landing Page |
| **Track B: AI Demos** (Built Projects) | Technical fluency, hands-on AI building, modern architecture patterns | PRD Generator, RAG NSAW Assistant, Multi-Agent Financial Analyst, MCP Connector Hub, Agentic CPG Planner |

This dual-track approach is the differentiator. Most PMs have either case studies OR demos. You'll have both.

---

## Project Portfolio (5 Builds + 6 Case Studies)

### Track B: AI Demo Projects

| # | Project | Domain | Core AI Skill | Grounded In Your Real Work |
|---|---------|--------|--------------|---------------------------|
| 0 | PRD Generator with Multi-Agent Review | Horizontal AI Tooling | Multi-agent orchestration, Claude Code | Designed March 7; agent personas already scoped |
| 1 | RAG-Powered NSAW Doc Assistant | Enterprise ERP/Analytics | RAG architecture, chunking, evaluation | Your 56+ escalations show customers can't find answers; Sandhya's "findability" quote is the problem statement |
| 2 | Multi-Agent Financial Analyst | Finance & Risk | Agent orchestration, tool use, guardrails | Maps to your Fractal Analytics pricing work (Asper.ai RGM, Key Driver Analysis) |
| 3 | MCP Connector Hub | Horizontal AI Tooling | MCP protocol, tool integration, API design | Directly extends your Connector Journey #4 and the Google Analytics → NSAW pilot |
| 4 | Agentic Demand Planner | CPG/Retail | End-to-end agentic system, human-in-the-loop | Maps to your Asper.ai and Crux Intelligence CPG work |

### Track A: Real PM Case Studies (Sanitized for Public Portfolio)

| # | Case Study | Key Artifact | Headline Metric |
|---|-----------|-------------|-----------------|
| A1 | NSAW Simplification Initiative | 12-journey analysis, priority matrix, scoring formula, journey maps | 56+ escalations analyzed → 12 journeys identified → P0/P1/P2 roadmap |
| A2 | Test Drive Infrastructure Cleanup | 426-instance categorization, 7-department outreach, ownership model | ~$800K/yr OCI cost savings from idle instance pruning |
| A3 | Storage Usage Tile & API Design | Full requirement doc (NSAW-REQ-STORAGE-001 v2.1), API contract, UI logic | 10 API specifications; threshold-based alerting for 3 tiers |
| A4 | Configuration Page Redesign | Before/after UX, dual-gateway navigation, task-oriented layout | Reduced Setup → Integration → NSAW to Analytics → NSAW (1-click) |
| A5 | ADW Excess Capacity Investigation | 16-customer audit, anomaly identification, pricing recommendation | ~$200K/yr revenue recovery; Capacity Pack SKU proposal |
| A6 | Smart Landing Page MVP | Feasibility doc, URL-based approach, role-based prioritization | Shipped without Access Token API dependency |

---

## Weekly Breakdown (20-30 hrs/week)

### PHASE 1: QUICK WIN + PORTFOLIO FOUNDATION (Weeks 1-2)

#### Week 1 — Mar 20-26: PRD Generator (Project 0) + Portfolio Site + Case Study Writing

| Day | Hours | Deliverable | Track |
|-----|-------|-------------|-------|
| **Thu Mar 20** | 3h | GitHub repo setup. Initialize Next.js + Tailwind. Deploy to Vercel (blank). Create CLAUDE.md for PRD Generator | B: Setup |
| **Fri Mar 21** | 3h | Build PRD Generator in Claude Code: agent personas (engineer, designer, executive), PRD template, orchestration | B: Build |
| **Sat Mar 22** | 4h | Finish PRD Generator: test with NSAW Storage Tile notes as sample input. Polish README. Push to GitHub | B: Build |
| **Sun Mar 23** | 3h | Portfolio site v1: Hero section, About, project cards (5 builds + 6 case studies), Resume download | B: Build |
| **Mon Mar 24** | 2h | Write Case Study A1 (Simplification Initiative): sanitize, structure as Problem → Analysis → Framework → Impact | A: Write |
| **Tue Mar 25** | 2h | Write Case Study A2 (Test Drive Cleanup): sanitize the 3-layer ownership model, categorization logic, $800K metric | A: Write |
| **Wed Mar 26** | 2h | Write Case Study A4 (Config Page Redesign): before/after screenshots concept, dual-gateway approach | A: Write |

**Week 1 Ship:** Live portfolio site (v1) + PRD Generator on GitHub + 3 case studies drafted

#### Week 2 — Mar 27-Apr 2: RAG Demo (Project 1)

| Day | Hours | Deliverable | Track |
|-----|-------|-------------|-------|
| **Thu Mar 27** | 2h | Write PRD for RAG NSAW Assistant. Problem statement: Sandhya's "findability" quote + escalation evidence from SI | B: Artifact |
| **Fri Mar 28** | 3h | Build document ingestion pipeline: use NSAW help docs + sanitized escalation summaries as RAG corpus | B: Build |
| **Sat Mar 29** | 4h | Build retrieval + generation with citation tracking. Use LangChain + ChromaDB + OpenAI/Claude API | B: Build |
| **Sun Mar 30** | 3h | Build Streamlit UI + evaluation framework (RAGAS: faithfulness, relevance, context precision) | B: Build |
| **Mon Mar 31** | 2h | Deploy RAG demo (Streamlit Cloud or HuggingFace Spaces). Write evaluation report | B: Build |
| **Tue Apr 1** | 2h | Write Case Study A3 (Storage Usage Tile): API design story, entitled vs. accessible storage insight | A: Write |
| **Wed Apr 2** | 2h | Add Project 0, Project 1, and all case studies to portfolio site. Commit everything to GitHub | B: Build |

**Week 2 Ship:** Working RAG demo (deployed) + 4 case studies live on portfolio + PRD Generator on GitHub

---

### PHASE 2: AGENTS + TOOL USE (Weeks 3-4)

#### Week 3 — Apr 3-9: Agent Fundamentals + Project 2 Design

| Day | Hours | Deliverable | Track |
|-----|-------|-------------|-------|
| **Thu Apr 3** | 2h | Learn: Anthropic tool use docs + LangGraph agent patterns (from your March 7 roadmap) | Learn |
| **Fri Apr 4** | 3h | Learn: Multi-agent patterns (CrewAI or AutoGen). Coursera "AI Agents in LangGraph" (audit) | Learn |
| **Sat Apr 5** | 4h | Write PRD for Project 2 (Multi-Agent Financial Analyst). Ground in your Fractal pricing/RGM experience: "What if an AI agent could do what I did manually at Asper.ai — revenue mix analysis, pricing simulation, driver analysis?" | B: Artifact |
| **Sun Apr 6** | 3h | Design agent architecture: Planner → Researcher (web search) → Analyst (pandas + calculator) → Reporter (structured Markdown output). Include guardrails doc | B: Artifact |
| **Mon Apr 7** | 2h | Build Researcher agent with web search tool | B: Build |
| **Tue Apr 8** | 2h | Build Analyst agent with financial modeling tools (pandas, calculator) | B: Build |
| **Wed Apr 9** | 2h | Build Reporter agent with structured output generation | B: Build |

#### Week 4 — Apr 10-16: Agent Demo v1 (Project 2)

| Day | Hours | Deliverable | Track |
|-----|-------|-------------|-------|
| **Thu Apr 10** | 3h | Integrate agents: orchestration layer, shared context, handoff logic | B: Build |
| **Fri Apr 11** | 3h | Add guardrails: input validation, output safety checks, cost tracking, token budget monitoring | B: Build |
| **Sat Apr 12** | 4h | Build Streamlit UI + deploy. Test with 3 scenarios from your Fractal domain (pricing, demand forecasting, margin analysis) | B: Build |
| **Sun Apr 13** | 3h | Write case study for Project 2: agent architecture decisions, trade-offs, failure modes, cost analysis | B: Artifact |
| **Mon Apr 14** | 2h | Write Case Study A5 (Excess Capacity Investigation): the detective story of 16 customers, 2 anomalies, schema-level forensics | A: Write |
| **Tue Apr 15** | 2h | Learn: MCP specification deep-dive (modelcontextprotocol.io) — prep for Week 5 | Learn |
| **Wed Apr 16** | 2h | Add Project 2 to portfolio site. Update resume. All case studies now live | B: Build |

**Phase 2 Ship:** Multi-agent financial analyst (deployed) + 5 case studies live + updated resume

---

### PHASE 3: MCP + AGENTIC WORKFLOWS (Weeks 5-6)

#### Week 5 — Apr 17-23: MCP Connector Demo (Project 3)

This project is directly grounded in your Simplification Initiative Connector Journey #4 — the Google Analytics → NSAW pilot.

| Day | Hours | Deliverable | Track |
|-----|-------|-------------|-------|
| **Thu Apr 17** | 2h | Write PRD for Project 3: "What if connector setup wasn't a 15-step manual journey but an AI-assisted MCP flow?" Frame using your Journey #4 evidence (Essprom, Harmonic Fund Services token issues) | B: Artifact |
| **Fri Apr 18** | 3h | Build mock NSAW MCP server (serves synthetic customer/pipeline data via MCP protocol) | B: Build |
| **Sat Apr 19** | 4h | Build MCP client that connects Claude to your NSAW server + a second tool (Google Analytics mock connector) | B: Build |
| **Sun Apr 20** | 3h | Build demo UI: tool selection, execution trace, natural language queries about pipeline status and data | B: Build |
| **Mon Apr 21** | 2h | Write blog post: "Why MCP Matters for Enterprise Analytics — Lessons from Building an NSAW Connector" | B: Artifact |
| **Tue Apr 22** | 2h | Deploy demo + add to portfolio site | B: Build |
| **Wed Apr 23** | 2h | Write competitive analysis: MCP vs function calling vs LangChain tools (from PM perspective, not just engineering) | B: Artifact |

#### Week 6 — Apr 24-30: Agentic CPG Demand Planner (Project 4)

This project maps to your Asper.ai RGM experience and Crux Intelligence work.

| Day | Hours | Deliverable | Track |
|-----|-------|-------------|-------|
| **Thu Apr 24** | 2h | Write PRD: "An agentic demand planning assistant that replicates what took 3 analysts a week at Asper.ai" | B: Artifact |
| **Fri Apr 25** | 3h | Build synthetic CPG demand data + forecasting model (Prophet/ARIMA — you already know these from Auto AI feature) | B: Build |
| **Sat Apr 26** | 4h | Build agent workflow: Data Collector → Forecaster → Planner → Human-Review approval gate | B: Build |
| **Sun Apr 27** | 3h | Add human-in-the-loop approval, override mechanism, confidence scoring | B: Build |
| **Mon Apr 28** | 2h | Build monitoring dashboard: agent decisions, confidence scores, override rates | B: Build |
| **Tue Apr 29** | 2h | Deploy + test end-to-end with 3 CPG scenarios | B: Build |
| **Wed Apr 30** | 2h | Write Case Study A6 (Smart Landing Page MVP): the constraint-driven design story — shipped without Access Token API | A: Write |

**Phase 3 Ship:** MCP demo + CPG agentic workflow (both deployed) + all 6 case studies live + blog post + competitive analysis

---

### PHASE 4: POLISH + INTERVIEW PREP (Weeks 7-8)

#### Week 7 — May 1-7: Portfolio Polish + Interview Assets

| Day | Hours | Deliverable | Track |
|-----|-------|-------------|-------|
| **Thu May 1** | 3h | Portfolio site v2: project deep-dive pages with architecture diagrams, demo embeds, and links to live demos | B: Build |
| **Fri May 2** | 3h | Write "AI Product Metrics Framework" — pull evaluation metrics from all 5 projects + the scoring formula from your Simplification Initiative | B: Artifact |
| **Sat May 3** | 4h | Create open-source "AI Product Spec Template" on GitHub — combines your PRD format with AI-specific sections (model selection, eval criteria, safety, cost) | B: Artifact |
| **Sun May 4** | 3h | Record 2-minute Loom walkthrough per project (5 demos + 2 case study highlights) | B: Artifact |
| **Mon May 5** | 2h | Draft 4 LinkedIn posts (one per demo project, each linking to portfolio) | A: Prep |
| **Tue May 6** | 2h | SEO + meta tags on portfolio site. Add analytics. Final design polish | B: Build |
| **Wed May 7** | 2h | Code cleanup: READMEs, docstrings, GitHub repo organization across all 5 projects | B: Build |

#### Week 8 — May 8-15: Interview Prep + Launch

| Day | Hours | Deliverable | Track |
|-----|-------|-------------|-------|
| **Thu May 8** | 3h | Practice "Design an AI agent for X" — 3 scenarios (use your NSAW, Fractal, and CPG contexts) | Prep |
| **Fri May 9** | 3h | Practice product sense + metrics + execution questions with AI framing | Prep |
| **Sat May 10** | 4h | Practice system design: RAG pipeline, agent architecture, MCP integration — draw from your built projects | Prep |
| **Sun May 11** | 3h | Final resume tailoring for top 5 target companies. Use Aakash Gupta's framework (you already have it) | Prep |
| **Mon May 12** | 2h | Publish LinkedIn posts (1/day through the week) | Launch |
| **Tue May 13** | 2h | Final portfolio review. Fix broken demos. Test all links | Build |
| **Wed May 14** | 2h | Submit applications to top 10 target roles. Personalize cover letters referencing specific portfolio pieces | Launch |
| **Thu May 15** | 2h | Retrospective: document learnings, plan next iteration | Reflect |

---

## Portfolio Site Architecture

```
shubhendu.dev (or similar)
├── / (Home)
│   ├── Hero: "Principal PM who builds AI products"
│   ├── Two-track grid: "What I've Shipped" + "What I've Built"
│   └── CTA: Resume download + LinkedIn + GitHub
│
├── /case-studies
│   ├── /simplification-initiative (A1)
│   ├── /test-drive-cleanup (A2)
│   ├── /storage-tile-api (A3)
│   ├── /config-page-redesign (A4)
│   ├── /excess-capacity (A5)
│   └── /smart-landing-page (A6)
│
├── /projects
│   ├── /prd-generator (P0) → GitHub + README
│   ├── /rag-nsaw-assistant (P1) → Live demo + GitHub
│   ├── /financial-analyst-agent (P2) → Live demo + GitHub
│   ├── /mcp-connector-hub (P3) → Live demo + GitHub + Blog
│   └── /cpg-demand-planner (P4) → Live demo + GitHub
│
├── /blog
│   ├── Why MCP Matters for Enterprise Analytics
│   └── AI Product Metrics Framework
│
└── /about
    ├── Resume (downloadable)
    ├── Background narrative
    └── Contact
```

---

## Learning Resources (Updated — Accounting for What You've Already Found)

### Already Identified (from March 7 chat)
- DeepLearning.AI RAG Course (Free audit on Coursera) — use in Week 2
- Anthropic MCP Course (Free) — use in Week 4-5
- Claude Code for PMs (ccforpms.com) — already explored
- Aakash Gupta's course — use for resume and interview framing
- AI Agents Bootcamp on Udemy (~$15) — optional supplement for Week 3

### Additional (New Recommendations)
- Coursera: "AI Agents in LangGraph" (DeepLearning.AI) — Week 3 deep-dive
- Andrew Ng's short talks on Agentic Design Patterns — Week 3 conceptual prep
- Chip Huyen's blog on ML evaluation — Week 7 metrics framework
- Harrison Chase (LangChain CEO) YouTube talks — Week 3-4 agent architecture
- modelcontextprotocol.io documentation — Week 4-5 MCP spec

---

## Case Study Sanitization Guidelines

Your real work is at Oracle — you need to sanitize before publishing:

| What to Keep | What to Remove/Change |
|---|---|
| Problem framing, analysis methodology | Specific customer names (use "Customer A", "Enterprise Client X") |
| Frameworks (scoring formula, priority matrix) | Internal Jira/SCOP IDs |
| Architecture decisions and trade-offs | Confidential revenue/pricing data |
| Before/after UX concepts (generalized) | Exact internal screenshots |
| Impact metrics (use ranges: "~$500K-$1M") | Exact dollar figures tied to specific accounts |
| Colleague quotes (anonymized: "a senior PM noted...") | Real names of internal stakeholders |

**Golden rule:** Share the *thinking*, not the *data*.

---

## Key Principles (Updated)

1. **Your real work is the moat.** Most AI PM candidates have demos. Almost none have 6 real enterprise case studies showing Principal-level judgment at Oracle scale.
2. **Ship daily, learn in context.** This hasn't changed.
3. **Git commit every day.** Green squares = proof of building.
4. **Case study > demo > course certificate.** The hierarchy is clear.
5. **Ground every demo in real work.** "I built this RAG system because I watched 56 customers fail to find answers in our product" is 10x more powerful than "I built a RAG system to learn RAG."
6. **Use Claude Code for builds, Claude Chat for thinking.** You made this decision on March 7 — stick with it.

---

## Today's Artifact (March 20)

You already designed the PRD Generator on March 7 with:
- Project structure (agents/, templates/, input/, output/, demo/)
- Agent personas (engineer, designer, executive)
- CLAUDE.md template
- Demo workflow

**Today's task:** Open Claude Code, create the repo, and start building. Your first prompt to Claude Code:

```
I'm building an AI PRD Generator for my PM portfolio. The project structure
is: agents/ (engineer.md, designer.md, executive.md), templates/ (prd_template.md),
input/ (sample_notes.md), output/. Help me create the CLAUDE.md, all agent
personas, and the PRD template. Use my real-world context: I'm a Principal PM
at Oracle NetSuite working on analytics warehouse products. The sample input
should be based on a "Storage Usage Tile" feature for an enterprise analytics
configuration page.
```

This gives you a shipped Project 0 by Saturday, using your own Storage Tile feature as the test case.
