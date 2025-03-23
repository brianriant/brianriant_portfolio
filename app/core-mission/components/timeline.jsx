// app/core-mission/components/Timeline.js
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  Heart,
  Book,
  MapPin,
  Gift,
} from "lucide-react";

export default function Timeline() {
  const milestones = [
    {
      date: "March 2025",
      title: "Fundraising Kickoff",
      description:
        "Begin fundraising efforts and team preparation for the mission trip.",
      icon: Heart,
    },
    {
      date: "April 15, 2025",
      title: "Team Training",
      description:
        "Specialized training sessions for all mission participants.",
      icon: Users,
    },
    {
      date: "May 10, 2025",
      title: "Packing & Final Preparation",
      description:
        "Gather all necessary supplies and materials for the mission.",
      icon: Gift,
    },
    {
      date: "May 17, 2025",
      title: "Departure to Makueni",
      description: "Travel from JKUAT to Makueni County to begin the mission.",
      icon: MapPin,
    },
    {
      date: "May 17-25, 2025",
      title: "Mission Activities",
      description:
        "Daily outreach, ministry, and community service in Makueni.",
      icon: Calendar,
    },
    {
      date: "May 25, 2025",
      title: "Return to JKUAT",
      description: "Travel back to campus and prepare mission report.",
      icon: Clock,
    },
    {
      date: "June 2025",
      title: "Mission Testimony",
      description: "Share experiences and testimonies from the mission trip.",
      icon: Book,
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
          Mission Timeline
        </h2>

        <div className="relative border-l-2 border-indigo-200 dark:border-indigo-800 pl-6 ml-6 space-y-10">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative">
                <div className="absolute -left-10 mt-1.5 h-7 w-7 rounded-full bg-indigo-100 dark:bg-indigo-900 border-2 border-indigo-500 dark:border-indigo-400 flex items-center justify-center">
                  <Icon
                    size={14}
                    className="text-indigo-600 dark:text-indigo-300"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {milestone.date}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
