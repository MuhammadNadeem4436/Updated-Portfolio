import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-600 text-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          <span className={scrolled ? 'text-white' : 'text-blue-600'}>.Nadeem</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium hover:text-blue-400 transition-colors ${
              scrolled ? 'text-white' : 'text-gray-800'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`font-medium hover:text-blue-400 transition-colors ${
              scrolled ? 'text-white' : 'text-gray-800'
            }`}
          >
            My Projects
          </Link>
        </div>
        
        <Link 
          to="/contact"
          className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;