import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Layers, Mail, Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home},
  { name: 'Ecosystem', path: '/ecosystem', icon: Layers },
  { name: 'About', path: '/about', icon: User},
  { name: 'Contact', path: '/contact', icon: Mail},
];

/* ==========================================================================
   MOBILE MENU DRAWER
   ========================================================================== */
const MobileMenu = ({ isOpen, onClose, isDarkMode }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            className={`fixed top-0 right-0 bottom-0 z-[120] w-[80vw] max-w-xs flex flex-col ${
              isDarkMode ? 'bg-[#0b0b0c] border-l border-white/10' : 'bg-stone-50 border-l border-black/8'
            }`}
          >
            {/* Drawer Header */}
            <div className={`flex items-center justify-between px-6 py-5 border-b ${
              isDarkMode ? 'border-white/8' : 'border-black/8'
            }`}>
              <span className={`font-mono text-[10px] uppercase tracking-[0.25em] ${
                isDarkMode ? 'text-white/40' : 'text-stone-400'
              }`}>
                Navigation
              </span>
              <button
                onClick={onClose}
                aria-label="Close Menu"
                className={`p-1.5 rounded-full transition-colors ${
                  isDarkMode
                    ? 'text-white/60 hover:text-white hover:bg-white/10'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-black/5'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col flex-1 px-4 py-6 gap-1">
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`group flex items-center justify-between px-4 py-3.5 rounded-md transition-all duration-200 ${
                        isActive
                          ? isDarkMode
                            ? 'bg-white/8 text-amber-400'
                            : 'bg-indigo-50 text-indigo-600'
                          : isDarkMode
                            ? 'text-stone-400 hover:bg-white/5 hover:text-white'
                            : 'text-stone-500 hover:bg-black/4 hover:text-stone-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 shrink-0 opacity-70" strokeWidth={1.5} />
                        <span className="text-sm font-medium uppercase tracking-[0.18em]">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-[9px] tracking-widest ${
                          isActive
                            ? isDarkMode ? 'text-amber-400/70' : 'text-indigo-400'
                            : isDarkMode ? 'text-white/20' : 'text-stone-300'
                        }`}>
                          {item.code}
                        </span>
                        {isActive && (
                          <div className={`w-1 h-1 rounded-full ${
                            isDarkMode ? 'bg-amber-400' : 'bg-indigo-600'
                          }`} />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA + Footer */}
            {/* <div className={`px-6 py-6 border-t space-y-4 ${
              isDarkMode ? 'border-white/8' : 'border-black/8'
            }`}>
              <Link
                to="/partner"
                onClick={onClose}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-md text-xs font-semibold uppercase tracking-widest transition-all ${
                  isDarkMode
                    ? 'bg-amber-400 text-black hover:bg-amber-300'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
            h
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <p className={`text-center font-mono text-[9px] tracking-widest uppercase ${
                isDarkMode ? 'text-white/20' : 'text-stone-300'
              }`}>
                World of Ique · Global Ecosystems
              </p>
            </div> */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

/* ==========================================================================
   NAVBAR
   ========================================================================== */
const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md transition-colors duration-300 ${
          isDarkMode
            ? 'bg-black/20 border-b border-white/5'
            : 'bg-white/40 border-b border-black/5'
        }`}
      >
        {/* Left: Branding */}
        <Link to="/" className="flex items-center space-x-4 text-sm tracking-wider group">
          <img
            src="/logo.png"
            alt="WOI Logo"
            className="h-17 w-auto group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Center: Desktop Navigation */}
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
                <span
                  className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                    isActive
                      ? isDarkMode ? 'text-amber-400' : 'text-indigo-600'
                      : isDarkMode
                        ? 'text-stone-400 hover:text-white'
                        : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-active-bar"
                    className={`absolute -bottom-1 left-0 right-0 h-[1px] ${
                      isDarkMode ? 'bg-amber-400' : 'bg-indigo-600'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Controls */}
       <div className="flex items-center space-x-4">
  {/* Hamburger — visible on all screens below lg */}
  <button
    onClick={() => setMenuOpen(true)}
    className={`lg:hidden p-1 opacity-80 hover:opacity-100 transition-opacity ${
      isDarkMode ? 'text-white' : 'text-stone-900'
    }`}
    aria-label="Open Menu"
  >
    <Menu className="w-6 h-6 stroke-[1.5]" />
  </button>
</div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

export default Navbar;