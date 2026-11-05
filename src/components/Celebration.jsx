import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PartyPopper, Share2, RotateCcw, Heart, Sparkles, Check } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerConfetti, triggerFireworks, triggerHeartsAndStars } from '../utils/confetti';

export default function Celebration({ onRestart }) {
  const { celebration, person } = birthdayConfig;
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: celebration.shareTitle || `Happy Birthday ${person.name}!`,
      text: `${celebration.shareMessage || 'A special birthday celebration for'} ${person.name}! 🎂✨`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback to clipboard if user dismissed or error
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 3500);
  };

  const handleMakeWish = () => {
    triggerFireworks(3500);
    triggerHeartsAndStars();
  };

  return (
    <section className="celebration-section container" id="celebrate">
      <motion.div
        className="celebration-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill-badge pill-badge-gold">
          <PartyPopper size={16} />
          Grand Birthday Finale
        </span>

        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800 }}>
          {celebration.headline}
        </h2>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px' }}>
          {celebration.subtext}
        </p>

        {/* Action Buttons */}
        <div className="action-buttons-wrap">
          <motion.button
            className="btn-primary"
            onClick={handleMakeWish}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles size={18} />
            <span>Make a Birthday Wish 🌟</span>
          </motion.button>

          <motion.button
            className="btn-secondary"
            onClick={handleShare}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {copied ? (
              <>
                <Check size={18} style={{ color: '#16A34A' }} />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 size={18} />
                <span>Share Website 🎁</span>
              </>
            )}
          </motion.button>

          <motion.button
            className="btn-secondary"
            onClick={onRestart}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <RotateCcw size={18} />
            <span>Restart Experience ↺</span>
          </motion.button>
        </div>

        <div style={{ marginTop: '24px', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>Crafted with love for</span>
          <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{person.name}</span>
          <Heart size={16} fill="var(--primary)" color="var(--primary)" />
        </div>
      </motion.div>

      {/* Toast Notification when link copied */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="toast-notice"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Check size={18} style={{ color: '#4ADE80' }} />
            <span>Link copied to clipboard! Share the love with friends 🎉</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

