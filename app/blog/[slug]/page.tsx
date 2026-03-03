import { Suspense } from 'react';
import { getPostBySlug, CosmicBlogPost } from '@/app/lib/cosmic';
import BlogPostClient from '../_components/blog-post-client';
import { formatDate, stripHtml } from '@/app/lib/date-utils';
import type { Metadata } from 'next';
import Loading from "./loading";

interface PageProps {
  params: Promise<{ slug: string }>;
}


export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: stripHtml(post.metadata.excerpt),
    openGraph: {
      title: post.title,
      description: stripHtml(post.metadata.excerpt),
      images: [
        {
          url: post.metadata.image?.imgix_url || post.metadata.image?.url,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: stripHtml(post.metadata.excerpt),
      images: [post.metadata.image?.imgix_url || post.metadata.image?.url],
      creator: '@brianriant',
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <BlogPostClient metadata={null} content={null} />;
  }

  const metadata = {
    title: post.title,
    excerpt: stripHtml(post.metadata.excerpt),
    date: formatDate(post.metadata.date),
    image: post.metadata.image?.imgix_url || post.metadata.image?.url,
    readTime: post.metadata.read_time
      ? `${post.metadata.read_time} min`
      : undefined,
    tags: post.metadata.tags || [],
    author: post.metadata.author || 'Brian Riant',
  };

  return (
    <Suspense fallback={<Loading />}>
      <BlogPostClient
        metadata={metadata}
        content={post.metadata.content}
        slug={slug}
      />
    </Suspense>
  );
}
