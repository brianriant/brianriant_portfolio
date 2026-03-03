import type { Metadata } from 'next';
import type { ReactNode } from 'react';

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Brian Riant',
    description:
      'Explore insightful articles, tutorials, and thoughts on web development, React, TypeScript, Next.js, and modern software engineering practices.',
    creator: '@brianriant',
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
