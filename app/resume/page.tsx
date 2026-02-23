'use client';
import { motion } from 'motion/react';
import { useState, useEffect, SyntheticEvent } from 'react';
import { Loader2 } from 'lucide-react';
import { useDarkMode } from '@/app/context/darkModeProvider';

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
    }, 10000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleIframeLoad = (event: SyntheticEvent<HTMLIFrameElement>) => {
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
        isDarkMode ? 'bg-darkTheme text-white' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 bg-opacity-75 z-10 h-full w-full">
              <Loader2 className="animate-spin text-4xl text-green-600 mb-4" />
              <p className="text-gray-600">Loading resume...</p>
            </div>
          )}
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10">
              <p className="text-red-600 mb-4 text-xs">Failed to load resume</p>
              <button
                onClick={() => {
                  setIsLoading(true);
                  setHasError(false);
                  const iframe = document.querySelector('iframe');
                  if (iframe) iframe.src = iframe.src;
                }}
                className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 text-xs rounded-full"
              >
                Retry
              </button>
            </div>
          )}

          <div className="relative w-full aspect-[8.5/11]">
            <iframe
              src={resumeUrl}
              className="absolute top-0 left-0  w-full h-full border-0 transition-opacity duration-300"
              style={{
                height: '100%',
                width: '100%',
                display: 'block',
                overflow: 'hidden',
              }}
              title="Brian Riant's Resume"
              loading="lazy"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
