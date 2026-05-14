"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9063096060",
    href: "tel:+919063096060",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message the studio",
    href: "https://wa.me/919063096060",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Info.thejkinteriors@gmail.com",
    href: "mailto:Info.thejkinteriors@gmail.com",
  },
  {
    icon: Clock,
    label: "Response",
    value: "Usually within 24 hours",
    href: null,
  },
];

const projectTypes = [
  "Residential",
  "Commercial",
  "Modular Kitchen",
  "Custom Furniture",
  "Interior Styling",
  "Full Turnkey",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    budget: "",
    message: "",
  });

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
          body: JSON.stringify(formData),
        }
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Residential",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#ECECEC] text-neutral-950">
      <section className="relative min-h-[82vh] overflow-hidden pt-28 text-white">
        <img
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2200"
          alt="Interior design consultation room"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.76),rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.12)),linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.2))]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(82vh-7rem)] max-w-7xl flex-col justify-end px-5 pb-16 sm:px-6 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8b99c]">
              Contact JK Interiors
            </p>
            <h1 className="mt-5 max-w-[11ch] text-[clamp(4rem,10vw,9.2rem)] font-semibold leading-[0.86] tracking-tight">
              Let us begin with your space.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/76">
              Tell us what you want to create. We will help you define the design direction,
              scope, timeline, and next step.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:py-32">
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6a50]">
            Studio Desk
          </p>
          <h2 className="mt-5 max-w-[10ch] text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.9] tracking-tight">
            Share the brief.
          </h2>
          <p className="mt-7 max-w-md text-base leading-8 text-neutral-600">
            A good consultation starts with context: the site, rooms involved, budget comfort,
            timeline, and the feeling you want the finished space to carry.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden border border-neutral-300 bg-neutral-300">
            {contactItems.map((item) => {
              const content = (
                <div className="flex items-start gap-4 bg-white p-5 transition-colors hover:bg-[#F7F5F2]">
                  <item.icon className="mt-1 h-5 w-5 flex-shrink-0 text-[#8a6a50]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                      {item.label}
                    </p>
                    <p className="mt-2 break-words text-base font-medium text-neutral-950">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </motion.aside>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10"
        >
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-neutral-200 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6a50]">
                Project Inquiry
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Consultation request
              </h3>
            </div>
            <Send className="hidden h-7 w-7 text-[#8a6a50] sm:block" />
          </div>

          {submitStatus === "success" && (
            <div className="mb-6 border border-green-200 bg-green-50 p-4 text-sm text-green-700">
              Thank you. Your inquiry has been sent, and we will get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-6 border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              Something went wrong while sending. Please call or WhatsApp us directly.
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <label>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Name
              </span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-3 w-full border border-neutral-300 bg-[#F7F5F2] px-4 py-4 outline-none transition-colors focus:border-[#b08968]"
              />
            </label>

            <label>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Phone
              </span>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-3 w-full border border-neutral-300 bg-[#F7F5F2] px-4 py-4 outline-none transition-colors focus:border-[#b08968]"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Email
            </span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-3 w-full border border-neutral-300 bg-[#F7F5F2] px-4 py-4 outline-none transition-colors focus:border-[#b08968]"
            />
          </label>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Project Type
              </span>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="mt-3 w-full border border-neutral-300 bg-[#F7F5F2] px-4 py-4 outline-none transition-colors focus:border-[#b08968]"
              >
                {projectTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>

            <label>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Budget Range
              </span>
              <input
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Optional"
                className="mt-3 w-full border border-neutral-300 bg-[#F7F5F2] px-4 py-4 outline-none transition-colors focus:border-[#b08968]"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Project Notes
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={7}
              placeholder="Tell us about the rooms, location, timeline, and what you want the space to feel like."
              className="mt-3 w-full resize-none border border-neutral-300 bg-[#F7F5F2] px-4 py-4 outline-none transition-colors focus:border-[#b08968]"
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
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.34em] text-[#b08968]">
              <MapPin className="h-4 w-4" /> Location
            </p>
            <h2 className="mt-5 max-w-[11ch] text-[clamp(2.8rem,6vw,5.6rem)] font-semibold leading-[0.92] tracking-tight">
              Visit or call the studio.
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-white/62">
              Spellbound Coworking and Office Spaces, HT Road, Osmania University Teachers Colony,
              Sainikpuri, Secunderabad, Telangana.
            </p>
          </div>

          <div className="min-h-[360px] overflow-hidden bg-white/8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0647949544897!2d78.5492!3d17.4837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b6b5a123ad5%3A0xe30d373d2ac9e82!2sSpellbound%20Coworking%20and%20Office%20Spaces!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JK Interiors location map"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
