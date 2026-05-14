"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Phone, X } from "lucide-react";

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
          body: JSON.stringify({
            ...formData,
            source: "5 second website popup",
          }),
        }
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting popup form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/62 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-popup-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.96 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-[#ECECEC] text-neutral-950 shadow-[0_30px_100px_rgba(0,0,0,0.38)] lg:grid-cols-[0.9fr_1.1fr]"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close popup form"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center bg-white/92 text-neutral-950 shadow-sm transition-colors hover:bg-neutral-950 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative hidden min-h-[520px] overflow-hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200"
                alt="Warm residential interior by JK Interiors"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.72))]" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d8b99c]">
                  JK Interiors
                </p>
                <h2 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-tight">
                  Start your dream space.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/78">
                  Share your details and our team will call you with the next practical step.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-5 pt-16 sm:p-8 sm:pt-16 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a50]">
                Free Consultation
              </p>
              <h2
                id="lead-popup-title"
                className="mt-4 max-w-[11ch] text-[clamp(2.5rem,7vw,4.8rem)] font-semibold leading-[0.9] tracking-tight"
              >
                Design starts here.
              </h2>
              <p className="mt-5 text-base leading-7 text-neutral-600">
                Get a call back for residential, commercial, modular kitchen, and turnkey interior work.
              </p>

              {submitStatus === "success" && (
                <div className="mt-6 border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                  Thank you. We will get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-6 border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  Something went wrong. Please call us directly.
                </div>
              )}

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Name
                  </span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border border-neutral-300 bg-white px-4 py-3.5 outline-none transition-colors focus:border-[#b08968]"
                  />
                </label>

                <label>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Phone
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border border-neutral-300 bg-white px-4 py-3.5 outline-none transition-colors focus:border-[#b08968]"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full border border-neutral-300 bg-white px-4 py-3.5 outline-none transition-colors focus:border-[#b08968]"
                />
              </label>

              <label className="mt-4 block">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Requirement
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us your room type, location, or budget."
                  className="mt-2 w-full resize-none border border-neutral-300 bg-white px-4 py-3.5 outline-none transition-colors focus:border-[#b08968]"
                />
              </label>

              <motion.button
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="mt-5 flex w-full items-center justify-between bg-neutral-950 px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#8a6a50] disabled:cursor-not-allowed disabled:opacity-55"
              >
                {isSubmitting ? "Sending" : "Request Call Back"}
                <ArrowUpRight className="h-5 w-5" />
              </motion.button>

              <a
                href="tel:+919063096060"
                className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-neutral-700 transition-colors hover:text-[#8a6a50]"
              >
                <Phone className="h-4 w-4" />
                Call +91 9063096060
              </a>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;
