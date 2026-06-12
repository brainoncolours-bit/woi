import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ArrowRight, CornerDownRight, MessageCircle, Globe, Shield, Radio, CheckCircle } from 'lucide-react';

export default function LuxuryEditorialContactOnly() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [ambientProgress, setAmbientProgress] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const interval = setInterval(() => {
      setAmbientProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`w-full font-sans transition-colors duration-1000 overflow-x-hidden min-h-screen relative tracking-tight ${isDarkMode ? 'bg-[#0a0a0a] text-stone-200' : 'bg-[#f8f8f6] text-stone-900'}`}>
      
      {/* BACKGROUND GRAPHIC STRUCTURES */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className={`absolute left-[30%] top-0 bottom-0 w-[1px] ${isDarkMode ? 'bg-stone-800' : 'bg-stone-300'}`} />
        <div className={`absolute left-[70%] top-0 bottom-0 w-[1px] ${isDarkMode ? 'bg-stone-800' : 'bg-stone-300'}`} />
      </div>

      {/* FIXED HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md border-b ${isDarkMode ? 'border-white/5 bg-transparent' : 'border-black/5 bg-transparent'}`}>
        <div className="flex items-center space-x-3 text-xs tracking-[0.25em] font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-pulse" />
          <span className="font-semibold uppercase opacity-80">IQUE.LABS</span>
        </div>
        <span className="text-2xl font-serif italic tracking-tighter absolute left-1/2 -translate-x-1/2">IQue</span>
        <div className="flex items-center space-x-6">
          <button onClick={toggleTheme} className="text-xs font-mono tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
            {isDarkMode ? "[ Light_Mode ]" : "[ Dark_Mode ]"}
          </button>
          <Menu className="w-5 h-5 stroke-[1.2] cursor-pointer opacity-80" />
        </div>
      </header>

      {/* EDITORIAL HERO TITLE */}
      <section className="relative pt-44 pb-12 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end w-full">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase block opacity-40">// INBOUND TELEMETRY CHANNELS</span>
            <h1 className="text-5xl sm:text-7xl font-light leading-none uppercase tracking-tighter">
              Initialize <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-stone-400 via-stone-300 to-stone-600 lowercase">alignment</span>
            </h1>
          </div>
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-8 border-stone-800">
            <p className="text-xs md:text-sm font-light leading-relaxed opacity-60">
              Connections route through decentralized operational desk clusters to maintain network compliance, data integrity, and pipeline safety flags.
            </p>
          </div>
        </div>
      </section>

      {/* DIRECT INGESTION & ADDRESS DETAILS CONTAINER */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: PHYSICAL DESTINATIONS & DETAILS (5 Columns) */}
          <div className="lg:col-span-5 space-y-10 sticky top-32">
            
            {/* WhatsApp Integration Bridge from Screenshot 2026-06-12 at 18.38.27.jpg */}
            <div className={`p-8 rounded-xl border ${isDarkMode ? 'bg-[#0b0b0b] border-stone-900' : 'bg-stone-50 border-stone-200'} space-y-4`}>
              <span className="font-mono text-[9px] tracking-widest opacity-40 uppercase block">Synchronous Secure Line</span>
              <h3 className="text-xl font-light">Direct Escalation Routing</h3>
              <p className="text-xs opacity-50 font-light leading-relaxed">Skip manual formatting logs entirely to interface directly with an execution lead via end-to-end communication tunnels.</p>
              <button className="w-full flex items-center justify-between text-[10px] font-mono tracking-widest border border-stone-800 bg-black text-stone-300 px-6 py-3.5 rounded uppercase hover:bg-white hover:text-black transition-colors duration-300">
                <span className="flex items-center space-x-2">
                  <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-500" />
                  <span>Secure WhatsApp Tunnel</span>
                </span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Global Coordinates Details Row */}
            <div className="space-y-6">
              <span className="text-[10px] font-mono tracking-widest opacity-40 block uppercase">// REGIONAL OFFICE GRID</span>
              
              <div className="grid grid-cols-1 gap-6 font-mono text-xs">
                <div className="py-4 border-b border-stone-900/60 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-400 font-medium tracking-wide">RAK CENTRAL TERMINAL</span>
                    <span className="text-[9px] text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded">HQ // STABLE</span>
                  </div>
                  <p className="text-[11px] text-stone-500 font-light font-sans leading-relaxed">Level 24, Tower Alpha, Al Marjan Hub, Ras Al Khaimah, UAE</p>
                  <p className="text-stone-300 font-light tracking-wide text-[11px]">+971 4 420 0000</p>
                </div>

                <div className="py-4 border-b border-stone-900/60 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-400 font-medium tracking-wide">DUBAI MATRIX SPACE</span>
                    <span className="text-[9px] text-stone-500 bg-stone-500/5 border border-stone-500/20 px-2 py-0.5 rounded">NODE // ONLINE</span>
                  </div>
                  <p className="text-[11px] text-stone-500 font-light font-sans leading-relaxed">The BNW Spire, Business Bay Corridor, Dubai, United Arab Emirates</p>
                  <p className="text-stone-300 font-light tracking-wide text-[11px]">inbound@ique.labs</p>
                </div>
              </div>
            </div>

            {/* Micro Activity Ticker */}
            <div className="space-y-2 hidden lg:block pt-4">
              <div className="flex justify-between font-mono text-[9px] opacity-30">
                <span>RESONANCE_FREQUENCY_SAMPLING</span>
                <span>{Math.round(ambientProgress)}%</span>
              </div>
              <div className="h-[1px] w-full bg-stone-900 relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 bg-stone-400 transition-all duration-300" style={{ width: `${ambientProgress}%` }} />
              </div>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE STRUCTURAL INPUT FORM (7 Columns) */}
          <div className={`lg:col-span-7 p-8 md:p-12 rounded-2xl border ${isDarkMode ? 'border-stone-900 bg-[#0d0d0d]' : 'border-stone-200 bg-white shadow-xl'} min-h-[500px] relative`}>
            
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  key="contact-form-core"
                  onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="flex justify-between items-start border-b border-white/5 pb-4">
                    <span className="font-mono text-[10px] tracking-widest text-stone-400">DATA_INGESTION_v4.12</span>
                    <div className="flex space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-700 animate-pulse" />
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                    </div>
                  </div>

                  {/* Input Element: Entity Identity */}
                  <div className="space-y-2">
                    <label className={`text-[9px] font-mono uppercase tracking-widest block transition-colors ${focusedField === 'name' ? 'text-[#e4cb93]' : 'opacity-40'}`}>
                      01 // Full Entity Identity
                    </label>
                    <input 
                      type="text" 
                      required 
                      onFocus={() => setFocusedField('name')} 
                      onBlur={() => setFocusedField(null)} 
                      placeholder="e.g., Alexander Wright" 
                      className="w-full bg-transparent border-b border-stone-800 py-2.5 text-sm focus:outline-none focus:border-stone-400 transition-colors font-light text-white" 
                    />
                  </div>

                  {/* Input Element: Signal Address */}
                  <div className="space-y-2">
                    <label className={`text-[9px] font-mono uppercase tracking-widest block transition-colors ${focusedField === 'email' ? 'text-[#e4cb93]' : 'opacity-40'}`}>
                      02 // Communications Protocol Return
                    </label>
                    <input 
                      type="email" 
                      required 
                      onFocus={() => setFocusedField('email')} 
                      onBlur={() => setFocusedField(null)} 
                      placeholder="e.g., alexander@sovereign.matrix" 
                      className="w-full bg-transparent border-b border-stone-800 py-2.5 text-sm focus:outline-none focus:border-stone-400 transition-colors font-light text-white" 
                    />
                  </div>

                  {/* Input Element: Structural Brief */}
                  <div className="space-y-2">
                    <label className={`text-[9px] font-mono uppercase tracking-widest block transition-colors ${focusedField === 'msg' ? 'text-[#e4cb93]' : 'opacity-40'}`}>
                      03 // Architectural Vector Specifications
                    </label>
                    <textarea 
                      rows={4} 
                      required 
                      onFocus={() => setFocusedField('msg')} 
                      onBlur={() => setFocusedField(null)} 
                      placeholder="Outline target structural criteria, pipeline requirements, or scaling timeline parameters..." 
                      className="w-full bg-transparent border-b border-stone-800 py-2.5 text-sm focus:outline-none focus:border-stone-400 transition-colors font-light text-white resize-none" 
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4">
                    <button type="submit" className="w-full text-center text-xs uppercase tracking-[0.2em] bg-gradient-to-r from-[#e4cb93] to-[#bfa36c] text-[#0a0a0a] py-4 rounded font-semibold hover:from-white hover:to-white transition-all duration-300">
                      Initialize Processing Handshake
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* Post-Submission Component UI */
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between items-center text-center h-full">
                  <div className="w-full flex justify-between items-start border-b border-white/5 pb-4 text-left">
                    <span className="font-mono text-[10px] tracking-widest text-emerald-400">INTAKE_ENCRYPTED // SECURE</span>
                    <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  </div>
                  <div className="space-y-3 max-w-sm">
                    <CheckCircle className="w-10 h-10 text-emerald-400 stroke-[1.2] mx-auto mb-2" />
                    <h3 className="text-xl uppercase tracking-wider text-white">Signal Captured</h3>
                    <p className="text-xs text-stone-400 font-light leading-relaxed">Form matrices processed successfully. An allocation manager will instantiate contact loop parameters inside a 120-minute horizon window.</p>
                  </div>
                  <button onClick={() => setFormSubmitted(false)} className="text-[9px] font-mono opacity-40 hover:opacity-100 uppercase tracking-widest border-b border-stone-800 pb-0.5">[ Reset Ingest Session ]</button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* BOTTOM COMPLIANCE INFRASTRUCTURE TELEMETRY */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone-900 opacity-60 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-light">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2 text-stone-400"><Globe className="w-4 h-4 stroke-[1.2]" /><span>SOVEREIGN DATA SEGREGATION</span></div>
          <p className="opacity-50 pl-6 leading-relaxed">Form inputs deploy immediately into temporary local container layers, mitigating standard logging exposure routes.</p>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2 text-stone-400"><Shield className="w-4 h-4 stroke-[1.2]" /><span>DECOUPLED ROUTING VERIFICATION</span></div>
          <p className="opacity-50 pl-6 leading-relaxed">Connection channels execute automated mathematical compliance handshakes prior to desk routing delivery pipelines.</p>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2 text-stone-400"><Radio className="w-4 h-4 stroke-[1.2]" /><span>TELEMETRY PARITY MONITOR</span></div>
          <p className="opacity-50 pl-6 leading-relaxed">Distributed regional network setups maintain continuous operational handshakes to ensure terminal path availability.</p>
        </div>
      </section>

      {/* INTEGRATED REUSABLE FOOTER */}
      <footer className="py-12 text-center text-[10px] font-mono tracking-widest opacity-40 border-t border-stone-900">
        <p>© 2026 World of IQue Ecosystem. Crafted with pristine structural design.</p>
      </footer>

    </main>
  );
}