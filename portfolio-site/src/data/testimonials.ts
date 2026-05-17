export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  date: string;
  linkedinUrl?: string;
};

// TODO: Replace stubs with real LinkedIn recommendations.
// Request recommendations from: former manager at Oracle NetSuite,
// a peer PM or engineering lead, and a cross-functional partner (CS/Design/Data).
export const testimonials: Testimonial[] = [
  {
    // TODO: collect from former manager at Oracle NetSuite
    quote:
      "Placeholder — replace with a real LinkedIn recommendation. Request from your manager at Oracle NetSuite. Aim for 3–4 lines covering PM craft, AI product impact, or cross-functional leadership.",
    name: "TODO: Name",
    title: "TODO: Title",
    company: "Oracle NetSuite",
    date: "2025",
    linkedinUrl: undefined,
  },
  {
    // TODO: collect from peer PM or engineering lead at Fractal Analytics
    quote:
      "Placeholder — replace with a real LinkedIn recommendation. Request from a peer PM or engineering lead at Fractal Analytics. Focus on analytical depth, product vision, or delivery.",
    name: "TODO: Name",
    title: "TODO: Title",
    company: "Fractal Analytics",
    date: "2024",
    linkedinUrl: undefined,
  },
  {
    // TODO: collect from a cross-functional partner (Customer Success, Design, or Data Science)
    quote:
      "Placeholder — replace with a real LinkedIn recommendation. Request from a cross-functional partner — CS, Design, or Data Science. Focus on collaboration and customer empathy.",
    name: "TODO: Name",
    title: "TODO: Title",
    company: "TODO: Company",
    date: "2024",
    linkedinUrl: undefined,
  },
];
