"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ClipboardCheck,
  Clock,
  Compass,
  Layers3,
  PenTool,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    num: "01",
    icon: Compass,
    title: "Spatial Intelligence",
    description:
      "Plans are resolved around movement, furniture scale, natural light, storage, and the way each room is actually used.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Material Authority",
    description:
      "Finishes, textures, hardware, lighting, and color are edited into one calm language instead of separate decoration choices.",
  },
  {
    num: "03",
    icon: Shield,
    title: "Site Discipline",
    description:
      "Execution is guided through vendor coordination, quality checks, drawings, and practical decisions before they become delays.",
  },
  {
    num: "04",
    icon: Clock,
    title: "Delivery Clarity",
    description:
      "Approvals, milestones, budgets, and handover expectations are mapped early so the project moves with confidence.",
  },
];

const stats = [
  { value: "250+", label: "project conversations shaped" },
  { value: "100%", label: "handover-focused execution" },
  { value: "02+", label: "years of active practice" },
];

const process = [
  {
    icon: Compass,
    num: "01",
    title: "Read the Space",
    text: "Measure, observe light, understand routines, and define the design problem clearly.",
  },
  {
    icon: Layers3,
    num: "02",
    title: "Build the System",
    text: "Resolve layout, storage, material direction, lighting, and the main visual language.",
  },
  {
    icon: ClipboardCheck,
    num: "03",
    title: "Control the Details",
    text: "Document finishes, furniture, fixtures, approvals, vendors, and execution priorities.",
  },
  {
    icon: Sparkles,
    num: "04",
    title: "Finish With Intent",
    text: "Layer styling, review quality, prepare handover, and make the room ready for living.",
  },
];

const marqueeWords = [
  "Spatial Intelligence",
  "Material Authority",
  "Site Discipline",
  "Delivery Clarity",
  "Spatial Intelligence",
  "Material Authority",
  "Site Discipline",
  "Delivery Clarity",
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-[#EBEBEB] text-neutral-950">

      {/* ── HERO ── */}
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-0 sm:px-6 sm:pt-28 lg:pt-36">

        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#8a6a50]" />
          <p className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#8a6a50]">
            Why JK Interiors
          </p>
        </motion.div>

        <div className="mt-9 grid items-end gap-10 lg:grid-cols-2 lg:gap-24">
          <motion.h2
            variants={fadeUp(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-[clamp(2.8rem,9vw,9rem)] font-semibold leading-[0.84] tracking-[-0.03em]"
          >
            Designed
            <br />
            <em className="not-italic text-[#8a6a50]">to feel</em>
            <br />
            inevitable.
          </motion.h2>

          <motion.div
            variants={fadeUp(0.14)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="pb-2"
          >
            <p className="text-xl font-medium leading-9 tracking-tight text-neutral-600 sm:text-2xl sm:leading-10">
              We do not start with decor. We start with proportion, light, storage, material, and
              the discipline required to make a space work beautifully every day.
            </p>
            <Link
              href="/services"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.26em] text-neutral-950 transition-colors hover:text-[#8a6a50]"
            >
              <span className="border-b-2 border-current pb-1 transition-colors">
                Explore Services
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── MARQUEE STRIP ── */}
      <div className="mt-20 overflow-hidden border-y border-neutral-300 bg-neutral-950 py-[14px]">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {marqueeWords.map((word, i) => (
            <span
              key={i}
              className="mx-7 inline-flex items-center gap-7 text-[10px] font-bold uppercase tracking-[0.4em] text-[#b08968]"
            >
              {word}
              <span className="h-1 w-1 rounded-full bg-white/20" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── IMAGE + STATS ── */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Image */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="group relative min-h-[560px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1800"
              alt="Premium interior design by JK Interiors"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.4em] text-[#d8b99c]">
                Residential · Commercial · Turnkey
              </p>
              <h3 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-[2.2rem] sm:leading-[1.15]">
                A room should look calm because every hidden decision is resolved.
              </h3>
            </div>
          </motion.div>

          {/* Stats panel */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col bg-neutral-950 p-8 text-white sm:p-10"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#b08968]">
              By the numbers
            </p>
            <div className="mt-auto flex flex-col divide-y divide-white/[0.08]">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                  className="py-9 first:pt-10 last:pb-0"
                >
                  <p className="text-[clamp(2.6rem,6.5vw,5.8rem)] font-semibold leading-none tracking-tight">
                    {value}
                  </p>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.32em] text-white/40">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── CAPABILITIES ── */}
      <div className="mx-auto max-w-7xl px-5 pb-28 sm:px-6 lg:pb-36">
        <div className="border-t border-neutral-300 pt-10">
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#8a6a50]"
          >
            Core Capabilities
          </motion.p>

          <div className="mt-10 grid gap-px overflow-hidden bg-neutral-300 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <motion.article
                key={cap.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
                className="group relative overflow-hidden bg-[#EBEBEB] p-8 transition-colors duration-300 hover:bg-white sm:p-9"
              >
                {/* Step number */}
                <span className="absolute right-7 top-7 text-[10px] font-bold tracking-[0.32em] text-neutral-300 transition-colors duration-300 group-hover:text-[#d8b99c]">
                  {cap.num}
                </span>

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center border border-neutral-200 bg-white text-[#8a6a50] transition-all duration-300 group-hover:border-[#8a6a50]/30 group-hover:shadow-sm">
                  <cap.icon className="h-[18px] w-[18px]" />
                </div>

                <h3 className="mt-12 text-xl font-semibold tracking-tight">{cap.title}</h3>
                <p className="mt-3.5 text-sm leading-[1.7] text-neutral-500">{cap.description}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#8a6a50] transition-all duration-500 ease-out group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* ── DARK PROCESS SECTION ── */}
      <div className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-6 lg:py-36">

          {/* Header */}
          <div className="grid items-end gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <p className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.42em] text-[#b08968]">
                <Sparkles className="h-3.5 w-3.5" />
                Studio Method
              </p>
              <h3 className="mt-6 text-[clamp(2.2rem,7vw,6rem)] font-semibold leading-[0.88] tracking-tight">
                Precision from first brief to final handover.
              </h3>
            </motion.div>

            <motion.p
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="pb-1 text-lg leading-8 text-white/50"
            >
              The process is intentionally structured, so creative decisions and site execution
              move together instead of competing with each other.
            </motion.p>
          </div>

          {/* Process cards */}
          <div className="mt-16 grid gap-px overflow-hidden bg-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
                className="group relative bg-neutral-950 p-8 transition-colors duration-300 hover:bg-[#111111] sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-white/10 text-[#b08968] transition-all duration-300 group-hover:border-[#b08968]/40">
                    <step.icon className="h-[17px] w-[17px]" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.32em] text-white/18">
                    {step.num}
                  </span>
                </div>
                <h4 className="mt-11 text-lg font-semibold tracking-tight">{step.title}</h4>
                <p className="mt-3.5 text-sm leading-[1.7] text-white/48">{step.text}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#b08968] transition-all duration-500 ease-out group-hover:w-full" />
              </motion.div>
            ))}
          </div>

          {/* Footer checks */}
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/[0.08] pt-8">
            {["Design direction", "Execution control", "Handover readiness"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-white/50"
              >
                <Check className="h-3.5 w-3.5 flex-shrink-0 text-[#b08968]" />
                {item}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
