import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, PartyPopper } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerHeartsAndStars } from '../utils/confetti';

export default function Countdown() {
  const { person, countdown } = birthdayConfig;

  const calculateTimeLeft = () => {
    const target = new Date(person.birthdayDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [person.birthdayDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="countdown-section container" id="countdown">
      <div className="section-header">
        <span className="pill-badge pill-badge-gold">
          <Clock size={16} />
          {countdown.title}
        </span>
        <h2 className="section-title">
          The <span className="gradient-text">Celebration</span> Countdown
        </h2>
        <p className="section-subtitle">
          {countdown.subtitle}
        </p>
      </div>

      <div className="countdown-container">
        {timeLeft.isPast ? (
          <motion.div
            className="celebration-active-banner"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="celebration-active-title">
              {countdown.celebrationText}
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '18px' }}>
              The wait is over! Today we shower {person.name} with all the love and happiness in the world!
            </p>
            <motion.button
              className="btn-primary"
              onClick={triggerHeartsAndStars}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PartyPopper size={18} />
              <span>Cheer for {person.name}!</span>
            </motion.button>
          </motion.div>
        ) : (
          <>
            <div className="countdown-grid">
              {units.map((unit) => (
                <motion.div
                  key={unit.label}
                  className="countdown-card"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="countdown-value">
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="countdown-label">{unit.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="btn-secondary"
              onClick={triggerHeartsAndStars}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles size={16} style={{ color: 'var(--secondary)' }} />
              <span>Send Early Birthday Sparkles</span>
            </motion.button>
          </>
        )}
      </div>
    </section>
  );
}

