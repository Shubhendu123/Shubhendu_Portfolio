# CLAUDE.md — Shubhendu's AI PM Portfolio Sprint

## Who I Am
Principal Product Manager at Oracle NetSuite (11+ yrs PM experience). PhD in Finance, MBA. Previously at Fractal Analytics (Crux Intelligence, Asper.ai RGM, AIDE). Strong ML/DS/SQL foundation. Building an AI PM portfolio over 8 weeks to target AI-flavored PM roles at B2B SaaS companies and agentic AI startups in Bangalore.

## What This Repo Is
A monorepo (or linked repos) for my AI PM portfolio — 5 demo projects + a portfolio website + case study content. Everything ships to GitHub and gets deployed.

## Portfolio Structure

### Track A: Real PM Case Studies (sanitized Oracle/Fractal work)
- A1: NSAW Simplification Initiative — 56+ escalations → 12 journeys → priority matrix
- A2: Test Drive Cleanup — 426 instances, 3-layer ownership model, ~$800K/yr savings
- A3: Storage Usage Tile — API requirement doc, 3-tier logic, entitled vs accessible storage
- A4: Configuration Page Redesign — dual-gateway navigation, task-oriented layout
- A5: Excess Capacity Investigation — 16-customer audit, 2 anomalies, ~$200K/yr recovery
- A6: Smart Landing Page MVP — shipped without Access Token API dependency

### Track B: AI Demo Projects
- P0: PRD Generator with Multi-Agent Review (Claude Code, 3 agent personas)
- P1: RAG-Powered NSAW Doc Assistant (LangChain + ChromaDB, RAGAS eval)
- P2: Multi-Agent Financial Analyst (LangGraph/CrewAI, tool use, guardrails)
- P3: MCP Connector Hub (MCP protocol, mock NSAW server)
- P4: Agentic CPG Demand Planner (Prophet/ARIMA, human-in-the-loop)

## Current Sprint Phase
**Phase 1, Week 1 (Mar 20-26): PRD Generator + Portfolio Site + Case Studies**

### Today's Tasks (Day 1 — Mar 20)
1. Set up this GitHub repo
2. Initialize Next.js + Tailwind for portfolio site
3. Deploy blank site to Vercel
4. Start building PRD Generator (Project 0)

## Project 0: PRD Generator — Specifications

### Purpose
AI system that generates PRDs from rough feature notes, then reviews them from 3 stakeholder perspectives (engineer, designer, executive).

### Structure
```
ai-prd-generator/
├── README.md
├── CLAUDE.md
├── agents/
│   ├── engineer.md      # Reviews for technical feasibility
│   ├── designer.md      # Reviews for UX
│   └── executive.md     # Reviews for business impact
├── templates/
│   └── prd_template.md  # Structured PRD format
├── input/
│   └── sample_notes.md  # Use Storage Usage Tile feature as test case
├── output/
│   └── (generated PRDs go here)
└── demo/
    └── screenshots/
```

### Sample Input (Storage Usage Tile)
Use this as the test case for the PRD Generator — it's a real feature I built at Oracle:
- Feature: Storage Usage Tile on NSAW Configuration Page
- Shows ADW storage allocation and consumption per subscription tier (Standard=1TB, Premium=3TB, Enterprise=5TB)
- Key insight: "entitled storage" vs "actually accessible storage" — percentage must use accessible as denominator
- UI states: Normal (<80%), Warning (80-95%), Critical (>95%), Unavailable
- Requires API from Provisioning team (REST endpoint returning JSON)
- Real validation cases: Mitchell & Ness (Jira FAW-63069), 2nd Swing, Charge Electrical Services

### Demo Workflow
```
Input: rough feature notes → PRD generation → 3 parallel agent reviews → final polished PRD
```

## Agent Personas

### Engineer Reviewer
- Focus: technical feasibility, architecture, dependencies, effort estimation, edge cases
- Tone: direct, technical, constructive
- Output: feasibility score (1-10), key concerns, questions for PM, suggestions

### Designer Reviewer
- Focus: user experience, information hierarchy, accessibility, interaction patterns
- Tone: empathetic, user-centered, specific
- Output: UX score (1-10), usability concerns, suggested improvements, user flow feedback

### Executive Reviewer
- Focus: business impact, market timing, competitive positioning, resource allocation, ROI
- Tone: strategic, outcome-focused, challenging
- Output: business case score (1-10), go/no-go recommendation, risk flags, success metrics

## Tech Preferences
- Python for backend/AI projects
- Next.js + Tailwind for portfolio site
- Deploy demos to Streamlit Cloud or HuggingFace Spaces
- Deploy site to Vercel
- Use Claude API or OpenAI API for LLM calls
- LangChain for RAG, LangGraph or CrewAI for agents
- ChromaDB for vector store (local dev), Pinecone for production

## Style Preferences
- I prefer concise, structured outputs
- Tables should be clean and copiable
- Use past-tense action verbs in any PM writing
- Follow Aakash Gupta's resume framework: identity → quantifiable achievement → specific technologies → vision
- All case studies follow: Problem → Analysis → Framework → Decision → Impact

## Sanitization Rules for Case Studies
- Replace customer names with "Customer A", "Enterprise Client X"
- Remove internal Jira/SCOP IDs
- Use ranges for metrics ("~$500K-$1M") instead of exact figures
- Anonymize colleague names ("a senior PM noted...")
- Share the thinking, not the data
