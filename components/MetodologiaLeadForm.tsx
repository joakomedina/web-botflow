"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function MetodologiaLeadForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: "Lead descarga metodología",
          from_email: email,
          company: "—",
          service_context: "Descarga PDF Metodología Botflowstudio",
          tracking: typeof window !== "undefined" ? window.location.search : "",
          message: `Nuevo lead quiere descargar la presentación de metodología.\n\nEmail: ${email}`,
          to_email: siteConfig.email,
          reply_to: email,
          website: siteConfig.domain
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string }
      );
    } catch {
      // Download proceeds even if EmailJS fails
    }

    const link = document.createElement("a");
    link.href = "/ModeloNegocioVF.pdf";
    link.download = "Metodologia-Botflowstudio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[color:var(--color-accent)] bg-[color:var(--color-accent)]/10 px-8 py-10 text-center">
        <p className="text-2xl font-semibold text-white">¡Tu descarga ha comenzado!</p>
        <p className="mt-3 text-white/70">
          Si no se inicia sola,{" "}
          <a
            href="/ModeloNegocioVF.pdf"
            download
            className="font-semibold text-[color:var(--color-accent)] underline underline-offset-2"
          >
            pulsa aquí
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => void handleSubmit(e)} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@empresa.com"
        required
        className="flex-1 rounded-xl border border-white/25 bg-white/10 px-5 py-4 text-base text-white placeholder-white/40 outline-none transition focus:border-white/60 focus:bg-white/15"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-base btn-light whitespace-nowrap px-7 py-4 disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Descargar presentación"}
      </button>
    </form>
  );
}
