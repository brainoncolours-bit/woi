import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Building2, GraduationCap, Lightbulb, MessageSquare } from 'lucide-react';

// Reframed into highly readable, real-world professional data
const ecosystemServices = [
  {
    id: "01",
    category: "STRATEGY",
    title: "Ecosystem Core Blueprinting",
    desc: "We build tailored infrastructure blueprints that clear away regional expansion friction, making sure your platform architecture is ready for rapid market deployment.",
    metric: "Fast-Track Setup"
  },
  {
    id: "02",
    category: "GROWTH",
    title: "Strategic Venture Staging",
    desc: "We design continuous operational support tracks and resource balancing systems to manage product expansion milestones smoothly as your team grows.",
    metric: "98.4% Efficiency"
  },
  {
    id: "03",
    category: "SECURITY",
    title: "Sovereign IP Protection",
    desc: "We implement secure project environments to test your core business applications safely and maintain complete compliance with global corporate guidelines.",
    metric: "Fully Isolated"
  },
  {
    id: "04",
    category: "NETWORKING",
    title: "Direct Capital Corridors",
    desc: "We clear out communication bottlenecks by translating project performance indicators into clear, actionable presentations ready for institutional funding.",
    metric: "Direct Allocation"
  }
];

const featuredProperties = [
  {
    code: "PROP-01",
    location: "RAK Central",
    name: "Radisson Blu Residence",
    type: "Modern Financial Skyline",
    imgUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
  },
  {
    code: "PROP-02",
    location: "Dubai",
    name: "Tonino Lamborghini",
    type: "Premium Architectural Matrix",
    imgUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
  },
  {
    code: "PROP-03",
    location: "Al Marjan Island",
    name: "Marjan Luxury Horizons",
    type: "Oceanfront Fluid Terraces",
    imgUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    code: "PROP-04",
    location: "Dubai",
    name: "The BNW Signature Spire",
    type: "Exclusive High-Rise Development",
    imgUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function CleanCorporateEcosystem() {
  const [activeService, setActiveService] = useState(0);
  const [propertyIndex, setPropertyIndex] = useState(0);
  const [activeInitiative, setActiveInitiative] = useState("PARK");

  const nextProperty = () => {
    setPropertyIndex((prev) => (prev + 1) % featuredProperties.length);
  };

  const prevProperty = () => {
    setPropertyIndex((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length);
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* STANDARD CORPORATE HEADER */}
      <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto h-20 px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-600 rounded-full" />
            <span className="font-semibold text-sm tracking-wider uppercase text-gray-800">WORLD OF IQUE</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#overview" className="hover:text-blue-600 transition-colors">Overview</a>
            <a href="#initiatives" className="hover:text-blue-600 transition-colors">Initiatives</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#properties" className="hover:text-blue-600 transition-colors">Developments</a>
          </nav>

          <div>
            <a 
              href="https://wa.me/#" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 1: MODERN EDITORIAL HERO */}
      <section id="overview" className="max-w-7xl mx-auto pt-20 pb-16 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
            Ecosystem Platform
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Building growth ecosystems for sustainable expansion.
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
            We deliver actionable framework blueprints instead of simple consulting reports. World of IQue designs highly connected regional corporate platforms designed to help modern startups and organizations build momentum cleanly.
          </p>
          <div className="pt-4">
            <a href="#initiatives" className="inline-flex items-center space-x-2 font-semibold text-blue-600 hover:text-blue-700 group transition-colors">
              <span>Explore our initiatives</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-video lg:aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80" 
              alt="World of IQue Corporate Campus Workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: CLEAN INTERACTIVE INITIATIVES SEGMENT */}
      <section id="initiatives" className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Pilot Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">WOI India Regional Hubs</h2>
            <p className="text-gray-600 text-sm font-light">
              Connecting professional networks, venture capital resources, and local business ecosystems across functional platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Nav Tabs */}
            <div className="lg:col-span-4 flex flex-col space-y-2">
              {[
                { id: "PARK", label: "Startup Park Bengaluru", icon: Building2 },
                { id: "SCHOOL", label: "Startup School Programs", icon: GraduationCap },
                { id: "STUDIO", label: "DayOne Venture Studio", icon: Lightbulb }
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isSelected = activeInitiative === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveInitiative(tab.id)}
                    className={`w-full flex items-center space-x-4 p-4 text-left rounded-xl transition-all border ${
                      isSelected 
                        ? 'bg-white border-gray-200 shadow-sm font-semibold text-blue-600' 
                        : 'bg-transparent border-transparent text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} />
                    <span className="text-sm">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Display Panel */}
            <div className="lg:col-span-8 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm min-h-[280px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeInitiative}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {activeInitiative === "PARK" && (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900">Multi-Tenant Corporate Innovation Park</h3>
                      <p className="text-gray-600 leading-relaxed text-sm font-light">
                        A full-scale structural business park built to bring together high-growth entrepreneurs, validation platforms, and professional corporate networks. This pilot space hosts central hub platforms including the CEO Square, VC Circle, WOI Angels, and QuantumX.
                      </p>
                    </>
                  )}
                  {activeInitiative === "SCHOOL" && (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900">Entrepreneurship & Leadership Development</h3>
                      <p className="text-gray-600 leading-relaxed text-sm font-light">
                        Practical business execution programs focused completely on core operational leadership, scaling tactics, and high-value management skills built to train next-generation executives.
                      </p>
                    </>
                  )}
                  {activeInitiative === "STUDIO" && (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900">DayOne Venture Development Studio</h3>
                      <p className="text-gray-600 leading-relaxed text-sm font-light">
                        An integrated incubator platform engineered to shape, build, and fund startup ideas. Our structural path speeds up foundational business timelines and sets up solid corporate workflows early.
                      </p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="pt-6 border-t border-gray-50 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                <span className="text-gray-500 font-bold">Planned Hubs:</span>
                <span>WOI UAE</span>
                <span>WOI Singapore</span>
                <span>WOI Malaysia</span>
                <span>WOI Mauritius</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: CORE SERVICES HIGHLIGHT */}
      <section id="services" className="max-w-7xl mx-auto py-24 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Our Services</span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Functional Capabilities</h2>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Click on a capability track to check out how our platform processes corporate operations and scales business infrastructures.
            </p>
            <div className="hidden lg:block pt-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center space-x-3 text-xs text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Ecosystem framework parameters online.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ecosystemServices.map((service, idx) => {
              const isSelected = activeService === idx;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(idx)}
                  className={`p-6 border rounded-xl cursor-pointer transition-all flex flex-col justify-between min-h-[220px] ${
                    isSelected 
                      ? 'bg-white border-blue-500 shadow-lg ring-1 ring-blue-500/20' 
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-gray-400 font-mono">[{service.category}]</span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${isSelected ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                      {service.metric}
                    </span>
                  </div>
                  <div className="space-y-2 mt-6">
                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: EDITORIAL PROPERTY PRESENTATION */}
      <section id="properties" className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">Project Portfolios</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Premium Developments by BNW</h2>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={prevProperty}
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-gray-400 font-mono">{(propertyIndex + 1).toString().padStart(2, '0')} / 04</span>
              <button 
                onClick={nextProperty}
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={propertyIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <span className="inline-block text-xs font-semibold bg-blue-500/10 text-blue-400 px-3 py-1 rounded-sm border border-blue-500/20">
                    {featuredProperties[propertyIndex].location}
                  </span>
                  <div>
                    <span className="text-xs text-gray-400 block uppercase font-medium mb-1">{featuredProperties[propertyIndex].type}</span>
                    <h3 className="text-3xl font-bold tracking-tight">{featuredProperties[propertyIndex].name}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-light max-w-sm">
                    Crafted utilizing premium real estate design frameworks to deliver seamless layouts and global property standards across exceptional skyline locations.
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-700 transition-all rounded shadow-sm">
                  View Property Details
                </button>
                <a 
                  href="https://wa.me/#" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-3 border border-gray-700 bg-gray-800 hover:bg-gray-700 text-xs font-semibold uppercase tracking-wider text-center transition-all rounded"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-7 h-[360px] md:h-[440px] rounded-2xl overflow-hidden bg-gray-800 relative order-1 lg:order-2 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={propertyIndex}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.4 }}
                  src={featuredProperties[propertyIndex].imgUrl}
                  alt={featuredProperties[propertyIndex].name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute top-4 left-4 text-[10px] bg-black/60 text-gray-200 px-3 py-1 rounded font-mono border border-white/10 tracking-wider">
                ID: {featuredProperties[propertyIndex].code}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="bg-white py-24 text-center border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Configure your corporate ecosystem setup
          </h2>
          <p className="text-gray-600 text-sm font-light leading-relaxed max-w-md mx-auto">
            Connect directly with our operations team to analyze layout frameworks, licensing parameters, or strategic ecosystem models.
          </p>
          <div className="pt-4">
            <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all">
              Initialize Project Review
            </button>
          </div>
        </div>
      </section>

      {/* CLEAN CORPORATE FOOTER */}
      <footer className="py-12 border-t border-gray-100 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
        <p>© 2026 World of IQue Ecosystem. All rights reserved.</p>
      </footer>

    </div>
  );
}