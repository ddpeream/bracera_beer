Sitio dividido en múltiples páginas.

Páginas:
- index.html (inicio)
- quienes.html (quiénes)
- fundador.html (fundador)
- productos.html (productos)
- proceso.html (proceso)
- puntos-venta.html (puntos de venta)
- alianzas.html (alianzas)
- eventos.html (eventos)
- blog.html (blog)
- tienda.html (tienda)
- contacto.html (contacto)

El header y footer se mantienen idénticos en todas las páginas. El menú navega entre archivos.
# Bracera Beer (Fase 1 - Identidad Base)

Este repositorio inicia el rediseño completo de la identidad visual de la página de Bracera Beer.

## Lineamientos aplicados en este primer prompt
- Estética industrial-rústica: uso de tonos carbón, madera, dorados ámbar y verdes secos.
- Eliminación de elementos del diseño anterior (pastel, rosa/fresa, script, emojis, glassmorphism, botones píldora, gradientes brillantes).
- Tipografías: `Montserrat` (geométrica sans) para interfaz y encabezados; `Merriweather` (serif editorial) para frases destacadas.
- Layout modular con secciones claras (hero + bloque de identidad + placeholders posteriores).
- Botones de bordes rectos (leve radio pequeño) y sin apariencia neumórfica.
- Fotografías reales (temporales vía Unsplash) de ambiente cervecero y materias primas.

## Estructura actual (Fase 2 - Vistas principales esqueleto)
```
index.html               # Contiene todas las vistas seccionadas (one-page base)
assets/
  css/base.css           # Estilos globales + componentes principales
  js/main.js             # Inicialización + prototipo carrito + formularios
```

## Próximos pasos (siguientes prompts sugeridos)
1. Profundizar fotografía real de cada paso del proceso (sustituir placeholders y añadir micro timeline lateral responsiva).
2. Integrar mapa real (Leaflet minimal o similar sin estilos brillantes) para Puntos de Venta.
3. Persistencia del carrito (localStorage) + cálculo envío/impuestos y vista checkout dedicada.
4. Sistema dinámico de productos (JSON + render) y filtros (estilo / ABV).
5. Blog dinámico (plantilla y paginación básica) + marcado estructurado.
6. Accesibilidad avanzada: skip-link, ARIA mejorado en componentes interactivos.
7. Optimización de assets (lazy images, formato AVIF/WEBP, preload tipografías refinado).
8. Separar vistas en rutas reales (progresar a un enfoque multipágina o SPA ligera según decisión técnica).

## Nueva sección: Nuestro Fundador
Se agregó una sección destacada `#fundador` con:
- Layout 2 columnas (foto profesional + texto editorial).
- Título: “De Puerto Salgar al Mundo” y claim complementario.
- Íconos vectoriales minimalistas (formación, visión global, cerveza artesanal).
- Bloque resaltado con resumen aspiracional.
- CTA a historia general (`#quienes`).

## Accesibilidad inicial
- Contraste alto entre fondo y texto.
- Estados `:focus-visible` personalizados.
- Preparado para `prefers-reduced-motion` en animación hero.

## Cómo visualizar
Abrir `index.html` directamente en el navegador. No se requiere build en esta fase.

---
_Fase 1 completada. Listo para continuar con el siguiente prompt cuando lo indiques._
