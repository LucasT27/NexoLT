# 05 - Reporte performance de assets

Fecha: 2026-06-15  
Tarea: Tarea 3 - Optimizar performance de assets e imágenes sociales  
URL local usada: `http://127.0.0.1:4173/index.html`

## Roles aplicados

- Product Manager: mantuvo foco en conversión y presencia social.
- UI Designer: validó composición de imagen social coherente con marca.
- Frontend Developer: actualizó metadata y rutas.
- QA Expert: verificó carga local, metadata y ausencia de errores.
- Security Auditor: revisó que no se agreguen secretos ni scripts externos.
- DevOps / Deployment Engineer: documentó archivo requerido para deploy.

## Diagnóstico

La landing no usa imágenes visibles en el HTML principal. El asset crítico era social preview:

- Antes: `PUBLICACION.png`
- Dimensiones: 1254x1254
- Peso: ~1670 KB
- Problema: formato cuadrado y pesado para Open Graph.

## Implementación

Se creó:

- `assets/social/og-image.jpg`

Características:

- Dimensiones: 1200x630
- Peso aproximado: 57 KB
- Formato: JPG
- Uso: Open Graph y Twitter Card

Se actualizaron:

- `og:image`
- `og:image:width`
- `og:image:height`
- `twitter:image`

Nueva ruta pública esperada:

```text
https://nexolt.com/assets/social/og-image.jpg
```

## Resultado

Comparación:

| Asset | Dimensiones | Peso aprox. | Uso |
| --- | ---: | ---: | --- |
| `PUBLICACION.png` | 1254x1254 | 1670 KB | Fuente / pieza original |
| `assets/social/og-image.jpg` | 1200x630 | 57 KB | Social preview |

Reducción aproximada para social preview: 96%.

## QA

Resultado: OK

Verificado:

- La imagen existe localmente.
- La imagen renderiza sin cortes de contenido.
- Metadata de `index.html` apunta al nuevo asset.
- Dimensiones declaradas coinciden con el archivo.
- La página carga en servidor local sin errores de consola.
- No se introdujo overflow horizontal nuevo.

## Seguridad

Resultado: OK

- No se agregaron scripts externos.
- No se agregaron dependencias de runtime.
- No se agregaron secretos, tokens ni credenciales.
- No se modificó Formspree.

## DevOps / deploy

Para deploy, subir también:

```text
assets/social/og-image.jpg
```

Si el hosting usa cache agresivo, purgar cache o cambiar nombre del asset si una futura imagen social reemplaza esta versión.

## Riesgos pendientes

- Los PNG originales siguen siendo pesados, aunque no se cargan en la landing principal.
- El proyecto sigue sin Git inicializado.

## Siguiente paso recomendado

Tarea 4 - Mejorar hardening del formulario de contacto.
