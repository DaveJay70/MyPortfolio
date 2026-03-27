'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'B.TECH in Computer Science and Engineering',
      institution: 'Darshan University',
      location: 'Rajkot, Gujarat',
      period: 'Pursuing',
      score: 'CGPA: 8.27',
      gradient: 'from-cyan-500 to-blue-500',
      accent: 'cyan',
      icon: '🎓',
    },
    {
      degree: 'Diploma in Computer Science and Engineering',
      institution: 'Kalyan Polytechnic',
      location: 'Jamnagar, Gujarat',
      period: '2020 – 2023',
      score: 'CGPA: 9.71',
      gradient: 'from-purple-500 to-pink-500',
      accent: 'purple',
      icon: '📜',
    },
    {
      degree: 'Secondary School Certificate (10th)',
      institution: 'Gaurav Vidyalaya',
      location: 'Jamnagar, Gujarat',
      period: '2020',
      score: '68.17%',
      gradient: 'from-pink-500 to-orange-500',
      accent: 'pink',
      icon: '📖',
    },
  ];

  return (
    <section id="education" className="py-32 relative" ref={ref}>
      {/* Background Glows */}
      <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute left-[10%] bottom-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A strong academic foundation fueling my passion for technology and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50" />

          <div className="space-y-12 md:space-y-16">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg shadow-${edu.accent}-500/30 ring-4 ring-black`}>
                      <span className="text-lg">{edu.icon}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
                      }`}
                  >
                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-8 hover:border-white/20 transition-all duration-500 overflow-hidden">
                      {/* Hover gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500`} />

                      {/* Top row: period badge */}
                      <div className="relative z-10 flex items-center gap-2 mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-${edu.accent}-500/15 text-${edu.accent}-400 border border-${edu.accent}-500/20`}>
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                      </div>

                      {/* Degree */}
                      <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {edu.degree}
                      </h3>

                      {/* Institution + Location */}
                      <div className="relative z-10 space-y-1.5 mb-5">
                        <div className="flex items-center gap-2 text-gray-300">
                          <GraduationCap className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {/* Score badge */}
                      <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20">
                        <Award className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-bold text-sm tracking-wide">{edu.score}</span>
                      </div>

                      {/* Decorative corner glow */}
                      <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-${edu.accent}-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-${edu.accent}-500/20 transition-colors duration-500`} />
                    </div>
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
