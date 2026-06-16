# 14 - Reporte formulario real

Fecha: 2026-06-16

## Objetivo

Hacer que el formulario deje de ser solo una respuesta local y pueda capturar consultas reales en Netlify Forms sin agregar credenciales.

## Implementado

- Formulario visible `contacto` conectado a Netlify Forms.
- Formulario oculto estatico para que Netlify lo detecte durante el build.
- Honeypot `bot-field`.
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

- `src/app/page.tsx`
- `src/app/contact-form.tsx`
- `src/app/globals.css`

## QA

- `npm run build` correcto.
- `npm audit` sin vulnerabilidades.
- Desktop local sin errores de consola.
- Sin overflow horizontal.
- Formulario visible tiene `name="contacto"` y `data-netlify`.
- Formulario oculto de deteccion existe.
- Honeypot existe.
- Validacion local muestra error sin enviar cuando los campos estan vacios.

## Seguridad

- No se agregaron secretos.
- No se agregaron proveedores externos.
- No se envio un lead real de prueba al panel de Netlify sin confirmacion del usuario.

## Pendiente

- Confirmar en Netlify que aparece el formulario `contacto`.
- Enviar una prueba real desde la web publica si el usuario lo autoriza.
- Si se necesita email automatico, conectar notificaciones de Netlify Forms o proveedor externo.
