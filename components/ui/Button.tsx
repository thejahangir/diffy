import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  withArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withArrow = false,
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:opacity-50 disabled:cursor-not-allowed rounded-full";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20 border border-transparent",
    secondary: "bg-brand-cyan text-white hover:bg-cyan-500 shadow-lg shadow-cyan-500/20 border border-transparent",
    outline: "bg-transparent border border-slate-700 text-slate-300 hover:border-brand-blue hover:text-white hover:bg-slate-800",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-slate-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  );
};