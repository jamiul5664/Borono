import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../config/birthdayConfig';

export default function MusicPlayer({ autoStart = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const synthIntervalRef = useRef(null);

  // Play simple sweet birthday chimes with Web Audio API as a fallback
  const playWebAudioChimes = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Happy Birthday Melody notes (in Hz)
      const melody = [
        { f: 261.63, d: 350 }, // C4
        { f: 261.63, d: 350 }, // C4
        { f: 293.66, d: 700 }, // D4
        { f: 261.63, d: 700 }, // C4
        { f: 349.23, d: 700 }, // F4
        { f: 329.63, d: 1400 }, // E4
        { f: 261.63, d: 350 }, // C4
        { f: 261.63, d: 350 }, // C4
        { f: 293.66, d: 700 }, // D4
        { f: 261.63, d: 700 }, // C4
        { f: 392.00, d: 700 }, // G4
        { f: 349.23, d: 1400 }, // F4
      ];

      let noteIdx = 0;
      const playNextNote = () => {
        if (!isPlaying) return;
        const note = melody[noteIdx % melody.length];
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, ctx.currentTime);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (note.d / 1000) * 0.9);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + note.d / 1000);

        noteIdx++;
        synthIntervalRef.current = setTimeout(playNextNote, note.d);
      };

      playNextNote();
    } catch {
      // AudioContext not available
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      if (synthIntervalRef.current) clearTimeout(synthIntervalRef.current);
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If external audio blocked or fails, use Web Audio chimes
          setIsPlaying(true);
          playWebAudioChimes();
        });
    }
  };

  useEffect(() => {
    if (autoStart && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay policy might block without interaction
        });
    }

    return () => {
      if (synthIntervalRef.current) clearTimeout(synthIntervalRef.current);
    };
  }, [autoStart]);

  if (!birthdayConfig.audio?.enabled) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={birthdayConfig.audio.src}
        loop
        preload="auto"
        onError={() => {
          // Audio URL failed to load, fallback chimes ready
        }}
      />

      <motion.button
        className="floating-music-btn"
        onClick={toggleMusic}
        title={isPlaying ? 'Pause celebratory music' : 'Play celebratory music'}
        aria-label="Toggle background music"
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? (
          <Volume2 size={24} style={{ color: 'var(--primary)' }} />
        ) : (
          <VolumeX size={24} style={{ color: 'var(--text-muted)' }} />
        )}
      </motion.button>
    </>
  );
}

