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
    { title: "VCCircle",  imgUrl: "/banner8.png" },
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
        className="max-w-7xl mx-auto px-6 pt-12 pb-20 md:py-20"
      >
        <div className="bg-gradient-to-br  rounded-[40px] p-8 md:p-20 h-[80vh] min-h-[550px] flex flex-col justify-between border border-neutral-900/40"
        style={{ backgroundImage: "url(/banner4.png)" }}>
          
          
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-[100px] font-bold tracking-tighter leading-[0.9] mb-8">
              Creative<br />Director
            </h1>
            <p className="max-w-md text-base md:text-lg text-neutral-300 font-light leading-relaxed">
              Elevating corporate and luxury ecosystems through invisible typography frameworks and uncompromised strategic focus.
            </p>
          </div>
        </div>
      </motion.header>

      {/* SECTION 2: PARALLAX WORK GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-3xl md:text-5xl font-bold tracking-tight">Case Studies</p>
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
        className="group relative bg-black border border-neutral-800 p-8 hover:border-[#fe9a00] transition-all duration-500 overflow-hidden"
      >
        {/* Accent corner */}
        <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#fe9a00]" />

        <h4 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-[#fe9a00] transition-colors duration-300">
          {item.title}
        </h4>
        <p className="text-neutral-500 text-sm leading-relaxed font-light group-hover:text-neutral-400 transition-colors duration-300">
          {item.desc}
        </p>

        {/* Bottom accent on hover */}
        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#fe9a00] group-hover:w-full transition-all duration-500" />
      </div>
    ))}
  </div>
</FadeInSection>

      {/* SECTION 4: CONTACT & CALL TO ACTION */}
      <FadeInSection className="text-center pb-32 md:pb-48">
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="inline-block"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 max-w-4xl mx-auto leading-tight">
            Let’s build something permanent.
          </h2>
          <a 
            href="mailto:studio@example.com" 
            className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm tracking-wide shadow-xl"
          >
            Start An Engagement
          </a>
        </motion.div>
      </FadeInSection>

{/* =================
    SECTION 5: WHO WE WORK WITH
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
