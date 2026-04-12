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
    <main className="min-h-screen bg-background text-foreground">
      <CustomCursor />

      <motion.div
        className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-1 origin-left bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-zinc-500 sm:px-6 lg:px-8">
          <p>&copy; 2025 Jay Dave. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
