import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Lock, Unlock, RotateCcw, Check } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerConfetti, triggerHeartsAndStars } from '../utils/confetti';

export default function GiftBox() {
  const { giftBox } = birthdayConfig;
  const [isOpen, setIsOpen] = useState(false);
  const [isSecretRevealed, setIsSecretRevealed] = useState(false);

  const toggleOpen = () => {
    if (!isOpen) {
      triggerConfetti();
      triggerHeartsAndStars();
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setIsSecretRevealed(false);
    }
  };

  const handleRevealSecret = () => {
    triggerHeartsAndStars();
    setIsSecretRevealed(true);
  };

  return (
    <section className="gift-section container" id="gift">
      <div className="section-header">
        <span className="pill-badge pill-badge-accent">
          <Gift size={16} />
          {giftBox.badge}
        </span>
        <h2 className="section-title">
          {giftBox.title}
        </h2>
        <p className="section-subtitle">
          {giftBox.subtitle}
        </p>
      </div>

      <div className="gift-box-wrap">
        {/* Animated Gift Box Container */}
        <div
          className="gift-stage"
          onClick={toggleOpen}
          title={isOpen ? 'Click to close gift' : 'Click to open gift!'}
        >
          {/* Animated Lid */}
          <motion.div
            className="gift-lid"
            animate={
              isOpen
                ? { y: -80, rotate: -18, opacity: 0.95 }
                : { y: 0, rotate: 0, opacity: 1 }
            }
            transition={{ type: 'spring', stiffness: 220, damping: 14 }}
          >
            <div className="gift-bow">🎀</div>
          </motion.div>

          {/* Gift Box Body */}
          <motion.div
            className="gift-box"
            animate={
              isOpen
                ? { scale: [1, 1.05, 1], y: 10 }
                : { scale: 1, y: 0 }
            }
            whileHover={!isOpen ? { rotate: [-2, 2, -2, 2, 0], scale: 1.03 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="gift-ribbon-vertical" />
            <div className="gift-ribbon-horizontal" />
            <Sparkles
              size={24}
              style={{
                position: 'absolute',
                color: '#FFFFFF',
                opacity: 0.8,
                zIndex: 2,
              }}
            />
          </motion.div>
        </div>

        {/* Action Toggle Button */}
        <div style={{ marginTop: '20px' }}>
          <motion.button
            className={isOpen ? 'btn-secondary' : 'btn-primary'}
            onClick={toggleOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <>
                <RotateCcw size={18} />
                <span>Pack Gift Box Again</span>
              </>
            ) : (
              <>
                <Gift size={18} />
                <span>Tap to Open Gift 🎁</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Revealed Surprise Perks & Secret Message */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="gift-surprise-card"
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            >
              <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: '999px', background: 'var(--secondary-light)', color: '#B45309', fontWeight: 600, fontSize: '0.9rem', marginBottom: '14px' }}>
                🎉 Surprise Unlocked!
              </div>

              <h3 style={{ fontSize: '1.6rem', color: 'var(--text)', marginBottom: '8px' }}>
                {giftBox.surpriseTitle}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                {giftBox.surpriseSubtitle}
              </p>

              {/* Perks Grid */}
              <div className="perks-grid">
                {giftBox.perks.map((perk, idx) => (
                  <motion.div
                    key={idx}
                    className="perk-card"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="perk-icon">{perk.icon}</div>
                    <div>
                      <div className="perk-title">{perk.title}</div>
                      <div className="perk-desc">{perk.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hidden Birthday Message Section */}
              <div
                className="secret-scratch-box"
                onClick={!isSecretRevealed ? handleRevealSecret : undefined}
              >
                {!isSecretRevealed ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#6D28D9', fontWeight: '600', fontSize: '0.95rem' }}>
                    <Lock size={18} />
                    <span>{giftBox.secretWish.prompt}</span>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center' }}
                  >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#6D28D9', fontWeight: '700', marginBottom: '6px' }}>
                      <Unlock size={18} />
                      <span>Special Secret Note</span>
                    </div>
                    <p style={{ color: '#4C1D95', fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '500' }}>
                      {giftBox.secretWish.revealed}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

