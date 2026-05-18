import React from 'react';
import { motion } from 'framer-motion';

const BrideGroom = () => {
  return (
    <section id="couple" className="py-24 px-6 bg-offwhite relative overflow-hidden">
      {/* Decorative floral elements (abstract soft blobs) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lavender-200 rounded-full blur-[80px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lavender-300 rounded-full blur-[100px] opacity-30"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-lavender-900 mb-4">The Couple</h2>
          <p className="text-text-muted font-sans uppercase tracking-widest text-sm">Meet the bride & groom</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-center justify-center">
          {/* Bride Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1 flex flex-col items-center text-center relative"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-96 mb-8 rounded-t-full overflow-hidden border-8 border-white shadow-xl">
              <img 
                src="/bride/Safeerah.jpeg" 
                alt="Safeerah - The Bride" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-serif text-lavender-800 mb-2">Safeerah</h3>
            <p className="text-sm uppercase tracking-widest text-lavender-500 mb-4 font-medium">The Bride</p>
          </motion.div>

          {/* Center Divider / & */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex w-20 h-20 rounded-full bg-lavender-50 items-center justify-center shadow-inner z-10 mx-[-20px]"
          >
            <span className="font-serif text-4xl text-lavender-400">&</span>
          </motion.div>

          {/* Groom Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex-1 flex flex-col items-center text-center relative"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-96 mb-8 rounded-t-full overflow-hidden border-8 border-white shadow-xl">
              <img 
                src="/groom/rifnas.png" 
                alt="Rifnas - The Groom" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-serif text-lavender-800 mb-2">Rifnas</h3>
            <p className="text-sm uppercase tracking-widest text-lavender-500 mb-4 font-medium">The Groom</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrideGroom;
