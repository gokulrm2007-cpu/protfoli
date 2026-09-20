import React from 'react';
import { servicesData } from '../data/portfolioData';
import { Layout, Server, Brain, Figma } from 'lucide-react';

export default function Services() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Server': return <Server className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Brain': return <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'Figma': return <Figma className="w-6 h-6 text-pink-600 dark:text-pink-400" />;
      default: return <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3 shadow-xs">
            <Layout className="w-3.5 h-3.5" />
            <span>CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What I Can Build.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base sm:text-lg">
            From modern user interfaces to end-to-end full stack web platforms and AI-driven workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-slate-850 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-all">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-700">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-[11px] font-medium border border-slate-200/60 dark:border-slate-700"
                    >
                      {skill}
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
