# Publicar en el blog

Cada post es un archivo `.md` dentro de `content/blog/`.

## 1) Crea el archivo

Usa un nombre con slug:

- `mi-primer-post.md`
- `automatizar-citas-whatsapp.md`

## 2) Copia este bloque al inicio (frontmatter)

```md
---
title: "Título del artículo"
date: "2026-03-07"
excerpt: "Resumen corto para listado, SEO y redes."
tags:
  - "Automatización"
  - "IA"
coverImage: "/open-graph-botflow.jpeg"
---
```

Campos:

- `title` (obligatorio)
- `date` en formato `YYYY-MM-DD` (recomendado)
- `excerpt` (recomendado)
- `tags` (opcional, lista)
- `coverImage` (opcional, ruta en `public/...`)

## 3) Escribe el contenido en Markdown

Ejemplo:

```md
## Introducción

Texto del artículo.

## Punto clave

- Idea 1
- Idea 2

[Enlace útil](https://example.com)
```

## Resultado

- Listado: `/blog`
- Detalle: `/blog/tu-slug`
