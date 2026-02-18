import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const ProcessStartBanner: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 border-y border-slate-800">
      {/* Mild Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/50 to-slate-900 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-3xl">
                <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-block text-brand-cyan font-bold tracking-widest uppercase text-xs mb-4"
                >
                    Partner with the best
                </motion.span>
                <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
                >
                    Ready to experience the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Dijiffy difference?</span>
                </motion.h3>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 text-xl leading-relaxed font-medium max-w-2xl"
                >
                    We operate with full transparency. See how our methodology guarantees delivery on time and on budget.
                </motion.p>
            </div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex-shrink-0 w-full md:w-auto"
            >
                <Button variant="primary" size="lg" className="w-full md:w-auto shadow-2xl shadow-brand-blue/20 !px-10 !py-5 text-lg">
                    See How We Work
                </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
};