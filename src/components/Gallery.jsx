import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera, Maximize2, X, Play, Pause, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

export default function Gallery() {
  const { gallery } = birthdayConfig;
  const photos = gallery.photos || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const prevPhoto = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const nextPhoto = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  // Autoplay support
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextPhoto();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, nextPhoto]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevPhoto, nextPhoto]);

  if (!photos.length) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <section className="gallery-section container" id="gallery">
      <div className="section-header">
        <span className="pill-badge">
          <Camera size={16} />
          {gallery.badge}
        </span>
        <h2 className="section-title">
          {gallery.title}
        </h2>
        <p className="section-subtitle">
          {gallery.subtitle}
        </p>
      </div>

      <div className="gallery-container">
        {/* Slider Controls & Stage */}
        <div className="slider-wrapper">
          {/* Previous Arrow Button */}
          <button
            className="slider-arrow-btn"
            onClick={prevPhoto}
            aria-label="Previous Photo"
            style={{ marginRight: '16px' }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Polaroid Photo Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhoto.id}
              className="polaroid-card"
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: currentIndex % 2 === 0 ? 1 : -1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={() => setLightboxOpen(true)}
              title="Click to view full photo"
            >
              <div className="polaroid-img-wrap">
                <img
                  src={currentPhoto.url}
                  alt={currentPhoto.caption}
                  className="polaroid-img"
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '999px',
                    padding: '6px',
                    color: 'var(--text)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                  }}
                >
                  <Maximize2 size={16} />
                </div>
              </div>

              <div className="polaroid-caption-area">
                <div className="polaroid-caption">
                  {currentPhoto.caption}
                </div>
                <div className="polaroid-meta">
                  <span>📅 {currentPhoto.date}</span>
                  <span>•</span>
                  <span>🏷️ {currentPhoto.tag}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Arrow Button */}
          <button
            className="slider-arrow-btn"
            onClick={nextPhoto}
            aria-label="Next Photo"
            style={{ marginLeft: '16px' }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators & Autoplay controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            {isPlaying ? (
              <>
                <Pause size={16} style={{ color: 'var(--primary)' }} />
                <span>Pause Slideshow</span>
              </>
            ) : (
              <>
                <Play size={16} style={{ color: 'var(--primary)' }} />
                <span>Auto Slideshow</span>
              </>
            )}
          </button>

          <div className="slider-indicators">
            {photos.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxOpen(false)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#FFF',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                }}
                aria-label="Close photo"
              >
                <X size={20} />
              </button>

              <img
                src={currentPhoto.url}
                alt={currentPhoto.caption}
                className="lightbox-img"
              />

              <div className="lightbox-footer">
                <div style={{ fontFamily: 'var(--font-script)', fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '4px' }}>
                  {currentPhoto.caption}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {currentPhoto.date} — {currentPhoto.tag}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

