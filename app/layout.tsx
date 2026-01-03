import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nandan Javagal | AI & ML Engineer",
  description:
    "Portfolio of Nandan Javagal, an AI & Machine Learning engineer specializing in AutoML, NLP, and Computer Vision.",
  keywords: [
    "Nandan Javagal",
    "AI",
    "Machine Learning",
    "Computer Vision",
    "NLP",
    "AutoML",
    "Portfolio",
    "YOLOv8",
    "BERT",
  ],
  authors: [{ name: "Nandan Javagal" }],
  openGraph: {
    title: "Nandan Javagal | AI & ML Engineer",
    description: "Premium portfolio showcasing AI/ML projects, skills, and experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandan Javagal | AI & ML Engineer",
    description: "Premium portfolio showcasing AI/ML projects, skills, and experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-slate-950 font-sans text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
