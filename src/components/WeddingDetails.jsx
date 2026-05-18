import React from 'react';
import { motion } from 'framer-motion';
import { CalendarHeart } from 'lucide-react';

const WeddingDetails = () => {
  return (
    <section id="events" className="py-24 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-lavender-900 mb-4">Nikkah Ceremony</h2>
          <p className="text-text-muted font-sans uppercase tracking-widest text-sm">Join us for the auspicious occasion</p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-offwhite rounded-3xl p-10 md:p-16 border border-lavender-100 shadow-sm hover:shadow-xl hover:shadow-lavender-900/5 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center max-w-2xl w-full group"
          >
            <div className="w-20 h-20 rounded-full bg-lavender-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <CalendarHeart className="w-10 h-10 text-lavender-500" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-3xl font-serif text-lavender-800 mb-6">The Nikkah</h3>
            
            <div className="space-y-4 mb-6 text-lg">
              <p className="text-text-main font-semibold">Saturday, 23 May 2026</p>
              <div className="w-8 h-[1px] bg-lavender-200 mx-auto"></div>
              <p className="text-lavender-700 font-medium">ISM Auditorium</p>
              <p className="text-text-muted text-sm tracking-wide">Kupooth, Vilayur</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
