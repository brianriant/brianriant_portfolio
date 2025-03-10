import React from "react";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion"; // Corrected import for framer-motion

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20 font-bold">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo text-gray-700 dark:text-white/80  underline decoration-wavy decoration-green-400 decoration-2">
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-ovo text-gray-900 dark:text-white/90">
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-12 text-center max-w-2xl mx-auto mt-5 font-ovo text-gray-600 leading-relaxed dark:text-white/80">
        I offer a variety of services to help you build a strong online presence
        and grow your business. Here are some of the services I provide:
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link, cta }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border shadow-md shadow-green-400 hover:shadow-black border-gray-400 dark:border-gray-700 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover transition-all duration-300 dark:hover:shadow-white flex-col justify-items-start">
            <div className="">
              <Image
                src={icon}
                alt={title}
                width={40}
                height={40}
                className="size-10"
              />{" "}
            </div>
            <h3 className="my-4 text-lg font-semibold text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-6 dark:text-white/80">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-200">
              {cta}
              <Image
                src={assets.right_arrow}
                width={16}
                height={16}
                alt="read more"
                className="w-3 h-3"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
