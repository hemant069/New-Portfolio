import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import "./globals.css";
import Oneko from "@/components/Oneko";


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
        <Oneko />
        {children}
      </body>
    </html>
  );
}
