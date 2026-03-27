'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, ChevronRight } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Web Developer & Game Developer',
      company: 'Smart Web Company, Jamnagar',
      period: 'Oct 2025 - Present',
      description: [
        'Working as a Web Developer building modern and responsive web applications',
        'Handling both frontend and backend development tasks',
        'Developing 2D games using Unity with optimized performance and smooth gameplay',
      ],
      color: 'cyan',
    },
    {
      title: 'Teaching Assistant - ASP.NET',
      company: 'Darshan University',
      period: 'Mar 2025 - Oct 2025',
      description: [
        'Working as a Teaching Assistant in the B.Tech program',
        'Assisting students with ASP.NET concepts and project development',
        'Guiding students in understanding real-world application architecture',
      ],
      color: 'purple',
    },
  ];

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute right-[5%] top-[20%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 md:mb-24 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-[-24px] md:left-1/2 w-12 h-12 rounded-full bg-[#0a0014] border-4 border-${exp.color}-500/50 flex items-center justify-center md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                  <div className={`w-3 h-3 rounded-full bg-${exp.color}-400 shadow-[0_0_10px_currentColor]`} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-48px)] pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`group glass-panel p-8 rounded-3xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-${exp.color}-900/20 transition-all duration-500 relative overflow-hidden`}>

                    <div className={`absolute inset-0 bg-gradient-to-br from-${exp.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2.5 rounded-xl bg-${exp.color}-500/10 text-${exp.color}-400 group-hover:scale-110 transition-transform`}>
                          <Briefcase className="w-6 h-6" />
                        </div>
                        <span className={`px-4 py-1.5 rounded-full text-sm font-semibold bg-${exp.color}-500/10 text-${exp.color}-300 border border-${exp.color}-500/20`}>
                          {exp.period}
                        </span>
                      </div>

                      <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                        {exp.title}
                      </h4>
                      <p className={`text-${exp.color}-400 font-medium text-lg mb-6`}>
                        {exp.company}
                      </p>

                      <ul className="space-y-3">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-gray-400 flex items-start gap-3 group/item">
                            <ChevronRight className={`w-5 h-5 text-${exp.color}-500/50 mt-0.5 shrink-0 group-hover/item:text-${exp.color}-400 group-hover/item:translate-x-1 transition-all`} />
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
