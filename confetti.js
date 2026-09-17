/**
 * Confetti celebration effects for "Which Soto Are You?"
 * Generates colorful festive paper sprinkles and soup sparkles on result reveal.
 */

function launchSotoConfetti(canvasId = 'confetti-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  function resize() {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
  }
  resize();

  const colors = [
    '#E3A426', // Turmeric Gold
    '#C1502E', // Terracotta
    '#7A2E2E', // Spiced Maroon
    '#7A9B57', // Leaf Green
    '#2E4057', // Batik Indigo
    '#FFDE59', // Golden broth highlight
    '#FFF8E7'  // Coconut cream
  ];

  const particles = [];
  const particleCount = 75;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: window.innerWidth * (0.3 + Math.random() * 0.4),
      y: window.innerHeight * 0.45,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() * -14) - 4,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      shape: Math.random() > 0.4 ? 'rect' : 'circle',
      opacity: 1,
      gravity: 0.38,
      drag: 0.96
    });
  }

  let animFrameId = null;
  const startTime = Date.now();

  function render() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    let activeParticles = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.rotation += p.vRot;

      if (elapsed > 1800) {
        p.opacity -= 0.02;
      }

      if (p.opacity > 0 && p.y < window.innerHeight + 50) {
        activeParticles++;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        ctx.fillStyle = p.color;
        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    });

    if (activeParticles > 0 && elapsed < 4000) {
      animFrameId = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    }
  }

  render();
}
