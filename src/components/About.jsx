"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Check,
  Clock,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Award, value: "4.5+", label: "years of practice" },
  { icon: Briefcase, value: "50+", label: "completed projects" },
  { icon: Users, value: "100%", label: "client-first process" },
  { icon: ShieldCheck, value: "1 year", label: "warranty support" },
];

const values = [
  "Design around real routines",
  "Keep materials calm and durable",
  "Resolve storage before styling",
  "Communicate clearly through execution",
  "Protect budget with smart priorities",
  "Finish every detail with discipline",
];

const About = () => {
  return (
    <main className="bg-[#ECECEC] text-neutral-950">
      <section className="relative min-h-[90vh] overflow-hidden pt-28 text-white">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2200"
          alt="JK Interiors studio interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.76),rgba(0,0,0,0.42)_48%,rgba(0,0,0,0.12)),linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.22))]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(90vh-7rem)] max-w-7xl flex-col justify-end px-5 pb-16 sm:px-6 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8b99c]">
              About JK Interiors
            </p>
            <h1 className="mt-5 max-w-[11ch] text-[clamp(2.6rem,9vw,9.4rem)] font-semibold leading-[0.86] tracking-tight">
              Spaces with quiet confidence.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/76">
              A Hyderabad-based interior design studio creating practical, elegant, and deeply
              personal spaces for homes and businesses.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6a50]">
            Studio Story
          </p>
          <h2 className="mt-5 max-w-[12ch] text-[clamp(2.2rem,7vw,6.2rem)] font-semibold leading-[0.9] tracking-tight">
            Designing experiences, not just rooms.
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
            JK Interiors works with clients who want spaces that feel beautiful, efficient, and
            natural to use. We combine design sensitivity with site discipline, so the final result
            is not only photogenic but livable.
          </p>
          <p className="max-w-2xl text-base leading-8 text-neutral-600">
            Our team guides each project from first conversation to final handover, translating your
            lifestyle, brand, budget, and site conditions into a clear design direction. The work is
            edited, functional, and warm, with attention to storage, light, materials, and execution.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-24 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative min-h-[520px] overflow-hidden bg-neutral-950"
        >
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1800"
            alt="Premium living room by JK Interiors"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/76 to-transparent p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/58">
              Residential / Commercial
            </p>
            <h3 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight">
              Interiors planned for comfort, storage, and a lasting visual language.
            </h3>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {[
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000",
          ].map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
              className="min-h-[250px] overflow-hidden bg-neutral-950"
            >
              <img src={src} alt="JK Interiors project detail" className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-300 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden bg-neutral-300 px-5 py-16 sm:grid-cols-2 sm:px-6 sm:py-24 lg:grid-cols-4 lg:py-32">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
              className="bg-white p-7"
            >
              <stat.icon className="h-6 w-6 text-[#8a6a50]" />
              <p className="mt-12 text-5xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.34em] text-[#b08968]">
              <HeartHandshake className="h-4 w-4" /> Our Standard
            </p>
            <h2 className="mt-5 max-w-[12ch] text-[clamp(2.2rem,7vw,6rem)] font-semibold leading-[0.9] tracking-tight">
              What clients can expect.
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-white/62">
              Professional design is a partnership. We keep the process transparent, focused, and
              grounded in decisions that improve the finished space.
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
                <Sparkles className="h-4 w-4" /> Work With Us
              </p>
              <h2 className="mt-5 max-w-3xl text-[clamp(2rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-tight">
                Tell us what your space needs to become.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 bg-neutral-950 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#8a6a50] sm:w-auto"
            >
              Start A Project <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
