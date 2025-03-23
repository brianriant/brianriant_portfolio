// app/core-mission/components/DonationProgress.js
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Heart, Coffee } from "lucide-react";

export default function DonationProgress({ current, goal }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Animate percentage on mount and when current value changes
    const calculatedPercentage = Math.min(
      Math.round((current / goal) * 100),
      100
    );
    setPercentage(calculatedPercentage);
  }, [current, goal]);

  return (
    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-5 mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-gray-800 dark:text-white">
          Fundraising Progress
        </h4>
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {percentage}% Complete
        </p>
      </div>

      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-300">
        <p>KSh {current.toLocaleString()}</p>
        <p>Goal: KSh {goal.toLocaleString()}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="flex flex-col items-center p-2 bg-white dark:bg-gray-700 rounded-lg">
          <Users
            size={18}
            className="text-indigo-600 dark:text-indigo-400 mb-1"
          />
          <p className="font-bold text-gray-800 dark:text-white">
            {Math.floor(current / 100)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Donors</p>
        </div>
        <div className="flex flex-col items-center p-2 bg-white dark:bg-gray-700 rounded-lg">
          <Heart
            size={18}
            className="text-indigo-600 dark:text-indigo-400 mb-1"
          />
          <p className="font-bold text-gray-800 dark:text-white">
            KSh {Math.round(current / Math.floor(current / 100))}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Avg Donation
          </p>
        </div>
        <div className="flex flex-col items-center p-2 bg-white dark:bg-gray-700 rounded-lg">
          <Coffee
            size={18}
            className="text-indigo-600 dark:text-indigo-400 mb-1"
          />
          <p className="font-bold text-gray-800 dark:text-white">
            {goal - current > 0 ? (goal - current).toLocaleString() : 0}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Still Needed
          </p>
        </div>
      </div>
    </div>
  );
}
