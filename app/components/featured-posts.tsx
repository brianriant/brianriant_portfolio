import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/app/lib/cosmic';

export default async function FeaturedPosts({ params }: { params?: string }) {
  const allPosts = await getAllPosts();

  // Get latest 3 published posts (excluding current post)
  const latestPosts = allPosts.slice(0, 2);

  return (
    <>
      {latestPosts.map((post) => (
        <article
          key={post.id}
          className="mb-4 flex lg:flex-row flex-col"
        >
          <Link
            href={`/blog/${post.slug}`}
            className="flex flex-col gap-4 dark:bg-primary-bg bg-secondary-bg p-5 rounded-lg border dark:border-green-800 border-green-200 hover:dark:border-green-700 hover:border-green-300 transition-colors"
          >
            <Image
              src={post.metadata.image?.imgix_url || post.metadata.image?.url}
              className="dark:bg-green-800 bg-green-100 rounded-md object-cover"
              alt={post.title}
              width={400}
              height={230}
              quality={100}
              loading="lazy"
            />
            <div className="max-w-lg">
              <h2 className="max-w-sm text-lg tracking-tight mb-4">
                {post.title}
              </h2>
              <p className="dark:text-green-400 text-green-600 text-sm">
                {post.metadata.excerpt?.slice(0, 80).padEnd(83, '...')}
              </p>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}