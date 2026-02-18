import React from 'react';
import { motion } from 'framer-motion';

export const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="container mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative pb-4">
            Our Partners
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-blue rounded-full"></span>
            </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 lg:gap-24"
        >
          
          {/* Acespire */}
          <div className="group cursor-pointer transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
            <div className="flex flex-col items-start">
                <span className="text-2xl md:text-3xl font-bold text-[#00AEEF] tracking-tight drop-shadow-none group-hover:drop-shadow-[0_0_12px_rgba(0,174,239,0.6)] transition-all duration-300">ACESPIRE</span>
                <span className="text-[0.6rem] md:text-[0.7rem] text-[#00AEEF] uppercase tracking-wider w-full text-justify leading-none">Consulting & Solutions</span>
            </div>
          </div>

          {/* Bihar Skill Development Mission */}
          <div className="group cursor-pointer flex items-center gap-3 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
             <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white relative overflow-hidden flex items-center justify-center p-1 shadow-none group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300">
                {/* Abstract logo representation */}
                <div className="w-full h-full rounded-full border-[3px] border-t-red-500 border-r-green-500 border-b-blue-500 border-l-yellow-500 opacity-80 bg-white">
                  <div className="w-full h-full flex items-center justify-center text-[0.5rem] text-black font-bold">BSDM</div>
                </div>
             </div>
             <div className="flex flex-col items-start text-left">
                 <span className="text-[0.6rem] font-bold text-slate-300 leading-tight">Bihar Skill</span>
                 <span className="text-[0.6rem] font-bold text-slate-300 leading-tight">Development</span>
                 <span className="text-[0.6rem] font-bold text-slate-300 leading-tight">Mission</span>
             </div>
          </div>

          {/* Tutorria */}
          <div className="group cursor-pointer transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
              <div className="flex flex-col items-center">
                  <span className="text-[0.5rem] text-slate-500 mb-1 tracking-wider">Grow More, Score More</span>
                  <div className="flex items-center gap-1">
                      <div className="w-6 h-4 bg-[#F37021] rounded-t-full group-hover:shadow-[0_0_10px_rgba(243,112,33,0.5)] transition-shadow duration-300"></div>
                      <span className="text-2xl md:text-3xl font-bold text-[#F37021] drop-shadow-none group-hover:drop-shadow-[0_0_10px_rgba(243,112,33,0.5)] transition-all duration-300">Tutorria</span>
                  </div>
              </div>
          </div>

          {/* DRiP */}
          <div className="group cursor-pointer transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
              <div className="bg-black border border-slate-700 px-5 py-3 flex items-center gap-3 rounded-sm group-hover:border-slate-500 transition-colors shadow-none group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  <div className="w-5 h-5 rounded-full border-[3px] border-white rounded-tr-none -rotate-45"></div>
                  <span className="text-2xl font-bold text-white tracking-widest">DRiP</span>
              </div>
          </div>

          {/* PCS Ventures */}
          <div className="group cursor-pointer transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
              <div className="bg-[#D72626] w-36 h-14 flex flex-col items-center justify-center shadow-none group-hover:shadow-[0_0_20px_rgba(215,38,38,0.5)] transition-all duration-300">
                  <span className="text-2xl font-bold text-white leading-none">PCS</span>
                  <span className="text-[0.65rem] font-medium text-white tracking-[0.2em] uppercase mt-0.5">VENTURES</span>
              </div>
          </div>

          {/* Puresoft Global */}
          <div className="group cursor-pointer transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
             <span className="text-xl md:text-2xl font-bold text-[#F05A28] tracking-tight drop-shadow-none group-hover:drop-shadow-[0_0_12px_rgba(240,90,40,0.6)] transition-all duration-300">PURESOFT GLOBAL</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};