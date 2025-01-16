import React from "react";
import Image from "next/image";
import { assets, developerData } from "@/assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <section className="font-semibold max-w-3xl w-11/12 mx-auto text-center h-screen flex flex-col items-center gap-6 pt-24">
      {/* Profile Picture */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}>
        <Image
          src={developerData.image}
          alt="Brian Riant profile"
          className="rounded-full w-32 shadow-lg shadow-green-400"
        />
      </motion.div>
      {/* Greetings */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl text-gray-700 dark:text-white/80">
        Hi, I'm {developerData.name}{" "}
        <Image
          src={assets.hand_icon}
          alt="Greeting hand icon"
          className="w-6"
        />
      </motion.h3>
      {/* Headline */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl md:text-4xl">
        Experienced Full-stack developer based in Kenya.
      </motion.h1>
      {/* About Section */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo
      text-gray-600 leading-relaxed dark:text-white/80 ">
        {developerData.about}
      </motion.p>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white bg-black text-white flex items-center rounded-full gap-2 hover:bg-gray-900 transition dark:bg-transparent dark:border-white/50">
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow for Contact Me"
            className="w-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="./sample-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 border border-gray-500 flex items-center rounded-full gap-2 hover:border-gray-700 transition bg-white dark:text-black">
          Download CV
          <Image
            src={assets.download_icon}
            alt="Right arrow for Download CV"
            className="w-4"
          />
        </motion.a>
      </div>
      {/* Social Links */}
      <div className="flex items-center gap-6 mt-2">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          href="https://www.linkedin.com/in/brianriant"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src={assets.linkedin}
            alt="LinkedIn profile link"
            className="w-8 dark:hover:filter dark:invert"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          href="https://github.com/brianriant"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src={assets.github}
            alt="GitHub profile link"
            className="w-8 dark:hover:filter dark:invert"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Header;
