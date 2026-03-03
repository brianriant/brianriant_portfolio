'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, BookOpen, Clock, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDarkMode } from '../context/darkModeProvider';
import { BlogPost } from '../types';
import { useRevealAnimation } from '../components/hooks/useReavealAnimation';

const Page = () => {
  const { isDarkMode } = useDarkMode();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const { ref: sectionRef, controls: sectionControls } = useRevealAnimation();

  useEffect(() => {
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

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-darkTheme' : 'bg-gray-50'
      }`}
    >
      <motion.main
        ref={sectionRef}
        initial="hidden"
        animate={sectionControls}
        variants={containerVariants}
        className="max-w-4xl w-11/12 mx-auto items-start text-left pt-28 pb-20"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.h1
            variants={itemVariants}
            className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
          >
            Blog
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Explore All
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-normal"
          >
            Welcome to my blog where I share insights, tutorials, and thoughts
            on web development, design, and technology.
          </motion.p>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className="relative mt-8 ">
            <div
              className={`flex items-center rounded-xl px-5 py-3.5 border transition-all duration-200 shadow-md shadow-green-400 border-gray-400 dark:border-gray-700 cursor-pointer hover:bg-lightHover hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white ${
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
                className={`flex-1 bg-transparent outline-none font-normal text-base  ${
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
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-8"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                className={`group relative rounded-xl border shadow-md shadow-green-400 overflow-hidden cursor-pointer transition-all duration-300 ${
                  isDarkMode
                    ? ' border-gray-700 hover:bg-darkHover hover:shadow-white'
                    : 'bg-white border-gray-400 hover:bg-lightHoverhover:shadow-black'
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
                        className="object-cover transition-transform duration-500 group-hover:scale-105  rounded-lg"
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
