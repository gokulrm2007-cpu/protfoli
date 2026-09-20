import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, projectsData, skillsData } from '../data/portfolioData';
import { 
  Search, 
  Terminal, 
  FileText, 
  FolderGit2, 
  Code, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin, 
  Bot, 
  ArrowRight, 
  X,
  Sparkles
} from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onOpenResume, onOpenAI }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    { id: 'about', title: '/about', desc: 'Jump to About Me & Background', icon: Code, action: () => scrollTo('#about') },
    { id: 'skills', title: '/skills', desc: 'Explore Technical Skills & Arsenal', icon: Code, action: () => scrollTo('#skills') },
    { id: 'projects', title: '/projects', desc: 'Browse Featured Projects Showcase', icon: FolderGit2, action: () => scrollTo('#projects') },
    { id: 'worklx', title: '/worklx', desc: 'View WORKLX Marketplace build', icon: FolderGit2, action: () => scrollTo('#projects') },
    { id: 'arogyasathi', title: '/arogyasathi', desc: 'View ArogyaSathi AI Healthcare platform', icon: Sparkles, action: () => scrollTo('#projects') },
    { id: 'terminal', title: '/terminal', desc: 'Open Interactive Developer Terminal', icon: Terminal, action: () => scrollTo('#terminal') },
    { id: 'education', title: '/education', desc: 'View VETIAS College CS Program', icon: GraduationCap, action: () => scrollTo('#education') },
    { id: 'resume', title: '/resume', desc: 'Preview & Download Gokul Resume', icon: FileText, action: onOpenResume },
    { id: 'ai', title: '/ai', desc: 'Launch Gokul AI Assistant chat', icon: Bot, action: onOpenAI },
    { id: 'contact', title: '/contact', desc: 'Direct Contact & Message Form', icon: Mail, action: () => scrollTo('#contact') },
    { id: 'github', title: '/github', desc: 'Open GitHub Profile in new tab', icon: Github, action: () => window.open(personalInfo.githubUrl, '_blank') },
    { id: 'linkedin', title: '/linkedin', desc: 'Open LinkedIn Profile in new tab', icon: Linkedin, action: () => window.open(personalInfo.linkedinUrl, '_blank') },
  ];

  const filteredCommands = commands.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase()) || 
    c.desc.toLowerCase().includes(query.toLowerCase()) ||
    c.id.toLowerCase().includes(query.toLowerCase().replace('/', ''))
  );

  const scrollTo = (href) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          const btn = document.getElementById('command-palette-trigger');
          if (btn) btn.click();
        }
      }
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
      if (isOpen && e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredCommands.length || 1));
      }
      if (isOpen && e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      }
      if (isOpen && e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
            placeholder="Search Gokul's Portfolio... (e.g. /projects, /skills, /resume)"
            className="flex-1 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none"
          />
          <span className="text-[11px] font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500 border border-slate-200 dark:border-slate-700">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;

              return (
                <button
                  key={cmd.id}
                  onClick={() => { cmd.action(); onClose(); }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-xs sm:text-sm font-bold block">
                        {cmd.title}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {cmd.desc}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                </button>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-400 text-xs">
              No matching commands. Try searching <code className="text-blue-600 font-mono">/projects</code> or <code className="text-blue-600 font-mono">/skills</code>.
            </div>
          )}
        </div>

        {/* Command Footer Note */}
        <div className="p-3 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 border text-slate-600 dark:text-slate-300 font-mono">↑↓</kbd>
            <span>Select:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 border text-slate-600 dark:text-slate-300 font-mono">↵</kbd>
          </div>
          <span>Gokul M Portfolio CLI</span>
        </div>

      </div>
    </div>
  );
}