'use client';

import { ArrowLeft, Clock, Calendar, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { useDarkMode } from '../../context/darkModeProvider';
import SharePost from '../../components/SharePost';
import Comments from '../../components/Comments';
import { motion } from 'motion/react';
import { developerData } from "@/assets/assets";

interface BlogMetadata {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  author?: string;
  readTime?: string;
  tags?: string[];
}

interface BlogPostClientProps {
  metadata: BlogMetadata | null;
  content: string | null;
  slug?: string;
}

export default function BlogPostClient({
  metadata,
  content,
  slug = '',
}: BlogPostClientProps) {
  const { isDarkMode } = useDarkMode();


  if (!metadata) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? 'bg-darkTheme text-white' : 'bg-white'
        }`}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-green-500 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-darkTheme' : 'bg-gray-50'
      }`}
    >
      <main className="max-w-7xl mx-auto md:px-16 px-6">
        {/* Breadcrumb */}
        <header>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative flex items-center gap-x-2 border-b dark:border-zinc-800 border-zinc-200 pb-8 pt-20"
          >
            <Link
              href="/blog"
              className={`whitespace-nowrap text-sm border-b transition-colors ${
                isDarkMode
                  ? 'text-zinc-400 border-zinc-700 hover:text-white hover:border-white'
                  : 'text-zinc-600 border-zinc-300 hover:text-zinc-900 hover:border-zinc-900'
              }`}
            >
              cd ..
            </Link>
            <span className="text-zinc-400">/</span>
            <p className="text-zinc-400 text-sm truncate">{metadata.title}</p>
          </motion.div>
        </header>

        <article>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid lg:grid-cols-[75%,25%] grid-cols-1 relative"
          >
            {/* Main Content */}
            <div className="min-h-full lg:border-r border-r-0 dark:border-zinc-800 border-zinc-200 pt-10 pb-4 lg:pr-8 px-0">
              {/* Meta Info */}
              <div
                className={`flex items-center flex-wrap gap-4 text-sm mb-8 ${
                  isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                <div className="flex items-center gap-x-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={metadata.date}>{metadata.date}</time>
                </div>
                <a
                  href="#comments"
                  className={`flex items-center gap-x-2 ${
                    isDarkMode
                      ? 'text-green-400 hover:text-green-300'
                      : 'text-green-600 hover:text-green-700'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Comments</span>
                </a>
                {metadata.readTime && (
                  <div className="flex items-center gap-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{metadata.readTime}</span>
                  </div>
                )}
              </div>

              {/* Featured Image */}
              {metadata.image && (
                <div className="relative w-full aspect-[16/9] mb-8">
                  <Image
                    className="rounded-xl border dark:border-zinc-800 border-zinc-200 object-cover"
                    src={metadata.image}
                    alt={metadata.title}
                    fill
                    priority
                    sizes="(max-width: 1280px) 75vw, 960px"
                  />
                </div>
              )}

              {/* Article Content */}
              <section
                className={`prose prose-base md:prose-lg max-w-none ${
                  isDarkMode
                    ? 'prose-invert prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white prose-code:text-green-400 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-green-500 prose-blockquote:text-gray-400 prose-img:rounded-lg prose-img:shadow-lg prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300'
                    : 'prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-code:text-green-600 prose-code:bg-green-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200 prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-green-500 prose-blockquote:text-gray-600 prose-img:rounded-lg prose-img:shadow-lg'
                }`}
              >
                {content && (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                  >
                    {content}
                  </ReactMarkdown>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col lg:max-h-full h-max gap-y-8 sticky top-2 bottom-auto right-0 py-10 lg:px-6 px-0">
            <section className="border-b dark:border-green-800 border-green-200 pb-10">
              <p className="dark:text-green-400 text-zinc-500 text-sm">
                Written By
              </p>
              <address className="flex items-center gap-x-3 mt-4 not-italic">
                <div className="relative w-12 h-12">
                  <Image
                    src={developerData.image}
                    alt="Brian Riant profile"
                    layout="fill"
                    className="dark:bg-zinc-800 bg-zinc-300 rounded-full object-cover"
                  />
                </div>
                <div rel="author">
                  <h3 className="font-semibold text-lg tracking-tight">
                    {developerData.name}
                  </h3>
                  <a
                    href={developerData.twitterUrl}
                    className="text-blue-500 text-sm"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {`@${developerData.twitterUrl.split("twitter.com/")[1]}`}
                  </a>
                </div>
              </address>
            </section>

            <SharePost
              title={metadata.title}
              slug={slug}
              description={metadata.excerpt}
            />

            {/* <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
              <h3 className="text-xl font-semibold tracking-tight mb-4">
                Featured
              </h3>
              <FeaturedPosts params={slug} />
            </section> */}
          </aside>
          </motion.div>
        </article>

        {/* Comments Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          id="comments"
          className="max-w-3xl mt-10 lg:border-t dark:border-zinc-800 border-zinc-200 lg:py-10 pt-0"
        >
          <h3 className="lg:text-4xl text-3xl font-semibold tracking-tight mb-8">
            Comments
          </h3>
          <Comments />
        </motion.section>
      </main>
    </div>
  );
}
