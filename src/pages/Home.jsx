import React, { useRef , useEffect } from 'react';
import { Link } from 'react-router-dom';
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

      <HeroSection isDarkMode={isDarkMode} />
      <ParallaxPhilosophy isDarkMode={isDarkMode} />
      <ServicesBento isDarkMode={isDarkMode} />
      <HorizontalPortfolio isDarkMode={isDarkMode} />
      <MetricsSection isDarkMode={isDarkMode} />
      {/* <Footer isDarkMode={isDarkMode} /> */}
    </div>
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
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none scale-105"
        style={{ 
          backgroundImage: "url(/banner.png)",  
          y: bgY
        }}
      />

    <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/60 to-black/10" />

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
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal font-serif text-white leading-tight tracking-tight overflow-hidden">
          <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: EASE_CUBIC }} className="block">Building Better Worlds</motion.span>
          <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: EASE_CUBIC }} className="block">Through Better Ecosystems</motion.span>
        </h1>

        <motion.p variants={fadeInUpVariant} className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-lg pt-4">
          WOI is a global ecosystem development company headquartered in Dubai, building entrepreneurial, innovation, investment, and industry ecosystems for the future of economies, cities, and communities. We bring together founders, investors, institutions, corporates, governments, talent, infrastructure, and capital to build environments where innovation can thrive.
        </motion.p>

        <div className="mt-6 flex items-center space-x-4">
          <Link to="/blog" className="inline-flex items-center bg-white text-black px-6 py-3 rounded-md font-medium tracking-widest text-xs">Explore WOI</Link>
          <Link to="/contact" className="inline-flex items-center border border-white text-white px-6 py-3 rounded-md font-medium tracking-widest text-xs">Partner With Us</Link>
        </div>

      </motion.div>

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
    <section ref={containerRef} className="py-40 md:py-56 bg-[#0f0f11] relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div style={{ scale }} className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-10">

        <div className="flex flex-col items-center gap-2">
          <p className="text-[clamp(1.5rem,4.5vw,4.5rem)] font-serif font-light text-white/90 leading-[1.2]">
            "The world does not need
          </p>
          <p className="text-[clamp(1.5rem,4.5vw,4.5rem)] font-serif font-light leading-[1.2]">
            more{' '}
            <span className="italic text-white/40">isolated startups.</span>
          </p>
          <p className="text-[clamp(1.5rem,4.5vw,4.5rem)] font-serif font-light text-white/90 leading-[1.2]">
            It needs better{' '}
            <span className="text-amber-300 not-italic">ecosystems</span>."
          </p>
        </div>

      </motion.div>

      <motion.div
        style={{ x: textLeft }}
        className="absolute -bottom-10 left-0 text-[12vw] font-serif font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
      >
        WORLD OF IQUE
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    </section>
  );
}

/* ==========================================================================
   4. SERVICES BENTO GRID (TRANSITION INTO ALPINE WHITE CANVAS BACKGROUND)
   ========================================================================== */

function ServicesBento() {
  const serviceItems = [
    { icon: <Layers size={20} />, title: "Ecosystem Development", desc: "Designing and building startup, innovation, investment, and industry ecosystems.", image: "/Ecosystem development card image.png" },
    { icon: <Compass size={20} />, title: "Venture Building", desc: "Supporting the creation, growth, and scaling of startups and emerging ventures.", image: "/Venture Building image.png" },
    { icon: <Cpu size={20} />, title: "Infrastructure Development", desc: "Developing startup parks, innovation hubs, centers of excellence, and ecosystem spaces.", image: "/Infrastructure Development.png" },
    { icon: <TrendingUp size={20} />, title: "Community Building", desc: "Creating founder, investor, creator, student, and industry communities and platforms.", image: "/Community building.png" },
    { icon: <Globe size={20} />, title: "Education & Talent", desc: "Delivering entrepreneurship, innovation, leadership and future-skills programs.", image: "/Education.png" },
    { icon: <ArrowUpRight size={20} />, title: "Capital & Investment", desc: "Facilitating access to investors, venture capital, angel networks, and strategic partners.", image: "/Capital & Investment.png" }
  ];

  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const GRID = 48;
    const YELLOW = "rgba(245,197,24,";

    let W, H, frame = 0;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, W, H);

      const t = frame * 0.012;
      const cols = Math.ceil(W / GRID) + 1;
      const rows = Math.ceil(H / GRID) + 1;

      // Animated focal point — slow drift across the canvas
      const fx = W * 0.5 + Math.sin(t * 0.4) * W * 0.28;
      const fy = H * 0.5 + Math.cos(t * 0.3) * H * 0.22;
      const FADE_RADIUS = Math.min(W, H) * 0.55;

      // Horizontal lines
      for (let r = 0; r <= rows; r++) {
        const y = r * GRID;
        const dy = y - fy;
        const closestX = Math.max(0, Math.min(W, fx));
        const d = Math.sqrt((closestX - fx) * (closestX - fx) + dy * dy);
        const alpha = Math.max(0, 1 - d / FADE_RADIUS) * 0.65;

        if (alpha > 0.01) {
          const g = ctx.createLinearGradient(Math.max(0, fx - FADE_RADIUS), y, Math.min(W, fx + FADE_RADIUS), y);
          g.addColorStop(0, YELLOW + "0)");
          g.addColorStop(0.35, YELLOW + alpha * 0.25 + ")");
          g.addColorStop(0.5, YELLOW + alpha * 0.8 + ")");
          g.addColorStop(0.65, YELLOW + alpha * 0.25 + ")");
          g.addColorStop(1, YELLOW + "0)");
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y);
          ctx.strokeStyle = g; ctx.lineWidth = 1; ctx.stroke();
        } else {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y);
          ctx.strokeStyle = "rgba(245,197,24,0.04)"; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }

      // Vertical lines
      for (let c = 0; c <= cols; c++) {
        const x = c * GRID;
        const dx = x - fx;
        const closestY = Math.max(0, Math.min(H, fy));
        const d = Math.sqrt(dx * dx + (closestY - fy) * (closestY - fy));
        const alpha = Math.max(0, 1 - d / FADE_RADIUS) * 0.65;

        if (alpha > 0.01) {
          const g = ctx.createLinearGradient(x, Math.max(0, fy - FADE_RADIUS), x, Math.min(H, fy + FADE_RADIUS));
          g.addColorStop(0, YELLOW + "0)");
          g.addColorStop(0.35, YELLOW + alpha * 0.25 + ")");
          g.addColorStop(0.5, YELLOW + alpha * 0.8 + ")");
          g.addColorStop(0.65, YELLOW + alpha * 0.25 + ")");
          g.addColorStop(1, YELLOW + "0)");
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H);
          ctx.strokeStyle = g; ctx.lineWidth = 1; ctx.stroke();
        } else {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H);
          ctx.strokeStyle = "rgba(245,197,24,0.04)"; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }

      // Slow ambient glow at focal point
      const glowAlpha = 0.06 + Math.sin(t * 0.7) * 0.02;
      const glow = ctx.createRadialGradient(fx, fy, 0, fx, fy, FADE_RADIUS * 0.7);
      glow.addColorStop(0, `rgba(245,197,24,${glowAlpha})`);
      glow.addColorStop(0.5, `rgba(245,197,24,${glowAlpha * 0.4})`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath(); ctx.arc(fx, fy, FADE_RADIUS * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = glow; ctx.fill();

      // Subtle intersection dots near focal point
      const nc = Math.round(fx / GRID);
      const nr = Math.round(fy / GRID);
      for (let dc = -3; dc <= 3; dc++) {
        for (let dr = -3; dr <= 3; dr++) {
          const ix = (nc + dc) * GRID;
          const iy = (nr + dr) * GRID;
          const dist = Math.sqrt((ix - fx) ** 2 + (iy - fy) ** 2);
          if (dist < FADE_RADIUS * 0.45) {
            const dotAlpha = (1 - dist / (FADE_RADIUS * 0.45)) * 0.5;
            const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + dc * 0.8 + dr * 0.8);
            const r = 1.5 + pulse * 2;
            const dg = ctx.createRadialGradient(ix, iy, 0, ix, iy, r + 4);
            dg.addColorStop(0, YELLOW + dotAlpha * pulse + ")");
            dg.addColorStop(1, YELLOW + "0)");
            ctx.beginPath(); ctx.arc(ix, iy, r + 4, 0, Math.PI * 2);
            ctx.fillStyle = dg; ctx.fill();
          }
        }
      }

      frame++;
      animFrameRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <section
      className="py-32 transition-colors duration-500 relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          display: "block",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_CUBIC }}
          className="mb-20 max-w-xl space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-tight text-white">
            We build the systems behind great companies, industries and economies.
          </h2>
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
              whileHover={{ y: -6, boxShadow: "0px 30px 60px rgba(0,0,0,0.18)" }}
              className="rounded-xl overflow-hidden relative h-72 group transition-all duration-300 border border-white/10 hover:border-white/20"
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.72) 70%, rgba(0,0,0,0.88) 100%)",
                }}
              />
              <div className="absolute top-5 left-5 z-20">
                <div className="w-11 h-11 rounded-full border border-white/50 bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-6 pt-8">
                <h3 className="text-xl font-serif text-white mb-1 leading-snug" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 font-light leading-relaxed" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
                  {item.desc}
                </p>
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
  const scrollerRef = useRef(null);
  const productionCases = [
    { num: "01", name: "WOI India", img: "/banner10.png", desc: "A national innovation and entrepreneurship ecosystem connecting India's emerging startup hubs, talent, and investment networks." },
    { num: "02", name: "WOI Startup Nation", img: "/banner6.png", desc: "A national-scale entrepreneurship and startup ecosystem." },
    { num: "03", name: "WOI Health City", img: "/banner2.png", desc: "A focused ecosystem for healthcare, wellness, biotechnology, health-tech, and medical innovation." },
  ];

  const sectionHeightVh = productionCases.length * 100;

  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });

  const rawX = useTransform(scrollYProgress, (value) => {
    if (!scrollerRef.current) return 0;
    const maxTranslate = scrollerRef.current.scrollWidth - window.innerWidth;
    return -value * Math.max(0, maxTranslate);
  });
  const x = useSpring(rawX, { stiffness: 120, damping: 30 });

  return (
    <div ref={targetRef} className="relative bg-[#121214]" style={{ height: '100vh' }}>
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        <div className="absolute left-6 md:left-12 top-12 z-20 pointer-events-none">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Global Ecosystem Network</div>
          <h2 className="text-2xl font-serif text-white">Building Across Borders</h2>
        </div>

        <motion.div
          ref={scrollerRef}
          style={{ x }}
          className="flex items-center gap-12 pl-6 md:pl-12 pr-[20vw] will-change-transform"
        >
          {productionCases.map((project, idx) => (
            <div key={idx} className="w-[85vw] sm:w-[65vw] md:w-[45vw] flex-shrink-0 flex flex-col justify-center space-y-6">
              <div className="aspect-[16/10] bg-neutral-900 overflow-hidden relative rounded-sm group shadow-xl">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: EASE_CUBIC }}
                  className="absolute inset-0 bg-cover bg-center"
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
    { rate: "1000+", label: "Startups" },
    { rate: "10,000", label: "HWI" },
    { rate: "3+", label: "Countries" }
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
            className="flex flex-col items-center text-center border-t-2 border-black/25 pt-8"
          >
            <motion.div className="text-6xl md:text-8xl font-serif font-light tracking-tight text-black overflow-hidden">
              <motion.span
                className="inline-block"
                whileInView={{ y: ["20%", "0%"] }}
              >
                {metric.rate}
              </motion.span>
            </motion.div>
            <div className="mt-5 text-base md:text-lg uppercase tracking-[0.25em] text-black font-mono font-bold">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


// function Footer() {
//   const footerLinks = {
//     expeditions: ['Selected Artifacts', 'Strategic Blueprint', 'Operational Matrix', 'Media Archives'],
//     governance: ['Privacy Charter', 'Terms of Engagement', 'Environmental Mandate', 'Institutional Framework'],
//     hubs: ['Zurich Office', 'Tokyo Nexus', 'London Studio']
//   };

//   return (
//     <footer className="bg-[#080809] text-white/40 text-[11px] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-2 md:grid-cols-12 gap-12 pb-20 border-b border-white/5">
          
//           <div className="col-span-2 md:col-span-5 space-y-6">
//             <div className="text-white tracking-tighter text-3xl font-black lowercase select-none group cursor-pointer">
//               world of ique
//               <span className="text-[9px] tracking-[0.3em] block font-light uppercase opacity-40 mt-1 transition-all group-hover:text-white">
//                 global architectural syndicate
//               </span>
//             </div>
//             <p className="text-white/40 font-light leading-relaxed max-w-sm text-xs font-serif italic">
//               "Synchronizing physical scale, raw material logic, and operational architecture to construct legacy corporate networks."
//             </p>
//             <div className="flex items-center space-x-2 text-[10px] text-white/30 font-mono">
//               <Globe size={11} className="text-white/50" />
//               <span>HQ Coordinates: 47.3769° N, 8.5417° E</span>
//             </div>
//           </div>

//           <div className="col-span-1 md:col-span-2 md:col-start-7 space-y-4">
//             <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">Expeditions</div>
//             <ul className="space-y-2.5 font-light">
//               {footerLinks.expeditions.map((item, idx) => (
//                 <li key={idx}>
//                   <motion.a 
//                     href="#" 
//                     whileHover={{ x: 4, color: '#ffffff' }}
//                     transition={{ duration: 0.3, ease: EASE_CUBIC }}
//                     className="hover:text-white transition-colors block"
//                   >
//                     {item}
//                   </motion.a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="col-span-1 md:col-span-2 space-y-4">
//             <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">Governance</div>
//             <ul className="space-y-2.5 font-light">
//               {footerLinks.governance.map((item, idx) => (
//                 <li key={idx}>
//                   <motion.a 
//                     href="#" 
//                     whileHover={{ x: 4, color: '#ffffff' }}
//                     transition={{ duration: 0.3, ease: EASE_CUBIC }}
//                     className="hover:text-white transition-colors block"
//                   >
//                     {item}
//                   </motion.a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="col-span-2 md:col-span-2 space-y-4">
//             <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">Global Hubs</div>
//             <ul className="space-y-2.5 font-light">
//               {footerLinks.hubs.map((item, idx) => (
//                 <li key={idx} className="flex items-center space-x-1.5 group cursor-pointer text-white/40 hover:text-white transition-colors">
//                   <span>{item}</span>
//                   <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transform translate-y-0.5 group-hover:-translate-y-0 group-hover:translate-x-0.5 transition-all" />
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>

//         <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-mono text-[10px] text-white/20">
//           <div className="tracking-wide">
//             © 2026 World of Ique Inc. All operational rights reserved. 
//           </div>
//           <div className="flex space-x-6 tracking-wider">
//             <span>INDEX REVISION: 26.4.0</span>
//             <span className="text-white/40 animate-pulse">● ALL SYSTEMS OPERATIONAL</span>
//           </div>
//         </div>

//       </div>

//       <div className="absolute -bottom-16 -right-10 text-[15vw] font-serif font-black text-white/[0.01] select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter">
//         IQUE
//       </div>
//     </footer>
//   );
// }
