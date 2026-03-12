import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const GERMAN_CITIES = [
  { name: 'Berlin', region: 'Berlin', jobs: 134, slug: 'berlin' },
  { name: 'Hamburg', region: 'Hamburg', jobs: 98, slug: 'hamburg' },
  { name: 'Muenchen', region: 'Bayern', jobs: 156, slug: 'muenchen' },
  { name: 'Koeln', region: 'Nordrhein-Westfalen', jobs: 87, slug: 'koeln' },
  { name: 'Frankfurt am Main', region: 'Hessen', jobs: 79, slug: 'frankfurt' },
  { name: 'Stuttgart', region: 'Baden-Wuerttemberg', jobs: 72, slug: 'stuttgart' },
  { name: 'Duesseldorf', region: 'Nordrhein-Westfalen', jobs: 65, slug: 'duesseldorf' },
  { name: 'Leipzig', region: 'Sachsen', jobs: 48, slug: 'leipzig' },
  { name: 'Dortmund', region: 'Nordrhein-Westfalen', jobs: 41, slug: 'dortmund' },
  { name: 'Dresden', region: 'Sachsen', jobs: 52, slug: 'dresden' },
  { name: 'Hannover', region: 'Niedersachsen', jobs: 57, slug: 'hannover' },
  { name: 'Nuernberg', region: 'Bayern', jobs: 63, slug: 'nuernberg' },
  { name: 'Bremen', region: 'Bremen', jobs: 34, slug: 'bremen' },
  { name: 'Essen', region: 'Nordrhein-Westfalen', jobs: 38, slug: 'essen' },
  { name: 'Freiburg', region: 'Baden-Wuerttemberg', jobs: 45, slug: 'freiburg' },
  { name: 'Heidelberg', region: 'Baden-Wuerttemberg', jobs: 51, slug: 'heidelberg' },
  { name: 'Muenster', region: 'Nordrhein-Westfalen', jobs: 36, slug: 'muenster' },
  { name: 'Goettingen', region: 'Niedersachsen', jobs: 29, slug: 'goettingen' },
  { name: 'Rostock', region: 'Mecklenburg-Vorpommern', jobs: 22, slug: 'rostock' },
  { name: 'Augsburg', region: 'Bayern', jobs: 31, slug: 'augsburg' },
];

const GermanCitiesGeo: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 font-brand">Orthopaedie-Jobs in deutschen Staedten</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Finden Sie Stellenangebote in der Orthopaedie und Unfallchirurgie in Ihrer Naehe. Wir bieten Jobs in allen grossen Staedten Deutschlands.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {GERMAN_CITIES.map((city) => (
            <NavLink
              key={city.slug}
              to={`/jobs?location=${encodeURIComponent(city.name)}`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all group"
            >
              <MapPin className="h-4 w-4 text-cyan-500 flex-shrink-0 group-hover:text-cyan-600" />
              <div className="min-w-0">
                <span className="font-semibold text-slate-800 text-sm block truncate">{city.name}</span>
                <span className="text-xs text-slate-400">{city.region} &middot; {city.jobs} Stellen</span>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-3">Orthopaedie-Stellenangebote in ganz Deutschland</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Deutschland verfuegt ueber eine erstklassige orthopaedische Versorgungslandschaft. Von renommierten Universitaetskliniken in Berlin, Muenchen und Heidelberg ueber spezialisierte Rehakliniken in Baden-Wuerttemberg bis hin zu modernen MVZ-Strukturen in Hamburg und Koeln - jede Region bietet einzigartige Karrierechancen fuer Orthopaedie-Fachkraefte.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Besonders gefragt sind Fachaerzte und Oberaerzte in Grossstaedten wie Berlin, Muenchen, Hamburg, Frankfurt und Stuttgart. Aber auch mittelgrosse Universitaetsstaedte wie Goettingen, Freiburg und Heidelberg bieten hervorragende Weiterbildungsmoeglichkeiten und attraktive Stellen in der Orthopaedie und Unfallchirurgie.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ob Facharzt fuer Orthopaedie, Oberarzt in der Unfallchirurgie, Assistenzarzt in Weiterbildung oder Physiotherapeut - auf orthopaedie-stellenangebote.de finden Sie passende Stellenangebote in Ihrer Stadt. Nutzen Sie unsere Jobsuche mit Standortfilter, um Orthopaedie-Jobs in Ihrer Naehe zu entdecken.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GermanCitiesGeo;
