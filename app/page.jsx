'use client';

import { motion, useScroll } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <CustomCursor />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />

      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2025 Jay Dave. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
