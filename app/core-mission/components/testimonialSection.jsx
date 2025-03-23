// app/core-mission/components/TestimonialSection.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Participating in the Makueni mission last year was a life-changing experience. The warmth and openness of the community touched my heart, and I was blessed to see so many people respond to the Gospel message.",
      name: "Sarah Mwangi",
      role: "Previous Mission Participant",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote:
        "The mission team brought such joy to our children with their programs and Bible teachings. Their service and dedication to our community have made a lasting impact that continues today.",
      name: "Pastor James Mutua",
      role: "Local Church Leader, Makueni",
      image: "/images/testimonial-2.jpg",
    },
    {
      quote:
        "I've supported several missions to Makueni, and I'm always impressed by the team's dedication and the tangible impact they make. Supporting this mission is one of the best investments I've made.",
      name: "David Kamau",
      role: "Mission Supporter",
      image: "/images/testimonial-3.jpg",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Testimonials
        </h2>

        <div className="relative mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="absolute top-8 left-10 text-indigo-400 opacity-30">
            <Quote size={80} />
          </div>

          <div className="p-8 md:p-12 relative z-10">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative h-60 w-60 md:h-48 md:w-48 mx-auto rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center md:justify-end mt-8 gap-3">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
                aria-label="Previous testimonial">
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
                aria-label="Next testimonial">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
