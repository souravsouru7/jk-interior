import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=60" 
              alt="JK Interiors" 
              className="h-14 w-14 object-contain"
            />
            <p className="text-gray-400 max-w-xs">
              Transform your space with our expert interior design services. We bring your vision to life.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Portfolio', 'Factory', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#b08968] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} />
                <span>info@jkinteriors.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={20} />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#b08968' }}
                  className="text-gray-400 hover:text-[#b08968] transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={footerAnimation}
          initial="hidden"
          whileInView="visible"
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} JK Interiors. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;