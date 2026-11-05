# 🎂 Borno Birthday Celebration Website (1:1 Complete Clone)

An exact 1:1 clone of [borno-three.vercel.app](https://borno-three.vercel.app/) tailored with the user's custom photos and song.

---

## 🌟 What's Included in This Clone

This website implements the full 6-section vertical snap-scrolling experience:

1. **Section 1: Interactive Age & Watermark Reveal (`/birthday.html`)**
   - Real-time birth counter and age progression ticker.
   - Interactive watermark press-to-release reveal with burning ember particles.
   - Background reveal flash displaying Borno's photo (`/bg2.jpg`).
   - Spotify-style floating music player with album art rotater (`/ref/girl1.jpg` .. `/ref/girl11.jpg`), real-time seek bar, and play/pause controls.
   - **Song**: Plays the converted high-definition audio track from `C:\Users\Jamiul\Music\New folder` (`Lyrical _ Tum Ho Toh Song _ Saiyaara`).
   - Floating physics balloons (`balloons-js`).

2. **Section 2: Hero Section**
   - Elegant typography with date tag (`06-Nov`), "Happy Birthday BORNO", and "wishing you a day filled with love, laughter...".
   - Animated floating 3D photo tape carousel showcasing Borno's pictures with hover zoom and grayscale-to-color transition.

3. **Section 3: Pinboard & Interactive Butterfly Love Notes**
   - Corkboard-style textured background with stickers, hearts (`❤️`, `✿`, `♡`, `✨`), and polaroids.
   - 5 interactive love notes that popup on click with custom pastel accents.

4. **Section 4: 3D Flipping Photo Album (`PageFlip`)**
   - Realistic 3D photobook with hardcover, realistic page turning physics, drop shadows, and Prev/Next controls.
   - Styled with washi tape, decorative stickers, frames, and Borno's photos.

5. **Section 5: 3D Showcase & Interactive 3D Perspective Modal Cards**
   - Three.js interactive canvas scene with lighting and floating elements.
   - Right-side snap-scroll navigation pill with up/down arrows and glowing amber scroll indicator.
   - Interactive 3D perspective tilt cards on hover and click.

6. **Section 6: iPhone iMessage Typewriter Simulator (`/last.html`)**
   - Realistic iPhone mockup with animated status bar, notch, and Borno's avatar (`/ref/girl3.jpg`).
   - Real-time typing composer typing out heartfelt birthday messages one by one with iMessage bubbles.
   - Interactive replay button.

---

## 📁 Integrated Assets

- **Photos**: All 11 photos from `D:\birthday\pic` are copied to `public/ref/girl1.jpg` through `public/ref/girl11.jpg`, `public/bg2.jpg`, and `public/pic/`.
- **Music**: The song from `C:\Users\Jamiul\Music\New folder` (`Lyrical _ Tum Ho Toh Song _ Saiyaara`) was converted with FFmpeg to `public/sounds/pipi-song.mp3` for instant in-browser playback.

---

## 🚀 How to Run Locally

### 1. Start the Dev Server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production:
```bash
npm run build
```
The optimized production bundle is in `dist/`.

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```
Or push to GitHub and import into Vercel. `vercel.json` is preconfigured.
