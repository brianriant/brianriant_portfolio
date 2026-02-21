import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from "@/app/types";

export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), 'content/blog');
    const filenames = fs.readdirSync(postsDirectory);

    const posts: BlogPost[] = filenames
      .filter((filename) => filename.endsWith('.mdx'))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
          id: data.slug || filename.replace('.mdx', ''),
          slug: data.slug || filename.replace('.mdx', ''),
          title: data.title,
          excerpt: data.excerpt,
          date: data.date,
          image: data.image,
          readTime: data.readTime,
        };
      })
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
