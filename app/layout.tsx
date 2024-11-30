import type { Metadata } from "next";
import localFont from "next/font/local";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const Jostfont = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Jostfont.variable} ${Jostfont.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
