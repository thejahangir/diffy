import React from 'react';
import { FEATURES } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Built for speed, <br/>
              Engineered for scale.
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Traditional agencies are slow and opaque. Dijiffy operates with the agility of a startup and the rigorous standards of a global consultancy. We ship production-ready software in weeks, not years.
            </p>
            
            <div className="space-y-6">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                    <p className="text-slate-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-800 bg-slate-900">
                {/* Abstract Dashboard Representation */}
                <div className="bg-slate-950 border-b border-slate-800 p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="p-8">
                   <div className="space-y-4">
                      <div className="h-32 bg-slate-950/50 rounded-xl border border-slate-800 flex items-center justify-center">
                         <div className="text-center">
                            <span className="block text-3xl font-bold text-brand-blue mb-1">99.99%</span>
                            <span className="text-xs text-slate-500 uppercase tracking-wide">Uptime Guaranteed</span>
                         </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-brand-cyan/5 rounded-xl border border-brand-cyan/10 flex items-center justify-center">
                             <div className="text-center">
                                <span className="block text-2xl font-bold text-brand-cyan mb-1">2x</span>
                                <span className="text-xs text-brand-cyan/70 uppercase tracking-wide">Faster Launch</span>
                             </div>
                        </div>
                        <div className="h-24 bg-brand-orange/5 rounded-xl border border-brand-orange/10 flex items-center justify-center">
                             <div className="text-center">
                                <span className="block text-2xl font-bold text-brand-orange mb-1">-40%</span>
                                <span className="text-xs text-brand-orange/70 uppercase tracking-wide">Cloud Costs</span>
                             </div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Decor elements */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue rounded-full blur-[80px] opacity-20 -z-10"></div>
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-cyan rounded-full blur-[80px] opacity-20 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};