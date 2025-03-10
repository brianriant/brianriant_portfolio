"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, BookOpen, Clock, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from './post';
import Navbar from '../components/navbar';
import { useDarkMode } from '../context/darkModeProvider';
import Footer from '../components/footer';

const Page = () => {
  const { isDarkMode } = useDarkMode();
  // const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top functionality
  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Filter posts based on search
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-darkTheme" : "bg-white"
      }`}>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={useDarkMode().setIsDarkMode}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center">
          <h1
            className={`text-5xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
            Insights & Updates
          </h1>
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center bg-white dark:bg-darkHover rounded-full px-6 py-3 shadow-lg">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search articles..."
                className="flex-1 bg-transparent outline-none dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.header>

        {/* Featured Post Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredPosts.slice(0, 1).map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative group col-span-1">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-96 rounded-3xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-white bg-pink-500 px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-block shadow-sm">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4 line-clamp-2">
                    {post.title}
                  </h2>
                  <div className="flex items-center text-gray-100 space-x-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />5 min read
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
          <div className="hidden lg:block relative col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="sticky top-24 space-y-8 pr-6">
              <div className="bg-gradient-to-br from-pink-100 to-purple-50 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Popular Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Design", "Development", "Business", "Marketing", "AI"].map(
                    (topic) => (
                      <Link
                        key={topic}
                        href={`/topics/${topic.toLowerCase()}`}
                        className="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-pink-500 hover:text-white transition-colors">
                        {topic}
                      </Link>
                    )
                  )}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Newsletter
                </h3>
                <p className="text-gray-600 mb-4">
                  Get the latest posts delivered right to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-pink-600 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div
                    className={`flex items-center text-sm mb-3 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                    {post.title}
                  </h3>
                  <p
                    className={`mb-4 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                    {post.excerpt}
                  </p>
                  <div
                    className={`flex items-center ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    }`}>
                    Read More
                    <ArrowUp className="w-4 h-4 ml-2 transform rotate-45" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Scroll to Top */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-900 hover:bg-gray-50"
            }`}>
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Page;