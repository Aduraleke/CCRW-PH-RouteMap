import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Use a clean, modern font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CCRW Crusade Roadmap",
  description: "Find your route and get to the program with ease 🚍",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-brand-white text-brand-red min-h-screen`}
      >
        <div className="max-w-md mx-auto px-4 py-6">{children}</div>
      </body>
    </html>
  );
}
