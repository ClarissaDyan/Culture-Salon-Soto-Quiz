/**
 * High-Resolution Share Card Generator for "Which Soto Are You?"
 * Generates an aesthetic, Instagram/social-ready 900x1220 PNG card
 * with soto character artwork, traits, cultural storytelling, and website link.
 * 100% Client-Side HTML5 Canvas - Zero external dependencies.
 */

const SotoCardGenerator = (function() {
  'use strict';

  // Helper to safely wrap multi-line text for both English and Chinese
  function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
    const isCJK = /[\u4e00-\u9fa5]/.test(text);
    const tokens = isCJK ? Array.from(text) : text.split(' ');
    let lines = [];
    let currentLine = '';

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const spacer = (isCJK || currentLine === '') ? '' : ' ';
      const testLine = currentLine + spacer + token;
      const testWidth = ctx.measureText(testLine).width;

      if (testWidth > maxWidth && currentLine !== '') {
        lines.push(currentLine);
        currentLine = token;
        if (lines.length >= maxLines - 1) {
          // Truncate remainder with ellipsis if needed
          let remaining = isCJK ? tokens.slice(i).join('') : tokens.slice(i).join(' ');
          while (ctx.measureText(remaining + '...').width > maxWidth && remaining.length > 0) {
            remaining = remaining.slice(0, -1);
          }
          lines.push(remaining + '...');
          currentLine = '';
          break;
        }
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine && lines.length < maxLines) {
      lines.push(currentLine);
    }

    lines.forEach((line, idx) => {
      ctx.fillText(line, x, y + (idx * lineHeight));
    });

    return lines.length * lineHeight;
  }

  // Draw a rounded rectangle path
  function drawRoundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  // Draw decorative Batik Kawung circular motif in a corner
  function drawBatikCorner(ctx, cx, cy) {
    ctx.save();
    ctx.strokeStyle = '#C1502E';
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.22;

    ctx.beginPath();
    ctx.arc(cx, cy, 32, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#E3A426';
    ctx.lineWidth = 2.5;
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  }

  // Convert SVG string to HTMLImageElement
  function loadSvgImage(svgString) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const URL = window.URL || window.webkitURL || window;
      const blobURL = URL.createObjectURL(svgBlob);

      img.onload = () => {
        URL.revokeObjectURL(blobURL);
        resolve(img);
      };
      img.onerror = (err) => {
        URL.revokeObjectURL(blobURL);
        reject(err);
      };
      img.src = blobURL;
    });
  }

  // Main Canvas Render
  async function renderCard(sotoId, lang = 'zh') {
    const soto = SOTO_DATA.personalities[sotoId] || SOTO_DATA.personalities.lamongan;
    const isEn = lang === 'en';

    // Wait for web fonts if supported
    if (document.fonts && document.fonts.ready) {
      try { await document.fonts.ready; } catch(e) {}
    }

    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 1220;
    const ctx = canvas.getContext('2d');

    // 1. Full Canvas Background (Warm Spice Cream)
    ctx.fillStyle = '#F8EEDB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Card Shadow & Inner Card
    const cardX = 35;
    const cardY = 35;
    const cardW = 830;
    const cardH = 1150;
    const cardR = 26;

    // Drop shadow (retro sticker style)
    drawRoundRect(ctx, cardX + 8, cardY + 8, cardW, cardH, cardR);
    ctx.fillStyle = '#3A2E27';
    ctx.fill();

    // Main Card Surface
    drawRoundRect(ctx, cardX, cardY, cardW, cardH, cardR);
    ctx.fillStyle = '#FFFDF9';
    ctx.fill();
    ctx.lineWidth = 4.5;
    ctx.strokeStyle = '#3A2E27';
    ctx.stroke();

    // 3. Batik Decorative Corners
    drawBatikCorner(ctx, cardX + 40, cardY + 40);
    drawBatikCorner(ctx, cardX + cardW - 40, cardY + 40);
    drawBatikCorner(ctx, cardX + 40, cardY + cardH - 40);
    drawBatikCorner(ctx, cardX + cardW - 40, cardY + cardH - 40);

    // 4. Header Top Eyebrow Badge
    const headerPillY = 70;
    drawRoundRect(ctx, 450 - 180, headerPillY, 360, 32, 16);
    ctx.fillStyle = 'rgba(193, 80, 46, 0.08)';
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(193, 80, 46, 0.3)';
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '700 16px Fredoka, Nunito, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#C1502E';
    ctx.fillText(isEn ? '🍜 WHICH SOTO ARE YOU?' : '🍜 你是哪一種梭多？風味性格測驗', 450, headerPillY + 16);

    // 5. Draw Cute Soto Character Illustration
    try {
      const svgString = SOTO_ILLUSTRATIONS.getCharacterSVG(sotoId, 270);
      const characterImg = await loadSvgImage(svgString);
      ctx.drawImage(characterImg, 450 - 135, 115, 270, 270);
    } catch(err) {
      console.warn('SVG character draw failed, continuing card build:', err);
    }

    // 6. Soto Name Title
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.font = '800 44px Fredoka, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#7A2E2E';
    ctx.fillText(isEn ? soto.nameEn : soto.nameZh, 450, 400);

    // 7. Tagline Pill Badge
    const taglineText = `✨ ${isEn ? soto.tag : soto.tagZh}`;
    ctx.font = '700 20px Fredoka, "Noto Sans TC", sans-serif';
    const tagWidth = ctx.measureText(taglineText).width + 36;
    const tagPillY = 460;

    // Tagline shadow
    drawRoundRect(ctx, 450 - (tagWidth / 2) + 2, tagPillY + 2, tagWidth, 34, 17);
    ctx.fillStyle = '#3A2E27';
    ctx.fill();

    // Tagline body
    drawRoundRect(ctx, 450 - (tagWidth / 2), tagPillY, tagWidth, 34, 17);
    ctx.fillStyle = '#E3A426';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#3A2E27';
    ctx.stroke();

    ctx.fillStyle = '#3A2E27';
    ctx.textBaseline = 'middle';
    ctx.fillText(taglineText, 450, tagPillY + 17);

    // 8. Region Indicator
    ctx.font = '700 18px Nunito, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#C1502E';
    ctx.fillText(`📍 ${isEn ? soto.regionEn : soto.regionZh}`, 450, 514);

    // 9. Personality Traits Row (Pills)
    const traits = isEn ? soto.traitsEn : soto.traitsZh;
    const traitsY = 548;
    ctx.font = '700 16px Nunito, "Noto Sans TC", sans-serif';
    
    // Calculate total width of all pills to center them
    const pillPaddings = 24;
    const pillSpacing = 10;
    const pillWidths = traits.map(t => ctx.measureText(`# ${t}`).width + pillPaddings);
    const totalTraitsW = pillWidths.reduce((a, b) => a + b, 0) + (pillSpacing * (traits.length - 1));
    let currentPillX = 450 - (totalTraitsW / 2);

    traits.forEach((t, idx) => {
      const pw = pillWidths[idx];
      drawRoundRect(ctx, currentPillX, traitsY, pw, 30, 15);
      ctx.fillStyle = 'rgba(193, 80, 46, 0.08)';
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(193, 80, 46, 0.35)';
      ctx.stroke();

      ctx.fillStyle = '#C1502E';
      ctx.textBaseline = 'middle';
      ctx.fillText(`# ${t}`, currentPillX + (pw / 2), traitsY + 15);

      currentPillX += pw + pillSpacing;
    });

    // 10. Personality Storytelling Blurb Box
    const blurbBoxX = 65;
    const blurbBoxY = 600;
    const blurbBoxW = 770;
    const blurbBoxH = 195;
    drawRoundRect(ctx, blurbBoxX, blurbBoxY, blurbBoxW, blurbBoxH, 18);
    ctx.fillStyle = '#FFF8EB';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#E3A426';
    ctx.stroke();

    // Decorative quote mark
    ctx.font = '800 64px Fredoka, Georgia, serif';
    ctx.fillStyle = 'rgba(227, 164, 38, 0.25)';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('“', blurbBoxX + 16, blurbBoxY + 8);

    // Blurb Text
    ctx.font = '600 21px Nunito, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#3A2E27';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    wrapText(
      ctx,
      isEn ? soto.blurbEn : soto.blurbZh,
      blurbBoxX + 42,
      blurbBoxY + 38,
      blurbBoxW - 84,
      34,
      4
    );

    // 11. Cultural Fun Fact Box
    const factBoxX = 65;
    const factBoxY = 815;
    const factBoxW = 770;
    const factBoxH = 175;
    drawRoundRect(ctx, factBoxX, factBoxY, factBoxW, factBoxH, 16);
    ctx.fillStyle = '#FAF3E6';
    ctx.fill();
    ctx.lineWidth = 1.8;
    ctx.setLineDash([6, 5]);
    ctx.strokeStyle = '#C1502E';
    ctx.stroke();
    ctx.setLineDash([]); // Reset dash

    // Fact Title
    ctx.font = '700 18px Fredoka, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#C1502E';
    ctx.fillText(isEn ? '💡 CULINARY FUN FACT' : '💡 你知道嗎？文化冷知識', factBoxX + 24, factBoxY + 18);

    // Fact text
    ctx.font = '500 17px Nunito, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#5C4A3E';
    wrapText(
      ctx,
      isEn ? soto.funFactEn : soto.funFactZh,
      factBoxX + 24,
      factBoxY + 54,
      factBoxW - 48,
      27,
      4
    );

    // 12. Bottom Website Watermark & Attribution Bar
    const footerX = 65;
    const footerY = 1010;
    const footerW = 770;
    const footerH = 58;
    drawRoundRect(ctx, footerX, footerY, footerW, footerH, 14);
    ctx.fillStyle = '#3A2E27';
    ctx.fill();

    // Brand on left
    ctx.font = '700 17px Fredoka, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#FAF3E6';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('🍜 Culture Salon 2026 • 梭多風味性格測驗', footerX + 20, footerY + 29);

    // URL on right
    ctx.font = '700 17px Nunito, sans-serif';
    ctx.fillStyle = '#E3A426';
    ctx.textAlign = 'right';
    ctx.fillText('culture-salon-soto-quiz.vercel.app', footerX + footerW - 20, footerY + 29);

    return canvas;
  }

  // Public API: Return Data URL
  async function createCardDataURL(sotoId, lang = 'zh') {
    const canvas = await renderCard(sotoId, lang);
    return canvas.toDataURL('image/png', 0.95);
  }

  // Public API: Return Blob
  function createCardBlob(sotoId, lang = 'zh') {
    return new Promise(async (resolve) => {
      const canvas = await renderCard(sotoId, lang);
      canvas.toBlob((blob) => resolve(blob), 'image/png', 0.95);
    });
  }

  // Public API: Download directly as PNG file
  async function downloadCard(sotoId, lang = 'zh') {
    const soto = SOTO_DATA.personalities[sotoId] || SOTO_DATA.personalities.lamongan;
    const isEn = lang === 'en';
    const sotoName = (isEn ? soto.nameEn : soto.nameZh).replace(/\s+/g, '-');
    const filename = `Soto-Quiz-Result-${sotoName}.png`;

    const dataUrl = await createCardDataURL(sotoId, lang);
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Public API: Native share with file (or copy fallback)
  async function shareCardWithFile(sotoId, lang = 'zh') {
    const soto = SOTO_DATA.personalities[sotoId] || SOTO_DATA.personalities.lamongan;
    const isEn = lang === 'en';
    const sotoName = isEn ? soto.nameEn : soto.nameZh;
    const shareTitle = isEn ? 'Which Soto Are You? Quiz Result' : '你是哪一種梭多？測驗結果';
    const shareText = isEn
      ? `I got ${sotoName}! Which Indonesian Soto are you? Take the quiz:`
      : `我測出來是【${sotoName}】！來看看你是哪一種印尼梭多？`;
    const shareUrl = window.location.href;

    try {
      const blob = await createCardBlob(sotoId, lang);
      const file = new File([blob], `Soto-${sotoId}-result.png`, { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: shareTitle,
          text: `${shareText}\n${shareUrl}`,
          url: shareUrl,
          files: [file]
        });
        return { success: true, method: 'files' };
      } else if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: `${shareText}\n${shareUrl}`,
          url: shareUrl
        });
        return { success: true, method: 'url' };
      }
    } catch(e) {
      if (e.name === 'AbortError') return { success: false, aborted: true };
    }

    // Fallback: Download file directly and copy text
    await downloadCard(sotoId, lang);
    try {
      await navigator.clipboard.writeText(`${shareTitle}\n${shareText}\n${shareUrl}`);
    } catch(e) {}
    return { success: true, method: 'download_fallback' };
  }

  const generator = {
    renderCard,
    createCardDataURL,
    createCardBlob,
    downloadCard,
    shareCardWithFile
  };

  if (typeof window !== 'undefined') {
    window.SotoCardGenerator = generator;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = generator;
  }

  return generator;
})();

if (typeof window !== 'undefined') {
  window.SotoCardGenerator = SotoCardGenerator;
}
