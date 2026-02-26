'use client';

import { ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { useDarkMode } from '../../context/darkModeProvider';

interface BlogMetadata {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  author?: string;
  readTime?: string;
}

interface BlogPostClientProps {
  metadata: BlogMetadata | null;
  content: string | null;
}

export default function BlogPostClient({
  metadata,
  content,
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <article>
          {/* Back Button */}
          <Link
            href="/blog"
            className={`inline-flex items-center mb-8 text-sm font-medium transition-all group ${
              isDarkMode
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>

          <header className="mb-10">
            {/* Title */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {metadata.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4">
              <div
                className={`flex items-center text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <Clock className="w-4 h-4 mr-2" />
                <time dateTime={metadata.date}>{metadata.date}</time>
              </div>
              {metadata.readTime && (
                <>
                  <span
                    className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}
                  >
                    •
                  </span>
                  <div
                    className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {metadata.readTime}
                  </div>
                </>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {metadata.image && (
            <div className="relative h-[300px] md:h-[450px] w-full rounded-xl overflow-hidden mb-12 shadow-xl">
              <Image
                src={metadata.image}
                alt={metadata.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          )}

          {/* Article Content */}
          <section
            className={`prose prose-base md:prose-lg lg:prose-xl max-w-none ${
              isDarkMode
                ? 'prose-invert prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white prose-code:text-green-400 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-green-500 prose-blockquote:text-gray-400 prose-img:rounded-lg prose-img:shadow-lg'
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

          {/* Back to Blog Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/blog"
              className={`inline-flex items-center text-sm font-medium transition-all group ${
                isDarkMode
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to all posts
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
