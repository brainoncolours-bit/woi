import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col min-h-screen w-full transition-colors duration-500 ${isDarkMode ? 'bg-stone-950 text-white' : 'bg-stone-50 text-stone-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="/courses" element={<Courses isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
            <Route path="/work" element={<Blog isDarkMode={isDarkMode} />} />
            <Route path="/blog" element={<Navigate to="/work" replace />} />
            <Route path="/partner" element={<Navigate to="/contact" replace />} />
          </Routes>
        </main>
        <Footer isDarkMode={isDarkMode} />
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
