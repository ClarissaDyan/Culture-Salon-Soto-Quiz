/**
 * Synthesized Sound Effects & Indonesian Folk Music for "Which Soto Are You?"
 * 100% Web Audio API - Zero external audio file dependencies.
 * Plays the beloved Indonesian folk song "Rasa Sayange" with warm gamelan & marimba chimes.
 */

class SotoSoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = true; // Start muted until user toggles or interacts
    this.isMusicPlaying = false;
    this.bgmTimer = null;
    this.currentNoteIndex = 0;
    this.masterGain = null;
    this.musicGain = null;
    this.unlocked = false;

    // Load saved sound preference
    try {
      const savedMute = localStorage.getItem('soto_sound_muted');
      if (savedMute !== null) {
        this.isMuted = savedMute === 'true';
      }
    } catch (e) {}
  }

  // Initialize audio context and unlock mobile web audio
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.setValueAtTime(0.26, this.ctx.currentTime); // Warm ambient level
        this.musicGain.connect(this.masterGain);
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    // Play 1-sample silent buffer to unlock iOS Safari Web Audio
    if (this.ctx && !this.unlocked) {
      try {
        const buffer = this.ctx.createBuffer(1, 1, 22050);
        const src = this.ctx.createBufferSource();
        src.buffer = buffer;
        src.connect(this.ctx.destination);
        src.start(0);
        this.unlocked = true;
      } catch(e) {}
    }
  }

  // Single control: Toggle both sound and Indonesian background song
  toggleAll() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    if (this.isMusicPlaying && !this.isMuted) {
      // Turn off
      this.isMuted = true;
      this.stopBGM();
      if (this.masterGain && this.ctx) {
        this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      }
    } else {
      // Turn on
      this.isMuted = false;
      if (this.masterGain && this.ctx) {
        this.masterGain.gain.setValueAtTime(1, this.ctx.currentTime);
      }
      this.startBGM();
    }

    try {
      localStorage.setItem('soto_sound_muted', this.isMuted.toString());
    } catch (e) {}

    return !this.isMuted;
  }

  // =========================================================================
  // Traditional Indonesian Folk Song: "Rasa Sayange"
  // Arranged for Gamelan / Angklung / Balafon chimes & warm bass
  // =========================================================================

  getRasaSayangeScore() {
    const N = {
      C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00,
      C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
      C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00
    };

    return [
      // Measure 1: "Ra-sa sa-yang-e"
      { note: N.G4, dur: 0.5, bass: N.C3 },
      { note: N.E4, dur: 0.5, bass: null },
      { note: N.F4, dur: 0.5, bass: N.G3 },
      { note: N.G4, dur: 0.75, bass: null },
      { note: N.G4, dur: 0.25, bass: null },

      // Measure 2: "ra-sa sa-yang sayange"
      { note: N.A4, dur: 0.5, bass: N.F3 },
      { note: N.G4, dur: 0.5, bass: null },
      { note: N.F4, dur: 0.5, bass: N.C3 },
      { note: N.E4, dur: 1.0, bass: null },

      // Measure 3: "Eee li-hat da-ri ja-uh"
      { note: N.G4, dur: 0.5, bass: N.G3 },
      { note: N.C5, dur: 0.5, bass: null },
      { note: N.C5, dur: 0.5, bass: N.C3 },
      { note: N.B4, dur: 0.5, bass: null },
      { note: N.A4, dur: 0.5, bass: N.F3 },

      // Measure 4: "ra-sa sa-yang sayange"
      { note: N.G4, dur: 0.75, bass: N.G3 },
      { note: N.F4, dur: 0.25, bass: null },
      { note: N.E4, dur: 0.5, bass: N.C3 },
      { note: N.D4, dur: 0.5, bass: null },
      { note: N.C4, dur: 1.25, bass: N.C3 },

      // Measure 5: "Ka-lau a-da su-mur di la-dang"
      { note: N.E4, dur: 0.5, bass: N.C3 },
      { note: N.E4, dur: 0.5, bass: null },
      { note: N.F4, dur: 0.5, bass: N.G3 },
      { note: N.G4, dur: 0.75, bass: null },
      { note: N.E4, dur: 0.5, bass: null },

      // Measure 6: "Bo-leh ki-ta me-num-pang man-di"
      { note: N.F4, dur: 0.5, bass: N.F3 },
      { note: N.G4, dur: 0.5, bass: null },
      { note: N.A4, dur: 0.5, bass: N.C3 },
      { note: N.G4, dur: 1.0, bass: null },

      // Measure 7: "Ka-lau a-da u-mur-ku pan-jang"
      { note: N.G4, dur: 0.5, bass: N.G3 },
      { note: N.C5, dur: 0.5, bass: null },
      { note: N.C5, dur: 0.5, bass: N.C3 },
      { note: N.B4, dur: 0.5, bass: null },
      { note: N.A4, dur: 0.5, bass: N.F3 },

      // Measure 8: "Bo-leh ki-ta ber-jum-pa la-gi"
      { note: N.G4, dur: 0.75, bass: N.G3 },
      { note: N.F4, dur: 0.25, bass: null },
      { note: N.E4, dur: 0.5, bass: N.C3 },
      { note: N.D4, dur: 0.5, bass: null },
      { note: N.C4, dur: 1.5, bass: N.C3 }
    ];
  }

  // Gamelan chime note
  playGamelanNote(freq, startTime, duration = 0.5) {
    if (!this.ctx || !this.musicGain) return;
    try {
      const now = this.ctx.currentTime;
      const start = Math.max(startTime, now + 0.005);
      const end = start + duration;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime(0.28, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, end);

      osc.connect(gain);
      gain.connect(this.musicGain);

      osc.start(start);
      osc.stop(end + 0.05);
    } catch (err) {
      console.warn('Gamelan note failed:', err);
    }
  }

  // Soft acoustic bass note
  playBassNote(freq, startTime, duration = 0.7) {
    if (!this.ctx || !this.musicGain || !freq) return;
    try {
      const now = this.ctx.currentTime;
      const start = Math.max(startTime, now + 0.005);
      const end = start + duration;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime(0.2, start + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, end);

      osc.connect(gain);
      gain.connect(this.musicGain);

      osc.start(start);
      osc.stop(end + 0.05);
    } catch (err) {
      console.warn('Bass note failed:', err);
    }
  }

  // Start looping Indonesian song
  startBGM() {
    this.init();
    if (this.isMusicPlaying) return;
    this.isMusicPlaying = true;

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().then(() => this.runBGMLoop()).catch(() => this.runBGMLoop());
    } else {
      this.runBGMLoop();
    }
  }

  runBGMLoop() {
    if (!this.isMusicPlaying || !this.ctx) return;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }

    const score = this.getRasaSayangeScore();
    const beatSeconds = 0.46; // Cheerful 130 BPM tempo
    let noteIdx = 0;

    const scheduleNext = () => {
      if (!this.isMusicPlaying || !this.ctx) return;

      try {
        const item = score[noteIdx];
        const now = this.ctx.currentTime;

        if (item.note) {
          this.playGamelanNote(item.note, now + 0.03, item.dur * beatSeconds * 1.15);
        }
        if (item.bass) {
          this.playBassNote(item.bass, now + 0.03, 0.75);
        }

        noteIdx = (noteIdx + 1) % score.length;
        this.bgmTimer = setTimeout(scheduleNext, item.dur * beatSeconds * 1000);
      } catch (err) {
        console.warn('Audio scheduling error:', err);
        noteIdx = (noteIdx + 1) % score.length;
        this.bgmTimer = setTimeout(scheduleNext, 500);
      }
    };

    scheduleNext();
  }

  // Stop Indonesian song
  stopBGM() {
    this.isMusicPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  // =========================================================================
  // Tactile Sound Effects
  // =========================================================================

  playTap() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {}
  }

  playSelect() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(860, now + 0.12);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.14);
    } catch (e) {}
  }

  playFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.masterGain) return;

    try {
      const notes = [392, 523, 659.25, 783.99, 1046.5];
      const now = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        const startTime = now + (idx * 0.1);
        const duration = 0.55;

        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.linearRampToValueAtTime(0.25, startTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(startTime);
        osc.stop(startTime + duration);
      });

      setTimeout(() => {
        if (this.isMuted || !this.ctx || !this.masterGain) return;
        try {
          const t = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, t);
          osc.frequency.exponentialRampToValueAtTime(1100, t + 0.2);
          gain.gain.setValueAtTime(0.18, t);
          gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
          osc.connect(gain);
          gain.connect(this.masterGain);
          osc.start(t);
          osc.stop(t + 0.23);
        } catch(e) {}
      }, 600);
    } catch (e) {}
  }
}

const sotoSound = new SotoSoundManager();

// Global Mobile Web Audio unlock on first user gesture (touch / click)
if (typeof window !== 'undefined') {
  const unlockAudioOnTouch = () => {
    sotoSound.init();
    ['touchstart', 'touchend', 'click', 'pointerdown'].forEach(evt => {
      document.removeEventListener(evt, unlockAudioOnTouch, true);
    });
  };
  ['touchstart', 'touchend', 'click', 'pointerdown'].forEach(evt => {
    document.addEventListener(evt, unlockAudioOnTouch, { capture: true, once: true, passive: true });
  });
}
