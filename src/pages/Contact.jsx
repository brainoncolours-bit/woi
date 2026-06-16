import React, { useState } from 'react';
import { motion } from 'framer-motion';


const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/world_of_ique/', icon: 'ti-brand-instagram' },
  { label: 'Facebook',  href: 'https://www.facebook.com/worldofique/',     icon: 'ti-brand-facebook' },
  { label: 'X',         href: 'https://x.com/WorldOfIque',                 icon: 'ti-brand-x' },
  { label: 'YouTube',   href: 'https://youtube.com/@world_of_ique',        icon: 'ti-brand-youtube' },
];


const enquiryTypes = [
  'Ecosystem Partnership',
  'Investment Opportunity',
  'Startup Acceleration',
  'Innovation Program',
  'Industry Collaboration',
  'General Inquiry',
];


// ← Changed to CEO email address
const RECIPIENT_EMAIL = 'ceo@woi.eco';


export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    enquiry: '',
    message: '',
  });
  const [error, setError] = useState('');


  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));


  const handleSubmit = () => {
    if (!form.firstName.trim() || !form.email.trim()) {
      setError('Please fill in your first name and email.');
      return;
    }
    setError('');


    const subject = encodeURIComponent(
      `[WOI Enquiry] ${form.enquiry || 'General Inquiry'} – ${form.firstName} ${form.lastName}`.trim()
    );


    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Company: ${form.company || 'Not provided'}
Enquiry Type: ${form.enquiry || 'Not specified'}


Message:
${form.message || 'No message provided'}`
    );


    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
  };


  const inputClass =
    'bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#ffb900]/40 focus:bg-[#ffb900]/[0.03] transition-all duration-200 w-full';


  return (
    <div className="min-h-screen bg-[#080808] text-white px-4 pt-28 pb-16 flex flex-col items-center gap-10">


      {/* ── Header ── */}
      <div className="flex flex-col items-center gap-5 text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
          Build the next<br />
          <span className="font-serif italic text-[#ffb900]">ecosystem</span>
          <span> with us.</span>
        </h1>
      </div>


      {/* ── Main Grid ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4"
      >


        {/* LEFT — Form */}
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4">


          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] text-white/30 tracking-wide">
                First name <span className="text-[#ffb900]">*</span>
              </label>
              <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] text-white/30 tracking-wide">Last name</label>
              <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className={inputClass} />
            </div>
          </div>


          <div className="flex flex-col gap-2">
            <label className="text-[11px] text-white/30 tracking-wide">
              Email <span className="text-[#ffb900]">*</span>
            </label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
          </div>


          <div className="flex flex-col gap-2">
            <label className="text-[11px] text-white/30 tracking-wide">Company</label>
            <input name="company" value={form.company} onChange={handleChange} placeholder="Your company" className={inputClass} />
          </div>


          <div className="flex flex-col gap-2">
            <label className="text-[11px] text-white/30 tracking-wide">Enquiry type</label>
            <select
              name="enquiry"
              value={form.enquiry}
              onChange={handleChange}
              className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white/50 focus:outline-none focus:border-[#ffb900]/40 transition-all duration-200 w-full cursor-pointer appearance-none"
            >
              <option value="" className="bg-[#111]">Select type</option>
              {enquiryTypes.map((t) => (
                <option key={t} value={t} className="bg-[#111]">{t}</option>
              ))}
            </select>
          </div>


          <div className="flex flex-col gap-2">
            <label className="text-[11px] text-white/30 tracking-wide">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project…"
              rows={4}
              className={inputClass + ' resize-none'}
            />
          </div>


          <button
            onClick={handleSubmit}
            className="w-full py-3.5 bg-[#ffb900] text-[#080808] font-semibold text-sm rounded-xl hover:bg-[#ffc91a] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 mt-1"
          >
            Send Message →
          </button>


          {error && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-400 text-sm"
            >
              {error}
            </motion.p>
          )}
        </div>


        {/* RIGHT — Info */}
        <div className="flex flex-col gap-4">


          {/* Map */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">
            <iframe
              title="WOI Dubai"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115072.34073059966!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="210"
              style={{
                border: 0,
                filter: 'grayscale(1) invert(0.85) contrast(1.05) brightness(0.88)',
                display: 'block',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="px-5 py-3.5 flex items-center gap-2.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-xs text-white/35">Dubai, United Arab Emirates</span>
            </div>
          </div>


          {/* Email + Phone */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="mailto:ceo@woi.eco"
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 hover:border-[#ffb900]/30 hover:bg-[#ffb900]/[0.04] transition-all duration-200 group flex flex-col gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <p className="text-[10px] uppercase tracking-widest text-white/25">Email</p>
              <p className="text-xs text-white/60 group-hover:text-white/85 transition-colors break-all">ceo@woi.eco</p>
            </a>
            <a
              href="tel:+97140000000"
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 hover:border-[#ffb900]/30 hover:bg-[#ffb900]/[0.04] transition-all duration-200 group flex flex-col gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffb900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
              </svg>
              <p className="text-[10px] uppercase tracking-widest text-white/25">Phone</p>
              <p className="text-xs text-white/60 group-hover:text-white/85 transition-colors">+971 4 000 0000</p>
            </a>
          </div>


          {/* Socials */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-widest text-white/25 mb-3">Follow us</p>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm text-white/45 hover:border-[#ffb900]/30 hover:text-[#ffb900] hover:bg-[#ffb900]/[0.05] transition-all duration-200"
                >
                  <i className={`ti ${icon} text-base`} />
                  {label}
                </a>
              ))}
            </div>
          </div>


        </div>
      </motion.div>


    </div>
  );
}