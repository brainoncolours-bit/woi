import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowUpRight, 
  Sparkles,
  Command,
  ShieldCheck,
  Globe
} from 'lucide-react';

const Footer = ({ isDarkMode = true }) => {
  const socialLinks = [
    { icon: Linkedin, url: 'https://linkedin.com/company/ique', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/ique', label: 'X / Twitter' },
    { icon: Instagram, url: 'https://instagram.com/ique', label: 'Instagram' },
    { icon: Youtube, url: 'https://youtube.com/ique', label: 'YouTube' },
  ];

  const footerLinks = [
    {
      title: "Ecosystem",
      links: ["Terminal", "Sandbox", "Core Framework", "Node Network"]
    },
    {
      title: "Ventures",
      links: ["Portfolio", "Incubation", "Systemic Innovation", "Apply"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Telemetry Data", "Brand Kit", "System Status"]
    }
  ];

  return (
    <footer className={`relative border-t overflow-hidden transition-colors duration-500 font-sans ${
      isDarkMode 
        ? 'bg-[#0b0a09] text-stone-200 border-stone-800' 
        : 'bg-stone-50 text-stone-800 border-stone-200'
    }`}>
      
      {/* 1. CINEMATIC BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 -translate-y-1/2 transition-colors ${
          isDarkMode ? 'bg-orange-500' : 'bg-orange-300'
        }`} />
        <div className={`absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 transition-colors ${
          isDarkMode ? 'bg-amber-400' : 'bg-amber-200'
        }`} />
        {/* Subtle geometric grid backdrop */}
        <div className={`absolute inset-0 opacity-[0.03] ${
          isDarkMode ? 'bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]'
        } bg-[size:4rem_4rem]`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        
        {/* 2. PREMIUM CALL TO ACTION SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20 border-b border-stone-800/50 items-center">
          <div className="space-y-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider ${
              isDarkMode ? 'bg-stone-950 border border-stone-800 text-orange-400' : 'bg-white border border-stone-200 text-orange-600'
            }`}>
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              WORLD OF IQUE ECOSYSTEM
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-none">
              Ready to break <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-200 to-white bg-clip-text text-transparent font-light italic">
                through the noise?
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium text-sm rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Enter Ecosystem Sandbox
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </div>
        </div>

        {/* 3. MAIN LINK GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 py-16">
          
          {/* Brand Pillar Column */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-black text-sm tracking-tighter">
                iQ
              </div>
              <span className="font-bold tracking-tight text-xl">IQue Ventures</span>
            </div>
            <p className={`text-sm max-w-xs leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
              An architectural framework engineered for modern digital systems, decentralized synergy, and systemic innovation.
            </p>
            
            {/* Social Links Row */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                  className={`p-2.5 rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-stone-900/50 border-stone-800 hover:bg-stone-800 text-stone-400 hover:text-white' 
                      : 'bg-white border-stone-200 hover:bg-stone-100 text-stone-600 hover:text-black'
                  }`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Dynamic Map Functional Links */}
          {footerLinks.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400/90">
                {group.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {group.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                      className={`transition-colors relative block group ${
                        isDarkMode ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-black'
                      }`}
                    >
                      {link}
                      <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-orange-400 transition-all duration-300 group-hover:w-1/3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* 4. PREMIUM COMPLIANCE & METRICS LINE */}
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono ${
          isDarkMode ? 'border-stone-900 text-stone-500' : 'border-stone-200 text-stone-500'
        }`}>
          
          {/* Micro Telemetry Items */}
          <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
            <span className="flex items-center gap-1.5">
              <Command className="w-3.5 h-3.5 text-orange-500/70" /> Node Status: Operational
            </span>
            <span className="hidden sm:inline text-stone-700">|</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-500/70" /> Encrypted Core
            </span>
            <span className="hidden sm:inline text-stone-700">|</span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-orange-500/70" /> Global Gateway
            </span>
          </div>

          {/* Legal Meta */}
          <div className="flex gap-4 tracking-tight">
            <span>© 2026 IQue Ventures. All rights reserved.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;