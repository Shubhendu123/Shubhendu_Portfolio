export type CaseStudy = {
  id: string;
  metricLabel: string;
  metricSub: string;
  title: string;
  description: string;
  status: "live" | "coming-soon" | "hidden";
  href?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "A1",
    metricLabel: "3 SYSTEMIC ROOT CAUSES",
    metricSub: "400+ escalations · 12 journeys · 2-yr analysis",
    title: "NSAW Simplification Initiative",
    description: "Identified 3 systemic root causes behind all escalations. Built P0/P1/P2 roadmap across 3 product teams.",
    status: "live",
    href: "/case-studies/a1",
  },
  {
    id: "A2",
    metricLabel: "~$1M OCI SAVINGS",
    metricSub: "426 instances · 7 depts · zero disruptions",
    title: "Test Drive Infrastructure Cleanup",
    description: "Three-layer ownership model. 88% gap recovery from a silent provisioning blind spot.",
    status: "live",
    href: "/case-studies/a2",
  },
  {
    id: "A3",
    metricLabel: "10 API SPECS",
    metricSub: "3-tier threshold logic · 4 UI states",
    title: "Storage Usage Tile & API",
    description: "Full requirement doc, entitled vs accessible storage insight, 4 UI alert states.",
    status: "hidden",
    href: undefined,
  },
  {
    id: "A4",
    metricLabel: "1-CLICK NAVIGATION",
    metricSub: "Dual-gateway UX · before/after validation",
    title: "Configuration Page Redesign",
    description: "Reduced setup path from 3 steps to 1. Task-oriented layout with before/after validation.",
    status: "hidden",
    href: undefined,
  },
  {
    id: "A5",
    metricLabel: "~$1M REVENUE IMPACT",
    metricSub: "100+ customers · schema forensics · 4 root causes",
    title: "Excess Capacity Investigation",
    description: "Schema-level forensics uncovered a silent provisioning gap. 13 anomalies escalated.",
    status: "live",
    href: "/case-studies/a5",
  },
  {
    id: "A6",
    metricLabel: "0 BLOCKERS · SHIPPED IN 4 WKS",
    metricSub: "Shipped without blocked Access Token API",
    title: "Smart Landing Page MVP",
    description: "Discovered OAC URLs encode dashboard names. Shipped the full feature without the blocked dependency.",
    status: "live",
    href: "/case-studies/a6",
  },
  {
    id: "A7",
    metricLabel: "3 SYSTEMS · SSO-FIRST",
    metricSub: "50+ roles → 3 · center-based prioritization",
    title: "Customer & User Mapping Logic",
    description: "Designed cross-system identity flow from NetSuite through NSAW to OAC. Role simplification and SSO-only MVP scope.",
    status: "live",
    href: "/case-studies/a7",
  },
];
