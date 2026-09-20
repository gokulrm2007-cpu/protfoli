import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Briefcase, FileText, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';

export default function RecruiterBanner({ onOpenResume }) {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white py-3.5 px-4 sm:px-6 shadow-md border-b border-white/10 animate-in slide-in-from-top duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
            <Briefcase className="w-4 h-4 text-cyan-300" />
          </div>
          <p className="text-xs sm:text-sm font-medium">
            <strong className="font-extrabold text-cyan-200">Recruiter Quick View:</strong>{' '}
            Gokul M is a B.Sc Computer Science student focused on Full Stack Development and AI/ML.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-blue-900 font-extrabold text-xs shadow-xs hover:bg-blue-50 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            Download Resume
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            Direct Email
          </a>
        </div>

      </div>
    </div>
  );
}