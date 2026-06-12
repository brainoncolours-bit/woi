import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Menu, MessageSquare, ArrowRight, ArrowLeft, Layers, Compass, Cpu, TrendingUp, Globe, ArrowUpRight } from 'lucide-react';

/* ==========================================================================
   ANIMATION CONFIGURATIONS (ELEGANT CURVES)
   ========================================================================== */
const EASE_CUBIC = [0.16, 1, 0.3, 1];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: EASE_CUBIC } 
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function CorporateLanding({ isDarkMode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 25 });

  return (
    <div className={`font-sans antialiased selection:bg-[#ffffff] selection:text-[#0b0b0c] overflow-x-hidden ${isDarkMode ? 'bg-[#0b0b0c] text-[#f5f5f7]' : 'bg-stone-50 text-stone-900'}`}>
      {/* Premium Minimal Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neutral-500 via-white to-neutral-500 origin-left z-50" style={{ scaleX }} />
      
      {/* Fixed UI Layer Elements */}
      <FloatingContact />

      <HeroSection isDarkMode={isDarkMode} />
      <ParallaxPhilosophy isDarkMode={isDarkMode} />
      <ServicesBento isDarkMode={isDarkMode} />
      <HorizontalPortfolio isDarkMode={isDarkMode} />
      <MetricsSection isDarkMode={isDarkMode} />
      <CTASection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

/* ==========================================================================
   INTERACTIVE FIXED DECORATIVE LAYOUT ELEMENTS
   ========================================================================== */
function FloatingContact() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x * 0.35);
    mouseY.set(y * 0.35);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="fixed bottom-8 right-8 z-40 flex items-center space-x-3 bg-white text-black pl-5 pr-4 py-2.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer group"
    >
      <span className="text-xs font-semibold tracking-wide">Initiate Briefing</span>
      <motion.div 
        variants={{ hover: { scale: 1.1, rotate: 15 } }}
        className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white"
      >
        <MessageSquare size={12} className="fill-white" />
      </motion.div>
    </motion.div>
  );
}

/* ==========================================================================
   2. HERO SECTION
   ========================================================================== */
function HeroSection({ isDarkMode }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-between px-6 md:px-16 lg:px-24 overflow-hidden bg-[#070708]">
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 pointer-events-none scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1800')`,
          y: bgY
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-[#0b0b0c]/80" />
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ y: textY }} 
        className="z-10 max-w-4xl mt-12 space-y-6"
      >
        <motion.div 
          variants={fadeInUpVariant}
          className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 border-l-2 border-white/40 pl-3"
        >
          Institutional Architecture
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal font-serif text-white leading-[1.05] tracking-tight overflow-hidden">
          {["Sovereign Scale.", "Built for"].map((text, i) => (
            <motion.span 
              key={i} 
              custom={i}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.15, ease: EASE_CUBIC }}
              className="block"
            >
              {text}
            </motion.span>
          ))}
          <motion.span 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE_CUBIC }}
            className="block italic font-light text-neutral-300"
          >
            permanence.
          </motion.span>
        </h1>
        
        <motion.p variants={fadeInUpVariant} className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-md pt-2">
          World of Ique operates a global enterprise framework, engineered to provide{' '}
          <span className="underline underline-offset-4 decoration-white/40 text-white font-normal">
            international grade
          </span>{' '}
          structural engineering and asset management optimization models.
        </motion.p>
      </motion.div>

      <div className="absolute right-12 bottom-36 hidden md:flex items-center space-x-6 text-xs text-white/40">
        <button className="hover:text-white flex items-center space-x-1 transition-colors group">
          <ArrowLeft size={12} className="transform group-hover:-translate-x-1 transition-transform" /> <span>prev</span>
        </button>
        <div className="w-12 h-[1px] bg-white/20" />
        <button className="hover:text-white flex items-center space-x-1 transition-colors group">
          <span>next</span> <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-12 left-6 md:left-24 z-10 flex items-baseline font-light text-white/30">
        <span className="text-3xl md:text-4xl font-serif text-white font-normal">01</span>
        <span className="text-xs px-2">/</span>
        <span className="text-xs">03</span>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-white/20" />
    </section>
  );
}

/* ==========================================================================
   3. PARALLAX PHILOSOPHY SECTION (STAYS DARK)
   ========================================================================== */
function ParallaxPhilosophy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const textLeft = useTransform(scrollYProgress, [0, 1], ["-15%", "10%"]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-[#0f0f11] relative overflow-hidden">
      <motion.div style={{ scale }} className="max-w-5xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-semibold">Corporate Manifesto</h2>
        <p className="text-2xl md:text-4xl lg:text-5xl font-serif font-light text-white/90 leading-snug max-w-4xl mx-auto">
          "We reject volatile, shifting systems. To command market longevity, capital infrastructure must synchronize seamlessly with elegant system logic."
        </p>
        <div className="w-8 h-[1px] bg-white/30 mx-auto mt-4" />
        <p className="text-xs text-white/40 tracking-wider font-mono">IQUE STRUCTURAL ARCHITECTURE — 2026</p>
      </motion.div>

      <motion.div 
        style={{ x: textLeft }} 
        className="absolute -bottom-10 left-0 text-[12vw] font-serif font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
      >
        WORLD OF IQUE
      </motion.div>
    </section>
  );
}

/* ==========================================================================
   4. SERVICES BENTO GRID (TRANSITION INTO ALPINE WHITE CANVAS BACKGROUND)
   ========================================================================== */
function ServicesBento() {
  const serviceItems = [
    { icon: <Layers size={20} />, title: "Structural Scaling", desc: "Formulating enterprise scaling metrics designed to endure modern macroeconomic volatility." },
    { icon: <Compass size={20} />, title: "Brand Identity Design", desc: "Premium high-grade narratives that elevate standard operations into global identities." },
    { icon: <Cpu size={20} />, title: "Technical Architecture", desc: "Enterprise cloud arrays and computational engineering deployed with absolute data integrity." },
    { icon: <TrendingUp size={20} />, title: "Capital Optimization", desc: "Eliminating operational friction to reposition layout deployment overhead into active velocity." }
  ];

  return (
    <section className="py-32 bg-[#f4f4f3] text-[#121214] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_CUBIC }}
          className="mb-20 max-w-xl space-y-4"
        >
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">Core Vectors</div>
          <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-tight text-black">Delivering global reach without asset bloat.</h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {serviceItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeInUpVariant}
              whileHover={{ y: -6, boxShadow: "0px 30px 60px rgba(0,0,0,0.06)" }}
              className="p-10 bg-white rounded-md border border-black/5 hover:border-black/10 transition-all duration-300 flex flex-col justify-between h-72 group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif text-black group-hover:text-neutral-700 transition-colors">{item.title}</h3>
                <p className="text-sm text-black/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================================================
   5. PORTFOLIO SHOWCASE (CRITICAL TIMING LOCKED SCROLLER BLOCK)
   ========================================================================== */
function HorizontalPortfolio() {
  const targetRef = useRef(null);
  const productionCases = [
    { num: "01", name: "The Nordics Integration", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", desc: "A sovereign logistics matrix transition across three maritime territories." },
    { num: "02", name: "Apex Venture Lab", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200", desc: "Infrastructural system architecture overhaul for global capital assets." },
    { num: "03", name: "Aether Cryptographic", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", desc: "Redefining structural interface accessibility layers for high-throughput nodes." }
  ];

  // Make the section height proportional to the number of slides so vertical scroll maps to horizontal motion
  const sectionHeightVh = productionCases.length * 100; // e.g., 3 slides -> 300vh

  // Create a scroll-linked transform that moves from 0 to negative (N-1)*100vw
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(productionCases.length - 1) * 100}vw`]);

  return (
    <div ref={targetRef} className="relative bg-[#121214]" style={{ height: `${sectionHeightVh}vh` }}>
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        {/* Absolute Header Anchors */}
        <div className="absolute left-6 md:left-12 top-12 z-20 pointer-events-none">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Case Exhibits</div>
          <h2 className="text-2xl font-serif text-white">Selected Implementations</h2>
        </div>

        {/* Horizontal scroller driven by `x` */}
        <motion.div
          style={{ x }}
          className="flex items-center gap-12 pl-6 md:pl-12 pr-[20vw] will-change-transform"
        >
          {productionCases.map((project, idx) => (
            <div key={idx} className="w-[85vw] sm:w-[65vw] md:w-[45vw] flex-shrink-0 flex flex-col justify-center space-y-6">
              <div className="aspect-[16/10] bg-neutral-900 overflow-hidden relative rounded-sm group shadow-xl">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: EASE_CUBIC }}
                  className="absolute inset-0 bg-cover bg-center filter grayscale contrast-115"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:opacity-10 transition-opacity pointer-events-none" />
                <span className="absolute bottom-4 left-4 font-serif text-3xl text-white/80">{project.num}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif text-white">{project.name}</h3>
                <p className="text-sm text-white/50 font-light max-w-md">{project.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

/* ==========================================================================
   6. METRICS SECTION (TRANSITIONS INTO CRISP OFF-WHITE CANVAS CONTRAST)
   ========================================================================== */
function MetricsSection() {
  const metrics = [
    { rate: "124%", label: "Average Capital Return Rate" },
    { rate: "$1.4B", label: "Managed Enterprise Assets" },
    { rate: "03", label: "Global Institutional Hubs" }
  ];

  return (
    <section className="py-32 bg-[#f4f4f3] text-[#121214] border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {metrics.map((metric, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: EASE_CUBIC }}
            className="space-y-2 border-t border-black/10 pt-6 group"
          >
            <motion.div className="text-4xl md:text-6xl font-serif font-light tracking-tight text-black overflow-hidden">
              <motion.span className="inline-block" whileInView={{ y: ["20%", "0%"] }}>
                {metric.rate}
              </motion.span>
            </motion.div>
            <div className="text-[10px] uppercase tracking-widest text-black/40 font-mono">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ==========================================================================
   7. CTA & FOOTER SECTIONS (CLOSES RICH DARK CANVAS)
   ========================================================================== */
function CTASection() {
  return (
    <section className="py-40 bg-gradient-to-b from-[#0b0b0c] to-[#080809] text-center px-6 relative">
      <div className="max-w-2xl mx-auto space-y-8">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_CUBIC }}
          className="text-4xl md:text-6xl font-serif font-light text-white tracking-tight"
        >
          Let’s build something <br /><span className="italic text-neutral-400">timeless</span>.
        </motion.h2>
        <p className="text-white/50 text-sm font-light max-w-sm mx-auto leading-relaxed">
          Inquiries regarding institutional structural orchestration, global deployment blueprints, or enterprise scaling.
        </p>
        <div className="pt-4">
          <motion.button 
            whileHover={{ scale: 1.03, backgroundColor: "#e4e4e5" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black text-xs uppercase tracking-widest font-semibold px-9 py-4.5 rounded-none transition-colors shadow-2xl"
          >
            Initiate Consultation Brief
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = {
    expeditions: ['Selected Artifacts', 'Strategic Blueprint', 'Operational Matrix', 'Media Archives'],
    governance: ['Privacy Charter', 'Terms of Engagement', 'Environmental Mandate', 'Institutional Framework'],
    hubs: ['Zurich Office', 'Tokyo Nexus', 'London Studio']
  };

  return (
    <footer className="bg-[#080809] text-white/40 text-[11px] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 pb-20 border-b border-white/5">
          
          <div className="col-span-2 md:col-span-5 space-y-6">
            <div className="text-white tracking-tighter text-3xl font-black lowercase select-none group cursor-pointer">
              world of ique
              <span className="text-[9px] tracking-[0.3em] block font-light uppercase opacity-40 mt-1 transition-all group-hover:text-white">
                global architectural syndicate
              </span>
            </div>
            <p className="text-white/40 font-light leading-relaxed max-w-sm text-xs font-serif italic">
              "Synchronizing physical scale, raw material logic, and operational architecture to construct legacy corporate networks."
            </p>
            <div className="flex items-center space-x-2 text-[10px] text-white/30 font-mono">
              <Globe size={11} className="text-white/50" />
              <span>HQ Coordinates: 47.3769° N, 8.5417° E</span>
            </div>
          </div>

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

      <div className="absolute -bottom-16 -right-10 text-[15vw] font-serif font-black text-white/[0.01] select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter">
        IQUE
      </div>
    </footer>
  );
}