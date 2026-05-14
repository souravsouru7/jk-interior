"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "A Dream Come True!",
    text: "JK Interior Services turned my vision into reality. Their attention to detail and professionalism exceeded my expectations.",
    author: "Rakesh Padmashali",
    location: "Hyderabad",
  },
  {
    quote: "A Seamless Experience",
    text: "From consultation to handover, the team was attentive, innovative, and delivered exactly what they promised.",
    author: "Bhanu",
    location: "Uppal",
  },
  {
    quote: "Exceeded All Expectations",
    text: "They created a stunning modular kitchen within my budget. Their creativity and efficiency amazed me.",
    author: "Anu Pandey",
    location: "Bachupally",
  },
  {
    quote: "Outstanding Craftsmanship",
    text: "The customized furniture for my living room is unique, functional, and fits perfectly into the space.",
    author: "Venkatesh",
    location: "Jangaon",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#b08968]">
              Client Notes
            </p>
            <h2 className="mt-5 max-w-[12ch] text-[clamp(2.2rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-tight">
              Spaces people settle into.
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-white/64">
              The best result is a home or workplace that feels calm on day one and keeps working
              beautifully after the project team leaves.
            </p>
          </motion.div>

          <div className="grid gap-px overflow-hidden bg-white/12 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                className="bg-neutral-950 p-7 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <Quote className="h-8 w-8 text-[#b08968]" />
                  <div className="flex gap-1 text-[#b08968]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">{testimonial.quote}</h3>
                <p className="mt-4 min-h-[7rem] text-base leading-7 text-white/68">
                  {testimonial.text}
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#b08968] text-sm font-semibold text-white">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-white/45">{testimonial.location}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
