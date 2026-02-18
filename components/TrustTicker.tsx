import React from 'react';

export const TrustTicker: React.FC = () => {
  const brands = [
    "Acme Corp", "GlobalBank", "NextGen", "Stratos", "Apex Labs", "Vertex"
  ];

  return (
    <div className="w-full border-y border-slate-800 bg-slate-900/30 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
          {brands.map((brand, i) => (
             <span key={i} className="text-xl md:text-2xl font-bold text-slate-400 font-sans tracking-tighter hover:text-white transition-colors">
                {brand}
             </span>
          ))}
        </div>
      </div>
    </div>
  );
};