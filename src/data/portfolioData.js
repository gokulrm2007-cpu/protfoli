/**
 * ==============================================================================
 * CENTRAL PORTFOLIO CONFIGURATION & AI KNOWLEDGE BASE - GOKUL M
 * ==============================================================================
 */

export const personalInfo = {
  name: "Gokul M",
  role: "B.Sc Computer Science Student",
  headline: "Aspiring Software Engineer | Full Stack Developer | AI & ML Enthusiast",
  shortIntro: "I am a B.Sc Computer Science student passionate about software development, full-stack web applications, Artificial Intelligence and Machine Learning. I enjoy building practical technology solutions that solve real-world problems.",
  
  // Contact details
  phone: "6379964841",
  email: "gokulrm2007@gmail.com",
  location: "India",
  college: "VETIAS College",
  degree: "B.Sc Computer Science",
  semester: "[Current Semester]",

  // Social & Platform Links
  githubUrl: "https://github.com/gokulrm2007-cpu",
  linkedinUrl: "https://www.linkedin.com/in/gokul-m-57817635a",
  
  // Profile photo configuration:
  photoUrl: "/profile.jpg",
  useCustomPhoto: true,

  // Resume details
  resumeAvailable: true,
  resumeFileName: "Gokul_M_Resume.pdf",
};

export const heroContent = {
  greeting: "Hi, I'm",
  name: "Gokul M",
  role: "B.Sc Computer Science Student",
  tagline: "Building Software & AI Solutions",
  typingPhrases: [
    "Full Stack Developer",
    "AI & ML Enthusiast",
    "Problem Solver",
    "Software Engineer in Progress"
  ],
  statusBadge: "Available for Opportunities",
  subStatus: "Currently learning • Building • Exploring AI",
  statement: "Building ideas into software, and exploring what AI can make possible.",
  
  floatingTechs: [
    { name: "Python", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20", icon: "Code2", animation: "animate-float-slow", top: "-10px", left: "8%" },
    { name: "Java", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20", icon: "Cpu", animation: "animate-float-medium", top: "25%", right: "-12px" },
    { name: "React", color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20", icon: "Atom", animation: "animate-float-fast", bottom: "30%", left: "-15px" },
    { name: "Node.js", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20", icon: "Server", animation: "animate-float-slow", bottom: "0px", right: "18%" },
    { name: "AI/ML", color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20", icon: "Sparkles", animation: "animate-float-medium", top: "52%", left: "-8px" },
  ],

  stats: [
    { label: "Core Focus", value: "Full Stack & AI/ML" },
    { label: "Featured Projects", value: "3+ Major Builds" },
    { label: "College", value: "VETIAS College" },
  ]
};

export const aboutContent = {
  heading: "About Me.",
  paragraphs: [
    "I am a B.Sc Computer Science student with a strong interest in software engineering, full-stack development, Artificial Intelligence and Machine Learning.",
    "I enjoy learning new technologies, building practical projects and turning ideas into useful digital solutions.",
    "My current goal is to grow as a software engineer while developing strong skills in programming, web development and AI-powered applications."
  ],
  currentlyLearning: [
    { name: "Full Stack Development", icon: "Layers", desc: "React, Node.js, Express & MongoDB ecosystem" },
    { name: "AI & Machine Learning", icon: "Brain", desc: "Practical algorithms, LLM integrations & predictive models" },
    { name: "Prompt Engineering", icon: "Sparkles", desc: "Structured prompt workflows & AI-assisted development" },
    { name: "Modern Web Development", icon: "Globe", desc: "Vite, Tailwind CSS, REST APIs & Responsive UI" },
    { name: "Data & Analytics", icon: "BarChart3", desc: "Data processing, metrics & visualization" }
  ]
};

export const skillsData = {
  heading: "Technical Skills.",
  subheading: "A comprehensive toolkit of languages, frameworks, and developer tools I work with.",
  categories: [
    {
      name: "Programming",
      description: "Core programming languages for logic, data structures, and algorithms",
      icon: "Code",
      skills: [
        { name: "Python", level: "Advanced", usage: "AI scripting, automation & backend services" },
        { name: "Java", level: "Intermediate", usage: "OOP architecture & academic coursework" },
        { name: "C", level: "Intermediate", usage: "System concepts & low-level memory logic" },
        { name: "JavaScript", level: "Advanced", usage: "Full-stack web apps, React & Node.js" },
      ]
    },
    {
      name: "Frontend",
      description: "Building responsive, modern, and interactive user interfaces",
      icon: "Layout",
      skills: [
        { name: "HTML5", level: "Advanced", usage: "Semantic structure & accessibility" },
        { name: "CSS3", level: "Advanced", usage: "Modern layouts, flexbox & grid" },
        { name: "React.js", level: "Advanced", usage: "WORKLX, ArogyaSathi AI & Portfolio" },
        { name: "Vite", level: "Proficient", usage: "Fast frontend build tooling" },
        { name: "Tailwind CSS", level: "Advanced", usage: "Utility-first modern styling" },
        { name: "React Router", level: "Proficient", usage: "SPA routing & nested layouts" },
      ]
    },
    {
      name: "Backend",
      description: "Server architecture, microservices, and API integrations",
      icon: "Server",
      skills: [
        { name: "Node.js", level: "Advanced", usage: "Runtime for REST APIs & servers" },
        { name: "Express.js", level: "Advanced", usage: "Backend routing, auth & middleware" },
        { name: "REST APIs", level: "Advanced", usage: "Clean endpoint contracts & JSON responses" },
      ]
    },
    {
      name: "Database",
      description: "Data modeling, schema design, and query optimization",
      icon: "Database",
      skills: [
        { name: "MongoDB", level: "Proficient", usage: "NoSQL document storage & collections" },
        { name: "Mongoose", level: "Proficient", usage: "ODM schemas, validation & relationships" },
      ]
    },
    {
      name: "AI / ML",
      description: "Intelligent systems, language models, and practical AI applications",
      icon: "Brain",
      skills: [
        { name: "Artificial Intelligence", level: "Practical", usage: "Conversational intake & triage logic" },
        { name: "Machine Learning", level: "Learning & Applying", usage: "Model training, data classification" },
        { name: "Prompt Engineering", level: "Advanced", usage: "LLM system prompt design & reasoning" },
        { name: "AI-Powered Applications", level: "Applied", usage: "ArogyaSathi AI voice & OCR system" },
      ]
    },
    {
      name: "Tools & Platforms",
      description: "Development environment, version control, and design",
      icon: "Wrench",
      skills: [
        { name: "Git", level: "Proficient", usage: "Version control & branch management" },
        { name: "GitHub", level: "Proficient", usage: "Open-source repo hosting & actions" },
        { name: "VS Code", level: "Advanced", usage: "Primary IDE & developer workspace" },
        { name: "Figma", level: "Intermediate", usage: "UI design & wireframing" },
        { name: "HackerRank", level: "Active Practice", usage: "Algorithmic problem solving" },
      ]
    },
    {
      name: "Other Domains",
      description: "System engineering, hardware, and engineering mindset",
      icon: "Cpu",
      skills: [
        { name: "Hardware & Networking", level: "Certified / Trained", usage: "Computer architecture & network setup" },
        { name: "Problem Solving", level: "Core Strength", usage: "Analytical thinking & debug workflows" },
        { name: "Full Stack Development", level: "End-to-End", usage: "Complete MERN web applications" },
      ]
    }
  ]
};

export const techOrbitList = [
  { name: "Python", category: "Language", status: "Advanced", usage: "AI scripting & data logic", angle: 0 },
  { name: "Java", category: "Language", status: "Intermediate", usage: "OOP & academic projects", angle: 33 },
  { name: "JavaScript", category: "Language", status: "Advanced", usage: "Full Stack MERN applications", angle: 66 },
  { name: "React", category: "Frontend", status: "Advanced", usage: "ArogyaSathi AI, WORKLX, Portfolio", angle: 99 },
  { name: "Node.js", category: "Backend", status: "Advanced", usage: "Express REST APIs & WebSocket servers", angle: 132 },
  { name: "Express", category: "Backend", status: "Advanced", usage: "API middleware & JWT authentication", angle: 165 },
  { name: "MongoDB", category: "Database", status: "Proficient", usage: "Document databases & Mongoose schemas", angle: 198 },
  { name: "Git", category: "Tools", status: "Proficient", usage: "Version control & collaboration", angle: 231 },
  { name: "GitHub", category: "Tools", status: "Proficient", usage: "Repository hosting & open source", angle: 264 },
  { name: "AI", category: "Intelligence", status: "Practical", usage: "Intelligent intake & speech processing", angle: 297 },
  { name: "ML", category: "Intelligence", status: "Learning & Applying", usage: "Predictive algorithms & classifiers", angle: 330 },
];

export const projectsData = [
  {
    id: "worklx",
    title: "WORKLX – Worker Hiring & Service Marketplace",
    badge: "Full-Stack Marketplace",
    featured: true,
    tagline: "Connecting customers with trusted skilled technicians across trades.",
    description: "WORKLX is a full-stack worker hiring and service marketplace that connects customers with trusted skilled workers such as electricians, plumbers, painters, carpenters, masons and AC technicians.",
    problem: "Finding certified, dependable local technicians (electricians, plumbers, carpenters) with transparent pricing and real-time scheduling is fragmented and unreliable.",
    solution: "A unified full-stack multi-role marketplace with geolocation matching, skill-based search, verified worker profiles, integrated Razorpay payments, real-time Socket.io chat, and client reviews.",
    architectureSteps: [
      { id: "1", title: "Customer Search", desc: "Filters by skill and location" },
      { id: "2", title: "Worker Profile", desc: "Reviews ratings, past jobs & rates" },
      { id: "3", title: "Booking Flow", desc: "Schedules service appointment" },
      { id: "4", title: "Payment Interlock", desc: "Razorpay secure transaction" },
      { id: "5", title: "Real-time Chat", desc: "Socket.io live messaging" },
      { id: "6", title: "Status Tracking", desc: "Live job lifecycle updates" },
      { id: "7", title: "Review & Rating", desc: "Transparent feedback loop" }
    ],
    category: "Full Stack Web App",
    features: [
      "Worker and customer dual-role architecture",
      "Comprehensive worker profiles & skill verification",
      "Skill-based search & filtering",
      "Location-based search & mapping",
      "Transparent customer ratings and reviews",
      "Seamless online booking system",
      "Secure payment integration (Razorpay)",
      "Dedicated worker dashboard for managing jobs",
      "Admin analytics & operational dashboard",
      "Real-time customer-worker chat (Socket.io)",
      "Live booking status tracking"
    ],
    technologies: [
      "React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js",
      "MongoDB", "Mongoose", "JWT", "Socket.io", "Razorpay",
      "Cloudinary", "Google Maps API", "Recharts"
    ],
    links: {
      liveDemo: "https://github.com/gokulrm2007-cpu",
      github: "https://github.com/gokulrm2007-cpu",
    },
    accentColor: "blue"
  },
  {
    id: "arogyasathi-ai",
    title: "ArogyaSathi AI – Smart Patient Intake & Clinical Assistant",
    badge: "AI Healthcare Platform",
    featured: true,
    tagline: "Multilingual pre-consultation intelligence simplifying patient intake for hospitals.",
    description: "A multilingual hospital pre-consultation platform designed to simplify patient intake and help doctors review structured patient information before consultation.",
    problem: "Hospital doctors spend 40%+ of consultation time collecting routine medical history across multiple language barriers, leading to long OPD queues and doctor burnout.",
    solution: "An AI-powered multilingual intake assistant supporting 8 Indian languages with voice/text input, OCR medical document scanning, automated vital risk scoring, and a structured clinical summary dashboard for doctors.",
    architectureSteps: [
      { id: "1", title: "Patient Intake", desc: "Enters portal in native language" },
      { id: "2", title: "AI Interview", desc: "Voice/text chat across 8 Indian languages" },
      { id: "3", title: "Document OCR", desc: "Extracts text from medical prescriptions" },
      { id: "4", title: "Risk Stratification", desc: "Calculates clinical risk flags" },
      { id: "5", title: "Doctor Dashboard", desc: "Displays structured clinical summary" },
      { id: "6", title: "Digital Record", desc: "Secure exportable electronic dossier" },
      { id: "7", title: "Power BI Analytics", desc: "Hospital OPD patient load analytics" }
    ],
    supportedLanguages: [
      "English", "Tamil", "Hindi", "Telugu", "Kannada", "Malayalam", "Bengali", "Marathi"
    ],
    features: [
      "Multilingual patient interview supporting 8 Indian languages",
      "Integrated Voice and Text input (Web Speech API)",
      "Document upload with OCR scanning for physical reports",
      "Chronological patient medical timeline",
      "AI-generated structured clinical summary for doctors",
      "Doctor review & diagnostic verification workflow",
      "Automated clinical risk indicators & alert badges",
      "Secure digital medical record storage",
      "Doctor dashboard & administrative hospital analytics",
      "Real-time patient intake notifications",
      "Power BI analytics integration for clinical metrics"
    ],
    technologies: [
      "React", "Vite", "Tailwind CSS", "Node.js", "Express.js",
      "MongoDB", "Mongoose", "JWT", "Socket.io", "Web Speech API",
      "OCR", "AI/ML", "Recharts", "Power BI"
    ],
    links: {
      liveDemo: "https://arogyasathiai.netlify.app/",
      github: "https://github.com/gokulrm2007-cpu/sih",
    },
    accentColor: "indigo"
  },
  {
    id: "smart-helmet",
    title: "Smart Helmet 2.0",
    badge: "IoT & Embedded Safety",
    featured: false,
    tagline: "Intelligent two-wheeler safety system with multi-sensor vehicle interlock.",
    description: "An IoT-based safety system designed to improve two-wheeler safety by checking helmet usage, alcohol detection and accident conditions before enabling the vehicle.",
    problem: "Rider non-compliance with helmet wearing and driving under the influence of alcohol cause severe road accidents with delayed emergency intervention.",
    solution: "A sensor-driven hardware interlock system using ESP32/Arduino that verifies helmet contact and alcohol threshold before closing the vehicle ignition relay.",
    architectureSteps: [
      { id: "1", title: "Helmet Wear Sensor", desc: "Confirms rider is wearing helmet" },
      { id: "2", title: "MQ-3 Alcohol Sensor", desc: "Checks breath alcohol level" },
      { id: "3", title: "Controller Logic", desc: "ESP32 evaluates safety criteria" },
      { id: "4", title: "Ignition Relay", desc: "Enables vehicle engine only if safe" },
      { id: "5", title: "OLED & Buzzer", desc: "Live status readout & alarm alerts" },
      { id: "6", title: "Accident Sensor", desc: "Impact detection trigger" }
    ],
    features: [
      "Smart helmet wear detection before ignition switch",
      "Integrated alcohol breath detection sensor",
      "Accident & impact condition detection",
      "Automated vehicle engine relay control (Interlock)",
      "Real-time safety warning system",
      "OLED display showing live status diagnostics",
      "Buzzer audio alerts for safety violations",
      "Dual Red/Green safety visual indicators"
    ],
    technologies: [
      "ESP32", "Arduino", "OLED Display", "Sensors",
      "Relay Module", "Buzzer", "LED Indicators", "Embedded C/C++"
    ],
    links: {
      liveDemo: "https://github.com/gokulrm2007-cpu",
      github: "https://github.com/gokulrm2007-cpu",
      wokwi: "https://github.com/gokulrm2007-cpu"
    },
    accentColor: "emerald"
  }
];

export const innovationData = {
  heading: "Building Solutions for Real Problems",
  subheading: "Applying technology to address safety, healthcare, livelihood, and governance challenges.",
  items: [
    {
      title: "Smart Helmet 2.0",
      category: "IoT & Road Safety",
      description: "Engineered a sensor-integrated safety system with helmet verification, alcohol detection, and ignition lock to prevent accidents.",
      tags: ["ESP32", "Embedded C", "Safety IoT"]
    },
    {
      title: "ArogyaSathi AI",
      category: "AI in Healthcare",
      description: "Created an 8-language AI intake assistant and OCR clinical platform to reduce doctor consultation prep time.",
      tags: ["AI/ML", "Voice AI", "Healthcare Tech"]
    },
    {
      title: "WORKLX",
      category: "Livelihood & Services",
      description: "Designed a digital marketplace empowering local blue-collar workers with direct customer bookings and transparent ratings.",
      tags: ["Full Stack", "Marketplace", "Real-time"]
    },
    {
      title: "Smart India Hackathon (SIH) 2026 Project",
      category: "National Digital Governance",
      description: "Project focus: National Digital Platform for Research, Policy Innovation, and Evidence-Based Land Governance.",
      tags: ["SIH 2026", "Digital Governance", "Policy Tech"]
    }
  ]
};

export const certificationsData = [
  {
    title: "Hardware & Networking",
    type: "Certification / Training",
    status: "Completed",
    description: "Comprehensive practical training in computer hardware architectures, system assembly, network topology, routing, and troubleshooting.",
    icon: "Cpu",
    date: "Certified"
  },
  {
    title: "Python Workshop",
    type: "Hands-on Technical Workshop",
    status: "Participated",
    description: "Participated in an intensive two-day Python workshop covering foundational programming, data structures, and automation scripting.",
    icon: "Code",
    date: "Workshop"
  },
  {
    title: "Machine Learning",
    type: "Ongoing Specialization",
    status: "Currently Learning",
    description: "Focused on practical AI applications, data analytics, predictive modeling, and real-world problem solving with modern ML tools.",
    icon: "Brain",
    date: "In Progress"
  },
  {
    title: "Prompt Engineering",
    type: "AI Development",
    status: "Practical Study",
    description: "Learning structured prompt engineering techniques, LLM orchestration, and AI-assisted development workflows.",
    icon: "Sparkles",
    date: "Applied Skill"
  },
  {
    title: "Full Stack Development",
    type: "Web Technologies",
    status: "Active Practice",
    description: "Learning and building full-stack applications using modern JavaScript technologies (React, Node.js, Express, Vite, MongoDB).",
    icon: "Layers",
    date: "Continuous"
  },
  {
    title: "MSME Course",
    type: "Professional Program",
    status: "Completed",
    description: "Completed/attended MSME-related course focused on technology enterprise, innovation management, and project execution.",
    icon: "Award",
    date: "Completed"
  }
];

export const educationData = {
  heading: "Education.",
  degree: "B.Sc Computer Science",
  college: "VETIAS College",
  semester: "[Current Semester]",
  tagline: "Building a rigorous academic foundation in computer science, algorithmic thinking, and modern software engineering.",
  courseworkHighlights: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java & Python)",
    "Database Management Systems",
    "Computer Networks & Operating Systems",
    "Web Application Development",
    "Software Engineering Principles"
  ]
};

export const journeyData = [
  {
    step: "01",
    title: "Computer Science Student",
    subtitle: "B.Sc Computer Science at VETIAS College",
    description: "Building strong fundamentals in algorithms, programming languages (C, Python, Java), computer architecture, and computational problem solving.",
    icon: "GraduationCap"
  },
  {
    step: "02",
    title: "Full Stack Development",
    subtitle: "React + Node.js + Express + MongoDB Stack",
    description: "Transitioned from core programming to modern web architectures, crafting responsive user interfaces, RESTful APIs, and database-driven web applications.",
    icon: "Layers"
  },
  {
    step: "03",
    title: "AI & Machine Learning",
    subtitle: "Intelligent Systems & Applied AI",
    description: "Learning practical AI/ML concepts, prompt engineering, speech processing, and embedding AI-powered features into functional applications.",
    icon: "Brain"
  },
  {
    step: "04",
    title: "Project Development",
    subtitle: "Developing WORKLX and ArogyaSathi AI",
    description: "Translating engineering knowledge into complete, end-to-end full stack products with multi-role workflows, OCR scanning, and real-time communication.",
    icon: "Rocket"
  },
  {
    step: "05",
    title: "Hackathon / Innovation Projects",
    subtitle: "Real-World Problem Solving & SIH 2026",
    description: "Working on impactful technical presentations, IoT safety systems (Smart Helmet 2.0), and National Digital Land Governance platform for SIH 2026.",
    icon: "Award"
  }
];

export const servicesData = [
  {
    title: "Web Development",
    subtitle: "Modern, Responsive & Fast",
    description: "Crafting modern, mobile-first responsive websites and web applications with clean code, smooth animations, and optimized load times.",
    icon: "Layout",
    skills: ["React.js", "Vite", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    title: "Full Stack Development",
    subtitle: "End-to-End Applications",
    description: "Building scalable frontend, robust backend APIs, and database architectures with authentication, payment gateways, and real-time websockets.",
    icon: "Server",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    title: "AI & ML Applications",
    subtitle: "Intelligent & Practical AI",
    description: "Developing practical AI-powered solutions, conversational agents, prompt engineering pipelines, and smart OCR/speech integrated systems.",
    icon: "Brain",
    skills: ["AI Integration", "Prompt Engineering", "OCR & Voice", "Python"]
  },
  {
    title: "UI / Prototype Development",
    subtitle: "Clean Interfaces & Mockups",
    description: "Translating concepts into clean, functional prototypes, user-centric interfaces, and interactive software demos for validation.",
    icon: "Figma",
    skills: ["Figma to Code", "Interactive Prototypes", "Component Systems"]
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Terminal", href: "#terminal" },
  { name: "Innovation", href: "#innovation" },
  { name: "Journey", href: "#journey" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

/**
 * AI Knowledge Base & Q&A Router
 * Answers ONLY strictly verified facts from Gokul's portfolio.
 */
export const aiKnowledgeBase = [
  {
    keywords: ["who", "about", "bio", "intro", "gokul", "summary", "background"],
    answer: "Gokul M is a B.Sc Computer Science student at VETIAS College, aspiring software engineer, and full-stack developer passionate about web applications, Artificial Intelligence, and Machine Learning. He builds real-world solutions including ArogyaSathi AI, WORKLX, and Smart Helmet 2.0."
  },
  {
    keywords: ["projects", "built", "portfolio", "creations", "apps"],
    answer: "Gokul has built 3 major featured projects:\n1. ArogyaSathi AI (Smart hospital intake in 8 Indian languages with OCR & doctor summary)\n2. WORKLX (Full-stack worker hiring & service marketplace with real-time chat)\n3. Smart Helmet 2.0 (IoT two-wheeler safety system with alcohol & helmet interlock)"
  },
  {
    keywords: ["worklx", "worker", "marketplace", "hiring"],
    answer: "WORKLX is a full-stack worker hiring marketplace connecting customers with skilled technicians (electricians, plumbers, painters, carpenters). Built with React.js, Node.js, Express, MongoDB, Socket.io, and Razorpay."
  },
  {
    keywords: ["arogya", "arogyasathi", "medical", "hospital", "patient", "clinical"],
    answer: "ArogyaSathi AI is a multilingual hospital pre-consultation platform supporting 8 Indian languages (English, Tamil, Hindi, Telugu, Kannada, Malayalam, Bengali, Marathi), voice input (Web Speech API), OCR document scanning, risk indicators, and Power BI hospital analytics. Live demo at: https://arogyasathiai.netlify.app/"
  },
  {
    keywords: ["helmet", "smart helmet", "iot", "arduino", "esp32", "embedded"],
    answer: "Smart Helmet 2.0 is an IoT safety system built with ESP32, Arduino, and Embedded C/C++. It checks helmet wearing and alcohol presence before enabling the vehicle engine relay."
  },
  {
    keywords: ["skills", "technologies", "tech stack", "languages", "tools"],
    answer: "Gokul's verified technical skillset includes:\n• Languages: Python, Java, C, JavaScript\n• Frontend: HTML5, CSS3, React.js, Vite, Tailwind CSS\n• Backend: Node.js, Express.js, REST APIs\n• Database: MongoDB, Mongoose\n• AI/ML: Artificial Intelligence, Machine Learning, Prompt Engineering\n• Tools: Git, GitHub, VS Code, Figma, HackerRank"
  },
  {
    keywords: ["contact", "email", "phone", "call", "reach", "hire", "message"],
    answer: "You can reach Gokul directly via:\n• Phone: 6379964841\n• Email: gokulrm2007@gmail.com\n• LinkedIn: https://www.linkedin.com/in/gokul-m-57817635a\n• GitHub: https://github.com/gokulrm2007-cpu"
  },
  {
    keywords: ["github", "repos", "repositories", "code"],
    answer: "Gokul's GitHub profile is https://github.com/gokulrm2007-cpu where you can explore his open-source work, including the SIH ArogyaSathi AI repository."
  },
  {
    keywords: ["linkedin", "network", "profile"],
    answer: "You can connect with Gokul on LinkedIn at: https://www.linkedin.com/in/gokul-m-57817635a"
  },
  {
    keywords: ["education", "college", "degree", "university", "study", "semester"],
    answer: "Gokul is pursuing his B.Sc in Computer Science at VETIAS College with core coursework in Data Structures, OOP (Java & Python), DBMS, Operating Systems, Computer Networks, and Software Engineering."
  },
  {
    keywords: ["certifications", "learning", "workshop", "msme"],
    answer: "Gokul's verified learning & certifications include:\n• Hardware & Networking (Certification / Training)\n• Python Workshop (Two-day hands-on technical workshop)\n• Machine Learning (Ongoing practical specialization)\n• Prompt Engineering (Applied AI)\n• Full Stack Development (MERN practice)\n• MSME Course"
  },
  {
    keywords: ["hackathon", "sih", "smart india hackathon", "governance"],
    answer: "Gokul works on real-world innovation including his Smart India Hackathon (SIH 2026) project: 'National Digital Platform for Research, Policy Innovation, and Evidence-Based Land Governance'."
  },
  {
    keywords: ["resume", "cv"],
    answer: "You can preview and download Gokul's verified student resume by clicking the 'Download Resume' button in the navigation bar or Hero section."
  }
];