import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubhendu Vimal | Principal AI Product Manager",
  description:
    "Principal PM with 11+ years building AI-first enterprise SaaS. GenAI, Predictive AI, NLP, and Agentic products at Oracle NetSuite and Fractal Analytics. $5M+ revenue impact. Ph.D. Finance.",
  keywords: [
    "AI Product Manager",
    "Principal PM",
    "GenAI",
    "Agentic AI",
    "RAG",
    "Enterprise SaaS",
    "Oracle NetSuite",
    "Fractal Analytics",
  ],
  authors: [{ name: "Dr. Shubhendu Vimal" }],
  openGraph: {
    title: "Shubhendu Vimal | Principal AI PM",
    description:
      "Principal PM who builds AI products that ship — GenAI, Predictive AI, NLP, and Agentic. $5M+ revenue impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}
