import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

// Technical, tactical font for headers
const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

// Modern, geometric font for body copy
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "FILTHY STORE | Luxury Gaming Assets",
  description: "A brokered luxury marketplace for verified high-tier PUBG, PES, and Free Fire accounts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-obsidian font-body text-white antialiased selection:bg-[var(--cyan-blue-soft)] selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
