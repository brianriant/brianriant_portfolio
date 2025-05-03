import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import useRevealAnimation from "./hooks/useReavealAnimation";

const Services = () => {
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
      id="services"
      className="max-w-3xl w-11/12 lg:max-w-6xl mx-auto font-bold items-start text-left mt-20 scroll-m-28">
      <motion.h4
        variants={itemVariants}
        className="mb-2 text-lg font-inter text-gray-700 dark:text-white/80 underline decoration-wavy decoration-green-400 decoration-2">
        What I Offer
      </motion.h4>
      <motion.h2
        variants={itemVariants}
        className="text-5xl mb-2 font-inter text-gray-900 dark:text-white/90">
        My Services
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="mb-10 max-w-2xl font-inter text-gray-600 leading-relaxed dark:text-white/80">
        I offer a variety of services to help you build a strong online presence
        and grow your business. Here are some of the services I provide:
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link, cta }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            className={`border shadow-md shadow-green-400 border-gray-400 dark:border-gray-700 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white  ${
              index === serviceData.length - 1 && serviceData.length % 2 !== 0
                ? "lg:col-span-2 md:col-span-2"
                : ""
            }`}>
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
              className="flex items-center gap-2 text-sm mt-5 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">
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
