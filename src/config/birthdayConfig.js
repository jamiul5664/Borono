/**
 * Birthday Celebration Configuration
 * -----------------------------------
 * Customize all details for the birthday person in this single file.
 * All components across the application consume this configuration.
 */

export const birthdayConfig = {
  // Personal Details
  person: {
    name: "Borno",
    nickname: "Borny",
    age: 21, // Optional: set to null or number
    birthdayDate: "2026-11-15T00:00:00", // Format: YYYY-MM-DDTHH:mm:ss
    zodiacSign: "Scorpio ♏",
  },

  // Website Meta & Branding
  meta: {
    title: "Happy Birthday Borno! ✨ A Special Celebration Just for You",
    description: "An interactive, heartfelt birthday celebration website full of love, memories, interactive cake, gifts, and surprises.",
    url: "https://borno-three.vercel.app/",
  },

  // Theme Colors (Pastel Palette)
  theme: {
    background: "#FFF7F2",
    primary: "#FF6B81",      // Warm coral rose
    primaryLight: "#FFE4E8",
    secondary: "#FFC857",    // Warm celebratory honey gold
    secondaryLight: "#FFF4D4",
    text: "#29243A",         // Rich deep plum
    textMuted: "#7A7389",
    accent: "#A78BFA",       // Dreamy lavender
    accentLight: "#EDE9FE",
    white: "#FFFFFF",
    cardBg: "rgba(255, 255, 255, 0.92)",
  },

  // Welcome / Entrance Screen
  welcome: {
    badge: "🎁 A Special Surprise Has Arrived",
    headline: "Someone Special Has a Birthday Today!",
    subtext: "Turn up your volume, take a deep breath, and click below to begin your birthday journey.",
    buttonText: "Open My Celebration ✨",
  },

  // Hero Section
  hero: {
    badge: "🎂 Happy Birthday to You!",
    title: "Happy Birthday,",
    subtitle: "Today is all about celebrating you, your boundless laughter, your beautiful soul, and every wonderful memory we share together.",
    quickLinks: [
      { id: "countdown", label: "Countdown ⏳", icon: "Clock" },
      { id: "cake", label: "Blow Candles 🎂", icon: "Cake" },
      { id: "gift", label: "Open Gift 🎁", icon: "Gift" },
      { id: "gallery", label: "Our Memories 📸", icon: "Camera" },
      { id: "letter", label: "Personal Letter 💌", icon: "Mail" },
    ],
  },

  // Birthday Countdown
  countdown: {
    title: "The Big Day Countdown",
    subtitle: "Counting down every second to celebrate your presence in this world!",
    celebrationText: "🎉 IT'S YOUR BIRTHDAY! TIME TO CELEBRATE! 🥳",
  },

  // Interactive Birthday Cake
  cake: {
    badge: "Make a Wish ✨",
    title: "Your Birthday Cake",
    description: "Tap the candles to blow them out, or click the button below to blow them all at once! Don't forget to close your eyes and make a special wish.",
    candlesCount: 5,
    wishMessage: "✨ May your year ahead be as radiant and joyful as you are! ✨",
    relightMessage: "Candles blown out! Your wish has been sent to the stars 🌟",
  },

  // Surprise Gift Box
  giftBox: {
    badge: "Special Delivery 📦",
    title: "A Surprise Just for You",
    subtitle: "Click the gift box to untie the ribbon and see what's tucked inside!",
    boxColor: "#FF6B81",
    ribbonColor: "#FFC857",
    surpriseTitle: "Golden Birthday Perks & Vouchers! 🎟️",
    surpriseSubtitle: "Redeemable with unlimited validity and love:",
    perks: [
      { icon: "🍕", title: "Unlimited Favorite Foods", desc: "Your choice of dinner, snacks, and sweet treats on demand." },
      { icon: "🎬", title: "VIP Movie Night Pass", desc: "You pick the movies, and you get complete remote control rights." },
      { icon: "🌟", title: "Unlimited Hugs & Support", desc: "Valid forever, anywhere, anytime you need a warm smile." },
      { icon: "✈️", title: "Weekend Road Trip / Day Off", desc: "A stress-free adventure to wherever your heart desires." },
    ],
    secretWish: {
      prompt: "Tap here to reveal your secret birthday blessing 🪄",
      revealed: "Secret Message: You are deeply cherished and appreciated more than words could ever describe. Thank you for simply existing and being you! ❤️",
    },
  },

  // Photo Memory Gallery
  gallery: {
    badge: "Captured Moments 🎞️",
    title: "A Gallery of Sweet Memories",
    subtitle: "Every photo holds a chapter of our smiles, adventures, and milestones together.",
    photos: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
        caption: "Golden days & unforgettable smiles ✨",
        date: "Summer Memories",
        tag: "Happiness"
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=80",
        caption: "A delicious slice of joy and laughter 🍰",
        date: "Sweet Times",
        tag: "Celebration"
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80",
        caption: "Chasing sunsets and new horizons 🌅",
        date: "Weekend Getaway",
        tag: "Adventure"
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
        caption: "Dancing under fairy lights and starry nights 🌟",
        date: "Night Vibes",
        tag: "Party"
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80",
        caption: "To another year of dreams turning into reality 🥂",
        date: "Cheers!",
        tag: "Milestone"
      }
    ]
  },

  // Personal Birthday Letter
  letter: {
    badge: "From the Heart 💌",
    title: "A Handwritten Note For You",
    subtitle: "Click the wax seal to unfold this heartfelt message.",
    salutation: "Dearest Borno,",
    paragraphs: [
      "On this very special day, I wanted to take a quiet moment amidst the celebration to write you something true. Another year has passed, and watching you grow, learn, and conquer every obstacle with such grace has been an absolute inspiration.",
      "Your kindness is infectious, your laughter can brighten even the gloomiest of afternoons, and the genuine warmth you bring into every room is a rare gift to this world.",
      "As you step into this exciting new year of your life, I wish you endless adventures, peaceful moments of reflection, good health, and success in everything you set your mind to. May your days be filled with sweet surprises and your heart always stay light.",
      "Thank you for being such an extraordinary part of my life. Never forget how loved, valued, and irreplaceable you truly are."
    ],
    closing: "With all my love & warmest wishes,",
    signature: "Yours Always ❤️",
    date: "November 2026",
  },

  // Final Celebration & Sharing
  celebration: {
    headline: "Here's to Your Best Year Yet! 🥂",
    subtext: "Thank you for being the wonderful human being you are. Keep shining bright!",
    shareMessage: "I just experienced the sweetest birthday surprise! Check it out: ",
    shareTitle: "Happy Birthday Borno! 🎂",
  },

  // Background Audio (Optional royalty-free ambient melody)
  audio: {
    enabled: true,
    title: "Birthday Acoustic Celebration",
    // Clean royalty-free background instrumental URL
    src: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f792cb.mp3?filename=happy-birthday-125016.mp3",
  }
};

