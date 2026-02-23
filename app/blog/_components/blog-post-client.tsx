'use client';

import { ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
      className={`min-h-screen ${
        isDarkMode ? 'bg-darkTheme text-white' : 'bg-gray-50'
      }`}
    >
      <main className="max-w-4xl mx-auto px-4 py-24">
        <article>
          <Link
            href="/blog"
            className={`inline-flex items-center mb-8 group ${
              isDarkMode
                ? 'text-white/80 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <header className="mb-12">
            {metadata.image && (
              <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src={metadata.image}
                  alt={metadata.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <h1
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {metadata.title}
            </h1>

            <div
              className={`flex flex-wrap items-center gap-4 text-sm mb-6 ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}
            >
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{metadata.date}</span>
              </div>
              {metadata.readTime && (
                <div className="flex items-center">
                  <span>•</span>
                  <span className="ml-2">{metadata.readTime}</span>
                </div>
              )}
            </div>
          </header>

          <section
            className={`prose prose-lg max-w-none ${
              isDarkMode
                ? 'prose-invert prose-headings:text-white prose-p:text-white/90 prose-strong:text-white prose-code:text-green-400 prose-a:text-green-400'
                : 'prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-green-600'
            }`}
          >
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
          </section>
        </article>
      </main>
    </div>
  );
}
