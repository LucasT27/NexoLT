# 14 - Reporte formulario real

Fecha: 2026-06-16

## Objetivo

Hacer que el formulario capture consultas reales con Formspree, manteniendo Netlify solo como hosting.

## Implementado

- Formulario visible `contacto` conectado a Formspree.
- Endpoint restaurado: `https://formspree.io/f/mbdwbgag`.
- Honeypot `_gotcha`.
- Validacion cliente antes de enviar:
  - nombre minimo 2 caracteres
  - email valido
  - mensaje minimo 10 caracteres
- Estados de UI:
  - idle
  - loading
  - success
  - error

## Archivos modificados

- `src/app/contact-form.tsx`

## Archivos eliminados

- `src/app/api/contact/route.ts`
- `public/__forms.html`

## QA

- `npm run build` correcto.
- `npm audit` sin vulnerabilidades.
- Desktop local sin errores de consola.
- Sin overflow horizontal.
- Formulario visible tiene `name="contacto"` sin atributos `data-netlify`.
- No queda formulario estatico de Netlify Forms.
- Honeypot `_gotcha` existe.
- Validacion local muestra error sin enviar cuando los campos estan vacios.

## Seguridad

- No se agregaron secretos.
- No se agregaron proveedores externos.
- Se usa el proveedor ya definido por el proyecto: Formspree.
- No se envio un lead real de prueba a Formspree sin confirmacion del usuario.

## Pendiente

- Confirmar que el endpoint de Formspree `mbdwbgag` sigue activo en la cuenta.
- Enviar una prueba real desde la web publica si el usuario lo autoriza.
- Si se necesita email automatico, revisar notificaciones dentro de Formspree.
