// app/core-mission/components/FAQSection.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What exactly is the Makueni Mission?",
      answer:
        "The Makueni Mission is a 9-day outreach program organized by JKUAT Christian Union. We'll be traveling to Makueni County to conduct evangelistic outreach, children's programs, provide basic medical assistance, and support local churches.",
    },
    {
      question: "How will my donation be used?",
      answer:
        "Your donation will help cover essential expenses including transportation, accommodation, meals, and mission materials. Each missionary needs to raise KSh 1,700 to participate in this mission. The funds enable us to effectively serve the community in Makueni and spread the Gospel.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Donations made to JKUAT Christian Union for mission purposes may be tax-deductible. Please consult with a tax professional regarding your specific situation. We can provide a receipt for your donation upon request.",
    },
    {
      question: "Can I specify how I want my donation to be used?",
      answer:
        "Yes, you can specify if you'd like your donation to support a specific aspect of the mission, such as children's programs, medical outreach, or general missionary support. Please include a note with your donation.",
    },
    {
      question:
        "Are there other ways I can support the mission besides financial donations?",
      answer:
        "Absolutely! Prayer support is vital to our mission. You can also donate supplies, like Bibles, educational materials, or medical supplies. Additionally, spreading the word about our mission through your social networks helps tremendously.",
    },
    {
      question: "How can I follow the progress of the mission?",
      answer:
        "We'll be posting regular updates on the JKUAT Christian Union social media accounts. Donors will also receive email updates during and after the mission with stories and photos from our time in Makueni.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
          Frequently Asked Questions
        </h2>

        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-5 text-left focus:outline-none">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="p-5 pt-0 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Feel free to reach out if you have any other questions about the
            mission or how you can help.
          </p>
          <a
            href="mailto:missions@jkuatcu.org"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
