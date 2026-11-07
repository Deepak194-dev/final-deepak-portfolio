import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Globe,
  Database,
  Server,
  FileCode,
  Terminal,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { soundManager } from '../utils/audio';

// Skill Definitions strictly matching user's provided list
const SKILLS_DATA = [
  // Programming Languages
  {
    name: 'C',
    category: 'languages',
    tag: 'Systems & Memory',
    desc: 'Procedural programming, pointers, low-level memory allocation, and hardware-level algorithmic fundamentals.',
    icon: Terminal,
    color: '#00599C',
    accent: '#C6A15B',
  },
  {
    name: 'C++',
    category: 'languages',
    tag: 'Object-Oriented & STL',
    desc: 'High-performance computing, OOP principles, templates, Standard Template Library (STL), and data structures.',
    icon: Cpu,
    color: '#00599C',
    accent: '#C6A15B',
  },
  {
    name: 'Java',
    category: 'languages',
    tag: 'Enterprise OOP',
    desc: 'Robust object-oriented architecture, JVM execution model, multithreading basics, and modular application development.',
    icon: Code,
    color: '#EA2D2E',
    accent: '#A4162A',
  },
  {
    name: 'Python',
    category: 'languages',
    tag: 'Scripting & Automation',
    desc: 'Clean rapid prototyping, data manipulation, algorithm design, script automation, and backend computational logic.',
    icon: FileCode,
    color: '#3776AB',
    accent: '#C6A15B',
  },
  {
    name: 'JavaScript',
    category: 'languages',
    tag: 'Modern ES6+ Engine',
    desc: 'Asynchronous event loops, closures, promises, functional patterns, and universal client/server runtime execution.',
    icon: Code,
    color: '#F7DF1E',
    accent: '#F0CF85',
  },

  // Web Development
  {
    name: 'HTML',
    category: 'web',
    tag: 'Semantic Architecture',
    desc: 'Semantic document structure, accessibility standards (a11y), SEO optimization, and DOM structuring.',
    icon: Globe,
    color: '#E34F26',
    accent: '#A4162A',
  },
  {
    name: 'CSS',
    category: 'web',
    tag: 'Styling & Modern UI',
    desc: 'Responsive grid & flexbox design, modern CSS3 animations, glassmorphism, custom properties, and Tailwind styling.',
    icon: Layers,
    color: '#1572B6',
    accent: '#C6A15B',
  },
  {
    name: 'React.js',
    category: 'web',
    tag: 'Component-Based Frontend',
    desc: 'Declarative UI design, custom hooks, virtual DOM reconciliation, state management, and modern interactive interfaces.',
    icon: Sparkles,
    color: '#61DAFB',
    accent: '#61DAFB',
  },
  {
    name: 'Node.js',
    category: 'web',
    tag: 'Backend Runtime',
    desc: 'High-throughput asynchronous I/O runtime, npm ecosystem, modular server logic, and stream-based architecture.',
    icon: Server,
    color: '#339933',
    accent: '#86efac',
  },
  {
    name: 'Express.js',
    category: 'web',
    tag: 'RESTful API Framework',
    desc: 'Middleware pipelines, routing, authentication mechanisms, error-handling middleware, and REST API engineering.',
    icon: Server,
    color: '#FFFFFF',
    accent: '#C6A15B',
  },
  {
    name: 'MongoDB',
    category: 'web',
    tag: 'NoSQL Database',
    desc: 'Document-oriented database modeling, JSON/BSON schemas, Mongoose ODM, aggregation pipelines, and indexing.',
    icon: Database,
    color: '#47A248',
    accent: '#47A248',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Programming Languages' },
  { id: 'web', label: 'Web & MERN Stack' },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-28 px-4 md:px-8 bg-[#080808] overflow-hidden"
    >
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#5C071B]/20 via-transparent to-[#C6A15B]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141418] border border-[#C6A15B]/30 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A4162A]" />
            <span className="font-mono-code text-[11px] text-[#F0CF85] tracking-[0.25em] uppercase">
              COMPETENCIES & STACK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase"
          >
            <span className="gold-gradient-text">MY TECHNICAL </span>
            <span className="text-[#FFFFFF]">ARSENAL</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#A3A3A3] max-w-2xl mx-auto mt-3"
          >
            Precision-engineered tools across systems programming, modern languages, and the complete MERN development stack.
          </motion.p>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundManager.playClick();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-5 py-2 rounded-xl font-cinzel text-xs font-bold tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#5C071B] to-[#A4162A] text-white border border-[#A4162A] shadow-[0_0_15px_rgba(164,22,42,0.4)]'
                    : 'bg-[#121216] text-[#A3A3A3] border border-[#222228] hover:border-[#C6A15B]/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3D Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => soundManager.playHover()}
                className="group relative rounded-2xl mafia-glass-card p-6 border border-[#C6A15B]/15 hover:border-[#C6A15B]/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Metallic Gold Corner Flairs */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#C6A15B]/40 group-hover:border-[#C6A15B] transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#C6A15B]/40 group-hover:border-[#C6A15B] transition-colors" />

                {/* Card Top Row: Icon & Tag */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#141418] border border-[#25252D] group-hover:border-[#C6A15B]/60 flex items-center justify-center text-[#C6A15B] group-hover:text-[#F0CF85] transition-all duration-300 shadow-md group-hover:shadow-[0_0_15px_rgba(198,161,91,0.25)]">
                    <Icon size={24} />
                  </div>

                  <span className="px-2.5 py-1 rounded-md bg-[#0F0F14] border border-[#25252E] font-mono-code text-[10px] text-[#A3A3A3] group-hover:text-[#F0CF85] transition-colors tracking-wider uppercase">
                    {skill.tag}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="font-cinzel text-xl font-bold text-[#FFFFFF] group-hover:text-[#F0CF85] transition-colors mb-2">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                <p className="text-xs text-[#8A8A93] leading-relaxed">
                  {skill.desc}
                </p>

                {/* Bottom Accent Glow Line */}
                <div className="mt-5 pt-3 border-t border-[#1C1C24] flex items-center justify-between">
                  <span className="font-mono-code text-[10px] text-[#555560] uppercase tracking-widest">
                    {skill.category === 'languages' ? 'Core Language' : 'Web Architecture'}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#A4162A]/60 group-hover:bg-[#C6A15B] group-hover:shadow-[0_0_8px_#C6A15B] transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
