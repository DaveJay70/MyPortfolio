"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

/* ── Typewriter ── */
function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    if (!deleting && displayed.length < word.length) {
      const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    } else if (!deleting && displayed.length === word.length) {
      const t = setTimeout(() => setDeleting(true), 2500); // pause longer on full word
      return () => clearTimeout(t);
    } else if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((prev) => (prev + 1) % words.length);
    }
  }, [displayed, deleting, idx, words]);

  return (
    <span className="relative inline-flex items-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 font-semibold">
        {displayed}
      </span>
      <span className="inline-block w-[3px] h-[1.1em] bg-pink-500 ml-1 animate-pulse align-middle rounded-full" />
    </span>
  );
}

/* ── Tilt card wrapper ── */
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouse = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes spin-rev {
          to { transform: rotate(-360deg); }
        }
        @keyframes border-flow {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 0.5;  transform: scale(1.05); }
        }
        @keyframes chip-float-up   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes chip-float-down { 0%,100%{transform:translateY(0)} 50%{transform:translateY(12px)}  }
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes hero-badge-pop {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }

        .spin-slow { animation: spin-slow 15s linear infinite; }
        .spin-rev  { animation: spin-rev   10s linear infinite; }

        .border-flow {
          background-size: 300% 300%;
          animation: border-flow 4s ease infinite;
        }
        .chip-up   { animation: chip-float-up   4s ease-in-out infinite; }
        .chip-down { animation: chip-float-down 4.5s ease-in-out 0.4s infinite; }
        .chip-up2  { animation: chip-float-up   5s ease-in-out 1s infinite; }
        .hero-intro { animation: hero-fade-up 1s ease-out both; }
        .hero-badge { animation: hero-badge-pop 0.5s ease-out 0.2s both; }
        .hero-avatar { animation: hero-fade-in 1s ease-out 0.3s both; }
      `}</style>

      {/* ===== Deep Premium Background ===== */}
      <div className="absolute inset-0 -z-20 bg-[#090014]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#0a0014] to-[#0a0014]" />

      {/* Decorative Blur Orbs */}
      <div className="absolute left-[-10%] top-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute right-[-5%] bottom-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDuration: '10s' }} />

      {/* ===== Content ===== */}
      <div
        className="max-w-7xl mx-auto px-6 w-full flex items-center z-10 pt-20 pb-20 md:py-0"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full">

          {/* ===== LEFT: Introduction ===== */}
          <div
            className="flex flex-col z-20 hero-intro"
          >
            <div
              className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 backdrop-blur-md mb-6 w-fit text-sm font-medium tracking-wide hero-badge"
            >
              🌟 Available for new opportunities
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white hover:scale-[1.01] transition-transform duration-300 leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Jay Dave
              </span>
            </h1>

            <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-10 flex items-center">
              A&nbsp;<Typewriter words={["Full Stack Developer.", "MERN Specialist.", "Game Developer", "ASP.NET Developer"]} />
            </div>

            <p className="text-gray-400 max-w-lg leading-relaxed mb-10 text-lg">
              Crafting premium digital experiences through robust architecture and pixel-perfect design. I specialize in the MERN Stack, ASP.NET, and modern frontend frameworks.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="group relative px-8 py-3.5 rounded-full bg-white text-black font-semibold overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex gap-4 items-center ml-2">
                <a
                  href="https://github.com/DaveJay70"
                  target="_blank" rel="noopener noreferrer"
                  className="group relative p-3.5 rounded-full border border-gray-700 bg-gray-900/50 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/jaydave07"
                  target="_blank" rel="noopener noreferrer"
                  className="group relative p-3.5 rounded-full border border-gray-700 bg-gray-900/50 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors" />
                </a>
                <a
                  href="mailto:jaydave8305@gmail.com"
                  className="group relative p-3.5 rounded-full border border-gray-700 bg-gray-900/50 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-pink-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: Avatar Card ===== */}
          <div
            className="flex justify-center lg:justify-end relative mt-10 lg:mt-0 hero-avatar"
          >
            <div className="relative py-10 px-6 sm:px-12 w-full max-w-[450px]">
              <TiltCard className="relative w-full">

                {/* Outer spinning ring */}
                <div
                  className="absolute spin-slow pointer-events-none"
                  style={{
                    inset: "-20px",
                    borderRadius: "50%",
                    background: "conic-gradient(from 0deg, transparent 0deg, #9333ea 90deg, transparent 180deg, #db2777 270deg, transparent 360deg)",
                    filter: "blur(12px)",
                    opacity: 0.4,
                  }}
                />

                {/* Pulsing glow under card */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    inset: "0px",
                    borderRadius: "32px",
                    background: "linear-gradient(135deg, rgba(147,51,234,0.4), rgba(219,39,119,0.3), rgba(6,182,212,0.2))",
                    filter: "blur(20px)",
                    animation: "pulse-glow 4s ease-in-out infinite",
                    zIndex: 0,
                  }}
                />

                {/* Card Container */}
                <div
                  className="relative z-10 rounded-[2rem] p-[2px] bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-cyan-500/50"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)",
                  }}
                >
                  {/* Inner Dark Background */}
                  <div className="rounded-[calc(2rem-2px)] overflow-hidden bg-[#0c0514] h-full w-full relative flex flex-col group">
                    <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
                      <Image
                        src="/hero-avatar.png"
                        alt="Jay Dave"
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      {/* Premium Gradient Overlay - subtle so image stays sharp */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0514] via-transparent to-transparent" />
                    </div>

                    {/* Info Card Overlay matching glass-panel */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="glass-panel rounded-2xl p-4 transition-transform duration-300 group-hover:translate-y-[-4px]">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-bold text-lg tracking-tight">Jay Dave</h3>
                            <p className="text-cyan-400 text-sm font-medium">Software Engineer</p>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                            <span className="text-xl">🚀</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Chips */}
                <div className="chip-up absolute glass-panel rounded-xl px-4 py-2 text-sm font-semibold text-white flex items-center gap-2 z-20 left-[-20px] sm:left-[-40px] top-[20%] shadow-xl shadow-purple-900/20">
                  <span className="text-blue-400">⚛️</span> React
                </div>

                <div className="chip-down absolute glass-panel rounded-xl px-4 py-2 text-sm font-semibold text-white flex items-center gap-2 z-20 right-[-10px] sm:right-[-30px] top-[45%] shadow-xl shadow-pink-900/20">
                  <span className="text-purple-400">⚡</span> Next.js
                </div>

                <div className="chip-up2 absolute glass-panel rounded-xl px-4 py-2 text-sm font-semibold text-white flex items-center gap-2 z-20 left-[10%] bottom-[-20px] shadow-xl shadow-cyan-900/20">
                  <span className="text-green-400">🟢</span> Node.js
                </div>

              </TiltCard>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5 text-purple-400" />
        </a>
      </motion.div>
    </section>
  );
}