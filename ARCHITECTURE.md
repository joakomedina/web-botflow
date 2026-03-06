# ARCHITECTURE

## Estructura de alto nivel

La aplicación usa Next.js App Router con renderizado por defecto en server components.

- `app/layout.tsx` define shell global, SEO global, navegación y footer.
- Cada página en `app/*/page.tsx` compone secciones reutilizables desde `components/`.
- El contenido estructurado vive en `data/` para separar presentación y datos.

## Composición de páginas

- `app/page.tsx` (home): Hero, problema, solución, servicios, proyectos, proceso, sobre mí y CTA final.
- `app/servicios/page.tsx`: overview de servicios.
- `app/servicios/*/page.tsx`: páginas específicas por servicio (desarrollo-web, apps, automatizaciones, ia).
- `app/proyectos/page.tsx`: proyectos realizados y en desarrollo.
- `app/sobre-mi/page.tsx`: posicionamiento profesional.
- `app/contacto/page.tsx`: formulario y canales directos.

## Flujo de datos

1. Datos de catálogo se definen en `data/services.ts`, `data/projects.ts`, `data/process.ts`.
2. Las páginas importan los datos y los pasan como props a componentes de UI.
3. Componentes de presentación renderizan el contenido sin lógica de negocio acoplada.
4. El formulario de contacto usa lógica cliente para preparar mensajes hacia WhatsApp o email.

## Integraciones externas

- Enlaces directos a WhatsApp (`wa.me`) y email (`mailto`).
- Sin API externa obligatoria en esta versión.

## Decisiones técnicas clave

- No se usan dependencias específicas de Vercel.
- Tailwind se usa para estilo consistente y escalable.
- Framer Motion se usa en componentes cliente para animaciones sutiles de entrada.
- Metadata SEO implementada a nivel global y por página.

