import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import ProfilePortrait from './ProfilePortrait';
import { soundManager } from '../utils/audio';

export default function HeroSection({ photoUrl, onOpenUploadModal }) {
  const smokeCanvasRef = useRef(null);

  // Atmospheric Canvas Smoke Simulation
  useEffect(() => {
    const canvas = smokeCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Smoke particles
    const smokes = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 80,
      radius: Math.random() * 80 + 40,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.5 + 0.3),
      alpha: Math.random() * 0.04 + 0.02,
      hue: Math.random() > 0.6 ? 350 : 40,
    }));

    const renderSmoke = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      smokes.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.radius += 0.12;

        if (p.y + p.radius < 0) {
          p.y = canvas.height + p.radius;
          p.x = Math.random() * canvas.width;
          p.radius = Math.random() * 70 + 35;
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        if (p.hue === 350) {
          gradient.addColorStop(0, `rgba(164, 22, 42, ${p.alpha * 1.5})`);
          gradient.addColorStop(0.5, `rgba(92, 7, 27, ${p.alpha * 0.8})`);
        } else {
          gradient.addColorStop(0, `rgba(198, 161, 91, ${p.alpha * 1.2})`);
          gradient.addColorStop(0.5, `rgba(141, 107, 44, ${p.alpha * 0.6})`);
        }
        gradient.addColorStop(1, 'rgba(8, 8, 8, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(renderSmoke);
    };

    renderSmoke();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollTo = (id) => {
    soundManager.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Atmospheric Smoke Canvas */}
      <canvas
        ref={smokeCanvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
      />

      {/* Volumetric Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#5C071B]/35 via-[#A4162A]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 w-[550px] h-[550px] bg-gradient-to-tl from-[#C6A15B]/25 via-[#8D6B2C]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* Main Grid Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Cinematic Typography & Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4"
          >
            <div className="px-3.5 py-1.5 rounded-full bg-[#17171C]/90 border border-[#C6A15B]/40 backdrop-blur-md flex items-center gap-2 shadow-[0_0_15px_rgba(198,161,91,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#A4162A] shadow-[0_0_8px_#A4162A]" />
              <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#F0CF85] uppercase">
                HELLO, I'M
              </span>
            </div>
          </motion.div>

          {/* Main Name Heading with Solid Fallback + Metallic Sweep */}
          <motion.div
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4"
          >
            <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase">
              <span className="gold-gradient-text block drop-shadow-2xl text-[#F0CF85]">
                DEEPAK
              </span>
              <span className="text-[#FFFFFF] block tracking-wider drop-shadow-md">
                A M
              </span>
            </h1>
          </motion.div>

          {/* Subtitles / Badges */}
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
          >
            <span className="px-3.5 py-1.5 rounded-lg bg-[#5C071B]/40 border border-[#A4162A]/60 font-cinzel text-xs sm:text-sm font-bold tracking-wider text-[#FFB4C0] uppercase shadow-sm">
              MERN STACK DEVELOPER
            </span>
            <span className="text-[#C6A15B] hidden sm:inline">&bull;</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#141418] border border-[#C6A15B]/40 font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-[#F0CF85] uppercase">
              BCA STUDENT
            </span>
            <span className="text-[#C6A15B] hidden sm:inline">&bull;</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#141418] border border-[#333] font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-[#E5E5E5] uppercase">
              CREATIVE DEVELOPER
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-lg sm:text-xl md:text-2xl text-[#E5E5E5] max-w-xl mx-auto lg:mx-0 font-normal italic tracking-wide mb-8 border-l-0 lg:border-l-2 border-[#A4162A] lg:pl-4"
          >
            &ldquo;Turning Ideas Into Interactive Digital Experiences.&rdquo;
          </motion.p>

          {/* Interactive Code Snippet Card */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="mb-8 hidden sm:block max-w-lg mx-auto lg:mx-0 p-3.5 rounded-xl bg-[#0D0D10]/90 border border-[#2B2B33] font-mono-code text-xs text-[#CCCCCC] shadow-inner"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1A1A20]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A4162A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
              </div>
              <span className="text-[10px] text-[#A3A3A3]">architect.config.js</span>
            </div>
            <p>
              <span className="text-[#C6A15B]">const</span> developer = &#123;
            </p>
            <p className="pl-4">
              name: <span className="text-[#86efac]">'Deepak A M'</span>,
            </p>
            <p className="pl-4">
              focus: <span className="text-[#86efac]">'Scalable Full-Stack & 3D Interactive Systems'</span>,
            </p>
            <p className="pl-4">
              status: <span className="text-[#FF8596]">'Ready to engineer excellence'</span>
            </p>
            <p>&#125;;</p>
          </motion.div>

          {/* Action CTAs: Two Cinematic Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            {/* Button 1: EXPLORE MY WORK */}
            <button
              onClick={() => scrollTo('projects')}
              onMouseEnter={() => soundManager.playHover()}
              className="w-full sm:w-auto relative group px-8 py-3.5 rounded-xl font-cinzel text-xs font-bold tracking-[0.2em] text-[#080808] bg-gradient-to-r from-[#FFF0D0] via-[#C6A15B] to-[#8D6B2C] hover:brightness-110 shadow-[0_0_25px_rgba(198,161,91,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <span>EXPLORE MY WORK</span>
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Button 2: CONTACT ME */}
            <button
              onClick={() => scrollTo('contact')}
              onMouseEnter={() => soundManager.playHover()}
              className="w-full sm:w-auto relative group px-8 py-3.5 rounded-xl font-cinzel text-xs font-bold tracking-[0.2em] text-[#FFFFFF] bg-[#141418] hover:bg-[#1E1E24] border border-[#A4162A]/60 hover:border-[#A4162A] shadow-[0_0_20px_rgba(164,22,42,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <Sparkles size={14} className="text-[#A4162A] group-hover:scale-125 transition-transform" />
              <span>CONTACT ME</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Layered Cinematic Portrait Centerpiece */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div className="w-full max-w-md flex justify-center">
            <ProfilePortrait
              photoUrl={photoUrl}
              onOpenUploadModal={onOpenUploadModal}
            />
          </div>
        </div>
      </div>

      {/* Scroll-Down Cinematic Indicator */}
      <div
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="font-mono-code text-[10px] tracking-[0.3em] text-[#A3A3A3] group-hover:text-[#C6A15B] transition-colors uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 rounded-full border border-[#C6A15B]/40 flex items-start justify-center p-1 group-hover:border-[#C6A15B] transition-colors shadow-[0_0_10px_rgba(198,161,91,0.2)]">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-gradient-to-b from-[#A4162A] to-[#C6A15B]"
          />
        </div>
      </div>
    </section>
  );
}
