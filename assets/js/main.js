// Bracera Beer - JS base (primer prompt)
// Foco: Interacción mínima inicial + preparación para módulos posteriores.

const App = (() => {
  const state = {
    mounted: false,
  cart: [],
  };

  function setYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  function reduceMotionPreference() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function animateHeroOnLoad() {
    if (reduceMotionPreference()) return;
    const hero = document.querySelector('.hero-content');
    if (!hero) return;
    hero.animate([
      { opacity: 0, transform: 'translateY(18px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 900,
      easing: 'cubic-bezier(.25,.6,.25,1)',
      fill: 'forwards'
    });
  }

  function trapTabFocus() {
    // Placeholder: se podrá implementar para modales futuros
  }

  function mount() {
    if (state.mounted) return;
    setYear();
  mountLangSwitcher();
  initI18n();
    animateHeroOnLoad();
    trapTabFocus();
  initSmoothNav();
  initMobileNav();
  initForms();
  initStore();
  initReveal();
  initBirthday();
    initNavOverflow();
  initInstagramBeerFab();
    state.mounted = true;
  }

  document.addEventListener('DOMContentLoaded', mount);

  return { mount };
})();

// --- Crea e inyecta el selector de idioma de forma reutilizable ---
function mountLangSwitcher() {
  // Evita duplicados si ya existe en la página
  if (document.querySelector('[data-lang-switcher]')) return;
  const container = document.querySelector('.header-inner');
  if (!container) return;
  const nav = container.querySelector('nav.main-nav');

  const wrapper = document.createElement('div');
  wrapper.className = 'lang-switcher';
  wrapper.setAttribute('data-lang-switcher', '');
  wrapper.innerHTML = `
    <button class="lang-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="Cambiar país/idioma">
      <span class="flag" aria-hidden="true">CO</span>
      <span class="current" data-lang-current>CO</span>
    </button>
    <ul class="lang-menu" role="listbox" hidden>
      <li role="option" data-lang="es-CO" data-country="CO" aria-selected="true">CO — Colombia (es-CO)</li>
      <li role="option" data-lang="es-MX" data-country="MX" aria-selected="false">MX — México (es-MX)</li>
      <li role="option" data-lang="es-ES" data-country="ES" aria-selected="false">ES — España (es-ES)</li>
      <li role="option" data-lang="en-US" data-country="US" aria-selected="false">US — United States (en-US)</li>
    </ul>
  `;
  // Inserta al final del header para ubicarlo a la derecha y no reducir el ancho del menú
  container.appendChild(wrapper);
}

// --- I18n infra: selector de idioma/país y persistencia (sin traducciones aún) ---
function initI18n() {
  const KEY = 'bracera:lang';
  const DEFAULT = 'es-CO';
  // Cargar preferencia
  let code = DEFAULT;
  try { const saved = localStorage.getItem(KEY); if (saved) code = saved; } catch (_) {}
  applyLang(code);

  const switcher = document.querySelector('[data-lang-switcher]');
  if (!switcher) return;
  const btn = switcher.querySelector('.lang-btn');
  const menu = switcher.querySelector('.lang-menu');
  const label = switcher.querySelector('[data-lang-current]');

  function open() {
    if (!menu || !btn) return;
    menu.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    switcher.classList.add('open');
  }
  function close() {
    if (!menu || !btn) return;
    menu.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    switcher.classList.remove('open');
  }
  function toggle() { (switcher.classList.contains('open') ? close : open)(); }

  btn && btn.addEventListener('click', toggle);
  document.addEventListener('click', (e) => { if (!switcher.contains(e.target)) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  menu?.querySelectorAll('[role="option"]').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang') || DEFAULT;
      const country = opt.getAttribute('data-country') || lang;
      // Persistir
      try { localStorage.setItem(KEY, lang); } catch (_) {}
      // Actualizar selección visual
      menu.querySelectorAll('[role="option"]').forEach(o => o.setAttribute('aria-selected', String(o === opt)));
      if (label) label.textContent = country;
      // Aplicar atributo lang y emitir evento
      applyLang(lang);
      close();
    });
  });
}

function applyLang(langCode) {
  // Atributo html[lang] y data-lang en body para estilos/condicionales futuros
  try { document.documentElement.setAttribute('lang', langCode.startsWith('en') ? 'en' : 'es'); } catch (_) {}
  document.body && document.body.setAttribute('data-lang', langCode);
  // Broadcast para futuros módulos i18n
  try { document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: langCode } })); } catch (_) {}
}

// --- Floating Instagram Beer FAB ---
function initInstagramBeerFab() {
  if (document.querySelector('.beer-fab')) return;
  const a = document.createElement('a');
  a.className = 'beer-fab';
  a.href = 'https://www.instagram.com/bracera_beer/?hl=es-la';
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.setAttribute('aria-label', 'Abrir Instagram de Bracera Beer en una pestaña nueva');
  a.innerHTML = `
    <span class="beer" aria-hidden="true">
      <span class="foam"></span>
      <span class="cup"></span>
      <span class="ig-mark">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
        </svg>
      </span>
    </span>
  `;
  document.body.appendChild(a);
}

// --- Navegación suave ---
function initSmoothNav() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(l => {
    l.addEventListener('click', e => {
      const id = l.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;

      // Offset por header fijo sólo para #inicio (solicitud actual)
      if (id === '#inicio') {
        e.preventDefault();
        const header = document.querySelector('.site-header');
        const offset = (header ? header.offsetHeight : 0) + 6;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        try {
          if (prefersReduced) {
            window.scrollTo(0, y);
          } else {
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        } catch (err) {
          window.scrollTo(0, y);
        }
        return;
      }

      // Resto de anclas: comportamiento actual
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Si la página carga con #inicio en URL, corrige la posición con offset
  if (location.hash === '#inicio') {
    const target = document.getElementById('inicio');
    if (target) {
      setTimeout(() => {
        const header = document.querySelector('.site-header');
        const offset = (header ? header.offsetHeight : 0) + 6;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        try {
          if (prefersReduced) {
            window.scrollTo(0, y);
          } else {
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        } catch (err) {
          window.scrollTo(0, y);
        }
      }, 40);
    }
  }
}

// --- Nav overflow indicators / scroll horizontal ---
function initNavOverflow() {
  const nav = document.querySelector('.main-nav');
  if (!nav) return;
  const list = nav.querySelector('ul');
  if (!list) return;
  function update() {
    const maxScroll = list.scrollWidth - list.clientWidth;
    if (maxScroll <= 0) {
      nav.classList.remove('nav-left','nav-right');
      return;
    }
    const x = list.scrollLeft;
    nav.classList.toggle('nav-left', x > 4);
    nav.classList.toggle('nav-right', x < maxScroll - 4);
  }
  list.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  // Permitir desplazamiento horizontal con rueda vertical en desktop.
  list.addEventListener('wheel', e => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      list.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, { passive: false });
  // Inicial
  update();
}

// --- Formularios (placeholder envío) ---
function initForms() {
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Envío simulado. Integración pendiente.';
        setTimeout(() => note.textContent = '', 4000);
      }
      form.reset();
    });
  });
}

// --- Tienda / Carrito (prototipo) ---
function initStore() {
  const addButtons = document.querySelectorAll('[data-add]');
  const cartList = document.querySelector('[data-cart-items]');
  const cartTotalEl = document.querySelector('[data-cart-total]');
  const checkoutBtn = document.querySelector('[data-checkout]');
  if (!addButtons.length || !cartList || !cartTotalEl) return;

  const cart = [];

  function formatCurrency(v) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(v);
  }

  function render() {
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.qty;
      const li = document.createElement('li');
      li.innerHTML = `<span>${item.name} x${item.qty}</span><button data-remove aria-label="Eliminar">×</button>`;
      const btn = li.querySelector('button');
      btn.addEventListener('click', () => {
        remove(item.sku);
      });
      cartList.appendChild(li);
    });
    cartTotalEl.textContent = formatCurrency(total);
    if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
  }

  function add(product) {
    const existing = cart.find(i => i.sku === product.sku);
    if (existing) existing.qty += 1; else cart.push({ ...product, qty: 1 });
    render();
  }

  function remove(sku) {
    const idx = cart.findIndex(i => i.sku === sku);
    if (idx >= 0) cart.splice(idx, 1);
    render();
  }

  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.store-item');
      if (!parent) return;
      const sku = parent.getAttribute('data-sku');
      const name = parent.querySelector('h3')?.textContent?.trim() || sku;
      const priceEl = parent.querySelector('[data-price]');
      const price = priceEl ? parseInt(priceEl.getAttribute('data-price') || '0', 10) : 0;
      add({ sku, name, price });
    });
  });

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      alert('Checkout simulado. Integración posterior.');
    });
  }
}

// --- Reveal on scroll ---
function initReveal() {
  const els = document.querySelectorAll('[data-animate]');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(e => e.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(e => io.observe(e));
}

// --- Mobile menu toggle ---
function initMobileNav() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const list = document.getElementById('primary-nav');
  if (!header || !toggle || !list) return;
  const close = () => {
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  const open = () => {
    header.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
  };
  const isOpen = () => header.classList.contains('nav-open');

  toggle.addEventListener('click', () => {
    isOpen() ? close() : open();
  });

  // Cerrar al navegar: cualquier enlace dentro del menú
  list.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

// --- Birthday Modal (Founder) ---
function initBirthday() {
  // Lógica mínima: mostrar al cargar y permitir cerrar con botón o clic fuera.
  const overlay = document.querySelector('[data-birthday-overlay]');
  if (!overlay) return;

  // Mostrar solo el 2025-09-09 y solo una vez por usuario (persistente)
  const BDAY_KEY = 'bracera:bday:2025-09-09:shown';

  function isAllowedDay() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const today = `${y}-${m}-${day}`;
    return today === '2025-09-09';
  }

  function hasShown() {
    try {
      if (window.localStorage && localStorage.getItem(BDAY_KEY) === '1') return true;
    } catch (_) { /* noop */ }
    try {
      return document.cookie.split(';').some(c => c.trim().startsWith(`${BDAY_KEY}=1`));
    } catch (_) { return false; }
  }

  function setShown() {
    try { if (window.localStorage) localStorage.setItem(BDAY_KEY, '1'); } catch (_) { /* noop */ }
    try { document.cookie = `${BDAY_KEY}=1; path=/; max-age=315360000; SameSite=Lax`; } catch (_) { /* noop */ }
  }

  if (!isAllowedDay() || hasShown()) {
    return;
  }
  // Marcar como mostrado antes de abrir para evitar parpadeos en navegación entre páginas
  setShown();
  
  openBirthday();

  function openBirthday() {
    if (!overlay.hidden && overlay.classList.contains('show')) return;
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add('show'));
    bindOnce();
    triggerSparks();
  }

  function close() {
    if (overlay.getAttribute('data-closing') === '1') return; // prevenir doble ejecución
    overlay.setAttribute('data-closing','1');
    overlay.classList.remove('show');
    const hide = () => { overlay.hidden = true; overlay.removeAttribute('data-closing'); };
    overlay.addEventListener('transitionend', hide, { once: true });
    setTimeout(hide, 650); // fallback
  // Redundancia segura: marcar como mostrado también al cerrar
  try { if (window.localStorage) localStorage.setItem(BDAY_KEY, '1'); } catch (_) {}
  try { document.cookie = `${BDAY_KEY}=1; path=/; max-age=315360000; SameSite=Lax`; } catch (_) {}
  }

  function bindOnce() {
    if (overlay.dataset.bound) return;
    overlay.dataset.bound = '1';
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    overlay.querySelectorAll('[data-birthday-close]').forEach(btn => btn.addEventListener('click', close));
    // Cerrar con Escape (extra no intrusivo)
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  function triggerSparks() {
    const container = overlay.querySelector('[data-bday-sparks]');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const s = document.createElement('span');
      s.className = 'spark';
      const delay = (Math.random() * 1.6).toFixed(2);
      const left = Math.random() * 100;
      const bottom = Math.random() * 40;
      s.style.left = left + '%';
      s.style.bottom = bottom + 'px';
      s.style.animationDelay = delay + 's';
      s.style.background = Math.random() > .5 ? 'var(--clr-accent)' : 'var(--clr-green-dry)';
      container.appendChild(s);
      setTimeout(() => s.remove(), 3600);
    }
  }
}
