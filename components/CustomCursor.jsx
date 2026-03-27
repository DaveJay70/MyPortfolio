'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]
        w-6 h-6 rounded-full border border-cyan-400"
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

      {/* Trail (very subtle) */}
      {trail.map((p) => (
        <motion.div
          key={p.id}
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full
          bg-cyan-400 pointer-events-none z-[9998]"
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
