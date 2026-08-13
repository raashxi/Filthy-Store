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
  title: "Filthy Store | Premium Game Accounts",
  description: "The safest place to buy high-tier PUBG, PES, and Free Fire accounts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#050505] text-white antialiased font-body selection:bg-green-500/30">
        <Navbar />
        {children}
      </body>
    </html>
  );
}