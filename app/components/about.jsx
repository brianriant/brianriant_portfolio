import { motion } from "framer-motion";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import useRevealAnimation from "./hooks/useReavealAnimation";

const About = ({ isDarkMode }) => {
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

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={sectionControls}
      variants={containerVariants}
      id="about"
      className="max-w-3xl w-11/12 lg:max-w-6xl mx-auto font-bold items-start text-left mt-20 scroll-m-28">
      <motion.h4
        variants={itemVariants}
        className="mb-2 text-lg font-inter text-gray-700 dark:text-white/80 underline decoration-wavy decoration-green-400 decoration-2">
        Introduction
      </motion.h4>

      <motion.h2
        variants={itemVariants}
        className="text-5xl font-inter text-gray-900 dark:text-white/90">
        About Me
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-72 max-w-none">
          <Image
            src={assets.user_image}
            alt="user image"
            priority
            quality={75}
            sizes="100vw"
            placeholder="blur"
            className="w-full rounded-3xl shadow-lg shadow-green-400"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex-1">
          <p className="mb-10 max-w-2xl font-inter text-gray-600 leading-relaxed dark:text-white/80">
            I am a passionate{" "}
            <span className="underline decoration-wavy decoration-2 decoration-green-400">
              AI driven full-stack developer
            </span>{" "}
            specializing in modern web technologies and scalable applications
            🚀. With expertise in both{" "}
            <span className="underline decoration-wavy decoration-2 decoration-green-400">
              frontend (React.js, Next.js, TypeScript)
            </span>{" "}
            and{" "}
            <span className="underline decoration-wavy decoration-2 decoration-green-400">
              backend (Node.js, Express.js)
            </span>{" "}
            development, I create seamless, responsive web experiences. 💻 My
            work includes building e-commerce platforms, educational
            applications, and dynamic portfolio websites using the latest
            industry practices. 🛠️ I excel in database design, API development,
            and implementing robust authentication systems. Always exploring new
            technologies and frameworks, I'm committed to writing clean,
            maintainable code and delivering high-performance applications. ✨
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-6 lg:text-sm text-xs">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                key={index}
                className="border-[0.5px] shadow-md shadow-green-400 border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                  priority
                  quality={75}
                  sizes="100vw"
                  placeholder="blur"></Image>
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
      <motion.h4
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-4 text-gray-700 font-inter dark:text-white/80">
        Tools I Use
      </motion.h4>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center flex-wrap gap-4">
        {toolsData.map((tool, index) => (
          <motion.li
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            className="flex items-center justify-center w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer"
            key={index}>
            <Image
              src={tool}
              alt="tool"
              className="w-5 sm:w-7"
              priority
              quality={75}
              sizes="100vw"
              placeholder="blur"></Image>
          </motion.li>
        ))}
      </motion.ul>
      {/* Add Biblical Quote Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-8 p-4 rounded-2xl bg-gradient-to-r from-green-100 to-gray-50 dark:from-gray-900 dark:bg-darkHover shadow-lg">
        <motion.blockquote variants={itemVariants} className="relative border-b-2 border-green-400 pb-4">
          <span className="absolute top-0 left-0 text-6xl text-green-400 opacity-20">
            "
          </span>
          <p className="pt-8 px-4 text-xs md:text-sm lg:text-lg text-gray-700 dark:text-white/90 font-inter italic">
            Jesus saith unto him, I am the way, the truth, and the life: no man
            cometh unto the Father, but by me.
          </p>
          <footer className="mt-4 text-right text-gray-600 dark:text-white/70">
            <cite className="block font-semibold">John 14:6 KJV</cite>
          </footer>
        </motion.blockquote>
        <motion.blockquote variants={itemVariants} className="relative">
          <span className="absolute top-0 left-0 text-6xl text-green-400 opacity-20">
            "
          </span>
          <p className="pt-8 px-4 text-xs md:text-sm lg:text-lg text-gray-700 dark:text-white/90 font-inter italic">
            For I am not ashamed of the gospel of Christ: for it is the power of
            God unto salvation to every one that believeth.
          </p>
          <footer className="mt-4 text-right text-gray-600 dark:text-white/70">
            <cite className="block font-semibold">Romans 1:16 KJV</cite>
          </footer>
        </motion.blockquote>
      </motion.div>
    </motion.section>
  );
};

export default About;
