"use client";

import { motion, useInView } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useRef, useState, useEffect } from "react";

/* ─── Typewriter ─── */
function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    if (!deleting && displayed.length < word.length) {
      const t = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        75
      );
      return () => clearTimeout(t);
    } else if (!deleting && displayed.length === word.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    } else if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    } else {
      setDeleting(false);
      setIdx((prev) => (prev + 1) % words.length);
    }
  }, [displayed, deleting, idx, words]);

  return (
    <span className="relative inline-flex items-center">
      {/* Animated gradient on typewriter text */}
      <span className="animated-gradient-role">{displayed}</span>
      <span className="inline-block w-[2px] h-[0.9em] bg-cyan-400 ml-1 animate-pulse align-middle" />
    </span>
  );
}

/* ─── Floating particle orb ─── */
function Orb({
  style,
  delay = 0,
  size = 300,
  color = "rgba(139,92,246,0.25)",
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(1px)",
        ...style,
      }}
      animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
      transition={{
        duration: 7 + delay,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ─── Skill data ─── */
const SKILLS = [
  { name: "React", level: "Expert", pct: 92, color: "#22d3ee", icon: "⚛" },
  { name: "Next.js", level: "Expert", pct: 89, color: "#a78bfa", icon: "▲" },
  { name: "Node.js", level: "Advanced", pct: 78, color: "#4ade80", icon: "⬡" },
  { name: "Supabase", level: "Pro", pct: 75, color: "#3ecf8e", icon: "⚡" },
  { name: "Unity", level: "Advanced", pct: 83, color: "#f472b6", icon: "◈" },
  { name: "C#", level: "Advanced", pct: 80, color: "#818cf8", icon: "#" },
];

/* ─── Laptop Screen ─── */
function LaptopScreen() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative">
      {/* Outer glowing ring */}
      <motion.div
        className="absolute -inset-4 rounded-[20px] pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, #7c3aed 30%, transparent 50%, #22d3ee 80%, transparent)",
          filter: "blur(18px)",
          opacity: 0.35,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Screen bezel */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          background: "#0d0d1a",
          border: "2px solid rgba(139,92,246,0.55)",
          boxShadow:
            "0 0 50px rgba(124,58,237,0.3), 0 0 100px rgba(124,58,237,0.1), inset 0 0 30px rgba(0,0,0,0.6)",
        }}
      >
        {/* Top glow strip */}
        <motion.div
          className="h-[3px] w-full"
          style={{
            background:
              "linear-gradient(90deg, #7c3aed, #ec4899, #22d3ee, #7c3aed)",
            backgroundSize: "300% 100%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "300% 0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Camera + title bar */}
        <div className="flex items-center justify-center py-2 px-4 border-b border-white/5">
          <div className="flex gap-1.5 absolute left-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[10px] font-medium tracking-widest text-white/25">
            skills.exe
          </span>
        </div>

        {/* Screen content */}
        <div
          className="p-4 bg-[#080814] relative overflow-hidden"
          style={{ minHeight: 220 }}
        >
          {/* Scan line */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)",
            }}
            animate={{ top: ["-2px", "102%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-2">
            {SKILLS.map((sk, i) => (
              <motion.div
                key={sk.name}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.3 + i * 0.12,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="group rounded-lg p-2.5 cursor-default"
                style={{
                  background: `${sk.color}12`,
                  border: `1px solid ${sk.color}28`,
                  transition: "all 0.25s ease",
                }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center text-[13px] shrink-0"
                    style={{ background: `${sk.color}18`, color: sk.color }}
                  >
                    {sk.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold leading-none text-slate-200">
                      {sk.name}
                    </p>
                    <p
                      className="mt-0.5 text-[9px] font-medium"
                      style={{ color: sk.color }}
                    >
                      {sk.level}
                    </p>
                  </div>
                </div>
                <div className="h-[3px] rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${sk.color}, ${sk.color}88)`,
                    }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${sk.pct}%` } : {}}
                    transition={{
                      delay: 0.5 + i * 0.12,
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Laptop base */}
      <div
        className="h-5 rounded-b-2xl flex items-center justify-center relative"
        style={{
          background: "linear-gradient(180deg, #1a1030 0%, #100820 100%)",
          border: "2px solid rgba(139,92,246,0.4)",
          borderTop: "none",
          boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="w-14 h-2.5 rounded-sm"
          style={{
            background: "rgba(139,92,246,0.15)",
            border: "1px solid rgba(139,92,246,0.25)",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Floating chip ─── */
function FloatingChip({ label, dot, style, delay = 0, animDir = 1 }) {
  return (
    <motion.div
      className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 z-20 pointer-events-none"
      style={{
        background: "rgba(8,5,20,0.88)",
        border: "1px solid rgba(139,92,246,0.4)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        whiteSpace: "nowrap",
        ...style,
      }}
      animate={{ y: [0, -10 * animDir, 0] }}
      transition={{
        duration: 4 + delay,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-2 h-2 rounded-full shrink-0"
        style={{ background: dot }}
      />
      {label}
    </motion.div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col bg-background"
    >
      {/* ── Animated gradient keyframes (palette: violet / pink / cyan) ── */}
      <style>{`
        @keyframes gradientFlow {
          0%   { background-position: 0%   50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0%   50%; }
        }

        /* Name: violet → pink → cyan — room for descenders (y, g, p) */
        .animated-name {
          background: linear-gradient(90deg, #a78bfa, #ec4899, #22d3ee, #a78bfa);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 4s ease infinite;
          display: block;
          line-height: 1.18;
          padding-bottom: 0.22em;
        }

        /* Role typewriter: cyan → violet → pink */
        .animated-gradient-role {
          background: linear-gradient(90deg, #22d3ee, #a78bfa, #ec4899, #22d3ee);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 4s ease infinite;
          font-weight: 600;
          line-height: 1.35;
          padding-bottom: 0.06em;
        }
      `}</style>

      {/* ── Background Grid ── */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Orbs ── */}
      <Orb
        style={{ left: -120, top: "5%" }}
        size={480}
        color="rgba(139,92,246,0.3)"
        delay={0}
      />
      <Orb
        style={{ right: -80, bottom: "-10%" }}
        size={400}
        color="rgba(236,72,153,0.18)"
        delay={2}
      />
      <Orb
        style={{ left: "38%", top: "15%" }}
        size={200}
        color="rgba(6,182,212,0.12)"
        delay={1}
      />

      {/* ── Content: one page scroll only; padding clears floating navbar ── */}
      <div className="z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-24 pt-24 sm:px-8 sm:pb-28 sm:pt-28 lg:py-20">
        <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* ── LEFT ── */}
          <div className="flex min-w-0 flex-col overflow-visible">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full mb-6 text-sm font-medium"
              style={{
                border: "1px solid rgba(139,92,246,0.45)",
                background: "rgba(139,92,246,0.1)",
                color: "#c4b5fd",
                letterSpacing: "0.03em",
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Available for new opportunities
            </motion.div>

            {/* ── Name block ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 overflow-visible"
            >
              <p className="mb-2 text-xl font-medium leading-snug text-zinc-500 md:text-2xl">
                {"Hey, I'm"}
              </p>

              <h1
                className="animated-name font-extrabold tracking-tight"
                style={{
                  fontSize: "clamp(2.75rem, 7vw + 0.5rem, 5.25rem)",
                }}
              >
                Jay Dave
              </h1>
            </motion.div>

            {/* Role typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 flex min-h-[2.75rem] items-center text-xl font-semibold sm:text-2xl md:text-[1.55rem]"
            >
              <span className="mr-2 text-zinc-600">&gt;</span>
              <Typewriter
                words={[
                  "Full Stack Developer.",
                  "MERN Specialist.",
                  "Game Developer.",
                  "ASP.NET Developer.",
                ]}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 max-w-lg text-base leading-relaxed text-zinc-400"
            >
              Crafting premium digital experiences through robust architecture
              and pixel-perfect design. Specializing in MERN Stack, ASP.NET
              Core, Unity Game Dev &amp; modern frontend frameworks.
            </motion.p>

            {/* Buttons + Socials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #db2777)",
                  boxShadow: "0 0 30px rgba(124,58,237,0.35)",
                }}
              >
                View My Work
              </a>

              <div className="flex gap-3 ml-1">
                {[
                  {
                    href: "https://github.com/DaveJay70",
                    icon: Github,
                    hoverColor: "#22d3ee",
                  },
                  {
                    href: "https://www.linkedin.com/in/jaydave07",
                    icon: Linkedin,
                    hoverColor: "#a78bfa",
                  },
                  {
                    href: "mailto:jaydave8305@gmail.com",
                    icon: Mail,
                    hoverColor: "#f472b6",
                  },
                ].map(({ href, icon: Icon, hoverColor }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    whileHover={{ scale: 1.12 }}
                    className="p-3 rounded-full transition-all duration-300"
                    style={{
                      border: "1px solid rgba(100,100,130,0.4)",
                      background: "rgba(15,10,30,0.6)",
                      color: "#94a3b8",
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Laptop ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="flex justify-center lg:justify-end relative mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-[400px]">
              {/* Floating chips */}
              <FloatingChip
                label="Supabase"
                dot="#3ecf8e"
                style={{ left: -70, top: "10%" }}
                delay={0}
                animDir={1}
              />
              <FloatingChip
                label="Unity"
                dot="#f472b6"
                style={{ left: -55, bottom: "15%" }}
                delay={1.2}
                animDir={1}
              />
              <FloatingChip
                label="Next.js"
                dot="#a78bfa"
                style={{ right: -70, top: "20%" }}
                delay={0}
                animDir={1.2}
              />

              <FloatingChip
                label="C#"
                dot="#818cf8"
                style={{ right: -40, bottom: "15%" }}
                delay={1}
                animDir={1.2}
              />

              <LaptopScreen />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300/90">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-violet-400" />
        </a>
      </motion.div>
    </section>
  );
}
