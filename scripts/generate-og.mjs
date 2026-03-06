import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function renderSvg({ titleLines, subtitleLines, badge, badgeX = 860, badgeY = 520 }) {
  const titleY = 230;
  const titleLineHeight = 98;
  const subtitleY = subtitleLines.length > 1 ? 500 : 538;
  const subtitleLineHeight = 54;

  const titleMarkup = titleLines
    .map((line, index) => {
      const y = titleY + index * titleLineHeight;
      return `<text x="76" y="${y}" fill="#ECF3FF" font-size="74" font-weight="700" font-family="Segoe UI, Inter, Arial, sans-serif">${escapeXml(line)}</text>`;
    })
    .join("");

  const subtitleMarkup = subtitleLines
    .map((line, index) => {
      const y = subtitleY + index * subtitleLineHeight;
      return `<text x="76" y="${y}" fill="#D8E4FF" font-size="50" font-weight="500" font-family="Segoe UI, Inter, Arial, sans-serif">${escapeXml(line)}</text>`;
    })
    .join("");

  return `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#06174A" />
      <stop offset="55%" stop-color="#0D2569" />
      <stop offset="100%" stop-color="#112D7A" />
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
  <circle cx="1060" cy="130" r="260" fill="#3F54B5" opacity="0.45" />
  <circle cx="90" cy="540" r="330" fill="#0F7D95" opacity="0.35" />

  <text x="76" y="100" fill="#ECF3FF" font-size="46" font-weight="700" font-family="Segoe UI, Inter, Arial, sans-serif">botflow.top</text>
  ${titleMarkup}
  ${subtitleMarkup}

  <rect x="${badgeX}" y="${badgeY}" width="280" height="60" rx="18" fill="#2A4E88" opacity="0.95" />
  <text x="${badgeX + 140}" y="${badgeY + 40}" fill="#25D4B8" text-anchor="middle" font-size="40" font-weight="700" font-family="Segoe UI, Inter, Arial, sans-serif">${escapeXml(badge)}</text>
</svg>
`.trim();
}

async function writePng(targetPath, content) {
  const buffer = await sharp(Buffer.from(content)).png({ quality: 100 }).toBuffer();
  await fs.writeFile(targetPath, buffer);
}

async function main() {
  const publicDir = path.resolve("public");

  await writePng(
    path.join(publicDir, "og-botflow.png"),
    renderSvg({
      titleLines: ["Sistemas digitales para", "automatizar negocios"],
      subtitleLines: ["Desarrollo web - Automatizaci\u00f3n - IA"],
      badge: "Joaquin Arvelo",
      badgeY: 360
    })
  );

  await writePng(
    path.join(publicDir, "og-aliado-tecnologico.png"),
    renderSvg({
      titleLines: ["Tu aliado tecnol\u00f3gico"],
      subtitleLines: ["Servicio de inicio recomendado", "para digitalizar tu negocio"],
      badge: "Desde 1200 EUR"
    })
  );

  console.log("OG images generated in /public");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
