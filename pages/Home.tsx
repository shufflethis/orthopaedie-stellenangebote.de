// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Job } from '../types';
import { Activity, ShieldPlus, Award, ChevronDown } from 'lucide-react';
import GermanCitiesGeo from '../components/geo/GermanCitiesGeo';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    company: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    description: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    postedAt: '2026-03-15'
  },
  {
    id: '2',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    postedAt: '2026-03-15'
  },
  {
    id: '3',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    postedAt: '2026-03-15'
  },
  {
    id: '4',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedAt: '2026-03-15'
  },
  {
    id: '5',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedAt: '2026-03-15'
  },
  {
    id: '6',
    title: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    company: 'Neuerburg GrundstücksgemeinschaftSofort-Bewerbung',
    location: 'Köln',
    type: 'Vollzeit',
    description: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    postedAt: '2026-03-15'
  },
  {
    id: '7',
    title: 'Facharzt für Unfallchirurgie und Orthopädie (m/w/d)',
    company: 'Lahn-Dill-Kliniken GmbH Personalmanagement',
    location: 'Wetzlar',
    type: 'Vollzeit',
    description: 'Facharzt für Unfallchirurgie und Orthopädie (m/w/d)',
    postedAt: '2026-03-12'
  },
  {
    id: '8',
    title: 'Oberarzt (m/w/d) Orthopädie',
    company: 'MEDIAN Parkklinik Bad Rothenfelde GmbH',
    location: 'Bad Rothenfelde',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie',
    postedAt: '2026-03-11'
  },
  {
    id: '9',
    title: 'Funktionsoberarzt für die Orthopädie (m/w/d)',
    company: 'MEDIAN Klinik Hohenlohe Bad Mergentheim GmbH & Co. KG',
    location: 'Bad Mergentheim',
    type: 'Vollzeit',
    description: 'Funktionsoberarzt für die Orthopädie (m/w/d)',
    postedAt: '2026-03-11'
  },
  {
    id: '10',
    title: 'Arzthelfer /in - Orthopädie (m/w/d)',
    company: 'PerZukunft Arbeitsvermittlung GmbH&Co.KG',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Arzthelfer /in - Orthopädie (m/w/d)',
    postedAt: '2026-03-11'
  },
  {
    id: '11',
    title: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    company: 'NORDIC RAIL SERVICE GMBH',
    location: 'Lübeck',
    type: 'Vollzeit',
    description: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '12',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '13',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '14',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '15',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '16',
    title: 'Techniker/Ingenieur Elektro oder Elektromeister Gebäudetechnik als Projektleiter (m/w/d)',
    company: 'Andrea Erler Personalberatung',
    location: 'Straubing',
    type: 'Vollzeit',
    description: 'Techniker/Ingenieur Elektro oder Elektromeister Gebäudetechnik als Projektleiter (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '17',
    title: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Göttingen',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-07'
  },
  {
    id: '18',
    title: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Neubrandenburg, Mecklenburg',
    type: 'Vollzeit',
    description: 'Facharzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-07'
  },
  {
    id: '19',
    title: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Eisenach, Thüringen',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-07'
  },
  {
    id: '20',
    title: 'Facharzt (m/w/d) in der Orthopädie',
    company: 'BS Menzel GmbH',
    location: 'Nürnberg, Mittelfranken',
    type: 'Vollzeit',
    description: 'Facharzt (m/w/d) in der Orthopädie',
    postedAt: '2026-03-04'
  },
  {
    id: '21',
    title: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Frankfurt (Oder)',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-04'
  },
  {
    id: '22',
    title: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Heilbronn, Neckar',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-04'
  },
  {
    id: '23',
    title: 'Oberarzt (m/w/d) für die Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Naumburg (Saale)',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) für die Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-04'
  },
  {
    id: '24',
    title: 'Facharzt (m/w/d) in der Orthopädie und Unfallchirurgie',
    company: 'BS Menzel GmbH',
    location: 'Ulm, Donau',
    type: 'Vollzeit',
    description: 'Facharzt (m/w/d) in der Orthopädie und Unfallchirurgie',
    postedAt: '2026-03-04'
  },
  {
    id: '25',
    title: 'Oberarzt (m/w/d) in der Orthopädie',
    company: 'BS Menzel GmbH',
    location: 'Offenburg',
    type: 'Vollzeit',
    description: 'Oberarzt (m/w/d) in der Orthopädie',
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
            <aside className="w-full lg:w-1/4 order-2 lg:order-1">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-3/4 order-1 lg:order-2">
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
        {/* German Cities Geo SEO Section */}
        <GermanCitiesGeo />

        {/* FAQ Section */}
        <section className="bg-white py-16 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3 font-brand">Haeufig gestellte Fragen</h2>
              <p className="text-slate-500">Alles rund um Ihre Karriere in der Orthopaedie und Unfallchirurgie.</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: 'Welche Berufe gibt es in der Orthopaedie?',
                  a: 'Die Orthopaedie bietet vielfaeltige Karrieremoeglichkeiten: Fachaerzte und Oberaerzte fuer Orthopaedie und Unfallchirurgie, Assistenzaerzte in Weiterbildung, Physiotherapeuten, Orthopaedie-Techniker, Sportwissenschaftler, medizinische Fachangestellte (MFA) in orthopaedischen Praxen sowie Pflegefachkraefte in Kliniken mit orthopaedischem Schwerpunkt.'
                },
                {
                  q: 'Wie lange dauert die Facharztausbildung Orthopaedie und Unfallchirurgie?',
                  a: 'Die Weiterbildung zum Facharzt fuer Orthopaedie und Unfallchirurgie dauert in Deutschland 72 Monate (6 Jahre). Davon muessen mindestens 48 Monate in der stationaeren Versorgung absolviert werden. Anschliessend koennen Zusatzbezeichnungen wie Spezielle Unfallchirurgie oder Sportmedizin erworben werden.'
                },
                {
                  q: 'Was verdient man als Orthopaedie-Facharzt?',
                  a: 'Das Gehalt variiert je nach Einrichtung und Erfahrung. An Universitaetskliniken liegt das Einstiegsgehalt als Facharzt bei ca. 6.200-7.400 EUR brutto/Monat (TV-Aerzte). Oberaerzte verdienen zwischen 7.500 und 9.500 EUR. In der Niederlassung oder in Privatkliniken koennen die Gehaelter deutlich hoeher ausfallen.'
                },
                {
                  q: 'Welche Spezialisierungen gibt es in der Orthopaedie?',
                  a: 'Beliebte Spezialisierungen sind: Endoprothetik (Hueft- und Kniegelenkersatz), Wirbelsaeulenchirurgie, Handchirurgie, Fusschirurgie, Sportorthopaedie, Kinderorthopaedie, Rheumaorthopaedie und Tumororthopaedie. Jede Spezialisierung bietet eigene Karriereperspektiven und Weiterbildungsmoeglichkeiten.'
                },
                {
                  q: 'Ist orthopaedie-stellenangebote.de kostenlos fuer Bewerber?',
                  a: 'Ja, die Nutzung von orthopaedie-stellenangebote.de ist fuer Bewerber vollstaendig kostenlos. Sie koennen alle Stellenangebote einsehen, sich direkt bewerben und unsere Karriere-Ressourcen nutzen, ohne dass Kosten entstehen.'
                },
                {
                  q: 'Wie bewerbe ich mich auf eine Stelle?',
                  a: 'Klicken Sie auf das gewuenschte Stellenangebot, um die vollstaendige Beschreibung zu sehen. Von dort koennen Sie sich direkt beim Arbeitgeber bewerben. Wir empfehlen, Ihren Lebenslauf, Approbationsurkunde, Facharztzeugnis und relevante Weiterbildungsnachweise bereitzuhalten.'
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                    <ChevronDown size={20} className="text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Career Info Section */}
        <section className="bg-slate-50 py-16 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-brand">Karriere in der Orthopaedie - Ihr Wegweiser</h2>
            <div className="prose prose-slate max-w-none">
              <div className="bg-white rounded-xl border border-slate-200 p-8 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Warum eine Karriere in der Orthopaedie?</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Die Orthopaedie und Unfallchirurgie gehoert zu den gefragtesten medizinischen Fachrichtungen in Deutschland. Mit einer alternden Bevoelkerung und steigendem Gesundheitsbewusstsein waechst der Bedarf an qualifizierten Fachkraeften kontinuierlich. Ob in Universitaetskliniken, Rehazentren, MVZ oder der eigenen Praxis - die Karrieremoeglichkeiten sind vielfaeltig und zukunftssicher.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Besonders gefragt sind derzeit Fachkraefte in den Bereichen Endoprothetik, Wirbelsaeulenchirurgie und Sportmedizin. Moderne minimalinvasive Verfahren und der Einsatz von Robotik eroeffnen spannende Taetigkeitsfelder fuer technologieaffine Mediziner.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Tipps fuer Ihre Bewerbung</h3>
                <ul className="text-slate-600 space-y-3 list-disc list-inside">
                  <li>Heben Sie Ihre Spezialisierungen und OP-Erfahrung klar hervor</li>
                  <li>Weiterbildungsnachweise und Zertifikate sind in der Orthopaedie besonders relevant</li>
                  <li>Zeigen Sie Ihre Erfahrung mit modernen Verfahren (z.B. arthroskopische Chirurgie, Robotik)</li>
                  <li>Wissenschaftliche Publikationen und Kongressbeitraege koennen einen Vorteil darstellen</li>
                  <li>Informieren Sie sich vorab ueber die Klinik und deren Schwerpunkte</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
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
