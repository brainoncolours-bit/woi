"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const productionCases = [
  { num: "01", name: "WOI India", img: "/banner10.png", desc: "A national innovation and entrepreneurship ecosystem connecting India's emerging startup hubs, talent, and investment networks." },
  { num: "02", name: "WOI Startup Nation", img: "/banner6.png", desc: "A national-scale entrepreneurship and startup ecosystem." },
  { num: "03", name: "WOI Health City", img: "/banner2.png", desc: "A focused ecosystem for healthcare, wellness, biotechnology, health-tech, and medical innovation." },
];

export default function HorizontalPortfolio() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={scrollRef} className="relative h-[800vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-[#121214]">
        <div className="absolute left-6 md:left-12 top-12 z-20 pointer-events-none">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">
            Global Ecosystem Network
          </div>
          <h2 className="text-2xl font-serif text-white">Building Across Borders</h2>
        </div>

        <motion.div
          style={{ x }}
          className="flex items-center gap-12 pl-6 md:pl-12 pr-[20vw] will-change-transform"
        >
          {productionCases.map((project, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[65vw] md:w-[45vw] flex-shrink-0 flex flex-col gap-6"
            >
              <div className="aspect-[16/10] overflow-hidden relative rounded-sm group shadow-xl bg-neutral-900">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:opacity-10 transition-opacity pointer-events-none" />
                <span className="absolute bottom-4 left-4 font-serif text-3xl text-white/80">
                  {project.num}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif text-white">{project.name}</h3>
                <p className="text-sm text-white/50 font-light max-w-md">{project.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
