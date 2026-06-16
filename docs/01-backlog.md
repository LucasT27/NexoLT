# 01 - Backlog priorizado

Este backlog sigue el flujo definido en `AGENTS.md`: Diagnóstico → Backlog → Tarea 1 → Implementación → QA → Corrección → Tarea 2 → Deploy → Documentación.

## Prioridad P0

### Tarea 1 - Crear documentación operativa y checklist QA/security

Roles líderes: Project Manager, QA Expert, Security Auditor, DevOps / Deployment Engineer

Objetivo:
- Dejar una guía clara para ejecutar, probar, revisar seguridad y desplegar la landing.

Criterios de aceptación:
- Existe `README.md` con objetivo del proyecto, estructura, ejecución local, deploy y rollback.
- Existe `docs/03-checklist-qa-security.md` con pruebas manuales por flujo crítico.
- El checklist incluye responsive, formulario, navegación, accesibilidad, performance básica y seguridad.
- Se verifica que los documentos sean UTF-8 válidos.

Riesgos:
- Bajo. No toca comportamiento productivo.

### Tarea 2 - QA visual y funcional en navegador local

Roles líderes: QA Expert, UX Researcher, UI Designer

Objetivo:
- Validar el estado real de la landing en desktop y mobile.

Criterios de aceptación:
- Probar carga sin errores de consola.
- Probar navegación principal y footer.
- Probar menú mobile abierto/cerrado y Escape.
- Probar tabs y filtros.
- Probar formulario vacío, inválido y válido sin enviar datos reales de cliente.
- Registrar hallazgos en `docs/04-reporte-qa.md`.

Riesgos:
- Bajo. Puede requerir ajustes si aparecen bugs.

## Prioridad P1

### Tarea 3 - Optimizar performance de assets e imágenes sociales

Roles líderes: Frontend Developer, UI Designer, DevOps / Deployment Engineer

Objetivo:
- Reducir peso de imágenes y preparar variantes adecuadas para social preview.

Criterios de aceptación:
- Crear asset Open Graph recomendado 1200x630 o ajustar metadata a estrategia final.
- Comprimir PNG o generar WebP/AVIF cuando corresponda.
- Documentar assets fuente y derivados.
- Verificar que la metadata social apunte a archivos existentes en deploy.

Riesgos:
- Medio. Cambios visuales o metadata pueden afectar previews.

### Tarea 4 - Mejorar hardening del formulario de contacto

Roles líderes: Security Auditor, API Designer, Frontend Developer

Objetivo:
- Reducir spam y mejorar estados del formulario.

Criterios de aceptación:
- Evaluar honeypot o mecanismo anti-spam compatible con Formspree.
- Agregar estado accesible de éxito/error persistente.
- Evitar envíos dobles.
- Documentar contrato de datos enviados.

Riesgos:
- Medio. El endpoint externo puede tener restricciones.

### Tarea 5 - Separar CSS/JS si el mantenimiento lo justifica

Roles líderes: Frontend Developer, Project Manager

Objetivo:
- Mejorar mantenibilidad sin cambiar stack.

Criterios de aceptación:
- Extraer `styles.css` y `main.js` si el beneficio supera el costo.
- Mantener funcionamiento idéntico.
- Actualizar documentación y QA.

Riesgos:
- Medio. Puede introducir errores si se separa sin pruebas.

## Prioridad P2

### Tarea 6 - Preparar control de versiones y estrategia de deploy

Roles líderes: DevOps / Deployment Engineer, Project Manager

Objetivo:
- Dejar el proyecto listo para trabajo profesional con historial y rollback.

Criterios de aceptación:
- Inicializar Git solo si el usuario lo confirma.
- Definir rama principal y flujo de cambios.
- Documentar deploy elegido: Netlify, Vercel, GitHub Pages u otro.
- Documentar rollback.

Riesgos:
- Medio. Requiere decisión del usuario sobre proveedor y repositorio.

### Tarea 7 - Evaluar migración futura a framework

Roles líderes: Product Manager, Frontend Developer, DevOps / Deployment Engineer

Objetivo:
- Decidir si conviene mantener HTML estático o migrar a Vite/React/Next.js.

Criterios de aceptación:
- Solo recomendar migración si hay necesidad de componentes, CMS, blog, rutas, analytics avanzado o backend.
- Documentar costo/beneficio.

Riesgos:
- Alto si se migra sin necesidad.

## Orden actual de ejecución

1. Tarea 1 - Crear documentación operativa y checklist QA/security.
2. QA y seguridad de Tarea 1.
3. Recién después avanzar a Tarea 2.
