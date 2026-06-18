# Tarea 23 - Proyectos reales y demo de software

## Roles aplicados
- Product Manager / Business Analyst: se reemplazaron casos genericos por proyectos reales aportados desde LinkedIn/capturas.
- UX Researcher / UI Designer: se definio una presentacion con contexto, tabs de lectura y una demo visual visible al costado.
- Frontend Developer: se actualizaron datos, pagina de proyectos, tabs y componente de demo.
- QA Expert: se valido build, desktop, mobile, overflow y consola.
- Security Auditor: se ejecuto auditoria de dependencias y no se agregaron secretos ni datos sensibles.

## Que se implemento
- Se incorporaron cuatro proyectos reales:
  - Fausto Motos ERP.
  - CannaERP.
  - HDV Store.
  - HDV Streaming.
- La pagina `/proyectos` ahora habla de trabajos realizados y no de casos modelo.
- La home resume proyectos reales en lugar de escenarios inventados.
- Cada proyecto muestra tabs de `Problema`, `Solucion`, `Flujo` y `Resultado`.
- Cada proyecto incluye una demo visual tipo computadora/notebook visible al costado.
- La demo navega automaticamente entre modulos del software y tambien permite click manual en los modulos.

## Archivos modificados
- `src/app/data.ts`
- `src/app/page.tsx`
- `src/app/proyectos/page.tsx`
- `src/app/model-case-tabs.tsx`
- `src/app/model-case-demo.tsx`
- `src/app/globals.css`

## QA ejecutado
- `npm run build`: OK.
- `npm audit --audit-level=moderate`: OK, 0 vulnerabilidades.
- Browser QA desktop en `/proyectos`: 4 proyectos visibles, 4 demos de software visibles, sin overflow horizontal y sin errores de consola.
- Browser QA mobile 390x844: demos visibles, layout apilado correctamente, sin overflow horizontal.

## Riesgos o pendientes
- Los textos salen de capturas de LinkedIn; conviene revisar nombres, alcance y wording antes de dejarlo como portfolio definitivo.
- Si hay capturas reales de los programas, se puede reemplazar la demo ficticia por pantallas mas fieles sin exponer datos sensibles.

## Siguiente paso recomendado
Crear una seccion individual por proyecto o expandir `/proyectos` con links ancla para poder compartir cada caso de forma directa.
