# 04 - Reporte QA visual y funcional

Fecha: 2026-06-15  
Tarea: Tarea 2 - QA visual y funcional en navegador local  
URL local usada: `http://127.0.0.1:4173/index.html`

## Roles aplicados

- Project Manager: mantuvo alcance de una sola tarea.
- QA Expert: ejecutó pruebas funcionales y responsive.
- UX Researcher / UI Designer: revisó legibilidad, navegación y comportamiento mobile.
- Frontend Developer: aplicó correcciones CSS acotadas.
- Security Auditor: revisó enlaces externos, formulario y ausencia de secretos.
- DevOps / Deployment Engineer: validó ejecución en servidor estático local.

## Entorno

- Servidor local: `python -m http.server 4173 --bind 127.0.0.1`
- Navegador: Codex in-app browser
- Viewports verificados:
  - Desktop: 1280x720
  - Mobile: 390x844
  - Tablet: 768x1024

## Pruebas ejecutadas

### Carga y consola

Resultado: OK

- La página carga como `NexoLT — Soluciones Digitales`.
- No se registraron errores ni warnings de consola durante las pruebas.
- Se verificó que el servidor local sirva el `index.html` correcto del proyecto.

### Navegación

Resultado: OK

Se verificaron anclas y secciones:
- `#inicio`
- `#servicios`
- `#approach`
- `#skills`
- `#about`
- `#contact`

Todos los enlaces principales apuntan a secciones existentes.

### Tabs de "Cómo trabajamos"

Resultado: OK

- El tab `Diagnóstico` se activa correctamente.
- `aria-selected` y `tabindex` se actualizan.
- El panel activo pasa a `panel-1`.
- Los paneles no activos quedan ocultos con `display: none`.

### Filtros de herramientas

Resultado: OK

- El filtro `Backend` se activa correctamente.
- `aria-pressed` queda en `true` para el chip activo.
- Solo quedan visibles las tarjetas de categoría `backend`.

### Formulario

Resultado: OK

Formulario vacío:
- `f-nombre`, `f-email` y `f-mensaje` pasan a `aria-invalid="true"`.
- Los errores asociados por `aria-describedby` se muestran correctamente.

No se envió información real de cliente durante la prueba.

### Menú mobile

Resultado: OK

Viewport mobile 390x844:
- El botón mobile aparece.
- La navegación desktop y CTA desktop se ocultan.
- El menú abre con `aria-expanded="true"`.
- El overlay pasa a `aria-hidden="false"`.
- Los links del overlay pasan a `tabindex="0"`.
- El foco entra al primer link del menú.
- Cierre con `Escape`:
  - `aria-expanded="false"`
  - `aria-hidden="true"`
  - links vuelven a `tabindex="-1"`
  - overlay vuelve a `visibility: hidden` tras la transición.

### Responsive

Resultado inicial: Con hallazgo  
Resultado final: OK

Desktop:
- Sin overflow horizontal.
- Hero, secciones y footer cargan correctamente.

Tablet 768x1024:
- Sin overflow horizontal.
- Menú mobile activo según breakpoint.
- Hero visual oculto, layout de contenido estable.

Mobile 390x844:
- Hallazgo inicial: `scrollWidth` era mayor que `clientWidth`.
- Causa: el marquee animado y la grilla de métricas contribuían al ancho documentado.
- Corrección aplicada:
  - Aislar layout del marquee con `contain: layout paint`.
  - Hacer que `.stats-inner` pase a una columna en `max-width: 480px`.
- Resultado final: `scrollWidth` igual a `clientWidth`, sin overflow horizontal.

### SEO y metadata

Resultado: OK

- `title`: `NexoLT — Soluciones Digitales`.
- `meta description` presente.
- `canonical`: `https://nexolt.com/`.
- En ese momento, `og:image` y `twitter:image`: `https://nexolt.com/PUBLICACION.png`.

### Seguridad

Resultado: OK

- No se agregaron secretos, tokens ni credenciales.
- Enlaces externos a Instagram mantienen `rel="noopener noreferrer"`.
- No se modificó el endpoint de Formspree.
- No se agregaron dependencias externas.
- No se agregó `eval` ni HTML dinámico inseguro.

## Correcciones aplicadas

Archivo modificado:
- `index.html`

Cambios:
- `.marquee-strip` ahora usa `width: 100%; max-width: 100vw; contain: layout paint;`
- En mobile chico, `.stats-inner` pasa a `grid-template-columns: 1fr;`

## Riesgos pendientes

- La landing todavía depende de Formspree para recepción de mensajes.
- No hay Git inicializado, por lo que el rollback sigue siendo manual.
- Las imágenes PNG siguen siendo pesadas; queda como próxima prioridad de performance.
- La imagen social cuadrada quedó como pendiente para la tarea de performance de assets.

## Estado final de la tarea

QA: aprobado con correcciones aplicadas.  
Seguridad: aprobado.  
Siguiente paso recomendado: Tarea 3 - Optimizar performance de assets e imágenes sociales.
