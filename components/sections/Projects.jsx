"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Play, FolderGit2 } from "lucide-react";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Bau24 – Live Production Web Platform",
      description:
        "Working as a Full Stack Developer Intern on Bau24, a scalable production-level web platform. Contributing to multiple core modules including BauInfo, BauConfigurator, and BauShop.",
      tech: ["Next.js", "React", "Tailwind CSS", "REST APIs", "Deno"],
      gradient: "from-cyan-500 to-blue-500",
      accentColor: "#06b6d4",
      accentText: "rgb(103 232 249)",
      accentBorder: "rgba(6,182,212,0.3)",
      accentBg: "rgba(6,182,212,0.05)",
      media: "/bau.png",
      mediaType: "image",
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      title: "Unity 2D Game – Endless Runner",
      description:
        "Developing a Flappy Bird-style 2D endless runner game in Unity. Implemented physics-based mechanics, obstacle generation, scoring logic, UI animations, and ad monetization.",
      tech: ["Unity", "C#", "Game Physics", "LevelPlay Ads"],
      gradient: "from-green-500 to-emerald-500",
      accentColor: "#22c55e",
      accentText: "rgb(134 239 172)",
      accentBorder: "rgba(34,197,94,0.3)",
      accentBg: "rgba(34,197,94,0.05)",
      media: "/projects/unity-game.mp4",
      mediaType: "video",
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      title: "Online Quiz Management System",
      description:
        "Full-stack quiz platform featuring authentication, result storage, dynamic UI rendering, and database persistence.",
      tech: ["React", "ASP.NET Core", "Web API", "SQL Server"],
      gradient: "from-purple-500 to-pink-500",
      accentColor: "#a855f7",
      accentText: "rgb(216 180 254)",
      accentBorder: "rgba(168,85,247,0.3)",
      accentBg: "rgba(168,85,247,0.05)",
      media: "/projects/quiz.png",
      mediaType: "image",
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      title: "Online Food Ordering System",
      description:
        "Full-stack MERN application with secure authentication, RESTful APIs, cart functionality, and order management system.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      gradient: "from-pink-500 to-red-500",
      accentColor: "#ec4899",
      accentText: "rgb(249 168 212)",
      accentBorder: "rgba(236,72,153,0.3)",
      accentBg: "rgba(236,72,153,0.05)",
      media: "/projects/food-ordering.png",
      mediaType: "image",
      liveUrl: "#",
      sourceUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="absolute left-[5%] top-[50%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute right-[10%] top-[20%] w-[300px] h-[300px] bg-cyan-600/[0.08] rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }) {
  const [imgError, setImgError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: "easeOut" }}
      className="group glass-panel rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 relative flex flex-col h-full shadow-xl"
    >
      {/* ── MEDIA THUMBNAIL ── */}
      <div
        className="relative w-full h-52 overflow-hidden flex-shrink-0"
        style={{ backgroundColor: "#0d0d0f" }}
      >
        {/* Gradient hover overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-500 z-10`}
        />

        {project.mediaType === "video" ? (
          <>
            <video
              src={project.media}
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              muted
              loop
              playsInline
              onMouseEnter={(e) => {
                e.currentTarget.play();
                setIsPlaying(true);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
                setIsPlaying(false);
              }}
            />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 border border-white/20">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            )}
          </>
        ) : imgError ? (
          /* Fallback placeholder when image fails */
          <div
            className={`w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${project.gradient} opacity-20`}
          >
            <FolderGit2 className="w-14 h-14 text-white/50" />
            <span className="text-white/40 text-xs font-medium">Preview unavailable</span>
          </div>
        ) : (
          <img
            src={project.media}
            alt={project.title}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
            onError={() => setImgError(true)}
          />
        )}

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d0d0f] to-transparent z-10" />
      </div>

      {/* ── CARD CONTENT ── */}
      <div className="relative z-10 flex flex-col flex-grow p-8 lg:p-9">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
        />

        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
          {project.description}
        </p>

        {/* Tech Badges — using inline style to avoid Tailwind dynamic class purge */}
        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.15 + techIndex * 0.06 + 0.3,
              }}
              style={{
                border: `1px solid ${project.accentBorder}`,
                backgroundColor: project.accentBg,
                color: project.accentText,
              }}
              className="px-3 py-1 font-medium text-xs tracking-wide rounded-md"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Buttons — using inline style to avoid Tailwind dynamic class purge */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: `1px solid ${project.accentBorder}`,
              color: project.accentText,
            }}
            className="group/btn px-6 py-2.5 rounded-xl hover:opacity-80 transition-all duration-300 flex items-center justify-center gap-2 flex-1 font-semibold text-sm"
          >
            <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span>Source</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: project.accentColor,
              boxShadow: `0 8px 20px ${project.accentColor}40`,
            }}
            className="group/btn px-6 py-2.5 rounded-xl text-white hover:opacity-90 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 flex-1 font-semibold text-sm"
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span>Live App</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}