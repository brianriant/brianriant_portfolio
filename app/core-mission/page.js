// app/core-mission/page.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  MapPin,
  DollarSign,
  Heart,
  Share2,
  CheckCircle,
} from "lucide-react";
import DonationProgress from "./components/DonationProgress";
import MissionStory from "./components/MissionStory";
import DonationForm from "./components/DonationForm";
import Timeline from "./components/Timeline";
import ImpactSection from "./components/ImpactSection";
import GallerySection from "./components/GallerySection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";

export default function CoreMissionPage() {
  const [raised, setRaised] = useState(450);
  const goalAmount = 1700;

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-purple-900/70 z-10" />
        <Image
          src="/assets/images/makueni-landscape.jpg"
          alt="Makueni landscape"
          fill
          priority
          className="object-cover"
        //   placeholder="blur"
        //   blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEJgAAABAAAAAJCAYAAAA7KqwyAAAAnklEQVR42mNgIB4U5OdZ5BXkp5TkF8YRoxeE8wryE6BqK0pKivhJ0lyQnxcI1JAP11xRUpKYR4TmgvyCUKBmV5jmivT0dL7CwsIoYgwBaQ4B4klAzVuAeGJJfr4fSD4tLY0DiHOB+D8QPwbihUD5qUB1c4CaJ4Ewa+vWzZ/Kysomg+SAOA+I/wLxOyDeDsSzgfg5ED8A4hdAvBiI5QDTPgIAS0pDd5ogcDQAAAAASUVORK5CYII="
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="space-y-6">
            <Image
              src="/images/jkuat-christian-union-logo.png"
              alt="JKUAT Christian Union Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Makueni Mission 2025
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Spreading the Gospel and making a difference in Makueni County
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="#donate"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2">
                <Heart size={18} />
                Donate Now
              </a>
              <a
                href="#learn-more"
                className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2">
                Learn More
                <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Calendar className="text-indigo-600 dark:text-indigo-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mission Dates
                </p>
                <p className="font-medium dark:text-white">May 17-25, 2025</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="text-indigo-600 dark:text-indigo-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </p>
                <p className="font-medium dark:text-white">
                  Makueni County, Kenya
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <DollarSign className="text-indigo-600 dark:text-indigo-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fundraising Goal
                </p>
                <p className="font-medium dark:text-white">KSh 1,700</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-12">
            <MissionStory />
            <ImpactSection />
            <Timeline />
            <GallerySection />
            <TestimonialSection />
            <FAQSection />
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="lg:col-span-1 space-y-8">
            <div
              id="donate"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Support Our Mission
              </h3>
              <DonationProgress current={raised} goal={goalAmount} />
              <DonationForm onDonate={(amount) => setRaised(raised + amount)} />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Mission Details
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    <Calendar
                      size={16}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">
                      May 17-25, 2025
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Mission Duration
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    <MapPin
                      size={16}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">
                      Makueni County, Kenya
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Eastern Province
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    <CheckCircle
                      size={16}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">
                      JKUAT Christian Union
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Organizing Ministry
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-md font-bold text-gray-800 dark:text-white mb-3">
                  Share This Mission
                </h4>
                <div className="flex gap-3">
                  <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors duration-300">
                    <Share2 size={16} />
                  </button>
                  <button className="p-2 bg-green-500 hover:bg-green-600 rounded-full text-white transition-colors duration-300">
                    <Share2 size={16} />
                  </button>
                  <button className="p-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white transition-colors duration-300">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
