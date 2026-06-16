# 08 - Reporte versionado y deploy

Fecha: 2026-06-15  
Tarea: Tarea 6 - Preparar control de versiones y estrategia de deploy  
Estado: implementada

## Roles aplicados

- Project Manager: definió estrategia de avance y rollback.
- DevOps / Deployment Engineer: preparó versionado, deploy y archivos ignorados.
- Security Auditor: revisó exclusión de secretos y archivos locales.
- QA Expert: validó estructura, encoding y estado de Git.

## Objetivo

Dejar el proyecto listo para trabajo profesional con historial, rollback y una ruta clara de deploy estático.

## Implementación

Archivos creados:

- `.gitignore`
- `docs/08-reporte-versionado-deploy.md`

Acciones:

- Inicializar repositorio Git local.
- Crear rama principal `main`.
- Crear primer commit con el estado validado del proyecto.

## Estrategia Git

Rama principal:

```text
main
```

Flujo recomendado:

1. Trabajar una tarea por vez siguiendo `AGENTS.md`.
2. Ejecutar QA y revisión de seguridad.
3. Actualizar documentación de la tarea.
4. Crear commit con mensaje claro.
5. Desplegar solo commits validados.

Formato sugerido de commits:

```text
docs: ...
feat: ...
fix: ...
chore: ...
```

## Estrategia de deploy estático

Opción recomendada inicial: Netlify o Vercel con deploy desde Git.

Archivos mínimos a publicar:

```text
index.html
assets/css/styles.css
assets/js/main.js
assets/social/og-image.jpg
LOGO_INSTAGRAM.png
LOGO_PAGINA.png
PUBLICACION.png
PUBLICACION_DOS.png
PUBLICAICON_TRES.png
```

Notas:

- No hay build.
- Directorio de publicación: raíz del proyecto.
- Comando de build: ninguno.
- Variables de entorno: ninguna.

## Deploy manual alternativo

Subir por FTP, panel de hosting o drag-and-drop:

```text
index.html
assets/
*.png
```

Mantener rutas relativas intactas.

## Rollback

Con Git:

1. Identificar último commit estable:

```powershell
git log --oneline
```

2. Volver temporalmente para inspección:

```powershell
git checkout <commit>
```

3. Para restaurar producción, redeployar el commit estable desde el proveedor.

4. Para volver al trabajo normal:

```powershell
git switch main
```

Evitar `git reset --hard` salvo decisión explícita.

## Seguridad

`.gitignore` excluye:

- `.env`
- `.env.*`
- caches
- dependencias
- outputs de build
- logs
- temporales

No se deben versionar:

- tokens de hosting,
- claves API,
- credenciales,
- exports privados de clientes.

## QA

Checklist de cierre:

- Git inicializado.
- Rama `main` activa.
- `.gitignore` presente.
- No hay secretos detectados por búsqueda básica.
- Documentación UTF-8 válida.
- Primer commit creado.

## Riesgos pendientes

- Falta conectar el repositorio local a un remoto, por ejemplo GitHub.
- Falta elegir proveedor final de deploy.
- Falta configurar dominio/DNS cuando se publique.

## Siguiente paso recomendado

Elegir proveedor de deploy y remoto Git. Recomendación: GitHub + Netlify para landing estática simple.
