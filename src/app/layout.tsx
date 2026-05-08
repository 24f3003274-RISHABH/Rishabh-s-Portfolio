import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rishabh Keshari — CS & Data Science",
  description:
    "Portfolio of Rishabh Keshari — B.Tech CSE @ JNU & BS Data Science @ IIT Madras. Full-stack developer, ML enthusiast.",
  keywords: ["Rishabh Keshari", "portfolio", "JNU", "IIT Madras", "developer", "machine learning"],
  openGraph: {
    title: "Rishabh Keshari",
    description: "Full-stack dev & ML enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${syne.variable}`}>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
