import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe } from 'lucide-react';

/* ==========================================================================
   ANIMATION VARIANT (MATCHING CUBIC CURVES ABOVE)
   ========================================================================== */
const EASE_CUBIC = [0.16, 1, 0.3, 1];

export default function Footer() {
  const footerLinks = {
    expeditions: ['Selected Artifacts', 'Strategic Blueprint', 'Operational Matrix', 'Media Archives'],
    governance: ['Privacy Charter', 'Terms of Engagement', 'Environmental Mandate', 'Institutional Framework'],
    hubs: ['Zurich Office', 'Tokyo Nexus', 'London Studio']
  };

  return (
    <footer className="bg-[#080809] text-white/40 text-[11px] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Micro-Grid Decorative Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Columns Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 pb-20 border-b border-white/5">
          
          {/* Brand Identity / Manifesto Track */}
          <div className="col-span-2 md:col-span-5 space-y-6">
            <div className="text-white tracking-tighter text-3xl font-black lowercase select-none group cursor-pointer">
              world of ique
              <span className="text-[9px] tracking-[0.3em] block font-light uppercase opacity-40 mt-1 transition-all group-hover:text-white">
                global architectural syndicate
              </span>
            </div>
            <p className="text-white/40 font-light leading-relaxed max-w-sm text-xs font-serif italic">
              "Synchronizing physical scale, raw material logic, and digital permanence to architect frameworks that endure."
            </p>
            <div className="flex items-center space-x-2 text-[10px] text-white/30 font-mono">
              <Globe size={11} className="animate-spin-slow text-white/50" />
              <span>HQ Coordinates: 47.3769° N, 8.5417° E</span>
            </div>
          </div>

          {/* Dynamic Link Column 1 */}
          <div className="col-span-1 md:col-span-2 md:col-start-7 space-y-4">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">Expeditions</div>
            <ul className="space-y-2.5 font-light">
              {footerLinks.expeditions.map((item, idx) => (
                <li key={idx}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 4, color: '#ffffff' }}
                    transition={{ duration: 0.3, ease: EASE_CUBIC }}
                    className="hover:text-white transition-colors block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Link Column 2 */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">Governance</div>
            <ul className="space-y-2.5 font-light">
              {footerLinks.governance.map((item, idx) => (
                <li key={idx}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 4, color: '#ffffff' }}
                    transition={{ duration: 0.3, ease: EASE_CUBIC }}
                    className="hover:text-white transition-colors block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Link Column 3 (Hubs & Status) */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">Global Hubs</div>
            <ul className="space-y-2.5 font-light">
              {footerLinks.hubs.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-1.5 group cursor-pointer text-white/40 hover:text-white transition-colors">
                  <span>{item}</span>
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transform translate-y-0.5 group-hover:-translate-y-0 group-hover:translate-x-0.5 transition-all" />
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-mono text-[10px] text-white/20">
          <div className="tracking-wide">
            © 2026 World of Ique Inc. All operational rights reserved. 
          </div>
          <div className="flex space-x-6 tracking-wider">
            <span>INDEX REVISION: 26.4.0</span>
            <span className="text-white/40 animate-pulse">● ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>

      </div>

      {/* Extreme Giant Aesthetic Watermark Backdrop */}
      <div className="absolute -bottom-16 -right-10 text-[15vw] font-serif font-black text-white/[0.01] select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter">
        IQUE
      </div>
    </footer>
  );
}