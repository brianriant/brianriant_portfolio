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
        isDarkMode ? 'bg-darkTheme' : 'bg-white'
      }`}
    >
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-3xl w-11/12 lg:max-w-6xl mx-auto font-bold items-start text-left pt-28 pb-20"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h4
            variants={itemVariants}
            className="mb-2 text-lg font-inter text-gray-700 dark:text-white/80 underline decoration-wavy decoration-green-400 decoration-2"
          >
            Latest Articles
          </motion.h4>
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-inter text-gray-900 dark:text-white/90 mb-8"
          >
            Insights & Updates
          </motion.h1>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className="relative max-w-2xl">
            <div
              className={`flex items-center rounded-lg px-6 py-4 border shadow-md shadow-green-400 ${
                isDarkMode
                  ? 'bg-darkHover border-gray-700'
                  : 'bg-white border-gray-400'
              }`}
            >
              <Search
                className={`w-5 h-5 mr-3 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}
              />
              <input
                type="text"
                placeholder="Search articles..."
                className={`flex-1 bg-transparent outline-none font-normal ${
                  isDarkMode
                    ? 'text-white placeholder-gray-400'
                    : 'text-gray-900 placeholder-gray-500'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { type: 'spring', stiffness: 400, damping: 10 },
                }}
                className={`border shadow-md shadow-green-400 border-gray-400 dark:border-gray-700 rounded-lg overflow-hidden cursor-pointer hover:bg-lightHover hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white ${
                  index === filteredPosts.length - 1 &&
                  filteredPosts.length % 3 !== 0
                    ? 'lg:col-span-2 md:col-span-2'
                    : ''
                }`}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Post Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Date and Read Time */}
                    <div
                      className={`flex items-center text-sm mb-3 font-normal ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>{post.readTime || '5 min read'}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-semibold mb-3 leading-tight ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className={`text-sm leading-6 mb-4 font-normal line-clamp-3 ${
                        isDarkMode ? 'text-white/80' : 'text-gray-600'
                      }`}
                    >
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div
                      className={`flex items-center gap-2 text-sm font-semibold ${
                        isDarkMode ? 'text-green-400' : 'text-green-600'
                      }`}
                    >
                      Read Article
                      <ArrowUp className="w-3 h-3 transform rotate-45" />
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
