import { assets } from "@/assets/assets";
import { workData } from "@/assets/work";
import Image from "next/image";
import { motion } from "framer-motion";
import useRevealAnimation from "./hooks/useReavealAnimation";

const Work = ({ isDarkMode }) => {
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
        duration: 0.4
      }
    },
  };

  const { ref: sectionRef, controls: sectionControls } = useRevealAnimation();

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={sectionControls}
      variants={containerVariants}
      id="projects"
      className="max-w-3xl w-11/12 lg:max-w-6xl mx-auto font-bold items-start text-left mt-20">
      <motion.h4
        variants={itemVariants}
        className="mb-2 text-lg font-inter text-gray-700 dark:text-white/80 underline decoration-wavy decoration-green-400 decoration-2">
        What I've Built
      </motion.h4>
      <motion.h2
        variants={itemVariants}
        className="text-5xl font-intertext-gray-900 dark:text-white/90  ">
        My Latest Work
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="mb-12 max-w-2xl mt-5 font-inter text-gray-600 dark:text-white/80 leading-relaxed">
        I have worked on a variety of projects, ranging from personal projects
        to client work. Here are some of the projects I have worked on:
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 ">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            className={`border shadow-md shadow-green-400 border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover dark:hover:bg-darkHove text-xs ${
              index === workData.length - 1 && workData.length % 2 !== 0
                ? "lg:col-span-2 md:col-span-2"
                : ""
            }`}>
            {/* Project Image */}
            {project.bgImage && (
              <div className="relative w-auto rounded-lg overflow-hidden">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  width={800}
                  height={500}
                />
              </div>
            )}

            {/* Project Title and Description */}
            <h3 className="text-2xl font-semibold  mt-4">{project.title}</h3>
            <p className="text-gray-600 dark:text-slate-400 mt-2 lg:text-sm">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-4 lg:text-sm">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-800 dark:text-black px-3 py-1 rounded-full lg:text-sm  transition duration-300 transform hover:bg-green-200">
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
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{
          scale: 1.03,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        href="/projects"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 my-20 hover:bg-lightHover dark:text-white dark:border-white dark:hover:bg-darkHover">
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
