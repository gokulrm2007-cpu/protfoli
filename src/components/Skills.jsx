import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  Brain, 
  Wrench, 
  Cpu, 
  Sparkles
} from 'lucide-react';
import TechOrbit from './TechOrbit';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const categories = ['All', ...skillsData.categories.map(c => c.name)];

  const displayedCategories = activeFilter === 'All' 
    ? skillsData.categories 
    : skillsData.categories.filter(c => c.name === activeFilter);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3 shadow-xs">
              <Cpu className="w-3.5 h-3.5" />
              <span>EXPERTISE & TOOLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {skillsData.heading}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-base sm:text-lg">
              {skillsData.subheading}
            </p>
          </div>


          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displayedCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white dark:bg-slate-850 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {category.skills.length} skills listed
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Tech Orbit Interactive System */}
        <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200/90 dark:border-slate-800">
          <TechOrbit />
        </div>

      </div>
    </section>
  );
}
