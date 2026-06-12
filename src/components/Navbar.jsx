import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Layers, Mail, Radio } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home, code: '01 // CORE' },
  { name: 'Work', path: '/work', icon: Layers, code: '02 // ARCH' },
  { name: 'About', path: '/about', icon: User, code: '03 // INTEL' },
  { name: 'Contact', path: '/contact', icon: Mail, code: '04 // SYNC' },
];

const LuxuryEditorialSidebarNav = ({ isDarkMode = true }) => {
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  // Color systems paired exactly to the luxury editorial design
  const borderColor = isDarkMode ? 'border-stone-900/80 bg-[#0a0a0a]/90' : 'border-stone-200 bg-[#fbfbfa]/90';
  const inactiveIconColor = isDarkMode ? '#57534e' : '#a8a29e'; 
  const activeIconColor = isDarkMode ? '#e4cb93' : '#0a0a0a';

  return (
    <nav className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
      <motion.div 
        className={`relative flex flex-col gap-6 p-4 rounded-xl backdrop-blur-md border shadow-2xl ${borderColor} transition-colors duration-1000`}
      >
        
        {/* Editorial Floating Frame Background Layer */}
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              layoutId="editorial-hover-frame"
              className={`absolute left-2.5 right-2.5 z-0 rounded-md border ${
                isDarkMode ? 'bg-stone-900/30 border-stone-800' : 'bg-stone-100 border-stone-300'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{
                height: '44px',
                top: hovered * 68 + 16,
              }}
            />
          )}
        </AnimatePresence>

        {navItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          const isHovered = hovered === idx;

          return (
            <Link
              key={item.name}
              to={item.path}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="relative z-10 w-11 h-11 flex items-center justify-center"
            >
              <motion.div
                animate={{ 
                  scale: isHovered || isActive ? 1.05 : 1,
                  color: (isHovered || isActive) ? activeIconColor : inactiveIconColor
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon size={18} strokeWidth={isActive ? 1.5 : 1} />
              </motion.div>
              
              {/* Premium Geometric Tooltip Overlay */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: -16, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                    className={`absolute right-full mr-4 p-4 rounded-md border text-[9px] font-mono tracking-[0.25em] uppercase shadow-xl backdrop-blur-xl whitespace-nowrap space-y-1 ${
                      isDarkMode 
                        ? 'bg-[#0e0e0e] border-stone-800 text-stone-400' 
                        : 'bg-white border-stone-200 text-stone-600'
                    }`}
                  >
                    <span className="block text-[8px] opacity-40 font-mono">{item.code}</span>
                    <span className={`block font-medium ${isDarkMode ? 'text-stone-100' : 'text-stone-950'}`}>
                      {item.name}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Minimalist Micro Border Marker Indicator */}
              {isActive && (
                <motion.div 
                  layoutId="editorial-active-bar"
                  className="absolute -right-4 w-[1px] h-6 bg-[#e4cb93]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}

        {/* Minimalist Geometric Separator Grid line */}
        <div className={`h-[1px] w-6 mx-auto my-0.5 ${isDarkMode ? 'bg-stone-900' : 'bg-stone-200'}`} />

        {/* System Telemetry Loop Toggle Trigger Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className={`flex items-center justify-center h-11 transition-colors ${
            isDarkMode ? 'text-stone-600 hover:text-[#e4cb93]' : 'text-stone-400 hover:text-stone-950'
          }`}
        >
          <Radio size={16} className={isDarkMode ? 'animate-pulse' : ''} strokeWidth={1.2} />
        </motion.button>
      </motion.div>
    </nav>
  );
};

export default LuxuryEditorialSidebarNav;