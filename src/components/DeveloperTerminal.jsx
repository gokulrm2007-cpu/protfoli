import React, { useState } from 'react';
import { personalInfo, projectsData, skillsData } from '../data/portfolioData';
import { Terminal, Copy, Check, Play, CornerDownLeft, Sparkles } from 'lucide-react';

export default function DeveloperTerminal() {
  const [history, setHistory] = useState([
    { cmd: 'whoami', output: `${personalInfo.name} — ${personalInfo.role}` },
    { cmd: 'role', output: personalInfo.headline },
    { cmd: 'focus', output: 'Full Stack Web Development + Artificial Intelligence & Machine Learning' },
    { cmd: 'current_project', output: 'ArogyaSathi AI (https://arogyasathiai.netlify.app/) & WORKLX' },
    { cmd: 'favorite_stack', output: 'React.js + Node.js + Express.js + MongoDB + Tailwind CSS' },
    { cmd: 'github', output: personalInfo.githubUrl },
  ]);
  const [inputCmd, setInputCmd] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCommand = (e) => {
    e.preventDefault();
    const clean = inputCmd.trim().toLowerCase();
    if (!clean) return;

    let response = '';
    switch (clean) {
      case 'help':
        response = 'Available commands: whoami, role, focus, current_project, favorite_stack, skills, projects, education, contact, github, linkedin, clear, gokul';
        break;
      case 'whoami':
        response = `${personalInfo.name} — ${personalInfo.role} at ${personalInfo.college}`;
        break;
      case 'role':
        response = personalInfo.headline;
        break;
      case 'focus':
        response = 'Full Stack Development, AI/ML, Prompt Engineering & Real-World System Design';
        break;
      case 'current_project':
        response = 'ArogyaSathi AI (Multilingual Medical Intake) & WORKLX (Worker Marketplace)';
        break;
      case 'favorite_stack':
        response = 'MERN Stack (MongoDB, Express, React, Node) + Tailwind CSS + Python';
        break;
      case 'skills':
        response = 'Python, Java, C, JavaScript, React.js, Node.js, Express.js, MongoDB, Vite, Tailwind CSS, Git, GitHub';
        break;
      case 'projects':
        response = '1. WORKLX (Worker Hiring Marketplace)\n2. ArogyaSathi AI (AI Patient Intake in 8 Languages)\n3. Smart Helmet 2.0 (IoT Embedded Safety)';
        break;
      case 'education':
        response = `${personalInfo.degree} at ${personalInfo.college} (${personalInfo.semester})`;
        break;
      case 'contact':
        response = `Phone: ${personalInfo.phone} | Email: ${personalInfo.email}`;
        break;
      case 'github':
        response = personalInfo.githubUrl;
        break;
      case 'linkedin':
        response = personalInfo.linkedinUrl;
        break;
      case 'clear':
        setHistory([]);
        setInputCmd('');
        return;
      case 'gokul':
        response = '🚀 Keep building. Keep learning. Welcome to Gokul\'s terminal!';
        break;
      default:
        response = `Command not recognized: "${clean}". Type "help" for a list of available commands.`;
    }

    setHistory(prev => [...prev, { cmd: inputCmd, output: response }]);
    setInputCmd('');
  };

  const handleCopy = () => {
    const text = history.map(h => `$ ${h.cmd}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3 border border-blue-200/60 dark:border-blue-800">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE CLI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Developer Terminal.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
            Interact with Gokul's developer environment directly from your browser.
          </p>
        </div>

        {/* Realistic macOS/Linux Terminal Window */}
        <div className="rounded-3xl bg-slate-950 text-slate-100 font-mono shadow-2xl border border-slate-800 overflow-hidden">
          
          {/* Terminal Title Bar */}
          <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-xs text-slate-400 ml-2 font-mono">gokul@portfolio:~ (bash)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-xs flex items-center gap-1 cursor-pointer"
                title="Copy Terminal Logs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-7 space-y-4 text-xs sm:text-sm max-h-96 overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <span className="text-blue-400">gokul@portfolio:~$</span>
                  <span>{item.cmd}</span>
                </div>
                <div className="text-slate-300 pl-4 whitespace-pre-line leading-relaxed">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Live Command Prompt */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 text-emerald-400">
              <span className="text-blue-400 shrink-0 font-semibold">gokul@portfolio:~$</span>
              <input
                type="text"
                value={inputCmd}
                onChange={(e) => setInputCmd(e.target.value)}
                placeholder="Type 'help', 'projects', 'skills' or 'contact'..."
                className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none font-mono text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Run</span>
                <CornerDownLeft className="w-3 h-3" />
              </button>
            </form>
          </div>

          {/* Suggested Commands Quick Bar */}
          <div className="px-5 py-3 bg-slate-900/80 border-t border-slate-800 flex items-center gap-2 overflow-x-auto text-[11px] text-slate-400">
            <span className="font-semibold text-slate-500">Quick Commands:</span>
            {['help', 'whoami', 'focus', 'projects', 'skills', 'contact', 'clear'].map((c) => (
              <button
                key={c}
                onClick={() => {
                  setInputCmd(c);
                  setTimeout(() => {
                    const fakeEvent = { preventDefault: () => {} };
                    handleCommand(fakeEvent);
                  }, 50);
                }}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-blue-600/30 hover:text-blue-300 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
              >
                {c}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}