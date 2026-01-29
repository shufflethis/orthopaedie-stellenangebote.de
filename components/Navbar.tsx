
import React from 'react';
import { User, Bone } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="h-24 flex items-center bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="bg-cyan-600 text-white p-2.5 rounded-xl shadow-lg shadow-cyan-100 group-hover:rotate-12 transition-transform">
            <Bone size={26} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900 font-brand">
            ORTHO<span className="text-cyan-600">JOBS</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-10 font-bold text-slate-400 uppercase text-xs tracking-[0.2em]">
          <a href="#" className="hover:text-cyan-600 transition-colors">Stellenmarkt</a>
          <a href="#" className="hover:text-cyan-600 transition-colors">Kliniken</a>
          <a href="#" className="hover:text-cyan-600 transition-colors">MVZ Focus</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-200">
            <User size={18} />
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
