import { Inter } from 'next/font/google';
import { DarkModeProvider } from './context/darkModeProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import profile from './profile-og.png';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import NavbarServer from './components/navbar-server';
import FooterServer from './components/footer-server';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: 'Brian Riant | An Experienced Software Developer',
  description:
    'Discover the portfolio of Brian Riant, an experienced Software Developer specializing in modern web technologies. Explore projects, services, skills, and contact information.',
  keywords: [
    'Brian Riant',
    'brianriant',
    'brian',
    'riant',
    'Software Developer',
    'web developer',
    'portfolio',
    'self-taught developer',
    'JavaScript',
    'React',
    'Node.js',
    'web development',
    'web design',
    'front-end developer',
    'back-end developer',
    'mobile app developer',
    'Flutter',
    'React Native',
    'Next.js developer',
    'AI integration',
    'TypeScript expert',
    'React developer Kenya',
    'full-stack development Kiambu',
    'web performance optimization',
    'responsive web design',
    'API development',
    'database architecture',
    'UI/UX design',
  ],
  verification: {
    google: 'google-site-verification=your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      bing: 'your-bing-verification-code',
    },
  },
  authors: [{ name: 'Brian Riant' }],
  robots: 'index, follow',
  metadataBase: new URL('https://brianriant.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Brian Riant | An Experienced Software Developer',
    description:
      'Discover the portfolio of Brian Riant, an experienced Software Developer specializing in modern web technologies. Explore projects, services, skills, and contact information.',
    url: 'https://brianriant.vercel.app',
    siteName: 'Brian Riant Portfolio',
    images: [
      {
        url: profile.src,
        width: profile.width,
        height: profile.height,
        alt: 'Brian Riant Profile Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian Riant | An Experienced Software Developer',
    description:
      'Discover the portfolio of Brian Riant, an experienced Software Developer specializing in modern web technologies. Explore projects, services, skills, and contact information.',
    site: '@brianriant',
    creator: '@brianriant',
    images: [
      {
        url: profile.src,
        width: profile.width,
        height: profile.height,
        alt: 'Brian Riant Profile Image',
      },
    ],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="467662c8-caee-4bca-8a44-d0026a97c931"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getCookie(name) {
                  const value = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
                  return value ? value.pop() : null;
                }
                const theme = getCookie('theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.body.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <DarkModeProvider>
          <NavbarServer />
          {children}
          <FooterServer />
        </DarkModeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
