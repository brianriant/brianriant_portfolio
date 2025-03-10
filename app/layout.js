import { Outfit, Ovo } from "next/font/google";
import { DarkModeProvider } from "./context/darkModeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Viewport } from "next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  favicon: "/path/to/favicon.ico",
  title: "Brian Riant | An Experienced Full-stack Developer",
  description:
    "Discover the portfolio of Brian Riant, An Experienced full-stack developer specializing in modern web technologies. Explore projects, services, skills, and contact information.",
  keywords:
    "Brian Riant, full-stack developer, web developer, portfolio, self-taught developer, JavaScript, React, Node.js, web development, web design, front-end developer, back-end developer, mobile app developer, Flutter, React Native",
  author: "Brian Riant",
  robots: "index, follow",
  charset: "UTF-8",

  // Open Graph metadata
  "og:title": "Brian Riant | An Experienced Full-stack Developer",
  "og:description":
    "Discover the portfolio of Brian Riant, An Experienced full-stack developer specializing in modern web technologies. Explore projects, Services skills, and contact information.",
  "og:image": "/path/to/favicon.ico",
  "og:url": "https://brianriant.vercel.app",
  "og:type": "website",
  "og:site_name": "Brian Riant Portfolio",

  // Twitter Card metadata
  "twitter:card": "summary_large_image",
  "twitter:title": "Brian Riant | An Experienced Full-stack Developer",
  "twitter:description":
    "Discover the portfolio of Brian Riant, An Experienced full-stack developer specializing in modern web technologies. Explore projects, Services, skills, and contact information.",
  "twitter:site": "@brianriant", 
  "twitter:image": "/path/to/favicon.ico",
  "twitter:creator": "@brianriant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        <DarkModeProvider>{children}</DarkModeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}