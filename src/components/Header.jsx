"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../assest/logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' }, 
    { name: 'Gallery', path: '/gallery' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
   
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const isMovingDown = currentY > lastScrollY.current + 8;
        const isMovingUp = currentY < lastScrollY.current - 8;

        setIsScrolled(currentY > 50);

        if (!isOpen && currentY > 90 && isMovingDown) {
          setIsHidden(true);
        }

        if (isMovingUp || currentY < 40) {
          setIsHidden(false);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -110 : 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHome
          ? 'bg-transparent py-4'
          : isScrolled
            ? 'bg-black/80 backdrop-blur-md py-2'
            : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center"
            >
              <img 
                src={logo.src} 
                alt="JK Interiors" 
                className="h-10 w-auto object-contain rounded-md" 
                style={{
                  filter: isScrolled ? 'brightness(1.2)' : 'brightness(1)',
                  transition: 'filter 0.3s ease'
                }}
              />
              <motion.span 
                className={`ml-2 font-semibold text-lg sm:text-xl ${
                  isHome || isScrolled ? 'text-white drop-shadow-md' : 'text-[#b08968]'
                }`}
              >
                JK Interiors
              </motion.span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <motion.span
                  className={`text-white drop-shadow-md hover:text-[#b08968] transition-colors text-lg relative group ${
                    pathname === item.path ? 'text-[#b08968]' : ''
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

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 top-[60px] bg-black/95 backdrop-blur-lg z-50 md:hidden"
            >
              <motion.nav 
                className="flex flex-col h-full px-4 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <Link 
                    key={item.name} 
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`py-4 border-b border-white/10 ${
                        pathname === item.path 
                          ? 'text-[#b08968]' 
                          : 'text-white'
                      }`}
                    >
                      <span className="text-lg font-medium">{item.name}</span>
                    </motion.div>
                  </Link>
                ))}
                
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-6 bg-[#b08968] text-white px-6 py-3 rounded-full text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </motion.button>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
