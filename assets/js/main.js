/* ════════════════════════════════════════════════
   TABS — slide + ARIA keyboard navigation
   ════════════════════════════════════════════════ */
let currentTab = 0;
const tabItems  = Array.from(document.querySelectorAll('.tab-item'));
const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

function switchTab(idx) {
  if (idx === currentTab) return;
  const outgoing = tabPanels[currentTab];
  outgoing.classList.add('exit');
  outgoing.addEventListener('animationend', () => {
    outgoing.classList.remove('active', 'exit');
  }, { once: true });

  tabItems.forEach((t, i) => {
    const active = i === idx;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active);
    t.tabIndex = active ? 0 : -1;
  });

  currentTab = idx;
  setTimeout(() => tabPanels[idx].classList.add('active'), 180);
}
window.switchTab = switchTab;

/* DEV: keyboard navigation for tabs */
tabItems.forEach((tab, idx) => {
  tab.addEventListener('keydown', e => {
    const len = tabItems.length;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (idx + 1) % len;
      switchTab(next);
      tabItems[next].focus();
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (idx - 1 + len) % len;
      switchTab(prev);
      tabItems[prev].focus();
    }
  });
});

/* ════════════════════════════════════════════════
   SCROLL — debounced, nav + scroll indicator hide
   ════════════════════════════════════════════════ */
function debounce(fn, ms) {
  let t; return function(...a) { clearTimeout(t); t = setTimeout(() => fn.apply(this, a), ms); };
}

window.addEventListener('scroll', debounce(() => {
  const nav = document.getElementById('navbar');
  const scrolled = window.scrollY > 40;
  nav.style.padding = scrolled ? '14px 6vw' : '20px 6vw';
  nav.classList.toggle('scrolled', scrolled);
}, 12));

/* ════════════════════════════════════════════════
   REVEALS — IntersectionObserver + data-delay stagger
   ════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    if (el.dataset.delay) el.style.transitionDelay = el.dataset.delay;
    el.classList.add('visible');
    revealObs.unobserve(el);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ════════════════════════════════════════════════
   TEXT SCRAMBLE
   ════════════════════════════════════════════════ */
class ScrambleText {
  constructor(el) {
    this.el    = el;
    this.chars = '!<>-_\\/[]{}=+*^?#@$%&ABCDabcd0123456789';
    this.spans = [];
  }
  init() {
    this.spans = [];
    this._wrap(this.el);
  }
  _wrap(node) {
    Array.from(node.childNodes).forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        [...child.textContent].forEach(ch => {
          if (!ch.trim()) { frag.appendChild(document.createTextNode(ch)); return; }
          const s = document.createElement('span');
          s.className = 'scramble-char scrambling';
          s.dataset.final = ch;
          s.textContent = this._rnd();
          this.spans.push(s);
          frag.appendChild(s);
        });
        child.parentNode.replaceChild(frag, child);
      } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
        this._wrap(child);
      }
    });
  }
  resolve() {
    this.spans.forEach((span, i) => {
      setTimeout(() => {
        const final = span.dataset.final;
        let ticks = 0, max = 5 + Math.floor(Math.random() * 7);
        const iv = setInterval(() => {
          if (ticks++ >= max) { span.textContent = final; span.classList.remove('scrambling'); clearInterval(iv); }
          else span.textContent = this._rnd();
        }, 38);
      }, i * 26 + Math.random() * 18);
    });
  }
  _rnd() { return this.chars[Math.floor(Math.random() * this.chars.length)]; }
}

/* ════════════════════════════════════════════════
   HERO stagger + scroll indicator + scramble init
   ════════════════════════════════════════════════ */
const heroContent = document.querySelector('.hero-content');
const scrollInd   = document.getElementById('scroll-indicator');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let scrambler = null;
if (!reducedMotion) {
  scrambler = new ScrambleText(document.querySelector('.hero-h1'));
  scrambler.init();
}

function triggerHeroStagger() {
  heroContent.classList.add('stagger-go');
  if (scrambler) setTimeout(() => scrambler.resolve(), 820);
  setTimeout(() => { if (scrollInd) scrollInd.classList.add('show'); }, 2200);
}

const heroObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) { triggerHeroStagger(); heroObs.disconnect(); }
}, { threshold: 0.2 });

if (heroContent) {
  heroObs.observe(heroContent);
  requestAnimationFrame(() => {
    if (heroContent.getBoundingClientRect().top < window.innerHeight) triggerHeroStagger();
  });
}

/* ════════════════════════════════════════════════
   COUNT-UP animation (stats)
   ════════════════════════════════════════════════ */
function animateCount(el, target, suffix) {
  const dur = 1400, start = performance.now();
  (function step(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(start);
}
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = parseInt(el.dataset.count, 10), suffix = el.dataset.suffix || '';
    if (!isNaN(target)) animateCount(el, target, suffix);
    countObs.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num[data-count]').forEach(el => countObs.observe(el));

/* ════════════════════════════════════════════════
   DISEÑADOR: Skills filter chips
   ════════════════════════════════════════════════ */
document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-pressed', 'false');
    });
    chip.classList.add('active');
    chip.setAttribute('aria-pressed', 'true');
    const filter = chip.dataset.filter;
    document.querySelectorAll('.skill-card').forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('filtered-out', !match);
    });
  });
});

/* ════════════════════════════════════════════════
   RIPPLE effect
   ════════════════════════════════════════════════ */
function addRipple(e) {
  const btn = e.currentTarget, rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.6;
  const span = document.createElement('span');
  span.className = 'ripple-wave';
  span.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
  btn.appendChild(span);
  span.addEventListener('animationend', () => span.remove());
}
document.querySelectorAll('.btn-main, .form-submit, .nav-cta').forEach(btn => btn.addEventListener('click', addRipple));

/* ════════════════════════════════════════════════
   DEV: Form — validación real + loading state
   ════════════════════════════════════════════════ */
function validateField(input, errId, checkFn) {
  const err = document.getElementById(errId);
  const ok  = checkFn(input.value.trim());
  input.classList.toggle('invalid', !ok);
  input.setAttribute('aria-invalid', String(!ok));
  err.classList.toggle('show', !ok);
  return ok;
}

function setFormStatus(type, message) {
  const status = document.getElementById('form-status');
  status.className = `form-status ${type || ''}`.trim();
  status.textContent = message || '';
}

function handleForm(e) {
  e.preventDefault();
  const form   = e.target;
  const nombre  = form.querySelector('#f-nombre');
  const email   = form.querySelector('#f-email');
  const mensaje = form.querySelector('#f-mensaje');
  const gotcha  = form.querySelector('#f-gotcha');
  setFormStatus('', '');

  if (gotcha && gotcha.value.trim()) {
    return;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const v1 = validateField(nombre,  'err-nombre',  v => v.length >= 2);
  const v2 = validateField(email,   'err-email',   v => emailRe.test(v));
  const v3 = validateField(mensaje, 'err-mensaje', v => v.length >= 10);
  if (!v1 || !v2 || !v3) {
    setFormStatus('error', 'Revisá los campos marcados antes de enviar.');
    return;
  }

  const btn = document.getElementById('submit-btn');
  btn.disabled    = true;
  btn.textContent = 'Enviando...';
  setFormStatus('', 'Enviando mensaje...');

  fetch('https://formspree.io/f/mbdwbgag', {
    method:  'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre:  nombre.value.trim(),
      email:   email.value.trim(),
      mensaje: mensaje.value.trim(),
      _gotcha: gotcha ? gotcha.value.trim() : ''
    })
  })
  .then(res => {
    if (res.ok) {
      btn.textContent      = '✓ Mensaje enviado';
      btn.style.background = 'var(--accent2)';
      setFormStatus('success', 'Mensaje enviado. Te vamos a responder pronto.');
      setTimeout(() => {
        btn.textContent      = 'Enviar mensaje →';
        btn.style.background = '';
        btn.disabled         = false;
        form.reset();
        setFormStatus('', '');
        [nombre, email, mensaje].forEach(f => {
          f.classList.remove('invalid');
          f.setAttribute('aria-invalid', 'false');
        });
      }, 3000);
    } else {
      btn.textContent = 'Error al enviar — reintentá';
      btn.style.background = '#c0392b';
      setFormStatus('error', 'No pudimos enviar el mensaje. Probá de nuevo en unos segundos.');
      setTimeout(() => { btn.textContent = 'Enviar mensaje →'; btn.style.background = ''; btn.disabled = false; }, 3500);
    }
  })
  .catch(() => {
    btn.textContent = 'Sin conexión — reintentá';
    btn.style.background = '#c0392b';
    setFormStatus('error', 'No hay conexión o el servicio no respondió. Probá de nuevo.');
    setTimeout(() => { btn.textContent = 'Enviar mensaje →'; btn.style.background = ''; btn.disabled = false; }, 3500);
  });
}
window.handleForm = handleForm;

/* ════════════════════════════════════════════════
   DISEÑADOR: Mobile overlay menu
   ════════════════════════════════════════════════ */
let menuOpen = false;
function syncMobileMenuA11y() {
  const overlay = document.getElementById('mobile-overlay');
  overlay.querySelectorAll('a').forEach(link => {
    link.tabIndex = menuOpen ? 0 : -1;
  });
}
function setMenuState(open, restoreFocus = true) {
  menuOpen = open;
  const overlay = document.getElementById('mobile-overlay');
  const btn     = document.getElementById('menu-btn');
  overlay.classList.toggle('open', menuOpen);
  btn.classList.toggle('open', menuOpen);
  btn.setAttribute('aria-expanded', menuOpen);
  btn.setAttribute('aria-label', menuOpen ? 'Cerrar menú' : 'Abrir menú');
  overlay.setAttribute('aria-hidden', !menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
  syncMobileMenuA11y();
  if (menuOpen) overlay.querySelector('a')?.focus();
  else if (restoreFocus) btn.focus();
}
function toggleMenu() {
  setMenuState(!menuOpen);
}
window.toggleMenu = toggleMenu;

syncMobileMenuA11y();

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuOpen) setMenuState(false);
});

/* Close overlay on resize if desktop */
window.addEventListener('resize', debounce(() => {
  if (window.innerWidth > 900 && menuOpen) setMenuState(false, false);
}, 150));

/* ════════════════════════════════════════════════
   CUSTOM CURSOR
   ════════════════════════════════════════════════ */
(function() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot  = document.createElement('div'); dot.className  = 'cursor-dot';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.append(dot, ring);
  document.body.classList.add('has-custom-cursor');

  let mx = -200, my = -200, rx = -200, ry = -200;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });
  document.addEventListener('mouseleave', () => document.body.classList.add('cursor-hidden'));
  document.addEventListener('mouseenter', () => document.body.classList.remove('cursor-hidden'));
  document.addEventListener('mousedown',  () => document.body.classList.add('cursor-clicking'));
  document.addEventListener('mouseup',    () => document.body.classList.remove('cursor-clicking'));

  /* smooth ring with lag */
  (function loop() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  /* hover state on interactive elements */
  const sel = 'a, button, .skill-card, .servicio-card, .tab-item, .filter-chip, .value-item, .contact-item, .nav-logo';
  document.querySelectorAll(sel).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();

/* ════════════════════════════════════════════════
   3D TILT on cards
   ════════════════════════════════════════════════ */
(function() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function initTilt(selector, maxDeg, liftPx) {
    document.querySelectorAll(selector).forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'border-color 0.3s, background 0.3s, box-shadow 0.3s, transform 0.1s';
      });
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform =
          `perspective(700px) rotateX(${-y * maxDeg}deg) rotateY(${x * maxDeg}deg) translateY(-${liftPx}px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transition = 'border-color 0.3s, background 0.3s, box-shadow 0.3s, transform 0.55s ease';
        card.style.transform  = '';
      });
    });
  }

  initTilt('.servicio-card', 8, 8);
  initTilt('.skill-card',    6, 6);
  initTilt('.value-item',    4, 3);
})();

/* ════════════════════════════════════════════════
   AURORA — activar con fade-in al cargar
   ════════════════════════════════════════════════ */
requestAnimationFrame(() => {
  document.querySelectorAll('.aurora-blob').forEach((b, i) => {
    setTimeout(() => b.classList.add('show'), i * 400);
  });
});

/* ════════════════════════════════════════════════
   WEBMASTER: Año dinámico en footer
   ════════════════════════════════════════════════ */
document.getElementById('footer-copy').textContent =
  `© ${new Date().getFullYear()} NexoLT — Analistas en Sistemas`;
