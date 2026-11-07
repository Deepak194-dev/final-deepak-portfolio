import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { Github, Linkedin, Instagram } from './SocialIcons';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Direct Email',
    value: 'deepakam.dev@gmail.com',
    href: 'mailto:deepakam.dev@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub Profile',
    value: 'github.com/deepakam',
    href: 'https://github.com/deepakam',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn Network',
    value: 'linkedin.com/in/deepakam',
    href: 'https://linkedin.com/in/deepakam',
  },
  {
    icon: Instagram,
    label: 'Instagram Identity',
    value: '@deepak.am_',
    href: 'https://instagram.com/deepak.am_',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    soundManager.playClick();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      soundManager.playSuccessChime();

      // Celebration confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C6A15B', '#A4162A', '#F0CF85', '#FFFFFF'],
      });
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-28 px-4 md:px-8 bg-[#080808]/95 overflow-hidden"
    >
      {/* Volumetric Atmosphere */}
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[#A4162A]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-[#C6A15B]/15 rounded-full blur-[160px] pointer-events-none" />

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
              COMMUNICATION CHANNEL
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase"
          >
            <span className="gold-gradient-text">LET'S BUILD </span>
            <span className="text-[#FFFFFF]">SOMETHING GREAT</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#A3A3A3] max-w-xl mx-auto mt-3"
          >
            Ready to collaborate on innovative web applications, software engineering challenges, or creative digital experiences.
          </motion.p>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-4" />
        </div>

        {/* Contact Grid: Details vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl mafia-glass-card border border-[#C6A15B]/20"
            >
              <h3 className="font-cinzel text-xl font-bold text-[#FFFFFF] mb-2">
                Connect Directly
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-6">
                Feel free to reach out across any platform. I am open to discussing software projects, creative development, and full-stack opportunities.
              </p>

              <div className="space-y-4">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => soundManager.playHover()}
                      onClick={() => soundManager.playClick()}
                      className="flex items-center gap-4 p-3.5 rounded-xl bg-[#14141A] border border-[#22222C] hover:border-[#C6A15B]/50 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#1A1A22] border border-[#33333E] group-hover:border-[#C6A15B] flex items-center justify-center text-[#C6A15B] group-hover:text-[#F0CF85] transition-colors">
                        <Icon size={18} />
                      </div>
                      <div className="overflow-hidden">
                        <span className="font-mono-code text-[10px] text-[#737373] uppercase tracking-wider block">
                          {item.label}
                        </span>
                        <span className="font-medium text-xs sm:text-sm text-[#E5E5E5] group-hover:text-[#FFFFFF] truncate block">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability Status Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-4 rounded-xl bg-gradient-to-r from-[#17171C] via-[#101014] to-[#101014] border border-[#2A2A33] flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#86efac] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22c55e]" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#FFFFFF]">Current Status</p>
                  <p className="text-[11px] text-[#A3A3A3]">Available for select projects</p>
                </div>
              </div>
              <span className="font-mono-code text-[11px] text-[#C6A15B]">
                MERN &bull; BCA
              </span>
            </motion.div>
          </div>

          {/* Right Column: Animated Gold-Bordered Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl mafia-glass-card border border-[#C6A15B]/30 shadow-2xl relative overflow-hidden"
            >
              {/* Gold & Burgundy Corner Accents */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#C6A15B]/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#A4162A]/20 via-transparent to-transparent pointer-events-none" />

              <h3 className="font-cinzel text-2xl font-bold text-[#FFFFFF] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] mb-6">
                Fill out the form below. I will respond to your transmission promptly.
              </p>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#5C071B]/40 border border-[#C6A15B] flex items-center justify-center text-[#F0CF85] mb-4 shadow-[0_0_25px_rgba(198,161,91,0.3)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-cinzel text-xl font-bold text-[#FFFFFF] mb-2">
                    Transmission Received
                  </h4>
                  <p className="text-sm text-[#A3A3A3] max-w-sm mb-6">
                    Thank you for reaching out, <span className="text-[#F0CF85] font-semibold">{form.name}</span>. Your message has been safely logged.
                  </p>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setSubmitted(false);
                      setForm({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl font-cinzel text-xs font-bold text-[#080808] bg-[#C6A15B] hover:brightness-110"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono-code text-[11px] text-[#A3A3A3] uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Alexander Cross"
                        className="w-full px-4 py-3 rounded-xl bg-[#0D0D12] border border-[#252530] text-sm text-[#FFFFFF] placeholder-[#555] focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-code text-[11px] text-[#A3A3A3] uppercase tracking-wider mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="e.g. alexander@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0D0D12] border border-[#252530] text-sm text-[#FFFFFF] placeholder-[#555] focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono-code text-[11px] text-[#A3A3A3] uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[#0D0D12] border border-[#252530] text-sm text-[#FFFFFF] placeholder-[#555] focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-[11px] text-[#A3A3A3] uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Detail your inquiry or vision..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0D0D12] border border-[#252530] text-sm text-[#FFFFFF] placeholder-[#555] focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-colors resize-none"
                    />
                  </div>

                  {/* Animated Gold-Bordered Contact Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      onMouseEnter={() => soundManager.playHover()}
                      className="w-full relative group py-3.5 px-6 rounded-xl font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-[#080808] bg-gradient-to-r from-[#FFF0D0] via-[#C6A15B] to-[#8D6B2C] hover:brightness-110 shadow-[0_0_25px_rgba(198,161,91,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 overflow-hidden"
                    >
                      {/* Animated Shimmer sweep */}
                      <span className="absolute top-0 left-[-100%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none" />

                      {loading ? (
                        <span>TRANSMITTING...</span>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>SEND TRANSMISSION</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
