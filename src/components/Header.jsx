import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assest/logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' }, 
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Updated Logo Section */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center"
            >
              <img 
                src={logo} 
                alt="JK Interiors" 
                className="h-12 w-auto object-contain rounded-md" 
                style={{
                  filter: isScrolled ? 'brightness(1.2)' : 'brightness(1)',
                  transition: 'filter 0.3s ease'
                }}
              />
              <motion.span 
                className={`ml-3 font-semibold text-xl ${
                  isScrolled ? 'text-white' : 'text-[#b08968]'
                }`}
              >
                JK Interiors
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <motion.span
                  className={`text-white hover:text-[#b08968] transition-colors text-lg relative group ${
                    location.pathname === item.path ? 'text-[#b08968]' : ''
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#b08968] transition-all duration-300 group-hover:w-full" />
                </motion.span>
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#b08968] text-white px-6 py-2 rounded-full flex items-center gap-2"
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link key={item.name} to={item.path}>
                    <motion.span
                      className={`block text-white hover:text-[#b08968] transition-colors text-lg py-2 ${
                        location.pathname === item.path ? 'text-[#b08968]' : ''
                      }`}
                      whileHover={{ x: 10 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}
                <motion.button
                  whileHover={{ x: 10 }}
                  className="bg-[#b08968] text-white px-6 py-2 rounded-full text-left"
                >
                  Get Started
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;