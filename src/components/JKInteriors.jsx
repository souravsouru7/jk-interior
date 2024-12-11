import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingAnimation from './LoadingAnimation';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';

const JKInteriors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const contactFormTimer = setTimeout(() => {
      setShowContactForm(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(contactFormTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <Hero />
            <Features />
            <Testimonials />
            {showContactForm && <ContactForm />}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JKInteriors; 