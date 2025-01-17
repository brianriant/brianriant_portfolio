"use client"
import React,{useState, useEffect} from 'react'
import Navbar from '../components/navbar'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useDarkMode } from '../context/darkModeProvider'

const fetchPosts = async () => {
  // Replace with your API call or data fetching logic
  return [
    { id: 1, title: "First Post", slug: "first-post" },
    { id: 2, title: "Second Post", slug: "second-post" },
    { id: 3, title: "Second Post", slug: "second-post" },
    { id: 4, title: "Second Post", slug: "second-post" },
    { id: 5, title: "Second Post", slug: "second-post" },
    { id: 6, title: "Second Post", slug: "second-post" },
  ];
};

const Page = () => {
  const {isDarkMode, setIsDarkMode} = useDarkMode();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div className='min-h-screen'>
      {/* Navbar */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Content */}
      <main className="p-6 max-w-5xl mx-auto pt-32">
        {/* Header Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-center">
          Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-center mb-10 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
          Discover the latest updates, tutorials, and insights on technology,
          design, and development.
        </motion.p>

        {/* Blog List */}
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.li
              key={post.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-5 border rounded-lg shadow-sm transition-transform duration-300 hover:shadow-md hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
              <Link href={`/blog/${post.slug}`}className='block'>
                  {/* Post Title */}
                  <h2 className="text-xl font-semibold mb-2 group-hover:underline text-blue-600 dark:text-blue-400">
                    {post.title}
                  </h2>
                  {/* Excerpt */}
                  <p className="text-gray-700 dark:text-gray-400 mb-4">
                    {post.excerpt || "Click to read more about this post."}
                  </p>
                  {/* Read More */}
                  <span className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    Read More →
                  </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Page