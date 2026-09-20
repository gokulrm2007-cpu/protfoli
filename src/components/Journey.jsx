import React from 'react';
import { journeyData } from '../data/portfolioData';
import { Route } from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3 shadow-xs">
            <Route className="w-3.5 h-3.5" />
            <span>CAREER PATHWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Development Journey.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base sm:text-lg">
            From computer science fundamentals to building full-stack products, AI applications, and national hackathon solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-12">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.step}
                  className="relative flex flex-col md:flex-row items-start md:items-center group"
                >
                  {/* Center / Left Pin Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border-2 border-blue-500 shadow-md flex items-center justify-center z-10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <span className="font-extrabold text-xs text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                  </div>

                  {/* Left Column (Desktop) / Main Card on Mobile */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:invisible md:pr-12'
                  }`}>
                    {isEven ? (
                      <div className="bg-slate-50 dark:bg-slate-850 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-card-hover transition-all">
                        <div className="flex items-center md:justify-end gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                          <span>STAGE {item.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                          {item.subtitle}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      /* Mobile only view for odd items */
                      <div className="block md:hidden bg-slate-50 dark:bg-slate-850 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-card-hover transition-all">
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                          <span>STAGE {item.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                          {item.subtitle}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className={`hidden md:block w-1/2 pl-12 ${
                    !isEven ? '' : 'invisible'
                  }`}>
                    {!isEven && (
                      <div className="bg-slate-50 dark:bg-slate-850 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-card-hover transition-all">
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                          <span>STAGE {item.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                          {item.subtitle}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
