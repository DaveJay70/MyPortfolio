"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, ChevronRight, Sparkles, CalendarDays } from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  const experiences = [
    {
      title: "Web Developer & Game Developer",
      company: "Smart Web Company, Jamnagar",
      period: "Oct 2025 - Present",
      description: [
        "Building modern, responsive and scalable web applications.",
        "Managing frontend and backend development workflows.",
        "Developing optimized 2D Unity games with smooth gameplay.",
      ],
      glow: "from-cyan-500/20 via-cyan-500/5 to-transparent",
      border: "border-cyan-500/25",
      text: "text-cyan-400",
    },
    {
      title: "Teaching Assistant - ASP.NET",
      company: "Darshan University",
      period: "Mar 2025 - Oct 2025",
      description: [
        "Supported B.Tech students in ASP.NET development.",
        "Guided projects with clean architecture practices.",
        "Helped students understand real-world software workflows.",
      ],
      glow: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
      border: "border-violet-500/25",
      text: "text-violet-400",
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden py-28 sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/8 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="portfolio-eyebrow mx-auto">
            <Sparkles className="h-4 w-4 text-violet-300" />
            Experience
          </span>

          <h2 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Professional
            <span className="portfolio-gradient-text"> Journey</span>
          </h2>

          <p className="portfolio-muted mt-6 text-lg leading-relaxed md:text-xl">
            Real-world experience in development, teamwork, and building
            impactful digital products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/45 to-pink-500/35 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14 md:space-y-20">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-5 z-20 -translate-x-1/2 md:left-1/2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${exp.glow} shadow-xl backdrop-blur-xl`}
                    >
                      <Briefcase className={`h-5 w-5 ${exp.text}`} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -8 }}
                      className={`group relative overflow-hidden rounded-3xl border bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 ${exp.border}`}
                    >
                      {/* Hover Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${exp.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                      />

                      <div className="relative z-10">
                        {/* Period */}
                        <div className="mb-5 flex flex-wrap gap-3">
                          <span
                            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold ${exp.text}`}
                          >
                            <CalendarDays className="h-3.5 w-3.5" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold leading-tight text-white">
                          {exp.title}
                        </h3>

                        {/* Company */}
                        <p className={`mt-2 text-lg font-medium ${exp.text}`}>
                          {exp.company}
                        </p>

                        {/* List */}
                        <ul className="mt-6 space-y-4">
                          {exp.description.map((item, i) => (
                            <li
                              key={i}
                              className="group/item flex items-start gap-3 text-zinc-400"
                            >
                              <ChevronRight
                                className={`mt-0.5 h-5 w-5 shrink-0 transition-all duration-300 group-hover/item:translate-x-1 ${exp.text}`}
                              />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Corner Glow */}
                      <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
