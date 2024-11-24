import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const letterVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const letters = "JK INTERIOR'S".split("");

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#1a1a1a] to-black z-50 flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#b08968 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </motion.div>

      {/* Main logo container */}
      <div className="relative">
        {/* Letters animation */}
        <div className="flex items-center justify-center space-x-[0.2em]">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              className="text-5xl md:text-7xl font-bold text-[#b08968] inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Animated underline */}
        <motion.div
          className="h-1 bg-[#b08968] mt-4"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />

        {/* Loading bar */}
        <motion.div
          className="h-0.5 bg-[#b08968]/30 mt-8 w-[200px] relative overflow-hidden"
        >
          <motion.div
            className="absolute left-0 top-0 h-full bg-[#b08968]"
            initial={{ width: '0%' }}
            animate={{ 
              width: ['0%', '100%'],
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Decorative circles */}
        <motion.div
          className="absolute -z-10"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="w-[300px] h-[300px] rounded-full border-2 border-[#b08968]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="w-[400px] h-[400px] rounded-full border-2 border-[#b08968]/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>

      {/* Tagline */}
      <motion.p
        className="text-[#b08968]/70 mt-8 text-sm tracking-[0.2em] uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        Creating Timeless Spaces
      </motion.p>
    </motion.div>
  );
};

export default LoadingAnimation;