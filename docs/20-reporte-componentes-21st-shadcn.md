# 20 - Reporte componentes 21st/shadcn

Fecha: 2026-06-18

## Objetivo

Descargar componentes seleccionados desde 21st.dev para poder integrarlos progresivamente en NexoLT.

## Componentes instalados

- `expandable-tabs`
- `form-1`
- `background-paths`
- `display-cards`
- `bento-grid`
- `tubelight-navbar`

## Configuracion agregada

- `components.json`
- `tailwind.config.ts`
- `postcss.config.mjs`
- Alias `@/*` en `tsconfig.json`
- Utilidad `cn` en `src/lib/utils.ts`
- Componentes base en `src/components`

## Ajustes necesarios

- Se desactivo `preflight` para evitar que Tailwind resetee el diseño actual.
- Se retiraron imports globales incompatibles de shadcn/Tailwind v4 para mantener Tailwind v3 estable.
- Se corrigieron tipos menores en componentes descargados para que `next build` pase.

## QA

- `npm run build` correcto.
- `npm audit` sin vulnerabilidades.
- Los componentes quedaron descargados pero todavia no integrados en paginas productivas.

## Siguiente paso recomendado

Integrar uno por vez:

1. `expandable-tabs` en `/proyectos`.
2. `form-1` adaptado a Formspree en `/contacto`.
3. `bento-grid` o `display-cards` en `/soluciones`.
4. `background-paths` como recurso visual controlado si no afecta performance.
5. `tubelight-navbar` solo si mejora la navegacion actual.
