import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { Github, Linkedin, Instagram } from './SocialIcons';
import { soundManager } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-[#1F1F26] pt-16 pb-12 px-4 md:px-8 text-[#A3A3A3] overflow-hidden">
      {/* Subtle top gold accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand Monogram */}
        <div className="flex items-center gap-3.5 text-center md:text-left">
          <div className="w-10 h-10 rounded-xl bg-[#121217] border border-[#C6A15B]/50 flex items-center justify-center rotate-45 shadow-[0_0_15px_rgba(198,161,91,0.2)]">
            <span className="-rotate-45 font-cinzel text-xs font-black gold-gradient-text">
              DAM
            </span>
          </div>
          <div>
            <span className="font-cinzel text-sm font-bold text-[#FFFFFF] tracking-wider block">
              DEEPAK A M
            </span>
            <span className="font-mono-code text-[11px] text-[#737373]">
              MERN Stack Developer &bull; BCA
            </span>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/deepakam', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/deepakam', label: 'LinkedIn' },
            { icon: Instagram, href: 'https://instagram.com/deepak.am_', label: 'Instagram' },
            { icon: Mail, href: 'mailto:deepakam.dev@gmail.com', label: 'Email' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="w-9 h-9 rounded-full bg-[#121217] border border-[#25252E] hover:border-[#C6A15B] flex items-center justify-center text-[#A3A3A3] hover:text-[#F0CF85] transition-all"
                aria-label={item.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <span className="font-mono-code text-[11px] text-[#555] tracking-widest hidden sm:inline">
            &copy; {new Date().getFullYear()} DEEPAK A M
          </span>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#121217] border border-[#C6A15B]/30 hover:border-[#C6A15B] text-xs font-cinzel font-semibold text-[#E5E5E5] hover:text-[#F0CF85] transition-all"
          >
            <span>TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-[#141419] pt-6 font-mono-code text-[10px] text-[#555]">
        MAFIA NOIR CINEMATIC PORTFOLIO &bull; ENGINEERED WITH REACT, THREE.JS, TAILWIND & FRAMER MOTION
      </div>
    </footer>
  );
}
