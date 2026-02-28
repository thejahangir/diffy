import React, { useState, useRef } from 'react';
import { TRAINING_PROGRAMS } from '../constants';
import { Button } from './ui/Button';
import { Check, ArrowRight, Download } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Modal } from './ui/Modal';
import { TrainingProgram } from '../types';

export const Training: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="training" className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 mb-24">
        
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
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

                        <button 
                            onClick={() => setSelectedProgram(program)}
                            className="w-full py-3 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:border-brand-orange hover:bg-slate-900 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                        >
                            View Modules <ArrowRight className="w-3 h-3" />
                        </button>
                    </motion.div>
                )
            })}
            
            {/* Internship Card */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="col-span-1 md:col-span-2 lg:col-span-4 bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-brand-orange/50 transition-colors duration-300 group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                            <Check className="w-5 h-5 text-brand-orange" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">Internship Program</h3>
                    </div>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Launch your career with our intensive internship program. Gain real-world experience working on live projects under the mentorship of industry experts.
                    </p>
                </div>
                <div className="relative z-10 w-full md:w-auto">
                    <Button 
                        className="w-full md:w-auto !bg-brand-orange hover:!bg-[#b35d00] text-white px-8 py-4 text-lg shadow-lg shadow-brand-orange/20"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Enquire Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Full Width Parallax Banner */}
      <div ref={bannerRef} className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
        <motion.div 
            style={{ y }}
            className="absolute inset-0 w-full h-[150%] -top-[25%] bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        >
            <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
        </motion.div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Upskill your workforce today
                </h3>
                <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-xl leading-relaxed">
                    Get full access to our detailed syllabus and start building a future-ready engineering team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                        className="!bg-brand-orange hover:!bg-[#b35d00] !shadow-orange-500/20 text-white border-transparent w-full sm:w-auto px-8 py-4 text-lg"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Schedule Consultation
                    </Button>
                </div>
            </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProgram && (
            <Modal
                isOpen={!!selectedProgram}
                onClose={() => setSelectedProgram(null)}
                title={selectedProgram.title}
            >
                <div className="space-y-6">
                    <div>
                        <h4 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Program Level</h4>
                        <p className="text-white">{selectedProgram.level}</p>
                    </div>
                    
                    <div>
                        <h4 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-3">Curriculum Modules</h4>
                        <div className="space-y-3">
                            {selectedProgram.modules?.map((module, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-800">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                                        <span className="text-xs font-bold text-brand-orange">{idx + 1}</span>
                                    </div>
                                    <span className="text-slate-300 text-sm">{module}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                        <Button className="w-full !bg-brand-orange hover:!bg-[#b35d00] text-white">
                            Enroll in this Program
                        </Button>
                    </div>
                </div>
            </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};