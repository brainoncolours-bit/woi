import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Layers, Compass, Cpu, TrendingUp, Globe, ArrowUpRight } from 'lucide-react';
import HorizontalPortfolio from '../components/HorizontalPortfolio';

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
    <div className={`font-sans antialiased selection:bg-[#ffffff] selection:text-[#0b0b0c] ${isDarkMode ? 'bg-[#0b0b0c] text-[#f5f5f7]' : 'bg-stone-50 text-stone-900'}`}>
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neutral-500 via-white to-neutral-500 origin-left z-50" style={{ scaleX }} />

      <HeroSection />
      <ParallaxPhilosophy />
      <ServicesBento />
      <HorizontalPortfolio />
      <MetricsSection />
    </div>
  );
}

function HeroSection() {
  const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const fullText = "WOI is a global ecosystem development company headquartered in Dubai, building entrepreneurial, innovation, investment, and industry ecosystems for the future of economies, cities, and communities. We bring together founders, investors, institutions, corporates, governments, talent, infrastructure, and capital to build environments where innovation can thrive.";

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
        />

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal font-serif text-white leading-tight tracking-tight overflow-hidden">
          <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: EASE_CUBIC }} className="block">Building Better Worlds</motion.span>
          <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: EASE_CUBIC }} className="block">Through Better Ecosystems</motion.span>
        </h1>

        <motion.p variants={fadeInUpVariant} className="md:hidden text-sm text-white/60 font-light leading-relaxed max-w-lg pt-4">
          {isExpanded
            ? fullText
            : "WOI is a global ecosystem development company headquartered in Dubai, building entrepreneurial,"}
          {!isExpanded && (
            <>
              {"... "}
              <button
                onClick={() => setIsExpanded(true)}
                className="text-white/90 underline underline-offset-2 font-medium"
              >
                read more
              </button>
            </>
          )}
        </motion.p>

        <motion.p variants={fadeInUpVariant} className="hidden md:block text-base text-white/60 font-light leading-relaxed max-w-lg pt-4">
          {fullText}
        </motion.p>

        <div className="mt-6 flex items-center space-x-4">
          <Link to="/blog" className="inline-flex items-center bg-white text-black px-6 py-3 rounded-md font-medium tracking-widest text-xs">Explore WOI</Link>
          <Link to="/contact" className="inline-flex items-center border border-white text-white px-6 py-3 rounded-md font-medium tracking-widest text-xs">Partner With Us</Link>
        </div>
      </motion.div>
    </section>
  );
}

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

      const fx = W * 0.5 + Math.sin(t * 0.4) * W * 0.28;
      const fy = H * 0.5 + Math.cos(t * 0.3) * H * 0.22;
      const FADE_RADIUS = Math.min(W, H) * 0.55;

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

      const glowAlpha = 0.06 + Math.sin(t * 0.7) * 0.02;
      const glow = ctx.createRadialGradient(fx, fy, 0, fx, fy, FADE_RADIUS * 0.7);
      glow.addColorStop(0, `rgba(245,197,24,${glowAlpha})`);
      glow.addColorStop(0.5, `rgba(245,197,24,${glowAlpha * 0.4})`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath(); ctx.arc(fx, fy, FADE_RADIUS * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = glow; ctx.fill();

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

function MetricsSection() {
  const metrics = [
    { rate: "1000+", label: "Startups" },
    { rate: "10,000", label: "HNI" },
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
