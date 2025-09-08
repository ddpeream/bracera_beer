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
    animateHeroOnLoad();
    trapTabFocus();
  initSmoothNav();
  initForms();
  initStore();
  initReveal();
  initBirthday();
    initNavOverflow();
    state.mounted = true;
  }

  document.addEventListener('DOMContentLoaded', mount);

  return { mount };
})();

// --- Navegación suave ---
function initSmoothNav() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(l => {
    l.addEventListener('click', e => {
      const id = l.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
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

// --- Birthday Modal (Founder) ---
function initBirthday() {
  const overlay = document.querySelector('[data-birthday-overlay]');
  if (!overlay) return;
  const today = new Date();
  const month = today.getMonth(); // 0-based
  const date = today.getDate();
  const params = new URLSearchParams(location.search);
  const force = params.has('showBirthday');
  const debugAlways = params.has('debugBirthday'); // muestra incluso si se descartó y fuera de fecha
  // Mostrar solo 8 Sept (mes 8 indexado? Sept=8, porque Jan=0) salvo modo forzado.
  if (!force && !debugAlways) {
    if (!(month === 8 && date === 8)) {
      console.debug('[BirthdayModal] No es 8 de Septiembre. month=%s date=%s (0-based month)', month, date);
      return;
    }
  } else {
    console.debug('[BirthdayModal] Modo forzado/debug activo (?showBirthday|?debugBirthday). Ignorando fecha y estado de descarte.');
  }
  const storageKey = `bday-dismiss-${today.getFullYear()}`;
  if (!force && !debugAlways && localStorage.getItem(storageKey)) {
    console.debug('[BirthdayModal] Ya se había descartado este año (%s). Usar ?showBirthday para forzar.', storageKey);
    return;
  }
  if (force || debugAlways) {
    // Por si existe una marca previa la limpiamos para ver el modal de prueba.
    localStorage.removeItem(storageKey);
  }
  openBirthday();

  function openBirthday() {
    if (!overlay.hidden && overlay.classList.contains('show')) return;
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add('show'));
    triggerSparks();
    bindOnce();
  }

  function close() {
    if (overlay.getAttribute('data-closing') === '1') return; // prevenir doble ejecución
    overlay.setAttribute('data-closing','1');
    overlay.classList.remove('show');
    const hide = () => { overlay.hidden = true; overlay.removeAttribute('data-closing'); };
    overlay.addEventListener('transitionend', hide, { once: true });
    setTimeout(hide, 650); // fallback
    if (!debugAlways) localStorage.setItem(storageKey, '1');
    console.debug('[BirthdayModal] Cerrado.');
  }

  function bindOnce() {
    if (overlay.dataset.bound) return;
    overlay.dataset.bound = '1';
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    overlay.querySelectorAll('[data-birthday-close]').forEach(btn => btn.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  // Exponer helper de debug global
  window.showBirthdayTest = () => {
    console.debug('[BirthdayModal] Reapertura manual via showBirthdayTest().');
    localStorage.removeItem(storageKey);
    openBirthday();
  };

  function triggerSparks() {
    const container = overlay.querySelector('[data-bday-sparks]');
    if (!container) return;
    for (let i = 0; i < 28; i++) {
      const s = document.createElement('span');
      s.className = 'spark';
      const delay = (Math.random() * 2).toFixed(2);
      const left = Math.random() * 100;
      const bottom = Math.random() * 40; // start lower half
      s.style.left = left + '%';
      s.style.bottom = bottom + 'px';
      s.style.animationDelay = delay + 's';
      s.style.background = Math.random() > .5 ? 'var(--clr-accent)' : 'var(--clr-green-dry)';
      container.appendChild(s);
      setTimeout(() => s.remove(), 4000);
    }
  }
}
