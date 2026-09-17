/**
 * Application Logic for "Which Soto Are You?" (你是哪一種梭多？)
 * State management, quiz transitions, scoring logic, tie-breaker,
 * dynamic bilingual i18n, sound events, and presentation features.
 */

(function() {
  'use strict';

  // Application State
  const state = {
    lang: 'zh', // Default to Traditional Chinese for Taiwan audience
    currentQuestionIndex: 0,
    answers: new Array(8).fill(null),
    resultSotoId: null,
    isAnimating: false
  };

  // DOM Elements Cache
  const dom = {
    // Language buttons
    langEnBtn: document.getElementById('lang-en-btn'),
    langZhBtn: document.getElementById('lang-zh-btn'),
    
    // Sound & Presentation buttons
    soundToggleBtn: document.getElementById('sound-toggle-btn'),
    qrOpenBtn: document.getElementById('qr-open-btn'),
    brandHomeBtn: document.getElementById('brand-home-btn'),

    // Views
    landingView: document.getElementById('landing-view'),
    quizView: document.getElementById('quiz-view'),
    resultView: document.getElementById('result-view'),

    // Landing screen elements
    heroLineupMount: document.getElementById('hero-lineup-mount'),
    startQuizBtn: document.getElementById('start-quiz-btn'),

    // Quiz screen elements
    progressFill: document.getElementById('progress-fill'),
    progressMascot: document.getElementById('progress-mascot'),
    questionBadge: document.getElementById('question-badge'),
    deciderBadge: document.getElementById('decider-badge'),
    questionCard: document.getElementById('question-card'),
    questionPrompt: document.getElementById('question-prompt'),
    optionsList: document.getElementById('options-list'),
    prevBtn: document.getElementById('prev-btn'),

    // Result screen elements
    resultTagline: document.getElementById('result-tagline'),
    resultSotoTitle: document.getElementById('result-soto-title'),
    resultIllustrationMount: document.getElementById('result-illustration-mount'),
    resultTraitsRow: document.getElementById('result-traits-row'),
    resultBlurbText: document.getElementById('result-blurb-text'),
    resultFunFactText: document.getElementById('result-fun-fact-text'),
    resultMapMount: document.getElementById('result-map-mount'),
    retakeBtn: document.getElementById('retake-btn'),
    shareBtn: document.getElementById('share-btn'),
    exploreBtn: document.getElementById('explore-btn'),

    // Modals
    modalAllSotos: document.getElementById('modal-all-sotos'),
    allSotosListMount: document.getElementById('all-sotos-list-mount'),
    closeAllSotosBtn: document.getElementById('close-all-sotos-btn'),

    modalQR: document.getElementById('modal-qr'),
    qrCodeMount: document.getElementById('qr-code-mount'),
    qrUrlDisplay: document.getElementById('qr-url-display'),
    closeQRBtn: document.getElementById('close-qr-btn'),

    // Toast
    toastMsg: document.getElementById('toast-msg')
  };

  // Initialize App
  function init() {
    // Detect saved or preferred language
    try {
      const savedLang = localStorage.getItem('soto_quiz_lang');
      if (savedLang === 'en' || savedLang === 'zh') {
        state.lang = savedLang;
      }
    } catch(e) {}

    setupEventListeners();
    updateLanguage(state.lang);
    renderHeroLineup();
    updateSoundButton();
  }

  // Event Listeners Setup
  function setupEventListeners() {
    // Language Switcher
    dom.langEnBtn.addEventListener('click', () => setLanguage('en'));
    dom.langZhBtn.addEventListener('click', () => setLanguage('zh'));

    // Sound Toggle
    dom.soundToggleBtn.addEventListener('click', () => {
      const isMuted = sotoSound.toggleMute();
      updateSoundButton();
      if (!isMuted) sotoSound.playTap();
    });

    // Presentation QR Modal
    dom.qrOpenBtn.addEventListener('click', () => {
      sotoSound.playTap();
      openQRModal();
    });
    dom.closeQRBtn.addEventListener('click', closeModals);

    // Return to landing on logo click
    dom.brandHomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      sotoSound.playTap();
      switchView('landing');
    });

    // Start Quiz Button
    dom.startQuizBtn.addEventListener('click', () => {
      sotoSound.playTap();
      startQuiz();
    });

    // Quiz Navigation
    dom.prevBtn.addEventListener('click', () => {
      if (state.currentQuestionIndex > 0) {
        sotoSound.playTap();
        state.currentQuestionIndex--;
        renderQuestion(state.currentQuestionIndex, 'prev');
      }
    });

    // Result Screen Actions
    dom.retakeBtn.addEventListener('click', () => {
      sotoSound.playTap();
      resetAndRestartQuiz();
    });

    dom.shareBtn.addEventListener('click', () => {
      sotoSound.playTap();
      shareResult();
    });

    dom.exploreBtn.addEventListener('click', () => {
      sotoSound.playTap();
      openAllSotosModal();
    });
    dom.closeAllSotosBtn.addEventListener('click', closeModals);

    // Modal backdrop clicks
    [dom.modalAllSotos, dom.modalQR].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModals();
        }
      });
    });

    // Escape key closes modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModals();
    });
  }

  // Update UI Sound Button appearance
  function updateSoundButton() {
    const isMuted = sotoSound.isMuted;
    dom.soundToggleBtn.innerHTML = isMuted ? '🔇' : '🔊';
    const text = isMuted ? SOTO_DATA.ui[state.lang].soundOff : SOTO_DATA.ui[state.lang].soundOn;
    dom.soundToggleBtn.setAttribute('title', text);
    dom.soundToggleBtn.setAttribute('aria-label', text);
  }

  // Set Language and update state
  function setLanguage(lang) {
    if (state.lang === lang) return;
    state.lang = lang;
    try {
      localStorage.setItem('soto_quiz_lang', lang);
    } catch(e) {}
    sotoSound.playTap();
    updateLanguage(lang);
  }

  // Dynamic i18n DOM translation without losing progress
  function updateLanguage(lang) {
    // Toggle active classes on lang buttons
    if (lang === 'en') {
      dom.langEnBtn.classList.add('active');
      dom.langZhBtn.classList.remove('active');
      document.documentElement.lang = 'en';
    } else {
      dom.langZhBtn.classList.add('active');
      dom.langEnBtn.classList.remove('active');
      document.documentElement.lang = 'zh-TW';
    }

    const strings = SOTO_DATA.ui[lang];

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key]) {
        el.textContent = strings[key];
      }
    });

    updateSoundButton();

    // Re-render active view content if needed
    if (dom.quizView.classList.contains('active')) {
      renderQuestion(state.currentQuestionIndex, 'none');
    } else if (dom.resultView.classList.contains('active') && state.resultSotoId) {
      populateResultScreen(state.resultSotoId);
    }
  }

  // Switch Active View
  function switchView(viewName) {
    [dom.landingView, dom.quizView, dom.resultView].forEach(v => {
      v.classList.remove('active');
    });

    if (viewName === 'landing') {
      dom.landingView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'quiz') {
      dom.quizView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'result') {
      dom.resultView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Render Landing Hero Lineup
  function renderHeroLineup() {
    dom.heroLineupMount.innerHTML = SOTO_ILLUSTRATIONS.getHeroLineupSVG();
    
    // Allow clicking a lineup bowl to peek at that soto
    dom.heroLineupMount.querySelectorAll('.lineup-item').forEach(item => {
      item.addEventListener('click', () => {
        const sotoTag = item.getAttribute('data-soto');
        sotoSound.playSelect();
        openAllSotosModal(sotoTag);
      });
    });
  }

  // Start Quiz
  function startQuiz() {
    state.currentQuestionIndex = 0;
    state.answers = new Array(8).fill(null);
    switchView('quiz');
    renderQuestion(0, 'next');
  }

  // Reset and restart quiz
  function resetAndRestartQuiz() {
    state.answers = new Array(8).fill(null);
    state.currentQuestionIndex = 0;
    state.resultSotoId = null;
    startQuiz();
  }

  // Render a specific question with animated transitions
  function renderQuestion(index, transitionDir = 'next') {
    const qData = SOTO_DATA.questions[index];
    if (!qData) return;

    const isEn = state.lang === 'en';
    const ui = SOTO_DATA.ui[state.lang];

    // Update Progress Indicator
    const progressPercent = ((index + 1) / SOTO_DATA.questions.length) * 100;
    dom.progressFill.style.width = `${progressPercent}%`;

    // Question numbering badge
    dom.questionBadge.textContent = `${ui.questionOf} ${index + 1} ${ui.of} ${SOTO_DATA.questions.length}`;

    // Decider badge for Question 8
    if (qData.isDecider) {
      dom.deciderBadge.style.display = 'inline-block';
      dom.deciderBadge.textContent = ui.tieBreakerBadge;
    } else {
      dom.deciderBadge.style.display = 'none';
    }

    // Previous button state
    dom.prevBtn.disabled = index === 0;

    // Apply animation classes
    dom.questionCard.className = 'question-card';
    if (transitionDir === 'next') {
      dom.questionCard.classList.add('slide-in-right');
    } else if (transitionDir === 'prev') {
      dom.questionCard.classList.add('slide-in-left');
    }

    // Populate Question Prompt
    dom.questionPrompt.textContent = isEn ? qData.textEn : qData.textZh;

    // Populate Options List
    dom.optionsList.innerHTML = '';
    const currentSelected = state.answers[index];

    qData.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.setAttribute('data-soto', opt.soto);

      if (currentSelected === opt.soto) {
        btn.classList.add('selected');
      }

      btn.innerHTML = `
        <span class="option-icon">${opt.icon || '🍲'}</span>
        <span class="option-text">${isEn ? opt.textEn : opt.textZh}</span>
        <span class="option-check">✓</span>
      `;

      btn.addEventListener('click', () => handleOptionClick(opt.soto, btn));
      dom.optionsList.appendChild(btn);
    });
  }

  // Handle Option Click
  function handleOptionClick(sotoTag, buttonEl) {
    if (state.isAnimating) return;
    state.isAnimating = true;

    sotoSound.playSelect();

    // Mark visual selected state
    dom.optionsList.querySelectorAll('.option-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    buttonEl.classList.add('selected');

    // Save user selection
    state.answers[state.currentQuestionIndex] = sotoTag;

    // Small delay to let user see selection & hear bubble sound
    setTimeout(() => {
      if (state.currentQuestionIndex < SOTO_DATA.questions.length - 1) {
        state.currentQuestionIndex++;
        renderQuestion(state.currentQuestionIndex, 'next');
        state.isAnimating = false;
      } else {
        // Quiz completed! Calculate and show result
        calculateAndShowResult();
        state.isAnimating = false;
      }
    }, 320);
  }

  // Scoring and Tie-Breaker Calculation
  function calculateResult() {
    const scores = {
      lamongan: 0,
      betawi: 0,
      padang: 0,
      banjar: 0,
      makassar: 0
    };

    // Tally answers
    state.answers.forEach(soto => {
      if (soto && scores[soto] !== undefined) {
        scores[soto]++;
      }
    });

    // Find highest score
    let highestScore = -1;
    for (const key in scores) {
      if (scores[key] > highestScore) {
        highestScore = scores[key];
      }
    }

    // Collect all candidates tied for highest score
    const topCandidates = [];
    for (const key in scores) {
      if (scores[key] === highestScore) {
        topCandidates.push(key);
      }
    }

    // If exactly one winner, return it
    if (topCandidates.length === 1) {
      return topCandidates[0];
    }

    // Tie-breaker rule: Use answer from Question 8 (the flavor/travel style decider)
    const q8Answer = state.answers[7]; // Question 8 is at index 7

    if (q8Answer && topCandidates.includes(q8Answer)) {
      return q8Answer;
    }

    // Fallback if tied candidates don't include Q8 answer (pick first top candidate)
    return topCandidates[0];
  }

  // Calculate and Show Result Screen
  function calculateAndShowResult() {
    const resultId = calculateResult();
    state.resultSotoId = resultId;

    populateResultScreen(resultId);
    switchView('result');

    // Triumphant Fanfare sound & Confetti burst
    sotoSound.playFanfare();
    if (typeof launchSotoConfetti === 'function') {
      launchSotoConfetti('confetti-canvas');
    }
  }

  // Populate Result Screen Elements
  function populateResultScreen(sotoId) {
    const soto = SOTO_DATA.personalities[sotoId];
    if (!soto) return;

    const isEn = state.lang === 'en';

    // Result Titles
    dom.resultTagline.textContent = isEn ? soto.tag : soto.tagZh;
    dom.resultSotoTitle.textContent = isEn ? soto.nameEn : soto.nameZh;

    // Animated SVG Illustration with rising steam
    dom.resultIllustrationMount.innerHTML = SOTO_ILLUSTRATIONS.getCharacterSVG(sotoId, 220);

    // Traits Row
    const traits = isEn ? soto.traitsEn : soto.traitsZh;
    dom.resultTraitsRow.innerHTML = traits.map(t => `<span class="trait-pill"># ${t}</span>`).join('');

    // Personality Blurb
    dom.resultBlurbText.textContent = isEn ? soto.blurbEn : soto.blurbZh;

    // Did you know Fun Fact
    dom.resultFunFactText.textContent = isEn ? soto.funFactEn : soto.funFactZh;

    // Interactive Indonesia Regional Map
    dom.resultMapMount.innerHTML = SOTO_ILLUSTRATIONS.getIndonesiaMapSVG(sotoId);
  }

  // Share Result Logic
  function shareResult() {
    const soto = SOTO_DATA.personalities[state.resultSotoId];
    if (!soto) return;

    const isEn = state.lang === 'en';
    const sotoName = isEn ? soto.nameEn : soto.nameZh;
    const shareTextTemplate = SOTO_DATA.ui[state.lang].shareText;
    const shareTitle = SOTO_DATA.ui[state.lang].shareTitle;
    const textToShare = shareTextTemplate.replace('{sotoName}', sotoName);
    const urlToShare = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text: textToShare,
        url: urlToShare
      }).catch(() => {});
    } else {
      // Fallback: Copy to clipboard
      const copyPayload = `${shareTitle}\n${textToShare}\n${urlToShare}`;
      navigator.clipboard.writeText(copyPayload).then(() => {
        showToast(SOTO_DATA.ui[state.lang].copiedToast);
      }).catch(() => {
        showToast(SOTO_DATA.ui[state.lang].copiedToast);
      });
    }
  }

  // Toast Notification
  function showToast(msg) {
    dom.toastMsg.textContent = msg;
    dom.toastMsg.classList.add('show');
    setTimeout(() => {
      dom.toastMsg.classList.remove('show');
    }, 2500);
  }

  // Open "Explore All 5 Sotos" Modal
  function openAllSotosModal(highlightSotoId = null) {
    const isEn = state.lang === 'en';
    const listHtml = Object.values(SOTO_DATA.personalities).map(item => {
      const isHighlighted = highlightSotoId === item.id;
      return `
        <div class="all-soto-entry" style="${isHighlighted ? 'border-color:var(--color-terracotta); background:#FFF3DE;' : ''}">
          <div class="all-soto-thumb">
            ${SOTO_ILLUSTRATIONS.getCharacterSVG(item.id, 72)}
          </div>
          <div class="all-soto-info">
            <h4>${isEn ? item.nameEn : item.nameZh}</h4>
            <span class="region-tag">📍 ${isEn ? item.regionEn : item.regionZh}</span>
            <p>${isEn ? item.visualEn : item.visualZh}</p>
          </div>
        </div>
      `;
    }).join('');

    dom.allSotosListMount.innerHTML = listHtml;
    dom.modalAllSotos.classList.add('active');
  }

  // Open Presentation QR Code Modal
  function openQRModal() {
    const currentUrl = window.location.href;
    dom.qrUrlDisplay.textContent = currentUrl;
    if (window.renderQRCode) {
      window.renderQRCode(dom.qrCodeMount, currentUrl, 220);
    }
    dom.modalQR.classList.add('active');
  }

  // Close all open modals
  function closeModals() {
    dom.modalAllSotos.classList.remove('active');
    dom.modalQR.classList.remove('active');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
