import React from "react";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

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
        className="text-center mb-2 text-lg font-ovo text-gray-700 dark:text-white/80">
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo text-gray-900 dark:text-white/90">
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-12  text-center max-w-2xl mx-auto mt-5 font-Ovo text-gray-600 leading-relaxed dark:text-white/80">
        I offer a variety of services to help you build a strong online presence
        and grow your business. Here are some of the services I provide:
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto  gap-4 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
          whileHover={{ scale: 1.05 }}
            key={index}
            className="border shadow-md shadow-green-400 border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-200 dark:hover:bg-darkHover dark:hover:shadow-white">
            <Image src={icon} alt={title} className="w-10"></Image>

            <h3 className="my-4 text-lg text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-5 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image
                src={assets.right_arrow}
                className="w-4"
                alt="read more"></Image>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
