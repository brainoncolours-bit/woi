import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Layers, Mail, Radio, Sun, Moon, Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home, code: '01 // CORE' },
  { name: 'Ecosystem', path: '/work', icon: Layers, code: '02 // ARCH' },
  { name: 'About', path: '/about', icon: User, code: '03 // INTEL' },
  { name: 'Contact', path: '/contact', icon: Mail, code: '04 // SYNC' },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md transition-colors duration-300 ${isDarkMode ? 'bg-black/20 border-b border-white/5' : 'bg-white/40 border-b border-black/5'}`}>
      
      {/* Left: Branding Footprint */}
      <Link to="/" className="flex items-center space-x-4 text-sm tracking-wider group">
        <img src="/logo.png" alt="WOI Logo" className="h-17 w-auto group-hover:scale-105 transition-transform" />
       
      </Link>

      {/* Center: Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative py-2 group"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                isActive 
                  ? (isDarkMode ? 'text-amber-400' : 'text-indigo-600') 
                  : (isDarkMode ? 'text-stone-400 hover:text-white' : 'text-stone-500 hover:text-stone-900')
              }`}>
                {item.name}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="nav-active-bar"
                  className={`absolute -bottom-1 left-0 right-0 h-[1px] ${isDarkMode ? 'bg-amber-400' : 'bg-indigo-600'}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right: Theme Selector & Menu */}
      <div className="flex items-center space-x-4">
        {/* Build CTA */}
        <Link to="/partner" className={`hidden md:inline-flex items-center px-4 py-2 rounded-md text-sm font-medium tracking-wider transition-all ${isDarkMode ? 'bg-amber-400 text-black' : 'bg-indigo-600 text-white'}`}>
          Build With WOI
        </Link>
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full border transition-all ${isDarkMode ? 'border-white/20 hover:bg-white/10 text-amber-400' : 'border-black/20 hover:bg-black/5 text-indigo-600'}`}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <button className={`hidden sm:flex items-center space-x-1 border rounded-full px-3 py-1 text-xs uppercase tracking-wider transition-all ${isDarkMode ? 'border-white/30 hover:bg-white/10 text-white' : 'border-black/30 hover:bg-black/5 text-stone-900'}`}>
          <span>EN</span>
          <span className="text-[10px] opacity-60">▼</span>
        </button>
        
        <button className={`p-1 opacity-80 hover:opacity-100 transition-opacity ${isDarkMode ? 'text-white' : 'text-stone-900'}`} aria-label="Toggle Menu">
          <Menu className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;