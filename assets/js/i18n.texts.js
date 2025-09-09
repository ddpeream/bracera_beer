// I18N Texts: Header & Footer (+ Inicio hero)
// Exposes global const I18N_STRINGS
const I18N_STRINGS = {
  'es-CO': {
    brand_alt: 'Cerveza Bracera',
    brand_mark: 'BR',
    brand_name: 'Bracera Beer',
    nav: {
      home: 'Inicio', about: 'Quiénes', founder: 'Fundador', products: 'Productos', process: 'Proceso',
      outlets: 'Puntos de venta', alliances: 'Alianzas', events: 'Eventos', blog: 'Blog', store: 'Tienda', contact: 'Contacto'
    },
    footer_brand: 'Bracera Beer',
    footer_rights: 'Todos los derechos reservados.',
    home: {
      hero_title: 'Cerveza artesanal con carácter',
      hero_lead: 'Materia prima seleccionada, procesos limpios y un compromiso auténtico con el sabor.',
      cta_buy: 'Compra ahora',
      cta_partner: 'Haz alianza'
    },
  about: {
      title: 'Quiénes Somos',
      subhead: 'Origen & Filosofía',
      p1: 'Bracera Beer nace de la búsqueda por cervezas equilibradas, honestas y sin artificios. Apostamos por un lenguaje visual sobrio y material: metal, madera, granos y fuego.',
      highlight: 'MENOS ADORNO, MÁS ESENCIA.',
      p2: 'Cada lote es una iteración deliberada: control de temperatura, selección de maltas, curvas de lupulado y reposo justo. Nada de tendencias vacías: solo lo que aporta al perfil final.',
      mission_title: 'Misión',
      mission_text: 'Crear cerveza honesta que respete el oficio y eduque el paladar.',
      vision_title: 'Visión',
      vision_text: 'Ser referente de calidad independiente en el circuito cervecero local.',
      figcaption: 'Maltas base y especiales listas para macerar.',
      team_note: 'Equipo apasionado detrás de cada lote.'
    },
    process: {
      title: 'Proceso de Elaboración',
      lead: 'Estructurado, controlado y deliberado. Sin atajos.',
      steps: [
        { name: 'Molienda', desc: 'Ajuste de molienda para extracción eficiente sin arrastre de cáscaras.' },
        { name: 'Macerado', desc: 'Curvas de temperatura diseñadas para perfil de cuerpo objetivo.' },
        { name: 'Hervor & Lupulado', desc: 'Dosis calculadas según alfa ácidos y volatilidad aromática.' },
        { name: 'Fermentación', desc: 'Control estricto de levadura, temperatura y densidades.' },
        { name: 'Maduración', desc: 'Acondicionamiento para pulir aristas y estabilizar el perfil.' }
      ]
    },
    outlets: {
      title: 'Puntos de Venta',
      lead: 'Encuentra dónde probar Bracera.',
      map_placeholder: 'Mapa Interactivo (Próximo)',
      map_aria: 'Mapa puntos de venta',
      list: [
        { name: 'Tap Local Centro', address: 'Cra 00 #00 - Centro' },
        { name: 'Gastro Pub Norte', address: 'Calle 00 #00 - Norte' },
        { name: 'Mercado Artesanal', address: 'Av. Industrial 123' }
      ],
      factory_title: 'Fábrica',
      factory_address: 'Parque Industrial Lote 7, Ciudad. Horarios visitas bajo reserva.'
    },
    alliances: {
      title: 'Alianzas & Distribución',
      lead: 'Construimos relaciones sostenibles con canales responsables.',
      copy: 'Buscamos socios que valoren producto consistente, trazabilidad y suministro responsable. Ofrecemos soporte de rotación, material técnico y capacitación en servicio.',
      bullets: ['Logística refrigerada', 'Lotes escalables', 'Material educativo', 'Asesoría en rotación'],
      form_aria: 'Formulario de alianzas',
      form_labels: {
        name: 'Nombre*',
        email: 'Email*',
        company: 'Empresa',
        message: 'Mensaje*',
        submit: 'Enviar'
      }
    },
    events: {
      title: 'Eventos & Comunidad',
      lead: 'Participamos en ferias, catas y colaboraciones.',
      items: [
        { title: 'Cata Técnica', desc: 'Sesión guiada sobre perfiles sensoriales.', date: 'Oct 12, 2025' },
        { title: 'Feria Artesanal', desc: 'Stand colaborativo con productores locales.', date: 'Nov 5, 2025' },
        { title: 'Colaboración Invierno', desc: 'Batch limitado con especias de temporada.', date: 'Dic 2025' }
      ]
    },
    blog: {
      title: 'Blog',
      lead: 'Cultura cervecera, técnica y novedades.',
      posts: [
        { title: '¿Por qué controlar la rampa de macerado?', excerpt: 'Impacto en cuerpo, atenuación y perfil fermentable...' },
        { title: 'Oxigenación: aliado y enemigo', excerpt: 'Beneficios en post-enfriado y riesgos en envasado...' },
        { title: 'Guía sensorial básica', excerpt: 'Cómo entrenar percepción de amargor y esterificación...' }
      ]
    },
    store: {
      title: 'Tienda Online',
      lead: 'Compra directa desde fábrica.',
      products: [
        { name: 'IPA Resina 355ml' },
        { name: 'Stout Fuego 473ml' },
        { name: 'Combo Degustación (6)' }
      ],
      add_label: 'Agregar',
      cart_aria: 'Carrito',
      cart_title: 'Carrito',
      total_label: 'Total: ',
      checkout: 'Checkout',
      cart_note: 'Funcionalidad completa en etapa posterior.'
    },
    contact: {
      title: 'Contacto',
      list_labels: { email: 'Email:', whatsapp: 'WhatsApp:', social: 'Redes:' },
      list_values: { email: 'contacto@bracerabeer.test', whatsapp: '+57 000 000 0000', social: 'IG / FB (Próximo)' },
      form_aria: 'Formulario de contacto',
      form_labels: { name: 'Nombre*', email: 'Email*', message: 'Mensaje*', submit: 'Enviar' }
    },
    founder: {
      title: 'De Puerto Salgar al Mundo',
      claim: 'Un emprendedor cosmopolita con raíces locales',
      p1: 'Esteban Beltrán Beltrán es el creador de Bracera Beer, un joven originario de Puerto Salgar, Cundinamarca, que decidió ir más allá de lo establecido en su pueblo natal. Ingeniero Químico y estudiante de maestría en Economía Circular, Esteban transformó su pasión por la cerveza artesanal en un proyecto que combina innovación, tradición y visión global.',
      p2: 'Su camino lo llevó a recorrer ciudades y países —desde Manizales hasta España, Finlandia y la República Checa— experiencias que lo convirtieron en un ciudadano del mundo sin perder la esencia de sus raíces. Hoy, Esteban representa a una nueva generación de emprendedores colombianos: jóvenes cosmopolitas que, partiendo de lo local, buscan impactar lo global.',
      highlight: 'Esteban Beltrán Beltrán, Ingeniero Químico y Máster en Economía Circular, es el visionario detrás de Bracera Beer. Nacido en Puerto Salgar, su trayectoria académica y profesional lo llevó a recorrer Europa y América, consolidando una visión cosmopolita que combina innovación global con raíces locales. Su liderazgo refleja la nueva generación de emprendedores colombianos: jóvenes capaces de transformar lo artesanal en una marca con proyección internacional.',
      icon_tech: 'Formación Técnica',
      icon_global: 'Visión Global',
      icon_craft: 'Cerveza Artesanal',
      cta: 'Conoce más sobre la historia',
      photo_aria: 'Retrato de Esteban Beltrán Beltrán',
      figcaption: 'Esteban Beltrán Beltrán - Fundador de Bracera Beer'
    }
  },
  'en-US': {
    brand_alt: 'Bracera Beer',
    brand_mark: 'BR',
    brand_name: 'Bracera Beer',
    nav: {
      home: 'Home', about: 'About', founder: 'Founder', products: 'Products', process: 'Process',
      outlets: 'Points of Sale', alliances: 'Alliances', events: 'Events', blog: 'Blog', store: 'Store', contact: 'Contact'
    },
    footer_brand: 'Bracera Beer',
    footer_rights: 'All rights reserved.',
    home: {
      hero_title: 'Craft beer with character',
      hero_lead: 'Selected raw materials, clean processes, and an authentic commitment to flavor.',
      cta_buy: 'Buy now',
      cta_partner: 'Partner'
    },
  about: {
      title: 'Who We Are',
      subhead: 'Origin & Philosophy',
      p1: 'Bracera Beer is born from the pursuit of balanced, honest beers without artifices. We bet on a sober, material visual language: metal, wood, grain and fire.',
      highlight: 'LESS ORNAMENT, MORE ESSENCE.',
      p2: 'Each batch is a deliberate iteration: temperature control, malt selection, hopping curves and just the right rest. No empty trends—only what adds to the final profile.',
      mission_title: 'Mission',
      mission_text: 'Create honest beer that respects the craft and educates the palate.',
      vision_title: 'Vision',
      vision_text: 'Become an independent quality benchmark in the local beer circuit.',
      figcaption: 'Base and specialty malts ready for mashing.',
      team_note: 'A passionate team behind every batch.'
    },
    process: {
      title: 'Brewing Process',
      lead: 'Structured, controlled, and deliberate. No shortcuts.',
      steps: [
        { name: 'Milling', desc: 'Grind set for efficient extraction without husk carryover.' },
        { name: 'Mashing', desc: 'Temperature curves designed for the target body profile.' },
        { name: 'Boil & Hopping', desc: 'Doses calculated based on alpha acids and aroma volatility.' },
        { name: 'Fermentation', desc: 'Strict control of yeast, temperature, and gravities.' },
        { name: 'Maturation', desc: 'Conditioning to smooth edges and stabilize the profile.' }
      ]
    },
    outlets: {
      title: 'Points of Sale',
      lead: 'Find where to taste Bracera.',
      map_placeholder: 'Interactive Map (Coming Soon)',
      map_aria: 'Outlets map',
      list: [
        { name: 'Tap Local Center', address: 'Cra 00 #00 - Center' },
        { name: 'Gastro Pub North', address: 'Calle 00 #00 - North' },
        { name: 'Artisanal Market', address: 'Av. Industrial 123' }
      ],
      factory_title: 'Brewery',
      factory_address: 'Industrial Park Lot 7, City. Visits by reservation.'
    },
    alliances: {
      title: 'Partnerships & Distribution',
      lead: 'We build sustainable relationships with responsible channels.',
      copy: 'We look for partners who value consistent product, traceability, and responsible supply. We provide rotation support, technical materials, and service training.',
      bullets: ['Refrigerated logistics', 'Scalable batches', 'Educational materials', 'Rotation advisory'],
      form_aria: 'Partnership form',
      form_labels: {
        name: 'Name*',
        email: 'Email*',
        company: 'Company',
        message: 'Message*',
        submit: 'Send'
      }
    },
    events: {
      title: 'Events & Community',
      lead: 'We take part in fairs, tastings, and collaborations.',
      items: [
        { title: 'Technical Tasting', desc: 'Guided session on sensory profiles.', date: 'Oct 12, 2025' },
        { title: 'Artisan Fair', desc: 'Collaborative stand with local producers.', date: 'Nov 5, 2025' },
        { title: 'Winter Collaboration', desc: 'Limited batch with seasonal spices.', date: 'Dec 2025' }
      ]
    },
    blog: {
      title: 'Blog',
      lead: 'Beer culture, technique, and updates.',
      posts: [
        { title: 'Why control the mash ramp?', excerpt: 'Impact on body, attenuation, and fermentable profile...' },
        { title: 'Oxygenation: friend and foe', excerpt: 'Benefits post-chilling and risks during packaging...' },
        { title: 'Basic sensory guide', excerpt: 'Training perception of bitterness and esterification...' }
      ]
    },
    store: {
      title: 'Online Store',
      lead: 'Direct purchase from the brewery.',
      products: [
        { name: 'Resin IPA 355ml' },
        { name: 'Fire Stout 473ml' },
        { name: 'Tasting Combo (6)' }
      ],
      add_label: 'Add',
      cart_aria: 'Cart',
      cart_title: 'Cart',
      total_label: 'Total: ',
      checkout: 'Checkout',
      cart_note: 'Full functionality coming later.'
    },
    contact: {
      title: 'Contact',
      list_labels: { email: 'Email:', whatsapp: 'WhatsApp:', social: 'Social:' },
      list_values: { email: 'contacto@bracerabeer.test', whatsapp: '+57 000 000 0000', social: 'IG / FB (Coming soon)' },
      form_aria: 'Contact form',
      form_labels: { name: 'Name*', email: 'Email*', message: 'Message*', submit: 'Send' }
    },
    founder: {
      title: 'From Puerto Salgar to the World',
      claim: 'A cosmopolitan entrepreneur with local roots',
      p1: 'Esteban Beltrán Beltrán is the creator of Bracera Beer, a young man from Puerto Salgar, Cundinamarca, who decided to go beyond what was established in his hometown. A Chemical Engineer and master’s student in Circular Economy, Esteban turned his passion for craft beer into a project that blends innovation, tradition, and a global outlook.',
      p2: 'His path led him across cities and countries—from Manizales to Spain, Finland, and the Czech Republic—experiences that made him a citizen of the world without losing the essence of his roots. Today, Esteban represents a new generation of Colombian entrepreneurs: cosmopolitan youth who, starting locally, seek to make a global impact.',
      highlight: 'Esteban Beltrán Beltrán, Chemical Engineer and Master in Circular Economy, is the visionary behind Bracera Beer. Born in Puerto Salgar, his academic and professional journey took him across Europe and the Americas, shaping a cosmopolitan vision that combines global innovation with local roots. His leadership reflects a new generation of Colombian entrepreneurs: young people capable of transforming craftsmanship into a brand with international projection.',
      icon_tech: 'Technical Training',
      icon_global: 'Global Vision',
      icon_craft: 'Craft Beer',
      cta: 'Learn more about the story',
      photo_aria: 'Portrait of Esteban Beltrán Beltrán',
      figcaption: 'Esteban Beltrán Beltrán — Founder of Bracera Beer'
    }
  },
  'fr-FR': {
    brand_alt: 'Bière Bracera',
    brand_mark: 'BR',
    brand_name: 'Bracera Beer',
    nav: {
      home: 'Accueil', about: 'Qui sommes-nous', founder: 'Fondateur', products: 'Produits', process: 'Processus',
      outlets: 'Points de vente', alliances: 'Partenariats', events: 'Événements', blog: 'Blog', store: 'Boutique', contact: 'Contact'
    },
    footer_brand: 'Bracera Beer',
    footer_rights: 'Tous droits réservés.',
    home: {
      hero_title: 'Bière artisanale de caractère',
      hero_lead: 'Matières premières sélectionnées, processus propres et engagement authentique envers la saveur.',
      cta_buy: 'Acheter maintenant',
      cta_partner: 'Devenir partenaire'
    },
  about: {
      title: 'Qui sommes-nous',
      subhead: 'Origine & Philosophie',
      p1: 'Bracera Beer naît de la recherche de bières équilibrées, honnêtes et sans artifices. Nous misons sur un langage visuel sobre et matériel : métal, bois, grains et feu.',
      highlight: 'MOINS D’ORNEMENT, PLUS D’ESSENCE.',
      p2: 'Chaque brassin est une itération délibérée : contrôle des températures, sélection des malts, courbes de houblonnage et repos juste. Pas d’effets de mode vides : seulement ce qui sert le profil final.',
      mission_title: 'Mission',
      mission_text: 'Créer une bière honnête qui respecte le métier et éduque le palais.',
      vision_title: 'Vision',
      vision_text: 'Devenir une référence de qualité indépendante dans le circuit brassicole local.',
      figcaption: 'Malts de base et spéciaux prêts pour l’empâtage.',
      team_note: 'Une équipe passionnée derrière chaque brassin.'
    },
    process: {
      title: 'Processus de brassage',
      lead: 'Structuré, maîtrisé et délibéré. Sans raccourcis.',
      steps: [
        { name: 'Mouture', desc: 'Réglage pour une extraction efficace sans entraînement des enveloppes.' },
        { name: 'Empâtage', desc: 'Courbes de température conçues pour le profil de corps visé.' },
        { name: 'Ébullition & Houblonnage', desc: 'Dosages calculés selon les acides alpha et la volatilité aromatique.' },
        { name: 'Fermentation', desc: 'Contrôle strict des levures, de la température et des densités.' },
        { name: 'Maturation', desc: 'Conditionnement pour polir les angles et stabiliser le profil.' }
      ]
    },
    outlets: {
      title: 'Points de vente',
      lead: 'Trouvez où déguster Bracera.',
      map_placeholder: 'Carte interactive (à venir)',
      map_aria: 'Carte des points de vente',
      list: [
        { name: 'Tap Local Centre', address: 'Cra 00 #00 - Centre' },
        { name: 'Gastro Pub Nord', address: 'Calle 00 #00 - Nord' },
        { name: 'Marché Artisanal', address: 'Av. Industrial 123' }
      ],
      factory_title: 'Brasserie',
      factory_address: 'Parc Industriel Lot 7, Ville. Visites sur réservation.'
    },
    alliances: {
      title: 'Partenariats & Distribution',
      lead: 'Nous construisons des relations durables avec des canaux responsables.',
      copy: 'Nous recherchons des partenaires qui valorisent la constance du produit, la traçabilité et un approvisionnement responsable. Nous offrons un support à la rotation, du matériel technique et des formations au service.',
      bullets: ['Logistique réfrigérée', 'Lots évolutifs', 'Matériel pédagogique', 'Conseil en rotation'],
      form_aria: 'Formulaire de partenariats',
      form_labels: {
        name: 'Nom*',
        email: 'Email*',
        company: 'Entreprise',
        message: 'Message*',
        submit: 'Envoyer'
      }
    },
    events: {
      title: 'Événements & Communauté',
      lead: 'Nous participons à des salons, dégustations et collaborations.',
      items: [
        { title: 'Dégustation technique', desc: 'Séance guidée sur les profils sensoriels.', date: '12 oct. 2025' },
        { title: 'Foire artisanale', desc: 'Stand collaboratif avec des producteurs locaux.', date: '5 nov. 2025' },
        { title: 'Collaboration d’hiver', desc: 'Brassin limité aux épices de saison.', date: 'déc. 2025' }
      ]
    },
    blog: {
      title: 'Blog',
      lead: 'Culture bière, technique et actualités.',
      posts: [
        { title: 'Pourquoi contrôler la rampe d’empâtage ?', excerpt: 'Impact sur le corps, l’atténuation et le profil fermentescible…' },
        { title: 'Oxygénation : alliée et ennemie', excerpt: 'Bénéfices après le refroidissement et risques à l’embouteillage…' },
        { title: 'Guide sensoriel de base', excerpt: 'Comment entraîner la perception de l’amertume et l’estérification…' }
      ]
    },
    store: {
      title: 'Boutique en ligne',
      lead: 'Achat direct depuis la brasserie.',
      products: [
        { name: 'IPA Résine 355 ml' },
        { name: 'Stout Feu 473 ml' },
        { name: 'Pack dégustation (6)' }
      ],
      add_label: 'Ajouter',
      cart_aria: 'Panier',
      cart_title: 'Panier',
      total_label: 'Total : ',
      checkout: 'Commander',
      cart_note: 'Fonctionnalités complètes à venir.'
    },
    contact: {
      title: 'Contact',
      list_labels: { email: 'Email :', whatsapp: 'WhatsApp :', social: 'Réseaux :' },
      list_values: { email: 'contacto@bracerabeer.test', whatsapp: '+57 000 000 0000', social: 'IG / FB (Bientôt)' },
      form_aria: 'Formulaire de contact',
      form_labels: { name: 'Nom*', email: 'Email*', message: 'Message*', submit: 'Envoyer' }
    },
    founder: {
      title: 'De Puerto Salgar au monde',
      claim: 'Un entrepreneur cosmopolite aux racines locales',
      p1: 'Esteban Beltrán Beltrán est le créateur de Bracera Beer, un jeune originaire de Puerto Salgar (Cundinamarca), qui a choisi d’aller au‑delà de ce qui était établi dans sa ville natale. Ingénieur chimiste et étudiant en master d’économie circulaire, Esteban a transformé sa passion pour la bière artisanale en un projet qui conjugue innovation, tradition et vision globale.',
      p2: 'Son chemin l’a conduit à parcourir des villes et des pays — de Manizales à l’Espagne, la Finlande et la République tchèque — des expériences qui ont fait de lui un citoyen du monde sans perdre l’essence de ses racines. Aujourd’hui, Esteban incarne une nouvelle génération d’entrepreneurs colombiens : des jeunes cosmopolites qui, en partant du local, cherchent à avoir un impact global.',
      highlight: 'Esteban Beltrán Beltrán, ingénieur chimiste et titulaire d’un master en économie circulaire, est le visionnaire derrière Bracera Beer. Né à Puerto Salgar, son parcours académique et professionnel l’a mené à travers l’Europe et les Amériques, consolidant une vision cosmopolite qui allie innovation mondiale et racines locales. Son leadership reflète la nouvelle génération d’entrepreneurs colombiens : des jeunes capables de transformer l’artisanat en une marque à projection internationale.',
      icon_tech: 'Formation technique',
      icon_global: 'Vision globale',
      icon_craft: 'Bière artisanale',
      cta: 'En savoir plus sur l’histoire',
      photo_aria: 'Portrait d’Esteban Beltrán Beltrán',
      figcaption: 'Esteban Beltrán Beltrán — Fondateur de Bracera Beer'
    }
  },
  'cs-CZ': {
    brand_alt: 'Pivo Bracera',
    brand_mark: 'BR',
    brand_name: 'Bracera Beer',
    nav: {
      home: 'Domů', about: 'O nás', founder: 'Zakladatel', products: 'Produkty', process: 'Proces',
      outlets: 'Prodejní místa', alliances: 'Partnerství', events: 'Akce', blog: 'Blog', store: 'Obchod', contact: 'Kontakt'
    },
    footer_brand: 'Bracera Beer',
    footer_rights: 'Všechna práva vyhrazena.',
    home: {
      hero_title: 'Řemeslné pivo s charakterem',
      hero_lead: 'Vybrané suroviny, čisté procesy a opravdový závazek k chuti.',
      cta_buy: 'Koupit nyní',
      cta_partner: 'Partnerství'
    },
  about: {
      title: 'Kdo jsme',
      subhead: 'Původ a filozofie',
      p1: 'Bracera Beer vznikla z touhy po vyváženém, poctivém pivu bez pozlátek. Sázíme na střídmý, materiální vizuální jazyk: kov, dřevo, obilí a oheň.',
      highlight: 'MÉNĚ OZDOB, VÍCE PODSTATY.',
      p2: 'Každá várka je promyšlená iterace: kontrola teplot, výběr sladů, chmelové křivky a správné zrání. Žádné prázdné trendy – jen to, co prospívá finálnímu profilu.',
      mission_title: 'Mise',
      mission_text: 'Tvořit poctivé pivo, které respektuje řemeslo a vzdělává chuť.',
      vision_title: 'Vize',
      vision_text: 'Stát se nezávislým etalonem kvality na místní pivní scéně.',
      figcaption: 'Základní a speciální slady připravené k rmutování.',
      team_note: 'Nadšený tým za každou várkou.'
    },
    process: {
      title: 'Proces vaření',
      lead: 'Strukturovaný, kontrolovaný a záměrný. Bez zkratek.',
      steps: [
        { name: 'Šrotování', desc: 'Nastavení mletí pro účinnou extrakci bez přetažení slupek.' },
        { name: 'Rmutování', desc: 'Teplotní křivky navržené pro cílový profil těla.' },
        { name: 'Chmelovar & chmelení', desc: 'Dávky vypočtené podle alfa kyselin a volatility aromat.' },
        { name: 'Kvašení', desc: 'Přísná kontrola kvasinek, teploty a hustot.' },
        { name: 'Zrání', desc: 'Kondicionování pro uhlazení hran a stabilizaci profilu.' }
      ]
    },
    outlets: {
      title: 'Prodejní místa',
      lead: 'Zjistěte, kde ochutnat Bracera.',
      map_placeholder: 'Interaktivní mapa (již brzy)',
      map_aria: 'Mapa prodejních míst',
      list: [
        { name: 'Tap Local Centrum', address: 'Cra 00 #00 - Centrum' },
        { name: 'Gastro Pub Sever', address: 'Calle 00 #00 - Sever' },
        { name: 'Řemeslný trh', address: 'Av. Industrial 123' }
      ],
      factory_title: 'Pivovar',
      factory_address: 'Průmyslový park, parcela 7, Město. Návštěvy po rezervaci.'
    },
    alliances: {
      title: 'Aliance a distribuce',
      lead: 'Budujeme udržitelné vztahy s odpovědnými kanály.',
      copy: 'Hledáme partnery, kteří si cení konzistentního produktu, sledovatelnosti a odpovědného zásobování. Poskytujeme podporu rotace, technické materiály a školení obsluhy.',
      bullets: ['Chlazená logistika', 'Škálovatelné várky', 'Vzdělávací materiály', 'Poradenství k rotaci'],
      form_aria: 'Formulář pro partnerství',
      form_labels: {
        name: 'Jméno*',
        email: 'Email*',
        company: 'Společnost',
        message: 'Zpráva*',
        submit: 'Odeslat'
      }
    },
    events: {
      title: 'Akce & Komunita',
      lead: 'Účastníme se veletrhů, degustací a spoluprací.',
      items: [
        { title: 'Technická degustace', desc: 'Řízená seance o senzorických profilech.', date: '12. říj 2025' },
        { title: 'Řemeslný veletrh', desc: 'Společný stánek s místními producenty.', date: '5. lis 2025' },
        { title: 'Zimní spolupráce', desc: 'Limitovaná várka se sezónním kořením.', date: 'pro 2025' }
      ]
    },
    blog: {
      title: 'Blog',
      lead: 'Pivní kultura, technika a novinky.',
      posts: [
        { title: 'Proč řídit teplotní rampu rmutování?', excerpt: 'Dopad na tělo, atenuaci a fermentovatelný profil…' },
        { title: 'Oxygenace: spojenec i nepřítel', excerpt: 'Přínosy po chlazení a rizika při stáčení…' },
        { title: 'Základní senzorický průvodce', excerpt: 'Jak trénovat vnímání hořkosti a esterifikace…' }
      ]
    },
    store: {
      title: 'Online obchod',
      lead: 'Přímý nákup z pivovaru.',
      products: [
        { name: 'Resin IPA 355 ml' },
        { name: 'Stout Oheň 473 ml' },
        { name: 'Degustační balíček (6)' }
      ],
      add_label: 'Přidat',
      cart_aria: 'Košík',
      cart_title: 'Košík',
      total_label: 'Celkem: ',
      checkout: 'Pokladna',
      cart_note: 'Plná funkčnost později.'
    },
    contact: {
      title: 'Kontakt',
      list_labels: { email: 'Email:', whatsapp: 'WhatsApp:', social: 'Sítě:' },
      list_values: { email: 'contacto@bracerabeer.test', whatsapp: '+57 000 000 0000', social: 'IG / FB (Brzy)' },
      form_aria: 'Kontaktní formulář',
      form_labels: { name: 'Jméno*', email: 'Email*', message: 'Zpráva*', submit: 'Odeslat' }
    },
    founder: {
      title: 'Z Puerto Salgar do světa',
      claim: 'Kosmopolitní podnikatel s místními kořeny',
      p1: 'Esteban Beltrán Beltrán je tvůrcem Bracera Beer, mladík pocházející z města Puerto Salgar v departementu Cundinamarca, který se rozhodl jít dál než bylo v jeho rodném městě obvyklé. Jako chemický inženýr a student magisterského oboru Cirkulární ekonomika proměnil Esteban svou vášeň pro řemeslné pivo v projekt, který spojuje inovaci, tradici a globální vizi.',
      p2: 'Jeho cesta ho zavedla do mnoha měst a zemí — od Manizales po Španělsko, Finsko a Českou republiku — zkušenosti z něj udělaly občana světa, aniž by ztratil podstatu svých kořenů. Dnes Esteban představuje novou generaci kolumbijských podnikatelů: kosmopolitní mladé lidi, kteří vycházejíce z lokálního prostředí chtějí působit globálně.',
      highlight: 'Esteban Beltrán Beltrán, chemický inženýr a magistr v oboru Cirkulární ekonomika, je vizionářem stojícím za Bracera Beer. Narozen v Puerto Salgar, jeho akademická a profesní dráha jej zavedla po Evropě i Americe a utvrdila kosmopolitní vizi, která spojuje globální inovace s místními kořeny. Jeho leadership odráží novou generaci kolumbijských podnikatelů: mladé lidi schopné proměnit řemeslo ve značku s mezinárodním dosahem.',
      icon_tech: 'Technické vzdělání',
      icon_global: 'Globální vize',
      icon_craft: 'Řemeslné pivo',
      cta: 'Poznejte více z příběhu',
      photo_aria: 'Portrét Estebana Beltrána Beltrána',
      figcaption: 'Esteban Beltrán Beltrán — Zakladatel Bracera Beer'
    }
  },
  'it-IT': {
    brand_alt: 'Birra Bracera',
    brand_mark: 'BR',
    brand_name: 'Bracera Beer',
    nav: {
      home: 'Inizio', about: 'Chi siamo', founder: 'Fondatore', products: 'Prodotti', process: 'Processo',
      outlets: 'Punti vendita', alliances: 'Alleanze', events: 'Eventi', blog: 'Blog', store: 'Negozio', contact: 'Contatti'
    },
    footer_brand: 'Bracera Beer',
    footer_rights: 'Tutti i diritti riservati.',
    home: {
      hero_title: 'Birra artigianale con carattere',
      hero_lead: 'Materie prime selezionate, processi puliti e un autentico impegno per il sapore.',
      cta_buy: 'Acquista ora',
      cta_partner: 'Diventa partner'
    },
  about: {
      title: 'Chi siamo',
      subhead: 'Origine e Filosofia',
      p1: 'Bracera Beer nasce dalla ricerca di birre equilibrate, oneste e senza artifici. Puntiamo su un linguaggio visivo sobrio e materico: metallo, legno, grani e fuoco.',
      highlight: 'MENO ORNAMENTO, PIÙ ESSENZA.',
      p2: 'Ogni cotta è un’iterazione deliberata: controllo della temperatura, selezione dei malti, curve di luppolatura e giusto riposo. Niente mode vuote: solo ciò che valorizza il profilo finale.',
      mission_title: 'Missione',
      mission_text: 'Creare birra onesta che rispetti il mestiere ed educhi il palato.',
      vision_title: 'Visione',
      vision_text: 'Diventare un riferimento di qualità indipendente nel circuito brassicolo locale.',
      figcaption: 'Malti base e speciali pronti per l’ammostamento.',
      team_note: 'Un team appassionato dietro ogni cotta.'
    },
    process: {
      title: 'Processo di produzione',
      lead: 'Strutturato, controllato e deliberato. Niente scorciatoie.',
      steps: [
        { name: 'Macinazione', desc: 'Regolazione per un’estrazione efficiente senza trascinamento delle glumelle.' },
        { name: 'Ammostamento', desc: 'Curve di temperatura progettate per il profilo di corpo desiderato.' },
        { name: 'Bollitura & Luppolatura', desc: 'Dosi calcolate in base agli alfa-acidi e alla volatilità aromatica.' },
        { name: 'Fermentazione', desc: 'Controllo rigoroso di lievito, temperatura e densità.' },
        { name: 'Maturazione', desc: 'Condizionamento per smussare gli spigoli e stabilizzare il profilo.' }
      ]
    },
    outlets: {
      title: 'Punti vendita',
      lead: 'Scopri dove assaggiare Bracera.',
      map_placeholder: 'Mappa interattiva (Prossimamente)',
      map_aria: 'Mappa punti vendita',
      list: [
        { name: 'Tap Local Centro', address: 'Cra 00 #00 - Centro' },
        { name: 'Gastro Pub Nord', address: 'Calle 00 #00 - Nord' },
        { name: 'Mercato Artigianale', address: 'Av. Industrial 123' }
      ],
      factory_title: 'Birrificio',
      factory_address: 'Parco Industriale Lotto 7, Città. Visite su prenotazione.'
    },
    alliances: {
      title: 'Alleanze & Distribuzione',
      lead: 'Costruiamo relazioni sostenibili con canali responsabili.',
      copy: 'Cerchiamo partner che valorizzino un prodotto coerente, la tracciabilità e una fornitura responsabile. Offriamo supporto alla rotazione, materiali tecnici e formazione sul servizio.',
      bullets: ['Logistica refrigerata', 'Lotti scalabili', 'Materiale didattico', 'Consulenza sulla rotazione'],
      form_aria: 'Modulo alleanze',
      form_labels: {
        name: 'Nome*',
        email: 'Email*',
        company: 'Azienda',
        message: 'Messaggio*',
        submit: 'Invia'
      }
    },
    events: {
      title: 'Eventi & Comunità',
      lead: 'Partecipiamo a fiere, degustazioni e collaborazioni.',
      items: [
        { title: 'Degustazione Tecnica', desc: 'Sessione guidata sui profili sensoriali.', date: '12 ott 2025' },
        { title: 'Fiera Artigianale', desc: 'Stand collaborativo con produttori locali.', date: '5 nov 2025' },
        { title: 'Collaborazione Invernale', desc: 'Lotto limitato con spezie di stagione.', date: 'dic 2025' }
      ]
    },
    blog: {
      title: 'Blog',
      lead: 'Cultura birraria, tecnica e novità.',
      posts: [
        { title: 'Perché controllare la rampa di ammostamento?', excerpt: 'Impatto su corpo, attenuazione e profilo fermentabile…' },
        { title: 'Ossigenazione: alleata e nemica', excerpt: 'Benefici dopo il raffreddamento e rischi in imbottigliamento…' },
        { title: 'Guida sensoriale di base', excerpt: 'Come allenare la percezione di amaro ed esterificazione…' }
      ]
    },
    store: {
      title: 'Negozio Online',
      lead: 'Acquisto diretto dal birrificio.',
      products: [
        { name: 'IPA Resina 355 ml' },
        { name: 'Stout Fuoco 473 ml' },
        { name: 'Kit Degustazione (6)' }
      ],
      add_label: 'Aggiungi',
      cart_aria: 'Carrello',
      cart_title: 'Carrello',
      total_label: 'Totale: ',
      checkout: 'Checkout',
      cart_note: 'Funzionalità completa in una fase successiva.'
    },
    contact: {
      title: 'Contatti',
      list_labels: { email: 'Email:', whatsapp: 'WhatsApp:', social: 'Social:' },
      list_values: { email: 'contacto@bracerabeer.test', whatsapp: '+57 000 000 0000', social: 'IG / FB (Prossimamente)' },
      form_aria: 'Modulo di contatto',
      form_labels: { name: 'Nome*', email: 'Email*', message: 'Messaggio*', submit: 'Invia' }
    },
    founder: {
      title: 'Da Puerto Salgar al mondo',
      claim: 'Un imprenditore cosmopolita con radici locali',
      p1: 'Esteban Beltrán Beltrán è il creatore di Bracera Beer, un giovane originario di Puerto Salgar (Cundinamarca) che ha deciso di andare oltre ciò che era consolidato nel suo paese natale. Ingegnere chimico e studente di un master in Economia Circolare, Esteban ha trasformato la passione per la birra artigianale in un progetto che unisce innovazione, tradizione e visione globale.',
      p2: 'Il suo percorso lo ha portato a viaggiare tra città e Paesi — da Manizales alla Spagna, alla Finlandia e alla Repubblica Ceca — esperienze che lo hanno reso un cittadino del mondo senza perdere l’essenza delle sue radici. Oggi Esteban rappresenta una nuova generazione di imprenditori colombiani: giovani cosmopoliti che, partendo dal locale, cercano di avere un impatto globale.',
      highlight: 'Esteban Beltrán Beltrán, Ingegnere Chimico e Master in Economia Circolare, è il visionario dietro Bracera Beer. Nato a Puerto Salgar, il suo percorso accademico e professionale lo ha portato in Europa e nelle Americhe, consolidando una visione cosmopolita che combina innovazione globale e radici locali. La sua leadership riflette la nuova generazione di imprenditori colombiani: giovani capaci di trasformare l’artigianalità in un marchio con proiezione internazionale.',
      icon_tech: 'Formazione tecnica',
      icon_global: 'Visione globale',
      icon_craft: 'Birra artigianale',
      cta: 'Scopri di più sulla storia',
      photo_aria: 'Ritratto di Esteban Beltrán Beltrán',
      figcaption: 'Esteban Beltrán Beltrán — Fondatore di Bracera Beer'
    }
  },
  'de-DE': {
    brand_alt: 'Bracera Bier',
    brand_mark: 'BR',
    brand_name: 'Bracera Beer',
    nav: {
      home: 'Startseite', about: 'Über uns', founder: 'Gründer', products: 'Produkte', process: 'Prozess',
      outlets: 'Verkaufsstellen', alliances: 'Partnerschaften', events: 'Veranstaltungen', blog: 'Blog', store: 'Shop', contact: 'Kontakt'
    },
    footer_brand: 'Bracera Beer',
    footer_rights: 'Alle Rechte vorbehalten.',
    home: {
      hero_title: 'Craft-Bier mit Charakter',
      hero_lead: 'Ausgewählte Rohstoffe, saubere Prozesse und echtes Engagement für den Geschmack.',
      cta_buy: 'Jetzt kaufen',
      cta_partner: 'Partner werden'
    },
  about: {
      title: 'Wer wir sind',
      subhead: 'Ursprung & Philosophie',
      p1: 'Bracera Beer entsteht aus dem Anspruch nach ausgewogenen, ehrlichen Bieren ohne Effekthascherei. Wir setzen auf eine schlichte, materielle Bildsprache: Metall, Holz, Getreide und Feuer.',
      highlight: 'WENIGER SCHMUCK, MEHR ESSENZ.',
      p2: 'Jede Charge ist eine bewusste Iteration: Temperaturkontrolle, Auswahl der Malze, Hopfengaben-Kurven und die richtige Reife. Keine leeren Trends – nur, was dem finalen Profil dient.',
      mission_title: 'Mission',
      mission_text: 'Ehrliches Bier schaffen, das das Handwerk respektiert und den Gaumen bildet.',
      vision_title: 'Vision',
      vision_text: 'Unabhängiger Qualitätsmaßstab in der lokalen Bierszene werden.',
      figcaption: 'Basis- und Spezialmalze bereit zum Maischen.',
      team_note: 'Ein leidenschaftliches Team hinter jeder Charge.'
    },
    process: {
      title: 'Brauprozess',
      lead: 'Strukturiert, kontrolliert und bewusst. Keine Abkürzungen.',
      steps: [
        { name: 'Schroten', desc: 'Mahlgrad für effiziente Extraktion ohne Spelzenmitnahme.' },
        { name: 'Maischen', desc: 'Temperaturkurven für das gewünschte Körperprofil.' },
        { name: 'Kochen & Hopfengabe', desc: 'Mengen berechnet nach Alpha-Säuren und Aroma-Volatilität.' },
        { name: 'Gärung', desc: 'Strenge Kontrolle von Hefe, Temperatur und Stammwürze.' },
        { name: 'Reifung', desc: 'Konditionierung zum Abrunden und Stabilisieren des Profils.' }
      ]
    },
    outlets: {
      title: 'Verkaufsstellen',
      lead: 'Finden Sie heraus, wo Sie Bracera probieren können.',
      map_placeholder: 'Interaktive Karte (Bald verfügbar)',
      map_aria: 'Karte der Verkaufsstellen',
      list: [
        { name: 'Tap Local Zentrum', address: 'Cra 00 #00 - Zentrum' },
        { name: 'Gastro Pub Nord', address: 'Calle 00 #00 - Norden' },
        { name: 'Handwerksmarkt', address: 'Av. Industrial 123' }
      ],
      factory_title: 'Brauerei',
      factory_address: 'Industriepark, Parzelle 7, Stadt. Besichtigungen nach Vereinbarung.'
    },
    alliances: {
      title: 'Partnerschaften & Vertrieb',
      lead: 'Wir bauen nachhaltige Beziehungen mit verantwortungsvollen Kanälen auf.',
      copy: 'Wir suchen Partner, die ein konsistentes Produkt, Nachverfolgbarkeit und verantwortungsvolle Lieferketten schätzen. Wir bieten Rotationssupport, technische Unterlagen und Service-Schulungen.',
      bullets: ['Gekühlte Logistik', 'Skalierbare Chargen', 'Schulungsmaterial', 'Beratung zur Rotation'],
      form_aria: 'Partnerschaftsformular',
      form_labels: {
        name: 'Name*',
        email: 'E-Mail*',
        company: 'Unternehmen',
        message: 'Nachricht*',
        submit: 'Senden'
      }
    },
    events: {
      title: 'Events & Community',
      lead: 'Wir nehmen an Messen, Verkostungen und Kooperationen teil.',
      items: [
        { title: 'Technische Verkostung', desc: 'Geführte Session zu sensorischen Profilen.', date: '12. Okt. 2025' },
        { title: 'Handwerksmesse', desc: 'Gemeinschaftsstand mit lokalen Produzenten.', date: '5. Nov. 2025' },
        { title: 'Winter-Kollaboration', desc: 'Limitierte Charge mit saisonalen Gewürzen.', date: 'Dez. 2025' }
      ]
    },
    blog: {
      title: 'Blog',
      lead: 'Bierkultur, Technik und Neuigkeiten.',
      posts: [
        { title: 'Warum die Maischerampe steuern?', excerpt: 'Auswirkung auf Körper, Vergärung und vergärbares Profil…' },
        { title: 'Oxygenierung: Freund und Feind', excerpt: 'Vorteile nach dem Kühlen und Risiken beim Abfüllen…' },
        { title: 'Grundlegender Sensorik-Leitfaden', excerpt: 'Wahrnehmung von Bitterkeit und Veresterung trainieren…' }
      ]
    },
    store: {
      title: 'Online-Shop',
      lead: 'Direkter Einkauf aus der Brauerei.',
      products: [
        { name: 'Resin IPA 355 ml' },
        { name: 'Stout Feuer 473 ml' },
        { name: 'Tasting-Set (6)' }
      ],
      add_label: 'Hinzufügen',
      cart_aria: 'Warenkorb',
      cart_title: 'Warenkorb',
      total_label: 'Gesamt: ',
      checkout: 'Zur Kasse',
      cart_note: 'Volle Funktionalität folgt.'
    },
    contact: {
      title: 'Kontakt',
      list_labels: { email: 'E-Mail:', whatsapp: 'WhatsApp:', social: 'Soziale Netzwerke:' },
      list_values: { email: 'contacto@bracerabeer.test', whatsapp: '+57 000 000 0000', social: 'IG / FB (Bald)' },
      form_aria: 'Kontaktformular',
      form_labels: { name: 'Name*', email: 'E-Mail*', message: 'Nachricht*', submit: 'Senden' }
    },
    founder: {
      title: 'Von Puerto Salgar in die Welt',
      claim: 'Ein kosmopolitischer Unternehmer mit lokalen Wurzeln',
      p1: 'Esteban Beltrán Beltrán ist der Schöpfer von Bracera Beer, ein junger Mann aus Puerto Salgar (Cundinamarca), der beschloss, über die gewohnten Grenzen seiner Heimatstadt hinauszugehen. Als Chemieingenieur und Masterstudent der Kreislaufwirtschaft verwandelte Esteban seine Leidenschaft für Craft-Bier in ein Projekt, das Innovation, Tradition und globale Perspektive vereint.',
      p2: 'Sein Weg führte ihn in verschiedene Städte und Länder — von Manizales nach Spanien, Finnland und in die Tschechische Republik. Diese Erfahrungen machten ihn zu einem Weltbürger, ohne dass er die Essenz seiner Wurzeln verlor. Heute verkörpert Esteban eine neue Generation kolumbianischer Unternehmer: kosmopolitische junge Menschen, die lokal starten und global wirken wollen.',
      highlight: 'Esteban Beltrán Beltrán, Chemieingenieur und Master der Kreislaufwirtschaft, ist der Visionär hinter Bracera Beer. Geboren in Puerto Salgar, führte ihn sein akademischer und beruflicher Werdegang durch Europa und Amerika und festigte eine kosmopolitische Vision, die globale Innovation mit lokalen Wurzeln verbindet. Seine Führung steht für eine neue Generation kolumbianischer Unternehmer: junge Menschen, die das Handwerk in eine Marke mit internationaler Ausrichtung verwandeln können.',
      icon_tech: 'Technische Ausbildung',
      icon_global: 'Globale Vision',
      icon_craft: 'Craft-Bier',
      cta: 'Mehr über die Geschichte',
      photo_aria: 'Porträt von Esteban Beltrán Beltrán',
      figcaption: 'Esteban Beltrán Beltrán — Gründer von Bracera Beer'
    }
  },
  'zh-CN': {
    brand_alt: 'Bracera 啤酒',
    brand_mark: 'BR',
    brand_name: 'Bracera Beer',
    nav: {
      home: '首页', about: '关于我们', founder: '创始人', products: '产品', process: '工艺流程',
      outlets: '销售点', alliances: '合作伙伴', events: '活动', blog: '博客', store: '商店', contact: '联系'
    },
    footer_brand: 'Bracera Beer',
    footer_rights: '保留所有权利。',
    home: {
      hero_title: '有个性的精酿啤酒',
      hero_lead: '甄选原料、洁净工艺，对风味保持真实承诺。',
      cta_buy: '立即购买',
      cta_partner: '成为合作伙伴'
    },
  about: {
      title: '我们是谁',
      subhead: '起源与理念',
      p1: 'Bracera Beer 源于对均衡、诚实、无矫饰啤酒的追求。我们坚持朴素而具质感的视觉语言：金属、木材、谷物与火。',
      highlight: '少些装饰，多点本质。',
      p2: '每一批次都是深思熟虑的迭代：温度控制、麦芽选择、投酒花曲线与恰当熟成。摒弃空洞潮流，只保留有助于最终风味的要素。',
      mission_title: '使命',
      mission_text: '以尊重工艺、启迪味觉为宗旨，酿造诚实之酒。',
      vision_title: '愿景',
      vision_text: '成为本地精酿圈的独立品质标杆。',
      figcaption: '基础与特色麦芽，准备进行糖化。',
      team_note: '每一批酒背后都是充满热情的团队。'
    },
    process: {
      title: '酿造流程',
      lead: '结构化、可控、审慎。拒绝捷径。',
      steps: [
        { name: '粉碎', desc: '调校磨粉以实现高效萃取，避免带壳碎。' },
        { name: '糖化', desc: '设计温度曲线以达成目标酒体。' },
        { name: '煮沸与投酒花', desc: '按 α 酸和香气挥发性精算投放。' },
        { name: '发酵', desc: '严控酵母、温度与比重。' },
        { name: '熟成', desc: '调理以柔化棱角并稳定风味轮廓。' }
      ]
    },
    outlets: {
      title: '销售点',
      lead: '查找可品尝 Bracera 的地点。',
      map_placeholder: '互动地图（即将上线）',
      map_aria: '销售点地图',
      list: [
        { name: 'Tap Local 中心店', address: 'Cra 00 #00 - 中心区' },
        { name: '北区美食酒馆', address: 'Calle 00 #00 - 北区' },
        { name: '手作市集', address: 'Av. Industrial 123' }
      ],
      factory_title: '工厂',
      factory_address: '工业园7号地块，城市。参观需预约。'
    },
    alliances: {
      title: '合作与分销',
      lead: '与负责任的渠道建立可持续的关系。',
      copy: '我们寻找重视产品一致性、可追溯性与负责任供应的合作伙伴。我们提供动销支持、技术资料和服务培训。',
      bullets: ['冷链物流', '可扩展批次', '教育资料', '动销顾问'],
      form_aria: '合作表单',
      form_labels: {
        name: '姓名*',
        email: '邮箱*',
        company: '公司',
        message: '留言*',
        submit: '发送'
      }
    },
    events: {
      title: '活动与社区',
      lead: '我们参与展会、品鉴与合作。',
      items: [
        { title: '专业品鉴', desc: '聚焦感官风味的引导式课程。', date: '2025 年 10 月 12 日' },
        { title: '手作集市', desc: '与本地生产者联合展位。', date: '2025 年 11 月 5 日' },
        { title: '冬季联酿', desc: '季节香料限量批次。', date: '2025 年 12 月' }
      ]
    },
    blog: {
      title: '博客',
      lead: '啤酒文化、工艺与资讯。',
      posts: [
        { title: '为何要控制糖化升温曲线？', excerpt: '对酒体、衰减与可发酵组分的影响…' },
        { title: '充氧：亦友亦敌', excerpt: '冷却后益处与灌装阶段的风险…' },
        { title: '基础感官指南', excerpt: '训练对苦味与酯化的感知…' }
      ]
    },
    store: {
      title: '在线商店',
      lead: '工厂直购。',
      products: [
        { name: '树脂 IPA 355ml' },
        { name: '火焰世涛 473ml' },
        { name: '品鉴组合（6）' }
      ],
      add_label: '添加',
      cart_aria: '购物车',
      cart_title: '购物车',
      total_label: '合计：',
      checkout: '结账',
      cart_note: '完整功能将在后续上线。'
    },
    contact: {
      title: '联系我们',
      list_labels: { email: '邮箱：', whatsapp: 'WhatsApp：', social: '社媒：' },
      list_values: { email: 'contacto@bracerabeer.test', whatsapp: '+57 000 000 0000', social: 'IG / FB（即将上线）' },
      form_aria: '联系表单',
      form_labels: { name: '姓名*', email: '邮箱*', message: '留言*', submit: '发送' }
    },
    founder: {
      title: '从 Puerto Salgar 走向世界',
      claim: '根植本土、胸怀世界的创业者',
      p1: 'Esteban Beltrán Beltrán 是 Bracera Beer 的创始人，来自昆迪纳马卡省的 Puerto Salgar。作为化学工程师及循环经济硕士生，他将对精酿啤酒的热爱转化为一个融合创新、传统与全球视野的项目。',
      p2: '他的足迹遍及多座城市与国家——从马尼萨莱斯到西班牙、芬兰和捷克共和国——这些经历让他成为一名世界公民，同时不失本土根性。如今，Esteban 代表着新一代哥伦比亚企业家：自本土起步，放眼全球的年轻一代。',
      highlight: '作为化学工程师与循环经济硕士，Esteban Beltrán Beltrán 是 Bracera Beer 背后的远见者。出生于 Puerto Salgar，他在欧洲与美洲的学术与职业历练，凝练出将全球创新与本土根基相结合的世界观。他的领导力彰显了新一代哥伦比亚企业家的特质：把手作精神锻造成具有国际影响力的品牌。',
      icon_tech: '技术背景',
      icon_global: '全球视野',
      icon_craft: '精酿啤酒',
      cta: '了解更多故事',
      photo_aria: 'Esteban Beltrán Beltrán 肖像',
      figcaption: 'Esteban Beltrán Beltrán —— Bracera Beer 创始人'
    }
  }
};
