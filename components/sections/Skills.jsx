'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Gamepad2, Terminal, Database } from 'lucide-react';

/* ─── Skill data ─── */
const skillData = {
  'Next.JS': { icon: '▲', level: 'Advanced' },
  'Nest.JS': { icon: '🪺', level: 'Intermediate' },
  'React.JS': { icon: '⚛️', level: 'Advanced' },
  'ASP.NET Core': { icon: '🟣', level: 'Intermediate' },
  'Node.JS': { icon: '🟢', level: 'Advanced' },
  'Express.JS': { icon: '⚡', level: 'Advanced' },
  'Tailwind CSS': { icon: '💨', level: 'Advanced' },
  'HTML': { icon: '🌐', level: 'Advanced' },
  'CSS': { icon: '🎨', level: 'Advanced' },
  'Unity': { icon: '🎮', level: 'Intermediate' },
  'C#': { icon: '🔷', level: 'Intermediate' },
  '2D Game Dev': { icon: '🕹️', level: 'Intermediate' },
  'Game Physics': { icon: '⚙️', level: 'Learning' },
  'JavaScript': { icon: '💛', level: 'Advanced' },
  'Core Java': { icon: '☕', level: 'Intermediate' },
  'SQL Server': { icon: '🗄️', level: 'Intermediate' },
  'Supabase': { icon: '⚡', level: 'Intermediate' },
  'MongoDB': { icon: '🍃', level: 'Advanced' },
};

/*
  accentRgb   → used for inline rgba() hover glow (no dynamic Tailwind needed)
  gradient    → used for the category icon badge header
*/
const categoryConfig = [
  {
    title: 'Web Development',
    icon: Code2,
    gradient: 'from-cyan-500 to-violet-600',
    accentRgb: '6,182,212',
    cardBorder: 'rgba(6,182,212,0.18)',
    cardBorderHover: 'rgba(6,182,212,0.5)',
    skills: ['Next.JS', 'React.JS', 'ASP.NET Core', 'Node.JS', 'Express.JS', 'Nest.JS', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Game Development',
    icon: Gamepad2,
    gradient: 'from-violet-500 to-pink-500',
    accentRgb: '167,139,250',
    cardBorder: 'rgba(167,139,250,0.18)',
    cardBorderHover: 'rgba(167,139,250,0.5)',
    skills: ['Unity', 'C#', '2D Game Dev', 'Game Physics'],
  },
  {
    title: 'Programming Languages',
    icon: Terminal,
    gradient: 'from-pink-500 to-cyan-500',
    accentRgb: '236,72,153',
    cardBorder: 'rgba(236,72,153,0.18)',
    cardBorderHover: 'rgba(236,72,153,0.5)',
    skills: ['JavaScript', 'Core Java'],
  },
  {
    title: 'Databases & Backend Tools',
    icon: Database,
    gradient: 'from-cyan-500 to-pink-500',
    accentRgb: '139,92,246',
    cardBorder: 'rgba(139,92,246,0.18)',
    cardBorderHover: 'rgba(139,92,246,0.5)',
    skills: ['SQL Server', 'Supabase', 'MongoDB'],
  },
];

/* ─── Single Skill Tag ─── */
function SkillTag({ skill, catIdx, skillIdx, inView, accentRgb }) {
  const sd = skillData[skill] || { icon: '•', level: 'Intermediate' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.05 + 0.2, ease: 'easeOut' }}
      className="skill-tag group/tag relative flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-default select-none"
      style={{
        /* Base state */
        border: `1px solid rgba(${accentRgb},0.2)`,
        background: `rgba(${accentRgb},0.05)`,
        transition: 'border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease',
        '--accent': accentRgb,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.borderColor = `rgba(${accentRgb},0.7)`;
        el.style.background = `rgba(${accentRgb},0.15)`;
        el.style.boxShadow = `0 0 14px rgba(${accentRgb},0.35), inset 0 0 10px rgba(${accentRgb},0.08)`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.borderColor = `rgba(${accentRgb},0.2)`;
        el.style.background = `rgba(${accentRgb},0.05)`;
        el.style.boxShadow = 'none';
      }}
    >
      {/* Animated shine sweep */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden"
        aria-hidden
      >
        <span className="absolute inset-0 -translate-x-full group-hover/tag:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </span>

      {/* Icon */}
      <span className="relative z-10 text-[15px] leading-none">{sd.icon}</span>

      {/* Label */}
      <span
        className="relative z-10 text-sm font-semibold whitespace-nowrap transition-colors duration-200"
        style={{ color: `rgba(${accentRgb},0.85)` }}
        onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={e => { e.currentTarget.style.color = `rgba(${accentRgb},0.85)`; }}
      >
        {skill}
      </span>
    </motion.div>
  );
}

/* ─── Main Skills section ─── */
export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative overflow-hidden py-28 sm:py-32" ref={ref}>
      {/* Background blobs */}
      <div className="pointer-events-none absolute left-[-10%] top-[30%] -z-10 h-[500px] w-[500px] rounded-full bg-violet-600/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.08] blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Eyebrow */}
          <span className="portfolio-eyebrow mx-auto">My Toolkit</span>

          <h2
            className="mb-5 font-extrabold tracking-tight text-white"
            style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}
          >
            Technical <span className="portfolio-gradient-text">Skills</span>
          </h2>

          <div className="portfolio-divider mb-6">
            <div className="portfolio-divider-line bg-gradient-to-r from-transparent to-violet-500/55" />
            <div className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 via-violet-400 to-pink-400" />
            <div className="portfolio-divider-line bg-gradient-to-l from-transparent to-pink-500/50" />
          </div>

          <p className="portfolio-muted mx-auto max-w-2xl text-lg">
            A broad toolkit of technologies I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* ── Category cards grid ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {categoryConfig.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 35 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.12, ease: 'easeOut' }}
                className="relative rounded-2xl p-7 overflow-hidden group/card"
                style={{
                  background: `rgba(${cat.accentRgb},0.04)`,
                  border: `1px solid ${cat.cardBorder}`,
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = cat.cardBorderHover;
                  e.currentTarget.style.boxShadow = `0 8px 40px rgba(${cat.accentRgb},0.12)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = cat.cardBorder;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Subtle gradient bg reveal on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, rgba(${cat.accentRgb},0.07) 0%, transparent 65%)`,
                  }}
                />

                {/* Category header */}
                <div className="relative z-10 flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.gradient} shadow-md shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
                </div>

                {/* Skill tags */}
                <div className="relative z-10 flex flex-wrap gap-4">
                  {cat.skills.map((skill, skillIdx) => (
                    <SkillTag
                      key={skillIdx}
                      skill={skill}
                      catIdx={catIdx}
                      skillIdx={skillIdx}
                      inView={inView}
                      accentRgb={cat.accentRgb}
                    />
                  ))}
                </div>

                {/* Footer divider */}
                <div className="relative z-10 mt-6 flex items-center gap-2">
                  <div
                    className="h-px flex-1 rounded-full"
                    style={{ background: `linear-gradient(90deg, rgba(${cat.accentRgb},0.3), transparent)` }}
                  />
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {cat.skills.length} skills
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom pill ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.025)',
            }}
          >
            <div className="flex gap-1.5">
              {['6,182,212', '139,92,246', '236,72,153'].map((rgb, i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ background: `rgb(${rgb})`, animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <span className="portfolio-muted text-sm font-medium">
              Always learning &amp; expanding my stack
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
