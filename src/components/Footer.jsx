import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/world_of_ique/' },
    { label: 'Facebook', href: 'https://www.facebook.com/worldofique/' },
    { label: 'X', href: 'https://x.com/WorldOfIque' },
    { label: 'YouTube', href: 'https://youtube.com/@world_of_ique?si=5-LnnxtHVhUgTIau' },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white font-sans px-6 py-10 md:px-12 md:py-14">

      <main className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left Column: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
            Let's talk <br />
            <span style={{ color: '#fe9a00' }} className="italic">business.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-sm">
            Have a project in mind? I'm currently accepting new collaborations and freelance inquiries.
          </p>
        </motion.div>

        {/* Right Column: Contact & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center gap-8"
        >
          {/* Direct Contact */}
          <div className="space-y-1">
            <h4 className="font-bold text-sm uppercase tracking-widest opacity-50">Email</h4>
            <a
              href="mailto:hello@folioblox.com"
              className="text-2xl hover:text-[#fe9a00] transition block"
            >
              hello@folioblox.com
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest opacity-50">Find me online</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-neutral-800 rounded-full hover:border-[#fe9a00] hover:text-[#fe9a00] transition"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}