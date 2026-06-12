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
        </motion.div>

        {/* Right Column: Contact & Socials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center gap-12"
        >
          {/* Direct Contact */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h4 className="font-bold text-sm uppercase tracking-widest opacity-50">Email</h4>
              <a href="mailto:hello@folioblox.com" className="text-2xl hover:text-orange-500 transition block">hello@folioblox.com</a>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm uppercase tracking-widest opacity-50">Location</h4>
              <p className="text-xl">San Francisco, CA</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest opacity-50">Find me online</h4>
            <div className="flex flex-wrap gap-4">
              {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="px-6 py-2 border border-neutral-800 rounded-full hover:border-orange-500 hover:text-orange-500 transition"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}