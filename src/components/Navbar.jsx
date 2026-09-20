import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  FileText, 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  ArrowUpRight, 
  Sun, 
  Moon, 
  Search, 
  Briefcase, 
  Bot 
} from 'lucide-react';

export default function Navbar({ 
  darkMode, 
  onToggleDarkMode, 
  recruiterMode, 
  onToggleRecruiterMode, 
  onOpenResume, 
  onOpenAI, 
  onOpenCommandPalette 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800 py-3' 
        : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name Branding */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              G
            </div>
            <div>
              <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                B.Sc Computer Science
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-full border border-slate-200/70 dark:border-slate-700">
            {navLinks.slice(0, recruiterMode ? 5 : 8).map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Command Palette Trigger Button */}
            <button
              id="command-palette-trigger"
              onClick={onOpenCommandPalette}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 text-xs font-mono transition-all cursor-pointer"
              title="Search Portfolio (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Search</span>
              <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 border dark:border-slate-600 text-slate-500 dark:text-slate-300">
                Ctrl K
              </kbd>
            </button>

            {/* Recruiter Mode Toggle */}
            <button
              onClick={onToggleRecruiterMode}
              className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                recruiterMode
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300'
              }`}
              title="Toggle Recruiter Mode view"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Recruiter Mode</span>
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Resume
            </button>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center gap-1 lg:hidden">
              <button
                onClick={onOpenAI}
                className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 cursor-pointer"
                title="Gokul AI"
              >
                <Bot className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 dark:text-slate-200 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xl px-4 py-6 max-h-[calc(100vh-64px)] overflow-y-auto animate-in slide-in-from-top duration-200">
          
          <div className="mb-4 flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <button
              onClick={() => { onOpenCommandPalette(); setIsOpen(false); }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 w-full"
            >
              <Search className="w-4 h-4 text-blue-600" />
              <span>Search Portfolio (Commands)</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => { onToggleRecruiterMode(); setIsOpen(false); }}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                recruiterMode 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              {recruiterMode ? 'Recruiter Mode Active' : 'Enable Recruiter Mode'}
            </button>

            <button
              onClick={() => { setIsOpen(false); onOpenResume(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              View & Download Resume
            </button>

            <div className="flex items-center justify-around mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
              <a href={`tel:${personalInfo.phone}`} className="p-2 hover:text-blue-600" title="Call">
                <Phone className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 hover:text-blue-600" title="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-600" title="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-600" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}