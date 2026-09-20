import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Innovation from './components/Innovation';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import BackToTop from './components/BackToTop';
import GokulAI from './components/GokulAI';
import CommandPalette from './components/CommandPalette';
import DeveloperTerminal from './components/DeveloperTerminal';
import GithubActivity from './components/GithubActivity';
import ProjectModal from './components/ProjectModal';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import EasterEgg from './components/EasterEgg';
import RecruiterBanner from './components/RecruiterBanner';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Sync dark mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Global Ctrl + K / Cmd + K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCmdOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col relative selection:bg-blue-600 selection:text-white transition-colors duration-300">
      
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Desktop Custom Cursor Glow */}
      <CustomCursor />

      {/* Developer "gokul" Easter Egg Listener */}
      <EasterEgg />

      {/* Recruiter Priority Mode Banner */}
      <RecruiterBanner 
        active={recruiterMode} 
        onClose={() => setRecruiterMode(false)} 
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Sticky Navigation Bar */}
      <Navbar 
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(prev => !prev)}
        recruiterMode={recruiterMode}
        onToggleRecruiterMode={() => setRecruiterMode(prev => !prev)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAI={() => setIsAIOpen(true)}
        onOpenCommandPalette={() => setIsCmdOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenAI={() => setIsAIOpen(true)}
        />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <GithubActivity />
        <DeveloperTerminal />
        {!recruiterMode && <Innovation />}
        <Journey />
        <Certifications />
        <Education />
        {!recruiterMode && <Services />}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* ChatGPT-style AI Assistant Drawer / Modal */}
      <GokulAI 
        isOpen={isAIOpen} 
        onToggle={() => setIsAIOpen(prev => !prev)}
        onClose={() => setIsAIOpen(false)} 
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette 
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onOpenAI={() => { setIsCmdOpen(false); setIsAIOpen(true); }}
        onOpenResume={() => { setIsCmdOpen(false); setIsResumeOpen(true); }}
      />

      {/* Project Case Study Deep Dive Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Resume Preview & Print Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
