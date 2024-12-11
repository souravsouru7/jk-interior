import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assest/logo.jpg'; // Update path according to your project structure

const LoadingAnimation = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="text-center"
      >
        <motion.img 
          src={logo}
          alt="JK Interiors"
          className="h-24 w-auto mb-4 mx-auto"
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20] 
          }}
          transition={{
            duration: 2,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity
          }}
        />
        <motion.div
          className="w-12 h-1 bg-[#b08968] mx-auto rounded-full"
          animate={{
            scaleX: [1, 2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;