// app/core-mission/components/GallerySection.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: "/images/mission-image-1.jpg",
      alt: "Community gathering from previous mission",
      caption: "Community gathering during previous outreach",
    },
    {
      src: "/images/mission-image-2.jpg",
      alt: "Children's program",
      caption: "Children's Bible study session",
    },
    {
      src: "/images/mission-image-3.jpg",
      alt: "Team working in the community",
      caption: "Our team working with local church leaders",
    },
    {
      src: "/images/mission-image-4.jpg",
      alt: "Medical outreach",
      caption: "Basic medical services provided by our partners",
    },
    {
      src: "/images/mission-image-5.jpg",
      alt: "Landscape of Makueni",
      caption: "Beautiful landscape of Makueni County",
    },
    {
      src: "/images/mission-image-6.jpg",
      alt: "Team prayer session",
      caption: "Team prayer and preparation session",
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
          Mission Gallery
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Images from our previous mission trips and the communities we serve in
          Makueni.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-white text-sm font-medium">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6 md:p-12"
            onClick={() => setSelectedImage(null)}>
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
              onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>

            <div className="relative w-full max-w-4xl h-auto max-h-[80vh] rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={900}
                height={600}
                className="object-contain w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <p className="text-white text-center">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
