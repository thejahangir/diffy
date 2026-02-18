import React from 'react';
import { Button } from './ui/Button';
import { Cpu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const TechStackBanner: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#0f172a] border-y border-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div className="flex items-center gap-8">
                <div className="hidden md:flex w-20 h-20 rounded-2xl bg-slate-800/50 border border-slate-700 items-center justify-center shrink-0 shadow-lg">
                    <Cpu className="w-10 h-10 text-brand-cyan" />
                </div>
                <div className="max-w-2xl">
                    <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Unsure which technology fits your scale?</h3>
                    <p className="text-slate-300 text-lg leading-relaxed font-medium">
                        Our solutions architects provide a complimentary audit to identify the best stack for your long-term goals.
                    </p>
                </div>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-auto">
                <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full md:w-auto whitespace-nowrap group font-bold shadow-lg shadow-brand-cyan/20"
                    onClick={scrollToContact}
                >
                    Get a Free Architecture Review
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};