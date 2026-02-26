'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, BookOpen, Clock, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDarkMode } from '../context/darkModeProvider';
import { BlogPost } from '../types';

const Page = () => {
  const { isDarkMode } = useDarkMode();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
        duration: 0.4,
      },
    },
  };

  useEffect(() => {
    setMounted(true);
    const loadPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    };
    loadPosts();
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-darkTheme">
        <main className="max-w-3xl w-11/12 lg:max-w-6xl mx-auto items-start text-left pt-28 pb-20">
          <div className="mb-16">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Blog
            </h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Explore All
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-normal">
              Welcome to my blog where I share insights, tutorials, and thoughts
              on web development, design, and technology.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-darkTheme' : 'bg-gray-50'
      }`}
    >
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-3xl w-11/12 lg:max-w-6xl mx-auto items-start text-left pt-28 pb-20"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.h4
            variants={itemVariants}
            className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
          >
            Blog
          </motion.h4>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Explore All
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-normal"
          >
            Welcome to my blog where I share insights, tutorials, and thoughts
            on web development, design, and technology.
          </motion.p>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className="relative mt-8">
            <div
              className={`flex items-center rounded-xl px-5 py-3.5 border transition-all duration-200 ${
                isDarkMode
                  ? 'bg-gray-800/50 border-gray-700 focus-within:border-green-500'
                  : 'bg-gray-50 border-gray-200 focus-within:border-green-500'
              }`}
            >
              <Search
                className={`w-5 h-5 mr-3 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              />
              <input
                type="text"
                placeholder="Search articles..."
                className={`flex-1 bg-transparent outline-none font-normal text-base ${
                  isDarkMode
                    ? 'text-white placeholder-gray-500'
                    : 'text-gray-900 placeholder-gray-400'
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className={`group relative rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20'
                    : 'bg-white border-gray-300 hover:border-green-500 shadow-md hover:shadow-xl hover:shadow-green-500/10'
                }`}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex flex-col md:flex-row gap-6 p-6">
                    {/* Post Image */}
                    <div className="relative h-48 md:h-40 md:w-72 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 288px"
                      />
                    </div>

                    {/* Post Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h2
                        className={`text-2xl md:text-3xl font-bold mb-3 leading-tight group-hover:text-green-500 transition-colors ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p
                        className={`text-base leading-relaxed mb-4 font-normal line-clamp-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {post.excerpt}
                      </p>

                      {/* Date and Read Time */}
                      <div
                        className={`flex items-center text-sm font-normal ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime || '5 min'}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="col-span-full text-center py-20"
            >
              <p
                className={`text-lg ${
                  isDarkMode ? 'text-white/80' : 'text-gray-600'
                }`}
              >
                {searchQuery
                  ? 'No articles found matching your search.'
                  : 'No articles available yet.'}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg shadow-green-400 border-2 transition-colors ${
              isDarkMode
                ? 'bg-darkHover border-gray-700 text-green-400 hover:bg-darkTheme'
                : 'bg-white border-gray-400 text-green-600 hover:bg-lightHover'
            }`}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </motion.main>
    </div>
  );
};

export default Page;
