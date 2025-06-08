import { Inter} from "next/font/google";
import { DarkModeProvider } from "./context/darkModeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import profile from "./profile.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata = {
  title: "Brian Riant in Christ | An Experienced Full-stack Developer",
  description:
    "Discover the portfolio of Brian Riant in Christ, an experienced full-stack developer specializing in modern web technologies. Explore projects, services, skills, and contact information.",
  keywords: [
    "Brian Riant in Christ",
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
    "Next.js developer",
    "AI integration",
    "TypeScript expert",
    "React developer Kenya",
    "full-stack development Kiambu",
    "web performance optimization",
    "responsive web design",
    "API development",
    "database architecture",
    "UI/UX design",
  ],
  verification: {
    google: "google-site-verification=your-google-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
  authors: [{ name: "Brian Riant in Christ" }],
  robots: "index, follow",
  charset: "utf-8",
  icons: "/path/to/favicon.ico",
  metadataBase: new URL("https://brianriant.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Brian Riant in Christ | An Experienced Full-stack Developer",
    description:
      "Discover the portfolio of Brian Riant in Christ, an experienced full-stack developer specializing in modern web technologies. Explore projects, services, skills, and contact information.",
    url: "https://brianriant.vercel.app",
    siteName: "Brian Riant in Christ Portfolio",
    images: [
      {
        url: profile.src,
        width: profile.width,
        height: profile.height,
        alt: "Brian Riant in Christ Profile Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Riant in Christ | An Experienced Full-stack Developer",
    description:
      "Discover the portfolio of Brian Riant in Christ, an experienced full-stack developer specializing in modern web technologies. Explore projects, services, skills, and contact information.",
    site: "@brianriant",
    creator: "@brianriant",
    images: [
      {
        url: profile.src,
        width: profile.width,
        height: profile.height,
        alt: "Brian Riant in Christ Profile Image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className}  antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        <DarkModeProvider>{children}</DarkModeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
