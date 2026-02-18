import React from 'react';
import { METHODOLOGY_STEPS } from '../constants';
import { motion } from 'framer-motion';

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Methodology
          </h2>
          <p className="text-lg text-slate-400">
            We’ve refined our delivery process over hundreds of projects to ensure predictability, quality, and speed.
          </p>
        </motion.div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {METHODOLOGY_STEPS.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative"
                        >
                            {/* Step Number Badge */}
                            <div className="w-24 h-24 mx-auto bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-blue transition-colors duration-300 shadow-xl shadow-black/50">
                                <div className="absolute inset-0 rounded-full bg-slate-800/50 m-2 group-hover:bg-brand-blue/10 transition-colors duration-300"></div>
                                <Icon className="w-8 h-8 text-slate-400 group-hover:text-brand-blue transition-colors duration-300" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold border-4 border-slate-950">
                                    {step.step}
                                </div>
                            </div>

                            <div className="text-center px-4">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};