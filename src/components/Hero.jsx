import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PartyPopper, Heart, Clock, Cake, Gift, Camera, Mail } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerFireworks } from '../utils/confetti';

const iconMap = {
  Clock: Clock,
  Cake: Cake,
  Gift: Gift,
  Camera: Camera,
  Mail: Mail,
};

export default function Hero({ onNavigate }) {
  const { person, hero } = birthdayConfig;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section container" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Celebration Badges */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="pill-badge">
            <Sparkles size={16} />
            {hero.badge}
          </span>
          {person.zodiacSign && (
            <span className="pill-badge pill-badge-gold">
              {person.zodiacSign}
            </span>
          )}
          {person.age && (
            <span className="pill-badge pill-badge-accent">
              Turning {person.age} 🎉
            </span>
          )}
        </div>

        {/* Animated Greeting Title */}
        <h1 className="hero-title">
          <span>{hero.title}</span>
          <br />
          <motion.span
            className="hero-name"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {person.name}!
          </motion.span>
        </h1>

        {/* Personalized Subtitle */}
        <p className="hero-subtitle">
          {hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <motion.button
            className="btn-primary"
            onClick={() => triggerFireworks(3000)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <PartyPopper size={20} />
            <span>Celebrate with Confetti!</span>
          </motion.button>

          <motion.button
            className="btn-secondary"
            onClick={() => scrollToSection('cake')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Cake size={18} />
            <span>Blow the Candles</span>
          </motion.button>
        </div>

        {/* Quick Jump Navigation Pills */}
        <div className="hero-quick-links">
          {hero.quickLinks.map((link) => {
            const Icon = iconMap[link.icon] || Sparkles;
            return (
              <motion.button
                key={link.id}
                className="quick-link-btn"
                onClick={() => scrollToSection(link.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Icon size={16} style={{ color: 'var(--primary)' }} />
                <span>{link.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

