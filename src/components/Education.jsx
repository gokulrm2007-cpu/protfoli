import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Building2, BookOpen, CheckCircle2, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {educationData.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base sm:text-lg">
            {educationData.tagline}
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-850 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-100/70 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-bold">
                <GraduationCap className="w-4 h-4" />
                Undergraduate Degree
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {educationData.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-slate-900 dark:text-white font-semibold">{educationData.college}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {educationData.semester}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                Pursuing comprehensive studies in computer science, software architecture, algorithm design, and applied computational intelligence at {educationData.college}.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Key Coursework & Focus Areas
              </h4>

              <div className="grid grid-cols-1 gap-2.5 pt-1">
                {educationData.courseworkHighlights.map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
