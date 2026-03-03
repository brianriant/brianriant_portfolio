import { createBucketClient } from '@cosmicjs/sdk';

export const cosmic = createBucketClient({
  bucketSlug:
    process.env.BUCKET_SLUG || process.env.NEXT_PUBLIC_BUCKET_SLUG || '',
  readKey:
    process.env.BUCKET_READ_KEY ||
    process.env.NEXT_PUBLIC_BUCKET_READ_KEY ||
    '',
});

export type CosmicBlogPost = {
  id: string;
  slug: string;
  title: string;
  metadata: {
    image: {
      imgix_url: string;
      url: string;
    };
    excerpt: string;
    content: string;
    date: string;
    read_time?: number;
    tags?: string[];
    author?: string;
  };
};

export async function getAllPosts() {
  try {
    const { objects: posts } = await cosmic.objects
      .find({
        type: 'blog-post',
      })
      .props(
        'id,slug,title,metadata.image,metadata.excerpt,metadata.content,metadata.date,metadata.read_time,metadata.tags,metadata.author'
      )
      .depth(1);

    return posts as CosmicBlogPost[];
  } catch (error) {
    console.error('Error fetching posts from Cosmic:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const { object: post } = await cosmic.objects
      .findOne({
        type: 'blog-post',
        slug,
      })
      .props(
        'id,slug,title,metadata.image,metadata.excerpt,metadata.content,metadata.date,metadata.read_time,metadata.tags,metadata.author'
      )
      .depth(1);

    return post as CosmicBlogPost | null;
  } catch (error) {
    console.error(`Error fetching post ${slug} from Cosmic:`, error);
    return null;
  }
}
