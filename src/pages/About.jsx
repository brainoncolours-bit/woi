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
          className={`absolute inset-0 bg-cover bg-center ${isDarkMode ? 'mix-blend-lighten' : 'mix-blend-multiply'}`}
          style={{ 
            backgroundImage: `url('/banner2.png')`,
          }}
        />
        <div className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? 'bg-gradient-to-b from-stone-950/20 via-stone-950/60 to-stone-950' : 'bg-gradient-to-b from-stone-50/10 via-stone-50/40 to-stone-50'}`} />

        <div 
          className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-6"
        >
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tighter leading-none">
            Ecosystem <span className="font-serif italic font-normal">Sovereignty</span>
          </h1>
          <p className={`text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
            WOI is a global ecosystem development company headquartered in Dubai, focused on creating, developing, and managing entrepreneurial, innovation, investment, and industry ecosystems. We build infrastructure, communities, platforms and partnerships that enable sustainable economic growth and innovation.
          </p>
          
         
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
          <h2 className="text-3xl md:text-5xl font-light tracking-tight font-serif italic">"We don't just <span className={`${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>support</span> startups. We build the <span className={`${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>ecosystems</span> where startups, industries, and 
            economies can <span className={`${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>grow</span>."</h2>
        </div>
      </section>

      {/* 4. EVOLUTION ROADMAP (Interactive Scrolling Track Lines) */}
<section ref={trackRef} className="py-32 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
  <div className="text-center max-w-2xl mx-auto mb-28 space-y-4">
    <h2 className="text-4xl md:text-5xl font-light tracking-tight">Our Journey</h2>
    <p className={`text-sm font-light leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
      From a founding vision to a growing global ecosystem network.
    </p>
  </div>

  <div className="space-y-24 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-stone-500/10">
    {[
      {
        year: "2022",
        title: "The Vision Begins",
        desc: "WOI was founded with a clear mission — to build entrepreneurial, innovation, investment, and industry ecosystems that enable sustainable economic growth across cities, regions, and nations."
      },
      {
        year: "2023",
        title: "WOI India — Pilot Ecosystem",
        desc: "WOI India was established as the pilot ecosystem initiative in Bengaluru, bringing together founders, investors, institutions, and ecosystem partners through interconnected platforms and programs."
      },
      {
        year: "2024",
        title: "Expanding the Network",
        desc: "WOI launched ecosystem initiatives across the UAE, Singapore, Malaysia, Mauritius, and Rwanda — building a global network of connected entrepreneurship and innovation ecosystems."
      },
      {
        year: "2025",
        title: "Building the Infrastructure",
        desc: "WOI deepened its ecosystem infrastructure through venture studios, startup schools, angel networks, investor communities, and innovation hubs designed to support founders at every stage."
      },
      {
        year: "2026",
        title: "A Global Ecosystem Company",
        desc: "Today WOI operates across multiple markets, working with governments, investors, institutions, and entrepreneurs to design and build the systems behind great companies, industries, and economies."
      }
    ].map((milestone, idx) => {
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
            <span className={`text-3xl font-serif font-bold italic tracking-wide block mb-1 transition-colors ${
              itemTriggered ? (isDarkMode ? 'text-amber-400' : 'text-indigo-600') : 'text-stone-500'
            }`}>
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

      {/* ============================================================
    SECTION 5: GLOBAL EXPANSION
    Insert this block before the CTA section (section 6).
    Requires: isDarkMode prop, scrollY state — both already in
    your AboutUsPage component.
    ============================================================ */}
<section className={`py-32 px-6 md:px-12 border-t relative z-20 transition-colors duration-500 ${isDarkMode ? 'border-white/5 bg-stone-950' : 'border-black/5 bg-stone-100/50'}`}>
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-20 space-y-5">
      <p className={`text-xs uppercase tracking-[0.3em] font-mono ${isDarkMode ? 'text-amber-400' : 'text-indigo-600'}`}>
        Global Presence
      </p>
      <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-none">
        From Dubai <span className="font-serif italic font-normal">to the World</span>
      </h2>
      <p className={`text-sm md:text-base leading-relaxed max-w-xl font-light ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
        WOI is building a global network of ecosystem initiatives across emerging and high-growth markets. Each regional ecosystem is designed around local opportunity, global connectivity, and long-term economic impact.
      </p>
    </div>

    {/* Country Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        {
          region: "Middle East",
          name: "WOI UAE",
          desc: "A regional innovation and entrepreneurship ecosystem serving the Middle East.",
          flag: "🇦🇪",
          status: "Active"
        },
        {
          region: "Southeast Asia",
          name: "WOI Singapore",
          desc: "A gateway ecosystem connecting Southeast Asia's startup, investment, and technology communities.",
          flag: "🇸🇬",
          status: "Active"
        },
        {
          region: "Southeast Asia",
          name: "WOI Malaysia",
          desc: "An ecosystem focused on innovation, entrepreneurship, and industry development.",
          flag: "🇲🇾",
          status: "Active"
        },
        {
          region: "Africa & Indian Ocean",
          name: "WOI Mauritius",
          desc: "A strategic ecosystem connecting Africa, the Middle East, and Asia through entrepreneurship, investment, innovation, and global business collaboration.",
          flag: "🇲🇺",
          status: "Building"
        },
        {
          region: "Africa",
          name: "WOI Rwanda",
          desc: "Supporting the growth of Africa's emerging innovation and startup economy.",
          flag: "🇷🇼",
          status: "Building"
        },
        {
          region: "South Asia",
          name: "WOI India",
          desc: "A pilot ecosystem model bringing together founders, investors, institutions, and corporates across India's innovation landscape.",
          flag: "🇮🇳",
          status: "Active"
        }
      ].map((country, idx) => (
        <div
          key={idx}
          className={`group relative p-8 rounded-2xl border backdrop-blur-md overflow-hidden transition-all duration-500 cursor-default ${
            isDarkMode
              ? 'bg-stone-900/20 border-white/5 hover:border-white/10 hover:bg-stone-900/60'
              : 'bg-white border-black/5 hover:border-black/10 hover:shadow-2xl'
          }`}
        >
          {/* Bottom edge tracer on hover */}
          <div className={`absolute bottom-0 left-0 right-0 h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${isDarkMode ? 'bg-amber-400/50' : 'bg-indigo-600/50'}`} />

          {/* Top row: flag + status badge */}
          <div className="flex items-start justify-between mb-6">
            <span className="text-3xl leading-none">{country.flag}</span>

            {country.status === 'Active' ? (
              <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                isDarkMode
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 shadow-[0_0_14px_rgba(251,191,36,0.5)]'
                  : 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-[0_0_14px_rgba(99,102,241,0.45)]'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-amber-900' : 'bg-white/70'}`} />
                {country.status}
              </span>
            ) : (
              <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-dashed ${
                isDarkMode
                  ? 'text-stone-400 border-stone-600 bg-stone-800/40'
                  : 'text-stone-400 border-stone-300 bg-stone-100'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDarkMode ? 'bg-stone-400' : 'bg-stone-400'}`} />
                {country.status}
              </span>
            )}
          </div>

          {/* Region label */}
          <p className={`text-[10px] uppercase tracking-[0.25em] font-mono mb-1 ${isDarkMode ? 'text-stone-600' : 'text-stone-400'}`}>
            {country.region}
          </p>

          {/* Country name */}
          <h3 className="text-xl font-serif italic font-normal tracking-tight mb-3">
            {country.name}
          </h3>

          {/* Description */}
          <p className={`text-sm leading-relaxed font-light ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
            {country.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* 6. CALL TO ACTION ACCELERATOR AREA */}
      <section className={`py-16 text-center relative overflow-hidden border-t ${isDarkMode ? 'border-white/5 bg-stone-900/30' : 'border-black/5 bg-stone-200/40'}`}>
        <div className="max-w-3xl mx-auto px-6 space-y-6 relative z-10">
          <h2 className="text-3xl md:text-6xl font-light tracking-tight">
            Connect with our <span className="font-serif italic block mt-1">Management Core</span>
          </h2>
          <p className={`text-sm md:text-base max-w-xl mx-auto leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
            Review strategic architecture documents, asset pooling arrangements, and international ecosystem expansion blueprints.
          </p>
          <div className="pt-2">
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

     

    </div>
  );
};

export default AboutUsPage;