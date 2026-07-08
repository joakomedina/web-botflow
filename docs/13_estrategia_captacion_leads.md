# Estrategia de captación de leads — Botflow Studio

## 1. Objetivo

Dos horizontes, no uno:

- **Inmediato (30 días):** cerrar los primeros 3 Blueprints de pago. Prioridad de caja confirmada por Joaquín (2026-07-03) — no hay margen para esperar a que madure un canal orgánico.
- **Continuo (90 días):** motor híbrido de generación de demanda que no dependa de un solo canal.

**Decisión ya tomada en `docs/12_landing_sprint15_v1.md`:** el CTA único en todo el sitio y todo el contenido es

> Solicitar Diagnóstico Botflow Gratuito

Nunca "comprar Sprint 15" — el diagnóstico es el puente psicológico entre interés y venta.

## 2. Motor híbrido: inbound construye marca, outbound genera caja

```
                    GENERACIÓN DE DEMANDA

      ┌─────────────────────────────────────────┐
      │                                          │
      ▼                                          ▼
   INBOUND                                   OUTBOUND
   LinkedIn, SEO/blog                        Radar Botflow (§6), alianzas (§7)
      │                                          │
      └──────────────────┬───────────────────────┘
                          ▼
              Sesión Estratégica gratis (/contacto)
                          ▼
              Blueprint Operativo (pago, diagnóstico)
                          ▼
                     Sprint 15 (Blueprint se descuenta íntegro)
                          ▼
              Roadmap — siguiente sprint (cliente recurrente)
```

**Reparto de esfuerzo mientras no haya caja recurrente:** outbound como motor principal, LinkedIn como constructor de credibilidad en paralelo, SEO como inversión de fondo (resultados a 6-12 meses, no abandonar pero no es la prioridad ahora). Reevaluar el reparto una vez cerrados los primeros Blueprints y con datos reales de qué canal convierte mejor.

Lead magnet secundario: PDF de metodología en `/metodologia` (para quien no está listo para agendar todavía).

**Gap detectado:** ese formulario (`MetodologiaLeadForm.tsx`) solo manda un aviso por email a Joaquín vía EmailJS, no entra a ninguna secuencia de nurture. Suficiente a bajo volumen; si el tráfico crece, hay que resolverlo o se enfrían leads sin darse cuenta.

## 3. Regla no negociable: siempre se empieza por el Blueprint

Todo proyecto arranca por el Blueprint Operativo (pago), nunca se salta directo a Sprint 15 — ni siquiera con un lead que llega ya seguro de lo que quiere ("solo necesito una app/automatización, hazlo directo"). El Blueprint es lo que confirma con evidencia que el proyecto realmente resuelve el problema; saltárselo arriesga construir la solución equivocada.

**Por qué importa incluso cuando el lead ya da un presupuesto:** si alguien dice "tengo 2.000€ para esto" y se acepta el precio sin más, muchas veces igual duda. La razón probable no es el precio — es que nada validó todavía que ese proyecto concreto resuelve su problema. Aceptar el número sin diagnóstico previo también resta credibilidad (parece que "a cualquier alcance que pidan, se dice que sí"). El Blueprint resuelve ambas dudas a la vez: valida el ajuste del proyecto y demuestra método antes de comprometer un precio.

Esta historia es candidata a post de LinkedIn (pilar "método/diferenciación") y debe ser la respuesta estándar en llamadas cuando alguien insista en saltarse el Blueprint.

## 4. ICP — a quién buscamos (borrador, validar cifras con Joaquín)

No basta con "pymes". Ficha de trabajo, inferida de los clientes reales ya servidos (Avanlens/clínica, estudio de arquitectura, distribuidor de licores, coach) más el criterio de GPT:

- Empresa de servicios con atención a cliente recurrente (llamadas, WhatsApp, reservas, seguimiento).
- Entre 5 y 30 empleados.
- Al menos 2-3 personas dedicadas a tareas administrativas repetitivas.
- Usa Excel o WhatsApp como "sistema" de gestión de algo importante.
- Decisor accesible directamente (dueño/gerente), sin comité de compra.
- Facturación mínima: **pendiente de definir por Joaquín** (umbral que garantice que el Blueprint es una inversión razonable para ellos).

### Verticales por nivel de prioridad

| Nivel | Verticales | Por qué primero |
|---|---|---|
| 1 | Clínicas, veterinarios, guarderías | Ya hay caso de éxito (Avanlens), alto volumen de consultas repetitivas, decisor único y accesible |
| 2 | Despachos profesionales, academias, centros deportivos | Perfil similar, discurso adaptable rápido |
| 3 | Restaurantes, peluquerías | Válidos pero requieren discurso distinto (ticket medio más bajo) — no priorizar el discurso de LinkedIn/outbound para ellos todavía |

## 5. Los 6 pain points = el mapa de contenido

Ya definidos en la home (`app/page.tsx`), no hay que inventar dolores nuevos, solo cruzarlos con el ICP de arriba:

1. Pierde horas copiando información.
2. Responde las mismas preguntas una y otra vez.
3. Usa Excel para procesos importantes.
4. Tiene herramientas que no están conectadas.
5. Solo una persona sabe hacer ciertas tareas. → **ya cubierto** (post "cuando tu negocio depende de una sola persona")
6. Ha crecido pero sus procesos siguen siendo manuales. → **cubierto parcialmente** (post "cómo empezar a digitalizar tu negocio")

**Huecos de blog a cubrir, en este orden de prioridad:** 1, 3, 4, 2.

## 6. Outbound — Radar Botflow (prioridad inmediata, no ya "pendiente")

Objetivo: no buscar empresas al azar, buscar **síntomas** visibles públicamente de los 6 pain points, dentro de las verticales de nivel 1 primero.

Fuentes de señal:
- **Google Maps / reseñas**: negocios de la vertical con reseñas que mencionen "nunca responden", "tardan en contestar", "hay que llamar varias veces", "no cogen el teléfono".
- **Ofertas de empleo**: LinkedIn/Infojobs buscando "administrativo/a" o "atención al cliente" — señal de carga manual que quieren resolver contratando en vez de automatizando.
- **Su propia web**: si el único canal de contacto es "escríbenos un email" o un formulario sin respuesta automática, o si publican una plantilla de Excel descargable para que el cliente la rellene.

Herramientas: Google Places API oficial o servicios como Outscraper/Apify — evitar scraping directo contra los términos de Google (riesgo de bloqueo, no de cuenta personal como en LinkedIn, pero sí del propio acceso a datos).

Salida: lista priorizada (empresa, síntoma concreto encontrado, contacto) que alimenta el outreach — cada mensaje referencia el síntoma real, no un genérico "vi que podrían automatizar procesos".

## 7. Alianzas — canal no explorado todavía

Perfiles que ya tienen como clientes al ICP de Botflow pero no ofrecen automatización: agencias web, consultoras pequeñas de gestión/administración, freelance de IT, agencias de marketing. Cuando su cliente pide "quiero automatizar esto", ellos no lo hacen — ahí cabe Botflow como partner de referencia (con o sin comisión, a definir).

Acción pendiente de detallar: identificar 5-10 perfiles concretos en el entorno de Joaquín (no genérico) y proponer una conversación 1:1, no un mensaje masivo.

## 8. LinkedIn — 3 pilares de contenido (construye credibilidad, no es el motor de caja ahora)

| Pilar | Trabajo que hace | Fuente de material |
|---|---|---|
| Diagnóstico público | Identificación ("esto me pasa a mí") | Los 6 pain points |
| Caso/resultado | Credibilidad ("esto funciona de verdad") | `data/projects.ts` (7-8 proyectos con detalle, más ricos que los 3 de la home) |
| Método/diferenciación | Confianza ("por qué estos y no otra agencia de IA") | Framework "La revelación" de `/metodologia` + historias reales como la del Blueprint/2.000€ |

Mecánica de conversión: el post no vende, genera comentario/DM. La venta ocurre en la conversación privada, ahí se ofrece el Diagnóstico.

## 9. SEO / Blog (inversión de fondo, no prioridad de los primeros 30 días)

Formato ya validado (mismo de los 2 posts existentes): dolor → señales → costo de no corregirlo → cómo empezar → CTA a Sprint 15/Diagnóstico. Replicar ese esqueleto para los pain points 1, 3, 4, 2 cuando haya margen — no en el Sprint Comercial de 30 días (sección 11).

## 10. Rutina semanal de ejecución (con KPIs comerciales, no solo de contenido)

| Día | Bloque | Qué haces |
|---|---|---|
| Lunes | 1-2h | Radar Botflow: investigar e incorporar ~10-15 empresas nuevas a la lista (síntoma + contacto) |
| Martes | 1-2h | Primeros contactos outbound (mensaje personalizado referenciando el síntoma). Responder comentarios/DMs de LinkedIn |
| Miércoles | 45 min + 1-2h | Post LinkedIn (pilar caso real). Seguimientos a contactos de días anteriores |
| Jueves | 1-2h | Más contactos outbound + seguimientos. Responder comentarios/DMs |
| Viernes | 45 min + 10 min | Post LinkedIn (pilar método/diferenciación). Checkpoint semanal (ver métricas abajo) |

**Meta semanal orientativa:** ~50 empresas investigadas, ~20 primeros contactos, ~5 seguimientos activos, 3 Sesiones Estratégicas agendadas. Ajustar según capacidad real una vez arrancado.

**Reglas:**
1. Nunca publicar sin cerrar en pregunta o CTA suave (nunca "agenda aquí" directo en el post).
2. Responder comentarios/seguir contactos no es opcional ni se acumula — ahí ocurre la conversión real.
3. Revisar números solo el viernes (conversaciones, contactos, sesiones agendadas — no likes).

## 11. Sprint Comercial 30 días — objetivo: 3 Blueprints vendidos

| Semana | Foco |
|---|---|
| 1 | Cerrar ICP y umbral de facturación con Joaquín. Montar CRM simple (aunque sea una hoja). Lista inicial de 200 empresas nivel 1 vía Radar Botflow |
| 2 | Prospección activa outbound + primer post/vídeo de LinkedIn presentando el enfoque |
| 3 | Primeras Sesiones Estratégicas. Ajustar discurso según objeciones reales. Cerrar el primer Blueprint |
| 4 | Cerrar el segundo y tercer Blueprint. Documentar como casos reales para alimentar el pilar de LinkedIn |

Después de este sprint: revisar con datos reales (qué vertical respondió, qué mensaje convirtió, cuánto costó cada Sesión Estratégica agendada) antes de decidir si se mantiene el peso outbound o se reequilibra hacia inbound.

## 12. Plan 90 días (marco general, el Sprint Comercial de §11 es la prioridad de los primeros 30)

| Semana | Foco |
|---|---|
| 1-4 | Sprint Comercial (sección 11) |
| 5-8 | Mantener outbound + arrancar blog (pain points pendientes) según margen disponible |
| 9-12 | Revisar con datos qué canal/pilar convierte mejor → doblar apuesta, cortar lo que no funciona |

## 13. Métricas (no vanity metrics)

- Empresas investigadas / contactadas / con seguimiento activo (outbound)
- Nº de conversaciones DM iniciadas por post (no likes/alcance, inbound)
- Sesiones Estratégicas agendadas/semana, por canal de origen
- Tasa Sesión Estratégica → Blueprint → Sprint 15 → cliente

## 14. Pendiente de decidir

- Umbral de facturación del ICP (sección 4).
- Modelo de colaboración con alianzas: ¿comisión, referido simple, o paquete conjunto? (sección 7).
- Si conectar `/metodologia` a una herramienta de email con nurture real, o mantenerlo manual mientras el volumen sea bajo (sección 2).
