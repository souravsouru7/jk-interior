"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";

const HERO_IMAGE = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000";

const JKInteriors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dismiss loader only after hero image is ready
  useEffect(() => {
    const img = new window.Image();

    const done = () => setIsLoading(false);

    img.onload = done;
    img.onerror = done; // still dismiss on error so page isn't stuck
    img.src = HERO_IMAGE;

    // Hard cap: never wait more than 6 s regardless of connection
    const cap = setTimeout(done, 6000);

    return () => clearTimeout(cap);
  }, []);

  // Show contact form 10 s after the page is visible
  useEffect(() => {
    if (isLoading) return;
    const t = setTimeout(() => setShowContactForm(true), 10000);
    return () => clearTimeout(t);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, [isLoading]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      <audio ref={audioRef} src="/music/Interior Design Animation.mp3" loop />

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-white/10 p-3 backdrop-blur-sm hover:bg-white/20 touch-manipulation"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "🔊" : "▶️"}
      </button>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Hero />
            <Features />
            <Testimonials />
            {showContactForm && <ContactForm />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JKInteriors;
