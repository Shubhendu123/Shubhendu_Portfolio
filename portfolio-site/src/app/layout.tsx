import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubhendu Vimal | AI Product Manager",
  description: "Principal PM who builds AI products. Portfolio showcasing enterprise PM work and hands-on AI projects.",
  keywords: ["Product Manager", "AI PM", "Agentic AI", "RAG", "MCP", "Oracle", "Enterprise SaaS"],
  authors: [{ name: "Shubhendu Vimal" }],
  openGraph: {
    title: "Shubhendu Vimal | AI Product Manager",
    description: "Principal PM who builds AI products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950">{children}</body>
    </html>
  );
}
