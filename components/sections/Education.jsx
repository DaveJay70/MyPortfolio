"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, Award, MapPin, Sparkles } from "lucide-react";

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Darshan University",
      location: "Rajkot, Gujarat",
      period: "Pursuing",
      score: "CGPA 8.27",
      icon: "🎓",
      glow: "from-cyan-500/20 via-cyan-500/5 to-transparent",
      border: "border-cyan-500/25",
      text: "text-cyan-400",
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Kalyan Polytechnic",
      location: "Jamnagar, Gujarat",
      period: "2020 - 2023",
      score: "CGPA 9.71",
      icon: "📜",
      glow: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
      border: "border-violet-500/25",
      text: "text-violet-400",
    },
    {
      degree: "Secondary School Certificate (10th)",
      institution: "Gaurav Vidyalaya",
      location: "Jamnagar, Gujarat",
      period: "2020",
      score: "68.17%",
      icon: "📘",
      glow: "from-pink-500/20 via-violet-500/10 to-transparent",
      border: "border-pink-500/25",
      text: "text-pink-400",
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="relative overflow-hidden py-28 sm:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />
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
            Education
          </span>

          <h2 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            My Academic
            <span className="portfolio-gradient-text"> Journey</span>
          </h2>

          <p className="portfolio-muted mt-6 text-lg leading-relaxed md:text-xl">
            Building strong technical foundations through dedication, learning,
            and consistent growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/45 to-pink-500/35 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14 md:space-y-20">
            {education.map((item, index) => {
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
                  {/* Timeline Dot */}
                  <div className="absolute left-5 z-20 -translate-x-1/2 md:left-1/2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${item.glow} backdrop-blur-xl shadow-xl`}
                    >
                      <span className="text-lg">{item.icon}</span>
                    </div>
                  </div>

                  {/* Card Side */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      className={`group relative overflow-hidden rounded-3xl border bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/25 ${item.border}`}
                    >
                      {/* Hover Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                      />

                      <div className="relative z-10">
                        {/* Badge */}
                        <div className="mb-5 flex flex-wrap gap-3">
                          <span
                            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold ${item.text}`}
                          >
                            <Calendar className="h-3.5 w-3.5" />
                            {item.period}
                          </span>
                        </div>

                        {/* Degree */}
                        <h3 className="text-2xl font-bold leading-snug text-white transition-all duration-300 group-hover:translate-x-1">
                          {item.degree}
                        </h3>

                        {/* Institution */}
                        <div className="mt-5 space-y-2">
                          <div className="flex items-center gap-2 text-zinc-300">
                            <GraduationCap className={`h-4 w-4 ${item.text}`} />
                            <span>{item.institution}</span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-zinc-500">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        {/* Score */}
                        <div
                          className={`mt-6 inline-flex items-center gap-2 rounded-2xl border bg-white/[0.04] px-4 py-2 ${item.border}`}
                        >
                          <Award className={`h-4 w-4 ${item.text}`} />
                          <span className={`text-sm font-semibold ${item.text}`}>
                            {item.score}
                          </span>
                        </div>
                      </div>

                      {/* Corner Glow */}
                      <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
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
