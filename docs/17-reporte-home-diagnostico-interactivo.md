# 17 - Reporte home con diagnostico interactivo

Fecha: 2026-06-17

## Objetivo

Reducir la pagina principal y convertirla en una entrada interactiva que oriente al usuario segun su necesidad, evitando repetir el contenido de las paginas internas.

## Implementado

- Hero principal mas corto.
- Modulo interactivo "Que queres resolver primero?".
- Opciones:
  - Procesos manuales.
  - Una web que venda mejor.
  - Herramientas desconectadas.
  - Sistema interno.
  - No se por donde empezar.
- Recomendacion dinamica con CTA a la pagina correspondiente.
- Franja de tres metricas.
- Tres accesos rapidos: soluciones, implementacion y contacto.

## Archivos modificados

- `src/app/page.tsx`
- `src/app/data.ts`
- `src/app/globals.css`

## Archivos creados

- `src/app/home-diagnostic.tsx`
- `docs/17-reporte-home-diagnostico-interactivo.md`

## QA

- `npm run build` correcto.
- `npm audit` sin vulnerabilidades.
- Botones del diagnostico probados en navegador local.
- La opcion "Sistema interno" cambia la recomendacion y el CTA secundario a `/proyectos`.
- Desktop sin overflow horizontal.
- Mobile 390px sin overflow horizontal, navegacion visible y 5 opciones disponibles.
- CTAs internos verificados en el DOM.

## Seguridad

- No se agregaron dependencias.
- No se tocaron endpoints ni credenciales.
- La interaccion es local en cliente y no transmite datos.
