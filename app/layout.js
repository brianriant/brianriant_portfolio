import { Outfit, Ovo } from "next/font/google";
import { DarkModeProvider } from "./context/darkModeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import profile from "./profile.png"

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
  title: "Brian Riant | An Experienced Full-stack Developer",
  description:
    "Discover the portfolio of Brian Riant, an experienced full-stack developer specializing in modern web technologies. Explore projects, services, skills, and contact information.",
  keywords: [
    "Brian Riant",
    "brianriant",
    "brian",
    "riant",
    "full-stack developer",
    "web developer",
    "portfolio",
    "self-taught developer",
    "JavaScript",
    "React",
    "Node.js",
    "web development",
    "web design",
    "front-end developer",
    "back-end developer",
    "mobile app developer",
    "Flutter",
    "React Native",
  ],
  authors: [{ name: "Brian Riant" }],
  robots: "index, follow",
  charset: "utf-8",
  icons: "/path/to/favicon.ico",
  metadataBase: new URL("https://brianriant.vercel.app"),
  openGraph: {
    title: "Brian Riant | An Experienced Full-stack Developer",
    description:
      "Discover the portfolio of Brian Riant, an experienced full-stack developer specializing in modern web technologies. Explore projects, services, skills, and contact information.",
    url: "https://brianriant.vercel.app",
    siteName: "Brian Riant Portfolio",
    images: [
      {
        url: profile.src,
        width: 1200,
        height: 630,
        alt: "Brian Riant Profile Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Riant | An Experienced Full-stack Developer",
    description:
      "Discover the portfolio of Brian Riant, an experienced full-stack developer specializing in modern web technologies. Explore projects, services, skills, and contact information.",
    site: "@brianriant",
    creator: "@brianriant",
    images: [profile.src],
  },
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
