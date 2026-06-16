# 10 - Redisenio inspirado en InfoManager

Fecha: 2026-06-16

## Objetivo

Corregir la direccion visual anterior y acercar el sitio a una estetica mas clara, argentina, comercial y confiable, tomando como referencia `https://www.infomanager.com.ar/`.

## Decision visual

- Pasar de dark tech a base blanca/editorial.
- Mantener verde NexoLT como acento.
- Bajar glow, cyber y exceso de cards oscuras.
- Usar fotografias/visuales claros generados con IA.
- Evitar decir que NexoLT se dedica solo a pymes.
- Hablar a equipos, organizaciones y negocios de cualquier rubro.

## Secciones agregadas

- `Rubros`: comercio, servicios, logistica, salud, educacion, industria, administracion y equipos internos.
- `Integraciones`: pagos, WhatsApp/email, planillas/datos, APIs/sistemas.

## Imagenes generadas con IA

Herramienta usada: built-in `image_gen`.

Assets guardados:

- `assets/images/hero-argentina-software.jpg`
- `assets/images/rubros-software.jpg`
- `assets/images/integraciones-sistemas.jpg`

Los PNG originales generados se copiaron inicialmente y luego se descartaron del proyecto para no inflar el repositorio. La web usa JPG optimizados.

## Archivos modificados

- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/images/hero-argentina-software.jpg`
- `assets/images/rubros-software.jpg`
- `assets/images/integraciones-sistemas.jpg`

## QA local

Desktop:

- Fondo blanco activo.
- Nav con Rubros e Integraciones.
- Hero nuevo visible.
- 3 imagenes cargan correctamente.
- Sin errores de consola.
- Sin overflow horizontal.

Mobile 390x844:

- Sin overflow horizontal.
- Hero visual visible.
- Menu mobile abre y muestra Rubros e Integraciones.
- Imagenes cargan correctamente.
- Sin errores de consola.

## Seguridad

- No se agregaron scripts externos.
- No se agregaron dependencias.
- No se tocaron credenciales ni secretos.
- El formulario mantiene la validacion y endpoint existentes.

## Pendiente recomendado

- Revisar visualmente en Netlify cuando el deploy termine.
- Si se desea, reemplazar Open Graph por una imagen nueva alineada al estilo blanco.
