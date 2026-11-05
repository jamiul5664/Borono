import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import BirthdayCake from './components/BirthdayCake';
import GiftBox from './components/GiftBox';
import Gallery from './components/Gallery';
import BirthdayLetter from './components/BirthdayLetter';
import Celebration from './components/Celebration';
import FloatingElements from './components/FloatingElements';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setHasEntered(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      {/* Background Mesh Gradient */}
      <div className="bg-mesh" />

      {/* Floating Decorative Balloons & Sparkles */}
      <FloatingElements />

      {/* Floating Celebratory Music Player */}
      <MusicPlayer autoStart={hasEntered} />

      {/* Welcome Entrance Screen */}
      <AnimatePresence>
        {!hasEntered && (
          <Welcome onEnter={handleEnter} />
        )}
      </AnimatePresence>

      {/* Main Birthday Journey Sections */}
      {hasEntered && (
        <main className="main-content">
          <Hero />
          <Countdown />
          <BirthdayCake />
          <GiftBox />
          <Gallery />
          <BirthdayLetter />
          <Celebration onRestart={handleRestart} />
        </main>
      )}
    </div>
  );
}

