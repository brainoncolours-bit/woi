import React from 'react';
import { motion } from 'framer-motion';

export default function GlassContactPage() {
  return (
    // Background container with a moody red/dark gradient
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/40 via-[#0A0A0A] to-[#0A0A0A] text-white p-6 md:p-12 flex items-center justify-center">
      
      {/* Glassmorphism Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-12 shadow-2xl"
      >
        
        {/* Left Section: Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Let's talk <br/>
            <span className="text-orange-500 italic">business.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            Have a project in mind? I’m currently accepting new collaborations and freelance inquiries.
          </p>
          
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-orange-500">Reach Out</h4>
            <a href="mailto:hello@folioblox.com" className="text-2xl hover:text-orange-400 transition">hello@folioblox.com</a>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="flex-1 flex flex-col justify-center gap-8 bg-white/5 p-8 rounded-[32px] border border-white/5">
          <h4 className="font-bold text-sm uppercase tracking-widest opacity-60">Find me online</h4>
          <div className="grid grid-cols-1 gap-4">
            {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="flex justify-between items-center p-4 rounded-2xl bg-white/5 hover:bg-orange-500/20 hover:border-orange-500/50 border border-transparent transition-all group"
              >
                <span className="text-lg font-medium">{social}</span>
                <span className="opacity-0 group-hover:opacity-100 transition">→</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}