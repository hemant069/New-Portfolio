import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import "./globals.css";
import Oneko from "@/components/Oneko";
import UmamiAnalytics from "@/components/Umami";
import { ThemeProvider } from "@/components/providers";
import { Analytics } from "@vercel/analytics/next"
const Geistfont = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hemant Prajapati | Software Developer & Full-Stack Engineer",
  description:
    "I build from zero. Whether it's frontend, backend, full-stack applications, or AI-powered experiences, I work across the entire development lifecycle.",
  keywords: [
    "Hemant Prajapati",
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Hemant Prajapati" }],
  creator: "Hemant Prajapati",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hemant-port.vercel.app/",
    siteName: "Hemant Prajapati Portfolio",
    title: "Hemant Prajapati | Software Developer & Full-Stack Engineer",
    description:
      "I build from zero. Whether it's frontend, backend, full-stack applications, or AI-powered experiences.",
    images: [
      {
        url: "https://hemantbytes.me/my_ai_img-removebg-preview (1).png",
        width: 1200,
        height: 630,
        alt: "Hemant Prajapati - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemant Prajapati | Software Developer",
    description:
      "Full-Stack Developer building modern web applications with React, Next.js, and AI.",
    images: ["https://hemantbytes.me/my_ai_img-removebg-preview (1).png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hemant Prajapati",
  url: "https://hemantbytes.me",
  image: "https://hemant-port.vercel.app/my_ai_img-removebg-preview (1).png",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
  },
  sameAs: [
    "https://linkedin.com/in/hemant-prajapatii",
    "https://github.com/hemant069",
    "https://x.com/Hemantp7860"
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="AYB9VEKLwESlSCH8mrHaL2P52FaHBZwVzRRomDup9Nc" />
      </head>
      <body suppressHydrationWarning className={`${Geistfont.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>
          <Analytics />
          {process.env.NODE_ENV === "production" && <UmamiAnalytics />}
          <Oneko />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
