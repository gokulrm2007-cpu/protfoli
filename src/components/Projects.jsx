import React from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  FolderGit2, 
  FileCode2 
} from 'lucide-react';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="py-24 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-t border-slate-200/70 dark:border-slate-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3 shadow-xs">
              <FolderGit2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Projects.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-base sm:text-lg">
              A deep dive into the full-stack web applications, AI medical assistants, and IoT safety systems I've built.
            </p>
          </div>

          <div className="text-xs text-blue-700 dark:text-blue-300 font-semibold bg-blue-50/80 dark:bg-blue-950/50 px-3.5 py-2 rounded-xl border border-blue-200/60 dark:border-blue-800 shadow-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>3 Production & Working Prototypes</span>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-b from-white to-slate-50/80 dark:from-slate-850 dark:to-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-slate-800 shadow-card hover:shadow-card-hover hover:border-blue-300/80 dark:hover:border-blue-700/80 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top Accent Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                project.id === 'arogyasathi-ai' 
                  ? 'bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400' 
                  : project.id === 'worklx' 
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-500' 
                  : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500'
              }`}></div>


              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
                
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/20">
                      {project.badge}
                    </span>
                    <span className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {project.category || 'Engineering Build'}
                    </span>
                    {project.id === 'arogyasathi-ai' && (
                      <span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live on Netlify
                      </span>
                    )}
                  </div>


                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400">
                      {project.tagline}
                    </p>
                  </div>


                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>


                  {/* Special Workflow display for Arogyasathi AI */}
                  {project.workflowSteps && (
                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 shadow-sm">
                      <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-slate-100 dark:border-slate-700">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                          Clinical Workflow Pipeline
                        </span>
                        <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-md">
                          8 Indian Languages
                        </span>
                      </div>

                      {/* Step Bubbles */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                        {project.workflowSteps.map((step) => (
                          <div key={step.step} className="p-3 rounded-xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 hover:border-blue-200 dark:hover:border-blue-700 transition-colors">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                              <span className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px]">
                                {step.step}
                              </span>
                              <span className="text-slate-900 dark:text-white font-medium">{step.title}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-1">
                            {step.desc}
                            </p>
                          </div>
                        ))}
                      </div>


                      {/* Supported Languages */}
                      {project.supportedLanguages && (
                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1.5">
                            Supported Regional Languages:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.supportedLanguages.map((lang) => (
                              <span key={lang} className="px-2.5 py-0.5 rounded-leg bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-[11px] font-semibold border border-blue-100 dark:border-blue-900">
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}


                  {/* Key Features List */}
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider mb-3 text-slate-700 dark:text-slate-300">
                      Key Highlights & Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* Action Buttons with High-End Styling */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    {onSelectProject && (
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
                      >
                        <FileCode2 className="w-4 h-4" />
                        Case Study & Architecture
                      </button>
                    )}

                    {project.links.liveDemo && (
                      <a
                        href={project.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-750 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.id === 'smart-helmet' ? 'View Project' : 'Live Demo'}
                      </a>
                    )}

                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 shadow-xs hover:border-slate-400 hover:-translate-y-0.5 transition-all cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        {project.id === 'smart-helmet' ? 'GitHub / Wokwi' : 'GitHub'}
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Column: Tech Stack & Architecture Card */}
                <div className="lg:col-span-5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700 shadow-sm space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Technologies & Libraries
                    </h4>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-md font-mono">
                      {project.technologies.length} Techs
                    </span>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 hover:bg-blue-50 dark:hover:bg-blue-950/50 border border-slate-200/80 dark:border-slate-700 hover:border-blue-200 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 text-xs font-semibold transition-all shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Architecture Briefing */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/40 dark:from-slate-900/60 dark:to-blue-950/30 border border-slate-200/70 dark:border-slate-700 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900 dark:text-white">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Engineering Architecture</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {project.id === 'worklx' && "Full-stack client-server architecture with REST API endpoints, JWT token authentication, real-time WebSocket communication, and relational/document schemas for multi-service scheduling."}
                      {project.id === 'arogyasathi-ai' && "Clinical intake workflow integrating Web Speech recognition in 8 regional languages, OCR document image extraction, dynamic risk stratification, and doctor review dashboard."}
                      {project.id === 'smart-helmet' && "Microcontroller-driven safety interlocking circuit evaluating alcohol gas sensor and impact conditions via ESP32/Arduino before triggering relay engine activation."}
                    </p>
                  </div>


                  {/* Live URL Badge */}
                  {project.id === 'arogyasathi-ai' && (
                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs flex items-center justify-between shadow-xs">
                      <span className="font-semibold truncate mr-2 font-mono">
                        arogyasathiai.netlify.app
                      </span>
                      <a 
                        href="https://arogyasathiai.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-emerald-700 dark:text-emerald-400 underline hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-1 shrink-0 cursor-pointer"
                      >
                        Visit <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Flow Section Preview */}
        <div className="mt-20">
          <ArchitectureDiagram />
        </div>

      </div>
    </section>
  );
}
