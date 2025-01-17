import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { blogData, assets } from "@/assets/assets"; // Ensure you have blogData and assets defined.

const Blog = ({ isDarkMode }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="blog"
      className="w-full px-[12%] py-10 scroll-mt-20 font-bold">
      {/* Section Header */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80">
        Insights & Updates
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo text-gray-900 dark:text-white/90">
        Latest Blog Posts
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-12 text-center max-w-2xl mx-auto mt-5 font-Ovo text-gray-600 leading-relaxed dark:text-white/80">
        Dive into my blog to explore articles, tutorials, and updates on
        technology, design, and development.
      </motion.p>

      {/* Blog Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 dark:text-black">
        {blogData.map((blog, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="bg-no-repeat bg-cover bg-center relative border shadow-md shadow-green-400 border-gray-400 rounded-lg overflow-hidden cursor-pointer group h-96"
            style={{ backgroundImage: `url(${blog.image})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

            {/* Content */}
            <div className="absolute bottom-5 left-5 right-5 bg-white dark:bg-gray-800 rounded-lg p-4 group-hover:translate-y-[-10px] transition duration-300">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {blog.excerpt}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {blog.date}
                </span>
                <Image
                  src={assets.right_arrow}
                  alt="Read more"
                  className="w-5"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="blog"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover">
        Show More
        <Image
          src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold}
          alt="Show more"
          className="w-4"
        />
      </motion.a>
    </motion.section>
  );
};

export default Blog;
