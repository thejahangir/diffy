import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 4, // Increased size: 4px to 10px
        duration: Math.random() * 15 + 10,
      }))
    );
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 -z-20">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen"
          ></motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] opacity-40 -z-10 animate-blob"></div>
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[100px] opacity-30 -z-10 animate-blob animation-delay-2000"></div>
      
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0], // Increased opacity for better visibility
              y: [0, -200], // Increased upward movement range
              x: Math.sin(p.id) * 30 // Increased horizontal sway
            }} 
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10 
            }}
            className="absolute rounded-full bg-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.8)]" // Enhanced glow
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm text-brand-blue text-sm font-medium mb-8 cursor-pointer hover:border-brand-blue/30 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            Accepting new enterprise projects NOW
            <ChevronRight className="w-3 h-3" />
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Transform ideas into <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue bg-[length:200%_auto] animate-[gradient_4s_ease_infinite]">
              digital reality.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Dijiffy is the technology partner for forward-thinking brands. We combine elite engineering with strategic design to build software that drives real business growth.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" withArrow onClick={() => scrollToSection('contact')}>Start your project</Button>
            <Button variant="outline" size="lg" className="group" onClick={() => scrollToSection('contact')}>
              <Phone className="mr-2 h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              Book a Call
            </Button>
          </motion.div>

        </div>
      </div>
      
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    </section>
  );
};