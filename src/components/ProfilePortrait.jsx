import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, ShieldCheck } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function ProfilePortrait({ photoUrl, onOpenUploadModal }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [imgSrc, setImgSrc] = useState(photoUrl || './profile.svg');

  useEffect(() => {
    if (photoUrl) setImgSrc(photoUrl);
  }, [photoUrl]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative flex items-center justify-center perspective-1000">
      {/* Volumetric Atmospheric Backlight */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#5C071B]/50 via-transparent to-[#C6A15B]/30 rounded-3xl blur-2xl opacity-75 animate-pulse-glow pointer-events-none" />

      {/* Main 3D Card Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-[300px] sm:w-[360px] md:w-[420px] aspect-[4/5] rounded-2xl p-2.5 mafia-glass-card border border-[#C6A15B]/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] cursor-pointer group"
        onClick={() => {
          soundManager.playClick();
          onOpenUploadModal?.();
        }}
      >
        {/* Antique Gold Metallic Corner Braces */}
        <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-[#C6A15B] z-30 pointer-events-none" />
        <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-[#C6A15B] z-30 pointer-events-none" />
        <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-[#C6A15B] z-30 pointer-events-none" />
        <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-[#C6A15B] z-30 pointer-events-none" />

        {/* Inner Frame */}
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#121216]">
          {/* Portrait Image with vibrant contrast & fallback */}
          <img
            src={imgSrc}
            alt="Deepak A M - MERN Stack Developer & BCA Student"
            loading="eager"
            onError={() => setImgSrc('./profile.svg')}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              filter: 'contrast(1.1) brightness(1.02)',
            }}
          />

          {/* Subtle Red Rim-Light Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(164, 22, 42, 0.35) 0%, transparent 35%)',
            }}
          />

          {/* Subtle Gold Rim-Light Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(270deg, rgba(198, 161, 91, 0.35) 0%, transparent 35%)',
            }}
          />

          {/* Soft Bottom Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(0deg, rgba(8,8,8,0.7) 0%, transparent 35%)',
            }}
          />

          {/* Interactive Specular Glare */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-30"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            }}
          />

          {/* Quick-Action Photo Upload Hover Pill */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 border border-[#C6A15B]/60 text-xs font-mono-code text-[#F0CF85] backdrop-blur-md opacity-95 group-hover:opacity-100 transition-all group-hover:scale-105 shadow-lg">
            <Camera size={13} className="text-[#C6A15B]" />
            <span>Upload Photo</span>
          </div>

          {/* Bottom Identity Badge */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A4162A] animate-ping" />
              <span className="font-mono-code text-[11px] tracking-wider text-[#FFFFFF] uppercase">
                Active Verified Profile
              </span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono-code text-[#F0CF85] font-semibold">
              <ShieldCheck size={14} className="text-[#C6A15B]" />
              <span>DEEPAK A M</span>
            </div>
          </div>
        </div>

        {/* Floating 3D Badge 1: MERN Stack (Elevated in 3D Space) */}
        <div
          className="absolute -bottom-5 -left-6 z-30 px-4 py-2 rounded-xl mafia-glass border border-[#C6A15B]/50 shadow-2xl flex items-center gap-2.5 transition-transform duration-300 group-hover:translate-x-1"
          style={{ transform: 'translateZ(45px)' }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#C6A15B] shadow-[0_0_8px_#C6A15B]" />
          <div>
            <div className="font-mono-code text-[10px] text-[#A3A3A3] uppercase tracking-wider">
              Specialization
            </div>
            <div className="font-cinzel text-xs font-bold text-[#FFFFFF]">
              MERN Stack Architect
            </div>
          </div>
        </div>

        {/* Floating 3D Badge 2: BCA Scholar (Elevated in 3D Space) */}
        <div
          className="absolute -top-4 -right-4 z-30 px-3.5 py-1.5 rounded-xl mafia-glass border border-[#A4162A]/60 shadow-2xl flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-1"
          style={{ transform: 'translateZ(55px)' }}
        >
          <Sparkles size={13} className="text-[#FF6B81]" />
          <span className="font-cinzel text-[11px] font-bold text-[#FFFFFF] tracking-wider">
            BCA Scholar
          </span>
        </div>
      </motion.div>
    </div>
  );
}
