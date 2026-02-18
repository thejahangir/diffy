import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-blue/10 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to build the future?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join the forward-thinking companies that trust Dijiffy with their critical technology infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button 
               size="lg" 
               className="w-full sm:w-auto !bg-white !text-slate-950 hover:!bg-slate-200 shadow-none border-0 font-bold"
               onClick={scrollToContact}
             >
               Book a Consultation
             </Button>
             <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-700 text-slate-300 hover:text-white hover:border-white">
               View Case Studies
             </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};