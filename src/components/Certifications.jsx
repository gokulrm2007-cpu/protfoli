import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Cpu, Code, Brain, Sparkles, Layers, Award } from 'lucide-react';

export default function Certifications() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Code': return <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Award': return <Award className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default: return <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5" />
            <span>UPSKILLING & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Learning.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base sm:text-lg">
            Verified trainings, technical workshops, and ongoing specializations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-slate-850 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    item.status === 'Completed' 
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800' 
                      : 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 block mb-1">
                  {item.type}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified milestone</span>
                <span className="font-medium text-slate-600 dark:text-slate-300">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
