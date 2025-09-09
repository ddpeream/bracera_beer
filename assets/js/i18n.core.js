// I18N Core: mounting switcher, persistence, applyLang and header/footer translation

function translateHeaderFooter(langCode) {
  const t = (typeof I18N_STRINGS !== 'undefined' && I18N_STRINGS[langCode]) || I18N_STRINGS['es-CO'];
  const emblem = document.querySelector('.brand-emblem');
  if (emblem) emblem.alt = t.brand_alt;
  const mark = document.querySelector('.brand-mark');
  if (mark) mark.textContent = t.brand_mark;
  const name = document.querySelector('.brand-name');
  if (name) name.textContent = t.brand_name;
  const navMap = {
    'index.html': t.nav.home,
    'quienes.html': t.nav.about,
    'fundador.html': t.nav.founder,
    'productos.html': t.nav.products,
    'proceso.html': t.nav.process,
    'puntos-venta.html': t.nav.outlets,
    'alianzas.html': t.nav.alliances,
    'eventos.html': t.nav.events,
    'blog.html': t.nav.blog,
    'tienda.html': t.nav.store,
    'contacto.html': t.nav.contact,
  };
  document.querySelectorAll('nav.main-nav a[href]').forEach(a => {
    const href = (a.getAttribute('href') || '').split('#')[0].split('?')[0];
    const label = navMap[href];
    if (label) a.textContent = label;
  });
  const fb = document.querySelector('.footer-brand');
  if (fb) fb.textContent = t.footer_brand;
  const fm = document.querySelector('.footer-meta');
  if (fm) {
    const y = new Date().getFullYear();
    fm.textContent = `© ${y} ${t.footer_brand}. ${t.footer_rights}`;
  }
}

function translateHome(langCode) {
  const dict = (typeof I18N_STRINGS !== 'undefined' && I18N_STRINGS[langCode]) || I18N_STRINGS['es-CO'];
  if (!dict || !dict.home) return;
  const hero = document.querySelector('.hero');
  if (!hero) return; // solo en la vista de inicio
  const title = hero.querySelector('.hero-title');
  const lead = hero.querySelector('.hero-lead');
  const ctas = hero.querySelectorAll('.hero-actions .btn');
  if (title) title.textContent = dict.home.hero_title;
  if (lead) lead.textContent = dict.home.hero_lead;
  if (ctas && ctas.length >= 2) {
    const buy = ctas[0];
    const partner = ctas[1];
    buy && (buy.textContent = dict.home.cta_buy);
    partner && (partner.textContent = dict.home.cta_partner);
  }
}

function translateAbout(langCode) {
  const dict = (typeof I18N_STRINGS !== 'undefined' && I18N_STRINGS[langCode]) || I18N_STRINGS['es-CO'];
  if (!dict || !dict.about) return;
  const section = document.querySelector('[data-section="quienes-somos"]');
  if (!section) return; // solo en quienes.html
  // Titulares y copys principales
  section.querySelector('h2') && (section.querySelector('h2').textContent = dict.about.title);
  section.querySelector('.subhead') && (section.querySelector('.subhead').textContent = dict.about.subhead);
  const ps = section.querySelectorAll('.text-col p');
  if (ps && ps.length) {
    // p[0] es el primer párrafo normal
    ps[0] && (ps[0].textContent = dict.about.p1);
    // buscar .highlight-phrase
    const hi = section.querySelector('.highlight-phrase');
    hi && (hi.textContent = dict.about.highlight);
    // el siguiente párrafo normal
    // encontrar todos los p dentro de .text-col excepto .highlight-phrase
    const normals = Array.from(section.querySelectorAll('.text-col p:not(.highlight-phrase)'));
    if (normals[1]) normals[1].textContent = dict.about.p2;
  }
  // Misión / Visión
  const mv = section.querySelector('.mission-vision');
  if (mv) {
    const h4s = mv.querySelectorAll('h4');
    const paras = mv.querySelectorAll('p');
    h4s[0] && (h4s[0].textContent = dict.about.mission_title);
    paras[0] && (paras[0].textContent = dict.about.mission_text);
    h4s[1] && (h4s[1].textContent = dict.about.vision_title);
    paras[1] && (paras[1].textContent = dict.about.vision_text);
  }
  // Figcaption foto y nota de equipo
  const figcap = section.querySelector('figcaption');
  figcap && (figcap.textContent = dict.about.figcaption);
  const teamNote = section.querySelector('.team-snippet .small-note');
  teamNote && (teamNote.textContent = dict.about.team_note);
}

function translateFounder(langCode) {
  const dict = (typeof I18N_STRINGS !== 'undefined' && I18N_STRINGS[langCode]) || I18N_STRINGS['es-CO'];
  if (!dict || !dict.founder) return;
  const section = document.querySelector('[data-section="fundador"]');
  if (!section) return; // solo en fundador.html
  // Foto aria/figcaption
  const photo = section.querySelector('.founder-photo');
  if (photo) photo.setAttribute('aria-label', dict.founder.photo_aria);
  const figcap = section.querySelector('figcaption');
  if (figcap) figcap.textContent = dict.founder.figcaption;
  // Titulares
  const h2 = section.querySelector('.founder-title');
  if (h2) h2.textContent = dict.founder.title;
  const claim = section.querySelector('.founder-claim');
  if (claim) claim.textContent = dict.founder.claim;
  // Cuerpo
  const ps = section.querySelectorAll('.founder-body p');
  if (ps && ps.length) {
    ps[0] && (ps[0].textContent = dict.founder.p1);
    ps[1] && (ps[1].textContent = dict.founder.p2);
    // .founder-highlight
    const hi = section.querySelector('.founder-highlight');
    hi && (hi.textContent = dict.founder.highlight);
  }
  // Icon labels
  const labels = section.querySelectorAll('.founder-icons .label');
  if (labels && labels.length >= 3) {
    labels[0].textContent = dict.founder.icon_tech;
    labels[1].textContent = dict.founder.icon_global;
    labels[2].textContent = dict.founder.icon_craft;
  }
  // CTA
  const cta = section.querySelector('.founder-cta .btn');
  if (cta) cta.textContent = dict.founder.cta;
}

function mountLangSwitcher() {
  if (document.querySelector('[data-lang-switcher]')) return;
  const container = document.querySelector('.header-inner');
  if (!container) return;
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
      <li role="option" data-lang="en-US" data-country="US" aria-selected="false">US — United States (en-US)</li>
      <li role="option" data-lang="fr-FR" data-country="FR" aria-selected="false">FR — France (fr-FR)</li>
      <li role="option" data-lang="cs-CZ" data-country="CZ" aria-selected="false">CZ — Czechia (cs-CZ)</li>
      <li role="option" data-lang="it-IT" data-country="IT" aria-selected="false">IT — Italy (it-IT)</li>
      <li role="option" data-lang="de-DE" data-country="DE" aria-selected="false">DE — Germany (de-DE)</li>
      <li role="option" data-lang="zh-CN" data-country="CN" aria-selected="false">CN — China (zh-CN)</li>
    </ul>
  `;
  container.appendChild(wrapper);
}

function initI18n() {
  const KEY = 'bracera:lang';
  const DEFAULT = 'es-CO';
  let code = DEFAULT;
  try { const saved = localStorage.getItem(KEY); if (saved) code = saved; } catch (_) {}
  applyLang(code);

  const switcher = document.querySelector('[data-lang-switcher]');
  if (!switcher) return;
  const btn = switcher.querySelector('.lang-btn');
  const menu = switcher.querySelector('.lang-menu');
  const label = switcher.querySelector('[data-lang-current]');

  const currentOpt = menu?.querySelector(`[data-lang="${code}"]`);
  if (currentOpt) {
    menu.querySelectorAll('[role="option"]').forEach(o => o.setAttribute('aria-selected', String(o === currentOpt)));
    const country = currentOpt.getAttribute('data-country') || 'CO';
    if (label) label.textContent = country;
  }

  function open() { if (!menu || !btn) return; menu.hidden = false; btn.setAttribute('aria-expanded','true'); switcher.classList.add('open'); }
  function close() { if (!menu || !btn) return; menu.hidden = true;  btn.setAttribute('aria-expanded','false'); switcher.classList.remove('open'); }
  function toggle() { (switcher.classList.contains('open') ? close : open)(); }

  btn && btn.addEventListener('click', toggle);
  document.addEventListener('click', (e) => { if (!switcher.contains(e.target)) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  menu?.querySelectorAll('[role="option"]').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang') || DEFAULT;
      const country = opt.getAttribute('data-country') || lang;
      try { localStorage.setItem(KEY, lang); } catch (_) {}
      menu.querySelectorAll('[role="option"]').forEach(o => o.setAttribute('aria-selected', String(o === opt)));
      if (label) label.textContent = country;
      applyLang(lang);
      close();
    });
  });
}

function applyLang(langCode) {
  try {
    const short = (langCode || 'es-CO').split('-')[0];
    document.documentElement.setAttribute('lang', short);
  } catch (_) {}
  document.body && document.body.setAttribute('data-lang', langCode);
  translateHeaderFooter(langCode);
  translateHome(langCode);
  translateAbout(langCode);
  translateFounder(langCode);
  try { document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: langCode } })); } catch (_) {}
}
