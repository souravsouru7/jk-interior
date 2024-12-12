import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Compass, Home, Package, Star, Shield, Clock, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: PenTool,
      title: "Custom Design",
      description: "Tailored solutions that perfectly match your vision and lifestyle"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Premium materials and expert craftsmanship in every project"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient project management ensuring on-time completion"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #b08968 1px, transparent 1px), radial-gradient(circle at center, #b08968 0.5px, transparent 0.5px)',
            backgroundSize: '50px 50px, 25px 25px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-mobile-h2 sm:text-4xl md:text-5xl font-bold text-white mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Why Choose Us
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-[#b08968]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience excellence in interior design with our comprehensive range of services
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 group hover:bg-[#b08968]/10 transition-all duration-500"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="w-16 h-16 rounded-full bg-[#b08968]/20 flex items-center justify-center mb-6 group-hover:bg-[#b08968] mx-auto"
              >
                <feature.icon className="w-8 h-8 text-[#b08968] group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <motion.h3 
                className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 text-center"
                whileHover={{ scale: 1.05 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-sm sm:text-base text-white/70 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 