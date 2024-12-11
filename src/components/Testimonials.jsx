import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "A Dream Come True!",
    text: "JK Interior Services turned my vision into reality! Their attention to detail and professionalism exceeded my expectations. My home feels like a perfect blend of elegance and comfort. Thank you for making my dream a reality!",
    author: "Rakesh Padmashali",
    location: "Hyderabad"
  },
  {
    quote: "A Seamless Experience",
    text: "From the initial consultation to the final handover, the entire process was seamless. The team was attentive, innovative, and delivered exactly what they promised. My office now feels modern, functional, and vibrant!",
    author: "Bhanu",
    location: "Uppal"
  },
  {
    quote: "Exceeded All Expectations",
    text: "I was on a tight budget, but JK Interior Services managed to create a stunning modular kitchen for me. Their creativity and efficiency amazed me. Highly recommended!",
    author: "Anu Pandey",
    location: "Bachupally"
  },
  {
    quote: "Outstanding Craftsmanship",
    text: "The customized furniture they designed for my living room is absolutely stunning! It's unique, functional, and fits perfectly into my space. I couldn't be happier!",
    author: "Venkatesh",
    location: "Jangaon"
  },
  {
    quote: "Simply the Best",
    text: "I've worked with other interior designers before, but JK Interior Services is truly a class apart. Their designs are thoughtful, their team is approachable, and their execution is flawless.",
    author: "Vijay Reddy",
    location: "Jubilee Hills"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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
            backgroundSize: '30px 30px',
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
          <h2 className="text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            At JK Interior Services, our clients' satisfaction is the ultimate measure of our success. 
            Here's what some of them have to say about their experiences with us:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 10px 30px -10px rgba(176, 137, 104, 0.3)"
              }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-[#b08968]/30 transition-all duration-500"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
                className="mb-6"
              >
                <Quote className="w-10 h-10 text-[#b08968]" />
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold text-[#b08968] mb-4"
                whileHover={{ scale: 1.05 }}
              >
                {testimonial.quote}
              </motion.h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#b08968]/20 flex items-center justify-center">
                  <span className="text-[#b08968] font-bold">
                    {testimonial.author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-white/50">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-8">
            Your feedback matters to us! We'd love to hear about your experience and help you design your dream space.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#b08968] text-white rounded-full hover:bg-[#b08968]/90 transition-colors"
          >
            Want to be our next happy client? Let's get started!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 