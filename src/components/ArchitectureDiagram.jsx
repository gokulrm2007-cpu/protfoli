import React, { useState } from 'react';
import { ArrowDown, CheckCircle2, Sparkles, Layers, Activity } from 'lucide-react';

export default function ArchitectureDiagram() {
  const [activeProject, setActiveProject] = useState('arogyasathi');
  const [selectedNode, setSelectedNode] = useState(0);

  const arogyaSathiNodes = [
    { title: "1. Patient Intake", role: "Frontend UI", detail: "Patient enters the portal via mobile or kiosk web app." },
    { title: "2. AI Interview", role: "Speech & Text", detail: "Voice/text chat in 8 Indian languages (English, Tamil, Hindi, etc.) via Web Speech API." },
    { title: "3. Document OCR", role: "OCR Extraction", detail: "Extracts clinical text from uploaded prescriptions & diagnostic lab reports." },
    { title: "4. Risk Check", role: "Triage Engine", detail: "Calculates automated risk stratification and vital alerts." },
    { title: "5. Doctor Dashboard", role: "Clinical Review", detail: "Doctor inspects structured clinical summary before consultation." },
    { title: "6. Digital Record", role: "Database Storage", detail: "Creates exportable electronic medical record in MongoDB." },
    { title: "7. Analytics", role: "Power BI", detail: "Hospital OPD patient volume and disease trends dashboard." }
  ];

  const worklxNodes = [
    { title: "1. Seeker Search", role: "Client App", detail: "Customer searches for technicians by skill and geolocation." },
    { title: "2. Worker Profile", role: "Verification", detail: "Displays certified skillset, transparent pricing, and past ratings." },
    { title: "3. Booking System", role: "Scheduling", detail: "Selects appointment slot and service requirements." },
    { title: "4. Payment Gateway", role: "Razorpay", detail: "Secure online payment with order confirmation." },
    { title: "5. Real-Time Chat", role: "Socket.io", detail: "Direct instant messaging between customer and technician." },
    { title: "6. Job Tracking", role: "Lifecycle", detail: "Tracks assigned, in-progress, and completed service statuses." },
    { title: "7. Review & Rating", role: "Feedback", detail: "Customer submits rating to update verified worker reputation." }
  ];

  const currentNodes = activeProject === 'arogyasathi' ? arogyaSathiNodes : worklxNodes;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-card">
      
      {/* Header & Project Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
            <Activity className="w-4 h-4" />
            <span>Interactive Architecture Flow</span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            System Pipeline Visualization
          </h3>
        </div>

        <div className="inline-flex p-1 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => { setActiveProject('arogyasathi'); setSelectedNode(0); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeProject === 'arogyasathi'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            ArogyaSathi AI
          </button>
          <button
            onClick={() => { setActiveProject('worklx'); setSelectedNode(0); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeProject === 'worklx'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            WORKLX Marketplace
          </button>
        </div>
      </div>

      {/* Nodes Flowchart (Horizontal Grid with Connecting Arrows) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
        {currentNodes.map((node, idx) => {
          const isSelected = idx === selectedNode;

          return (
            <button
              key={node.title}
              onClick={() => setSelectedNode(idx)}
              className={`p-3 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105 ring-2 ring-blue-300 dark:ring-blue-800'
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-400'
              }`}
            >
              <div>
                <span className={`text-[10px] font-extrabold uppercase block mb-1 ${
                  isSelected ? 'text-blue-100' : 'text-blue-600 dark:text-blue-400'
                }`}>
                  {node.role}
                </span>
                <span className="font-bold text-xs leading-tight block">
                  {node.title}
                </span>
              </div>
              <span className={`text-[10px] mt-3 block ${isSelected ? 'text-blue-200' : 'text-slate-400'}`}>
                Step {idx + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Node Detail Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 mb-0.5">
            <span>Selected Component:</span>
            <span className="text-slate-900 dark:text-white">{currentNodes[selectedNode].title}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {currentNodes[selectedNode].detail}
          </p>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold shrink-0">
          Interactive Node
        </span>
      </div>

    </div>
  );
}