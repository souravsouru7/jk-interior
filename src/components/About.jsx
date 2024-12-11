import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Briefcase, value: '750+', label: 'Projects Completed' },
    { icon: Star, value: '15+', label: 'Design Awards' },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(#b08968 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-4"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.h2>
          <div className="w-24 h-1 bg-[#b08968] mx-auto mb-8" />
          <motion.h3 
            className="text-3xl text-[#b08968] font-semibold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Designing Experiences, Not Just Spaces
          </motion.h3>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-white/80 text-lg leading-relaxed">
              JK Interior's is a premier interior design firm in Hyderabad, specializing in innovative and elegant
              solutions. Our team of expert designers works with you every step of the way to create spaces that
              inspire.
            </p>
            
            <p className="text-white/80 text-lg leading-relaxed">
              We believe that great design goes beyond aesthetics. It's about creating functional spaces that
              reflect your personality and enhance your lifestyle. Our commitment to excellence and attention
              to detail ensures that every project we undertake exceeds expectations.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#b08968] text-white rounded-full mt-8 hover:bg-[#96745a] transition-colors"
            >
              Learn More About Our Process
            </motion.button>
          </motion.div>

          {/* Right Side - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400"
              alt="Interior Design"
              className="rounded-lg shadow-2xl w-full h-48 object-cover"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400"
              alt="Interior Design"
              className="rounded-lg shadow-2xl w-full h-48 object-cover mt-8"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=400"
              alt="Interior Design"
              className="rounded-lg shadow-2xl w-full h-48 object-cover"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=400"
              alt="Interior Design"
              className="rounded-lg shadow-2xl w-full h-48 object-cover mt-8"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
                className="w-16 h-16 rounded-full bg-[#b08968]/20 flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-8 h-8 text-[#b08968]" />
              </motion.div>
              <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 