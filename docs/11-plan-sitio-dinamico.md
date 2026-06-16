# 11 - Plan para convertir NexoLT en sitio dinamico

Fecha: 2026-06-16

## Diagnostico

El proyecto actual es un sitio estatico compuesto por:

- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- imagenes en `assets/images`
- deploy en Netlify con publish directory `.`

No existe:

- `package.json`
- framework frontend
- backend propio
- API interna
- CMS
- base de datos
- sistema de componentes

## Que significa "dinamico" para esta etapa

En esta migracion se toma "dinamico" como:

- Sitio renderizado por una app Next.js.
- Componentes reutilizables.
- Contenido administrado desde datos estructurados internos.
- Formularios preparados para API propia.
- Arquitectura lista para sumar CMS, base de datos o panel administrativo.

No se implementa todavia un panel admin ni base de datos en la primera tarea, porque eso requiere definir permisos, modelo de datos y operacion.

## Stack propuesto

- Next.js
- React
- TypeScript
- CSS global inicial migrado desde el sitio actual
- Netlify con build `npm run build`

## Backlog priorizado

1. Crear base Next.js + TypeScript.
2. Migrar landing actual a componentes React manteniendo estilo blanco actual.
3. Mover contenido repetible a datos estructurados: servicios, rubros, integraciones, proceso, proyectos.
4. Crear API interna para contacto.
5. Evaluar CMS liviano o panel admin para editar contenido.
6. QA responsive, accesibilidad y seguridad.
7. Ajustar deploy Netlify para Next.js.

## Tarea 1

Crear la base dinamica Next.js sin romper el sitio actual:

- Agregar `package.json`.
- Agregar estructura `src/app`.
- Agregar componentes base.
- Reutilizar assets existentes.
- Mantener rutas publicas.
- Preparar build.

## Riesgos

- Netlify debe cambiar de sitio estatico a build Next.js.
- El formulario actual usa Formspree; migrarlo a API propia requiere variables de entorno o proveedor de email.
- Migrar todo el HTML en una sola tarea aumenta riesgo de errores visuales.
- Si se agrega CMS/base de datos, hay que definir autenticacion y permisos.

## Criterios de aceptacion de Tarea 1

- `npm run build` funciona.
- La home renderiza desde Next.js.
- Los assets se cargan.
- No hay errores de consola.
- El deploy queda preparado para Netlify.
