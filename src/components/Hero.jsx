import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center">
      {/* Main Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ 
            scale: [1.2, 1, 1.1],
            filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-7xl font-bold text-white leading-tight">
                Modern Design
                <span className="block text-[#b08968]">Solutions</span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-white/80 max-w-xl"
              >
                Transform your space with our exceptional, custom designs and expert craftsmanship.
                We bring innovation and luxury to every project.
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

          {/* Right Side Gallery */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-4"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400"
                  alt="Interior Design"
                  className="rounded-lg shadow-2xl w-full h-48 object-cover"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400"
                  alt="Interior Design"
                  className="rounded-lg shadow-2xl w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="space-y-4 pt-8"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=400"
                  alt="Interior Design"
                  className="rounded-lg shadow-2xl w-full h-64 object-cover"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=400"
                  alt="Interior Design"
                  className="rounded-lg shadow-2xl w-full h-48 object-cover"
                />
              </motion.div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-10 -left-10 bg-[#b08968] p-6 rounded-xl shadow-xl max-w-xs"
            >
              <h3 className="text-white font-bold text-xl mb-2">Latest Project</h3>
              <p className="text-white/80">Modern Minimalist Villa in Downtown</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-sm">Scroll to explore</span>
        <MousePointer className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default Hero; 