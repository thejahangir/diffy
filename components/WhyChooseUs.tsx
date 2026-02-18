import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Cpu, Eye } from 'lucide-react';

const REASONS = [
  {
    title: "Top 1% Talent Network",
    description: "Our engineers are vetted through a rigorous 5-stage process. You work with the best, not the bench.",
    icon: Users,
    color: "text-brand-blue"
  },
  {
    title: "Outcome-Obsessed",
    description: "We don't just bill for hours; we commit to milestones. Your business goals are our engineering KPIs.",
    icon: Target,
    color: "text-brand-red"
  },
  {
    title: "Future-Proof Architecture",
    description: "We build on modern, scalable stacks that won't need a rewrite in two years. Longevity is built-in.",
    icon: Cpu,
    color: "text-brand-cyan"
  },
  {
    title: "Radical Transparency",
    description: "Real-time dashboards, daily commits, and weekly demos. You see progress as it happens, not just at the end.",
    icon: Eye,
    color: "text-brand-orange"
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    Why Choose Us?
                </h2>
                <p className="text-lg text-slate-400">
                    In a sea of generalists, we are the specialists. Here is what sets our partnership apart and why global leaders trust us.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {REASONS.map((reason, index) => {
                    const Icon = reason.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 group"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-slate-600 transition-colors shadow-inner`}>
                                <Icon className={`w-6 h-6 ${reason.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    </section>
  );
};