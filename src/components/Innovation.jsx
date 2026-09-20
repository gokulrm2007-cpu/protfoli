import React from 'react';
import { innovationData } from '../data/portfolioData';
import { Lightbulb, Shield, HeartPulse, Users, Landmark } from 'lucide-react';

export default function Innovation() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 1: return <HeartPulse className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 2: return <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 3: return <Landmark className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default: return <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="innovation" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3 shadow-xs">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>HACKATHONS & INNOVATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {innovationData.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base sm:text-lg">
            {innovationData.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {innovationData.items.map((item, idx) => (
            <div
              key={item.title}
              className={`bg-white dark:bg-slate-850 rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                idx === 3 
                  ? 'border-blue-300 dark:border-blue-700 shadow-md ring-1 ring-blue-100 dark:ring-blue-900/50 bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-850 dark:to-blue-950/20' 
                  : 'border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-card-hover'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center shrink-0">
                    {getIcon(idx)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-700">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/70 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
