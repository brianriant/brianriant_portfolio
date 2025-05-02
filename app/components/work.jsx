import React from "react";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion"; // Corrected import for framer-motion

const Work = ({ isDarkMode }) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      id="projects"
      className="container mx-auto  w-full py-10 scroll-m-20 font-bold">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-inter text-gray-700 dark:text-white/80">
        What I've Built
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-intertext-gray-900 dark:text-white/90  underline decoration-wavy decoration-green-400 decoration-2">
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-12 text-center max-w-2xl mx-auto mt-5 font-inter text-gray-600 dark:text-white/80 leading-relaxed">
        I have worked on a variety of projects, ranging from personal projects
        to client work. Here are some of the projects I have worked on:
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-transparent mx-4 transition-transform 
            border shadow-md shadow-green-400 border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover 
            dark:hover:bg-darkHover
            hover:-translate-y-1 duration-200 group
            ">
            {/* Project Image */}
            {project.bgImage && (
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}

            {/* Project Title and Description */}
            <h3 className="text-2xl font-semibold  mt-4">{project.title}</h3>
            <p className="text-gray-600 dark:text-slate-400 mt-2">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 dark:text-black px-3 py-1 rounded-full text-sm font-medium transition duration-300 transform hover:bg-blue-200">
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex space-x-4 mt-4">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 border-2 border-gray-700 rounded-full py-1 px-5 hover:bg-black
                   hover:text-white dark:text-white dark:border-white">
                  {link.type}
                  <Image
                    src={
                      isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon
                    }
                    alt={link.type}
                    width={16}
                    height={16}
                    className="size-2"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="/projects"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover">
        Show more
        <Image
          src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold}
          alt="show more"
          width={16}
          height={16}
          className="size-4"
        />
      </motion.a>
    </motion.section>
  );
};

export default Work;
