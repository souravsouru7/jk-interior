"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Check,
  ClipboardCheck,
  Compass,
  Home,
  Layers3,
  Palette,
  PiggyBank,
  Ruler,
  Sofa,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Design",
    eyebrow: "Homes, apartments, villas",
    subtitle: "Personal spaces shaped around daily life.",
    description:
      "We create refined homes that balance comfort, storage, light, and personality. Every room is planned as part of a larger story, from the first layout to the last styling detail.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800",
    features: ["Living rooms", "Bedrooms", "Bathrooms", "Kids' rooms"],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Design",
    eyebrow: "Offices, retail, hospitality",
    subtitle: "Workplaces and public spaces with intent.",
    description:
      "We design commercial interiors that support productivity, brand recall, guest comfort, and operational flow, without losing the quiet polish of a premium environment.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800",
    features: ["Office planning", "Retail layouts", "Hospitality interiors", "Brand-led spaces"],
  },
  {
    id: "modular-kitchen",
    icon: UtensilsCrossed,
    title: "Modular Kitchens",
    eyebrow: "Storage, surfaces, appliances",
    subtitle: "High-function kitchens with a calm finish.",
    description:
      "From compact city kitchens to open family kitchens, we plan every cabinet, counter, appliance zone, and finish so cooking feels effortless and the room stays elegant.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1800",
    features: ["Custom layouts", "Smart storage", "Premium finishes", "Appliance integration"],
  },
  {
    id: "custom-furniture",
    icon: Sofa,
    title: "Customized Furniture",
    eyebrow: "Built-ins, wardrobes, seating",
    subtitle: "Furniture made to fit the room perfectly.",
    description:
      "We design custom furniture that solves specific spatial problems, improves storage, and gives each room a more complete architectural character.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1800",
    features: ["Sofas and seating", "Wardrobes", "Tables and desks", "Built-in storage"],
  },
  {
    id: "interior-styling",
    icon: Palette,
    title: "Interior Styling",
    eyebrow: "Art, decor, lighting, textiles",
    subtitle: "The final layer that makes a space feel alive.",
    description:
      "Styling brings warmth and specificity to a completed design. We curate art, lights, decor, rugs, cushions, and accessories so the space feels finished, not filled.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1800",
    features: ["Decor selection", "Lighting mood", "Color coordination", "Furniture placement"],
  },
  {
    id: "budget-friendly",
    icon: PiggyBank,
    title: "Budget-Friendly Solutions",
    eyebrow: "Phased, smart, efficient",
    subtitle: "Good design with practical financial control.",
    description:
      "We help prioritize the work, choose intelligent materials, and phase execution where needed, so the result feels considered without unnecessary spend.",
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1800",
    features: ["Material alternatives", "Space optimization", "Phased execution", "Focused styling"],
  },
];

const process = [
  {
    icon: Compass,
    title: "Discovery",
    text: "We understand the site, lifestyle, goals, constraints, budget, and timeline.",
  },
  {
    icon: Ruler,
    title: "Planning",
    text: "Layouts, circulation, storage, lighting, and major material decisions are resolved.",
  },
  {
    icon: Layers3,
    title: "Detailing",
    text: "Furniture, finishes, drawings, fixtures, and site-ready decisions are documented.",
  },
  {
    icon: ClipboardCheck,
    title: "Execution",
    text: "We coordinate vendors, track quality, review progress, and prepare for handover.",
  },
];

const Services = () => {
  return (
    <main className="bg-[#ECECEC] text-neutral-950">
      <section className="relative min-h-[92vh] overflow-hidden pt-28 text-white">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2200"
          alt="Premium interior living room"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.74),rgba(0,0,0,0.42)_45%,rgba(0,0,0,0.14)),linear-gradient(180deg,rgba(0,0,0,0.34),rgba(0,0,0,0.24))]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-7rem)] max-w-7xl flex-col justify-end px-5 pb-16 sm:px-6 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8b99c]">
              Interior Design Services
            </p>
            <h1 className="mt-5 max-w-[12ch] text-[clamp(2.6rem,9vw,9.5rem)] font-semibold leading-[0.86] tracking-tight">
              Design that works beautifully.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/76">
              Complete interior design and execution for homes, workspaces, kitchens, furniture,
              and final styling. Quiet luxury, practical planning, and controlled delivery.
            </p>
          </motion.div>

          <div className="mt-8 hidden max-w-3xl grid-cols-3 border-y border-white/18 sm:grid sm:mt-12">
            {[
              ["01", "Plan"],
              ["02", "Design"],
              ["03", "Deliver"],
            ].map(([number, label]) => (
              <div key={label} className="py-5 pr-5">
                <p className="text-sm font-semibold text-[#d8b99c]">{number}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.26em] text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-300 bg-[#ECECEC]">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 py-5 sm:px-6">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="whitespace-nowrap border border-neutral-300 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600 transition-colors hover:border-[#b08968] hover:text-[#8a6a50]"
            >
              {service.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
        <div className="grid gap-8">
          {services.map((service, index) => (
            <motion.article
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className={`grid overflow-hidden border border-neutral-300 bg-white lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&_.service-image]:order-2" : ""
              }`}
            >
              <div className="service-image relative min-h-[360px] overflow-hidden lg:min-h-[560px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.035]"
                />
                <div className="absolute left-5 top-5 bg-neutral-950 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-9 lg:min-h-[520px] lg:p-12">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center border border-neutral-300 bg-[#ECECEC] text-[#8a6a50]">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6a50]">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-4 text-[clamp(2rem,5vw,5.2rem)] font-semibold leading-[0.94] tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-xl font-medium leading-7 text-neutral-950">
                    {service.subtitle}
                  </p>
                  <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600">
                    {service.description}
                  </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 border-t border-neutral-200 pt-4">
                      <Check className="h-4 w-4 flex-shrink-0 text-[#8a6a50]" />
                      <span className="text-sm font-medium text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#b08968]">
                Working Method
              </p>
              <h2 className="mt-5 max-w-[11ch] text-[clamp(2.2rem,7vw,6rem)] font-semibold leading-[0.9] tracking-tight">
                From brief to handover.
              </h2>
              <p className="mt-7 max-w-md text-base leading-7 text-white/62">
                A polished result comes from controlled decisions. Our process keeps design,
                budget, vendor coordination, and execution moving in one direction.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden bg-white/12 md:grid-cols-2">
              {process.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                  className="bg-neutral-950 p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <item.icon className="h-6 w-6 text-[#b08968]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.26em] text-white/32">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-12 text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/62">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECECEC]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
          <div className="grid items-end gap-10 border-y border-neutral-300 py-12 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6a50]">
                <Sparkles className="h-4 w-4" /> Project Inquiry
              </p>
              <h2 className="mt-5 max-w-3xl text-[clamp(2rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-tight">
                Ready to discuss your interior?
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 bg-neutral-950 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#8a6a50] sm:w-auto"
            >
              Start Now <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
