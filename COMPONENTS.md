# COMPONENTS

Listado de componentes principales, propósito, props y ejemplo de uso.

## Navbar

- Propósito: navegación principal y CTA a WhatsApp.
- Props: sin props.
- Ejemplo:

```tsx
<Navbar />
```

## Hero

- Propósito: propuesta de valor principal de la home.
- Props: sin props.
- Ejemplo:

```tsx
<Hero />
```

## ProblemSection

- Propósito: conectar con dolores del cliente objetivo.
- Props: sin props.

## SolutionSection

- Propósito: explicar el enfoque de solución integral.
- Props: sin props.

## AliadoTecnologicoCard

- Propósito: destacar la oferta paquetizada "Soy tu aliado tecnológico" en la home.
- Props: sin props.
- CTA: navegación a `/aliado-tecnologico`.

## ServicesGrid

- Propósito: renderizar rejilla de servicios.
- Props:
  - `services: Service[]`
  - `title?: string`
  - `description?: string`
- Ejemplo:

```tsx
<ServicesGrid services={services} />
```

## ServiceCard

- Propósito: representar un servicio individual.
- Props:
  - `service: Service`

## ProjectsPreview

- Propósito: mostrar una selección de proyectos en la home.
- Props:
  - `projects: Project[]`

## ProjectCard

- Propósito: mostrar detalle de un proyecto.
- Props:
  - `project: Project`

## ProcessSection

- Propósito: explicar metodología de trabajo en 4 pasos.
- Props: sin props.

## AboutSection

- Propósito: sección resumida de posicionamiento personal.
- Props: sin props.

## CTASection

- Propósito: bloque de cierre con llamada a acción.
- Props:
  - `title: string`
  - `description: string`
  - `buttonText: string`
  - `buttonLink: string`

## PageHero

- Propósito: encabezado reutilizable para páginas internas.
- Props:
  - `eyebrow: string`
  - `title: string`
  - `description: string`
  - `primaryCta?: { label: string; href: string }`
  - `secondaryCta?: { label: string; href: string }`

## ContactForm

- Propósito: capturar contexto de contacto y abrir envío por WhatsApp o email.
- Props: sin props.

## Footer

- Propósito: navegación secundaria y datos de contacto.
- Props: sin props.
