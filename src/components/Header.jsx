import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from '../assest/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img src={Logo} alt="JK Interiors" className="h-14 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {['Home', 'Portfolio', 'Factory', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#b08968] transition-colors text-lg relative group"
                whileHover={{ scale: 1.1 }}
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#b08968] transition-all duration-300 group-hover:w-full" />
              </motion.a>
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
                {['Home', 'Portfolio', 'Factory', 'About', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-[#b08968] transition-colors text-lg py-2"
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
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