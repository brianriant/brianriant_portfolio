import { NextResponse } from 'next/server';
import { getAllPosts, CosmicBlogPost } from '@/app/lib/cosmic';
import { BlogPost } from '@/app/types';

export async function GET() {
  try {
    const cosmicPosts = await getAllPosts();

    // Transform Cosmic posts to BlogPost format
    const posts: BlogPost[] = cosmicPosts
      .map((post: CosmicBlogPost) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.metadata.excerpt || '',
        date: post.metadata.date,
        image: post.metadata.image?.imgix_url || post.metadata.image?.url || '',
        readTime: post.metadata.read_time,
        content: post.metadata.content,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error loading posts:', error);
    return NextResponse.json(
      { error: 'Failed to load posts' },
      { status: 500 }
    );
  }
}
