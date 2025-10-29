// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NovaAI – Build smarter, ship faster.",
  description:
    "Modern SaaS landing built with Next.js, Tailwind CSS, and Framer Motion. Dark mode, responsive UI, and production-ready components.",
  openGraph: {
    title: "NovaAI – Build smarter, ship faster.",
    description:
      "Modern SaaS landing built with Next.js, Tailwind CSS, and Framer Motion.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaAI Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaAI – Build smarter, ship faster.",
    description:
      "Modern SaaS landing built with Next.js, Tailwind CSS, and Framer Motion.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
