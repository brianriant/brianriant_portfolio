import { Outfit, Ovo } from "next/font/google";
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
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata = {
  favicon: "/path/to/favicon.ico", //TODO: Update with the actual path to your favicon
  title: "Brian Riant | A Self-taught Full-stack Developer",
  description:
    "Discover the portfolio of Brian Riant, a self-taught full-stack developer specializing in modern web technologies. Explore projects, Services, skills, and contact information.",
  keywords:
    "Brian Riant, full-stack developer, web developer, portfolio, self-taught developer, JavaScript, React, Node.js, web development",
  author: "Brian Riant",
  // viewport: "width=device-width, initial-scale=1.0", // This is now handled by the viewport object above
  robots: "index, follow",
  charset: "UTF-8",

  // Open Graph metadata
  "og:title": "Brian Riant | A Self-taught Full-stack Developer",
  "og:description":
    "Discover the portfolio of Brian Riant, a self-taught full-stack developer specializing in modern web technologies. Explore projects, Services skills, and contact information.",
  "og:image": "/path/to/favicon.ico", //TODO: Update with the actual path to your social image
  "og:url": "https://brianriant.vercel.app", // TODO: Update with your actual website URL
  "og:type": "website",
  // Twitter Card metadata
  "twitter:card": "summary_large_image",
  "twitter:title": "Brian Riant | A Self-taught Full-stack Developer",
  "twitter:description":
    "Discover the portfolio of Brian Riant, a self-taught full-stack developer specializing in modern web technologies. Explore projects, Services, skills, and contact information.",
  "twitter:image": "/path/to/favicon.ico", //TODO: Update with the actual path to your social image
  "twitter:site": "@brianriant", // Update with your actual Twitter handle
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
