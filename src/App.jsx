import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PhotoUploadModal from './components/PhotoUploadModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [photoUrl, setPhotoUrl] = useState('/profile.svg');
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  // Initialize photo from localStorage if previously set
  useEffect(() => {
    const saved = localStorage.getItem('deepak_custom_photo');
    if (saved) {
      setPhotoUrl(saved);
    }
  }, []);

  // Initialize Lenis smooth scroll for cinematic 3D parallax feel
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrame;
    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }
    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  const handlePhotoChange = (newUrl) => {
    setPhotoUrl(newUrl);
    localStorage.setItem('deepak_custom_photo', newUrl);
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#E5E5E5] selection:bg-[#A4162A] selection:text-white">
      {/* Cinematic Opening Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Mafia Noir Cursor */}
      <CustomCursor />

      {/* 3D Three.js Particles & Ambient Embers Background */}
      <ThreeBackground />

      {/* Floating Navbar */}
      <Navbar onOpenUploadModal={() => setIsUploadOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection
          photoUrl={photoUrl}
          onOpenUploadModal={() => setIsUploadOpen(true)}
        />

        <AboutSection
          photoUrl={photoUrl}
          onOpenUploadModal={() => setIsUploadOpen(true)}
        />

        <SkillsSection />

        <ProjectsSection />

        <EducationSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Photo Upload Modal */}
      <PhotoUploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        currentPhoto={photoUrl}
        onPhotoChange={handlePhotoChange}
      />
    </div>
  );
}
