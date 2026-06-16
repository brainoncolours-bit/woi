import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/world_of_ique/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'Facebook',  href: 'https://www.facebook.com/worldofique/',     icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'X',         href: 'https://x.com/WorldOfIque',                 icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.735-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'YouTube',   href: 'https://youtube.com/@world_of_ique',        icon: 'M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' },
];

const navColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'Home',      href: '/' },
      { label: 'About',     href: '/about' },
      { label: 'Ecosystem', href: '/ecosystem' },
      { label: 'Contact',   href: '/contact' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { label: 'Startup Acceleration',   href: '#' },
      { label: 'Innovation Program',     href: '#' },
      { label: 'Investment Deals',       href: '#' },
      { label: 'Industry Collaboration', href: '#' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] text-white overflow-hidden">

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px]"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,185,0,0.07) 0%, transparent 70%)' }}
      />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── MAIN GRID ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand + contact */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <div>
            <span className="text-xl font-bold tracking-tight">
              WOI<span className="text-[#ffb900]">.eco</span>
            </span>
            <p className="mt-2.5 text-sm text-white/30 leading-relaxed max-w-[280px]">
              A global innovation ecosystem enabling startups, corporates, and investors to co-create the future.
            </p>
          </div>

          {/* Contact details row */}
          <div className="flex flex-col gap-2">
            {[
              { svg: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>, text: 'Business Bay, Dubai, UAE', href: null },
              { svg: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, text: 'hello@worldofique.com', href: 'mailto:hello@worldofique.com' },
              { svg: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>, text: '+971 4 000 0000', href: 'tel:+97140000000' },
            ].map(({ svg, text, href }) => {
              const inner = (
                <span className="flex items-center gap-2.5 group">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">{svg}</svg>
                  <span className={`text-sm ${href ? 'text-white/40 group-hover:text-white/70 transition-colors' : 'text-white/40'}`}>{text}</span>
                </span>
              );
              return href
                ? <a key={text} href={href}>{inner}</a>
                : <div key={text}>{inner}</div>;
            })}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center hover:border-[#ffb900]/40 hover:bg-[#ffb900]/[0.07] transition-all duration-200 group">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-white/35 group-hover:text-[#ffb900] transition-colors">
                  <path d={icon} />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Nav columns */}
        {navColumns.map(({ heading, links }, i) => (
          <motion.div key={heading}
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.07 * (i + 1), ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">{heading}</p>
            <ul className="flex flex-col gap-3">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/40 hover:text-white/85 transition-colors duration-150 flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-2.5 h-px bg-[#ffb900] transition-all duration-200 overflow-hidden flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/20">© {year} World of Ique. All rights reserved.</p>

        <a
          href="/contact"
          className="group inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#ffb900] text-[#080808] font-semibold text-sm rounded-full hover:bg-[#ffc91a] active:scale-[0.97] transition-all duration-200"
        >
          Start a conversation
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <div className="flex items-center gap-5">
          {['Privacy Policy', 'Terms of Use'].map((t) => (
            <a key={t} href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors duration-150">{t}</a>
          ))}
        </div>
      </div>

    </footer>
  );
}