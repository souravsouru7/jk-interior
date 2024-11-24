import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import LoadingAnimation from './LoadingAnimation';
import Hero from './Hero';
import Features from './Features';

const JKInteriors = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Header />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero />

            {/* Features Section */}
            <Features />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JKInteriors; 