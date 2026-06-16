import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

// Reusable Scroll-In Wrapper for clean section entrances
const FadeInSection = ({ children, className = "" }) => (
  <motion.section 
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, margin: "-100px" }}
    className={`max-w-7xl mx-auto px-6 py-28 md:py-36 ${className}`}
  >
    {children}
  </motion.section>
);

// Individual Parallax Card Component
const ParallaxProjectCard = ({ index, title, tags, imgUrl }) => {
  const targetRef = useRef(null);
  
  // Track scroll positioning specifically for this wrapper element
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Moves background image slightly off-axis to build a high-end parallax depth effect
  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div 
      ref={targetRef}
      className="h-[480px] md:h-[600px] bg-neutral-900 rounded-[32px] overflow-hidden relative group cursor-pointer"
    >
      {/* Parallax Background Engine */}
      <motion.div 
        style={{ y: yBg, backgroundImage: `url(${imgUrl})` }}
        className="absolute -inset-y-24 inset-x-0 bg-cover bg-center opacity-40 group-hover:opacity-55 transition-opacity duration-500 scale-105"
      />
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
      
      {/* Card Interface Content */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{title}</h3>
          <p className="text-neutral-400 text-sm md:text-base font-light">{tags}</p>
        </div>
      </div>
    </div>
  );
};

export default function MinimalPortfolio() {
  // Global reading progress bar calculation
  const { scrollYProgress: globalProgress } = useScroll();
  const scaleX = useTransform(globalProgress, [0, 1], [0, 1]);

  const explicitProjects = [
    { title: "Startup park", imgUrl: "/banner6.png" },
    { title: "Incubenation ", imgUrl: "/banner7.png" },
    { title: "VC Circle",  imgUrl: "/banner8.png" },
    { title: "Startup School", imgUrl: "/banner9.png" }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans selection:bg-orange-500 selection:text-white antialiased overflow-x-hidden">
      
      {/* Top Interface Accent Progress Line */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-orange-500 origin-left z-50"
        style={{ scaleX }}
      />

     {/* SECTION 1: HERO */}
<motion.header
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
  className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-12 md:py-20"
>
  <div
    className="rounded-[24px] md:rounded-[40px] p-6 sm:p-10 md:p-20 h-[75vh] sm:h-[80vh] min-h-[480px] flex flex-col justify-end border border-neutral-900/40 relative overflow-hidden"
    style={{ backgroundImage: "url(/banner4.png)", backgroundSize: "cover", backgroundPosition: "center" }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/55 rounded-[24px] md:rounded-[40px]" />

    {/* Content anchored to bottom */}
    <div className="relative z-10 max-w-3xl">
      <h1 className="text-[clamp(2.8rem,8vw,5.5rem)] md:text-7xl lg:text-[90px] font-light tracking-tighter leading-[0.95] mb-4 md:mb-8 text-white">
        The Pilot<br />
        <span className="font-serif italic font-normal">Ecosystem</span>
      </h1>
      <p className="max-w-lg text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed">
        WOI India is where WOI's global vision begins — bringing together founders, investors, institutions, and ecosystem partners to build a replicable model for entrepreneurship and innovation.
      </p>
    </div>
  </div>
</motion.header>


      {/* SECTION 2: PARALLAX WORK GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-3xl md:text-5xl font-bold tracking-tight">WOI India Initiatives</p>
          </div>
          
        </div>

        {/* Dynamic 2-Column Responsive Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {explicitProjects.map((project, i) => (
            <ParallaxProjectCard 
              key={i}
              index={i + 1}
              title={project.title}
              tags={project.tags}
              imgUrl={project.imgUrl}
            />
          ))}
        </div>
      </section>

      {/* WOI INDIA: PILOT ECOSYSTEM TEASER */}
      <FadeInSection>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">WOI India — Pilot Ecosystem</h2>
          <p className="text-neutral-400 text-sm mt-3">WOI India brings together entrepreneurs, investors, innovators, institutions and ecosystem partners through interconnected platforms and initiatives designed to be a replicable model.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'PARK', title: 'Startup Park Bengaluru', status: 'Building' },
            { id: 'SCHOOL', title: 'Startup School', status: 'Active' },
            { id: 'CEO', title: 'CEO Square', status: 'Active' },
            { id: 'VC', title: 'VC Circle', status: 'Active' },
            { id: 'ANGELS', title: 'WOI Angels', status: 'Building' },
            { id: 'X9', title: 'X9 Club', status: 'Upcoming' },
            { id: 'STUDIO', title: 'DayOne Venture Studio', status: 'Active' },
            { id: 'INC', title: 'Incubenation', status: 'Building' },
            { id: 'QX', title: 'QuantumX', status: 'Upcoming' }
          ].map((it, idx) => (
            <div key={it.id} className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-lg">{it.title}</h4>
                <span className={`text-xs font-mono px-2 py-1 rounded ${it.status === 'Active' ? 'bg-emerald-500 text-black' : it.status === 'Building' ? 'bg-amber-500 text-black' : 'bg-stone-700 text-white'}`}>{it.status}</span>
              </div>
              <p className="text-sm text-neutral-400">{it.title} — part of the WOI India pilot initiative.</p>
            </div>
          ))}
        </div>

        
      </FadeInSection>

    {/* SECTION 3: PILLARS */}
<FadeInSection className="border-t border-neutral-900 mt-12">
  <div className="mb-20">
    <p className="text-3xl md:text-5xl font-bold tracking-tight">Pillars</p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: 'Infrastructure',
        desc: 'Startup parks, innovation hubs, centers of excellence, and ecosystem spaces.',
        icon: '▪'
      },
      {
        title: 'Capital',
        desc: 'Angel networks, venture capital access, investor communities, and strategic partnerships.',
        icon: '▪'
      },
      {
        title: 'Talent',
        desc: 'Entrepreneurship education, leadership programs, future-skills development, and founder training.',
        icon: '▪'
      },
      {
        title: 'Community',
        desc: 'Founder communities, investor circles, creator networks, student communities, and industry platforms.',
        icon: '▪'
      },
      {
        title: 'Venture Creation',
        desc: 'Venture studios, startup support systems, incubation, acceleration, and scale-up programs.',
        icon: '▪'
      },
      {
        title: 'Global Partnerships',
        desc: 'Connecting governments, institutions, corporates, investors, and entrepreneurs across markets.',
        icon: '▪'
      }
    ].map((item, i) => (
      <div
        key={i}
        className="group relative bg-black border border-neutral-800 p-8 hover:border-[#ffb900] transition-all duration-500 overflow-hidden"
      >
        {/* Accent corner */}
        <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#ffb900]" />

        <h4 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-[#ffb900] transition-colors duration-300">
          {item.title}
        </h4>
        <p className="text-neutral-500 text-sm leading-relaxed font-light group-hover:text-neutral-400 transition-colors duration-300">
          {item.desc}
        </p>

        {/* Bottom accent on hover */}
        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#ffb900] group-hover:w-full transition-all duration-500" />
      </div>
    ))}
  </div>
</FadeInSection>

{/* ========================================================
    FUTURE ECOSYSTEM CITIES SECTION
    ======================================================== */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  viewport={{ once: true, margin: "-100px" }}
  className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-neutral-900"
>

  {/* Header */}
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-4">
    <div>
      <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#ffb900] mb-3">
        Future Vision
      </p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
        Building the Future of<br className="hidden md:block" /> Ecosystem Cities
      </h2>
    </div>
    <p className="text-neutral-500 text-sm max-w-xs leading-relaxed font-light md:text-right">
      WOI's future initiatives are designed to create focused, industry-led ecosystems that bring together talent, infrastructure, capital, and global partnerships.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
    {[
      {
        num: '01',
        title: 'WOI Startup Nation',
        desc: 'A national-scale entrepreneurship and startup ecosystem.',
        tag: 'National'
      },
      {
        num: '02',
        title: 'WOI AI City',
        desc: 'An ecosystem for artificial intelligence, automation, data, and future technologies.',
        tag: 'Technology'
      },
      {
        num: '03',
        title: 'WOI Health City',
        desc: 'A focused ecosystem for healthcare, wellness, biotechnology, health-tech, and medical innovation.',
        tag: 'Healthcare'
      },
      {
        num: '04',
        title: 'WOI Agri City',
        desc: 'An ecosystem for agriculture, food systems, sustainability, and agri-tech innovation.',
        tag: 'Agriculture'
      },
      {
        num: '05',
        title: 'WOI Quantum City',
        desc: 'A frontier technology ecosystem for quantum computing, deep-tech, research, and advanced innovation.',
        tag: 'Deep Tech'
      },
      {
        num: '06',
        title: 'WOI Creators City',
        desc: 'A creator economy ecosystem for media, design, content, entertainment, and digital entrepreneurship.',
        tag: 'Creator Economy'
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group relative bg-neutral-950 border border-neutral-800 hover:border-[#ffb900]/50 rounded-xl p-6 md:p-7 overflow-hidden transition-colors duration-300 cursor-default flex flex-col justify-between min-h-[180px]"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-[#ffb900] transition-all duration-500" />

        {/* Top row: num + tag */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-mono text-neutral-600 group-hover:text-[#ffb900] transition-colors duration-300">
            {item.num}
          </span>
          <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-600 border border-neutral-800 group-hover:border-[#ffb900]/30 group-hover:text-[#ffb900]/70 px-2 py-0.5 rounded-full transition-all duration-300">
            {item.tag}
          </span>
        </div>

        {/* Title + desc */}
        <div className="space-y-2.5">
          <h4 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#ffb900] transition-colors duration-300">
            {item.title}
          </h4>
          <p className="text-sm text-neutral-500 font-light leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
            {item.desc}
          </p>
        </div>

        {/* Bottom arrow */}
        <div className="mt-6 flex justify-end">
          <svg
            width="16" height="16" viewBox="0 0 18 18" fill="none"
            className="text-neutral-700 group-hover:text-[#ffb900] group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-all duration-300"
          >
            <path d="M3 15L15 3M15 3H7M15 3v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Subtle corner glow on hover */}
        <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full bg-[#ffb900]/0 group-hover:bg-[#ffb900]/5 transition-all duration-500" />
      </motion.div>
    ))}
  </div>

</motion.section>

      

{/* =================
    SECTION 4: WHO WE WORK WITH
    ============== */}
<FadeInSection className="border-t border-neutral-900 mt-12">

  {/* Header row */}
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-3">
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">
        Who We Work With
      </h2>
    </div>
    <p className="text-neutral-500 text-sm max-w-xs leading-relaxed font-light">
      Designed for ecosystem builders.
    </p>
  </div>

  {/* Audience rows */}
  <div className="flex flex-col divide-y divide-neutral-900">
    {[
      {
        label: "Governments",
        short: "Economic development & national ecosystems",
        desc: "For economic development, innovation districts, startup policies, and national ecosystem programs.",
      },
      {
        label: "Investors",
        short: "Deal flow, angel networks & market expansion",
        desc: "For deal flow, startup access, angel networks, venture capital ecosystems, and market expansion.",
      },
      {
        label: "Entrepreneurs & Startups",
        short: "Venture building, community & capital access",
        desc: "For venture building, incubation, acceleration, community, mentorship, and capital access.",
      },
      {
        label: "Institutions",
        short: "Education, innovation & talent development",
        desc: "For entrepreneurship education, innovation programs, student founder ecosystems, and talent development.",
      },
      {
        label: "Corporates",
        short: "Innovation partnerships & industry ecosystems",
        desc: "For innovation partnerships, industry ecosystems, startup collaboration, and market-building initiatives.",
      },
      {
        label: "Cities & Regions",
        short: "Entrepreneurship-led economic development",
        desc: "For building entrepreneurship-led economic development models.",
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={false}
        className="group cursor-default"
        whileHover="hovered"
      >
        {/* ── Desktop row (md+): icon | label + short | arrow ── */}
        <div className="hidden md:flex items-start gap-6 py-7 overflow-hidden">
          {/* Index pill */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full border border-neutral-800 group-hover:border-[#fe9a00] group-hover:bg-[#fe9a00] transition-all duration-300 flex items-center justify-center">
            <span className="text-[10px] font-black text-neutral-500 group-hover:text-black transition-colors duration-300 tracking-wide">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-6">
              <h4 className="text-xl font-bold text-white group-hover:text-[#fe9a00] transition-colors duration-300 tracking-tight whitespace-nowrap">
                {item.label}
              </h4>
              <span className="text-xs text-neutral-600 group-hover:text-neutral-500 transition-colors duration-300 font-mono uppercase tracking-widest truncate">
                {item.short}
              </span>
            </div>

            {/* Description slides in on hover */}
            <motion.div
              variants={{ hovered: { height: "auto", opacity: 1, marginTop: 8 } }}
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xl">
                {item.desc}
              </p>
            </motion.div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 self-center">
            <motion.div
              variants={{ hovered: { x: 4, opacity: 1 } }}
              initial={{ x: 0, opacity: 0.2 }}
              transition={{ duration: 0.3 }}
              className="text-[#fe9a00]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* ── Mobile card (< md): always shows desc, no hover needed ── */}
        <div className="flex md:hidden items-start gap-4 py-5">
          {/* Index pill */}
          <div className="flex-shrink-0 w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center mt-0.5">
            <span className="text-[10px] font-black text-neutral-500 tracking-wide">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Text — always visible */}
          <div className="flex-1 min-w-0 space-y-1">
            <h4 className="text-base font-bold text-white tracking-tight leading-snug">
              {item.label}
            </h4>
            <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest leading-relaxed">
              {item.short}
            </p>
            <p className="text-sm text-neutral-400 font-light leading-relaxed pt-1">
              {item.desc}
            </p>
          </div>

          {/* Static arrow */}
          <div className="flex-shrink-0 self-start mt-1 text-[#fe9a00] opacity-40">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </motion.div>
    ))}
  </div>

  

</FadeInSection>




    </div>

    
  );
}
