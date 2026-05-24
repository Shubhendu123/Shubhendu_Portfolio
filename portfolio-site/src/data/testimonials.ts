export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company?: string;
  date: string;
  linkedinUrl?: string;
};

const recommendationsUrl =
  "https://www.linkedin.com/in/shubhendu-vimal/details/recommendations/";

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had the opportunity to work with Shubhendu on AI and platform-focused initiatives and was consistently impressed by his ability to combine product leadership with a strong builder mindset. What stood out most was his ability to rapidly translate ideas into tangible prototypes and structured product directions...",
    name: "Manjunath Subramanian",
    title: "Chief Expert Product Management for Data",
    company: "SAP",
    date: "May 2026",
    linkedinUrl: recommendationsUrl,
  },
  {
    quote:
      "I had the pleasure of working with Shubhendu for over a year and a half on several features related to a complex data warehouse solution. As a technical writer collaborating closely with him on product documentation, I was able to observe firsthand his product management approach and execution style...",
    name: "Andreu Sánchez Massana",
    title: "Technical Writer",
    date: "May 2026",
    linkedinUrl: recommendationsUrl,
  },
  {
    quote:
      "I had the pleasure of working alongside Shubhendu on a web optimization project, where he excelled as a Senior Product Manager. He is not only strategic in defining product direction but also collaborative and humble, fostering a productive and positive work environment...",
    name: "Maninder Singh",
    title:
      "Lead Software Architect & Engineering Leader | AI Enabled Systems | Scalable Cloud Platforms",
    date: "Dec 2024",
    linkedinUrl: recommendationsUrl,
  },
  {
    quote:
      "I worked with Shubhendu for around 1.5 years as a part of his product team. He leads by example and helps his team in tackling complex problems. His attention to detail and the ability to handle different workstreams is admirable...",
    name: "Shakti Raj Singh",
    title: "Data Engineer",
    date: "Oct 2023",
    linkedinUrl: recommendationsUrl,
  },
];
