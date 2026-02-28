import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoDiffy from "../src/assets/img/logo.png";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Fixed header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    scrollToSection(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`
        fixed z-[100] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
        ${mobileMenuOpen 
          ? 'top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 py-4 rounded-none w-full' 
          : isScrolled
            ? 'top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-6xl bg-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-full py-3 shadow-2xl shadow-brand-blue/10'
            : 'top-0 left-0 right-0 w-full bg-transparent border-b border-transparent shadow-none py-6 rounded-none'
        }
      `}
    >
      <div className={`
        flex items-center justify-between transition-all duration-500
        ${isScrolled && !mobileMenuOpen ? 'px-6 w-full' : 'container mx-auto px-6'}
      `}>
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src={LogoDiffy} className="logo-diffy" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button size="sm" onClick={() => scrollToSection('contact')}>Get a Quote</Button>
          </div>
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4 bg-slate-950/50">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block w-full text-base font-medium text-slate-200 py-3 border-b border-slate-800 last:border-0 hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                 <Button className="w-full justify-center" onClick={() => {
                   scrollToSection('contact');
                   setMobileMenuOpen(false);
                 }}>Get a Quote</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};