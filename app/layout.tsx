import type { Metadata } from "next";
import {Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Geist, Geist_Mono, Nunito 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const nunito = Nunito({
//     variable: "--font-nunito",
//     subsets: ["latin"],
//   });

export const metadata: Metadata = {
  title: "Flare",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
