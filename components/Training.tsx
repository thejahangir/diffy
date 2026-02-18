import React from 'react';
import { TRAINING_PROGRAMS } from '../constants';
import { Button } from './ui/Button';
import { Check, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Training: React.FC = () => {
  return (
    <section id="training" className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/3"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Enterprise-Grade Training
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mb-8">
                    Bridge the skills gap in your organization. Our curriculum is designed by practicing engineers and architects, ensuring your team learns what actually works in production.
                </p>
                <Button className="!bg-brand-orange hover:!bg-[#b35d00] !shadow-orange-500/20 text-white border-transparent">
                    <Download className="mr-2 w-4 h-4" />
                    Download Syllabus
                </Button>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {TRAINING_PROGRAMS.map((program, index) => {
                const Icon = program.icon;
                return (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col h-full bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-brand-orange/50 transition-colors duration-300 group"
                    >
                        <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-orange/10 transition-colors">
                            <Icon className="w-6 h-6 text-brand-orange" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                        <p className="text-sm text-brand-orange font-medium mb-4 uppercase tracking-wider text-[10px]">
                            {program.level}
                        </p>
                        <p className="text-slate-400 text-sm mb-8 flex-grow">
                            {program.description}
                        </p>

                        <div className="space-y-3 mb-8">
                            {program.topics.map((topic, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                                    {topic}
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-3 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:border-brand-orange hover:bg-slate-900 transition-all flex items-center justify-center gap-2 text-sm font-medium">
                            View Modules <ArrowRight className="w-3 h-3" />
                        </button>
                    </motion.div>
                )
            })}
        </div>

        {/* Clear Call to Action Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 md:p-12 text-center relative overflow-hidden group"
        >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent"></div>
             <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Upskill your workforce today
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
                    Get full access to our detailed syllabus and start building a future-ready engineering team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="!bg-brand-orange hover:!bg-[#b35d00] !shadow-orange-500/20 text-white border-transparent w-full sm:w-auto">
                        <Download className="mr-2 w-4 h-4" />
                        Download Syllabus
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto">
                        Schedule Consultation
                    </Button>
                </div>
             </div>
        </motion.div>

      </div>
    </section>
  );
};