"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/site";

type ContactFields = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const initialFields: ContactFields = {
  name: "",
  company: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(initialFields);
  const [feedback, setFeedback] = useState<string>("");

  const canSend = useMemo(() => {
    return fields.name.trim().length > 1 && fields.email.trim().length > 5 && fields.message.trim().length > 9;
  }, [fields]);

  function updateField(field: keyof ContactFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    if (feedback) {
      setFeedback("");
    }
  }

  function buildMessage() {
    return [
      `Hola Joaquin, soy ${fields.name}.`,
      fields.company ? `Empresa/Proyecto: ${fields.company}` : null,
      `Email: ${fields.email}`,
      "",
      "Mensaje:",
      fields.message
    ]
      .filter(Boolean)
      .join("\n");
  }

  function validate() {
    if (!canSend) {
      setFeedback("Completa nombre, email y un mensaje con más contexto para enviar.");
      return false;
    }
    return true;
  }

  function sendByWhatsapp() {
    if (!validate()) {
      return;
    }
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${siteConfig.whatsappRaw}?text=${text}`, "_blank", "noopener,noreferrer");
    setFeedback("Se abrió WhatsApp con el mensaje listo para enviar.");
  }

  function sendByEmail() {
    if (!validate()) {
      return;
    }
    const subject = encodeURIComponent(`Consulta desde ${siteConfig.domain}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setFeedback("Se abrió tu cliente de correo con el mensaje preparado.");
  }

  return (
    <form
      className="panel-card space-y-5 p-6 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        sendByWhatsapp();
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[color:var(--color-dark)]">
          Nombre
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-[color:var(--panel-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-primary)]"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[color:var(--color-dark)]">
          Email
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="tu@email.com"
            className="w-full rounded-xl border border-[color:var(--panel-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-primary)]"
            required
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-[color:var(--color-dark)]">
        Empresa o proyecto
        <input
          type="text"
          name="company"
          value={fields.company}
          onChange={(event) => updateField("company", event.target.value)}
          placeholder="Nombre de tu empresa (opcional)"
          className="w-full rounded-xl border border-[color:var(--panel-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-primary)]"
        />
      </label>
      <label className="space-y-2 text-sm font-medium text-[color:var(--color-dark)]">
        ¿Qué quieres resolver?
        <textarea
          name="message"
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={6}
          placeholder="Cuéntame el proceso o problema que quieres mejorar."
          className="w-full resize-y rounded-xl border border-[color:var(--panel-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-primary)]"
          required
        />
      </label>
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="btn-base btn-primary px-5 py-3"
        >
          Enviar por WhatsApp
        </button>
        <button
          type="button"
          onClick={sendByEmail}
          className="btn-base btn-secondary px-5 py-3"
        >
          Enviar por Email
        </button>
      </div>
      <p className="text-xs leading-relaxed text-[color:var(--color-muted)]">
        También puedes escribir directamente a{" "}
        <a className="font-medium text-[color:var(--color-primary)]" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>{" "}
        o por WhatsApp al{" "}
        <a className="font-medium text-[color:var(--color-primary)]" href={`https://wa.me/${siteConfig.whatsappRaw}`}>
          {siteConfig.whatsappDisplay}
        </a>
        .
      </p>
      {feedback ? (
        <p className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] px-4 py-3 text-sm text-[color:var(--color-dark)]">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
