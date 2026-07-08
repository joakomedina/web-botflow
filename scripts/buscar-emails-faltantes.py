"""
Repasa la hoja de leads y, para las filas que tienen web pero no email,
intenta encontrarlo con más esfuerzo: portada -> enlaces de contacto/legal
de la portada -> rutas típicas (aviso legal, contacto...).

Actualiza la columna 'email' directamente en la fila correspondiente,
no crea filas nuevas.

Uso:
    python scripts/buscar-emails-faltantes.py
"""

import re
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse

import gspread
import requests
from dotenv import dotenv_values
from google.oauth2.service_account import Credentials

env = dotenv_values(Path(__file__).resolve().parent.parent / ".env.local")
SHEET_ID = env["GOOGLE_SHEET_ID"]
SERVICE_ACCOUNT_JSON = env["GOOGLE_SERVICE_ACCOUNT_JSON"]

HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; BotflowLeadBot/1.0)"}
TIMEOUT = 8

MAILTO_RE = re.compile(r"mailto:([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})", re.IGNORECASE)
EMAIL_RE = re.compile(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}")
EXTENSIONES_MALAS = {"png", "jpg", "jpeg", "gif", "svg", "webp", "ico", "css", "js"}
DOMINIOS_PLACEHOLDER = {
    "ejemplo.com", "example.com", "test.com", "tudominio.com", "yourdomain.com",
    "domain.com", "correo.com", "email.com", "dominio.com", "sentry.io", "wixpress.com",
}
LOCALES_PLACEHOLDER = {"correo", "email", "test", "usuario", "user", "nombre", "name", "tuemail"}

RUTAS_CANDIDATAS = [
    "/contacto", "/contact", "/contacto.html", "/contactenos",
    "/aviso-legal", "/aviso_legal", "/legal", "/legal-notice",
    "/politica-de-privacidad", "/politica-privacidad", "/privacy",
    "/sobre-nosotros", "/quienes-somos", "/about",
]

# Palabras que delatan un enlace de contacto/legal dentro de la portada.
PALABRAS_ENLACE = ["contacto", "contact", "aviso legal", "aviso-legal", "legal", "privacidad"]


def es_email_valido(email):
    local, _, dominio = email.lower().partition("@")
    if dominio in DOMINIOS_PLACEHOLDER:
        return False
    if local in LOCALES_PLACEHOLDER:
        return False
    return True


def extraer_email_de_html(html):
    mailto = MAILTO_RE.search(html)
    if mailto and es_email_valido(mailto.group(1)):
        return mailto.group(1)
    candidatos = [
        e
        for e in EMAIL_RE.findall(html)
        if e.split(".")[-1].lower() not in EXTENSIONES_MALAS and es_email_valido(e)
    ]
    return candidatos[0] if candidatos else ""


def obtener_html(url):
    try:
        r = requests.get(url, headers=HEADERS, timeout=TIMEOUT)
        if r.status_code >= 400:
            return ""
        return r.text
    except requests.RequestException:
        return ""


def enlaces_de_contacto(html, base_url):
    enlaces = re.findall(r'href=["\']([^"\']+)["\']', html, re.IGNORECASE)
    encontrados = []
    for href in enlaces:
        href_lower = href.lower()
        if any(palabra in href_lower for palabra in PALABRAS_ENLACE):
            encontrados.append(urljoin(base_url, href))
    return list(dict.fromkeys(encontrados))  # sin duplicados, conserva orden


def buscar_email_agresivo(web):
    if not web:
        return ""

    # 1. Portada
    html_portada = obtener_html(web)
    if html_portada:
        email = extraer_email_de_html(html_portada)
        if email:
            return email

        # 2. Enlaces de contacto/legal encontrados en la portada
        for enlace in enlaces_de_contacto(html_portada, web)[:4]:
            html = obtener_html(enlace)
            if html:
                email = extraer_email_de_html(html)
                if email:
                    return email
            time.sleep(0.5)

    # 3. Rutas típicas, por si no hay enlace visible
    parsed = urlparse(web)
    raiz = f"{parsed.scheme}://{parsed.netloc}"
    for ruta in RUTAS_CANDIDATAS:
        html = obtener_html(raiz + ruta)
        if html:
            email = extraer_email_de_html(html)
            if email:
                return email
        time.sleep(0.5)

    return ""


def main():
    scopes = ["https://www.googleapis.com/auth/spreadsheets"]
    creds = Credentials.from_service_account_file(SERVICE_ACCOUNT_JSON, scopes=scopes)
    gc = gspread.authorize(creds)
    hoja = gc.open_by_key(SHEET_ID).sheet1

    cabecera = hoja.row_values(1)
    col_web = cabecera.index("web") + 1
    col_email = cabecera.index("email") + 1

    registros = hoja.get_all_records()
    candidatos = [
        (i + 2, r) for i, r in enumerate(registros) if r.get("web") and not r.get("email")
    ]
    print(f"Filas con web pero sin email: {len(candidatos)}")

    encontrados = 0
    for fila, registro in candidatos:
        nombre = registro.get("nombre", "")
        web = registro.get("web", "")
        print(f"Fila {fila} — {nombre} ({web})...", end=" ")
        email = buscar_email_agresivo(web)
        if email:
            hoja.update_cell(fila, col_email, email)
            encontrados += 1
            print(f"encontrado: {email}")
        else:
            print("nada")
        time.sleep(1)

    print(f"\nListo. {encontrados} de {len(candidatos)} emails nuevos encontrados y guardados.")


if __name__ == "__main__":
    main()
