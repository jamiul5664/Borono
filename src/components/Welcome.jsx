import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerConfetti } from '../utils/confetti';

export default function Welcome({ onEnter }) {
  const handleStart = () => {
    triggerConfetti();
    onEnter();
  };

  return (
    <motion.div
      className="welcome-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <motion.div
        className="welcome-card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="welcome-icon-wrap"
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🎁
        </motion.div>

        <span className="pill-badge">
          <Sparkles size={16} />
          {birthdayConfig.welcome.badge}
        </span>

        <h1 className="welcome-title">
          {birthdayConfig.welcome.headline}
        </h1>

        <p className="welcome-subtext">
          {birthdayConfig.welcome.subtext}
        </p>

        <motion.button
          className="btn-primary"
          style={{ width: '100%', maxWidth: '320px', padding: '16px 28px' }}
          onClick={handleStart}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{birthdayConfig.welcome.buttonText}</span>
          <Heart size={20} fill="#FFFFFF" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

