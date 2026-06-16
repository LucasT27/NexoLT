# 03 - Checklist QA y seguridad

Usar este checklist antes de cerrar cada tarea. Marcar resultados en el resumen final de la tarea.

## Datos de la tarea

- Tarea:
- Fecha:
- Responsable interno principal:
- Archivos modificados:

## QA funcional

- [ ] La página carga sin errores de consola.
- [ ] La navegación principal lleva a `Servicios`, `Enfoque`, `Herramientas`, `Nosotros` y `Contacto`.
- [ ] El CTA principal lleva a contacto.
- [ ] El footer navega correctamente.
- [ ] El menú mobile abre y cierra.
- [ ] El menú mobile se cierra con `Escape`.
- [ ] Al cerrar el menú mobile, los links ocultos no quedan en el orden de tabulación.
- [ ] Los tabs de "Cómo trabajamos" cambian contenido con mouse.
- [ ] Los tabs funcionan con teclado.
- [ ] Los filtros de herramientas actualizan las tarjetas visibles.

## QA formulario

- [ ] Formulario vacío muestra errores.
- [ ] Email inválido muestra error.
- [ ] Mensaje menor a 10 caracteres muestra error.
- [ ] Campos inválidos tienen `aria-invalid="true"`.
- [ ] Errores están asociados con `aria-describedby`.
- [ ] Botón entra en estado de carga al enviar datos válidos.
- [ ] Error de red o servicio muestra mensaje entendible.
- [ ] Éxito muestra confirmación entendible.
- [ ] No se pueden disparar envíos duplicados mientras el botón está deshabilitado.
- [ ] Existe honeypot `_gotcha` oculto para usuarios reales.
- [ ] El estado de envío se anuncia en una región accesible.

## QA responsive

- [ ] Desktop ancho: hero, navegación, secciones y footer no se superponen.
- [ ] Tablet: cards, tabs y formulario mantienen lectura clara.
- [ ] Mobile: no hay scroll horizontal.
- [ ] Mobile: el contenido del hero es legible sin depender del visual oculto.
- [ ] Textos largos no se salen de botones, cards o inputs.

## Accesibilidad

- [ ] Existe skip link.
- [ ] Existe un `main`.
- [ ] Cada sección importante tiene heading o label accesible.
- [ ] Controles interactivos tienen foco visible.
- [ ] Menú mobile actualiza `aria-expanded` y `aria-hidden`.
- [ ] Tabs actualizan `aria-selected` y `tabindex`.
- [ ] La experiencia respeta `prefers-reduced-motion`.
- [ ] Contraste visual suficiente para textos principales y CTAs.

## SEO y metadata

- [ ] `<title>` describe la marca y la oferta.
- [ ] `meta description` está presente.
- [ ] Canonical apunta al dominio correcto.
- [ ] Open Graph tiene título, descripción e imagen.
- [ ] Twitter card tiene título, descripción e imagen.
- [ ] La imagen social referenciada existe en el deploy.
- [ ] JSON-LD tiene email y URL correctos.

## Performance básica

- [ ] No se agregaron assets innecesarios.
- [ ] Imágenes nuevas están comprimidas.
- [ ] No se agregaron scripts externos sin justificar.
- [ ] Animaciones nuevas no bloquean interacción.
- [ ] La página sigue siendo usable con red lenta.

## Seguridad

- [ ] No se agregaron secretos, tokens o credenciales.
- [ ] Enlaces `target="_blank"` usan `rel="noopener noreferrer"`.
- [ ] Cambios del formulario no exponen datos sensibles.
- [ ] Endpoint externo está documentado si se modifica.
- [ ] No se agregó `eval`, HTML dinámico inseguro ni scripts de terceros sin revisión.
- [ ] No se agregó dependencia externa sin necesidad clara.

## DevOps / deploy

- [ ] El sitio corre con servidor local estático.
- [ ] Archivos nuevos necesarios para deploy están documentados.
- [ ] Si se modifica deploy, existe paso de rollback.
- [ ] Si se usan variables de entorno, están documentadas y no versionadas.

## Resultado

- Estado QA:
- Estado seguridad:
- Correcciones aplicadas:
- Riesgos pendientes:
- Próxima tarea recomendada:
