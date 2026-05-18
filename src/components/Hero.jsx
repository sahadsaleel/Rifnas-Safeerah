import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const frameCount = 200;

const currentFrame = (index) => {
  // Ensure we don't request a frame > 200 or < 1
  const safeIndex = Math.max(1, Math.min(frameCount, Math.round(index)));
  return `/animation/ezgif-frame-${safeIndex.toString().padStart(3, '0')}.png`;
};

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);

  // Use framer motion useScroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        // If it's the first image, render it immediately
        if (i === 1) {
          renderFrame(1, [img]);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  const renderFrame = (index, imageArray = images) => {
    if (imageArray.length === 0 || !canvasRef.current) return;
    
    const safeIndex = Math.max(1, Math.min(frameCount, Math.round(index)));
    const img = imageArray[safeIndex - 1];
    
    if (img && img.complete) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Update canvas dimensions to match display size for crisp rendering
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      // Calculate aspect ratio to fit within canvas (like object-fit: contain)
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      
      // Use Math.min to ensure the entire image fits within the display without cropping
      const ratio = Math.min(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;  
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height,
         centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);  
    }
  };

  useEffect(() => {
    const handleResize = () => {
      renderFrame(frameIndex.get());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, frameIndex]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(latest);
  });

  return (
    // Make container tall so we can scroll through it (reduced for better mobile pacing)
    <section ref={containerRef} id="home" className="relative w-full h-[250vh] bg-white">
      {/* Sticky container for canvas and text */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Canvas for image sequence */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
        
        {/* Soft overlay - removed dark overlay for white background */}
        <div className="absolute inset-0 bg-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10"></div>

        {/* Text Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20 pointer-events-none">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-sm md:text-lg uppercase tracking-[0.3em] text-text-muted mb-6 font-sans drop-shadow-sm"
          >
            We are getting married
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif text-lavender-900 mb-6 drop-shadow-sm"
          >
            Rifnas & Safeerah
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-[1px] h-24 bg-lavender-300 mx-auto mt-12"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
