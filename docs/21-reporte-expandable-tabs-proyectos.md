# 21 - Reporte expandable tabs en proyectos

Fecha: 2026-06-18

## Objetivo

Integrar `expandable-tabs` de 21st/shadcn en `/proyectos` para ordenar cada caso modelo por pestañas.

## Implementado

- Wrapper `ModelCaseTabs`.
- Tabs por caso:
  - Problema.
  - Solucion.
  - Flujo.
  - Demo.
  - Resultado.
- Las demos interactivas existentes quedan dentro del tab Demo.
- `ExpandableTabs` ahora acepta `selectedIndex`.
- Se agregaron `aria-label` y `title` a cada tab para accesibilidad.

## Archivos modificados

- `src/app/proyectos/page.tsx`
- `src/app/globals.css`
- `src/components/ui/expandable-tabs.tsx`

## Archivos creados

- `src/app/model-case-tabs.tsx`
- `docs/21-reporte-expandable-tabs-proyectos.md`

## QA

- `npm run build` correcto.
- `npm audit` sin vulnerabilidades.
- `/proyectos` muestra 3 casos.
- Cada caso tiene 5 tabs.
- El tab Demo muestra la demo interactiva.
- Tabs con nombre accesible.
- Desktop sin overflow horizontal.

## Seguridad

- No se agregaron endpoints.
- No se transmiten datos.
- La interaccion es local en cliente.

## Riesgo / observacion

- `/proyectos` aumento su JS inicial porque `expandable-tabs` usa Framer Motion. Aceptable para esta iteracion, pero se puede optimizar si se prioriza performance extrema.
