(function () {
  'use strict';

  let section, stage, root, reduceMotion;
  let sightsTrack, sightsControls, sightPrev, sightNext;
  
  let targetMouseX = 0, targetMouseY = 0;
  let mouseX = 0, mouseY = 0;
  let targetScroll = 0, smoothScroll = 0;
  let initialized = false;
  let rafPending = false;
  let isIdle = false;

  let sightCards = [];
  let originalSightCount = 0;
  let activeSight = 0;

  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const smoothstep = (e0, e1, v) => {
    const x = clamp((v - e0) / (e1 - e0));
    return x * x * (3 - 2 * x);
  };
  const lerp = (a, b, t) => a + (b - a) * t;

  const segmentInOut = (s, a, b, c, d) => {
    const enter = smoothstep(a, b, s);
    const exit = smoothstep(c, d, s);
    return { enter, exit, active: enter * (1 - exit) };
  };

  const getScrollDistance = () => {
    if (!section) return 0;
    return clamp(-section.getBoundingClientRect().top, 0, section.offsetHeight - window.innerHeight);
  };

  function update() {
    rafPending = false;
    if (!section || !root) return;

    targetScroll = getScrollDistance();

    if (!initialized || (reduceMotion && reduceMotion.matches)) {
      smoothScroll = targetScroll;
      initialized = true;
    } else {
      smoothScroll = lerp(smoothScroll, targetScroll, 0.14);
    }
    if (Math.abs(smoothScroll - targetScroll) < 0.05) {
      smoothScroll = targetScroll;
    }

    // High-refresh rate mouse lerp factor (0.08)
    mouseX = lerp(mouseX, targetMouseX, 0.08);
    mouseY = lerp(mouseY, targetMouseY, 0.08);

    const isReduced = reduceMotion && reduceMotion.matches;
    const curMX = isReduced ? 0 : mouseX;
    const curMY = isReduced ? 0 : mouseY;

    // 3-Page Cinematic Navigation Math
    // Page 1: Intro (0px - 600px)
    const introExit = smoothstep(90, 600, smoothScroll);

    // Page 2: 3D Feature Slides Showcase (600px - 2100px)
    const sightsEnterRaw = smoothstep(500, 850, smoothScroll);
    const sightsExitRaw = smoothstep(1950, 2300, smoothScroll);
    const sightsEnter = sightsEnterRaw * (1 - sightsExitRaw);
    const sightsControlsEnter = smoothstep(600, 900, smoothScroll) * (1 - sightsExitRaw);

    const frame2 = segmentInOut(smoothScroll, 560, 900, 1300, 1620);
    const frame3 = segmentInOut(smoothScroll, 1760, 2140, 2540, 2700);
    const progress = clamp(smoothScroll / 2700);
    const blurActive = clamp(frame2.active + frame3.active);
    const backScale = 0.76 + progress * 0.2 + frame2.enter * 0.18 + frame3.enter * 0.16;
    const sharedHeroY = progress * -74;
    const sharedHeroScale = progress * 0.23;

    // Apply CSS Variables for 3D GPU Motion
    root.style.setProperty('--mx', curMX.toFixed(4));
    root.style.setProperty('--my', curMY.toFixed(4));
    root.style.setProperty('--back-scale', backScale.toFixed(4));

    // Page 1 Intro Elements (Hero title & Archway Portal)
    root.style.setProperty('--title-y', `${(introExit * -210).toFixed(4)}px`);
    root.style.setProperty('--title-scale', (1 - introExit * 0.08).toFixed(4));
    root.style.setProperty('--title-opacity', (1 - introExit).toFixed(4));

    root.style.setProperty('--bridge-x', `calc(-50% + ${(curMX * 22).toFixed(4)}px)`);
    root.style.setProperty('--bridge-y', `${(curMY * 10 + sharedHeroY - introExit * 350).toFixed(4)}px`);
    root.style.setProperty('--bridge-scale', (1.02 + sharedHeroScale + introExit * 0.35).toFixed(4));

    root.style.setProperty('--split-left-x', `calc(-50% + ${(-introExit * 48).toFixed(4)}vw + ${(curMX * 26).toFixed(4)}px)`);
    root.style.setProperty('--split-left-y', `${(curMY * 12 + sharedHeroY - introExit * 120).toFixed(4)}px`);

    root.style.setProperty('--split-right-x', `calc(-50% + ${(introExit * 48).toFixed(4)}vw + ${(curMX * 26).toFixed(4)}px)`);
    root.style.setProperty('--split-right-y', `${(curMY * 12 + sharedHeroY - introExit * 120).toFixed(4)}px`);

    // Page 2 3D Feature Slides & Page 3 Exit ("Slide is going to empty")
    root.style.setProperty('--sights-opacity', sightsEnter.toFixed(4));
    root.style.setProperty('--sights-controls-opacity', sightsControlsEnter.toFixed(4));

    if (sightsControls) {
      sightsControls.classList.toggle("is-ready", sightsControlsEnter > 0.05);
    }

    root.style.setProperty('--sights-visibility', sightsEnter > 0.01 ? "visible" : "hidden");
    root.style.setProperty('--sights-y', `${((1 - sightsEnterRaw) * 120 + sightsExitRaw * -180).toFixed(4)}px`);
    root.style.setProperty('--sights-enter-x', "0px");
    root.style.setProperty('--sights-scale', (1 / backScale).toFixed(4));

    // Idle Detection Engine Cutoff: Stop RAF loop when scroll and mouse motion halt
    const scrollDelta = Math.abs(smoothScroll - targetScroll);
    const mouseDeltaX = Math.abs(mouseX - targetMouseX);
    const mouseDeltaY = Math.abs(mouseY - targetMouseY);

    if (scrollDelta < 0.05 && mouseDeltaX < 0.0005 && mouseDeltaY < 0.0005) {
      smoothScroll = targetScroll;
      mouseX = targetMouseX;
      mouseY = targetMouseY;
      isIdle = true;
      rafPending = false;
      // Loop cut off cleanly, stop calling requestAnimationFrame
    } else {
      requestTick();
    }
  }

  function requestTick() {
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(update);
    }
  }

  function wakeRAF() {
    if (isIdle) {
      isIdle = false;
      requestTick();
    } else {
      requestTick();
    }
  }

  function setupSightSlider() {
    if (!sightsTrack) return;
    const originalCards = Array.from(sightsTrack.children);
    originalSightCount = originalCards.length;
    if (originalSightCount === 0) return;

    sightsTrack.replaceChildren();

    for (let setIndex = 0; setIndex < 3; setIndex++) {
      originalCards.forEach((card, cardIndex) => {
        const clone = card.cloneNode(true);
        clone.dataset.sightIndex = String(setIndex * originalSightCount + cardIndex);

        clone.addEventListener('click', (e) => {
          e.preventDefault();
          selectSightCard(clone);
          const fid = clone.dataset.featureId;
          const url = clone.dataset.toolUrl;
          if (fid || url) {
            if (window.openFeature) {
              window.openFeature(fid, url);
            }
          } else {
            const h3 = clone.querySelector('h3');
            if (h3 && window.openCityCardFromSlider) {
              window.openCityCardFromSlider(h3.textContent.trim());
            }
          }
        });

        clone.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectSightCard(clone);
            const fid = clone.dataset.featureId;
            const url = clone.dataset.toolUrl;
            if (fid || url) {
              if (window.openFeature) {
                window.openFeature(fid, url);
              }
            }
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            moveSightSlider(-1);
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            moveSightSlider(1);
          }
        });

        sightsTrack.appendChild(clone);
      });
    }

    sightCards = Array.from(sightsTrack.children);
    activeSight = originalSightCount;

    sightsTrack.addEventListener('transitionend', normalizeSightSlider);

    updateSightSlider();
  }

  function updateSightSlider() {
    if (!sightsTrack || sightCards.length === 0) return;
    const cardWidth = sightCards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(sightsTrack).gap || getComputedStyle(sightsTrack).columnGap || "0");
    if (root) {
      root.style.setProperty('--sights-shift', `${-(cardWidth + gap) * activeSight}px`);
    }

    sightCards.forEach((card, idx) => {
      card.classList.toggle('is-active', idx === activeSight);
    });
  }

  function moveSightSlider(dir) {
    activeSight += dir;
    updateSightSlider();
  }

  function selectSightCard(card) {
    const idx = Number(card.dataset.sightIndex);
    if (Number.isFinite(idx)) {
      activeSight = idx;
      updateSightSlider();
    }
  }

  function jumpSightSlider(i) {
    if (!sightsTrack) return;
    sightsTrack.classList.add('is-jumping');
    activeSight = i;
    updateSightSlider();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sightsTrack.classList.remove('is-jumping');
      });
    });
  }

  function normalizeSightSlider() {
    if (originalSightCount === 0) return;
    if (activeSight >= originalSightCount * 2) {
      jumpSightSlider(activeSight - originalSightCount);
    } else if (activeSight < originalSightCount) {
      jumpSightSlider(activeSight + originalSightCount);
    }
  }

  function bindFloatingActionTray() {
    const trayButtons = document.querySelectorAll('.action-pill-btn');
    trayButtons.forEach(btn => {
      const text = btn.textContent.trim();
      if (text.includes('View Map')) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (window.switchTab) window.switchTab('roam');
          const el = document.getElementById('main-app-anchor');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
      } else if (text.includes('View Reel')) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (window.openSpotlightModal) {
            window.openSpotlightModal();
          } else if (window.openQuantumHologramModal) {
            window.openQuantumHologramModal();
          }
        });
      } else if (text.includes('12 Worlds')) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (window.switchTab) window.switchTab('tourism');
          const el = document.getElementById('main-app-anchor');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
      }
    });
  }

  function bindQuickTaskbarDelegation() {
    const taskbar = document.querySelector('.quick-taskbar');
    if (taskbar) {
      taskbar.addEventListener('click', (e) => {
        const chip = e.target.closest('.feature-chip');
        if (!chip) return;
        e.preventDefault();
        const targetUrl = chip.dataset.toolUrl;
        const featureId = chip.dataset.featureId;
        if (typeof window.openFeature === 'function') {
          window.openFeature(featureId, targetUrl);
        }
      });
    }

    const searchInput = document.getElementById('feature-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        const chips = document.querySelectorAll('.quick-taskbar .feature-chip');
        chips.forEach(chip => {
          const text = chip.textContent.toLowerCase();
          const fid = (chip.dataset.featureId || '').toLowerCase();
          if (!q || text.includes(q) || fid.includes(q)) {
            chip.style.display = 'inline-flex';
          } else {
            chip.style.display = 'none';
          }
        });
      });
    }
  }

  function init() {
    section = document.querySelector('.cinema-scroll');
    stage = document.querySelector('.stage') || document.querySelector('.naturecore-viewport');
    root = document.documentElement;
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    sightsTrack = document.querySelector('.sights-track');
    sightsControls = document.querySelector('.sights-controls');
    sightPrev = document.querySelector('.sight-prev');
    sightNext = document.querySelector('.sight-next');

    // Strictly Passive Listeners for 60+ FPS Scroll & Motion with Idle Wakeup
    window.addEventListener('scroll', wakeRAF, { passive: true });
    window.addEventListener('resize', () => {
      updateSightSlider();
      wakeRAF();
    }, { passive: true });

    window.addEventListener('pointermove', (e) => {
      targetMouseX = e.clientX / window.innerWidth - 0.5;
      targetMouseY = e.clientY / window.innerHeight - 0.5;
      wakeRAF();
    }, { passive: true });

    if (sightPrev) sightPrev.addEventListener('click', () => moveSightSlider(-1));
    if (sightNext) sightNext.addEventListener('click', () => moveSightSlider(1));

    setupSightSlider();
    bindFloatingActionTray();
    bindQuickTaskbarDelegation();
    wakeRAF();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();