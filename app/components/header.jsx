import Image from "next/image";
import { assets, developerData } from "@/assets/assets";
import { motion } from "framer-motion";
import useRevealAnimation from "@/app/components/hooks/useReavealAnimation";



const Header = () => {
  // Animation variants for consistent animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    },
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
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
      className="font-semibold max-w-3xl w-11/12 mx-auto text-left h-screen flex flex-col items-start gap-6 pt-24 lg:max-w-6xl">
      {/* Profile Picture */}
      <motion.div variants={profileVariants}>
        <Image
          src={developerData.image}
          alt="Brian Riant in Christ profile"
          className="rounded-full w-32 shadow-md shadow-green-400/60 hover:shadow-green-400/80 transition-shadow duration-300"
        />
      </motion.div>

      {/* Greetings */}
      <motion.h3
        variants={itemVariants}
        className="flex items-end gap-2 text-xl text-gray-700 dark:text-white/80">
        Hi, I'm{" "}
        <span className="underline decoration-wavy decoration-green-400 decoration-2">
          {developerData.name}
        </span>{" "}
        <motion.span
          animate={{
            rotate: [0, 15, -15, 15, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 2.5,
          }}
          className="inline-block origin-bottom">
          <Image
            src={assets.hand_icon}
            alt="Greeting hand icon"
            className="w-6"
          />
        </motion.span>
      </motion.h3>

      {/* Headline */}
      <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl">
        Experienced AI-driven{" "}
        <span className="underline decoration-wavy decoration-green-400 decoration-2">
          Full-stack developer
        </span>{" "}
        based in Kiambu, kenya.
      </motion.h1>

      {/* About Section */}
      <motion.p
        variants={itemVariants}
        className="font-inter text-gray-600 leading-relaxed dark:text-white/80">
        {developerData.about}
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-row items-center gap-4 mt-2 text-xs md:text-sm">
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="px-10 py-3 border border-white bg-black text-green-500 flex items-center rounded-full gap-2 hover:bg-gray-900 transition-all duration-300 dark:bg-transparent dark:border-white/50">
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow for Contact Me"
            className="w-4"
          />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href={
            "http://localhost:3000/resume" ||
            "https://brianriant.vercel.app/resume" ||
            "https://brianriant.co.ke/resume"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 border border-gray-500 flex items-center rounded-full gap-2 hover:border-gray-700 transition-all duration-300 dark:bg-green-100  text-green-500">
          View Cv
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </motion.a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-6 mt-2">
        {[
          {
            href: "https://www.linkedin.com/in/brianriant",
            icon: assets.linkedin,
            alt: "LinkedIn profile",
          },
          {
            href: "https://github.com/brianriant",
            icon: assets.github,
            alt: "GitHub profile",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform">
            <Image
              src={social.icon}
              alt={social.alt}
              className="w-8 dark:hover:filter dark:invert transition-all duration-300"
            />
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Header;