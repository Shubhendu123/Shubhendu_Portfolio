# AI PRD Generator with Multi-Agent Review

An AI-powered system that generates Product Requirements Documents from rough feature notes, then reviews them from three stakeholder perspectives: Engineer, Designer, and Executive.

## What It Does

```
Input: Rough feature notes
  ↓
Step 1: Generate structured PRD using template
  ↓
Step 2: Run 3 parallel agent reviews
  ├── Engineer Agent: Technical feasibility, architecture, edge cases
  ├── Designer Agent: User experience, flows, accessibility
  └── Executive Agent: Business case, ROI, strategic fit
  ↓
Output: Polished PRD with stakeholder feedback
```

## Why This Exists

As a PM, I spend significant time:
1. Converting rough notes into structured PRDs
2. Getting feedback from engineering, design, and leadership
3. Iterating based on that feedback

This tool automates the first pass of all three, letting me focus on judgment calls rather than document formatting.

## Project Structure

```
ai-prd-generator/
├── README.md
├── agents/
│   ├── engineer.md      # Technical reviewer persona
│   ├── designer.md      # UX reviewer persona
│   └── executive.md     # Business reviewer persona
├── templates/
│   └── prd_template.md  # Structured PRD format
├── input/
│   └── sample_notes.md  # Example: Storage Usage Tile feature
├── output/
│   └── (generated PRDs)
└── demo/
    └── screenshots/
```

## Usage

### With Claude Code

1. Open this folder in Claude Code
2. Provide your feature notes (or use `input/sample_notes.md`)
3. Ask Claude to:
   - Generate a PRD using the template
   - Review it with each agent persona
   - Consolidate feedback into a final document

Example prompt:
```
Read the feature notes in input/sample_notes.md.
Generate a full PRD using templates/prd_template.md.
Then review it using each agent persona in agents/.
Output the final PRD with all feedback to output/.
```

### Sample Input

The included sample (`input/sample_notes.md`) is based on a real feature I built at Oracle: a Storage Usage Tile for enterprise analytics configuration. It demonstrates:
- Real problem context (customer escalations)
- Technical nuance (entitled vs. accessible storage)
- Defined UI states
- API dependencies

## Agent Personas

| Agent | Focus | Key Questions |
|-------|-------|---------------|
| **Engineer** | Technical feasibility, architecture, effort | Can we build this? What's missing? |
| **Designer** | User experience, flows, accessibility | Is this intuitive? What states are missing? |
| **Executive** | Business case, ROI, strategic fit | Should we build this? What's the smallest scope? |

## Built With

- Claude Code for orchestration
- Markdown for all artifacts (portable, version-controlled)
- No external dependencies required

## Author

**Shubhendu Vimal**
Principal Product Manager | [LinkedIn](https://linkedin.com/in/shubhenduvimal) | [Portfolio](https://shubhendu.dev)

---

Part of my [AI PM Portfolio](https://github.com/Shubhendu123/Shubhendu_Portfolio) demonstrating hands-on AI product building.
