# 18 - Reporte casos modelo

Fecha: 2026-06-18

## Objetivo

Agregar prueba conceptual sin inventar clientes reales: casos modelo que expliquen escenarios tipicos y como NexoLT podria resolverlos.

## Implementado

- Tres casos modelo:
  - Comercio con pedidos desordenados.
  - Servicios con consultas sin seguimiento.
  - Operacion interna con tareas repetitivas.
- Bloque compacto en home.
- Fichas desarrolladas en `/proyectos`.
- Cada caso incluye problema, solucion, flujo, resultado esperado y componentes.

## Archivos modificados

- `src/app/data.ts`
- `src/app/page.tsx`
- `src/app/proyectos/page.tsx`
- `src/app/globals.css`

## Archivos creados

- `docs/18-reporte-casos-modelo.md`

## QA

- `npm run build` correcto.
- `npm audit` sin vulnerabilidades.
- Home muestra 3 previews de casos modelo.
- `/proyectos` muestra 3 fichas desarrolladas.
- Las fichas indican "Caso modelo".
- `/proyectos` aclara que no son clientes reales ni casos publicados.
- Desktop sin overflow horizontal.

## Seguridad

- No se agregaron dependencias.
- No se agregaron datos de clientes reales.
- No se tocaron endpoints ni credenciales.
