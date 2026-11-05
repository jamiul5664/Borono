import confetti from 'canvas-confetti';

/**
 * Trigger a celebratory blast of confetti
 */
export const triggerConfetti = () => {
  // Center burst
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FF6B81', '#FFC857', '#A78BFA', '#FF8DA1', '#FFE4E8'],
  });

  // Left cannon
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#FF6B81', '#FFC857', '#A78BFA'],
    });
  }, 150);

  // Right cannon
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ['#FF6B81', '#FFC857', '#A78BFA'],
    });
  }, 300);
};

/**
 * Trigger floating star & heart celebration
 */
export const triggerHeartsAndStars = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#FF6B81', '#FF8DA1']
  });
  fire(0.2, {
    spread: 60,
    colors: ['#FFC857', '#FFE484']
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#A78BFA', '#DDD6FE']
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ['#FF6B81', '#FFC857']
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ['#FF6B81', '#FFC857', '#A78BFA']
  });
};

/**
 * Fireworks continuous celebration effect
 */
export const triggerFireworks = (durationMs = 2500) => {
  const animationEnd = Date.now() + durationMs;
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    const particleCount = 40 * (timeLeft / durationMs);
    confetti({
      particleCount,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      },
      colors: ['#FF6B81', '#FFC857', '#A78BFA', '#4ADE80', '#F472B6']
    });
  }, 250);
};

