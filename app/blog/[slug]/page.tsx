import { Suspense } from 'react';
import { getPostBySlug, getAllPosts, CosmicBlogPost } from '@/app/lib/cosmic';
import BlogPostClient from '../_components/blog-post-client';
import { formatDate, stripHtml } from '@/app/lib/date-utils';
import type { Metadata } from 'next';
import Loading from './loading';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
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

  const description = stripHtml(post.metadata.excerpt);
  const imageUrl = post.metadata.image?.imgix_url || post.metadata.image?.url;
  const canonicalUrl = `https://brianriant.vercel.app/blog/${slug}`;

  return {
    title: `${post.title} | Brian Riant`,
    description,
    keywords: post.metadata.tags || [],
    authors: [{ name: post.metadata.author || 'Brian Riant' }],
    creator: post.metadata.author || 'Brian Riant',
    publisher: 'Brian Riant',
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      publishedTime: post.metadata.date,
      authors: [post.metadata.author || 'Brian Riant'],
      url: canonicalUrl,
      siteName: 'Brian Riant Portfolio',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [imageUrl],
      creator: '@brianriant',
      site: '@brianriant',
    },
    alternates: {
      canonical: canonicalUrl,
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

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: stripHtml(post.metadata.excerpt),
    image: post.metadata.image?.imgix_url || post.metadata.image?.url,
    datePublished: post.metadata.date,
    dateModified: post.metadata.date,
    author: {
      '@type': 'Person',
      name: post.metadata.author || 'Brian Riant',
      url: 'https://brianriant.vercel.app',
    },
    publisher: {
      '@type': 'Person',
      name: 'Brian Riant',
      url: 'https://brianriant.vercel.app',
    },
    url: `https://brianriant.vercel.app/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://brianriant.vercel.app/blog/${slug}`,
    },
    keywords: post.metadata.tags?.join(', ') || '',
    articleBody: stripHtml(post.metadata.content),
    wordCount: stripHtml(post.metadata.content).split(/\s+/).length,
    timeRequired: post.metadata.read_time
      ? `PT${post.metadata.read_time}M`
      : undefined,
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<Loading />}>
        <BlogPostClient
          metadata={metadata}
          content={post.metadata.content}
          slug={slug}
        />
      </Suspense>
    </>
  );
}
