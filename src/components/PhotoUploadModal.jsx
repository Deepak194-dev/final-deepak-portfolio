import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Check, Image as ImageIcon, RotateCcw } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function PhotoUploadModal({ isOpen, onClose, currentPhoto, onPhotoChange }) {
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState(null);

  if (!isOpen) return null;

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      setPreview(dataUrl);
      onPhotoChange(dataUrl);
      soundManager.playSuccessChime();
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('deepak_custom_photo');
    onPhotoChange('/profile.svg');
    setPreview(null);
    soundManager.playClick();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg mafia-glass-card rounded-2xl p-6 md:p-8 border border-[#C6A15B]/40 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-full text-[#A3A3A3] hover:text-[#FFFFFF] hover:bg-[#1F1F24] transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <span className="font-mono-code text-xs text-[#C6A15B] tracking-widest uppercase">
              Portrait Configuration
            </span>
            <h2 className="font-cinzel text-2xl font-bold text-[#FFFFFF] mt-1">
              Upload Your Photograph
            </h2>
            <p className="text-sm text-[#A3A3A3] mt-1">
              Your photo will instantly become the 3D cinematic centerpiece with red & gold rim-lighting.
            </p>
          </div>

          {/* Dropzone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`relative flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-xl transition-all cursor-pointer ${
              dragOver
                ? 'border-[#C6A15B] bg-[#C6A15B]/10'
                : 'border-[#333338] hover:border-[#C6A15B]/60 bg-[#0D0D10]/60'
            }`}
            onClick={() => document.getElementById('photo-file-input').click()}
          >
            <input
              id="photo-file-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />

            <div className="w-16 h-16 rounded-full bg-[#1A1A20] flex items-center justify-center mb-4 border border-[#C6A15B]/30 text-[#C6A15B]">
              <Upload size={28} />
            </div>

            <p className="text-base font-medium text-[#E5E5E5] text-center">
              Click to browse or drag and drop your photo here
            </p>
            <p className="text-xs text-[#737373] mt-1">
              Supports JPG, PNG, WEBP, HEIC (High resolution recommended)
            </p>
          </div>

          {/* Current / Preview Status */}
          <div className="mt-6 flex items-center justify-between p-3 bg-[#121216] rounded-xl border border-[#222]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#C6A15B]/50 bg-black">
                <img
                  src={preview || currentPhoto}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#FFFFFF]">Active Portrait</p>
                <p className="text-[11px] text-[#A3A3A3]">
                  {preview ? 'Custom photo loaded' : 'Default cinematic asset active'}
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#A3A3A3] hover:text-[#C6A15B] transition-colors rounded-lg hover:bg-[#1A1A22]"
            >
              <RotateCcw size={14} />
              Reset
            </button>
          </div>

          {/* Permanent Save Instructions */}
          <div className="mt-4 p-3 bg-[#5C071B]/20 rounded-lg border border-[#A4162A]/30 text-[11px] text-[#E5E5E5]/90">
            <span className="font-semibold text-[#C6A15B]">Permanent File Location: </span>
            You can also place your photo directly into your project folder at{' '}
            <code className="text-[#FFF] font-mono-code bg-black/50 px-1 py-0.5 rounded">
              public/profile.jpg
            </code>.
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg text-sm font-cinzel font-bold text-[#080808] bg-gradient-to-r from-[#F0CF85] via-[#C6A15B] to-[#8D6B2C] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(198,161,91,0.3)]"
            >
              Confirm & Apply
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
