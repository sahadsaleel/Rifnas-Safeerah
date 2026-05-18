import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to May 23, 2026
    const targetDate = new Date('2026-05-23T00:00:00');
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-24 px-6 bg-offwhite relative overflow-hidden">
      {/* Decorative blurred blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lavender-200 rounded-full blur-[100px] opacity-50 z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="glass rounded-3xl p-10 md:p-16 text-center border border-white/40 shadow-xl shadow-lavender-900/5"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-lavender-900 mb-12"
          >
            Our Forever Begins In
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {timeUnits.map((unit, index) => (
              <motion.div 
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.8 }}
                className="flex flex-col items-center min-w-[80px]"
              >
                <div className="text-4xl md:text-6xl font-serif text-lavender-700 mb-2 font-light tracking-wider">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-text-muted font-sans">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
