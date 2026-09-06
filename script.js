(function () {
  'use strict';

  let section, stage, root, reduceMotion;
  let sightsTrack, sightsControls, sightPrev, sightNext;
  
  let targetMouseX = 0, targetMouseY = 0;
  let mouseX = 0, mouseY = 0;
  let targetScroll = 0, smoothScroll = 0;
  let initialized = false;
  let rafPending = false;

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

    // High-refresh rate tuned mouse lerp factor (0.08)
    mouseX = lerp(mouseX, targetMouseX, 0.08);
    mouseY = lerp(mouseY, targetMouseY, 0.08);

    const isReduced = reduceMotion && reduceMotion.matches;
    const curMX = isReduced ? 0 : mouseX;
    const curMY = isReduced ? 0 : mouseY;

    const frame2 = segmentInOut(smoothScroll, 560, 900, 1300, 1620);
    const frame3 = segmentInOut(smoothScroll, 1760, 2140, 2540, 2700);
    const progress = clamp(smoothScroll / 2700);
    const introExit = smoothstep(90, 650, smoothScroll);
    const sightsEnterRaw = smoothstep(2760, 3560, smoothScroll);
    const sightsEnter = Math.pow(sightsEnterRaw, 1.55);
    const sightsControlsEnter = smoothstep(3360, 3660, smoothScroll);
    const blurActive = clamp(frame2.active + frame3.active);
    const frame2Opacity = frame2.active * (1 - frame3.enter);
    const splitDrift = Math.pow(frame2.enter, 1.5);
    const panel2Opacity = frame2.active * (1 - frame2.exit);
    const panel3Opacity = frame3.active * (1 - frame3.exit);
    const backScale = 0.76 + progress * 0.2 + frame2.enter * 0.18 + frame3.enter * 0.16;
    const sharedHeroY = progress * -74;
    const sharedHeroScale = progress * 0.23;
    const sightsScreenTop = Math.min(220, Math.max(112, window.innerHeight * 0.19)) - 50;
    const sightsParentTop = window.innerHeight - (window.innerHeight - sightsScreenTop) / backScale;

    // Apply CSS Variables for 3D GPU Motion
    root.style.setProperty('--mx', curMX.toFixed(4));
    root.style.setProperty('--my', curMY.toFixed(4));

    root.style.setProperty('--back-opacity', (1 - frame2.active * 0.06).toFixed(4));
    root.style.setProperty('--back-x', `${(curMX * -16).toFixed(4)}px`);
    root.style.setProperty('--back-y', `${(curMY * -6).toFixed(4)}px`);
    root.style.setProperty('--back-scale', backScale.toFixed(4));

    root.style.setProperty('--four-y', `${(10 + progress * 10).toFixed(4)}vh`);
    root.style.setProperty('--four-scale', (0.78 + progress * 0.16).toFixed(4));

    root.style.setProperty('--bazaar-y', `${(20 - progress * 8).toFixed(4)}vh`);
    root.style.setProperty('--blur-px', `${(blurActive * 14).toFixed(4)}px`);
    root.style.setProperty('--back-brightness', (1 - blurActive * 0.255).toFixed(4));
    root.style.setProperty('--bazaar-blur-px', `${(frame2.active * 14).toFixed(4)}px`);
    root.style.setProperty('--bazaar-brightness', (1 - frame2.active * 0.255 - frame3.active * 0.06).toFixed(4));
    root.style.setProperty('--bazaar-saturation', (1 + frame3.active * 0.18).toFixed(4));

    root.style.setProperty('--shade-opacity', '1');
    root.style.setProperty('--shade-z', frame2.active > 0.02 ? '2' : '0');
    root.style.setProperty('--shade-top-alpha', (blurActive * 0.465).toFixed(4));
    root.style.setProperty('--shade-mid-alpha', (blurActive * 0.42).toFixed(4));
    root.style.setProperty('--shade-bottom-alpha', (blurActive * 0.51).toFixed(4));

    root.style.setProperty('--title-y', `${(introExit * -210).toFixed(4)}px`);
    root.style.setProperty('--title-scale', (1 - introExit * 0.08).toFixed(4));
    root.style.setProperty('--title-opacity', (1 - introExit).toFixed(4));

    // Overgrown Stone Arch Portal Shift & Scale Motion
    root.style.setProperty('--bridge-x', `calc(-50% + ${(curMX * 22).toFixed(4)}px)`);
    root.style.setProperty('--bridge-y', `${(curMY * 10 + sharedHeroY - frame2.exit * 760).toFixed(4)}px`);
    root.style.setProperty('--bridge-bottom', `${(0 - frame2.enter * 10).toFixed(4)}vh`);
    root.style.setProperty('--bridge-width', `${(76 + frame2.enter * 30).toFixed(4)}vw`);
    root.style.setProperty('--bridge-scale', (1.02 + sharedHeroScale + frame2.exit * 0.46).toFixed(4));

    // Splitframe Leaves Parting Sideways
    root.style.setProperty('--split-left-x', `calc(-50% + ${(-splitDrift * 48).toFixed(4)}vw + ${(curMX * 26).toFixed(4)}px)`);
    root.style.setProperty('--split-left-y', `${(curMY * 12 + sharedHeroY - splitDrift * 180).toFixed(4)}px`);
    root.style.setProperty('--split-left-scale', (1 + sharedHeroScale + frame2.enter * 0.74).toFixed(4));

    root.style.setProperty('--split-right-x', `calc(-50% + ${(splitDrift * 48).toFixed(4)}vw + ${(curMX * 26).toFixed(4)}px)`);
    root.style.setProperty('--split-right-y', `${(curMY * 12 + sharedHeroY - splitDrift * 180).toFixed(4)}px`);
    root.style.setProperty('--split-right-scale', (1 + sharedHeroScale + frame2.enter * 0.74).toFixed(4));

    root.style.setProperty('--frame2-opacity', frame2Opacity.toFixed(4));
    root.style.setProperty('--frame2-x', `calc(-50% + ${(curMX * 10).toFixed(4)}px)`);
    root.style.setProperty('--frame2-y', `calc(-50% + ${(curMY * 8 - frame2.exit * 150).toFixed(4)}px)`);
    root.style.setProperty('--frame2-scale', (1.06 + frame2.enter * 0.08 + frame2.exit * 0.08).toFixed(4));

    root.style.setProperty('--intro-copy-y', `${(introExit * 90).toFixed(4)}px`);
    root.style.setProperty('--intro-copy-opacity', (1 - introExit).toFixed(4));

    root.style.setProperty('--panel2-opacity', panel2Opacity.toFixed(4));
    root.style.setProperty('--panel2-y', `calc(-50% + ${(-frame2.exit * 86 + (1 - frame2.enter) * 58).toFixed(4)}px)`);

    root.style.setProperty('--panel3-opacity', panel3Opacity.toFixed(4));
    root.style.setProperty('--panel3-y', `calc(-50% + ${(-frame3.exit * 86 + (1 - frame3.enter) * 58).toFixed(4)}px)`);

    root.style.setProperty('--sights-opacity', sightsEnter.toFixed(4));
    root.style.setProperty('--sights-controls-opacity', sightsControlsEnter.toFixed(4));

    if (sightsControls) {
      sightsControls.classList.toggle("is-ready", sightsControlsEnter > 0.98);
    }

    root.style.setProperty('--sights-visibility', sightsEnter > 0.01 ? "visible" : "hidden");
    root.style.setProperty('--sights-y', "0px");
    root.style.setProperty('--sights-enter-x', `${((1 - sightsEnter) * 420).toFixed(4)}vw`);
    root.style.setProperty('--sights-scale', (1 / backScale).toFixed(4));
    root.style.setProperty('--sights-top', `${sightsParentTop.toFixed(4)}px`);
    root.style.setProperty('--sights-screen-top', `${sightsScreenTop.toFixed(4)}px`);

    // Idle Cutoff Check: stop RAF loop when motion settles
    const scrollDelta = Math.abs(smoothScroll - targetScroll);
    const mouseDeltaX = Math.abs(mouseX - targetMouseX);
    const mouseDeltaY = Math.abs(mouseY - targetMouseY);

    if (scrollDelta > 0.05 || mouseDeltaX > 0.0005 || mouseDeltaY > 0.0005) {
      requestTick();
    }
  }

  function requestTick() {
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(update);
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

        clone.addEventListener('click', () => {
          selectSightCard(clone);
          const h3 = clone.querySelector('h3');
          if (h3 && window.openCityCardFromSlider) {
            window.openCityCardFromSlider(h3.textContent.trim());
          }
        });
        clone.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectSightCard(clone);
            const h3 = clone.querySelector('h3');
            if (h3 && window.openCityCardFromSlider) {
              window.openCityCardFromSlider(h3.textContent.trim());
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

  function init() {
    section = document.querySelector('.cinema-scroll');
    stage = document.querySelector('.stage') || document.querySelector('.naturecore-viewport');
    root = document.documentElement;
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    sightsTrack = document.querySelector('.sights-track');
    sightsControls = document.querySelector('.sights-controls');
    sightPrev = document.querySelector('.sight-prev');
    sightNext = document.querySelector('.sight-next');

    // Strictly Passive Listeners for 60+ FPS Scroll & Motion
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', () => {
      updateSightSlider();
      requestTick();
    }, { passive: true });

    window.addEventListener('pointermove', (e) => {
      targetMouseX = e.clientX / window.innerWidth - 0.5;
      targetMouseY = e.clientY / window.innerHeight - 0.5;
      requestTick();
    }, { passive: true });

    if (sightPrev) sightPrev.addEventListener('click', () => moveSightSlider(-1));
    if (sightNext) sightNext.addEventListener('click', () => moveSightSlider(1));

    setupSightSlider();
    bindFloatingActionTray();
    requestTick();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
