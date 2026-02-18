"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ExternalLink, Menu, X, 
  BookOpen, Code2, Award, Send, FileText, Cpu, 
  Globe, Database, Camera, Trophy, Users, Heart,
  ToolCase,
  Toolbox
} from 'lucide-react';

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["About", "Tech Stack", "Academics", "Projects", "Extra Curriculars", "Certifications", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-[#0B0E14]/90 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <span className="text-cyan-400 font-mono font-bold text-xl tracking-tighter">PORTFOLIO</span>
        <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
              {link}
            </a>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden bg-[#112240] border-b border-slate-800 absolute w-full px-6 py-8 flex flex-col gap-4">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-semibold border-b border-slate-700 pb-2">{link}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Typewriter Component ---
const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % texts.length), 3000);
    return () => clearInterval(timer);
  }, [texts]);

  return (
    <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-cyan-400">
      {texts[index]}
    </motion.span>
  );
};

export default function Portfolio() {
  return (
    <div className="bg-[#0B0E14] text-slate-300 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="about" className="pt-40 pb-20 container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1">
          <motion.h1 initial={{ opacity: 5 }} animate={{ opacity: 1 }} className="text-5xl md:text-7xl font-bold text-white mb-4">
            Rajdeep Podder
          </motion.h1>
          <div className="text-2xl md:text-4xl font-mono mb-6 h-12">
            <Typewriter texts={["AIML Undergrad", "Gen AI Enthusiast", "Competitive Programmer"]} />
          </div>
          <p className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
            Consistently exploring intelligent systems, machine learning algorithms and data-driven solutions.
          </p>
          <div className="flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 flex items-center gap-2">
              <FileText size={18}/> My Resume
            </button>
          </div>
        </div>
        
        <div className="relative group order-1 md:order-2">
          <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-cyan-400 rounded-3xl p-3 rotate-3 mx-10 group-hover:rotate-0 transition-all duration-500">
            <div className="w-full h-full bg-slate-800 rounded-2xl overflow-hidden relative">
              <img src="/profile.jpeg" alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-24 bg-[#0d1117]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-cyan-400 font-mono">/</span> Tech Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Languages", tools: "C/C++, Python, Java", icon: <Code2/> },
              { title: "AI/ML", tools: "Tensorflow, Scikit-learn, Numpy, Pandas, Matplotlib", icon: <Cpu/> },
              { title: "Web Dev", tools: "Next JS, Tailwind CSS, FastAPI, Django", icon: <Globe/> },
              { title: "Databases", tools: "MySQL, Postgresql", icon: <Database/> },
              { title: "Miscellaneous", tools: "Git/Github, Jupyter Notebook, VScode, Docker", icon: <Toolbox/> }

            ].map((stack, i) => (
              <div key={i} className="p-8 bg-[#112240] rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all">
                <div className="text-cyan-400 mb-4">{stack.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{stack.title}</h3>
                <p className="text-slate-400 font-mono text-sm leading-loose">{stack.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Records */}
      <section id="academic" className="py-24 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Academic Record</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { year: "2023-2027", title: "B.Tech AIML", info: "YGPA: 8.49", desc: "Techno Main Salt Lake", marksheet: "/" },
            { year: "2023", title: "Class XII (CBSE)", info: "90.8%", desc: "Aditya Academy Sr. Secondary", marksheet: "/marksheets/class%20XII.pdf" },
            { year: "2021", title: "Class X (CBSE)", info: "94.8%", desc: "Aditya Academy Sr. Secondary", marksheet: "/marksheets/class%20X.pdf" }
          ].map((edu, i) => (
            <div key={i} className="bg-[#112240] p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity"><BookOpen size={40}/></div>
              <span className="text-cyan-400 font-mono text-sm">{edu.year}</span>
              <h3 className="text-2xl font-bold text-white mt-2">{edu.title}</h3>
              <p className="text-cyan-400 font-bold my-2">{edu.info}</p>
              <p className="text-slate-400 text-sm mb-6">{edu.desc}</p>
              <a href={edu.marksheet} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-tighter border-b border-cyan-400 pb-1">View Marksheet</a>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-[#0d1117]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Learnova", desc: "AI Based Dropout Prediction System equipped with Federated learning, RAG and Differential Privacy. Built to improve the rural education, the app is complete with facial attendance system, one to one mentorship, eductaional milestone rewards and proper monitoring and tracking of a student's progress.", link: "https://github.com/raj-deep-20", image: "/projects/learnova.png" },
              { name: "OncoCare", desc: "Cancer prediction app using Scikit-learn and FastAPI.", link: "https://github.com/byteforge101/sih" },
            ].map((p, i) => (
              <div key={i} className="bg-[#112240] rounded-2xl overflow-hidden border border-slate-800 flex flex-col">
                <div className="h-48 bg-slate-900 flex items-center justify-center text-slate-700">{p.image ? <img src={p.image} alt={p.name} className="w-full h-full object-cover" /> : <Globe size={60}/>}</div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3">{p.name}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{p.desc}</p>
                  <div className="flex gap-4">
                    <a href={p.link} className="text-slate-300 hover:text-cyan-400"><Github size={20}/></a>
                    <a href="#" className="text-slate-300 hover:text-cyan-400"><ExternalLink size={20}/></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Curriculars & Certs */}
      <section id="extra" className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Extra Curriculars</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Photography", icon: <Camera/> },
                { label: "Hackathons", icon: <Trophy/> },
                { label: "Community", icon: <Users/> },
                { label: "Open Source", icon: <Heart/> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-[#112240] rounded-xl border border-slate-800">
                  <div className="text-cyan-400">{item.icon}</div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Certifications</h2>
            <div className="space-y-4">
              {["Machine Learning Specialization", "Web Development Bootcamp", "Cloud Computing Basics"].map((cert, i) => (
                <div key={i} className="p-4 bg-[#112240] border border-slate-800 rounded-xl flex justify-between items-center group">
                  <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">{cert}</span>
                  <Award size={20} className="text-cyan-400"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 border-t border-slate-800 bg-[#0B0E14] text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-slate-400 mb-10">Available for Summer 2026 Internships</p>
          <div className="flex justify-center gap-8 mb-12">
            <a href="https://github.com/raj-deep-20" className="text-slate-500 hover:text-cyan-400 hover:scale-110 transition-all"><Github size={32}/></a>
            <a href="https://linkedin.com/in/rajdeep-podder-4bb579210" className="text-slate-500 hover:text-cyan-400 hover:scale-110 transition-all"><Linkedin size={32}/></a>
            <a href="mailto:iamrajdeep2005@gmail.com" className="text-slate-500 hover:text-cyan-400 hover:scale-110 transition-all"><Mail size={32}/></a>
          </div>
          <p className="text-xs font-mono text-slate-600 uppercase tracking-widest">
            Built with Next.js & Framer Motion by Rajdeep Podder
          </p>
        </div>
      </footer>
    </div>
  );
}