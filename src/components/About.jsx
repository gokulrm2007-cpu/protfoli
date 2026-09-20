import React from 'react';
import { aboutContent, personalInfo } from '../data/portfolioData';
import { 
  Layers, 
  Brain, 
  Sparkles, 
  Globe, 
  BarChart3, 
  Target, 
  GraduationCap
} from 'lucide-react';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'Brain': return <Brain className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
      case 'Globe': return <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default: return <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {aboutContent.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Paragraphs */}
          <div className="lg:col-span-7 space-y-5">
            {aboutContent.paragraphs.map((para, idx) => (
              <p 
                key={idx} 
                className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                {para}
              </p>
            ))}

            {/* Highlight Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Real-World Focus</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Building practical applications that solve community & industry problems.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Academic Journey</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    B.Sc Computer Science student at {personalInfo.college}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Currently Learning Section */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-850 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Currently Learning
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100/70 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                Active Focus
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
              Consistently expanding technical depth across modern software engineering and intelligent system stacks:
            </p>

            <div className="space-y-3">
              {aboutContent.currentlyLearning.map((item) => (
                <div 
                  key={item.name}
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700 flex items-center justify-center shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs">{item.name}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
