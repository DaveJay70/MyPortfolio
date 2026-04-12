"use client";

import { useState, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Play,
  FolderGit2,
  ArrowUpRight,
} from "lucide-react";

/* ─── Project data ─── */
const PROJECTS = [
  {
    title: "Bau24 – Live Production Platform",
    description:
      "Full Stack Developer Intern on Bau24 — a scalable production web platform. Contributed to BauInfo, BauConfigurator, and BauShop modules.",
    tech: ["Next.js", "React", "Tailwind CSS", "REST APIs", "Deno"],
    accentRgb: "6,182,212",
    media: "/bau.png",
    mediaType: "image",
    liveUrl: "#contact",
    sourceUrl: "https://github.com/DaveJay70",
    category: "Production",
  },
  {
    title: "Unity 2D Endless Runner",
    description:
      "Flappy Bird-style 2D game in Unity. Physics-based mechanics, obstacle generation, scoring, UI animations, and ad monetization.",
    tech: ["Unity", "C#", "Game Physics", "LevelPlay Ads"],
    accentRgb: "34,197,94",
    media: "/projects/unity-game.mp4",
    mediaType: "video",
    liveUrl: "#contact",
    sourceUrl: "https://github.com/DaveJay70",
    category: "Game",
  },
  {
    title: "Online Quiz Management System",
    description:
      "Full-stack quiz platform with authentication, result storage, dynamic UI rendering, and SQL Server persistence.",
    tech: ["React", "ASP.NET Core", "Web API", "SQL Server"],
    accentRgb: "168,85,247",
    media: "/projects/quiz.png",
    mediaType: "image",
    liveUrl: "#contact",
    sourceUrl: "https://github.com/DaveJay70",
    category: "Full-stack",
  },
  {
    title: "Online Food Ordering System",
    description:
      "MERN-stack food ordering app with secure auth, RESTful APIs, cart functionality, and order management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    accentRgb: "236,72,153",
    media: "/projects/food-ordering.png",
    mediaType: "image",
    liveUrl: "#contact",
    sourceUrl: "https://github.com/DaveJay70",
    category: "Full-stack",
  },
];

function MediaThumb({ project }) {
  const [error, setError] = useState(false);
  const [playing, setPlaying] = useState(false);

  if (project.mediaType === "video") {
    return (
      <>
        <video
          src={project.media}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.05]"
          muted
          loop
          playsInline
          onMouseEnter={(e) => {
            e.currentTarget.play();
            setPlaying(true);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
            setPlaying(false);
          }}
        />
        {!playing && (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
            <div
              className="rounded-full p-3 backdrop-blur-md"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Play className="h-5 w-5 fill-white text-white" />
            </div>
          </div>
        )}
      </>
    );
  }

  if (error) {
    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-2"
        style={{
          background: `linear-gradient(135deg, rgba(${project.accentRgb},0.15), rgba(${project.accentRgb},0.04))`,
        }}
      >
        <FolderGit2
          className="h-10 w-10"
          style={{ color: `rgba(${project.accentRgb},0.45)` }}
        />
        <span
          className="text-xs"
          style={{ color: `rgba(${project.accentRgb},0.35)` }}
        >
          No preview
        </span>
      </div>
    );
  }

  return (
    <img
      src={project.media}
      alt={project.title}
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.05]"
      onError={() => setError(true)}
    />
  );
}

function externalLinkProps(url) {
  return /^https?:\/\//i.test(url)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

function ProjectActions({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-1 sm:flex-nowrap">
      <a
        href={project.sourceUrl}
        {...externalLinkProps(project.sourceUrl)}
        className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400/60"
      >
        <Github className="h-3.5 w-3.5 shrink-0" />
        Source
      </a>
      <a
        href={project.liveUrl}
        {...externalLinkProps(project.liveUrl)}
        className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
        style={{
          background: `linear-gradient(135deg, rgb(${project.accentRgb}), rgba(${project.accentRgb},0.75))`,
          boxShadow: `0 8px 28px rgba(${project.accentRgb},0.35)`,
        }}
      >
        <ExternalLink className="h-3.5 w-3.5 shrink-0" />
        Live demo
      </a>
    </div>
  );
}

/* ─── 3D tilt + spotlight card (always vertical: media → content) ─── */
function TiltCard({ project, index, inView }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), {
    stiffness: 260,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
    stiffness: 260,
    damping: 22,
  });

  const handleMouseMove = useCallback(
    (e) => {
      const rect = wrapRef.current?.getBoundingClientRect();
      if (!rect) return;
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);

      const inner = innerRef.current;
      if (!inner) return;
      const ix = ((e.clientX - rect.left) / rect.width) * 100;
      const iy = ((e.clientY - rect.top) / rect.height) * 100;
      inner.style.setProperty("--spot-x", `${ix}%`);
      inner.style.setProperty("--spot-y", `${iy}%`);
    },
    [x, y]
  );

  const resetMouse = useCallback(() => {
    x.set(0);
    y.set(0);
    innerRef.current?.style.removeProperty("--spot-x");
    innerRef.current?.style.removeProperty("--spot-y");
  }, [x, y]);

  const thumbBlock = (
    <div className="card-thumb relative h-[200px] w-full flex-shrink-0 overflow-hidden bg-[#07070d] sm:h-[220px]">
      <MediaThumb project={project} />
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background: `linear-gradient(135deg, rgba(${project.accentRgb},0.22), transparent 55%)`,
        }}
      />
      <div
        className="absolute left-0 right-0 top-0 z-20 h-0.5"
        style={{
          background: `linear-gradient(90deg, rgba(${project.accentRgb},1), rgba(${project.accentRgb},0.2), transparent 75%)`,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-[#0c0c12] to-transparent"
      />
      <div
        className="absolute bottom-3 right-4 z-20 text-[11px] font-bold tabular-nums"
        style={{ color: `rgba(${project.accentRgb},0.45)` }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );

  const bodyBlock = (
    <div className="relative z-10 flex flex-grow flex-col gap-3 p-5 sm:p-6">
      {project.category && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
            {project.category}
          </span>
        </div>
      )}

      <h3 className="text-base font-bold leading-snug tracking-tight text-white sm:text-lg">
        {project.title}
      </h3>

      <p className="flex-grow text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
            style={{
              background: `rgba(${project.accentRgb},0.08)`,
              borderColor: `rgba(${project.accentRgb},0.2)`,
              color: `rgba(${project.accentRgb},0.88)`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, rgba(${project.accentRgb},0.35), transparent 72%)`,
        }}
      />

      <ProjectActions project={project} />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={wrapRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMouse}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group/card"
      >
        <div
          ref={innerRef}
          className="card-inner relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#12121a] to-[#0a0a0f] shadow-[0_4px_40px_rgba(0,0,0,0.35)] transition-[border-color,box-shadow] duration-500 group-hover/card:border-white/[0.12] group-hover/card:shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
          style={{
            borderColor: `rgba(${project.accentRgb},0.14)`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-[1] rounded-2xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
            style={{
              background: `radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 40%), rgba(${project.accentRgb},0.14), transparent 45%)`,
            }}
          />

          {thumbBlock}
          {bodyBlock}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28 sm:py-32"
      ref={ref}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-[4%] top-[22%] -z-10 h-[480px] w-[480px] rounded-full blur-[140px]"
        style={{ background: "rgba(139,92,246,0.07)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[12%] right-[3%] -z-10 h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{ background: "rgba(6,182,212,0.06)" }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center sm:mb-16"
        >
          <span className="portfolio-eyebrow mx-auto">Selected work</span>

          <h2
            className="mb-4 font-extrabold tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Projects that{" "}
            <span className="portfolio-gradient-text">ship & scale</span>
          </h2>

          <div className="portfolio-divider mb-5">
            <div className="portfolio-divider-line bg-gradient-to-r from-transparent to-cyan-500/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-cyan-400 via-violet-400 to-pink-400" />
            <div className="portfolio-divider-line bg-gradient-to-l from-transparent to-pink-500/50" />
          </div>

          <p className="mx-auto max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
            Production platforms, full-stack apps, and interactive experiences —
            crafted for clarity, performance, and a polished feel.
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-3 text-xs text-zinc-500">
            <span className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 tabular-nums">
              {PROJECTS.length} highlights
            </span>
            <span className="hidden sm:inline text-zinc-600">·</span>
            <span className="text-zinc-500">Hover cards for depth & spotlight</span>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-7">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          className="mt-14 flex justify-center sm:mt-16"
        >
          <a
            href="https://github.com/DaveJay70"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:bg-violet-500/[0.07] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400/50"
          >
            <Github className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-violet-300" />
            More on GitHub
            <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
