import { Suspense } from 'react';
import LoadingSkeleton from '../../components/loading';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogPostClient from '../_components/blog-post-client';
import type { Metadata } from 'next';

interface MDXContentResult {
  metadata: any;
  content: string;
  Component: React.ComponentType;
}

async function getMDXContent(slug: string): Promise<MDXContentResult | null> {
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const MDXContent = (await import(`@/content/blog/${slug}.mdx`)).default;

    return {
      metadata: data,
      content,
      Component: MDXContent,
    };
  } catch (error) {
    console.error('Error loading MDX:', error);
    return null;
  }
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getMDXContent(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.excerpt,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      images: [
        {
          url: post.metadata.image,
          width: 1200,
          height: 630,
          alt: post.metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata.title,
      description: post.metadata.excerpt,
      images: [post.metadata.image],
      creator: '@brianriant',
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getMDXContent(slug);

  if (!post) {
    return <BlogPostClient metadata={null} mdxContent={null} />;
  }

  const { metadata, Component } = post;

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <BlogPostClient metadata={metadata} mdxContent={<Component />} />
    </Suspense>
  );
}
