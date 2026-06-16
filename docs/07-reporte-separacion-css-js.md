# 07 - Reporte separación CSS/JS

Fecha: 2026-06-15  
Tarea: Tarea 5 - Separar CSS/JS  
Estado: implementada

## Roles aplicados

- Project Manager: mantuvo alcance sin migración de stack.
- Frontend Developer: extrajo CSS y JavaScript a archivos externos.
- QA Expert: validó carga, consola e interacciones críticas.
- Security Auditor: revisó que no se agreguen dependencias ni scripts externos.
- DevOps / Deployment Engineer: actualizó archivos necesarios para deploy.

## Objetivo

Mejorar mantenibilidad y cache granular sin cambiar arquitectura, framework ni comportamiento funcional.

## Implementación

Archivos creados:

- `assets/css/styles.css`
- `assets/js/main.js`

Archivo modificado:

- `index.html`

Cambios:

- El bloque `<style>` fue reemplazado por:

```html
<link rel="stylesheet" href="assets/css/styles.css">
```

- El script principal inline fue reemplazado por:

```html
<script src="assets/js/main.js" defer></script>
```

- El JSON-LD permanece inline en `index.html`, porque es metadata estructurada.
- Las funciones usadas por atributos inline (`switchTab`, `handleForm`, `toggleMenu`) se exponen explícitamente en `window` para conservar compatibilidad.

## QA ejecutado

Resultado: OK

Verificado:

- `index.html` responde HTTP 200.
- `assets/css/styles.css` responde HTTP 200 como `text/css`.
- `assets/js/main.js` responde HTTP 200 como `text/javascript`.
- CSS externo carga correctamente.
- JS externo ejecuta correctamente.
- Footer dinámico se actualiza.
- No hay errores ni warnings de consola.
- Tabs funcionan con click real.
- Filtros funcionan con click real.
- Formulario vacío muestra errores.
- Honeypot y estado accesible permanecen.
- Menú mobile abre/cierra y conserva `tabindex`.
- Sin overflow horizontal en desktop y mobile.

## Seguridad

- No se agregaron dependencias externas.
- No se agregaron secretos, tokens ni credenciales.
- No se agregaron scripts remotos.
- Separar JS/CSS deja el proyecto mejor preparado para una futura CSP más estricta.

## DevOps / deploy

Para deploy deben subirse:

```text
index.html
assets/css/styles.css
assets/js/main.js
assets/social/og-image.jpg
```

## Riesgos pendientes

- Persisten handlers inline en HTML. Una tarea futura podría reemplazarlos por `addEventListener` para preparar una CSP sin `unsafe-inline`.
- El proyecto sigue sin Git inicializado.

## Siguiente paso recomendado

Tarea 6 - Preparar control de versiones y estrategia de deploy.
