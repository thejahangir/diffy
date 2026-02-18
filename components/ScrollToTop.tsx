import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth out the progress value for the spring animation
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circle configuration
  const radius = 20;
  const center = 24;
  const size = 48;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <button
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full focus:outline-none"
            aria-label="Scroll to top"
          >
            {/* SVG Progress Circle */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90 transform drop-shadow-xl" 
              viewBox={`0 0 ${size} ${size}`}
            >
              {/* Background Track */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                className="stroke-slate-800 fill-slate-950"
                strokeWidth="3"
              />
              {/* Progress Indicator */}
              <motion.circle
                cx={center}
                cy={center}
                r={radius}
                className="stroke-brand-blue fill-transparent"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ pathLength: scrollProgress }}
              />
            </svg>

            {/* Icon */}
            <div className="relative z-10 text-slate-400 group-hover:text-white transition-colors duration-300">
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};