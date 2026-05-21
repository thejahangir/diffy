import React from 'react';
import { Button } from './ui/Button';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Users, 
  Clock, 
  Sparkles,
  Layers,
  Database
} from 'lucide-react';
import { motion } from 'framer-motion';

export const ServiceNowAdminBanner: React.FC = () => {
  const handleEnquireClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Focus name input and pre-populate message after scrolling
      setTimeout(() => {
        const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
        const nameInput = document.querySelector('input[name="user_name"]') as HTMLInputElement;
        
        if (textarea) {
          textarea.value = "Hi, I am interested in the ServiceNow Certified System Administrator (CSA) training program. Please share details on fees, schedule, and batch starts.";
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (nameInput) {
          nameInput.focus();
        }
      }, 800);
    }
  };

  const handleViewSyllabusClick = () => {
    window.location.hash = '#/servicenow-syllabus';
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-y border-slate-900">
      
      {/* Background Decor using Brand Red and Brand Orange colors */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Course Value Proposition */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(215,38,38,0.15)] animate-pulse"
            >
              <Sparkles className="w-3.5 h-3.5" />
              FEATURED TRAINING PROGRAM
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
            >
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-orange to-brand-red bg-[length:200%_auto] animate-[gradient_4s_ease_infinite]">ServiceNow Administration</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Become a ServiceNow Certified System Administrator (CSA). Acquire hands-on experience configuring, automating, and maintaining the world’s leading digital workflow platform. No prior coding required.
            </motion.p>

            {/* Core Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
            >
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-lg shadow-slate-950/50">
                  <Terminal className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Live Sandbox Instances</h4>
                  <p className="text-slate-400 text-sm mt-1">Get individual developer instances for fully hands-on practices.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-lg shadow-slate-950/50">
                  <Award className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">CSA Exam Practice</h4>
                  <p className="text-slate-400 text-sm mt-1">Mock test simulators and cheat sheets designed to clear exam in 1st attempt.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-lg shadow-slate-950/50">
                  <Users className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Mentor-Led Sessions</h4>
                  <p className="text-slate-400 text-sm mt-1">Learn directly from ServiceNow certified specialists and enterprise architects.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-lg shadow-slate-950/50">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Placement Support</h4>
                  <p className="text-slate-400 text-sm mt-1">Get resume screening, corporate mock interviews, and job referral assistance.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Course Card / Call-to-action */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group"
            >
              {/* Border shine effect using brand-red and brand-orange */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-brand-orange/10 opacity-40 pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-start border-b border-slate-800 pb-5">
                  <div>
                    <span className="text-brand-orange font-bold text-xs uppercase tracking-wider">Certified Program</span>
                    <h3 className="text-2xl font-bold text-white mt-1">Course Summary</h3>
                  </div>
                  <div className="px-3 py-1 rounded bg-brand-red/20 text-brand-red text-xs font-bold font-mono">
                    CSA 2026
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" /> Duration
                    </span>
                    <span className="text-white font-semibold">6 Weeks (40+ Hours)</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-slate-500" /> Mode
                    </span>
                    <span className="text-white font-semibold">Live Online Interactive</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Database className="w-4 h-4 text-slate-500" /> Instance Access
                    </span>
                    <span className="text-white font-semibold">24/7 Personal Sandbox</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-500" /> Placements
                    </span>
                    <span className="text-brand-orange font-semibold flex items-center gap-1">
                      100% Placement Drive
                    </span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button 
                    onClick={handleEnquireClick} 
                    className="w-full !bg-brand-orange hover:!bg-brand-red border-transparent text-white font-bold shadow-lg shadow-brand-orange/20 !py-4 transition-all"
                  >
                    Enquire & Register Now <ArrowRight className="ml-2 w-5 h-5 shrink-0 text-white" />
                  </Button>

                  <button 
                    onClick={handleViewSyllabusClick}
                    className="w-full py-4 rounded-full border border-slate-700 bg-slate-950/40 text-slate-200 hover:text-white hover:border-brand-orange hover:bg-slate-900 transition-all flex items-center justify-center gap-2 text-sm font-semibold group"
                  >
                    <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-brand-orange transition-colors" /> 
                    View Detailed Syllabus
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};
