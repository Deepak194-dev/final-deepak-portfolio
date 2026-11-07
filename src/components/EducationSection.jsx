import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code2, Server, Terminal, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

const MILESTONES = [
  {
    phase: 'Milestone 01',
    title: 'Computer Science Fundamentals & Procedural Logic',
    focus: 'C Programming & Low-Level Computing',
    desc: 'Deep exploration into computing foundations, pointers, procedural flow, memory management, and computational logic using C.',
    icon: Terminal,
    accent: '#C6A15B',
  },
  {
    phase: 'Milestone 02',
    title: 'Object-Oriented Software Engineering & Data Structures',
    focus: 'C++, Java & Python Paradigms',
    desc: 'Mastering object-oriented principles, modular class hierarchies, abstract data types, algorithms, and cross-paradigm programming in C++, Java, and Python.',
    icon: Code2,
    accent: '#A4162A',
  },
  {
    phase: 'Milestone 03',
    title: 'Modern Web Architectures & Component Systems',
    focus: 'Semantic HTML, Modern CSS & React.js',
    desc: 'Building responsive, accessible interfaces, state orchestration, custom hooks, and declarative user experiences with modern JavaScript and React.',
    icon: Sparkles,
    accent: '#F0CF85',
  },
  {
    phase: 'Milestone 04',
    title: 'Full-Stack MERN Specialization & Scalable APIs',
    focus: 'Node.js, Express.js & MongoDB',
    desc: 'Designing resilient RESTful backend services, database schema design, asynchronous event handling, and seamless end-to-end full-stack integration.',
    icon: Server,
    accent: '#C6A15B',
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative min-h-screen py-28 px-4 md:px-8 bg-[#080808] overflow-hidden"
    >
      {/* Background Volumetric Highlights */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#5C071B]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141418] border border-[#C6A15B]/30 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A4162A]" />
            <span className="font-mono-code text-[11px] text-[#F0CF85] tracking-[0.25em] uppercase">
              ACADEMIC FOUNDATION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase"
          >
            <span className="gold-gradient-text">MY </span>
            <span className="text-[#FFFFFF]">JOURNEY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#A3A3A3] max-w-xl mx-auto mt-3"
          >
            Structured academic pursuit in Computer Applications coupled with disciplined self-directed engineering mastery.
          </motion.p>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-4" />
        </div>

        {/* Central Degree Badge Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16 p-6 md:p-8 rounded-2xl mafia-glass-card border border-[#C6A15B]/40 text-center relative shadow-[0_0_40px_rgba(198,161,91,0.15)]"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#17171C] border border-[#C6A15B]/50 flex items-center justify-center text-[#F0CF85] mx-auto mb-4 shadow-[0_0_20px_rgba(198,161,91,0.3)]">
            <GraduationCap size={32} />
          </div>

          <span className="font-mono-code text-xs text-[#C6A15B] tracking-widest uppercase block mb-1">
            Degree Program
          </span>

          <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] mb-3">
            Bachelor of Computer Applications (BCA)
          </h3>

          <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed max-w-lg mx-auto">
            Rigorous undergraduate degree program focused on core computer science foundations, software development lifecycles, database management systems, and modern web applications.
          </p>
        </motion.div>

        {/* Cinematic Timeline Container */}
        <div className="relative">
          {/* Central Timeline Spine Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#A4162A] via-[#C6A15B] to-[#5C071B]/30" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {MILESTONES.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div
                  key={item.phase}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onMouseEnter={() => soundManager.playHover()}
                    className="w-full md:w-[45%] rounded-2xl mafia-glass-card p-6 border border-[#C6A15B]/20 hover:border-[#C6A15B]/50 transition-all shadow-xl group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono-code text-[11px] text-[#C6A15B] uppercase tracking-wider font-semibold">
                        {item.phase}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-[#101014] border border-[#22222A] font-mono-code text-[10px] text-[#A3A3A3]">
                        {item.focus}
                      </span>
                    </div>

                    <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#FFFFFF] group-hover:text-[#F0CF85] transition-colors mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#8E8E98] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>

                  {/* Central Node Indicator */}
                  <div className="my-4 md:my-0 md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#121217] border-2 border-[#C6A15B] flex items-center justify-center text-[#F0CF85] shadow-[0_0_15px_rgba(198,161,91,0.4)] z-20">
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Empty Spacer on opposite side */}
                  <div className="hidden md:block w-full md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
