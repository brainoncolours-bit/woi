import React from 'react';
import { ArrowRight, Layers, Zap, Database, Terminal } from 'lucide-react';

export default function WorldOfIQueMaster() {
  return (
    <main className="w-full font-sans bg-[#0a0a0a] text-stone-200 min-h-screen">
      
      {/* 1. HERO */}
      <section className="relative pt-44 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-8xl font-light leading-none uppercase tracking-tighter">
          Initialize <br />
          <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-stone-400 to-stone-600">alignment</span>
        </h1>
        <p className="max-w-xl text-xs md:text-sm font-light leading-relaxed opacity-60 mt-8">
          WOI — Building Better Worlds Through Better Ecosystems. Connecting founders, investors, and institutions to build sustainable innovation grids.
        </p>
      </section>

      {/* 2. CAPABILITIES */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone-900/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-900/20 border border-stone-900/20">
          {[
            { id: "01", icon: <Layers />, title: "Ecosystem Architecture" },
            { id: "02", icon: <Zap />, title: "Operational Acceleration" },
            { id: "03", icon: <Database />, title: "Structural Compliance" },
            { id: "04", icon: <Terminal />, title: "Infrastructure Logic" }
          ].map((item) => (
            <div key={item.id} className="p-8 bg-[#0a0a0a]">
              <div className="opacity-30 mb-8">{item.icon}</div>
              <h4 className="text-sm font-semibold uppercase tracking-widest mb-3">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INGESTION FORM */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-stone-900/50">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-light uppercase tracking-tighter">Inbound<br/><span className="font-serif italic opacity-60">Handshake</span></h2>
          </div>
          <form className="md:col-span-8 grid md:grid-cols-2 gap-8">
            <input className="bg-transparent border-b border-stone-800 py-3 text-sm outline-none" placeholder="Entity Name" />
            <input className="bg-transparent border-b border-stone-800 py-3 text-sm outline-none" placeholder="Protocol Address" />
            <textarea className="md:col-span-2 bg-transparent border-b border-stone-800 py-3 text-sm outline-none" placeholder="Structural Brief" rows={3} />
            <button className="text-[10px] font-mono uppercase tracking-widest border border-stone-800 py-4 hover:bg-white hover:text-black transition-colors">
              Initialize Transmission
            </button>
          </form>
        </div>
      </section>

      {/* 4. KNOWLEDGE ARCHIVE */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone-900/50">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase opacity-40">// ARCHIVE_LOGS</span>
            <h2 className="text-3xl font-light leading-tight">Insight<br/><span className="font-serif italic opacity-60">Streams</span></h2>
          </div>
          {[
            { date: '06.12.26', title: 'Decentralized Governance Protocols' },
            { date: '05.28.26', title: 'Sustainable Infrastructure Metrics' }
          ].map((post, i) => (
            <div key={i} className="group border-l border-stone-800 pl-6 cursor-pointer">
              <span className="text-[9px] font-mono opacity-40 block mb-2">{post.date}</span>
              <h4 className="text-lg font-light group-hover:text-stone-400 transition-colors">{post.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LEADERSHIP CLUSTER */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone-900/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {['A. Wright', 'S. Kour', 'J. Varma', 'E. Chen'].map((name, i) => (
            <div key={i} className="space-y-2">
              <div className="w-full aspect-[4/5] bg-stone-900 mb-4" />
              <h4 className="font-semibold text-sm tracking-wide">{name}</h4>
              <p className="text-[10px] font-mono uppercase opacity-40">Governance Board</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. NODE MAP */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone-900/50">
        <div className="relative h-[400px] w-full border border-stone-900 flex items-center justify-center bg-[#0d0d0d] overflow-hidden">
          <span className="font-mono text-[10px] opacity-30 uppercase tracking-[0.5em]">Global Network Latency: 42ms</span>
          <div className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        </div>
      </section>

      {/* 7. SOCIAL DIRECTORY */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['LinkedIn', 'X (Twitter)', 'Telegram', 'GitHub'].map((label) => (
            <a key={label} href="#" className="flex flex-col space-y-2 border-l border-stone-800 pl-4 hover:border-stone-500 transition-colors">
              <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">{label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-12 text-center text-[10px] font-mono tracking-widest opacity-40 border-t border-stone-900">
        <p>© 2026 World of IQue Ecosystem. Crafted with structural intent.</p>
      </footer>
    </main>
  );
}