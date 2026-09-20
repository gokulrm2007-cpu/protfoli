import React, { useState, useEffect } from 'react';
import { Rocket, X, Sparkles } from 'lucide-react';

export default function EasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [buffer, setBuffer] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const newBuffer = (buffer + e.key.toLowerCase()).slice(-5);
      setBuffer(newBuffer);

      if (newBuffer === 'gokul') {
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [buffer]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="p-8 rounded-3xl bg-slate-950 text-white max-w-sm w-full shadow-2xl border border-blue-500/40 text-center relative animate-in zoom-in-95">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-blue-500/40">
          <Rocket className="w-8 h-8 animate-bounce" />
        </div>

        <h3 className="text-xl font-extrabold mb-1">Developer Easter Egg</h3>
        <p className="text-sm font-semibold text-cyan-400 mb-4">
          🚀 Keep building. Keep learning.
        </p>
        <p className="text-xs text-slate-400 mb-6">
          You unlocked Gokul's hidden developer message.
        </p>

        <button
          onClick={() => setIsOpen(false)}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer w-full"
        >
          Continue Exploring
        </button>
      </div>
    </div>
  );
}