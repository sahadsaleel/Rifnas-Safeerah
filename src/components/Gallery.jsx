import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  "/couplesimg/image1.jpg",
  "/couplesimg/image2.jpg",
  "/couplesimg/image3.jpg",
  "/couplesimg/image4.jpg",
  "/couplesimg/image5.jpeg",
  "/couplesimg/image6.jpeg",
  "/couplesimg/image7.jpeg",
  "/couplesimg/image8.jpeg"
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-lavender-900 mb-4">Captured Moments</h2>
          <p className="text-text-muted font-sans uppercase tracking-widest text-sm">Our Beautiful Memories</p>
        </motion.div>

        {/* CSS Masonry-like grid using columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="break-inside-avoid relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelectedImage(src)}
            >
              <div className="absolute inset-0 bg-lavender-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img 
                src={src} 
                alt={`Gallery photo ${index + 1}`} 
                className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Enlarged gallery view" 
              className="max-w-full max-h-full rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to backdrop
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
