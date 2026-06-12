import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans p-6 md:p-12">
      
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-20">
        <div className="font-bold text-lg">Folioblox</div>
        <button className="text-sm opacity-60 hover:text-orange-500 transition">Back to Home</button>
      </nav>

      <main className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
        
        {/* Left Column: Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Let's talk <br/>
            <span className="text-orange-500 italic">business.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-sm mb-12">
            Have a project in mind? I’m currently accepting new collaborations and freelance inquiries.
          </p>
          
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest opacity-50">Say Hello</h4>
            <a href="mailto:hello@folioblox.com" className="text-2xl hover:text-orange-500 transition block">hello@folioblox.com</a>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#111111] p-8 md:p-12 rounded-[32px] border border-neutral-800"
        >
          <div className="flex flex-col gap-6">
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-transparent border-b border-neutral-700 py-3 outline-none focus:border-orange-500 transition" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border-b border-neutral-700 py-3 outline-none focus:border-orange-500 transition" 
            />
            <textarea 
              placeholder="Tell me about your project" 
              rows={4}
              className="bg-transparent border-b border-neutral-700 py-3 outline-none focus:border-orange-500 transition resize-none" 
            />
            <button className="bg-orange-600 text-white w-full py-4 rounded-full font-bold mt-4 hover:bg-white hover:text-black transition-all duration-300">
              Send Message
            </button>
          </div>
        </motion.form>
      </main>
    </div>
  );
}