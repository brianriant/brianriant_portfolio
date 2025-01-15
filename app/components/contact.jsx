"use client";

import React from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";

const Contact = ({ isDarkMode }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    toast.info("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY || "");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form submitted successfully!");
        event.currentTarget.reset();
      } else {
        throw new Error(data.message || "Failed to submit form.");
      }
    } catch (error) {
      console.error(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      aria-labelledby="contact-title"
      className="w-full px-6 md:px-[12%] py-10 scroll-mt-20 font-bold bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
      />
      {/* Section Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        id="contact-title"
        className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80">
        Connect With Me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo text-gray-900 dark:text-white/90">
        Get in Touch
      </motion.h2>

      {/* Section Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-12 text-center max-w-2xl mx-auto mt-5 font-Ovo text-gray-600 leading-relaxed dark:text-white/80">
        Feel free to reach out to me for any inquiries, collaborations, or just
        to say hello. I'm always open to discussing new projects, creative
        ideas, or opportunities to be part of your vision. Let's connect and
        create something amazing together!
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        aria-label="Contact Form">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          {/* TODO: Understand what bg-color input error */}
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            aria-label="Name"
            className="w-full p-3 outline-none border border-gray-300 rounded-md  focus:border-black dark:bg-darkHover/30 dark:border-white/90  dark:text-white/80"
          />
          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            aria-label="Email"
            className="w-full p-3 outline-none border border-gray-300 rounded-md bg-white focus:border-black dark:bg-darkHover/30 dark:border-white/90 dark:text-white/80 "
          />
        </div>

        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.6 }}
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          aria-label="Message"
          className="w-full p-4 outline-none border border-gray-300 rounded-md bg-white mb-6 focus:border-black dark:bg-darkHover/30 dark:border-white/90 dark:text-white/80 "></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          aria-label="Submit Form"
          className="py-3 px-8 flex items-center gap-2 bg-black text-white rounded-full hover:bg-black/90 transition duration-300 mx-auto dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover">
          Submit Now
          <Image src={assets.right_arrow_bold} alt="Submit" className="w-4" />
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
