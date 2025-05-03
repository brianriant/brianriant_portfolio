import { motion } from "framer-motion";
import Image from "next/image";
import { posts } from "../blog/post";
import { assets } from "@/assets/assets";
import Link from "next/link";
import useRevealAnimation from "./hooks/useReavealAnimation";

const Blog = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
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
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.4,
      },
    },
  };

  const { ref: sectionRef, controls: sectionControls } = useRevealAnimation();
  let blogData = posts.slice(0, 6);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={sectionControls}
      variants={containerVariants}
      id="blog"
      className="max-w-3xl w-11/12 lg:max-w-6xl mx-auto font-bold items-start text-left mt-20 scroll-m-28 text-xs">
      {/* Section Header */}
      <motion.h4
        variants={itemVariants}
        className=" mb-2 text-lg font-inter text-gray-700 dark:text-white/80  underline decoration-wavy decoration-green-400 decoration-2">
        Insights & Updates
      </motion.h4>
      <motion.h2
        variants={itemVariants}
        className="text-5xl mb-2 font-inter text-gray-900 dark:text-white/90">
        Latest Blog Posts
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="mb-12 max-w-2xl mt-5 font-inter text-gray-600 leading-relaxed dark:text-white/80 ">
        Dive into my blog to explore articles, tutorials, and updates on
        technology, design, and development.
      </motion.p>

      {/* Blog Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 dark:text-black">
        {blogData.map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} key={blog.id}>
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className={`bg-no-repeat bg-cover bg-center relative border shadow-md shadow-green-400 border-gray-400 rounded-lg overflow-hidden cursor-pointer h-72 ${
                index === blogData.length - 1 && blogData.length % 2 !== 0
                  ? "lg:col-span-2 md:col-span-2"
                  : ""
              }`}
              style={{ backgroundImage: `url(${blog.image})` }}>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-5 left-5 right-5 bg-white dark:bg-darkHover rounded-lg p-4 group-hover:translate-y-[-10px] transition duration-300">
                <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                  {blog.title}
                </h3>
                <p className="lg:text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {blog.excerpt}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="lg:text-sm text-gray-500 dark:text-gray-400">
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
          </Link>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{
          scale: 1.03,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        href="blog"
        className="w-max flex items-center justify-center gap-2 text-green-500 border-[0.5px] border-gray-700 rounded-full py-3 px-10 my-20 hover:bg-lightHover  dark:border-white dark:hover:bg-darkHover">
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
