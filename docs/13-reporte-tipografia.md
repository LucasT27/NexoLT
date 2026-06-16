# 13 - Reporte tipografia

Fecha: 2026-06-16

## Decision

Se reemplazo la tipografia generica por una combinacion mas adecuada para una web B2B/software clara:

- Titulos y marca: `Manrope`
- Texto, navegacion, botones y formularios: `Inter`

## Motivo

- `Manrope` aporta una presencia moderna, amable y profesional para titulares.
- `Inter` esta optimizada para lectura en pantallas e interfaces.
- Ambas funcionan bien para textos en espanol y para una estetica limpia tipo producto/software.

## Implementacion

- Se agrego `next/font/google` en `src/app/layout.tsx`.
- Se definieron variables CSS:
  - `--font-display`
  - `--font-body`
- Se actualizaron estilos globales en `src/app/globals.css`.

## QA

- `npm run build` correcto.
- Desktop local sin errores de consola.
- Sin overflow horizontal.
- Fuente computada del body: `Inter`.
- Fuente computada del H1: `Manrope`.

## Seguridad / performance

- Las fuentes se cargan mediante `next/font/google`, optimizadas por Next.js.
- No se agregaron scripts externos manuales.
