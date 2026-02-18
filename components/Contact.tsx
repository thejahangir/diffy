import React from 'react';
import { Button } from './ui/Button';
import { User, Mail, Smartphone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const contactInfo = [
    { loc: "UAE", num: "+971-551027497" },
    { loc: "Qatar", num: "+974 6654 7930" },
    { loc: "West Bengal", num: "+91-9007222405" },
    { loc: "Bihar", num: "+91-9830051693" },
    { loc: "Maharashtra", num: "+91-8668247160" },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
       {/* Background elements */}
       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

       <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block">
              Contact Us
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Ready to start your digital transformation journey? Reach out to our global teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
               
               <form className="space-y-6 relative z-10">
                  <div className="relative group">
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand-blue transition-colors" />
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-xl py-4 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all"
                    />
                  </div>

                  <div className="relative group">
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand-blue transition-colors" />
                    <input
                      type="email"
                      placeholder="E-mail Address"
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-xl py-4 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all"
                    />
                  </div>

                  <div className="relative group">
                    <Smartphone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand-blue transition-colors" />
                    <input
                      type="tel"
                      placeholder="Mobile"
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-xl py-4 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all"
                    />
                  </div>

                  <div className="relative group">
                    <textarea
                      placeholder="Your Message *"
                      rows={5}
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-xl py-4 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all resize-none"
                    ></textarea>
                  </div>

                  <Button className="w-full !py-4 text-lg shadow-brand-blue/20">
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                  </Button>
               </form>
            </motion.div>

            {/* Contact Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col space-y-3 pt-2"
            >
                 <h3 className="text-2xl font-bold text-white mb-2">Global Offices</h3>
                 {contactInfo.map((info, idx) => (
                   <motion.div 
                     key={idx} 
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.4 + (idx * 0.1) }}
                     className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-brand-blue/50 hover:bg-slate-900/80 transition-all group"
                   >
                      <div className="flex items-center gap-3 min-w-[150px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue group-hover:shadow-[0_0_8px_rgba(0,123,255,0.8)] transition-shadow"></div>
                        <span className="text-slate-300 font-semibold text-base group-hover:text-white transition-colors">{info.loc}</span>
                      </div>
                      <a href={`tel:${info.num.replace(/[^0-9+]/g, '')}`} className="text-white font-semibold text-lg hover:text-brand-blue transition-colors font-mono tracking-wide">
                        {info.num}
                      </a>
                   </motion.div>
                 ))}
                 
                 <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-brand-blue/10 to-transparent border border-brand-blue/20">
                    <h4 className="text-white font-bold mb-1">Need immediate assistance?</h4>
                    <p className="text-slate-400 text-sm mb-3">Our support team is available 24/7 for critical infrastructure issues.</p>
                    <a href="mailto:support@dijiffy.com" className="text-brand-blue hover:text-white font-medium transition-colors flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4" /> support@dijiffy.com
                    </a>
                 </div>
            </motion.div>

          </div>
       </div>
    </section>
  );
};