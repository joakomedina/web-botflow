# botflowstudio.com - Web profesional de Joaquin Arvelo

Web en Next.js para posicionar servicios de desarrollo web, aplicaciones, automatización de procesos e implementación de inteligencia artificial.

## Propósito del proyecto

Comunicar una propuesta de valor clara:

Construyo sistemas digitales que automatizan tu negocio.

## Stack técnico

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

## Build de producción

```bash
npm run build
```

## Ejecución en producción

```bash
npm run start
```

## Variables de entorno

Usar `.env.local` basado en `.env.example`.

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Estructura principal

- `app/`: páginas y layout del App Router
- `components/`: componentes UI reutilizables
- `data/`: contenido estructurado de servicios, proyectos y proceso
- `lib/`: utilidades y configuración del sitio
- `public/`: assets estáticos (logo)
- `docs/`: instrucciones originales del proyecto

## SEO implementado

- Metadatos por página (title + description)
- Estructura semántica con jerarquía de headings
- Páginas de servicios con subrutas para posicionamiento
- JSON-LD de servicio profesional en layout

## Despliegue con Coolify (VPS)

Este proyecto está preparado para despliegue estándar de Node.js en VPS con Coolify.

### Configuración mínima en Coolify

- Build command: `npm run build`
- Start command: `npm run start`
- Port: puerto por defecto de Next.js (`3000`) gestionado por el proxy de Coolify

### Notas de despliegue

- No usa features específicas de Vercel.
- Compatible con reverse proxy y SSL gestionados por Coolify.
- Recomendado: configurar `NEXT_PUBLIC_SITE_URL=https://botflowstudio.com` en variables de entorno del entorno de producción.
