import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Sparkles,
  Lock,
  Layers,
  GraduationCap,
  Cake,
  X,
  UserCheck,
  Search,
  BookOpen
} from 'lucide-react';
import { Github } from './SocialIcons';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

export default function ProjectsSection() {
  const [activeDemo, setActiveDemo] = useState(null); // 'sms', 'birthday', null
  const [birthdayCelebrated, setBirthdayCelebrated] = useState(false);

  // Trigger interactive birthday celebration
  const triggerBirthdayCelebration = () => {
    soundManager.playSuccessChime();
    setBirthdayCelebrated(true);
    setActiveDemo('birthday');

    // Confetti burst
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C6A15B', '#A4162A', '#F0CF85', '#FFF'],
    });
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-28 px-4 md:px-8 bg-[#080808]/95 overflow-hidden"
    >
      {/* Background Volumetric Highlights */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#5C071B]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#C6A15B]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141418] border border-[#C6A15B]/30 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span className="font-mono-code text-[11px] text-[#F0CF85] tracking-[0.25em] uppercase">
              FEATURED WORKS
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
            <span className="text-[#FFFFFF]">CREATIONS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#A3A3A3] max-w-xl mx-auto mt-3"
          >
            Cinematic, full-stack software architectures engineered with high efficiency, robust logic, and interactive user experiences.
          </motion.p>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-4" />
        </div>

        {/* 3D Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PROJECT 01: STUDENT MANAGEMENT SYSTEM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onMouseEnter={() => soundManager.playHover()}
            className="group relative rounded-2xl mafia-glass-card border border-[#C6A15B]/20 hover:border-[#C6A15B]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:-translate-y-2"
          >
            {/* Top Preview Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A0D] border-b border-[#222228]">
              {/* Stylized Visual Mockup for SMS */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#121217] via-[#0E0E12] to-[#1A0A0F] p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#A4162A]" />
                    <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                    <span className="w-2 h-2 rounded-full bg-[#333]" />
                  </div>
                  <span className="font-mono-code text-[10px] text-[#A3A3A3] bg-black/40 px-2 py-0.5 rounded border border-[#222]">
                    v1.0.0
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center my-auto py-2">
                  <div className="w-14 h-14 rounded-2xl bg-[#17171C] border border-[#C6A15B]/40 flex items-center justify-center text-[#F0CF85] mb-2 shadow-[0_0_20px_rgba(198,161,91,0.2)]">
                    <GraduationCap size={28} />
                  </div>
                  <span className="font-cinzel text-xs font-bold text-[#E5E5E5] tracking-wider">
                    ACADEMIC SYSTEM PORTAL
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono-code text-[#737373]">
                  <span>RECORDS: 1,240+ ACTIVE</span>
                  <span className="text-[#86efac]">DB CONNECTED</span>
                </div>
              </div>

              {/* Red & Gold Rim Glows */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[11px] text-[#C6A15B] uppercase tracking-widest">
                    PROJECT 01
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#A4162A]/20 text-[#FF8596] font-mono-code text-[10px] uppercase">
                    MERN STACK
                  </span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-[#FFFFFF] group-hover:text-[#F0CF85] transition-colors mb-3">
                  Student Management System
                </h3>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-6">
                  A student management system designed to manage student-related information and academic records efficiently. Engineered with clean database schemas and seamless administrative controls.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#141418] border border-[#25252E] font-mono-code text-[10px] text-[#E5E5E5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1C1C24]">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveDemo('sms');
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-cinzel text-xs font-bold text-[#080808] bg-gradient-to-r from-[#F0CF85] via-[#C6A15B] to-[#8D6B2C] hover:brightness-110 transition-all shadow-md"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </button>

                <a
                  href="https://github.com/deepakam"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-cinzel text-xs font-bold text-[#E5E5E5] bg-[#141418] hover:bg-[#1E1E24] border border-[#333] transition-all"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 02: BIRTHDAY CELEBRATION WEBSITE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onMouseEnter={() => soundManager.playHover()}
            className="group relative rounded-2xl mafia-glass-card border border-[#C6A15B]/20 hover:border-[#A4162A]/60 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:-translate-y-2"
          >
            {/* Top Preview Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A0D] border-b border-[#222228]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E0911] via-[#12050A] to-[#0A0A0E] p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#A4162A]" />
                    <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                    <span className="w-2 h-2 rounded-full bg-[#333]" />
                  </div>
                  <span className="font-mono-code text-[10px] text-[#FF8596] bg-black/40 px-2 py-0.5 rounded border border-[#5C071B]/50">
                    INTERACTIVE UI
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center my-auto py-2">
                  <div className="w-14 h-14 rounded-2xl bg-[#1C0D12] border border-[#A4162A]/50 flex items-center justify-center text-[#FF6B81] mb-2 shadow-[0_0_20px_rgba(164,22,42,0.3)]">
                    <Cake size={28} />
                  </div>
                  <span className="font-cinzel text-xs font-bold text-[#E5E5E5] tracking-wider">
                    PERSONALIZED CELEBRATION
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono-code text-[#737373]">
                  <span>EXPERIENCE: DYNAMIC</span>
                  <span className="text-[#C6A15B]">SOUND & CONFETTI</span>
                </div>
              </div>

              {/* Bottom Gradient Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[11px] text-[#A4162A] uppercase tracking-widest font-semibold">
                    PROJECT 02
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#C6A15B]/20 text-[#F0CF85] font-mono-code text-[10px] uppercase">
                    CREATIVE WEB
                  </span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-[#FFFFFF] group-hover:text-[#FF8596] transition-colors mb-3">
                  Birthday Celebration Website
                </h3>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-6">
                  A creative and personalized birthday celebration website developed for my friend, featuring an engaging web experience with dynamic animations, personalized memories, and interactive celebrations.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React.js', 'Framer Motion', 'Web Audio', 'Canvas Confetti', 'CSS3'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#141418] border border-[#25252E] font-mono-code text-[10px] text-[#E5E5E5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1C1C24]">
                <button
                  onClick={triggerBirthdayCelebration}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-cinzel text-xs font-bold text-[#FFFFFF] bg-gradient-to-r from-[#5C071B] to-[#A4162A] hover:brightness-110 transition-all shadow-md"
                >
                  <Sparkles size={14} className="text-[#F0CF85]" />
                  <span>Launch Demo</span>
                </button>

                <a
                  href="https://github.com/deepakam"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-cinzel text-xs font-bold text-[#E5E5E5] bg-[#141418] hover:bg-[#1E1E24] border border-[#333] transition-all"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 03: COMING SOON (PREMIUM PLACEHOLDER) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onMouseEnter={() => soundManager.playHover()}
            className="group relative rounded-2xl mafia-glass-card border border-[#C6A15B]/15 hover:border-[#C6A15B]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:-translate-y-2 opacity-95"
          >
            {/* Top Preview Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A0D] border-b border-[#222228]">
              <div className="absolute inset-0 bg-radial from-[#1A1A22] via-[#0E0E12] to-[#080808] p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#333]" />
                    <span className="w-2 h-2 rounded-full bg-[#333]" />
                    <span className="w-2 h-2 rounded-full bg-[#333]" />
                  </div>
                  <span className="font-mono-code text-[10px] text-[#C6A15B] bg-black/60 px-2.5 py-0.5 rounded border border-[#C6A15B]/40 uppercase tracking-widest">
                    CLASSIFIED
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center my-auto py-2">
                  <div className="w-14 h-14 rounded-2xl bg-[#141418] border border-[#33333E] flex items-center justify-center text-[#C6A15B] mb-2 group-hover:scale-110 transition-transform">
                    <Lock size={26} />
                  </div>
                  <span className="font-cinzel text-xs font-bold text-[#A3A3A3] tracking-widest">
                    IN DEVELOPMENT
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono-code text-[#555]">
                  <span>CLEARANCE: LEVEL 0</span>
                  <span className="text-[#C6A15B] animate-pulse">UNDER ACTIVE BUILD</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[11px] text-[#737373] uppercase tracking-widest">
                    PROJECT 03
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#17171C] text-[#A3A3A3] font-mono-code text-[10px] uppercase">
                    UPCOMING
                  </span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-[#E5E5E5] group-hover:text-[#FFFFFF] transition-colors mb-3">
                  Coming Soon
                </h3>

                <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-6">
                  A premium placeholder for my third project. I will provide its actual details later. Currently in conceptual design and system architecture phase.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Full-Stack', 'System Design', 'TBA'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#101014] border border-[#202028] font-mono-code text-[10px] text-[#737373]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons (Disabled / Coming Soon state) */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1C1C24]">
                <button
                  disabled
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-cinzel text-xs font-bold text-[#737373] bg-[#141418] border border-[#25252E] cursor-not-allowed opacity-70"
                >
                  <Lock size={13} />
                  <span>Locked</span>
                </button>

                <button
                  disabled
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-cinzel text-xs font-bold text-[#737373] bg-[#141418] border border-[#25252E] cursor-not-allowed opacity-70"
                >
                  <Github size={13} />
                  <span>Repository</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Modal: Project 01 Live Demo (Student Management System) */}
      <AnimatePresence>
        {activeDemo === 'sms' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="relative w-full max-w-2xl mafia-glass-card rounded-2xl p-6 border border-[#C6A15B]/50 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => {
                  soundManager.playClick();
                  setActiveDemo(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-full text-[#A3A3A3] hover:text-[#FFFFFF] hover:bg-[#1F1F24]"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#141418] border border-[#C6A15B]/40 text-[#F0CF85]">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="font-mono-code text-[11px] text-[#C6A15B] uppercase tracking-wider">
                    Interactive Live Demo
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-[#FFFFFF]">
                    Student Management System
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#A3A3A3] mb-5">
                Engineered with React, Node.js, Express, and MongoDB. Below is a live interactive simulation of the student registry dashboard.
              </p>

              {/* Mock Dashboard UI */}
              <div className="rounded-xl bg-[#0D0D12] border border-[#222228] p-4">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1A1A22]">
                  <div className="flex items-center gap-2">
                    <Search size={14} className="text-[#A3A3A3]" />
                    <span className="text-xs font-mono-code text-[#A3A3A3]">
                      Active Registry Database
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-code text-[#86efac]">
                    &bull; System Online
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { id: 'STU-1021', name: 'Aarav Sharma', course: 'BCA (Sem IV)', gpa: '9.4', status: 'Enrolled' },
                    { id: 'STU-1022', name: 'Ananya Verma', course: 'BCA (Sem IV)', gpa: '9.1', status: 'Enrolled' },
                    { id: 'STU-1023', name: 'Rohan Mehta', course: 'BCA (Sem II)', gpa: '8.8', status: 'Enrolled' },
                  ].map((stu) => (
                    <div
                      key={stu.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-[#14141A] border border-[#22222E] text-xs"
                    >
                      <div>
                        <p className="font-semibold text-[#FFFFFF]">{stu.name}</p>
                        <p className="text-[11px] text-[#737373] font-mono-code">
                          {stu.id} &bull; {stu.course}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono-code text-[#C6A15B] font-bold">
                          GPA: {stu.gpa}
                        </span>
                        <span className="block text-[10px] text-[#86efac]">
                          {stu.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveDemo(null);
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-cinzel font-bold text-[#080808] bg-[#C6A15B] hover:brightness-110"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Interactive Modal: Project 02 Birthday Celebration Experience */}
        {activeDemo === 'birthday' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="relative w-full max-w-lg mafia-glass-card rounded-2xl p-6 md:p-8 border border-[#A4162A]/60 shadow-[0_0_50px_rgba(164,22,42,0.4)] text-center"
            >
              <button
                onClick={() => {
                  soundManager.playClick();
                  setActiveDemo(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-full text-[#A3A3A3] hover:text-[#FFFFFF] hover:bg-[#1F1F24]"
              >
                <X size={20} />
              </button>

              <div className="w-16 h-16 rounded-full bg-[#5C071B]/40 border border-[#A4162A] flex items-center justify-center text-[#FF6B81] mx-auto mb-4 shadow-[0_0_25px_rgba(164,22,42,0.5)]">
                <Cake size={32} />
              </div>

              <span className="font-mono-code text-xs text-[#FF8596] tracking-widest uppercase">
                Interactive Showcase
              </span>

              <h3 className="font-cinzel text-2xl font-bold text-[#FFFFFF] mt-1 mb-3">
                Birthday Celebration Web App
              </h3>

              <p className="text-sm text-[#E5E5E5]/90 mb-6 leading-relaxed">
                A custom-built interactive celebration experience developed for a close friend. Features smooth sound design, dynamic memory reels, and festive particle simulations.
              </p>

              <div className="p-4 rounded-xl bg-[#141418] border border-[#2B2B35] mb-6">
                <p className="font-serif italic text-sm text-[#F0CF85]">
                  &ldquo;Making memorable moments everlasting through creative web code and thoughtful interactivity.&rdquo;
                </p>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    confetti({
                      particleCount: 80,
                      spread: 60,
                      origin: { y: 0.6 },
                    });
                    soundManager.playSuccessChime();
                  }}
                  className="px-5 py-2.5 rounded-xl font-cinzel text-xs font-bold text-[#FFFFFF] bg-gradient-to-r from-[#5C071B] to-[#A4162A] hover:brightness-110 flex items-center gap-2"
                >
                  <Sparkles size={14} className="text-[#F0CF85]" />
                  <span>Burst Confetti Again</span>
                </button>

                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveDemo(null);
                  }}
                  className="px-5 py-2.5 rounded-xl font-cinzel text-xs font-bold text-[#A3A3A3] bg-[#141418] border border-[#333] hover:text-[#FFF]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
