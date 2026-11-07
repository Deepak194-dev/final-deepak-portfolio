import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Camera, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onOpenUploadModal }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll Spy for active section
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    soundManager.playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const handleToggleSound = () => {
    const enabled = soundManager.toggleSound();
    setIsAudioActive(enabled);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none`}
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-3 rounded-full transition-all duration-500 ${
            isScrolled
              ? 'mafia-glass border-[#C6A15B]/30 shadow-[0_15px_35px_rgba(0,0,0,0.85)] bg-[#0C0C0F]/85'
              : 'bg-[#121214]/60 backdrop-blur-md border border-white/5'
          } max-w-5xl w-full`}
        >
          {/* Brand Monogram */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#141418] border border-[#C6A15B]/50 flex items-center justify-center rotate-45 group-hover:border-[#C6A15B] transition-colors shadow-[0_0_12px_rgba(198,161,91,0.2)]">
              <span className="-rotate-45 font-cinzel text-xs font-black gold-gradient-text">
                DAM
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-cinzel text-sm font-bold tracking-wider text-[#FFFFFF] group-hover:text-[#F0CF85] transition-colors block leading-tight">
                DEEPAK A M
              </span>
              <span className="font-mono-code text-[10px] text-[#A3A3A3] tracking-widest block">
                MERN DEVELOPER
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`relative px-3.5 py-1.5 rounded-full font-cinzel text-xs tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-[#FFFFFF] font-bold'
                      : 'text-[#A3A3A3] hover:text-[#FFFFFF]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-[#A4162A] to-[#C6A15B] rounded-full shadow-[0_0_8px_#C6A15B]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Sound Toggle, Photo Upload, Contact CTA */}
          <div className="flex items-center gap-2.5">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleSound}
              title={isAudioActive ? 'Mute Noir Sound' : 'Enable Noir Atmospheric Sound'}
              className={`p-2 rounded-full border transition-all ${
                isAudioActive
                  ? 'border-[#C6A15B] text-[#C6A15B] bg-[#C6A15B]/10 shadow-[0_0_12px_rgba(198,161,91,0.4)]'
                  : 'border-[#333338] text-[#737373] hover:text-[#E5E5E5] hover:border-[#555]'
              }`}
            >
              {isAudioActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Photo Upload Shortcut */}
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenUploadModal?.();
              }}
              title="Upload your photograph"
              className="p-2 rounded-full border border-[#C6A15B]/40 text-[#C6A15B] hover:bg-[#C6A15B]/15 transition-all"
            >
              <Camera size={16} />
            </button>

            {/* Quick Contact Button */}
            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => soundManager.playHover()}
              className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-cinzel font-bold text-[#FFFFFF] bg-gradient-to-r from-[#5C071B] to-[#A4162A] hover:brightness-110 border border-[#A4162A]/50 shadow-[0_0_15px_rgba(164,22,42,0.3)] transition-all"
            >
              <Sparkles size={13} className="text-[#F0CF85]" />
              <span>Let's Talk</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 md:hidden rounded-lg border border-[#333] text-[#E5E5E5] hover:border-[#C6A15B]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col justify-center items-center px-6 md:hidden">
          <div className="flex flex-col items-center gap-6 w-full max-w-xs">
            <div className="w-16 h-16 rounded-xl bg-[#141418] border border-[#C6A15B] flex items-center justify-center rotate-45 mb-4 shadow-[0_0_20px_rgba(198,161,91,0.3)]">
              <span className="-rotate-45 font-cinzel text-xl font-black gold-gradient-text">
                DAM
              </span>
            </div>

            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full py-3 text-center font-cinzel text-lg tracking-widest border-b border-[#222] transition-colors ${
                  activeSection === item.id
                    ? 'text-[#C6A15B] font-bold border-[#C6A15B]/50'
                    : 'text-[#A3A3A3] hover:text-[#FFFFFF]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(false);
                onOpenUploadModal?.();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 mt-2 rounded-xl border border-[#C6A15B]/50 font-cinzel text-sm text-[#F0CF85] bg-[#141418]"
            >
              <Camera size={16} />
              <span>Upload Custom Photo</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
