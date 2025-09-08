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
