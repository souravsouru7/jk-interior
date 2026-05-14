"use client";

import { motion } from "framer-motion";
import logo from "../assest/logo.jpg";

const LoadingAnimation = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer spinning arc */}
        <motion.div
          className="absolute h-[88px] w-[88px] rounded-full border-[2px] border-transparent border-t-[#b08968]"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner slow counter-arc */}
        <motion.div
          className="absolute h-[72px] w-[72px] rounded-full border-[1.5px] border-transparent border-b-[#b08968]/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
        {/* Logo */}
        <motion.img
          src={logo.src}
          alt="JK Interiors"
          className="h-14 w-14 rounded-full object-cover"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      </div>

      {/* Brand label */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className="mt-8 text-[10px] font-bold uppercase tracking-[0.42em] text-white/40"
      >
        JK Interiors
      </motion.p>
    </motion.div>
  );
};

export default LoadingAnimation;
