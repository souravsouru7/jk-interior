"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brush,
  Check,
  Clock,
  Eye,
  Heart,
  Layers3,
  Leaf,
  Ruler,
  Users,
} from "lucide-react";
import Link from "next/link";

const principles = [
  {
    icon: Users,
    title: "Client-Centered",
    text: "The brief begins with how you live, work, host, rest, cook, store, and move through the space.",
  },
  {
    icon: Ruler,
    title: "Function First",
    text: "Beauty works harder when circulation, storage, lighting, and ergonomics are resolved early.",
  },
  {
    icon: Clock,
    title: "Timeless Over Trend",
    text: "We use trends carefully, favoring proportion, material honesty, and details that age with dignity.",
  },
  {
    icon: Leaf,
    title: "Responsible Choices",
    text: "Durable materials, efficient lighting, and considered sourcing help the space perform for years.",
  },
  {
    icon: Eye,
    title: "Detail Discipline",
    text: "Edges, junctions, handles, light temperature, and scale are treated as design decisions.",
  },
  {
    icon: Brush,
    title: "Creative Collaboration",
    text: "We guide the project with design expertise while keeping your preferences visible in every stage.",
  },
];

const values = [
  "Light before decoration",
  "Storage without visual noise",
  "Material palettes with restraint",
  "Furniture scaled to the room",
  "Execution guided by drawings",
  "Comfort that survives daily use",
];

const Philosophy = () => {
  return (
    <main className="bg-[#ECECEC] text-neutral-950">
      <section className="relative min-h-[90vh] overflow-hidden pt-28 text-white">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2200"
          alt="Calm luxury interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.38)_50%,rgba(0,0,0,0.12)),linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.2))]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(90vh-7rem)] max-w-7xl flex-col justify-end px-5 pb-16 sm:px-6 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8b99c]">
              Design Philosophy
            </p>
            <h1 className="mt-5 max-w-[11ch] text-[clamp(4rem,10vw,9.4rem)] font-semibold leading-[0.86] tracking-tight">
              Purpose before polish.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/76">
              We design interiors that look composed because they work clearly. Function, light,
              material, and proportion lead every decision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6a50]">
            Studio Manifesto
          </p>
          <h2 className="mt-5 max-w-[12ch] text-[clamp(3rem,7vw,6.4rem)] font-semibold leading-[0.9] tracking-tight">
            Quiet spaces, exact decisions.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="text-2xl font-medium leading-10 tracking-tight text-neutral-950">
            A beautiful room is not built from decoration alone. It comes from decisions that solve
            daily friction: where things live, how light moves, how furniture supports the body, and
            how materials feel after years of use.
          </p>
          <p className="max-w-2xl text-base leading-8 text-neutral-600">
            Our role is to translate personal taste into a complete spatial system. We keep the work
            calm, edited, and practical, then layer warmth through finishes, furniture, styling, and
            detail.
          </p>
        </motion.div>
      </section>

      <section className="border-y border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6a50]">
                Principles
              </p>
              <h2 className="mt-4 text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-tight">
                What guides the work.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-neutral-600">
              These principles keep every project grounded, whether we are designing one room or an
              entire home.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-neutral-300 bg-neutral-300 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
                className="bg-white p-7 transition-colors hover:bg-[#ECECEC] sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-neutral-300 bg-[#ECECEC] text-[#8a6a50]">
                  <principle.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight">{principle.title}</h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">{principle.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.34em] text-[#b08968]">
              <Heart className="h-4 w-4" /> Design Lens
            </p>
            <h2 className="mt-5 max-w-[12ch] text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.9] tracking-tight">
              Less noise. More intention.
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-white/62">
              We edit constantly. The goal is not to add more, but to make every visible element
              earn its place.
            </p>
          </motion.div>

          <div className="grid gap-px overflow-hidden bg-white/12 sm:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                className="bg-neutral-950 p-6"
              >
                <Check className="h-5 w-5 text-[#b08968]" />
                <p className="mt-8 text-xl font-semibold tracking-tight">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ECECEC]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-8 border-y border-neutral-300 py-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6a50]">
                <Layers3 className="h-4 w-4" /> Begin With Clarity
              </p>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-tight">
                Let us design around the way you live.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-neutral-950 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#8a6a50]"
            >
              Start A Project <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Philosophy;
