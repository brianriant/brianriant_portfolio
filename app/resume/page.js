"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useDarkMode } from "@/app/context/darkModeProvider";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { isDarkMode } = useDarkMode();

  const resumeUrl = process.env.RESUME_URL;


   useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setHasError(true);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleIframeLoad = (event) => {
    try {
      setIsLoading(false);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleIframeError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-darkTheme text-white" : "bg-gray-50"
      }`}>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={useDarkMode().setIsDarkMode}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 bg-opacity-75">
              <Loader2 className="animate-spin text-4xl text-green-600 mb-4" />
              <p className="text-gray-600">Loading resume...</p>
            </div>
          )}
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
              <p className="text-red-600 mb-4 text-xs">Failed to load resume</p>
              <button
                onClick={() => {
                  setIsLoading(true);
                  setHasError(false);
                  // Force iframe reload
                  const iframe = document.querySelector("iframe");
                  if (iframe) iframe.src = iframe.src;
                }}
                className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 text-xs rounded-full">
                Retry
              </button>
            </div>
          )}

          <div className="relative w-full aspect-[8.5/11] md:aspect-[595/842]">
            <iframe
              src={resumeUrl}
              className="absolute top-0 left-0 w-full h-full border-0 scale-[0.] md:scale-100"
              style={{
                maxWidth: "100%",
                margin: "0 auto",
                display: "block",
              }}
              title="Brian Riant's Resume"
              loading="lazy"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          </div>
        </motion.div>
      </div>
      <Footer className="mt-12" isDarkMode={isDarkMode} />
    </div>
  );
}