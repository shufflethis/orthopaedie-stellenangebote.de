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
    id: '1',
    title: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    company: 'NORDIC RAIL SERVICE GMBH',
    location: 'Lübeck',
    type: 'Vollzeit',
    description: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '2',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '3',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '4',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '5',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '6',
    title: 'Techniker/Ingenieur Elektro oder Elektromeister Gebäudetechnik als Projektleiter (m/w/d)',
    company: 'Andrea Erler Personalberatung',
    location: 'Straubing',
    type: 'Vollzeit',
    description: 'Techniker/Ingenieur Elektro oder Elektromeister Gebäudetechnik als Projektleiter (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '7',
    title: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Göttingen',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-07'
  },
  {
    id: '8',
    title: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Neubrandenburg, Mecklenburg',
    type: 'Vollzeit',
    description: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-07'
  },
  {
    id: '9',
    title: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Eisenach, Thüringen',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-07'
  },
  {
    id: '10',
    title: 'Facharzt (m/w/d) in der Orthopädie',
    company: 'BS Menzel GmbH',
    location: 'Nürnberg, Mittelfranken',
    type: 'Vollzeit',
    description: 'Facharzt (m/w/d) in der Orthopädie',
    postedAt: '2026-03-04'
  },
  {
    id: '11',
    title: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Frankfurt (Oder)',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-04'
  },
  {
    id: '12',
    title: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Heilbronn, Neckar',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-04'
  },
  {
    id: '13',
    title: 'Oberarzt (m/w/d) für die Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Naumburg (Saale)',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) für die Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-04'
  },
  {
    id: '14',
    title: 'Facharzt (m/w/d) in der Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Ulm, Donau',
    type: 'Vollzeit',
    description: 'Facharzt (m/w/d) in der Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-04'
  },
  {
    id: '15',
    title: 'Oberarzt (m/w/d) in der Orthopädie',
    company: 'BS Menzel GmbH',
    location: 'Offenburg',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) in der Orthopädie',
    postedAt: '2026-03-03'
  },
  {
    id: '16',
    title: 'Facharzt Orthopädie (m/w/d)',
    company: 'MR Beratungs- und Dienstleistungs GmbH',
    location: 'Bad Birnbach, Rottal',
    type: 'Vollzeit',
    description: 'Facharzt Orthopädie (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '17',
    title: 'Facharzt Orthopädie (m/w/d)',
    company: 'MR Beratungs- und Dienstleistungs GmbH',
    location: 'Bad Füssing',
    type: 'Vollzeit',
    description: 'Facharzt Orthopädie (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '18',
    title: 'Oberarzt (m/w/d) Orthopädie',
    company: 'BS Menzel GmbH',
    location: 'Soest, Westfalen',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie',
    postedAt: '2026-03-03'
  },
  {
    id: '19',
    title: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Göttingen, Niedersachsen',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-03'
  },
  {
    id: '20',
    title: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Usedom',
    type: 'Vollzeit',
    description: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-03'
  },
  {
    id: '21',
    title: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Olpe, Biggesee',
    type: 'Vollzeit',
    description: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-03'
  },
  {
    id: '22',
    title: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Nürnberg, Mittelfranken',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-03'
  },
  {
    id: '23',
    title: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Schmallenberg',
    type: 'Vollzeit',
    description: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-03'
  },
  {
    id: '24',
    title: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Minden, Westfalen',
    type: 'Vollzeit',
    description: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-03'
  },
  {
    id: '25',
    title: 'Assistenzarzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Suhl',
    type: 'Vollzeit',
    description: 'Assistenzarzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-03'
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
