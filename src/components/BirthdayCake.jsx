import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wind, RotateCcw, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerConfetti, triggerFireworks } from '../utils/confetti';

export default function BirthdayCake() {
  const { cake } = birthdayConfig;
  const totalCandles = cake.candlesCount || 5;

  // Track state of each candle (true = lit, false = blown out)
  const [candles, setCandles] = useState(() => Array(totalCandles).fill(true));
  const [showWish, setShowWish] = useState(false);

  // Extinguish an individual candle
  const blowCandle = (index) => {
    if (!candles[index]) return;
    const next = [...candles];
    next[index] = false;
    setCandles(next);

    // If this was the last candle blown out
    if (next.every((lit) => !lit)) {
      triggerFireworks(2000);
      setShowWish(true);
    }
  };

  // Blow all candles out at once
  const blowAllCandles = () => {
    setCandles(Array(totalCandles).fill(false));
    triggerConfetti();
    triggerFireworks(2500);
    setShowWish(true);
  };

  // Relight all candles
  const relightCandles = () => {
    setCandles(Array(totalCandles).fill(true));
    setShowWish(false);
  };

  const allBlown = candles.every((lit) => !lit);

  return (
    <section className="cake-section container" id="cake">
      <div className="section-header">
        <span className="pill-badge">
          <Sparkles size={16} />
          {cake.badge}
        </span>
        <h2 className="section-title">
          {cake.title}
        </h2>
        <p className="section-subtitle">
          {cake.description}
        </p>
      </div>

      <div className="cake-stage">
        {/* The 3-Tier Birthday Cake Container */}
        <div className="cake-container">
          {/* Candles on top tier */}
          <div className="candles-row">
            {candles.map((isLit, idx) => (
              <div
                key={idx}
                className="candle-item"
                onClick={() => blowCandle(idx)}
                title={isLit ? 'Tap to blow this candle!' : 'Candle blown out'}
              >
                {/* Flame or Smoke */}
                <AnimatePresence mode="wait">
                  {isLit ? (
                    <motion.div
                      key="flame"
                      className="flame"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    />
                  ) : (
                    <motion.div
                      key="smoke"
                      className="smoke-puff"
                      initial={{ opacity: 0.8, y: 0, scale: 0.8 }}
                      animate={{ opacity: 0, y: -25, scale: 1.8 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                  )}
                </AnimatePresence>

                {/* Wick & Candle Stick */}
                <div className="candle-wick" />
                <div className="candle-stick" />
              </div>
            ))}
          </div>

          {/* Tier 3 (Top) */}
          <div className="cake-layer cake-layer-top">
            <div className="frosting-drip" />
            <div className="decorations">
              <span className="sugar-star">★</span>
              <span className="sugar-star">★</span>
            </div>
          </div>

          {/* Tier 2 (Middle) */}
          <div className="cake-layer cake-layer-middle">
            <div className="frosting-drip" />
            <div className="decorations">
              <span className="sugar-star">★</span>
              <span className="sugar-star">★</span>
              <span className="sugar-star">★</span>
            </div>
          </div>

          {/* Tier 1 (Bottom) */}
          <div className="cake-layer cake-layer-bottom">
            <div className="frosting-drip" />
            <div className="decorations">
              <span className="sugar-star">★</span>
              <span className="sugar-star">★</span>
              <span className="sugar-star">★</span>
              <span className="sugar-star">★</span>
            </div>
          </div>

          {/* Elegant Cake Stand */}
          <div className="cake-stand" />
          <div className="cake-stand-pillar" />
          <div className="cake-stand-base" />
        </div>

        {/* Wish Announcement upon blowing candles */}
        <AnimatePresence>
          {showWish && (
            <motion.div
              className="cake-wish-banner"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '6px' }}>
                {cake.wishMessage}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                {cake.relightMessage}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cake Controls */}
        <div className="cake-controls" style={{ marginTop: '24px' }}>
          {!allBlown ? (
            <motion.button
              className="btn-primary"
              onClick={blowAllCandles}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Wind size={20} />
              <span>Blow Out All Candles 💨</span>
            </motion.button>
          ) : (
            <motion.button
              className="btn-secondary"
              onClick={relightCandles}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <RotateCcw size={18} />
              <span>Relight Candles 🕯️</span>
            </motion.button>
          )}

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            {allBlown
              ? '✨ All candles extinguished! Make your secret wish.'
              : 'Tip: You can also tap each candle individually to blow it out!'}
          </p>
        </div>
      </div>
    </section>
  );
}

