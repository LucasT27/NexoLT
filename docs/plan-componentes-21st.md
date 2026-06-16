# Plan de componentes 21st.dev

## Diagnostico del proyecto

- Tipo de proyecto: sitio estatico.
- Stack detectado: HTML, CSS y JavaScript vanilla.
- Frameworks detectados: no hay Next.js, React, Vite, Tailwind CSS ni TypeScript.
- shadcn/ui: no instalado. No existe `package.json`, `components.json`, carpeta `src/`, `app/`, `pages/` ni configuracion Tailwind.
- Deploy: Netlify con `publish = "."` en `netlify.toml`.

## Componentes a instalar

No se van a instalar componentes via `npx shadcn@latest add` en esta etapa porque el proyecto no tiene la base tecnica requerida por shadcn/ui y 21st.dev: React, Tailwind y configuracion de componentes.

Adaptacion definida:

- Cybernetic Bento Grid: recreacion manual en HTML/CSS para la seccion de servicios.
- Grid Background: recreacion manual con capas CSS y fondo oscuro.
- Spotlight Card: recreacion manual con gradientes radiales y hover.
- Border Beam: recreacion manual con pseudo-elementos CSS.
- Shine Border: recreacion manual con borde sutil y glow teal.
- Blur Fade: ya existe patron `reveal`; se conserva y se ajusta si hace falta.
- Animated Button: se conserva el ripple actual y se mejora visualmente con foco/hover.

Componentes diferidos para etapas siguientes:

- Bento Grid para proceso.
- Stats Cards para impacto.
- Bento minimal para proyectos.
- AI Prompt Box para CTA visual.
- FinalCTA con glow teal.

## Archivos a modificar

Etapa 1:

- `index.html`: Hero principal y seccion `#servicios`.
- `assets/css/styles.css`: estilos Dark Tech Bento Premium, grid sutil, hero, cards y responsive.
- `docs/componentes-implementados.md`: resumen posterior a QA.

Etapas siguientes:

- `index.html`: proceso, metricas, proyectos, AI Prompt CTA y CTA final.
- `assets/css/styles.css`: estilos de las nuevas secciones.
- `assets/js/main.js`: solo si se requiere interaccion adicional accesible.

## Riesgos

- La instalacion directa de componentes 21st.dev romperia el flujo actual si se fuerza sin migrar a React/Tailwind.
- Migrar a Next/Vite en esta tarea aumentaria el alcance y podria afectar deploy actual.
- Las animaciones deben respetar `prefers-reduced-motion`.
- El sitio publicado en Netlify puede seguir mostrando una version anterior si Netlify no esta conectado al repo o si no se dispara un redeploy.
- Hay que mantener anclas, formulario y navegacion movil existentes.

## Orden de implementacion

1. Documentar este plan antes de tocar codigo.
2. Implementar Etapa 1: `HeroSection` adaptado y `ServicesBento` manual.
3. Ejecutar QA visual responsive, accesibilidad basica y revision de seguridad.
4. Corregir hallazgos de Etapa 1.
5. Documentar componentes implementados.
6. Versionar y subir cambios.
7. Continuar con Etapa 2: `ProcessSection` + `ImpactStats`.
