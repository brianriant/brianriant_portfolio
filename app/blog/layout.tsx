import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import profile from './profile-og.png';

export const metadata: Metadata = {
  title: 'Blog | Brian Riant',
  description:
    'Explore insightful articles, tutorials, and thoughts on web development, React, TypeScript, Next.js, and modern software engineering practices by Brian Riant.',
  keywords: [
    'blog',
    'web development blog',
    'React tutorials',
    'TypeScript articles',
    'Next.js guides',
    'JavaScript best practices',
    'software engineering',
    'programming tutorials',
    'web design',
    'frontend development',
    'backend development',
    'full-stack development',
    'coding tips',
    'tech articles',
  ],
  openGraph: {
    title: 'Blog | Brian Riant',
    description:
      'Explore insightful articles, tutorials, and thoughts on web development, React, TypeScript, Next.js, and modern software engineering practices.',
    url: 'https://brianriant.vercel.app/blog',
    type: 'website',
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
    title: 'Blog | Brian Riant',
    description:
      'Explore insightful articles, tutorials, and thoughts on web development, React, TypeScript, Next.js, and modern software engineering practices.',
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
  alternates: {
    canonical: 'https://brianriant.vercel.app/blog',
  },
};

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return children;
}
