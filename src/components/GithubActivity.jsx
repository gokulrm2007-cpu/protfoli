import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, ExternalLink, GitBranch, Star, FolderGit2 } from 'lucide-react';

export default function GithubActivity() {
  const featuredRepos = [
    {
      name: "sih",
      desc: "Smart India Hackathon 2026 repository & ArogyaSathi AI multilingual pre-consultation platform.",
      language: "JavaScript / React",
      url: "https://github.com/gokulrm2007-cpu/sih"
    },
    {
      name: "gokul-portfolio",
      desc: "Personal developer portfolio and AI-interactive personal showcase.",
      language: "JavaScript / React / Tailwind",
      url: "https://github.com/gokulrm2007-cpu"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3 border border-blue-200/60 dark:border-blue-800">
              <Github className="w-3.5 h-3.5" />
              <span>OPEN SOURCE & CODE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              GitHub Activity.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
              Explore public repositories and engineering codebase by Gokul M.
            </p>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-all cursor-pointer"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredRepos.map((repo) => (
            <div
              key={repo.name}
              className="p-6 rounded-3xl bg-white dark:bg-slate-850 border border-slate-200/90 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg group-hover:text-blue-600 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  {repo.language}
                </span>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                >
                  View Code <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}