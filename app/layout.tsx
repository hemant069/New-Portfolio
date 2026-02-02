import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import "./globals.css";
import Oneko from "@/components/Oneko";
import UmamiAnalytics from "@/components/Umami";


const Geistfont = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Geistfont} ${Geistfont} antialiased`}>
        {process.env.NODE_ENV === "production" && <UmamiAnalytics />}
        <Oneko />
        {children}
      </body>
    </html>
  );
}
