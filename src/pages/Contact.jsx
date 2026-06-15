import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/world_of_ique/' },
  { label: 'Facebook',  href: 'https://www.facebook.com/worldofique/' },
  { label: 'X',         href: 'https://x.com/WorldOfIque' },
  { label: 'YouTube',   href: 'https://youtube.com/@world_of_ique?si=5-LnnxtHVhUgTIau' },
];

export default function GlassContactPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/40 via-[#0A0A0A] to-[#0A0A0A] text-white p-4 sm:p-6 md:p-12 flex items-center justify-center">

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] sm:rounded-[36px] md:rounded-[40px] p-6 sm:p-10 md:p-16 flex flex-col md:flex-row gap-8 md:gap-12 shadow-2xl"
      >

        {/* Left Section: Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-5 md:mb-8 leading-[0.9]">
            Let's talk <br />
            <span style={{ color: '#ffb900' }} className="italic">business.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-8 md:mb-12 max-w-sm">
            Have a project in mind? I'm currently accepting new collaborations and freelance inquiries.
          </p>

          <div className="space-y-3">
            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-widest" style={{ color: '#ffb900' }}>
              Reach Out
            </h4>
            <a
              href="mailto:hello@folioblox.com"
              className="text-lg sm:text-xl md:text-2xl transition-colors duration-200 block"
              style={{ color: 'white' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffb900')}
              onMouseLeave={e => (e.currentTarget.style.color = 'white')}
            >
              hello@folioblox.com
            </a>
          </div>
        </div>

        {/* Divider on mobile */}
        <div className="block md:hidden h-px w-full bg-white/10" />

        {/* Right Section: Links */}
        <div className="flex-1 flex flex-col justify-center gap-6 md:gap-8 bg-white/5 p-5 sm:p-7 md:p-8 rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border border-white/5">
          <h4 className="font-bold text-xs sm:text-sm uppercase tracking-widest opacity-60">
            Find me online
          </h4>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-transparent transition-all duration-200 group"
                style={{ background: 'rgba(255,255,255,0.05)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,185,0,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255,185,0,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <span className="text-base sm:text-lg font-medium">{label}</span>
                <span
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg"
                  style={{ color: '#ffb900' }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}