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
