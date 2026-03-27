'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Smartphone, BookOpen } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code2,
      title: 'Frontend Architecture',
      description: 'Building highly interactive, scalable, and pixel-perfect UIs with React, Next.js, and pure CSS mastery.',
      color: 'purple',
    },
    {
      icon: Server,
      title: 'Backend Systems',
      description: 'Architecting robust APIs and data systems using Node.js, Express, ASP.NET Core, and MongoDB/SQL.',
      color: 'pink',
    },
    {
      icon: Smartphone,
      title: 'Mobile & Games',
      description: 'Developing cross-platform mobile apps with Flutter and engaging 2D games using Unity and C#.',
      color: 'cyan',
    },
    {
      icon: BookOpen,
      title: 'Educator & Mentor',
      description: 'Serving as a Teaching Assistant at Darshan University, guiding students through ASP.NET and modern architecture.',
      color: 'blue',
    },
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      {/* Background glow for About Section */}
      <div className="absolute left-[20%] top-[30%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            I bridge the gap between complex engineering problems and elegant, user-centric solutions. With deep expertise across the full stack—from intuitive MERN and scalable ASP.NET backends to engaging fluid interfaces—I build software that performs flawlessly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              className={`group glass-panel rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-${item.color}-900/30 transition-all duration-500 relative overflow-hidden`}
            >
              {/* Subtle hover gradient ring */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-${item.color}-500/30 rounded-2xl transition-colors duration-500`} />

              <div className={`w-14 h-14 rounded-xl bg-${item.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className={`w-7 h-7 text-${item.color}-400 drop-shadow-lg`} />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
