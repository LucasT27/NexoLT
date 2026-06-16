# 09 - Reporte deploy Netlify

Fecha: 2026-06-15  
Tarea: Preparar deploy en sitio Netlify existente  
Estado: configuración agregada, pendiente URL pública final

## Roles aplicados

- DevOps / Deployment Engineer: agregó configuración Netlify.
- Security Auditor: revisó que no se agreguen secretos.
- QA Expert: validó archivos y estado Git.
- Project Manager: dejó pasos claros para conectar el sitio ya creado.

## Contexto

El sitio ya existe en Netlify. El repositorio GitHub ya está publicado en:

```text
https://github.com/LucasT27/NexoLT.git
```

## Implementación

Archivo creado:

- `netlify.toml`

Configuración:

- Publish directory: raíz del proyecto (`.`).
- Build command: vacío.
- Cache largo para `/assets/*`.
- Revalidación para HTML y raíz.

## Configuración recomendada en Netlify

En el sitio existente:

1. Ir a **Site configuration**.
2. Entrar en **Build & deploy**.
3. Conectar el repositorio `LucasT27/NexoLT`.
4. Usar rama de producción: `main`.
5. Build command: vacío.
6. Publish directory: `.`.
7. Guardar y ejecutar deploy.

Netlify debería leer `netlify.toml` y usar esos valores.

## Variables de entorno

No requiere variables de entorno.

## Archivos publicados

```text
index.html
assets/css/styles.css
assets/js/main.js
assets/social/og-image.jpg
*.png
```

## QA post-deploy

Cuando tengas la URL pública:

- Abrir la URL pública.
- Verificar título `NexoLT — Soluciones Digitales`.
- Probar navegación.
- Probar menú mobile.
- Probar formulario vacío.
- Verificar que `assets/css/styles.css` y `assets/js/main.js` carguen 200.
- Verificar que `assets/social/og-image.jpg` cargue 200.
- Revisar consola del navegador.

## Pendiente

- Completar URL pública de Netlify en este documento y en `README.md`.
- Configurar dominio personalizado si corresponde.
- Probar Open Graph con la URL final cuando el dominio esté activo.
