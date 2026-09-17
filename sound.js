/**
 * Synthesized Sound Effects & Indonesian Folk Music for "Which Soto Are You?"
 * 100% Web Audio API - Zero external audio file dependencies.
 * Plays the beloved Indonesian folk song "Rasa Sayange" with warm gamelan & marimba chimes.
 */

class SotoSoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isMusicPlaying = false;
    this.bgmTimer = null;
    this.currentNoteIndex = 0;
    this.masterGain = null;
    this.musicGain = null;

    // Load saved sound preference
    try {
      const savedMute = localStorage.getItem('soto_sound_muted');
      if (savedMute !== null) {
        this.isMuted = savedMute === 'true';
      }
    } catch (e) {}
  }

  // Initialize audio context on user gesture
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.setValueAtTime(0.22, this.ctx.currentTime); // Gentle ambient level
        this.musicGain.connect(this.masterGain);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem('soto_sound_muted', this.isMuted.toString());
    } catch (e) {}

    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  // =========================================================================
  // Traditional Indonesian Folk Song: "Rasa Sayange"
  // Arranged for Gamelan / Angklung / Balafon chimes & warm bass
  // =========================================================================

  getRasaSayangeScore() {
    // Frequency map (Hz)
    const N = {
      C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00,
      C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
      C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00
    };

    // Melody: Note, Duration (beats), Bass
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

      // Measure 5: Second phrase: "Ka-lau a-da su-mur di la-dang"
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

  // Play a gentle resonant Gamelan / Kolintang bell tone
  playGamelanNote(freq, startTime, duration = 0.5) {
    if (!this.ctx || !this.musicGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Triangle wave mimics wooden xylophone / tuned metal bell bar
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.28, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.musicGain);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  // Play a soft acoustic bass note
  playBassNote(freq, startTime, duration = 0.7) {
    if (!this.ctx || !this.musicGain || !freq) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.2, startTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.musicGain);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  // Start looping Indonesian song
  startBGM() {
    this.init();
    if (this.isMusicPlaying) return;
    this.isMusicPlaying = true;

    const score = this.getRasaSayangeScore();
    const beatSeconds = 0.46; // Cheerful 130 BPM tempo
    let noteIdx = 0;

    const scheduleNext = () => {
      if (!this.isMusicPlaying || !this.ctx) return;

      const item = score[noteIdx];
      const now = this.ctx.currentTime;

      if (item.note) {
        this.playGamelanNote(item.note, now + 0.05, item.dur * beatSeconds * 1.2);
      }
      if (item.bass) {
        this.playBassNote(item.bass, now + 0.05, 0.8);
      }

      noteIdx = (noteIdx + 1) % score.length;
      this.bgmTimer = setTimeout(scheduleNext, item.dur * beatSeconds * 1000);
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

  // Toggle Indonesian song
  toggleBGM() {
    this.init();
    if (this.isMusicPlaying) {
      this.stopBGM();
    } else {
      this.startBGM();
    }
    return this.isMusicPlaying;
  }

  // =========================================================================
  // Tactile Sound Effects
  // =========================================================================

  // Wooden chopstick / marimba tap
  playTap() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const now = this.ctx.currentTime;

    osc.frequency.setValueAtTime(580, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  // Bubbly cheerful soup pop when picking an option
  playSelect() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const now = this.ctx.currentTime;

    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(860, now + 0.12);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.14);
  }

  // Celebratory pentatonic gamelan fanfare on result reveal
  playFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.masterGain) return;

    const notes = [392, 523, 659.25, 783.99, 1046.5];
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      const startTime = now + (idx * 0.1);
      const duration = 0.55;

      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.25, startTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(startTime);
      osc.stop(startTime + duration);
    });

    // Cute gentle "slurp" bubble finish
    setTimeout(() => {
      if (this.isMuted || !this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.exponentialRampToValueAtTime(1100, t + 0.2);
      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.23);
    }, 600);
  }
}

const sotoSound = new SotoSoundManager();
