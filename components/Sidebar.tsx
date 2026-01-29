
import React from 'react';
import { Filter, Building2, Syringe, HeartPulse } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 px-2">
        <Filter size={22} className="text-cyan-500" />
        <h3 className="font-bold text-slate-900 text-xl font-brand">Filter</h3>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <section className="mb-10">
          <h4 className="font-bold text-slate-400 text-[10px] uppercase mb-6 tracking-[0.25em] flex items-center gap-2">
            <Building2 size={14} className="text-cyan-500" /> Einrichtung
          </h4>
          <div className="space-y-4">
            {['Uni-Klinikum', 'Belegklinik', 'MVZ / Praxis', 'Rehazentrum', 'Sanitätshaus'].map(item => (
              <label key={item} className="flex items-center gap-4 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500/50 transition-all" />
                <span className="text-slate-600 font-bold text-sm group-hover:text-cyan-600 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h4 className="font-bold text-slate-400 text-[10px] uppercase mb-6 tracking-[0.25em] flex items-center gap-2">
            <Syringe size={14} className="text-cyan-500" /> Spezialisierung
          </h4>
          <div className="space-y-4">
            {['Handchirurgie', 'Wirbelsäule', 'Knie/Hüfte', 'Sportmedizin', 'Kinderorthopädie'].map(item => (
              <label key={item} className="flex items-center gap-4 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500/50 transition-all" />
                <span className="text-slate-600 font-bold text-sm group-hover:text-cyan-600 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
          <div className="flex items-center gap-2 text-cyan-700 font-bold text-xs mb-3 uppercase tracking-wider">
            <HeartPulse size={18} />
            <span>Top-Benefit</span>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed font-medium">Aktuell bieten <b>85%</b> der Kliniken attraktive Weiterbildungssiegel im Bereich Spezielle Unfallchirurgie an.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
