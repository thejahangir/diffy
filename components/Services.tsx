import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Comprehensive Digital Capabilities
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            We don't just write code. We deliver end-to-end solutions that solve complex business challenges through technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col p-8 rounded-3xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-all shadow-inner`}>
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-brand-blue transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed text-base flex-grow">{service.description}</p>
                
                {/* Expertise Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Expertise Level</span>
                    <span className={`text-sm font-bold ${service.color}`}>{service.expertiseLevel}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${service.expertiseLevel}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                      className={`h-full rounded-full ${service.color.replace('text-', 'bg-')}`}
                    ></motion.div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/60 mt-auto">
                    <div className="flex items-start gap-3">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${service.color.replace('text-', 'bg-')}`}></div>
                        <div>
                            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Business Outcome</span>
                            <p className="text-sm font-medium text-slate-200 leading-snug">
                                {service.outcome}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 ring-1 ring-inset ${service.color.replace('text', 'ring').replace('blue', 'blue/20').replace('cyan', 'cyan/20').replace('orange', 'orange/20').replace('red', 'red/20')}`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};