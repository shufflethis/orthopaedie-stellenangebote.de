// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Job } from '../types';
import { Activity, ShieldPlus, Award } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: 'ortho1',
    title: 'Facharzt für Orthopädie & Unfallchirurgie',
    company: 'Zentrum für Gelenkchirurgie',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    salary: '95.000€ - 130.000€',
    description: 'Schwerpunkt Endoprothetik (Hüfte/Knie). Wir suchen einen versierten Operateur für unser zertifiziertes EndoProthetikZentrum.',
    postedAt: 'Vor 2 Std.',
    logo: 'https://picsum.photos/seed/medical1/120/120'
  },
  {
    id: 'ortho2',
    title: 'Physiotherapeut (m/w/d) - Reha Fokus',
    company: 'Vitalis Ortho-Klinik',
    location: 'München',
    type: 'Teilzeit',
    salary: '3.400€ - 4.200€',
    description: 'Postoperative Betreuung von Patienten nach wirbelsäulenchirurgischen Eingriffen. Eigene MT-Zulassung erwünscht.',
    postedAt: 'Vor 6 Std.',
    logo: 'https://picsum.photos/seed/medical2/120/120'
  },
  {
    id: 'ortho3',
    title: 'Orthopädietechnik-Mechaniker',
    company: 'Sanitätshaus MotionTech',
    location: 'Hamburg',
    type: 'Vollzeit',
    salary: '3.800€ mtl.',
    description: 'Fertigung von individuellen Prothesen und Orthesen unter Einsatz modernster 3D-Scan-Verfahren.',
    postedAt: 'Gestern',
    logo: 'https://picsum.photos/seed/medical3/120/120'
  }
];

const Home: React.FC = () => {
  const [jobs] = useState<Job[]>(MOCK_JOBS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="w-full lg:w-1/4">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-3/4">
              <div className="flex items-center justify-between mb-10 border-b border-slate-200 pb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500 p-3 rounded-xl text-white shadow-lg shadow-cyan-200">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-brand">
                      Karriere in der <span className="text-cyan-600">Orthopädie</span>
                    </h2>
                    <p className="text-slate-500 text-sm font-medium">Finden Sie Ihren Platz in führenden medizinischen Teams.</p>
                  </div>
                </div>
              </div>
              
              {loading ? (
                <div className="space-y-6">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-44 bg-white animate-pulse rounded-2xl border border-slate-100"></div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-6">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}

              {/* Medical Excellence CTA */}
              <div className="mt-20 bg-slate-900 rounded-3xl p-10 relative overflow-hidden text-white shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Award size={160} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-xl">
                    <h3 className="text-3xl font-bold mb-4 font-brand">Exzellenz für Ihre Karriere</h3>
                    <p className="text-slate-400 text-lg">Werden Sie Teil eines Netzwerks von Orthopädie-Spezialisten und Kliniken mit höchstem Qualitätsanspruch.</p>
                  </div>
                  <button className="whitespace-nowrap bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-cyan-900/20 flex items-center gap-2">
                    <ShieldPlus size={20} />
                    Profil anlegen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-bold text-slate-900 font-brand mb-6">
              orthopaedie<span className="text-cyan-600">-stellen</span>
            </div>
            <p className="text-slate-500 leading-relaxed font-medium">Das spezialisierte Karriereportal für Chirurgen, Therapeuten und Techniker im Bereich des Bewegungsapparates.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs">Navigation</h4>
            <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors">Klinikverzeichnis</a>
            <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors">Weiterbildungsstellen</a>
            <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors">Für Arbeitgeber</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs">Rechtliches</h4>
            <Link to="/impressum" className="text-slate-500 hover:text-cyan-600 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-slate-500 hover:text-cyan-600 transition-colors">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link>
            <Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link>
            <p className="text-slate-300 mt-4 text-sm">© 2024 orthopaedie-stellenangebote.de</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
