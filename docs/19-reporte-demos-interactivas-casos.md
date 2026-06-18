# 19 - Reporte demos interactivas en casos modelo

Fecha: 2026-06-18

## Objetivo

Mostrar los casos modelo con una capa visual interactiva para que el usuario entienda mejor el flujo de cada solucion.

## Implementado

- Demo de comercio: pedido que se mueve por estados del tablero.
- Demo de servicios: consulta que avanza por etapas de seguimiento.
- Demo de automatizacion: flujo de datos entre tareas.
- Controles "Anterior" y "Siguiente" para avanzar los estados.

## Archivos modificados

- `src/app/data.ts`
- `src/app/proyectos/page.tsx`
- `src/app/globals.css`

## Archivos creados

- `src/app/model-case-demo.tsx`
- `docs/19-reporte-demos-interactivas-casos.md`

## QA

- `npm run build` correcto.
- `npm audit` sin vulnerabilidades.
- `/proyectos` muestra 3 demos.
- Comercio y servicios usan tablero de estados.
- Automatizacion usa flujo de datos.
- Boton "Siguiente" cambia el estado activo.
- Desktop y mobile sin overflow horizontal.

## Seguridad

- No se agregaron dependencias.
- No se transmiten datos.
- La interaccion corre localmente en cliente.
