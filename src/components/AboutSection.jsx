import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Layers,
  Cpu,
  Sparkles,
  Compass,
  CheckCircle2,
  Terminal,
  Quote
} from 'lucide-react';
import { soundManager } from '../utils/audio';

const INTERESTS = [
  {
    icon: Layers,
    title: 'Full-Stack Web Development',
    desc: 'Engineering robust end-to-end architectures with the MERN stack (MongoDB, Express.js, React.js, Node.js).',
  },
  {
    icon: Cpu,
    title: 'Software Development',
    desc: 'Building reliable, modular, and maintainable software systems with object-oriented paradigms in C++, Java, and Python.',
  },
  {
    icon: Terminal,
    title: 'Programming & Problem-Solving',
    desc: 'Deep algorithmic problem-solving with rigorous analytical thinking honed across C, C++, and competitive coding concepts.',
  },
  {
    icon: Sparkles,
    title: 'Creative Website Development',
    desc: 'Crafting immersive, cinematic web experiences utilizing 3D physics, parallax mechanics, and refined visual aesthetics.',
  },
  {
    icon: Compass,
    title: 'Learning New Technologies',
    desc: 'Relentlessly staying at the forefront of modern web standards, emerging frameworks, and cloud architectures.',
  },
];

export default function AboutSection({ photoUrl, onOpenUploadModal }) {
  return (
    <section
      id="about"
      className="relative min-h-screen py-28 px-4 md:px-8 bg-[#080808]/90 overflow-hidden"
    >
      {/* Background Volumetric Highlights */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#A4162A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141418] border border-[#C6A15B]/30 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span className="font-mono-code text-[11px] text-[#C6A15B] tracking-[0.25em] uppercase">
              BIOGRAPHY & PHILOSOPHY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase"
          >
            <span className="gold-gradient-text">THE PERSON BEHIND </span>
            <span className="text-[#FFFFFF]">THE CODE</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-4"
          />
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3D Editorial Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#C6A15B]/20 pointer-events-none" />
              <div className="absolute -inset-1 rounded-xl border border-[#A4162A]/30 pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden mafia-glass-card p-3 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-black">
                  <img
                    src={photoUrl}
                    alt="Deepak A M"
                    className="w-full h-full object-cover object-top"
                    style={{
                      filter: 'contrast(1.06) brightness(0.95)',
                    }}
                  />
                  {/* Cinematic Red Rim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A4162A]/30 via-transparent to-[#C6A15B]/20 pointer-events-none mix-blend-screen" />
                </div>

                {/* Editorial Details Badge */}
                <div className="pt-4 pb-2 px-2">
                  <div className="flex items-center justify-between border-b border-[#222228] pb-3 mb-3">
                    <div>
                      <h3 className="font-cinzel text-base font-bold text-[#FFFFFF]">
                        Deepak A M
                      </h3>
                      <p className="font-mono-code text-[11px] text-[#A3A3A3]">
                        BCA Candidate &bull; Full-Stack Eng.
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#A4162A]/20 border border-[#A4162A]/40 text-[#FF8596] font-mono-code text-[10px] uppercase tracking-wider">
                      MERN
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="p-2 rounded bg-[#0A0A0D] border border-[#1A1A22]">
                      <span className="font-cinzel text-lg font-bold text-[#F0CF85] block">
                        BCA
                      </span>
                      <span className="font-mono-code text-[10px] text-[#737373] uppercase tracking-wider block">
                        Academic Degree
                      </span>
                    </div>
                    <div className="p-2 rounded bg-[#0A0A0D] border border-[#1A1A22]">
                      <span className="font-cinzel text-lg font-bold text-[#F0CF85] block">
                        6+
                      </span>
                      <span className="font-mono-code text-[10px] text-[#737373] uppercase tracking-wider block">
                        Languages Mastered
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Interests & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FFFFFF] mb-4">
                Architecting Modern Web Experiences with Discipline & Technical Rigor.
              </h3>

              <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed mb-4">
                I am <span className="text-[#FFFFFF] font-semibold">Deepak A M</span>, a driven{' '}
                <span className="text-[#F0CF85] font-semibold">MERN Stack Developer</span> currently pursuing my{' '}
                <span className="text-[#FFFFFF] font-semibold">Bachelor of Computer Applications (BCA)</span>. My journey combines deep foundational computer science with cutting-edge web architecture.
              </p>

              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                From low-level systems programming in C and C++ to modern object-oriented software engineering in Java and Python, I bring strong problem-solving fundamentals into full-stack development with JavaScript, React, Node.js, Express, and MongoDB.
              </p>
            </motion.div>

            {/* Core Interests Showcase */}
            <div className="mt-4 mb-8">
              <h4 className="font-cinzel text-sm font-bold text-[#C6A15B] tracking-widest uppercase mb-4">
                Key Areas of Passion & Focus
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {INTERESTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      onMouseEnter={() => soundManager.playHover()}
                      className="p-3.5 rounded-xl mafia-glass border border-[#C6A15B]/15 hover:border-[#C6A15B]/40 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className="p-2 rounded-lg bg-[#17171C] border border-[#2B2B33] text-[#C6A15B] group-hover:border-[#A4162A] group-hover:text-[#FF6B81] transition-colors">
                          <Icon size={16} />
                        </div>
                        <h5 className="font-cinzel text-xs sm:text-sm font-bold text-[#E5E5E5] group-hover:text-[#FFFFFF] transition-colors">
                          {item.title}
                        </h5>
                      </div>
                      <p className="text-xs text-[#888890] leading-normal pl-11">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Cinematic Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl bg-gradient-to-r from-[#5C071B]/20 via-[#141418] to-[#141418] border-l-4 border-[#C6A15B] flex items-start gap-3"
            >
              <Quote className="text-[#C6A15B] shrink-0 mt-0.5" size={20} />
              <p className="font-serif italic text-sm text-[#E5E5E5]/90">
                &ldquo;True craftsmanship in software engineering lies in the harmony between uncompromising logic, scalable system design, and unforgettable visual experiences.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
