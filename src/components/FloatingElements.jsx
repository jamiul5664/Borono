import React from 'react';
import { motion } from 'framer-motion';

const balloonsData = [
  { id: 1, color: '#FF6B81', left: '8%', delay: 0, duration: 18, size: 55 },
  { id: 2, color: '#FFC857', left: '88%', delay: 3, duration: 22, size: 50 },
  { id: 3, color: '#A78BFA', left: '18%', delay: 6, duration: 20, size: 48 },
  { id: 4, color: '#FFB6C1', left: '78%', delay: 1, duration: 19, size: 52 },
  { id: 5, color: '#FDE047', left: '4%', delay: 8, duration: 24, size: 46 },
  { id: 6, color: '#C4B5FD', left: '92%', delay: 5, duration: 21, size: 54 },
];

const sparklesData = [
  { id: 1, top: '15%', left: '12%', size: 18, delay: 0.2 },
  { id: 2, top: '25%', left: '85%', size: 24, delay: 0.8 },
  { id: 3, top: '45%', left: '7%', size: 20, delay: 1.4 },
  { id: 4, top: '65%', left: '90%', size: 22, delay: 0.5 },
  { id: 5, top: '80%', left: '15%', size: 16, delay: 1.1 },
  { id: 6, top: '90%', left: '82%', size: 20, delay: 1.7 },
];

export default function FloatingElements() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Floating Balloons */}
      {balloonsData.map((b) => (
        <motion.div
          key={b.id}
          className="balloon"
          style={{
            backgroundColor: b.color,
            left: b.left,
            bottom: '-100px',
            width: b.size,
            height: b.size * 1.25,
          }}
          animate={{
            y: ['0vh', '-130vh'],
            x: [0, 15, -15, 0],
            rotate: [-6, 6, -6],
          }}
          transition={{
            y: {
              duration: b.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: b.delay,
            },
            x: {
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      ))}

      {/* Twinkling Sparkles */}
      {sparklesData.map((s) => (
        <motion.div
          key={s.id}
          style={{
            position: 'absolute',
            top: s.top,
            left: s.left,
            color: '#FFC857',
            fontSize: s.size,
            filter: 'drop-shadow(0 0 6px rgba(255, 200, 87, 0.6))',
          }}
          animate={{
            scale: [0.6, 1.2, 0.6],
            opacity: [0.3, 0.9, 0.3],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: s.delay,
            ease: 'easeInOut',
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}

