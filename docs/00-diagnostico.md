# 00 - Diagnóstico del proyecto NexoLT

Fecha: 2026-06-15  
Fuente principal: `AGENTS.md` del proyecto  
Estado: landing estática existente en `index.html`

## Resumen ejecutivo

NexoLT tiene una landing one-page funcional para comunicar servicios de análisis, desarrollo y acompañamiento digital. El proyecto está compuesto por un único archivo HTML con CSS y JavaScript inline, más cinco imágenes PNG. No hay framework, proceso de build, package manager, repositorio Git inicializado ni documentación operativa de ejecución/despliegue.

La página ya incluye buenas bases: SEO básico, Open Graph, JSON-LD, navegación por secciones, skip link, responsive, formulario con validación JavaScript, integración Formspree, estados visuales y varias mejoras de accesibilidad recientes. El siguiente foco profesional debe ser ordenar documentación, QA, performance de assets, seguridad del formulario y preparación de despliegue.

## Estado por rol

### Product Manager

Objetivo inferido: convertir visitantes en conversaciones comerciales para proyectos digitales a medida.

Público probable:
- Empresas, negocios y emprendedores de Argentina.
- Personas que tienen procesos manuales, necesidades de automatización, desarrollo web o sistemas internos.

Propuesta de valor actual:
- "Si tiene solución, no es un problema."
- Soluciones digitales funcionales, diagnóstico previo, acompañamiento e iteración.

Conversión principal:
- Formulario de contacto.
- Email directo.
- Instagram.

### Business Analyst

Alcance actual:
- Landing institucional one-page.
- Secciones: inicio, servicios, enfoque, herramientas, nosotros, contacto y footer.
- Formulario conectado a Formspree.

Fuera de alcance actual:
- Backend propio.
- Panel administrativo.
- Base de datos.
- Blog o CMS.
- Captura avanzada de leads.

Criterios de aceptación actuales:
- La landing debe cargar como archivo estático o en hosting estático.
- La navegación debe llevar a cada sección.
- El formulario debe validar nombre, email y mensaje antes de enviar.
- El contacto visible debe coincidir con metadata estructurada.
- La experiencia debe ser usable en desktop y mobile.

### UX Researcher

Fortalezas:
- Estructura narrativa clara: problema, servicios, proceso, herramientas, confianza y contacto.
- CTA visible en hero y navegación.
- Flujo de lectura lógico para una landing de servicios.

Riesgos UX:
- Mucha animación puede distraer o afectar performance en equipos modestos.
- El hero visual se oculta en mobile; conviene verificar que el primer viewport mobile conserve impacto suficiente.
- El formulario no muestra un estado persistente de éxito fuera del texto del botón.

### UI Designer

Fortalezas:
- Identidad visual consistente: fondo oscuro, verde acento, tipografías Syne y DM Sans.
- Jerarquía visual marcada.
- Componentes visuales diferenciados: cards, tabs, chips, dashboard hero.

Riesgos UI:
- CSS está inline y el archivo es grande, lo que dificulta mantenimiento.
- Uso de emojis como iconos: rápido y expresivo, pero puede variar visualmente por sistema operativo.
- Assets PNG pesados no se usan de forma directa en la página salvo metadata social; conviene optimizar y ordenar.

### Frontend Developer

Stack actual:
- HTML, CSS y JavaScript vanilla en `index.html`.
- Google Fonts.
- Formspree como servicio externo.

Fortalezas técnicas:
- Sin dependencias de build.
- Interacciones implementadas localmente.
- Validación básica de formulario.
- Mejoras de accesibilidad en menú mobile, cursor custom y errores de formulario.

Riesgos técnicos:
- Un único archivo de 1600+ líneas reduce mantenibilidad.
- JavaScript inline y handlers inline (`onclick`, `onsubmit`) complican una futura política CSP estricta.
- No hay tests automatizados ni linting.
- No hay documentación de ejecución local.

### Backend Developer / API Designer / Database Specialist

Estado:
- No existe backend propio ni base de datos.
- El envío de contacto depende de Formspree (`https://formspree.io/f/mbdwbgag`).

Riesgos:
- El contrato del formulario depende de un tercero.
- No hay control propio de rate limiting, anti-spam o almacenamiento.
- No hay variables de entorno porque el proyecto es estático.

Recomendación:
- Mantener Formspree mientras sea suficiente.
- Si crece el sitio, migrar a endpoint propio o servicio con anti-spam configurable.

### Security Auditor

Fortalezas:
- No se detectan claves privadas hardcodeadas.
- Enlaces externos a Instagram usan `rel="noopener noreferrer"`.
- Formulario no envía credenciales ni datos sensibles de alto riesgo.

Riesgos:
- Form endpoint público puede recibir spam.
- JavaScript inline dificulta adoptar CSP fuerte.
- No hay documentación de revisión de seguridad antes de deploy.

### QA Expert

Estado:
- No hay checklist formal.
- No hay pruebas automatizadas.
- Se puede verificar manualmente con navegador local.

Flujos críticos:
- Navegación por anclas.
- Menú mobile.
- Tabs de enfoque.
- Filtros de herramientas.
- Formulario: vacío, inválido, válido, error de red y éxito.
- Responsive desktop/mobile.
- SEO/social metadata.

### DevOps / Deployment Engineer

Estado:
- Proyecto desplegable como sitio estático.
- Ya existe `README.md` operativo desde la Tarea 1.
- No hay scripts, build ni control de versiones local inicializado.
- No hay Git inicializado en esta carpeta.

Opciones de deploy:
- Netlify, Vercel, GitHub Pages o hosting estático tradicional.
- Servidor local simple: `python -m http.server`.

### Project Manager

Situación:
- El proyecto necesita orden operativo antes de escalar.
- Conviene trabajar en tareas pequeñas, cerradas con QA y revisión de seguridad.

Regla de avance:
- No abordar migración a framework hasta justificarlo por necesidad real.
- Primero profesionalizar documentación, QA, performance y deploy del sitio actual.

## Hallazgos principales

1. Proyecto funcional pero sin documentación operativa.
2. Arquitectura simple y adecuada para landing, aunque poco mantenible si crece.
3. Formulario funcional con dependencia externa.
4. Assets PNG grandes; hay oportunidad clara de performance.
5. Falta checklist QA/security/deploy antes de publicar cambios.
6. No hay control de versiones en la carpeta actual.

## Recomendación inmediata

Mantener el stack estático por ahora. Antes de rediseñar o migrar, crear documentación mínima, checklist QA, revisar mobile/formulario en browser y optimizar assets usados para metadata/social preview.
