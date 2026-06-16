# NexoLT - Landing web

Landing institucional de NexoLT, orientada a comunicar servicios de análisis, desarrollo y acompañamiento de soluciones digitales.

## Flujo de trabajo obligatorio

Este proyecto se trabaja siguiendo `AGENTS.md`.

Ciclo:

```text
Diagnóstico → Backlog → Tarea 1 → Implementación → QA → Corrección → Tarea 2 → Deploy → Documentación
```

Roles internos considerados:
- Product Manager
- Business Analyst
- UX Researcher
- UI Designer
- Frontend Developer
- Backend Developer
- API Designer
- Database Specialist
- QA Expert
- Security Auditor
- DevOps / Deployment Engineer
- Project Manager

## Estructura actual

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
│   ├── 08-reporte-versionado-deploy.md
│   └── 09-reporte-deploy-netlify.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── social/
│       └── og-image.jpg
├── LOGO_INSTAGRAM.png
├── LOGO_PAGINA.png
├── PUBLICACION.png
├── PUBLICACION_DOS.png
└── PUBLICAICON_TRES.png
```

## Stack

- HTML5
- CSS3 en `assets/css/styles.css`
- JavaScript vanilla en `assets/js/main.js`
- Formspree para formulario de contacto
- Google Fonts

No hay build, dependencias npm ni backend propio.

## Ejecución local

Desde la raíz del proyecto:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Abrir:

```text
http://127.0.0.1:4173/index.html
```

También puede abrirse `index.html` directamente en el navegador, aunque se recomienda servidor local para probar comportamiento similar a deploy.

## QA manual mínimo

Antes de cerrar una tarea:
- Abrir la landing en desktop y mobile.
- Revisar consola del navegador.
- Probar navegación por secciones.
- Probar menú mobile.
- Probar tabs de "Cómo trabajamos".
- Probar filtros de herramientas.
- Probar formulario vacío, inválido y válido.
- Revisar enlaces externos.
- Revisar metadata SEO/social si se tocaron `<head>` o assets.

Checklist detallado:

[docs/03-checklist-qa-security.md](docs/03-checklist-qa-security.md)

## Seguridad

Reglas actuales:
- No guardar claves privadas en `index.html`, `README.md` ni `docs/`.
- No agregar tokens de Formspree, APIs o hosting al repositorio.
- Mantener `rel="noopener noreferrer"` en enlaces `target="_blank"`.
- Revisar cualquier cambio del formulario antes de deploy.

## Deploy recomendado

Proveedor recomendado/configurado:
- Netlify

Para deploy manual, subir:
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/social/og-image.jpg`
- Imágenes PNG referenciadas
- Cualquier archivo nuevo que se agregue en futuras tareas

## Rollback

El proyecto usa Git local con rama principal `main`.

Para rollback profesional:
- Crear commits por tarea validada.
- Desplegar solo commits aprobados por QA.
- Mantener identificado el último commit estable.

Ver detalle en [docs/08-reporte-versionado-deploy.md](docs/08-reporte-versionado-deploy.md).

## Netlify

El repo incluye `netlify.toml`.

Configuración:
- Build command: vacío.
- Publish directory: `.`.
- Production branch: `main`.

Reporte:

[docs/09-reporte-deploy-netlify.md](docs/09-reporte-deploy-netlify.md)

## Documentación del flujo

- [docs/00-diagnostico.md](docs/00-diagnostico.md)
- [docs/01-backlog.md](docs/01-backlog.md)
- [docs/02-plan-tecnico.md](docs/02-plan-tecnico.md)
- [docs/03-checklist-qa-security.md](docs/03-checklist-qa-security.md)
- [docs/04-reporte-qa.md](docs/04-reporte-qa.md)
- [docs/05-reporte-performance-assets.md](docs/05-reporte-performance-assets.md)
- [docs/06-reporte-formulario-seguridad.md](docs/06-reporte-formulario-seguridad.md)
- [docs/07-reporte-separacion-css-js.md](docs/07-reporte-separacion-css-js.md)
- [docs/08-reporte-versionado-deploy.md](docs/08-reporte-versionado-deploy.md)
- [docs/09-reporte-deploy-netlify.md](docs/09-reporte-deploy-netlify.md)
