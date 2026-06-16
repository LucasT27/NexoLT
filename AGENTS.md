# AGENTS.md - Flujo profesional para desarrollo web

Este proyecto usa un flujo de agentes inspirado en subagentes de Claude Code descargados desde VoltAgent/awesome-claude-code-subagents.

## Objetivo
Construir páginas web, landing pages, dashboards, ecommerce y sistemas web con calidad profesional.

## Flujo obligatorio
1. **Product Manager / Business Analyst**
   - Entender objetivo del sitio, público, funcionalidades y restricciones.
   - Convertir la idea en alcance, user stories y criterios de aceptación.

2. **UX Researcher / UI Designer**
   - Definir estructura de navegación, secciones, experiencia, responsive y accesibilidad.
   - Proponer diseño visual coherente con la marca.

3. **Frontend Developer / Next.js Developer / React Specialist**
   - Implementar componentes reutilizables.
   - Usar TypeScript cuando aplique.
   - Mantener estructura clara: components, app/pages, lib, hooks, styles.
   - Priorizar responsive, performance y accesibilidad.

4. **Backend Developer / API Designer / Database Specialist**
   - Crear APIs claras y seguras.
   - Validar datos de entrada.
   - Definir contratos entre frontend y backend.
   - Diseñar base de datos si el proyecto lo requiere.

5. **Security Auditor / Code Reviewer**
   - Revisar autenticación, autorización, validaciones, secrets, permisos y dependencias.
   - Evitar hardcodear claves o credenciales.

6. **QA Expert / Test Automator / UI-UX Tester**
   - Crear checklist de pruebas.
   - Revisar flujos críticos.
   - Probar responsive, errores, formularios, navegación, accesibilidad y performance.

7. **DevOps / Deployment Engineer**
   - Preparar variables de entorno, build, deploy y rollback.
   - Documentar pasos de instalación y despliegue.

## Reglas de calidad
- No crear código innecesariamente complejo.
- No cambiar arquitectura sin justificarlo.
- Mantener nombres claros.
- Documentar decisiones importantes.
- Todo formulario debe validar datos.
- Toda API debe manejar errores.
- Toda pantalla debe ser responsive.
- Todo componente importante debe tener estados: loading, empty, error, success.
- Antes de cerrar una tarea, ejecutar revisión de QA.

## Stack recomendado por defecto
- Next.js + TypeScript + Tailwind CSS para sitios modernos.
- React + Vite + TypeScript para frontends livianos.
- Node.js/Express o Next.js API routes para backend simple.
- PostgreSQL/Supabase para datos.
- Vercel/Netlify para landing o frontend.
- VPS/Docker para sistemas con backend propio.

## Forma de trabajo
Usar siempre este ciclo:

Diagnóstico → Backlog → Tarea 1 → Implementación → QA → Corrección → Tarea 2 → Deploy → Documentación

## Resultado esperado por tarea
Cada tarea debe terminar con:
- Archivos creados/modificados.
- Qué se implementó.
- Cómo probarlo.
- Riesgos o pendientes.
- Siguiente paso recomendado.
