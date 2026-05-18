import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-lavender-900 text-lavender-50 py-16 relative overflow-hidden">
      {/* Decorative floral texture overlay (subtle) */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Rifnas & Safeerah</h2>
          <p className="font-sans text-lavender-200 uppercase tracking-[0.2em] text-sm mb-12">
            Are getting married
          </p>
          
          <div className="w-full max-w-md mx-auto h-[1px] bg-lavender-800/50 mb-12 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lavender-900 px-4">
              <Heart className="w-5 h-5 text-lavender-400" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-sm text-lavender-300 font-sans">
            <p>23 May 2026</p>
            <p className="hidden md:block">•</p>
            <p>ISM Auditourium, Kupooth, Vilayur</p>
          </div>
          
          <p className="mt-16 text-xs text-lavender-400/60 font-sans tracking-wide">
            &copy; {new Date().getFullYear()} R & S Wedding. Created with Love.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
