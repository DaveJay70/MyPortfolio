"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Gamepad2, GraduationCap } from "lucide-react";

/* ── Card data with explicit static colors ── */
const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    description:
      "Building highly interactive, scalable, and pixel-perfect UIs with React, Next.js, and pure CSS mastery.",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.25)",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description:
      "Architecting robust APIs and data systems using Node.js, Express, ASP.NET Core, and MongoDB / SQL and Supabase. ",
    accent: "#ec4899",
    glow: "rgba(236,72,153,0.11)",
    border: "rgba(236,72,153,0.22)",
  },
  {
    icon: Gamepad2,
    title: "Mobile & Games",
    description:
      "Developing cross-platform mobile apps with Flutter and immersive 2D/3D games using Unity and C#.",
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.11)",
    border: "rgba(34,211,238,0.22)",
  },
  {
    icon: GraduationCap,
    title: "Educator & Mentor",
    description:
      "Teaching Assistant at Darshan University — guiding students through ASP.NET Core and modern software architecture.",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.25)",
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-32" ref={ref}>

      {/* ── Background accent blobs ── */}
      <div
        className="absolute pointer-events-none -z-10"
        style={{
          left: "10%", top: "20%",
          width: 420, height: 420,
          background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none -z-10"
        style={{
          right: "8%", bottom: "15%",
          width: 340, height: 340,
          background: "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Eyebrow label */}
          <span className="portfolio-eyebrow mx-auto">About Me</span>

          <h2
            className="mb-5 font-extrabold tracking-tight text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Engineering{" "}
            <span className="portfolio-gradient-text">Excellence</span>
          </h2>

          {/* Decorative divider */}
          <div className="portfolio-divider mb-6">
            <div className="portfolio-divider-line bg-gradient-to-r from-transparent to-cyan-500/50" />
            <div className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 via-violet-400 to-pink-400" />
            <div className="portfolio-divider-line bg-gradient-to-l from-transparent to-pink-500/50" />
          </div>

          <p className="portfolio-muted mx-auto max-w-2xl text-lg leading-relaxed">
            I bridge the gap between complex engineering problems and elegant,
            user-centric solutions. With deep expertise across the full stack —
            from fluid MERN &amp; ASP.NET backends to pixel-perfect interfaces —
            I build software that truly performs.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 + 0.25 }}
              className="group relative rounded-2xl p-7 flex flex-col gap-5 cursor-default"
              style={{
                background: `linear-gradient(145deg, ${item.glow}, rgba(255,255,255,0.015))`,
                border: `1px solid ${item.border}`,
                backdropFilter: "blur(12px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 50px ${item.glow}, 0 0 0 1px ${item.border}`,
              }}
            >
              {/* Icon badge */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `${item.accent}18`,
                  border: `1px solid ${item.accent}30`,
                }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.accent }} />
              </div>

              {/* Text */}
              <div>
                <h3
                  className="text-base font-bold text-white mb-2 leading-snug"
                >
                  {item.title}
                </h3>
                <p className="portfolio-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Quick-stat row ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "3+", label: "Years Experience", color: "#8b5cf6" },
            { value: "20+", label: "Projects Shipped", color: "#f43f5e" },
            { value: "5+", label: "Tech Stacks", color: "#06b6d4" },
            { value: "100%", label: "Passion for Craft", color: "#f59e0b" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-xl px-6 py-5 flex flex-col items-center gap-1"
              style={{
                background: `${stat.color}0d`,
                border: `1px solid ${stat.color}20`,
              }}
            >
              <span
                className="text-3xl font-extrabold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-center" style={{ color: "#6b7280" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
