import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Sun, Moon, ArrowRight, CornerDownRight, Play, Eye, Layers, Compass, BarChart4, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const capabilityIndex = [
  {
    id: "01",
    tag: "KERNEL_LAYER",
    title: "Ecosystem Core Blueprint",
    italicTitle: "Decoupled Kernels",
    desc: "Abstracting cloud complexity vectors to compile baseline local runtime environments. Engineering multi-tenant frameworks with zero architectural drift.",
    metrics: { efficiency: "+98.4%", runtime: "0.04ms", load: "Optimal" },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "02",
    tag: "MOMENTUM_ENGINE",
    title: "Strategic Velocity Staging",
    italicTitle: "Load Matching",
    desc: "Injecting continuous operational runways and calculated load-balancing pipelines dynamically to balance product expansion markers instantly.",
    metrics: { efficiency: "+94.1%", runtime: "0.12ms", load: "Active" },
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "03",
    tag: "ISOLATED_CELL",
    title: "Sovereign Sandbox Matrix",
    italicTitle: "IP Protection",
    desc: "Complete hardware-level sandboxing protocols allowing secure algorithmic performance parsing underneath global regulatory validation standards.",
    metrics: { efficiency: "100.0%", runtime: "0.00ms", load: "Isolated" },
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "04",
    tag: "ROUTER_MATRIX",
    title: "Institutional Asset Corridor",
    italicTitle: "Direct Routing",
    desc: "Eliminating subjective narrative evaluation checkpoints by translating system state parameters directly into clean capital allocation paths.",
    metrics: { efficiency: "+96.8%", runtime: "1.40ms", load: "Liquid" },
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80"
  }
];

// Rich Premium Architectural Dataset tailored to mirror Screenshot 2026-06-12 at 18.38.27.jpg
const premiumDevelopments = [
  {
    id: "P-01",
    category: "RAK CENTRAL",
    title: "Radisson Blu Residence",
    subtitle: "Strategic Central Skyline",
    desc: "An monolithic statement towering above the financial perimeter, crafted with structural glass corridors and computational climate engineering.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "P-02",
    category: "DUBAI",
    title: "Tonino Lamborghini",
    subtitle: "Aerodynamic Luxury Matrix",
    desc: "Sharp mathematical contours meeting luxury layout dynamics. Uncompromising scale designed for borderless sovereign portfolios.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "P-03",
    category: "AL MARJAN ISLAND",
    title: "Marjan Luxury Horizons",
    subtitle: "Oceanic Fluidity Frame",
    desc: "Deep ocean integration points combined with sweeping structural terraces to eliminate visual boundaries completely.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "P-04",
    category: "DUBAI",
    title: "The BNW Signature Spire",
    subtitle: "Decoupled Horizon Apex",
    desc: "Hyper-isolated vertical communities engineering structural permanence through cutting edge architectural design metrics.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function LuxuryEditorialServices() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [ambientProgress, setAmbientProgress] = useState(0);

  // Advanced Filter and Carousel Controls
  const [selectedFilter, setSelectedFilter] = useState("ALL PROPERTIES");
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Original UI ticker loop logic
  useEffect(() => {
    const interval = setInterval(() => {
      setAmbientProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Filter properties algorithmically
  const filteredData = premiumDevelopments.filter(item => 
    selectedFilter === "ALL PROPERTIES" || item.category === selectedFilter
  );

  // Adaptive auto-slide effect matching complex scrolling structures
  useEffect(() => {
    if (filteredData.length === 0) return;
    
    const slideCycle = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % filteredData.length);
      setRightIndex((prev) => (prev + 2) % filteredData.length);
    }, 5000); // Transitions with elegant editorial breathing room every 5 seconds

    return () => clearInterval(slideCycle);
  }, [filteredData.length, selectedFilter]);

  // Handle manual navigation overwrites
  const stepSliderForward = () => {
    if (filteredData.length <= 1) return;
    setLeftIndex((prev) => (prev + 1) % filteredData.length);
    setRightIndex((prev) => (prev + 1) % filteredData.length);
  };

  const stepSliderBackward = () => {
    if (filteredData.length <= 1) return;
    setLeftIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
    setRightIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
  };

  // Safe fallback indexes for tight data filter queries
  const activeLeftItem = filteredData[leftIndex] || filteredData[0];
  const activeRightItem = filteredData[rightIndex] || filteredData[0] || activeLeftItem;

  return (
    <main className={`w-full font-sans transition-colors duration-1000 overflow-x-hidden min-h-screen relative tracking-tight selection:bg-stone-200 selection:text-black ${isDarkMode ? 'bg-[#0a0a0a] text-stone-200' : 'bg-[#f8f8f6] text-stone-900'}`}>
      
      {/* BACKGROUND GRAPHIC LINES TRACKER */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className={`absolute left-[25%] top-0 bottom-0 w-[1px] ${isDarkMode ? 'bg-stone-900' : 'bg-stone-200'}`} />
        <div className={`absolute left-[65%] top-0 bottom-0 w-[1px] ${isDarkMode ? 'bg-stone-900' : 'bg-stone-200'}`} />
      </div>

      {/* FIXED NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-lg transition-colors duration-500 ${isDarkMode ? 'bg-transparent border-b border-white/5' : 'bg-transparent border-b border-black/5'}`}>
        <div className="flex items-center space-x-3 text-xs tracking-[0.25em] font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-pulse" />
          <span className="font-semibold uppercase opacity-80">IQUE.LABS</span>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none">
          <span className="text-3xl font-serif tracking-tighter italic font-black">IQue</span>
        </div>

        <div className="flex items-center space-x-6">
          <button onClick={toggleTheme} className="text-xs font-mono tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
            {isDarkMode ? "[ Light_Mode ]" : "[ Dark_Mode ]"}
          </button>
          <button className="p-1 opacity-80 hover:opacity-100"><Menu className="w-5 h-5 stroke-[1.2]" /></button>
        </div>
      </header>

      {/* SECTION 1: SYSTEM SPLIT EDITORIAL RUNWAY WITH NEW DESIGN HERO BANNER */}
      <section className="relative min-h-screen w-full flex flex-col justify-end pt-32 pb-16 px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end w-full">
          
          {/* Left Hero Core Manifest Column (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            {/* NEW DESIGN HERO BANNER PHOTO */}
            <div className={`w-full h-64 md:h-96 rounded-2xl overflow-hidden relative border ${isDarkMode ? 'border-stone-900 bg-stone-950' : 'border-stone-200 bg-stone-100'} shadow-2xl`}>
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-90 scale-100 hover:scale-[1.02] transition-all duration-1000 ease-out" 
                alt="IQue Geometric Network Architectural Hero Banner" 
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-[#0a0a0a]/90 via-transparent' : 'from-[#f8f8f6]/90 via-transparent'} to-transparent`} />
              <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest uppercase opacity-60 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-stone-200">
                Data_Structure // Core_v4.02
              </div>
            </div>

            <div className="space-y-4">
              <span className={`text-[10px] font-mono tracking-[0.4em] uppercase block opacity-40`}>
                // ARCHITECTURAL SERVICE MATRIX
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-light leading-[0.85] tracking-tighter uppercase font-sans">
                Operational <br />
                <span className="font-serif italic font-normal tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 lowercase">fluidity</span>
              </h1>
            </div>
            
            <div className="max-w-xl space-y-4">
              <p className={`text-sm md:text-lg font-light leading-relaxed opacity-70`}>
                We do not output presentation decks or localized consultations. IQue designs autonomous environmental architecture explicitly structured to decouple scaling milestones from local regulatory delays.
              </p>
              <div className="flex items-center space-x-2 text-xs font-mono opacity-40">
                <CornerDownRight className="w-3.5 h-3.5" />
                <span>ACTIVE_STREAM // 04_CORE_VECTORS_LOADED</span>
              </div>
            </div>
          </div>

          {/* Right Floating Quick Selector Block (5 Columns) */}
          <div className="lg:col-span-5 w-full border-t lg:border-t-0 lg:border-l pt-8 lg:pt-0 lg:pl-12 border-stone-800 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-1">
              <span className="text-[9px] font-mono tracking-widest opacity-30 block uppercase">Operational Status Dashboard</span>
              <div className="flex justify-between text-xs font-mono py-2 border-b border-stone-900">
                <span className="opacity-50">TELEMETRY_STATUS</span>
                <span className="text-emerald-400 font-bold">STABLE // SECURE</span>
              </div>
              <div className="flex justify-between text-xs font-mono py-2 border-b border-stone-900">
                <span className="opacity-50">CROSS_BORDER_PORTATION</span>
                <span>GLOBAL_READY</span>
              </div>
            </div>
            
            <div className="pt-6">
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-40 block mb-2">Jump down to systems</span>
              <div className="flex space-x-2">
                {capabilityIndex.map((item, idx) => (
                  <button 
                    key={item.id} 
                    onClick={() => {
                      const element = document.getElementById("interactive-console");
                      element?.scrollIntoView({ behavior: 'smooth' });
                      setActiveTab(idx);
                    }}
                    className={`w-10 h-10 rounded-lg border font-mono text-xs flex items-center justify-center transition-all ${
                      activeTab === idx ? 'bg-stone-200 text-black border-white' : 'border-stone-800 hover:border-stone-600'
                    }`}
                  >
                    {item.id}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: EDITORIAL RUNTIME TICKER TRACK */}
      <section className={`py-4 border-y overflow-hidden relative flex bg-transparent ${isDarkMode ? 'border-stone-900' : 'border-stone-200'}`}>
        <div className="whitespace-nowrap flex space-x-16 animate-[editorialMarquee_30s_linear_infinite] uppercase font-mono text-[9px] tracking-[0.4em] opacity-30">
          <span>✦ INTEGRATED LAYER SYSTEMS</span>
          <span>✦ SOVEREIGN INTELLECTUAL MATRIX SECURITY</span>
          <span>✦ REAL-TIME INSTRUMENTATION TELEMETRY</span>
          <span>✦ AUTOMATED RESOURCE LOADING CONTROL</span>
          <span>✦ INTEGRATED LAYER SYSTEMS</span>
          <span>✦ SOVEREIGN INTELLECTUAL MATRIX SECURITY</span>
        </div>
      </section>

      {/* SECTION 3: THE HIGH-FASHION SPLIT DISPLAY CONSOLE (Interactive State Machine) */}
      <section id="interactive-console" className={`py-32 px-6 md:px-12 max-w-7xl mx-auto border-b ${isDarkMode ? 'border-stone-900' : 'border-stone-200'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* LEFT CHANNELS SELECTION BAR (5 Columns) */}
          <div className="lg:col-span-5 space-y-4 sticky top-32">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-40 block">System Hub Interface</span>
            <div className="space-y-2">
              {capabilityIndex.map((service, idx) => {
                const isActive = activeTab === idx;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveTab(idx)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-500 cursor-pointer border flex items-center justify-between group relative overflow-hidden ${
                      isActive 
                        ? (isDarkMode ? 'bg-stone-900/60 border-stone-800' : 'bg-white border-stone-200 shadow-xl') 
                        : 'bg-transparent border-transparent opacity-40 hover:opacity-80'
                    }`}
                  >
                    <div className="space-y-1.5 z-10 relative">
                      <span className="font-mono text-[10px] opacity-40 block">[{service.tag}]</span>
                      <h3 className="text-xl font-light tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                        <span className="font-serif italic font-medium mr-2">{service.id}.</span>
                        {service.title}
                      </h3>
                    </div>
                    <ArrowRight className={`w-4 h-4 transform transition-all opacity-40 group-hover:opacity-100 ${isActive ? 'translate-x-0 scale-110 opacity-100' : '-translate-x-2'}`} />
                  </div>
                );
              })}
            </div>

            {/* Ambient loading visual state meter asset */}
            <div className="pt-6 px-2 space-y-2 hidden lg:block">
              <div className="flex justify-between font-mono text-[9px] opacity-30">
                <span>AMBIENT_WAVE_SAMPLING</span>
                <span>{Math.round(ambientProgress)}%</span>
              </div>
              <div className="h-[1px] w-full bg-stone-900 relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 bg-stone-400 transition-all duration-300" style={{ width: `${ambientProgress}%` }} />
              </div>
            </div>
          </div>

          {/* RIGHT CINEMATIC PREVIEW BLOCK FRAME (7 Columns) */}
          <div className="lg:col-span-7 h-[540px] rounded-2xl relative overflow-hidden group border border-stone-900 shadow-2xl bg-stone-950">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.03, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Visual Half Render */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                  <img 
                    src={capabilityIndex[activeTab].image} 
                    className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform duration-1000" 
                    alt="Core asset backdrop alignment" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/20" />
                </div>

                {/* Text & Content Overlay Display Half Block */}
                <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start border-b border-white/5 pb-4">
                    <span className="font-mono text-[10px] tracking-widest text-stone-400">CORE_SYSTEM_PREVIEW // {capabilityIndex[activeTab].id}</span>
                    <div className="flex space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-700 animate-pulse" />
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                    </div>
                  </div>

                  <div className="space-y-6 max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-light font-sans uppercase tracking-tight leading-none">
                      The Layer of <br />
                      <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-stone-300 via-stone-100 to-stone-400 normal-case">{capabilityIndex[activeTab].italicTitle}</span>
                    </h2>
                    <p className="text-xs md:text-sm leading-relaxed text-stone-400 font-light">
                      {capabilityIndex[activeTab].desc}
                    </p>
                  </div>

                  {/* Micro Metric Display Panels */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 font-mono text-[10px] text-stone-500">
                    <div>
                      <span className="block text-[8px] opacity-40 uppercase">Efficiency Delta</span>
                      <span className="text-stone-300 font-medium">{capabilityIndex[activeTab].metrics.efficiency}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] opacity-40 uppercase">Execution Latency</span>
                      <span className="text-stone-300 font-medium">{capabilityIndex[activeTab].metrics.runtime}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] opacity-40 uppercase">Telemetry state</span>
                      <span className="text-emerald-400 font-medium">{capabilityIndex[activeTab].metrics.load}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* NEW SECTION 3.5: HIGH-ALIGNED DUAL COLUMN CAROUSEL WITH VIEWPORT ON-SCROLL EFFECTS */}
      <section className={`py-32 border-b relative ${isDarkMode ? 'bg-[#050505] border-stone-900' : 'bg-stone-50 border-stone-200'}`}>
        
        {/* Subtle background context indicator line from Screenshot 2026-06-12 at 18.38.27.jpg */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-stone-800 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          
          {/* Centered Floating Contact Core Anchor */}
          <div className="flex justify-center mb-8">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 text-[9px] font-mono tracking-[0.3em] border border-stone-800 bg-[#0a0a0a] text-stone-300 px-7 py-3 rounded-md uppercase transition-all hover:border-stone-500 hover:text-white"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>CHAT ON WHATSAPP</span>
            </motion.button>
          </div>

          {/* Section Editorial Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-14 space-y-4"
          >
            <h2 className={`text-4xl md:text-6xl font-light tracking-tight font-sans ${isDarkMode ? 'text-white' : 'text-stone-950'}`}>
              Premium Developments by BNW
            </h2>
            <div className="w-12 h-[1px] bg-stone-700 mx-auto" />
          </motion.div>

          {/* Modular Navigation Filter Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-20 max-w-4xl mx-auto">
            {["ALL PROPERTIES", "AL MARJAN ISLAND", "RAK CENTRAL", "DUBAI"].map((categoryFilter) => (
              <button
                key={categoryFilter}
                onClick={() => {
                  setSelectedFilter(categoryFilter);
                  setLeftIndex(0);
                  setRightIndex(1);
                }}
                className={`text-[10px] font-mono tracking-widest uppercase px-6 py-3 rounded-none transition-all duration-300 border ${
                  selectedFilter === categoryFilter
                    ? (isDarkMode ? 'bg-white text-black border-white font-semibold' : 'bg-stone-950 text-white border-stone-950 font-semibold')
                    : 'bg-transparent border-stone-900 text-stone-500 hover:border-stone-600 hover:text-stone-300'
                }`}
              >
                {categoryFilter}
              </button>
            ))}
          </div>

          {/* Dual Parallel Scrolling Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
            
            {/* Absolute Side Direction Control Modules */}
            <button 
              onClick={stepSliderBackward}
              className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full border border-stone-800 bg-[#0a0a0a]/90 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-all backdrop-blur-md"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.2]" />
            </button>
            
            <button 
              onClick={stepSliderForward}
              className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full border border-stone-800 bg-[#0a0a0a]/90 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-all backdrop-blur-md"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.2]" />
            </button>

            {/* LEFT FRAME MATRIX CHANNEL */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-xl overflow-hidden border border-stone-900 bg-[#0d0d0d] flex flex-col justify-between min-h-[580px] relative group"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40 backdrop-blur-sm z-10">
                <span className="font-mono text-[10px] text-stone-500 tracking-wider">PORTFOLIO LAYER // A_CORE</span>
                <span className="font-mono text-[9px] text-[#e4cb93] uppercase bg-[#e4cb93]/10 px-2.5 py-0.5 rounded border border-[#e4cb93]/20">
                  {activeLeftItem?.category}
                </span>
              </div>

              <div className="flex-grow relative overflow-hidden h-[340px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeLeftItem?.id}
                    initial={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(8px)", scale: 0.97 }}
                    transition={{ duration: 0.6 }}
                    src={activeLeftItem?.image}
                    alt={activeLeftItem?.title}
                    className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />
              </div>

              <div className="p-8 space-y-6 z-10 bg-[#0d0d0d]">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono opacity-40 uppercase block">{activeLeftItem?.subtitle}</span>
                  <h3 className="text-3xl font-light text-stone-200 uppercase tracking-tight">{activeLeftItem?.title}</h3>
                </div>
                <p className="text-xs text-stone-400 font-light leading-relaxed max-w-md">{activeLeftItem?.desc}</p>
                
                <div className="pt-2">
                  <button className="bg-gradient-to-r from-[#e4cb93] to-[#bfa36c] text-stone-950 font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-3.5 rounded-sm hover:from-white hover:to-white hover:text-black transition-all font-semibold flex items-center space-x-2">
                    <span>VISIT PROPERTY</span>
                    <ArrowRight className="w-3 h-3 stroke-[2]" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FRAME MATRIX CHANNEL */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-xl overflow-hidden border border-stone-900 bg-[#0d0d0d] flex flex-col justify-between min-h-[580px] relative group lg:translate-y-8"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40 backdrop-blur-sm z-10">
                <span className="font-mono text-[10px] text-stone-500 tracking-wider">PORTFOLIO LAYER // B_CORE</span>
                <span className="font-mono text-[9px] text-[#e4cb93] uppercase bg-[#e4cb93]/10 px-2.5 py-0.5 rounded border border-[#e4cb93]/20">
                  {activeRightItem?.category}
                </span>
              </div>

              <div className="flex-grow relative overflow-hidden h-[340px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeRightItem?.id}
                    initial={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(8px)", scale: 0.97 }}
                    transition={{ duration: 0.6 }}
                    src={activeRightItem?.image}
                    alt={activeRightItem?.title}
                    className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />
              </div>

              <div className="p-8 space-y-6 z-10 bg-[#0d0d0d]">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono opacity-40 uppercase block">{activeRightItem?.subtitle}</span>
                  <h3 className="text-3xl font-light text-stone-200 uppercase tracking-tight">{activeRightItem?.title}</h3>
                </div>
                <p className="text-xs text-stone-400 font-light leading-relaxed max-w-md">{activeRightItem?.desc}</p>
                
                <div className="pt-2">
                  <button className="bg-gradient-to-r from-[#e4cb93] to-[#bfa36c] text-stone-950 font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-3.5 rounded-sm hover:from-white hover:to-white hover:text-black transition-all font-semibold flex items-center space-x-2">
                    <span>VISIT PROPERTY</span>
                    <ArrowRight className="w-3 h-3 stroke-[2]" />
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Synchronized Linear Progress Node */}
          <div className="mt-20 max-w-md mx-auto space-y-2">
            <div className="h-[2px] w-full bg-stone-900 rounded-full overflow-hidden relative">
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#e4cb93] to-transparent"
              />
            </div>
            <div className="flex justify-between text-[8px] font-mono text-stone-600 tracking-widest uppercase">
              <span>SYSTEM_AUTO_CYCLING</span>
              <span>DELAY // 5000MS</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: DEEP PRODUCTION PERFORMANCE PROFILE (Quantified Metrics Grid) */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-40 block">// NET PARITY OUTLOOK</span>
            <h3 className="text-3xl font-light tracking-tight font-serif italic">Decoupled execution standards.</h3>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {[
              { icon: Compass, val: "15 Tunnels", title: "Global Relocation Frameworks", desc: "Pre-verified market endpoint access setups ensuring dynamic, frictionless operational porting natively." },
              { icon: Layers, val: "14 Days", title: "Sandbox Isolation Speeds", desc: "Instantly deploy standalone operational architectures, abstracting pipeline configuration hurdles completely." },
              { icon: BarChart4, val: "94.0%", title: "Ecosystem Runtime Retention", desc: "Verified mathematical matching rules mapping performance data sets over archaic analog pitches." }
            ].map((stat, i) => (
              <div key={i} className={`p-8 rounded-xl border flex flex-col justify-between min-h-[200px] ${isDarkMode ? 'bg-stone-900/10 border-stone-900 hover:border-stone-800' : 'bg-white border-stone-200 hover:shadow-lg'} transition-all duration-500`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-2xl font-serif italic font-semibold ${isDarkMode ? 'text-stone-300' : 'text-stone-800'}`}>{stat.val}</span>
                  <stat.icon className="w-4 h-4 opacity-30" strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium tracking-tight">{stat.title}</h4>
                  <p className="text-xs leading-relaxed opacity-50 font-light">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION DESIGN FORUM */}
      <section className={`py-32 text-center relative overflow-hidden border-t ${isDarkMode ? 'border-stone-900 bg-stone-900/20' : 'border-stone-200 bg-stone-100/40'}`}>
        <div className="max-w-2xl mx-auto px-6 space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight uppercase leading-none">
            Configure a <br />
            <span className="font-serif italic lowercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500">production environment</span>
          </h2>
          <p className="text-xs max-w-md mx-auto leading-relaxed opacity-60 font-light">
            Connect directly with our operational kernel divisions to review system state documentation, resource mapping algorithms, or compliance matrix profiles.
          </p>
          <div className="pt-2">
            <button className={`inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-medium px-8 py-4 rounded-full border transition-all duration-500 transform hover:scale-105 active:scale-95 group ${
              isDarkMode 
                ? 'bg-stone-100 text-black border-white hover:bg-transparent hover:text-white' 
                : 'bg-stone-950 text-white border-stone-950 hover:bg-transparent hover:text-stone-900'
            }`}>
              <span>Initialize Pipeline Review</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* STANDARD INTEGRATED FOOTER */}
      <footer className={`py-12 px-6 md:px-12 text-center text-[10px] font-mono tracking-[0.2em] uppercase border-t opacity-40 ${isDarkMode ? 'border-stone-900 text-stone-500' : 'border-stone-200 text-stone-400'}`}>
        <p>© 2026 World of IQue Ecosystem. Crafted with pristine structural design.</p>
      </footer>

      {/* CUSTOM MARQUEE CONFIGURATION */}
      <style jsx global>{`
        @keyframes editorialMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </main>
  );
}