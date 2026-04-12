'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function useFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mq = window.matchMedia('(pointer: fine)');
    const update = () => setFine(mq.matches);

    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return fine;
}

export default function CustomCursor() {
  const finePointer = useFinePointer();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    if (!finePointer) return;

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      setTrail((prev) => [
        ...prev.slice(-8),
        { x: e.clientX, y: e.clientY, id: Math.random() },
      ]);
    };

    const enter = (e) => {
      if (e.target.closest('a, button')) {
        setHovering(true);
      }
    };

    const leave = () => setHovering(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
    };
  }, [finePointer]);

  if (!finePointer) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 rounded-full border border-cyan-400"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: hovering ? 1.6 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 22,
        }}
        style={{
          boxShadow: '0 0 18px rgba(34,211,238,0.45)',
        }}
      />

      {trail.map((p) => (
        <motion.div
          key={p.id}
          className="pointer-events-none fixed left-0 top-0 z-[9998] h-1.5 w-1.5 rounded-full bg-cyan-400"
          initial={{
            x: p.x - 3,
            y: p.y - 3,
            opacity: 0.4,
            scale: 1,
          }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      ))}
    </>
  );
}
