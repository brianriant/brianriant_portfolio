"use client";

import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import useRevealAnimation from "./hooks/useReavealAnimation";
import { assets } from "@/assets/assets";

const Contact = ({ isDarkMode }) => {
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

  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const { ref: sectionRef, controls: sectionControls } = useRevealAnimation();
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      toast.info("Sending...");
      const formData = new FormData(event.target);
      formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY || "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form submitted successfully!");
        event.target.reset();
      } else {
        toast.error(data.message || "Failed to submit form");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={sectionControls}
      variants={containerVariants}
      id="contact"
      aria-labelledby="contact-title"
      className="max-w-3xl w-11/12 lg:max-w-6xl mx-auto font-bold items-start text-left mt-20 scroll-m-28 text-xs">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="text-xs lg:text-sm font-Inter"
        theme={isDarkMode ? "dark" : "light"}
      />
      {/* Section Title */}
      <motion.h4
        variants={itemVariants}
        id="contact-title"
        className=" mb-2 text-lg font-inter text-gray-700 dark:text-white/80  underline decoration-wavy decoration-green-400 decoration-2">
        Connect With Me
      </motion.h4>
      <motion.h2
        variants={itemVariants}
        className="text-5xl font-inter text-gray-900 dark:text-white/90">
        Get in Touch
      </motion.h2>

      {/* Section Description */}
      <motion.p
        variants={itemVariants}
        className="mb-12 lg:text-sm  max-w-2xl  mt-5 font-inter text-gray-600 leading-relaxed dark:text-white/80">
        Feel free to reach out to me for any inquiries, collaborations, or just
        to say hello. I'm always open to discussing new projects, creative
        ideas, or opportunities to be part of your vision. Let's connect and
        create something amazing together!
      </motion.p>

      <motion.form
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        onSubmit={onSubmit}
        className="max-w-2xl  "
        aria-label="Contact Form">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 mt-10 mb-8 lg:text-sm">
          {/* TODO: Understand what bg-color input error */}
          <motion.input
            variants={formFieldVariants}
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            aria-label="Name"
            className="w-full p-3 outline-none border border-gray-300 rounded-full  invalid:text-pink-600 focus:border-green-500 focus:outline focus:outline-green-500  dark:bg-darkHover/30 dark:border-white/90  dark:text-white/80"
          />
          <motion.input
            variants={formFieldVariants}
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            aria-label="Email"
            className="w-full p-3 outline-none border border-gray-300 invalid:text-pink-600 focus:border-green-500 focus:outline focus:outline-green-500  rounded-full bg-white dark:bg-darkHover/30 dark:border-white/90 dark:text-white/80 "
          />
        </div>

        <motion.textarea
          variants={formFieldVariants}
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          aria-label="Message"
          className=" w-full p-4 outline-none border border-gray-300 rounded-xl bg-white mb-6 invalid:text-pink-600 focus:border-green-500 focus:outline focus:outline-green-500  focus:invalid:outline-pink-500focus:border-black dark:bg-darkHover/30 dark:border-white/90 dark:text-white/80 "></motion.textarea>

        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.03,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          type="submit"
          aria-label="Submit Form"
          className="py-3 px-8 flex items-center gap-2 bg-black text-green-500 rounded-full hover:bg-black/90 transition duration-300 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover">
          Send Now
          <Image src={assets.right_arrow_bold} alt="Submit" className="w-4" />
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
