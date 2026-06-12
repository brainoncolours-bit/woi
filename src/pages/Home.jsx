import React, { useState, useEffect, useRef } from 'react';
import { Menu, Sun, Moon, ArrowRight, Layers, Users, Rocket, Target, Cpu, ShieldCheck, Zap } from 'lucide-react';

const CombinedLandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // New states for interactive element tracking in the newly added sections
  const [activeFeature, setActiveFeature] = useState(0);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Slide data referencing your screenshots
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80", 
      label: "Aerial View"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80", 
      label: "Interior"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80", 
      label: "Master Suite"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
      
      const progress = -rect.top / totalHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full font-sans transition-colors duration-500 overflow-clip ${isDarkMode ? 'bg-stone-950 text-white' : 'bg-stone-50 text-stone-900'}`}>
      
      {/* FIXED HEADER / NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md transition-colors duration-300 ${isDarkMode ? 'bg-black/20 border-b border-white/5' : 'bg-white/40 border-b border-black/5'}`}>
        
        {/* Left: Branding Footprint */}
        <div className="flex items-center space-x-2 text-sm tracking-wider">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-medium opacity-90 uppercase">WORLD OF IQUE</span>
          <span className={`hidden sm:inline text-xs ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>| Innovation Hub</span>
        </div>

        {/* Absolute Center Logo Layout */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none">
          <span className="text-3xl font-serif tracking-tighter italic font-bold">IQue</span>
          <span className={`text-[9px] uppercase tracking-[0.3em] mt-1 ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>World of IQue</span>
        </div>

        {/* Right: Theme Selector, Language & Menu */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all ${isDarkMode ? 'border-white/20 hover:bg-white/10 text-amber-400' : 'border-black/20 hover:bg-black/5 text-indigo-600'}`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button className={`flex items-center space-x-1 border rounded-full px-3 py-1 text-xs uppercase tracking-wider transition-all ${isDarkMode ? 'border-white/30 hover:bg-white/10' : 'border-black/30 hover:bg-black/5'}`}>
            <span>EN</span>
            <span className="text-[10px] opacity-60">▼</span>
          </button>
          
          <button className="p-1 opacity-80 hover:opacity-100 transition-opacity" aria-label="Toggle Menu">
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </header>

      {/* PARALLAX HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden flex items-end perspective-container">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
            isDarkMode 
              ? 'mix-blend-lighten opacity-40 md:opacity-60 scale-110' 
              : 'mix-blend-multiply opacity-20 md:opacity-30 scale-110'
          }`}
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')`,
            transform: 'translateZ(-1px) scale(2)' 
          }}
        />

        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70' 
            : 'bg-gradient-to-t from-stone-50 via-stone-50/20 to-stone-100/40'
        }`} />

        <main className="relative z-10 w-full px-6 pb-20 md:pb-24 md:px-12 max-w-6xl mx-auto text-center md:text-left">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-none">
              Join us in building a <span className="font-serif italic font-normal">Better</span>
              <span className="block mt-2">
                and more <span className="font-serif italic font-normal">Efficient</span> startup ecosystem!
              </span>
            </h1>

            <h2 className={`text-lg md:text-2xl font-light tracking-wide max-w-2xl mt-4 leading-relaxed ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
              By fostering collaboration, providing mentorship, and offering resources, we’re empowering startups to grow and thrive. Together, we can create a future where innovation knows no limits.
            </h2>
          </div>
        </main>
      </div>


      {/* NEWLY ADDED SECTION 1: DYNAMIC ECOSYSTEM TRACKS (Interactive Tabs + Live Preview) */}
      <section className={`relative py-28 px-6 md:px-12 border-t ${isDarkMode ? 'border-white/5 bg-stone-950' : 'border-black/5 bg-stone-100/40'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-xl">
              <span className={`text-xs font-bold tracking-[0.25em] uppercase ${isDarkMode ? 'text-amber-400' : 'text-indigo-600'}`}>01 // Core Accelerators</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">Tailored Ecosystem Frameworks</h2>
            </div>
            <p className={`text-sm md:text-base max-w-md ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
              We optimize cross-functional development vectors through custom resource deployment and sandbox sandboxing methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive Tab Controls */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { title: "Strategic Mentorship Network", desc: "Instantly link scaling projects with global subject-matter architects.", icon: Users },
                { title: "Algorithmic Resource Mapping", desc: "Automate raw resource routing and localized scaling pipelines.", icon: Cpu },
                { title: "Frictionless Capital Integration", desc: "Direct execution structures providing streamlined investor compatibility.", icon: Zap }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                    activeFeature === idx
                      ? isDarkMode ? 'bg-stone-900 border-white/10 shadow-lg shadow-black/40' : 'bg-white border-black/10 shadow-lg shadow-stone-200'
                      : 'bg-transparent border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2.5 rounded-lg transition-colors ${activeFeature === idx ? (isDarkMode ? 'bg-amber-400/10 text-amber-400' : 'bg-indigo-600/10 text-indigo-600') : (isDarkMode ? 'bg-stone-800 text-stone-400' : 'bg-stone-200 text-stone-600')}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base tracking-tight mb-1">{item.title}</h4>
                      <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>{item.desc}</p>
                    </div>
                  </div>
                  {activeFeature === idx && (
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${isDarkMode ? 'bg-amber-400' : 'bg-indigo-600'}`} />
                  )}
                </button>
              ))}
            </div>

            {/* Live Changing Graphic Area */}
            <div className="lg:col-span-7 h-[380px] rounded-2xl relative overflow-hidden group border border-white/5 shadow-2xl">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                {[
                  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
                  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
                ].map((bgUrl, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeFeature === idx ? 'opacity-30 mix-blend-luminosity' : 'opacity-0'}`}
                    style={{ backgroundImage: `url('${bgUrl}')` }}
                  />
                ))}
              </div>
              <div className={`absolute inset-0 bg-gradient-to-tr ${isDarkMode ? 'from-stone-950 via-stone-950/80 to-stone-900/40' : 'from-stone-100 via-stone-100/90 to-white/40'}`} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${isDarkMode ? 'border-white/10 bg-white/5 text-stone-400' : 'border-black/10 bg-black/5 text-stone-600'}`}>
                    Active Sandbox Matrix
                  </span>
                  <div className="flex space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>

                <div className="space-y-4 max-w-md">
                  <div className={`text-4xl font-serif italic ${isDarkMode ? 'text-amber-400' : 'text-indigo-600'}`}>
                    {activeFeature === 0 && "01 / Connective"}
                    {activeFeature === 1 && "02 / Systematic"}
                    {activeFeature === 2 && "03 / Exponential"}
                  </div>
                  <p className={`text-sm leading-relaxed tracking-wide font-light ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                    {activeFeature === 0 && "Transform architectural milestones through high-impact communication pipelines, forging instantaneous alignment between teams and scaling requirements."}
                    {activeFeature === 1 && "A dynamic infrastructure ecosystem layer ensuring modern telemetry and stateful asset distributions are managed fluidly across execution parameters."}
                    {activeFeature === 2 && "Remove systemic friction within institutional venture channels to bypass archaic onboarding stages and advance liquidity readiness."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* NEWLY ADDED SECTION 2: THE CO-WORKING & LABORATORY SANDBOX (Visual Splendor Showcase) */}
      <section className={`py-24 px-6 md:px-12 ${isDarkMode ? 'bg-stone-900/20' : 'bg-stone-200/20'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <span className={`text-xs font-bold tracking-[0.25em] uppercase ${isDarkMode ? 'text-amber-400' : 'text-indigo-600'}`}>02 // Structural Infrastructure</span>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
              Where pure innovation takes physical form.
            </h3>
            <p className={`text-sm md:text-base font-light leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
              Beyond typical acceleration strategies, we provide specialized technological physical sandboxes. Founders leverage advanced production facilities designed exclusively to experiment, benchmark, and deploy modern applications.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <div className={`px-4 py-2.5 rounded-lg border text-xs font-medium ${isDarkMode ? 'bg-stone-900/60 border-white/5' : 'bg-white border-black/5'}`}>
                ✦ 24/7 Deep Tech Sandboxes
              </div>
              <div className={`px-4 py-2.5 rounded-lg border text-xs font-medium ${isDarkMode ? 'bg-stone-900/60 border-white/5' : 'bg-white border-black/5'}`}>
                ✦ Immersive Telepresence Suites
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-4 order-1 lg:order-2">
            <div className="col-span-8 h-80 rounded-2xl overflow-hidden relative group border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Workspace Collaboration" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
            <div className="col-span-4 h-80 rounded-2xl overflow-hidden relative group border border-white/5 flex items-center justify-center bg-stone-900">
              <div className={`absolute inset-0 bg-cover bg-center opacity-20`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80')" }} />
              <div className="text-center z-10 p-4 space-y-1">
                <div className="text-3xl font-serif italic text-amber-400">99.4%</div>
                <div className="text-[9px] uppercase tracking-wider text-stone-400">Sandbox Uptime</div>
              </div>
            </div>
            <div className="col-span-4 h-56 rounded-2xl overflow-hidden relative group border border-white/5 flex items-center justify-center bg-stone-900">
              <div className={`absolute inset-0 bg-cover bg-center opacity-20`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80')" }} />
              <div className="text-center z-10 p-4 space-y-1">
                <div className="text-3xl font-serif italic text-stone-200">12Gbp/s</div>
                <div className="text-[9px] uppercase tracking-wider text-stone-400">Ecosystem Pipeline</div>
              </div>
            </div>
            <div className="col-span-8 h-56 rounded-2xl overflow-hidden relative group border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
                alt="Ecosystem Innovation Lab" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>


      {/* NEWLY ADDED SECTION 3: ECOSYSTEM INTEGRITY ACCORD (Trust & Alignment Grid) */}
      <section className={`py-28 px-6 md:px-12 border-b ${isDarkMode ? 'border-white/5 bg-stone-950' : 'border-black/5 bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className={`text-xs font-bold tracking-[0.25em] uppercase ${isDarkMode ? 'text-amber-400' : 'text-indigo-600'}`}>03 // Operational Principles</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">Structured for Maximum Impact</h2>
            <p className={`text-sm md:text-base ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
              We guarantee transparent acceleration models designed to support long-term startup integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { status: "Radical Transparency", subtitle: "Zero Hidden Traps", desc: "No complex fine-print clauses or manipulative restructuring systems. Funding provisions and resource costs remain completely open and audited.", badge: "Guaranteed" },
              { status: "Sovereign Frameworks", subtitle: "Founder IP Protection", desc: "We protect your technological intellectual properties. Founders retain complete product sovereignty throughout all strategic acceleration iterations.", badge: "Secured" },
              { status: "Global Portability", subtitle: "Frictionless Relocation", desc: "Instantly translate scaling structures across cross-border markets using standardized international landing parameters.", badge: "Universal" }
            ].map((accord, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-stone-900/30 border-white/5 hover:border-white/10 hover:bg-stone-900/60' 
                    : 'bg-stone-50 border-black/5 hover:border-black/10 hover:bg-stone-100/50'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? 'text-amber-400' : 'text-indigo-600'}`}>
                      [ 0{idx + 1} System ]
                    </span>
                    <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md font-medium ${isDarkMode ? 'bg-stone-800 text-stone-300' : 'bg-stone-200 text-stone-700'}`}>
                      {accord.badge}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium tracking-tight mb-1">{accord.status}</h4>
                    <span className={`text-xs block mb-4 opacity-60 font-mono`}>{accord.subtitle}</span>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>{accord.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 2: SMOOTH IMAGE SLIDER ON SCROLL */}
      <div ref={containerRef} className={`relative h-[300vh] w-full ${isDarkMode ? 'bg-stone-950' : 'bg-stone-50'}`}>
        
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {slides.map((slide, index) => {
            const totalSlides = slides.length;
            const segmentFactor = 1 / (totalSlides - 1); 
            
            let translateY = 100; 

            if (index === 0) {
              translateY = 0; 
            }
            
            const startActivation = (index - 1) * segmentFactor;
            const endActivation = index * segmentFactor;

            if (index > 0 && scrollProgress >= startActivation) {
              const segmentProgress = (scrollProgress - startActivation) / (endActivation - startActivation);
              translateY = Math.max(0, 100 - (Math.min(segmentProgress, 1) * 100));
            }

            return (
              <div
                key={slide.id}
                className="absolute inset-0 w-full h-full will-change-transform"
                style={{
                  transform: `translate3d(0, ${translateY}%, 0)`,
                  zIndex: index + 10,
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-28 left-6 md:left-12 z-30">
                  <span className={`inline-block backdrop-blur-md text-xs font-semibold tracking-[0.2em] uppercase px-6 py-3 shadow-md rounded-sm border ${
                    isDarkMode 
                      ? 'bg-amber-200/90 text-stone-950 border-amber-300/20' 
                      : 'bg-stone-900/90 text-stone-50 border-stone-800/20'
                  }`}>
                    {slide.label}
                  </span>
                </div>
                
                <div className={`absolute inset-0 pointer-events-none ${
                  isDarkMode 
                    ? 'bg-gradient-to-t from-stone-950/50 via-transparent to-stone-950/20' 
                    : 'bg-gradient-to-t from-stone-50/30 via-transparent to-stone-50/10'
                }`} />
              </div>
            );
          })}
          
          <div className="absolute bottom-24 right-6 md:right-12 z-40 flex flex-col space-y-2">
            <button 
              onClick={() => window.scrollTo({ top: containerRef.current.offsetTop, behavior: 'smooth' })}
              className={`backdrop-blur-md p-3 transition-colors border text-xs shadow-md ${
                isDarkMode ? 'bg-black/40 border-white/10 text-white hover:bg-white/10' : 'bg-white/60 border-black/10 text-stone-900 hover:bg-black/5'
              }`}
              aria-label="Scroll to top of slider"
            >
              ▲
            </button>
            <button 
              onClick={() => window.scrollTo({ top: containerRef.current.offsetTop + containerRef.current.scrollHeight, behavior: 'smooth' })}
              className={`backdrop-blur-md p-3 transition-colors border text-xs shadow-md ${
                isDarkMode ? 'bg-black/40 border-white/10 text-white hover:bg-white/10' : 'bg-white/60 border-black/10 text-stone-900 hover:bg-black/5'
              }`}
              aria-label="Scroll past slider"
            >
              ▼
            </button>
          </div>

        </div>
      </div>


      {/* SECTION 3: THE CORE PILLARS (Grid Layout) */}
      <section className={`relative z-20 py-24 px-6 md:px-12 max-w-7xl mx-auto border-t ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Users, title: "Empowering Founders", desc: "Providing hands-on architectural validation and strategic positioning for early-stage visionaries." },
            { icon: Rocket, title: "Accelerating Startups", desc: "Injecting operational momentum through custom resources, frameworks, and targeted launch strategies." },
            { icon: Target, title: "Cultivating Investors", desc: "Curating verified investment pipelines to bridge continuous growth capital to structural breakthroughs." },
            { icon: Layers, title: "Corporate Alliances", desc: "Forging dynamic enterprise and government connections to unlock large-scale infrastructure sandbox deployment." }
          ].map((pillar, idx) => (
            <div key={idx} className={`p-8 rounded-2xl transition-all duration-300 border ${isDarkMode ? 'bg-stone-900/40 border-white/5 hover:bg-stone-900' : 'bg-white border-black/5 hover:shadow-xl'}`}>
              <pillar.icon className={`w-8 h-8 mb-6 ${isDarkMode ? 'text-stone-400' : 'text-stone-700'}`} strokeWidth={1.5} />
              <h3 className="text-xl font-medium mb-3 tracking-tight">{pillar.title}</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION 4: VISION MISSION */}
      <section className={`py-24 ${isDarkMode ? 'bg-stone-900/30' : 'bg-stone-100'}`}>
        <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-6">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>Our Shared Mission</span>
            <h2 className="text-3xl md:text-5xl font-light font-serif italic tracking-tight">
              Driving solutions that <span className="font-sans not-italic font-light">benefit global society.</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className={`text-lg md:text-xl font-light leading-relaxed tracking-wide ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
              IQue Ventures is dedicated to building a dynamic and sustainable startup ecosystem that fosters 
              innovation, entrepreneurship, and growth. We focus on empowering entrepreneurs, supporting startups, 
              cultivating investors, and bridging the gap between startups and government or private organizations. 
              By creating impactful projects and programs, we enable startups to drive positive change.
            </p>
          </div>
        </div>
      </section>


      {/* SECTION 5: METRIC ANALYSIS STATS */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { metric: "250+", label: "Startups Scaled" },
            { metric: "$40M+", label: "Capital Deployed" },
            { metric: "15+", label: "Cross-border Programs" },
            { metric: "94%", label: "Founder Success Rate" }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-4xl md:text-6xl font-light font-serif tracking-tight">{stat.metric}</div>
              <div className={`text-xs uppercase tracking-[0.15em] font-medium ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION 6: CALL TO ACTION */}
      <section className={`py-24 text-center relative overflow-hidden ${isDarkMode ? 'bg-stone-900/60' : 'bg-stone-200/50'}`}>
        <div className="max-w-3xl mx-auto px-6 space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Ready to break the limits of <span className="font-serif italic">innovation?</span>
          </h2>
          <p className={`text-sm md:text-base max-w-xl mx-auto leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
            Whether you are a scaling founder seeking ecosystem acceleration or an enterprise partner searching for disruptive sandbox innovations, let's co-create the roadmap.
          </p>
          <div>
            <button className={`inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 rounded-full border transition-all ${isDarkMode ? 'bg-white text-stone-950 border-white hover:bg-transparent hover:text-white' : 'bg-stone-950 text-white border-stone-950 hover:bg-transparent hover:text-stone-900'}`}>
              <span>Apply for Ecosystem Entry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className={`py-12 px-6 md:px-12 text-center text-xs tracking-wider border-t ${isDarkMode ? 'border-white/5 text-stone-500' : 'border-black/5 text-stone-400'}`}>
        <p>© 2026 World of IQue Ecosystem. Crafted with pristine structural design.</p>
      </footer>


      {/* FLOATING ACTION BUTTON */}
      <a 
        href="#contact" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
        aria-label="Connect"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.447 5.41 1.448 5.4 0 9.788-4.39 9.791-9.794.002-2.618-1.01-5.08-2.857-6.93C17.096 2.03 14.64 1.01 12.004 1.01c-5.405 0-9.792 4.39-9.795 9.796-.001 2.106.546 4.167 1.583 5.974l-1.04 3.8 3.893-1.02zM17.01 14.8c-.274-.138-1.62-.8-1.872-.892-.253-.093-.437-.138-.62.138-.184.276-.712.893-.873 1.077-.16.184-.323.207-.597.069-.273-.138-1.156-.426-2.202-1.36-.815-.727-1.36-1.624-1.52-1.9-.162-.276-.017-.424.12-.561.124-.124.274-.322.412-.483.137-.161.183-.276.274-.459.092-.184.046-.344-.023-.482-.069-.138-.62-1.492-.849-2.043-.224-.54-.449-.467-.62-.476-.16-.008-.344-.01-.528-.01-.184 0-.482.069-.735.344-.253.276-.964.943-.964 2.3 0 1.355.986 2.66 1.124 2.844.138.184 1.94 2.962 4.7 4.153.656.283 1.17.452 1.568.579.66.21 1.26.18 1.733.11.528-.08 1.62-.663 1.85-1.302.23-.64.23-1.186.16-1.302-.07-.115-.253-.184-.527-.322z" />
        </svg>
      </a>

    </div>
  );
};

export default CombinedLandingPage;