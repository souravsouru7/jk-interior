import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingAnimation from './LoadingAnimation';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';

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
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <Hero />
            <Features />
            <Testimonials />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JKInteriors; 