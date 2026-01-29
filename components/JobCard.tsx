
import React from 'react';
import { MapPin, Briefcase, Activity, ChevronRight } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="ortho-card p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 cursor-pointer group">
      <div className="w-24 h-24 rounded-2xl bg-slate-50 flex-shrink-0 flex items-center justify-center border border-slate-100 overflow-hidden shadow-inner">
        <img src={job.logo} alt={job.company} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors mb-1 font-brand">
              {job.title}
            </h3>
            <p className="text-cyan-600 font-bold text-sm uppercase tracking-wider">
              {job.company}
            </p>
          </div>
          <div className="bg-cyan-50 text-cyan-700 font-bold text-lg px-6 py-2 rounded-xl border border-cyan-100">
            {job.salary}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-semibold text-slate-400 mb-6">
          <span className="flex items-center gap-2">
            <MapPin size={18} className="text-cyan-400" />
            {job.location}
          </span>
          <span className="flex items-center gap-2">
            <Briefcase size={18} className="text-cyan-400" />
            {job.type}
          </span>
          <span className="text-slate-200">|</span>
          <span className="text-slate-400 font-medium italic">{job.postedAt}</span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {['Wirbelsäule', 'Endoprothetik', 'MVZ'].map(tag => (
            <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] border border-slate-200 flex items-center gap-1.5">
              <Activity size={12} className="text-cyan-500" /> {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:text-cyan-600 group-hover:bg-cyan-50 transition-all border border-slate-200 group-hover:border-cyan-200">
          <ChevronRight size={28} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
