"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxOJCo_lPq6CgduorqQQW2t66KdiI1_hbNJkst2rbOgggdrjmz62VEwnTl5yTYwyKsZ/exec",
        {
          method: "POST",
          mode: "no-cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 42 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="bg-[#ECECEC] text-neutral-950"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6a50]">
            Start A Project
          </p>
          <h2 className="mt-5 max-w-[12ch] text-[clamp(3rem,7vw,6.2rem)] font-semibold leading-[0.9] tracking-tight">
            Let us shape the next room.
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-8 text-neutral-700">
            Share your site, budget range, and the kind of life you want the space to support.
            We will respond with the next practical step.
          </p>

          <div className="mt-10 space-y-5 border-t border-neutral-300 pt-8">
            <a href="tel:+919063096060" className="flex items-center gap-4 text-neutral-700 hover:text-[#8a6a50]">
              <Phone className="h-5 w-5" /> +91 9063096060
            </a>
            <a
              href="mailto:Info.thejkinteriors@gmail.com"
              className="flex items-center gap-4 text-neutral-700 hover:text-[#8a6a50]"
            >
              <Mail className="h-5 w-5" /> Info.thejkinteriors@gmail.com
            </a>
            <p className="flex items-start gap-4 text-neutral-700">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
              Spellbound Coworking and Office Spaces, HT Road, Sainikpuri, Secunderabad.
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-8"
        >
          {submitStatus === "error" && (
            <div className="mb-6 border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              We received your attempt, but confirmation failed. Please try again or contact us directly.
            </div>
          )}
          {submitStatus === "success" && (
            <div className="mb-6 border border-green-200 bg-green-50 p-4 text-sm text-green-700">
              Thank you. We will get back to you soon.
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Name
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-3 w-full border border-neutral-300 bg-[#F7F5F2] px-4 py-4 text-neutral-950 outline-none transition-colors focus:border-[#b08968]"
              />
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Phone
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-3 w-full border border-neutral-300 bg-[#F7F5F2] px-4 py-4 text-neutral-950 outline-none transition-colors focus:border-[#b08968]"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Email
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-3 w-full border border-neutral-300 bg-[#F7F5F2] px-4 py-4 text-neutral-950 outline-none transition-colors focus:border-[#b08968]"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Project Notes
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="mt-3 w-full resize-none border border-neutral-300 bg-[#F7F5F2] px-4 py-4 text-neutral-950 outline-none transition-colors focus:border-[#b08968]"
              placeholder="Tell us about your space, timeline, and design goals."
            />
          </label>

          <motion.button
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="mt-6 flex w-full items-center justify-between bg-neutral-950 px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#8a6a50] disabled:cursor-not-allowed disabled:opacity-55"
          >
            {isSubmitting ? "Sending" : "Send Inquiry"}
            <ArrowUpRight className="h-5 w-5" />
          </motion.button>
        </motion.form>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
