# 12 - Reporte migracion a sitio dinamico

Fecha: 2026-06-16

## Objetivo

Convertir NexoLT de sitio estatico a una aplicacion dinamica preparada para crecer.

## Implementado

- Base Next.js + React + TypeScript.
- Home renderizada desde `src/app/page.tsx`.
- Contenido repetible separado en `src/app/data.ts`.
- API dinamica `POST /api/contact`.
- Formulario cliente conectado a la API interna.
- Assets copiados a `public/assets`.
- Netlify actualizado para ejecutar `npm run build`.

## Archivos creados

- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `next-env.d.ts`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/data.ts`
- `src/app/contact-form.tsx`
- `src/app/api/contact/route.ts`
- `src/app/globals.css`
- `public/assets/...`

## QA

Comandos ejecutados:

- `npm install`
- `npm audit`
- `npm run build`

Resultado:

- Build Next.js correcto.
- `npm audit` queda en 0 vulnerabilidades usando override de `postcss`.
- `/` renderiza correctamente.
- `/api/contact` aparece como ruta dinamica.
- Entrada invalida en API responde `400`.
- Entrada valida en API responde `200`.
- Desktop local: sin errores de consola, sin overflow horizontal.
- Mobile 390x844: sin errores de consola, sin overflow horizontal.

## Seguridad

- API valida `nombre`, `email` y `mensaje`.
- No se agregaron credenciales ni secrets.
- No se agrego proveedor externo de email todavia.
- No se uso `npm audit fix --force` para evitar downgrades peligrosos.
- Se agrego override de `postcss` a version segura.

## Pendientes recomendados

1. Conectar la API de contacto a un proveedor real de email o base de datos.
2. Agregar proteccion anti-spam/rate limiting.
3. Evaluar CMS o panel admin para editar servicios, rubros, integraciones y proyectos.
4. Validar deploy en Netlify despues del push.
