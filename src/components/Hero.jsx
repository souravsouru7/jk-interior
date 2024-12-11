import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center py-20">
      {/* Main Background - updated animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ 
            scale: [1.2, 1, 1.1],
            filter: ["brightness(0.8)", "brightness(1)", "brightness(0.9)"]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      {/* Content - updated spacing and animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Welcome to
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block text-[#b08968] mt-2"
                >
                  JK Interiors
                </motion.span>
              </h1>
              
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-3xl text-white/90 font-semibold"
              >
                Your Dream, Our Design
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-white/80 max-w-xl"
              >
                At JK Interior's Studio, we specialize in creating spaces that resonate with your personality and
                lifestyle. Based in the heart of Hyderabad, our expert team designs interiors that are not only
                aesthetically appealing but also highly functional.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#b08968] text-white rounded-full flex items-center gap-2 group"
                >
                  View Portfolio
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="grid grid-cols-3 gap-8 pt-8"
              >
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "250+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl font-bold text-[#b08968]"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side Service Links */}
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <Link to="/services#residential">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative group"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400"
                      alt="Residential Design"
                      className="rounded-lg shadow-2xl w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors rounded-lg flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold">Residential Design</h3>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>

              <Link to="/services#commercial">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400"
                      alt="Commercial Design"
                      className="rounded-lg shadow-2xl w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors rounded-lg flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold">Commercial Design</h3>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>

              <Link to="/services#modular-kitchen">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=400"
                      alt="Modular Kitchen"
                      className="rounded-lg shadow-2xl w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors rounded-lg flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold">Modular Kitchen</h3>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>

              <Link to="/services#interior-styling">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400"
                      alt="Interior Styling"
                      className="rounded-lg shadow-2xl w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors rounded-lg flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold">Interior Styling</h3>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-sm font-light tracking-wider"
        >
          Scroll to explore
        </motion.span>
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [1, 0.5, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MousePointer className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 