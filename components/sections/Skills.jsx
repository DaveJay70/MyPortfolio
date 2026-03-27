'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Gamepad2, Terminal, Database } from 'lucide-react';

/* ── Skill data with icons & proficiency ── */
const skillData = {
  'Next.js': { icon: '▲', level: 'Advanced' },
  'React.js': { icon: '⚛️', level: 'Advanced' },
  'ASP.NET Core': { icon: '🟣', level: 'Intermediate' },
  'Node.js': { icon: '🟢', level: 'Advanced' },
  'Express.js': { icon: '⚡', level: 'Advanced' },
  'Tailwind CSS': { icon: '🎨', level: 'Advanced' },
  Unity: { icon: '🎮', level: 'Intermediate' },
  'C#': { icon: '🔷', level: 'Intermediate' },
  '2D Game Development': { icon: '🕹️', level: 'Intermediate' },
  'Game Physics': { icon: '⚙️', level: 'Learning' },
  JavaScript: { icon: '💛', level: 'Advanced' },
  'Core Java': { icon: '☕', level: 'Intermediate' },
  'SQL Server': { icon: '🗄️', level: 'Intermediate' },
  Supabase: { icon: '⚡', level: 'Intermediate' },
  MongoDB: { icon: '🍃', level: 'Advanced' },
};

const levelColors = {
  Advanced: 'bg-green-500/20 text-green-400 border-green-500/30',
  Intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Learning: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

const categoryConfig = [
  {
    title: 'Web Development',
    icon: Code2,
    gradient: 'from-cyan-500 to-blue-500',
    accent: 'cyan',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    glow: 'bg-cyan-500',
    tagBorder: 'border-cyan-500/30',
    tagBg: 'bg-cyan-500/5 hover:bg-cyan-500/15',
    tagText: 'text-cyan-300',
    skills: ['Next.js', 'React.js', 'ASP.NET Core', 'Node.js', 'Express.js', 'Tailwind CSS'],
  },
  {
    title: 'Game Development',
    icon: Gamepad2,
    gradient: 'from-green-500 to-emerald-500',
    accent: 'green',
    border: 'border-green-500/20 hover:border-green-500/50',
    glow: 'bg-green-500',
    tagBorder: 'border-green-500/30',
    tagBg: 'bg-green-500/5 hover:bg-green-500/15',
    tagText: 'text-green-300',
    skills: ['Unity', 'C#', '2D Game Development', 'Game Physics'],
  },
  {
    title: 'Programming Languages',
    icon: Terminal,
    gradient: 'from-purple-500 to-pink-500',
    accent: 'purple',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    glow: 'bg-purple-500',
    tagBorder: 'border-purple-500/30',
    tagBg: 'bg-purple-500/5 hover:bg-purple-500/15',
    tagText: 'text-purple-300',
    skills: ['JavaScript', 'Core Java'],
  },
  {
    title: 'Databases & Backend Tools',
    icon: Database,
    gradient: 'from-pink-500 to-orange-500',
    accent: 'pink',
    border: 'border-pink-500/20 hover:border-pink-500/50',
    glow: 'bg-pink-500',
    tagBorder: 'border-pink-500/30',
    tagBg: 'bg-pink-500/5 hover:bg-pink-500/15',
    tagText: 'text-pink-300',
    skills: ['SQL Server', 'Supabase', 'MongoDB'],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background Glows */}
      <div className="absolute left-[-10%] top-[30%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute right-[-5%] bottom-[10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A broad toolkit of technologies I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categoryConfig.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.15, ease: 'easeOut' }}
                className={`group relative rounded-[1.5rem] border ${cat.border} bg-white/[0.02] backdrop-blur-sm p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden`}
              >
                {/* Hover gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

                {/* Corner glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 ${cat.glow} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none`} />

                {/* Category header */}
                <div className="relative z-10 flex items-center gap-4 mb-8">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`p-3.5 rounded-2xl bg-gradient-to-br ${cat.gradient} shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="relative z-10 flex flex-wrap gap-3">
                  {cat.skills.map((skill, skillIdx) => {
                    const sd = skillData[skill] || { icon: '•', level: 'Intermediate' };
                    return (
                      <motion.div
                        key={skillIdx}
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: catIdx * 0.15 + skillIdx * 0.08 + 0.3,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.08,
                          y: -3,
                          transition: { type: 'spring', stiffness: 400, damping: 15 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`group/skill relative flex items-center gap-2.5 px-5 py-3 rounded-2xl border-2 ${cat.tagBorder} bg-white/[0.02] hover:bg-white/[0.08] hover:border-transparent transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-lg hover:shadow-${cat.accent}-500/20`}
                      >
                        {/* Animated gradient border on hover */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cat.gradient} opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none`} style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />

                        {/* Shine sweep */}
                        <div className="absolute inset-0 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                        {/* Icon with bounce */}
                        <motion.span
                          className="text-lg relative z-10"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {sd.icon}
                        </motion.span>

                        {/* Skill name */}
                        <span className={`relative z-10 ${cat.tagText} font-semibold text-sm whitespace-nowrap group-hover/skill:text-white transition-colors duration-300`}>
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Skill count badge */}
                <div className="relative z-10 mt-6 flex items-center gap-2">
                  <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${cat.gradient} opacity-20`} />
                  <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                    {cat.skills.length} skills
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <div className="flex -space-x-1">
              <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
              <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <span className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-gray-400 text-sm font-medium">
              Always learning & expanding my stack
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
