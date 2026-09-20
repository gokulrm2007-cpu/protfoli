import React, { useState, useEffect } from 'react';
import { personalInfo, heroContent } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Sparkles, 
  Code2, 
  Cpu, 
  Atom, 
  Server, 
  Camera, 
  Bot,
  ExternalLink
} from 'lucide-react';

export default function Hero({ onOpenResume, onOpenAI }) {
  const [photoError, setPhotoError] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [greetingTime, setGreetingTime] = useState('');

  // Typing effect
  useEffect(() => {
    const currentPhrase = heroContent.typingPhrases[typingIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % heroContent.typingPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingIndex]);

  // Dynamic Live Time Greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreetingTime('Good morning, I\'m Gokul\'s portfolio.');
    else if (hour >= 12 && hour < 17) setGreetingTime('Good afternoon, I\'m Gokul\'s portfolio.');
    else if (hour >= 17 && hour < 21) setGreetingTime('Good evening, I\'m Gokul\'s portfolio.');
    else setGreetingTime('Good night, I\'m Gokul\'s portfolio.');
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-3.5 h-3.5" />;
      case 'Cpu': return <Cpu className="w-3.5 h-3.5" />;
      case 'Atom': return <Atom className="w-3.5 h-3.5" />;
      case 'Server': return <Server className="w-3.5 h-3.5" />;
      case 'Sparkles': return <Sparkles className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Subtle Atmospheric Mesh Glow */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-28 right-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{heroContent.statusBadge}</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
                {heroContent.subStatus}
              </span>
            </div>

            {/* Live Clock / Time Greeting */}
            {greetingTime && (
              <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-2">
                ⚡ {greetingTime}
              </p>
            )}

            {/* Greeting */}
            <p className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 tracking-wide">
              Hi, I'm Gokul M 👋
            </p>

            {/* Large Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
              B.Sc Computer Science Student &amp; <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Aspiring Software Engineer
              </span>
            </h1>

            {/* Rotating / Typing Text Effect */}
            <div className="h-8 mb-4 flex items-center">
              <span className="text-sm sm:text-lg font-semibold text-slate-700 dark:text-slate-300">
                {displayedText}
              </span>
              <span className="w-0.5 h-5 bg-blue-600 dark:bg-blue-400 ml-1.5 animate-pulse"></span>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              I build modern web applications and explore AI-powered solutions to solve real-world problems.
            </p>

            {/* 3 Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all group cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold text-sm sm:text-base shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base border border-slate-200 dark:border-slate-700 shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenAI}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 font-semibold text-xs sm:text-sm border border-blue-200 dark:border-blue-800 shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer"
                title="Interactive Portfolio AI"
              >
                <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Ask AI</span>
              </button>
            </div>

            {/* Small Clickable Social Icons */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">
                  Connect:
                </span>
                
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-all cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 transition-all cursor-pointer"
                  title="GitHub Profile"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-all cursor-pointer"
                  title="Send Email"
                >
                  <Mail className="w-4.5 h-4.5" />
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 transition-all cursor-pointer"
                  title="Call Gokul"
                >
                  <Phone className="w-4.5 h-4.5" />
                </a>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium bg-white/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-700">
                🎓 {personalInfo.degree} · <span className="text-slate-900 dark:text-white font-semibold">{personalInfo.college}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Card with Floating Tech Badges */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-cyan-400/25 rounded-3xl blur-2xl -z-10 transform scale-105"></div>

              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/80 dark:border-slate-800 shadow-2xl relative group">
                
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50/60 dark:from-slate-800 dark:to-slate-900 border border-blue-500/20 shadow-inner flex flex-col items-center justify-center">
                  {personalInfo.useCustomPhoto && personalInfo.photoUrl && !photoError ? (
                    <img
                      src={personalInfo.photoUrl}
                      alt={personalInfo.name}
                      onError={() => setPhotoError(true)}
                      className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-center p-6 flex flex-col items-center justify-center h-full">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white text-3xl sm:text-4xl font-extrabold shadow-lg shadow-blue-500/30 mb-4 ring-4 ring-blue-100 dark:ring-blue-900/50 group-hover:scale-105 transition-transform">
                        GM
                      </div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl mb-1">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-3 uppercase tracking-wider">
                        {personalInfo.role}
                      </p>
                      
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold shadow-xs">
                        <Camera className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Add Your Profile Photo</span>
                      </div>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1.5">
                        Drop image into <code className="text-slate-600 dark:text-slate-300 font-mono">src/assets/profile.jpg</code>
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Student & Builder</span>
                    </div>
                    <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-md border border-blue-100 dark:border-blue-900">
                      VETIAS
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Passionate about Full Stack & AI</span>
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold font-mono">2026</span>
                </div>
              </div>

              {heroContent.floatingTechs.map((tech) => (
                <div
                  key={tech.name}
                  style={{
                    top: tech.top,
                    bottom: tech.bottom,
                    left: tech.left,
                    right: tech.right,
                  }}
                  className={`hidden sm:flex absolute items-center gap-1.5 px-3.5 py-1.5 rounded-xl border shadow-md text-xs font-bold ${tech.color} ${tech.animation} backdrop-blur-md transition-transform hover:scale-110 z-10`}
                >
                  {getIcon(tech.icon)}
                  <span>{tech.name}</span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}