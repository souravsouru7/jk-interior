import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase, Star } from 'lucide-react';
import SEO from './SEO';

const About = () => {
  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Briefcase, value: '750+', label: 'Projects Completed' },
    { icon: Star, value: '15+', label: 'Design Awards' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <SEO 
        title="About JK Interiors - Premier Interior Design Firm in Hyderabad"
        description="Discover JK Interiors, Hyderabad's premier interior design firm. With 10+ years of experience, 500+ happy clients, and 750+ completed projects, we create innovative and elegant spaces that inspire."
        keywords="interior design Hyderabad, premier interior design firm, luxury interior design, residential interior design, commercial interior design, JK Interiors about"
        canonicalUrl="https://www.thejkinteriors.com/about"
        image="/images/about-og.jpg"
      />
      <section id="about" className="py-16 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(#b08968 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl md:text-4xl font-bold text-white mb-3 font-['Playfair_Display']"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About Us
            </motion.h2>
            <motion.div 
              className="w-20 h-0.5 bg-[#b08968] mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.h3 
              className="text-2xl text-[#b08968] font-medium mb-4 font-['Poppins']"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Designing Experiences, Not Just Spaces
            </motion.h3>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <p className="text-white/80 text-base leading-relaxed font-['Inter']">
                JK Interior's is a premier interior design firm in Hyderabad, specializing in innovative and elegant
                solutions. Our team of expert designers works with you every step of the way to create spaces that
                inspire.
              </p>
              
              <p className="text-white/80 text-base leading-relaxed font-['Inter']">
                We believe that great design goes beyond aesthetics. It's about creating functional spaces that
                reflect your personality and enhance your lifestyle. Our commitment to excellence and attention
                to detail ensures that every project we undertake exceeds expectations.
              </p>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#96745a' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="px-6 py-3 bg-[#b08968] text-white rounded-lg mt-6 text-sm font-medium shadow-lg hover:shadow-xl"
              >
                Learn More About Our Process
              </motion.button>
            </motion.div>

            {/* Right Side - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400",
                "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400",
                "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=400",
                "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=400"
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className={`${index % 2 !== 0 ? 'mt-6' : ''}`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={src}
                    alt="Interior Design"
                    className="rounded-lg shadow-lg w-full h-40 object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                  className="w-12 h-12 rounded-full bg-[#b08968]/20 flex items-center justify-center mx-auto mb-3"
                >
                  <stat.icon className="w-6 h-6 text-[#b08968]" />
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-1 font-['Poppins']">{stat.value}</h4>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About; 