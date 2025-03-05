import { ArrowLeft, Share2, Bookmark, Clock, Eye } from 'lucide-react';
import { Suspense } from 'react';
import LoadingSkeleton from '../../components/loading';
import { posts } from '../post';
import Link from 'next/link';
import Image from 'next/image';

const fetchPostBySlug = async (slug) => {
  // Simulated API call with caching
  await new Promise(resolve => setTimeout(resolve, 300));
  return posts.find(post => post.slug === slug) || null;
};

export default async function BlogPostPage({ params }) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16">
        <article className="max-w-4xl mx-auto px-4">
          {/* Navigation and Actions */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/blog"
              className="group flex items-center text-gray-600 hover:text-gray-900 transition-all"
              aria-label="Return to blog listing">
              <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">All Articles</span>
            </Link>
            <div className="flex gap-4">
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Share article">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Save article">
                <Bookmark className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-8 group">
              <Image
                src={post.image}
                alt={post.title}
                // width={1200}
                // height={600}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                // placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-4 text-white/90">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1.5" />
                  {Math.ceil(post.content.length / 1000)} min read
                </div>
                <div className="flex items-center text-sm">
                  <Eye className="w-4 h-4 mr-1.5" />
                  1.2k views
                </div>
              </div>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto text-center">
              <time className="block text-gray-500 text-sm font-medium">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mt-4">{post.excerpt}</p>
            </div>
          </header>

          {/* Article Content */}
          <section className="prose prose-lg max-w-none text-gray-700 mx-auto">
            <div className="border-l-4 border-blue-600 pl-6 mb-12">
              <p className="text-2xl font-medium text-gray-900">
                {post.content}
              </p>
            </div>

            {/* Featured Posts Grid */}
            <div className="mt-16 border-t pt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-8">
                More to Explore
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {posts.slice(0, 2).map((featured) => (
                  <Link
                    key={featured.id}
                    href={`/blog/${featured.slug}`}
                    className="group block p-6 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {featured.title}
                    </h4>
                    <p className="text-gray-600 mt-2">{featured.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
    </Suspense>
  );
}