// Radar Botflow: busca empresas nivel 1 en Google Places, detecta síntomas de
// los pain points en sus reseñas y acumula una lista priorizada en CSV.
//
// Uso:
//   node --env-file=.env.local scripts/radar-botflow.mjs
//
// Requiere GOOGLE_PLACES_API_KEY en .env.local (ya está en .gitignore).
//
// Cada ejecución ACUMULA sobre el CSV maestro (no lo sobrescribe) y recuerda
// qué place_id ya consultó en Place Details (archivo .vistos.json), así:
//   - no repites negocios ya capturados en ejecuciones anteriores
//   - no gastas cuota de la API volviendo a pedir detalles de algo que ya tienes
// Para conseguir negocios nuevos en la siguiente ejecución, cambia/añade
// entradas en CATEGORIAS (más subcategorías o distritos), no relances lo mismo.

import fs from "node:fs/promises";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error("Falta GOOGLE_PLACES_API_KEY. Añádela a .env.local.");
  process.exit(1);
}

const CIUDAD = "Madrid";

// Cada entrada es el término de búsqueda tal cual se usará en Google
// (puedes usar la categoría a secas, "clínica dental", "guardería infantil"...).
// La consulta a Google se arma como "<CATEGORIA> en <CIUDAD>".
const CATEGORIAS = ["Clínica", "Veterinario", "Guardería infantil"];

const PALABRAS_SINTOMA = [
  "no responden",
  "no contestan",
  "nunca cogen el teléfono",
  "no cogen el telefono",
  "tardan en responder",
  "tardan mucho",
  "mala atención telefónica",
  "cuesta contactar",
  "no atienden",
  "esperando respuesta",
  "sin respuesta",
  "difícil conseguir cita",
  "dificil conseguir cita"
];

const SLUG_CIUDAD = CIUDAD.toLowerCase();
const ARCHIVO_CSV = `radar-botflow-${SLUG_CIUDAD}.csv`;
const ARCHIVO_VISTOS = `radar-botflow-${SLUG_CIUDAD}.vistos.json`;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cargarVistos() {
  try {
    const contenido = await fs.readFile(ARCHIVO_VISTOS, "utf8");
    return new Set(JSON.parse(contenido));
  } catch (err) {
    if (err.code === "ENOENT") return new Set();
    throw err;
  }
}

async function guardarVistos(vistos) {
  await fs.writeFile(ARCHIVO_VISTOS, JSON.stringify([...vistos], null, 2), "utf8");
}

async function textSearch(query, pagetoken) {
  const url = new URL("https://maps.googleapis.com/maps/api/place/textsearch/json");
  url.searchParams.set("key", API_KEY);
  url.searchParams.set("language", "es");
  if (pagetoken) {
    url.searchParams.set("pagetoken", pagetoken);
  } else {
    url.searchParams.set("query", query);
  }
  const res = await fetch(url);
  return res.json();
}

async function placeDetails(placeId) {
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("key", API_KEY);
  url.searchParams.set("language", "es");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set(
    "fields",
    [
      "name",
      "formatted_address",
      "formatted_phone_number",
      "international_phone_number",
      "website",
      "rating",
      "user_ratings_total",
      "reviews"
    ].join(",")
  );
  const res = await fetch(url);
  return res.json();
}

function detectarSintomas(reviews = []) {
  const hits = [];
  for (const review of reviews) {
    const texto = (review.text || "").toLowerCase();
    for (const palabra of PALABRAS_SINTOMA) {
      if (texto.includes(palabra)) {
        hits.push({ palabra, snippet: review.text.slice(0, 160) });
      }
    }
  }
  return hits;
}

async function recolectarCategoria(categoria) {
  const query = `${categoria} en ${CIUDAD}`;
  const resultados = [];
  let pagetoken;

  for (let pagina = 0; pagina < 3; pagina++) {
    const data = await textSearch(query, pagetoken);

    if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
      console.error(`Error en búsqueda "${categoria}":`, data.status, data.error_message ?? "");
      break;
    }

    resultados.push(...(data.results ?? []));
    pagetoken = data.next_page_token;
    if (!pagetoken) break;

    // Google exige un pequeño retraso antes de que next_page_token sea válido.
    await sleep(2000);
  }

  return resultados.map((r) => ({ ...r, categoria }));
}

function aCsv(filas, incluirCabecera) {
  const columnas = [
    "categoria",
    "nombre",
    "direccion",
    "telefono",
    "web",
    "rating",
    "num_resenas",
    "sintomas_detectados",
    "ejemplo_resena",
    "puntuacion_prioridad",
    "place_id",
    "estado"
  ];
  const escapar = (valor) => `"${String(valor ?? "").replace(/"/g, '""')}"`;
  const lineas = incluirCabecera ? [columnas.join(",")] : [];
  for (const fila of filas) {
    lineas.push(columnas.map((clave) => escapar(fila[clave])).join(","));
  }
  return lineas.join("\n") + (lineas.length > 0 ? "\n" : "");
}

async function archivoExiste(ruta) {
  try {
    await fs.access(ruta);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const vistosPrevios = await cargarVistos();
  const vistosSesion = new Set(vistosPrevios);
  const filasNuevas = [];
  let saltados = 0;

  for (const categoria of CATEGORIAS) {
    console.log(`Buscando: ${categoria} en ${CIUDAD}...`);
    const lugares = await recolectarCategoria(categoria);
    console.log(`  ${lugares.length} resultados encontrados.`);

    for (const lugar of lugares) {
      if (vistosSesion.has(lugar.place_id)) {
        saltados++;
        continue;
      }
      vistosSesion.add(lugar.place_id);

      const detalle = await placeDetails(lugar.place_id);
      await sleep(150); // cortesía con el rate limit

      const d = detalle.result ?? {};
      const sintomas = detectarSintomas(d.reviews);

      filasNuevas.push({
        categoria,
        nombre: d.name ?? lugar.name,
        direccion: d.formatted_address ?? lugar.formatted_address ?? "",
        telefono: d.formatted_phone_number ?? "",
        web: d.website ?? "",
        rating: d.rating ?? lugar.rating ?? "",
        num_resenas: d.user_ratings_total ?? lugar.user_ratings_total ?? "",
        sintomas_detectados: sintomas.map((h) => h.palabra).join("; "),
        ejemplo_resena: sintomas[0]?.snippet ?? "",
        puntuacion_prioridad: sintomas.length,
        place_id: lugar.place_id,
        estado: "sin contactar"
      });
    }
  }

  filasNuevas.sort((a, b) => b.puntuacion_prioridad - a.puntuacion_prioridad);

  const yaExistia = await archivoExiste(ARCHIVO_CSV);
  await fs.appendFile(ARCHIVO_CSV, aCsv(filasNuevas, !yaExistia), "utf8");
  await guardarVistos(vistosSesion);

  console.log(`\nNegocios nuevos añadidos: ${filasNuevas.length}`);
  console.log(`Negocios ya vistos en ejecuciones anteriores (saltados, sin gastar cuota): ${saltados}`);
  console.log(`Con síntomas detectados en reseñas (de esta tanda): ${filasNuevas.filter((f) => f.puntuacion_prioridad > 0).length}`);
  console.log(`Total acumulado histórico: ${vistosSesion.size} negocios en ${ARCHIVO_CSV}`);
}

main().catch((err) => {
  console.error("Error inesperado:", err);
  process.exit(1);
});
