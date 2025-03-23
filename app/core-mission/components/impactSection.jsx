// app/core-mission/components/ImpactSection.js
import { motion } from "framer-motion";
import { Users, BookOpen, Heart, Star } from "lucide-react";

export default function ImpactSection() {
  const impactItems = [
    {
      icon: Users,
      title: "Community Outreach",
      description:
        "Engage with over 500 community members through various evangelistic activities.",
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: BookOpen,
      title: "Children's Programs",
      description:
        "Provide educational materials and Bible lessons to 200+ children in the region.",
      color: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: Heart,
      title: "Health Initiatives",
      description:
        "Partner with local clinics to offer basic health checkups and education.",
      color: "bg-red-100 dark:bg-red-900/30",
      textColor: "text-red-600 dark:text-red-400",
    },
    {
      icon: Star,
      title: "Church Partnership",
      description:
        "Strengthen local churches through leadership training and support.",
      color: "bg-yellow-100 dark:bg-yellow-900/30",
      textColor: "text-yellow-600 dark:text-yellow-400",
    },
  ];

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Mission Impact
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Your support will help us make a significant difference in Makueni.
          Here's how your contribution will be used:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {impactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex gap-4">
                <div
                  className={`p-3 rounded-lg ${item.color} h-12 w-12 flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`h-6 w-6 ${item.textColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border border-indigo-100 dark:border-indigo-800/50">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            How Your Donation Helps
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 h-5 w-5 text-indigo-600 dark:text-indigo-400">
                •
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>KSh 200</strong> - Provides Bibles and educational
                materials for 5 children
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-5 w-5 text-indigo-600 dark:text-indigo-400">
                •
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>KSh 500</strong> - Supports a day of community outreach
                activities
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-5 w-5 text-indigo-600 dark:text-indigo-400">
                •
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>KSh 1,000</strong> - Helps provide transportation and
                accommodation for 1 missionary
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-5 w-5 text-indigo-600 dark:text-indigo-400">
                •
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>KSh 1,700</strong> - Covers full mission expenses for 1
                missionary for the entire trip
              </p>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
