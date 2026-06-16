# 09 - Reporte deploy Netlify

Fecha: 2026-06-15  
Tarea: Preparar deploy en sitio Netlify existente  
Estado: URL pública registrada, pendiente redeploy desde GitHub

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

URL pública:

```text
https://nexolt.netlify.app/
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

## QA post-deploy

Fecha de verificación: 2026-06-15

Resultado actual: requiere redeploy desde GitHub.

Verificado:

| URL | Resultado |
| --- | --- |
| `https://nexolt.netlify.app/` | 200 OK |
| `https://nexolt.netlify.app/assets/css/styles.css?v=20260615` | 404 |
| `https://nexolt.netlify.app/assets/js/main.js?v=20260615` | 404 |
| `https://nexolt.netlify.app/assets/social/og-image.jpg` | 404 |

Hallazgo:

La home pública todavía sirve una versión anterior con CSS inline. Eso indica que el sitio de Netlify aún no desplegó el commit actual de GitHub (`9ff4485 chore: add Netlify deploy config`) o sigue usando un deploy manual viejo.

Acción requerida en Netlify:

1. Entrar al sitio `nexolt`.
2. Ir a **Site configuration → Build & deploy**.
3. Confirmar que esté conectado al repo `LucasT27/NexoLT`.
4. Confirmar production branch `main`.
5. Confirmar publish directory `.`.
6. Ejecutar **Trigger deploy → Deploy site**.
7. Al terminar, volver a probar los assets `/assets/...`.

## Pendiente

- Ejecutar redeploy desde GitHub para publicar la versión actual.
- Configurar dominio personalizado si corresponde.
- Probar Open Graph con la URL final cuando el dominio esté activo.

## Revalidacion publica

Fecha de verificacion: 2026-06-16

Resultado actual: deploy publico actualizado correctamente.

Commit validado:

```text
339ab9a feat: add projects prompt and final cta
```

Verificado:

| URL | Resultado |
| --- | --- |
| `https://nexolt.netlify.app/` | 200 OK |
| `https://nexolt.netlify.app/assets/css/styles.css?v=20260616-21st3` | 200 OK |
| `https://nexolt.netlify.app/assets/js/main.js?v=20260616-21st3` | 200 OK |

Contenido publicado:

- Hero actualizado.
- 6 servicios.
- 4 impact stats.
- 5 cards de proceso.
- 4 proyectos destacados.
- AI Prompt CTA.
- Final CTA.
- Formulario de contacto existente.

QA publico:

- Desktop: sin errores de consola y sin overflow horizontal.
- Mobile 390x844: sin errores de consola, sin overflow horizontal y menu movil visible.
- El titulo del hero resuelve correctamente despues de la animacion inicial.

Pendiente actualizado:

- Configurar dominio personalizado si corresponde.
- Probar Open Graph con la URL final cuando el dominio este activo.
