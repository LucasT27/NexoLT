# 02 - Plan técnico

## Arquitectura actual

Tipo: sitio estático one-page.

Archivos principales:
- `index.html`: markup, metadata e integración de assets.
- `assets/css/styles.css`: estilos de la landing.
- `assets/js/main.js`: interacciones de la landing.
- `AGENTS.md`: flujo obligatorio de trabajo.
- `LOGO_INSTAGRAM.png`, `LOGO_PAGINA.png`, `PUBLICACION.png`, `PUBLICACION_DOS.png`, `PUBLICAICON_TRES.png`: assets gráficos.
- `assets/social/og-image.jpg`: imagen social optimizada 1200x630 para Open Graph y Twitter Card.
- `docs/`: documentación operativa del proyecto.

Servicios externos:
- Google Fonts.
- Formspree para recepción de mensajes.
- Instagram como canal externo.

## Stack actual

- HTML5.
- CSS3 en archivo externo.
- JavaScript vanilla en archivo externo.
- Hosting estático recomendado.

## Stack recomendado por ahora

Mantener el stack estático.

Justificación:
- El alcance actual es una landing institucional.
- No hay rutas dinámicas, autenticación, dashboard, CMS ni base de datos.
- Migrar a framework agregaría complejidad sin beneficio inmediato.

Stack futuro opcional:
- React + Vite + TypeScript si se empieza a modularizar componentes o crear más páginas livianas.
- Next.js + TypeScript si aparecen rutas, SEO dinámico, blog/CMS, backend simple o necesidad de server-side rendering.

## Estructura propuesta de carpetas

Estado mínimo recomendado:

```text
.
├── AGENTS.md
├── README.md
├── index.html
├── docs/
│   ├── 00-diagnostico.md
│   ├── 01-backlog.md
│   ├── 02-plan-tecnico.md
│   ├── 03-checklist-qa-security.md
│   ├── 04-reporte-qa.md
│   ├── 05-reporte-performance-assets.md
│   ├── 06-reporte-formulario-seguridad.md
│   ├── 07-reporte-separacion-css-js.md
│   └── 08-reporte-versionado-deploy.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── social/
        └── og-image.jpg
```

Los PNG originales quedan en la raíz como fuentes y materiales de marca. No se moverán hasta una tarea específica para evitar romper rutas o referencias externas.

## Contrato del formulario

Endpoint actual:
- `POST https://formspree.io/f/mbdwbgag`

Datos enviados:
- `nombre`: string, mínimo 2 caracteres.
- `email`: string con formato email básico.
- `mensaje`: string, mínimo 10 caracteres.
- `_gotcha`: string honeypot, debe permanecer vacío para usuarios reales.

Validación actual:
- JavaScript en cliente.
- Errores asociados con `aria-describedby` y `aria-invalid`.
- Estado accesible con `role="status"` y `aria-live="polite"`.
- Honeypot compatible con Formspree para reducir spam automatizado.

Riesgos:
- La validación del cliente no reemplaza validación del servicio receptor.
- Endpoint público expuesto.
- Posible spam si no se configura protección en Formspree.

## Seguridad

Controles actuales:
- No hay secretos privados en archivos.
- Enlaces externos con `rel="noopener noreferrer"`.
- No hay autenticación ni permisos.

Mejoras recomendadas:
- Checklist de seguridad antes de deploy.
- La lógica principal ya está en `assets/js/main.js`; queda pendiente reemplazar handlers inline para una CSP más estricta.
- Revisar anti-spam del formulario.
- No agregar credenciales al repositorio ni al HTML.

## Performance

Estado:
- `index.html` pesa alrededor de 85 KB.
- Imágenes PNG entre ~923 KB y ~1670 KB.
- Google Fonts agrega dependencias externas.
- Muchas animaciones se ejecutan en desktop.

Riesgos:
- LCP/CLS/INP no medidos.
- Assets sociales o futuros assets visuales pueden ser pesados.
- CSS/JS inline impide cache granular.

Mejoras recomendadas:
- Medir Lighthouse antes de cambios grandes.
- Optimizar imágenes.
- Respetar `prefers-reduced-motion`.
- Separar CSS/JS solo si el mantenimiento lo requiere.

## QA técnico

Pruebas mínimas por cambio:
- Carga sin errores de consola.
- Navegación por anclas.
- Menú mobile.
- Tabs de enfoque.
- Filtros de herramientas.
- Formulario vacío/inválido/válido.
- Responsive desktop/tablet/mobile.
- Revisión rápida de SEO metadata.
- Revisión de enlaces externos.

## Deploy

Opciones recomendadas:
- Netlify: deploy estático simple con drag-and-drop o Git.
- Vercel: simple, aunque más orientado a frameworks.
- GitHub Pages: adecuado si se inicializa repositorio.
- Hosting tradicional: subir archivos estáticos.

Ejecución local:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Abrir:

```text
http://127.0.0.1:4173/index.html
```

Rollback:
- Usar Git local y redeployar el último commit estable.
- Evitar `git reset --hard` salvo decisión explícita.

## Riesgos principales

1. Falta conectar el repositorio local a un remoto.
2. Sin checklist formal de QA/security antes de deploy.
3. Dependencia externa del formulario.
4. Assets pesados.
5. Mantenibilidad limitada por CSS/JS inline.

## Decisión técnica inicial

No migrar de stack en esta etapa. Primero ordenar documentación, QA, seguridad, performance y deploy del sitio estático existente.
