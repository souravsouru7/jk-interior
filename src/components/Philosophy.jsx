import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Users, Layout, Clock, Leaf, Eye, Brush, ArrowRight } from 'lucide-react';

const Philosophy = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const philosophyPoints = [
    {
      icon: Users,
      title: "Client-Centered Approach",
      description: "Your vision is at the heart of everything we do. We take the time to understand your preferences, lifestyle, and requirements, ensuring every design decision reflects your personality."
    },
    {
      icon: Layout,
      title: "Balance of Aesthetics and Functionality",
      description: "We don't just create beautiful spaces; we design environments that work for you. From ergonomic layouts to thoughtful storage solutions, our designs are as practical as they are stunning."
    },
    {
      icon: Clock,
      title: "Emphasis on Timeless Design",
      description: "While trends come and go, we focus on creating spaces that stand the test of time. By blending classic elements with modern touches, we craft designs that remain elegant and relevant."
    },
    {
      icon: Leaf,
      title: "Sustainability and Innovation",
      description: "We are committed to sustainable practices, incorporating eco-friendly materials and energy-efficient solutions wherever possible. Innovation drives us to explore new ideas, technologies, and techniques."
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "From selecting the perfect color palette to ensuring flawless execution, we pay meticulous attention to every detail. It's these finishing touches that elevate our designs from ordinary to extraordinary."
    },
    {
      icon: Brush,
      title: "Collaboration and Creativity",
      description: "Design is a collaborative process. We work closely with our clients, involving them at every stage to ensure their vision is brought to life while adding our creative expertise to enhance it."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
              alt="Interior Design"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center space-y-8"
            >
              <motion.h1 
                className="text-7xl md:text-8xl font-bold"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #ffffff, #b08968, #ffffff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "200% 100%",
                }}
              >
                Our Design Philosophy
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-0.5 bg-gradient-to-r from-transparent via-[#b08968] to-transparent mx-auto"
              />
              <motion.p 
                className="text-2xl text-white/80 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Where Function Meets Aesthetics
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.p
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-sm"
          >
            Scroll to explore
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Main Content */}
      <section className="py-20 px-6 relative">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at center, #b08968 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.p 
              className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              We blend creativity, innovation, and practicality to design interiors that are both beautiful and
              functional. Each project is crafted to suit the unique needs and aspirations of our clients.
            </motion.p>
          </motion.div>

          {/* Enhanced Philosophy Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -20,
                  boxShadow: "0 20px 40px -20px rgba(176, 137, 104, 0.5)"
                }}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#b08968]/30 transition-all duration-500"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#b08968] to-[#b08968]/50 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#b08968]/20"
                >
                  <point.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b08968] transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                  {point.description}
                </p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="mt-6 flex items-center gap-2 text-[#b08968]"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-20"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="bg-gradient-to-r from-[#b08968]/20 via-[#b08968]/10 to-[#b08968]/20 p-12 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Space?
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                At JK Interior Services, we don't just design spaces; we create experiences that enrich lives. 
                Our philosophy is simple: design with purpose, beauty, and heart.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[#b08968] to-[#b08968]/80 text-white rounded-full flex items-center gap-2 mx-auto group"
              >
                Let's bring your dream to life
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy; 