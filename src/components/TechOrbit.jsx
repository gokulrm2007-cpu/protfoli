import React, { useState } from 'react';
import { techOrbitList } from '../data/portfolioData';
import { Sparkles, Cpu, Layers, Info } from 'lucide-react';

export default function TechOrbit() {
  const [selectedTech, setSelectedTech] = useState(techOrbitList[0]);

  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>INTERACTIVE TECH RADAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technology Ecosystem Orbit.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
            Hover over any orbiting technology to see its learning status and where Gokul uses it across his projects.
          </p>
        </div>

        {/* Center Orbit Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Orbit Visualization */}
          <div className="lg:col-span-7 flex items-center justify-center p-4">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Outer Orbit Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-300 dark:border-blue-800/80 animate-spin-slow"></div>
              {/* Inner Orbit Ring */}
              <div className="absolute inset-10 sm:inset-12 rounded-full border border-slate-200 dark:border-slate-800"></div>

              {/* Central Core: GOKUL M */}
              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white flex flex-col items-center justify-center shadow-xl shadow-blue-500/30 p-2 text-center ring-4 ring-blue-100 dark:ring-blue-900/50">
                <span className="font-extrabold text-sm sm:text-base tracking-wider uppercase">GOKUL M</span>
                <span className="text-[10px] text-blue-100 font-semibold mt-0.5">Core Builder</span>
                <div className="flex gap-1 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </div>
              </div>

              {/* Orbiting Satellite Tech Badges */}
              {techOrbitList.map((item, index) => {
                const total = techOrbitList.length;
                const angle = (index / total) * 2 * Math.PI;
                const radius = 135; // px distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const isSelected = selectedTech?.name === item.name;

                return (
                  <button
                    key={item.name}
                    onMouseEnter={() => setSelectedTech(item)}
                    onClick={() => setSelectedTech(item)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute z-20 px-2.5 py-1 rounded-xl text-xs font-bold transition-all duration-300 shadow-md cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white scale-125 ring-4 ring-blue-200 dark:ring-blue-800 z-30'
                        : 'bg-white dark:bg-slate-850 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:scale-110 hover:border-blue-400'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}

            </div>
          </div>

          {/* Right Detail Card for Selected Tech */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-card">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {selectedTech.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {selectedTech.name}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {selectedTech.status}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                    Project Usage & Implementation:
                  </span>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed bg-white dark:bg-slate-800 p-3.5 rounded-2xl border border-slate-200/70 dark:border-slate-700">
                    {selectedTech.usage}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Verified skillset</span>
                  <span className="font-mono text-blue-600 dark:text-blue-400">Gokul M Portfolio</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}