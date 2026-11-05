import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, RotateCcw } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerHeartsAndStars } from '../utils/confetti';

export default function BirthdayLetter() {
  const { letter, person } = birthdayConfig;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    triggerHeartsAndStars();
    setIsOpen(true);
  };

  const handleCloseLetter = () => {
    setIsOpen(false);
  };

  return (
    <section className="letter-section container" id="letter">
      <div className="section-header">
        <span className="pill-badge pill-badge-accent">
          <Mail size={16} />
          {letter.badge}
        </span>
        <h2 className="section-title">
          {letter.title}
        </h2>
        <p className="section-subtitle">
          {letter.subtitle}
        </p>
      </div>

      <div className="envelope-wrapper">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Closed Wax Sealed Envelope */
            <motion.div
              key="envelope"
              className="envelope-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              onClick={handleOpenLetter}
            >
              <div className="wax-seal">
                <Heart size={32} fill="#FFFFFF" />
              </div>

              <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '8px' }}>
                Strictly Confidential For {person.name} 💌
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
                Sealed with warmth, admiration, and special birthday wishes.
              </p>

              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenLetter();
                }}
              >
                <span>Break Seal & Read Letter</span>
                <Sparkles size={18} />
              </motion.button>
            </motion.div>
          ) : (
            /* Unfolded Handwritten Letter */
            <motion.div
              key="letterSheet"
              className="letter-sheet"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                  borderBottom: '1px solid #F0E8DD',
                  paddingBottom: '12px',
                }}
              >
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  ✉️ {letter.date}
                </span>
                <button
                  onClick={handleCloseLetter}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <RotateCcw size={14} />
                  <span>Fold Back</span>
                </button>
              </div>

              <div className="letter-salutation">
                {letter.salutation}
              </div>

              <div className="letter-body">
                {letter.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="letter-closing">
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  {letter.closing}
                </p>
                <div className="letter-signature">
                  {letter.signature}
                </div>
              </div>

              <div style={{ marginTop: '36px', textAlign: 'center' }}>
                <motion.button
                  className="btn-secondary"
                  onClick={handleCloseLetter}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <RotateCcw size={16} />
                  <span>Re-seal & Fold Letter</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

