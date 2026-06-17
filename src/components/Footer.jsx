import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/world_of_ique/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'Facebook',  href: 'https://www.facebook.com/worldofique/',     icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'X',         href: 'https://x.com/WorldOfIque',                 icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.735-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'YouTube',   href: 'https://youtube.com/@world_of_ique',        icon: 'M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' },
];


const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Contact',   href: '/contact' },
];


const offices = [
  { city: 'Ique Ventures', detail: 'Bangalore, Karnataka', flag: '🇮🇳' },
];


export default function Footer() {
  const year = new Date().getFullYear();


  // Animation variants for staggered rendering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };


  return (
    <footer className="relative bg-[#080808] text-white overflow-hidden border-t border-white/[0.05]">


      {/* ── AMBIENT GLOW & TOP GRADIENT LINE ── */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-[#ffb900]/40 to-transparent opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px]"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 185, 0, 0.08) 0%, transparent 70%)' }}
      />


      {/* ── MAIN CONTENT ── */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (Wider) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-8 pr-0 lg:pr-12">
            <div>
              <a href="/" className="inline-block mb-4">
                <img 
                  src="/logo.png" 
                  alt="WOI.eco" 
                  className="h-10 w-auto object-contain"
                />
              </a>
              <p className="text-sm text-white/50 leading-relaxed max-w-sm font-light">
                A global innovation ecosystem enabling startups, corporates, and investors to co-create the future.
              </p>
            </div>


            {/* CTA Button moved here for better hierarchy */}
            <div>
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-[#ffb900] text-[#080808] font-semibold text-sm rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Start a conversation</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
            </div>


            {/* Socials */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ label, href, icon }) => (
                <a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center hover:border-[#ffb900]/50 hover:bg-[#ffb900]/10 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(255,185,0,0.15)] transition-all duration-300 group"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-white/40 group-hover:text-[#ffb900] transition-colors duration-300">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>


          {/* Navigation Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-white/30 font-semibold">Company</h3>
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-2 group w-fit">
                    <span className="w-0 group-hover:w-3 h-[2px] bg-[#ffb900] rounded-full transition-all duration-300 ease-out overflow-hidden flex-shrink-0 opacity-0 group-hover:opacity-100" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>


          {/* Contact Information Column */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-white/30 font-semibold">Contact Us</h3>
            <div className="flex flex-col gap-5">
              {[
                { svg: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, text: 'support@woi.eco', href: 'mailto:support@woi.eco' },
                { svg: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>, text: '+971 4 000 0000', href: 'tel:+97140000000' },
              ].map(({ svg, text, href }) => (
                <a key={text} href={href} className="flex items-start gap-3.5 group w-fit">
                  <div className="mt-0.5 p-1.5 rounded-md bg-white/[0.03] border border-white/[0.05] group-hover:border-[#ffb900]/30 group-hover:bg-[#ffb900]/10 transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">{svg}</svg>
                  </div>
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-200 mt-1">{text}</span>
                </a>
              ))}
            </div>
          </motion.div>


          {/* Offices Column */}
        


        </div>
      </motion.div>


      {/* ── BOTTOM BAR ── */}
      <div className="relative border-t border-white/[0.06] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-light">
            © {year} World of Ique. All rights reserved.
          </p>


          <div className="flex items-center gap-8">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((t) => (
              <a key={t} href="#" className="text-xs text-white/40 hover:text-[#ffb900] transition-colors duration-200 font-light">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>


    </footer>
  );
}