"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";

const JKInteriors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const contactFormTimer = setTimeout(() => {
      setShowContactForm(true);
    }, 10000);

    if (!isLoading && audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(contactFormTimer);
    };
  }, [isLoading]);

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().catch((error) => {
        console.log("Music playback failed:", error);
      });
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      <audio
        ref={audioRef}
        src="/music/Interior Design Animation.mp3"
        loop
      />

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 touch-manipulation"
      >
        {isPlaying ? "🔊" : "▶️"}
      </button>

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
