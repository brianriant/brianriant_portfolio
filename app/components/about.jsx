import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react";

function About({ isDarkMode }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 font-bold">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-inter text-gray-700 dark:text-white/80 underline decoration-wavy decoration-green-400 decoration-2 ">
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-inter text-gray-900 dark:text-white/90">
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 max-w-none">
          <Image
            src={assets.user_image}
            alt="user image"
            className="w-full rounded-3xl shadow-lg shadow-green-400"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1">
          <p className="mb-10 max-w-2xl font-inter text-gray-600 leading-relaxed dark:text-white/80">
            I am an experienced AI-driven full-stack developer with over 2
            years of experience collaborating with developers on various
            projects, contributing to their success and growth. 🚀 With a deep
            understanding of AI technologies, I'm able to build intelligent
            applications faster to solve complex problems efficiently. 💡 I
            constantly explore the intersection of software development and
            artificial intelligence, 🔍 always eager to learn new technologies
            and improve my skills across both domains. ✨
          </p>
          {/* <p className="mb-10 max-w-2xl font-inter">
            My journey in the tech world has been driven by passion and
            curiosity. I thrive in dynamic environments and enjoy tackling
            complex challenges. My goal is to create impactful solutions that
            make a difference.
          </p>
          <p className="max-w-2xl font-inter">
            When I'm not coding, you can find me exploring the latest tech
            trends, reading books, or enjoying outdoor adventures. Let's connect
            and create something amazing together!
          </p> */}

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-6">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] shadow-md shadow-green-400 border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"></Image>
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6 text-gray-700 font-inter dark:text-white/80">
            Tools I Use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center flex-wrap gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1"
                key={index}>
                <Image src={tool} alt="tool" className="w-5 sm:w-7"></Image>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;
