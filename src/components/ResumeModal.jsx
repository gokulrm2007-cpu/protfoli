import React from 'react';
import { personalInfo, skillsData, educationData, projectsData, certificationsData } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col">
        
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white text-base">Resume Preview</span>
            <span className="text-xs bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-semibold px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
              Gokul M
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8 text-slate-800 dark:text-slate-200 font-sans">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">{personalInfo.name}</h1>
            <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5">{personalInfo.headline}</p>
            
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> {personalInfo.location}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">Professional Summary</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.shortIntro}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-3">Education</h2>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{educationData.degree}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{educationData.college}</p>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  {educationData.semester}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-3">Featured Projects</h2>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{proj.title}</h3>
                    <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">{proj.badge}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-2 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {proj.technologies.slice(0, 7).map(t => (
                      <span key={t} className="text-[10px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-3">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {skillsData.categories.map((cat) => (
                <div key={cat.name} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800">
                  <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">{cat.name}</span>
                  <span className="text-slate-600 dark:text-slate-400 text-[11px]">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-3">Certifications & Hackathons</h2>
            <div className="space-y-2">
              {certificationsData.map((c) => (
                <div key={c.title} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{c.title}</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 text-[11px]">{c.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
