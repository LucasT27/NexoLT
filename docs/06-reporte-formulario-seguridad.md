# 06 - Reporte hardening de formulario

Fecha: 2026-06-15  
Tarea: Tarea 4 - Mejorar hardening del formulario de contacto  
Endpoint: `https://formspree.io/f/mbdwbgag`

## Roles aplicados

- Business Analyst: documentó contrato de datos.
- Frontend Developer: implementó honeypot y estado accesible.
- API Designer: mantuvo payload explícito hacia Formspree.
- Security Auditor: revisó anti-spam, secretos y superficie de datos.
- QA Expert: validó estados vacío, honeypot, metadata DOM y carga local.
- Project Manager: mantuvo alcance acotado a una tarea.

## Fuente técnica

Se usó documentación oficial de Formspree sobre honeypot spam filtering. Formspree indica que el campo `_gotcha`, si llega con contenido, se interpreta como envío de bot y se ignora silenciosamente.

Fuente: https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering

## Implementación

Archivo modificado:

- `index.html`

Cambios:

- Se agregó campo honeypot:

```html
<input type="text" id="f-gotcha" name="_gotcha" tabindex="-1" autocomplete="off">
```

- El campo está oculto con `.form-honeypot`.
- Se agregó región accesible:

```html
<p class="form-status" id="form-status" role="status" aria-live="polite"></p>
```

- Se agregó `setFormStatus(type, message)`.
- El formulario ahora informa:
  - errores de validación,
  - estado enviando,
  - éxito,
  - error del servicio,
  - error de conexión.
- El payload enviado a Formspree incluye `_gotcha`.
- Si `_gotcha` tiene valor antes de enviar, el handler sale silenciosamente.

## Contrato actualizado

Datos enviados:

| Campo | Tipo | Regla |
| --- | --- | --- |
| `nombre` | string | mínimo 2 caracteres |
| `email` | string | formato email básico |
| `mensaje` | string | mínimo 10 caracteres |
| `_gotcha` | string | debe estar vacío |

## QA

Resultado: OK

Verificado:

- Formulario vacío marca los tres campos como inválidos.
- Los errores siguen asociados con `aria-describedby`.
- `form-status` muestra mensaje de revisión cuando hay campos inválidos.
- Honeypot existe, está oculto y tiene `tabindex="-1"`.
- El estado accesible usa `role="status"` y `aria-live="polite"`.
- La página carga localmente sin errores de consola.

## Seguridad

Resultado: OK

- No se agregaron secretos, tokens ni credenciales.
- No se agregaron dependencias externas.
- No se modificó el endpoint.
- No se agregó CAPTCHA ni servicios nuevos.
- El honeypot reduce spam automatizado sin fricción para usuarios reales.

## Riesgos pendientes

- El honeypot no reemplaza controles server-side avanzados.
- Formspree sigue siendo dependencia externa.
- Bots sofisticados podrían evitar `_gotcha`; Formspree también ofrece reglas personalizadas en planes/configuraciones avanzadas.

## Siguiente paso recomendado

Tarea 6 - Preparar control de versiones y estrategia de deploy, o bien confirmar si se quiere avanzar antes con una separación CSS/JS.
