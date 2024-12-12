import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      // Use Fetch API instead of Axios for better CORS handling
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxOJCo_lPq6CgduorqQQW2t66KdiI1_hbNJkst2rbOgggdrjmz62VEwnTl5yTYwyKsZ/exec", 
        {
          method: 'POST',
          mode: 'no-cors', // Important for Google Apps Script
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        }
      );

      console.log("Form submitted");
      setSubmitStatus('success');
      

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      handleClose();
    } catch (error) {
      console.error("Error submitting the form:", error);
      
      // More detailed error handling
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 99999 }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-md mx-4"
          >
            <div className="bg-white rounded-lg shadow-2xl p-6">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Form Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                <p className="text-gray-600 mt-1">
                  Let's discuss your interior design project
                </p>
              </div>

              {/* Error or Success Message */}
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                  We received your submission, but there might be an issue with confirmation. Please try again or contact us directly.
                </div>
              )}
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b08968] focus:border-[#b08968]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b08968] focus:border-[#b08968]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b08968] focus:border-[#b08968]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b08968] focus:border-[#b08968]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#b08968] text-white rounded-md hover:bg-[#97745a] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;