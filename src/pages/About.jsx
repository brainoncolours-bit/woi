import React, { useState, useEffect, useRef } from 'react';
import { Menu, Sun, Moon, ArrowRight, Globe, Eye, Landmark } from 'lucide-react';

const AboutUsPage = ({ isDarkMode }) => {
  const [scrollY, setScrollY] = useState(0);
  
  // Ref tracking for parallax sections
  const heroRef = useRef(null);
  const coreRef = useRef(null);
  const trackRef = useRef(null);

  // Intersection visibility states
  const [coreVisible, setCoreVisible] = useState(false);
  const [trackVisible, setTrackVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Threshold setups for interactive scroll triggering
    const observerOptions = { threshold: 0.12 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === coreRef.current) {
          setCoreVisible(entry.isIntersecting);
        }
        if (entry.target === trackRef.current) {
          setTrackVisible(entry.isIntersecting);
        }
      });
    }, observerOptions);

    if (coreRef.current) observer.observe(coreRef.current);
    if (trackRef.current) observer.observe(trackRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`w-full font-sans transition-colors duration-700 overflow-clip relative`}>
      
      {/* 1. CINEMATIC SCROLL PARALLAX HERO */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className={`absolute inset-0 bg-cover bg-center will-change-transform transition-all duration-300 ${isDarkMode ? 'mix-blend-lighten' : 'mix-blend-multiply'}`}
          style={{ 
            backgroundImage: `url('/banner2.png')`,
            transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(${1 + scrollY * 0.0005})`,
            filter: `blur(${Math.min(scrollY * 0.02, 8)}px)`,
            opacity: Math.max(1 - scrollY * 0.002, 0.15)
          }}
        />
        <div className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? 'bg-gradient-to-b from-stone-950/20 via-stone-950/60 to-stone-950' : 'bg-gradient-to-b from-stone-50/10 via-stone-50/40 to-stone-50'}`} />

        <div 
          className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-6 will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
        >
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tighter leading-none">
            Ecosystem <span className="font-serif italic font-normal">Sovereignty</span>
          </h1>
          <p className={`text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
            WOI is a global ecosystem development company headquartered in Dubai, focused on creating, developing, and managing entrepreneurial, innovation, investment, and industry ecosystems. We build infrastructure, communities, platforms and partnerships that enable sustainable economic growth and innovation.
          </p>
          <div className="mt-6 text-sm font-mono text-stone-400">
            <div>Headquarters: Dubai</div>
            <div className="mt-1 italic">Building Better Worlds Through Better Ecosystems</div>
          </div>
         
        </div>
      </section>

      {/* 2. CORE PURPOSE SECTION (Dual Parallax Stagger Grid) */}
      <section 
        ref={coreRef}
        className={`py-32 px-6 md:px-12 border-t relative z-20 transition-colors duration-500 ${isDarkMode ? 'border-white/5 bg-stone-950' : 'border-black/5 bg-stone-100/50'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Eye,
                title: "Vision",
                desc: "To become a global leader in ecosystem development by building innovation-driven economies, industries, and communities across the world.",
                speed: 15
              },
              {
                icon: Globe,
                title: "Mission",
                desc: "Develop world-class entrepreneurial ecosystems, support innovation and venture creation, build infrastructure and connect founders, investors, institutions and governments.",
                speed: -25
              },
              {
                icon: Landmark,
                title: "Philosophy",
                desc: "Great companies are built by great ecosystems — combining infrastructure, talent, capital, education and community to enable lasting impact.",
                speed: 40
              }
            ].map((pillar, idx) => {
              // Calculate subtle specific offsets for each card based on scroll position
              const yOffset = coreVisible ? (scrollY - (coreRef.current?.offsetTop || 0)) * (pillar.speed * 0.001) : 0;
              
              return (
                <div 
                  key={idx} 
                  style={{ 
                    transform: `translate3d(0, ${yOffset}px, 0)`,
                    transition: 'transform 0.2s cubic-bezier(0.1, 0.8, 0.2, 1)'
                  }}
                  className={`p-10 rounded-2xl border backdrop-blur-md relative overflow-hidden group ${
                    isDarkMode 
                      ? 'bg-stone-900/20 border-white/5 hover:border-white/10 hover:bg-stone-900/60' 
                      : 'bg-white border-black/5 hover:border-black/10 hover:shadow-2xl'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-stone-900 text-amber-400 border border-white/5' : 'bg-stone-100 text-indigo-600 border border-black/5'}`}>
                    <pillar.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif italic mb-4 font-normal tracking-tight">{pillar.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>{pillar.desc}</p>
                  
                  {/* Subtle decorative edge tracer */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${isDarkMode ? 'bg-amber-400/50' : 'bg-indigo-600/50'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PARALLAX HORIZON INTERSTITIAL (Image Splendor Split) */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')`,
            transform: `translate3d(0, ${(scrollY - (coreRef.current?.offsetTop || 0)) * 0.15}px, 0)`,
            filter: 'grayscale(1)'
          }}
        />
        <div className={`absolute inset-0 opacity-80 ${isDarkMode ? 'bg-stone-950' : 'bg-stone-50'}`} />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 space-y-4">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight font-serif italic">"Precision isn't secondary—it's foundational."</h2>
          <p className={`text-xs uppercase tracking-[0.25em] ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>IQue Operations Standard</p>
        </div>
      </section>

      {/* 4. EVOLUTION ROADMAP (Interactive Scrolling Track Lines) */}
      <section ref={trackRef} className="py-32 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-28 space-y-4">
          <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>Ecosystem Progression</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">Ecosystem Milestones</h2>
        </div>

        <div className="space-y-24 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-stone-500/10">
          {[
            { year: "2022", title: "Blueprint Architecture", desc: "Launched IQue Ventures foundations to directly solve structural misalignment tracks hurting cross-border startup ecosystems." },
            { year: "2024", title: "Liquid Asset Execution", desc: "Successfully integrated real-time capital routing and sandbox compliance pathways across 15 global economic sectors." },
            { year: "2026", title: "Sovereign Framework Nodes", desc: "Expanded core laboratory infrastructure networks, validating a continuous ecosystem founder structural success parity of 94%." }
          ].map((milestone, idx) => {
            // Alternating entry animations triggered as scroll advances
            const activeScroll = trackVisible ? Math.max(0, scrollY - (trackRef.current?.offsetTop || 0) + 200) : 0;
            const itemTriggered = activeScroll > idx * 220;

            return (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-start md:even:flex-row-reverse group transition-all duration-1000 transform ${
                  itemTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                {/* Central Track Orb Indicator */}
                <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-4 transition-all duration-500 ${
                  itemTriggered 
                    ? (isDarkMode ? 'bg-amber-400 border-stone-950 scale-125' : 'bg-indigo-600 border-stone-50 scale-125') 
                    : 'bg-stone-700 border-transparent'
                }`} />
                
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:group-odd:pr-16 md:group-even:pl-16 md:text-right md:group-even:text-left">
                  <span className={`text-3xl font-serif font-bold italic tracking-wide block mb-1 transition-colors ${itemTriggered ? (isDarkMode ? 'text-amber-400' : 'text-indigo-600') : 'text-stone-500'}`}>
                    {milestone.year}
                  </span>
                  <h4 className="text-xl font-medium tracking-tight mb-2">{milestone.title}</h4>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                    {milestone.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. CALL TO ACTION ACCELERATOR AREA */}
      <section className={`py-32 text-center relative overflow-hidden border-t ${isDarkMode ? 'border-white/5 bg-stone-900/30' : 'border-black/5 bg-stone-200/40'}`}>
        <div className="max-w-3xl mx-auto px-6 space-y-8 relative z-10">
          <h2 className="text-3xl md:text-6xl font-light tracking-tight">
            Connect with our <span className="font-serif italic block mt-1">Management Core</span>
          </h2>
          <p className={`text-sm md:text-base max-w-xl mx-auto leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
            Review strategic architecture documents, asset pooling arrangements, and international ecosystem expansion blueprints.
          </p>
          <div className="pt-4">
            <button className={`inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 rounded-full border transition-all duration-300 transform hover:scale-105 active:scale-95 group ${
              isDarkMode 
                ? 'bg-white text-stone-950 border-white hover:bg-transparent hover:text-white' 
                : 'bg-stone-950 text-white border-stone-950 hover:bg-transparent hover:text-stone-900'
            }`}>
              <span>Apply for Ecosystem Entry</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-12 px-6 md:px-12 text-center text-xs tracking-wider border-t relative z-10 ${isDarkMode ? 'border-white/5 text-stone-500' : 'border-black/5 text-stone-400'}`}>
        <p>© 2026 World of IQue Ecosystem. Crafted with pristine structural design.</p>
      </footer>

    </div>
  );
};

export default AboutUsPage;