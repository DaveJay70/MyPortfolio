"use client";

import React from "react";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-white/[0.08] bg-[hsl(260_42%_5%/0.92)] shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      {/* Top Accent */}
      <div className="pointer-events-none h-[2px] w-full bg-gradient-to-r from-cyan-400/80 via-violet-400 to-pink-400/80" />

      <nav className="relative mx-auto flex w-full items-center gap-2 overflow-hidden px-3 py-2.5 sm:px-5 sm:py-3 lg:px-8">
        {/* Background Glows */}
        <div className="pointer-events-none absolute -left-20 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative z-10 flex w-full min-w-0 items-center gap-3">
          {/* Logo */}
          <a
            href="#home"
            className="group flex shrink-0 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-1.5 no-underline transition-all duration-300 hover:border-violet-500/35 hover:bg-white/[0.07] hover:shadow-[0_0_20px_rgba(139,92,246,0.18)] sm:px-3 sm:py-2"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg ring-1 ring-white/10 sm:h-10 sm:w-10">
              <img
                src="/logo.png"
                alt="logo"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>

            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-bold text-white">Jay Dave</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-violet-300/90">
                Portfolio
              </span>
            </span>
          </a>

          {/* Menu */}
          <div className="min-w-0 flex-1 md:flex md:justify-center">
            <ul className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/[0.08] bg-black/30 p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {links.map((link) => (
                <li key={link.id} className="shrink-0">
                  <a
                    href={`#${link.id}`}
                    className="group relative block overflow-hidden rounded-full px-3 py-2 text-xs font-medium text-zinc-400 no-underline transition-all duration-300 hover:text-white md:px-4"
                  >
                    {/* Modern Hover Background */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-pink-500/20 opacity-0 blur-md transition-all duration-300 group-hover:opacity-100" />

                    {/* Glass Layer */}
                    <span className="absolute inset-0 rounded-full border border-transparent bg-white/[0.03] opacity-0 transition-all duration-300 group-hover:border-white/10 group-hover:opacity-100" />

                    {/* Animated Underline */}
                    <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 transition-all duration-300 group-hover:w-8" />

                    {/* Text */}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-[length:200%_auto] px-4 py-2 text-xs font-bold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_16px_rgba(124,58,237,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(124,58,237,0.4)] sm:px-5 sm:py-2.5"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Hire Me ✦
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
