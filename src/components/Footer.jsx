"use client";

import React from "react";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const links = [
    ["Services", "/services"],
    ["Gallery", "/gallery"],
    ["Philosophy", "/philosophy"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="text-3xl font-semibold tracking-tight">
              JK Interiors
            </Link>
            <p className="mt-5 max-w-md text-base leading-7 text-white/58">
              Premium interior design and execution for homes, workplaces, kitchens, furniture,
              and complete transformations.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium text-white/62 sm:gap-3">
            {links.map(([label, href]) => (
              <Link key={label} href={href} className="transition-colors hover:text-[#b08968]">
                {label}
              </Link>
            ))}
          </nav>

          <div className="space-y-4 text-sm text-white/62">
            <a href="tel:+919063096060" className="flex items-center gap-3 transition-colors hover:text-[#b08968]">
              <Phone className="h-4 w-4" /> +91 9063096060
            </a>
            <a
              href="mailto:Info.thejkinteriors@gmail.com"
              className="flex items-center gap-3 transition-colors hover:text-[#b08968]"
            >
              <Mail className="h-4 w-4" /> Info.thejkinteriors@gmail.com
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
              Spellbound Coworking and Office Spaces, HT Road, Sainikpuri, Secunderabad.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} JK Interiors. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/the.jkinteriors?igsh=MXZ6YXBlYmppNXNoaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#b08968]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="transition-colors hover:text-[#b08968]" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
