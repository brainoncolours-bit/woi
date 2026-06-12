import React, { useRef } from 'react';
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
        <span className="text-orange-500 font-mono tracking-widest uppercase text-xs">0{index} / Selected Work</span>
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
    { title: "Hyperion Ecosystem", tags: "Brand Strategy, Visual Architecture", imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" },
    { title: "Aether Platform", tags: "Interactive Interface, Engine Design", imgUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4" },
    { title: "Chronos Editorial", tags: "Creative Direction, Spatial Design", imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { title: "Vortex Lab", tags: "Product Positioning, Experiences", imgUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853" }
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
        style={{ backgroundImage: "url(public/banner4.png)" }}>
          <div className="flex justify-between items-center">
            <span className="font-bold tracking-tighter text-xl">STUDIO_M.</span>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase border border-neutral-800 rounded-full px-4 py-1.5 bg-black/20">
              Active '26 Portfolio
            </span>
          </div>
          
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
            <h2 className="text-orange-500 font-mono font-bold uppercase tracking-widest text-xs mb-3">Portfolio</h2>
            <p className="text-3xl md:text-5xl font-bold tracking-tight">Case Studies</p>
          </div>
          <p className="text-neutral-500 max-w-xs text-sm md:text-base font-light leading-relaxed">
            A precise selection exploring the interplay of brand value across physical landscapes and functional tech.
          </p>
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

      {/* SECTION 3: SERVICES */}
      <FadeInSection className="border-t border-neutral-900 mt-12">
        <div className="mb-20">
          <h2 className="text-orange-500 font-mono font-bold uppercase tracking-widest text-xs mb-3">Capabilities</h2>
          <p className="text-3xl md:text-5xl font-bold tracking-tight">Strategic Foundations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {[
            { title: 'Brand Identity', desc: 'Distilling complex market behaviors into concrete, flexible brand languages ready for global scale.' },
            { title: 'Digital Architectures', desc: 'Architecting clean front-end environments built carefully with interactive balance, focus, and speed.' },
            { title: 'Creative Consulting', desc: 'Leading cross-functional design initiatives across internal product teams to synchronize system rollouts.' }
          ].map((item, i) => (
            <div key={i} className="border-l border-neutral-800 pl-6 py-2 hover:border-orange-500 transition-colors duration-500 group">
              <span className="text-neutral-600 group-hover:text-orange-500 font-mono text-xs transition-colors duration-300">0{i+1} // MODULE</span>
              <h4 className="text-2xl font-bold mt-3 tracking-tight">{item.title}</h4>
              <p className="text-neutral-500 mt-4 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
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

    </div>
  );
}