import React from 'react';
import { Linkedin, Github, Facebook, ArrowRight, Mail } from 'lucide-react';

// Custom X (Twitter) Icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer: React.FC = () => {
  const solutionLinks = [
    { label: 'Services Overview', href: '#services' },
    { label: 'Corporate Training', href: '#training' },
    { label: 'Web & Mobile', href: '#services' },
    { label: 'AI & Machine Learning', href: '#services' },
    { label: 'Digital Strategy', href: '#services' },
  ];

  const companyLinks = [
    { label: 'Methodology', href: '#methodology' },
    { label: 'About Dijiffy', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <footer id="footer" className="bg-slate-900 pt-24 pb-12 border-t border-slate-800 relative overflow-hidden">
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        
        {/* Ambient Glow */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-4">
            <a href="#" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-cyan rounded-lg opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-white font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                dijiffy<span className="text-brand-blue">.</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Engineering the future of digital business. We build high-performance software, AI systems, and strategic platforms for global market leaders.
            </p>
            <div className="flex gap-4">
              {[XIcon, Linkedin, Github, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 lg:col-span-2 md:pl-4">
            <h4 className="font-bold text-white mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              {solutionLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href} className="hover:text-brand-blue transition-colors flex items-center gap-2 group">
                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 h-px bg-brand-blue"></span>
                        {item.label}
                    </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              {companyLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href} className="hover:text-brand-blue transition-colors flex items-center gap-2 group">
                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 h-px bg-brand-blue"></span>
                        {item.label}
                    </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Column */}
          <div className="md:col-span-4 lg:col-span-4 bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
             <h4 className="font-bold text-white mb-2">Stay ahead of the curve</h4>
             <p className="text-slate-400 text-sm mb-6">Latest tech trends and company updates, direct to your inbox.</p>
             
             <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                    />
                </div>
                <button type="submit" className="w-full bg-brand-blue hover:bg-blue-600 text-white font-medium py-3 rounded-lg text-sm transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                </button>
             </form>
             
             <div className="mt-6 pt-6 border-t border-slate-700/50 flex flex-col gap-1">
                 <div className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Contact Support</div>
                 <a href="mailto:hello@dijiffy.com" className="text-white hover:text-brand-blue transition-colors text-sm font-medium">hello@dijiffy.com</a>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dijiffy Solutions. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};