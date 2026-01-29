
import React from 'react';
import { Search, MapPin, Stethoscope } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-32 px-4 relative bg-white border-b border-slate-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-50/50 skew-x-[-20deg] translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-cyan-100 border border-cyan-200 px-5 py-2 rounded-full text-cyan-700 text-sm font-bold mb-10">
          <Stethoscope size={16} />
          Deutschlands Portal für Orthopädie & Unfallchirurgie
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight font-brand tracking-tight">
          Präzision in <span className="text-cyan-600">Bewegung.</span><br/>
          Ihr nächster Karriereschritt.
        </h1>
        <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
          Finden Sie spezialisierte Vakanzen in Universitätskliniken, Privatpraxen und MVZ – kuratiert für Profis des Bewegungsapparates.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white p-3 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-3 border border-slate-100">
          <div className="flex-grow flex items-center px-6 py-4 w-full bg-slate-50 rounded-xl">
            <Search className="text-cyan-500 mr-4" size={22} />
            <input 
              type="text" 
              placeholder="Berufsgruppe oder Fachgebiet (z.B. Knie, Hüfte)" 
              className="w-full bg-transparent focus:outline-none text-slate-900 font-semibold placeholder-slate-400"
            />
          </div>
          <div className="flex-grow flex items-center px-6 py-4 w-full bg-slate-50 rounded-xl">
            <MapPin className="text-cyan-500 mr-4" size={22} />
            <input 
              type="text" 
              placeholder="Stadt oder PLZ" 
              className="w-full bg-transparent focus:outline-none text-slate-900 font-semibold placeholder-slate-400"
            />
          </div>
          <button className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-12 py-5 rounded-xl transition-all shadow-xl shadow-cyan-200">
            Suchen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
