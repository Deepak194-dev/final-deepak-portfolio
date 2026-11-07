import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => onComplete?.(), 800);
          }, 400);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808]"
        >
          {/* Subtle Ambient Red/Gold Backlight */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-radial from-[#5C071B]/30 via-[#A4162A]/10 to-transparent blur-3xl pointer-events-none" />

          {/* Central Monogram Insignia */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Outer Diamond Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center mb-8"
            >
              <div className="absolute inset-0 rotate-45 border border-[#C6A15B]/40 bg-[#121214]/80 backdrop-blur-md shadow-[0_0_35px_rgba(164,22,42,0.3)]" />
              <div className="absolute inset-2 rotate-45 border border-[#A4162A]/40" />
              
              {/* Initials DAM */}
              <div className="relative z-10 font-cinzel text-3xl md:text-4xl font-extrabold tracking-widest gold-gradient-text">
                DAM
              </div>
            </motion.div>

            {/* Name Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.3em] text-[#E5E5E5] text-center uppercase mb-2"
            >
              Deepak A M
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-mono-code text-xs tracking-[0.25em] text-[#C6A15B]/80 uppercase mb-8"
            >
              MERN Stack Developer &bull; BCA
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-56 md:w-72 h-[2px] bg-[#1F1F24] relative overflow-hidden rounded-full mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-[#A4162A] via-[#C6A15B] to-[#F0CF85]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Percentage Display */}
            <div className="flex items-center justify-between w-56 md:w-72 font-mono-code text-[11px] text-[#A3A3A3]">
              <span className="tracking-widest">INITIALIZING EXPERIENCE</span>
              <span className="text-[#C6A15B] font-semibold">{progress}%</span>
            </div>
          </div>

          {/* Bottom Noir Watermark */}
          <div className="absolute bottom-8 font-cinzel text-[10px] tracking-[0.4em] text-[#737373] uppercase">
            Dark Luxury Portfolio &bull; 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
