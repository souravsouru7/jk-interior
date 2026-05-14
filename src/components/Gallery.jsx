"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Grid2X2, Maximize2, X } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Quiet Living Room",
    category: "Residential",
    location: "Hyderabad",
    size: "tall",
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1500",
  },
  {
    id: 2,
    title: "Marble Kitchen Suite",
    category: "Kitchen",
    location: "Secunderabad",
    size: "wide",
    url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600",
  },
  {
    id: 3,
    title: "Soft Neutral Bedroom",
    category: "Residential",
    location: "Bachupally",
    size: "square",
    url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1500",
  },
  {
    id: 4,
    title: "Focused Office",
    category: "Commercial",
    location: "HITEC City",
    size: "square",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1500",
  },
  {
    id: 5,
    title: "Built-In Wardrobe",
    category: "Furniture",
    location: "Jubilee Hills",
    size: "tall",
    url: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1500",
  },
  {
    id: 6,
    title: "Layered Lounge",
    category: "Styling",
    location: "Sainikpuri",
    size: "wide",
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600",
  },
  {
    id: 7,
    title: "Compact Dining",
    category: "Furniture",
    location: "Uppal",
    size: "square",
    url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1500",
  },
  {
    id: 8,
    title: "Retail Mood",
    category: "Commercial",
    location: "Hyderabad",
    size: "tall",
    url: "https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=1500",
  },
  {
    id: 9,
    title: "Material Study",
    category: "Styling",
    location: "Studio",
    size: "wide",
    url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1600",
  },
];

const categories = ["All", "Residential", "Kitchen", "Commercial", "Furniture", "Styling"];

function imageClass(size) {
  if (size === "wide") return "md:col-span-2 h-[340px] lg:h-[420px]";
  if (size === "tall") return "h-[520px]";
  return "h-[340px]";
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-[#ECECEC] text-neutral-950">
      <section className="relative min-h-[86vh] overflow-hidden pt-28 text-white">
        <img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2200"
          alt="Interior design gallery hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.34)_48%,rgba(0,0,0,0.12)),linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.2))]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(86vh-7rem)] max-w-7xl flex-col justify-end px-5 pb-16 sm:px-6 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.36em] text-[#d8b99c]">
              <Grid2X2 className="h-4 w-4" /> Project Gallery
            </p>
            <h1 className="mt-5 max-w-[11ch] text-[clamp(2.6rem,9vw,9.6rem)] font-semibold leading-[0.86] tracking-tight">
              Rooms with a point of view.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/76">
              A visual archive of calm materials, precise storage, sculpted light, and spaces built
              for real everyday use.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-neutral-300 bg-[#ECECEC]">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 py-5 sm:px-6">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap border px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition-colors ${
                activeCategory === category
                  ? "border-neutral-950 bg-neutral-950 text-white"
                  : "border-neutral-300 bg-white text-neutral-600 hover:border-[#b08968] hover:text-[#8a6a50]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6a50]">
              Selected Work
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,6vw,5.8rem)] font-semibold leading-[0.9] tracking-tight">
              Portfolio studies.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-neutral-600 lg:justify-self-end">
            Browse by room type or service. Each image represents a design direction JK Interiors
            can adapt to your site, budget, and lifestyle.
          </p>
        </div>

        <motion.div layout className="grid auto-rows-auto gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
                className={`group relative overflow-hidden bg-neutral-950 ${imageClass(project.size)}`}
              >
                <img
                  src={project.url}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(0,0,0,0.72))]" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center bg-white/92 text-neutral-950 opacity-0 transition-opacity duration-300 hover:bg-[#b08968] hover:text-white group-hover:opacity-100"
                  aria-label={`Open ${project.title}`}
                >
                  <Maximize2 className="h-5 w-5" />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/58">
                    {project.category} / {project.location}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#b08968]">
              Your Project
            </p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-tight">
              Bring this level of detail to your space.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-neutral-950 transition-colors hover:bg-[#b08968] hover:text-white sm:w-auto"
          >
            Start Inquiry <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-6xl bg-[#ECECEC]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center bg-neutral-950 text-white transition-colors hover:bg-[#b08968]"
                aria-label="Close image"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={selectedProject.url}
                alt={selectedProject.title}
                className="max-h-[78vh] w-full object-contain bg-neutral-950"
              />
              <div className="flex flex-col gap-2 p-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8a6a50]">
                    {selectedProject.category} / {selectedProject.location}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-500">JK Interiors portfolio reference</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
