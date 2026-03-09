"use client";

import emailjs from "@emailjs/browser";
import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/site";

type ContactFields = {
  name: string;
  company: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  contextLabel?: string;
  defaultMessage?: string;
  locale?: "es" | "en";
};

function createInitialFields(defaultMessage: string): ContactFields {
  return {
    name: "",
    company: "",
    email: "",
    message: defaultMessage
  };
}

export function ContactForm({ contextLabel, defaultMessage = "", locale = "es" }: ContactFormProps) {
  const [fields, setFields] = useState<ContactFields>(() => createInitialFields(defaultMessage));
  const [feedback, setFeedback] = useState<string>("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const emailJsConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  };

  const canSend = useMemo(() => {
    return (
      fields.name.trim().length > 1 &&
      fields.email.trim().length > 5 &&
      fields.message.trim().length > 9
    );
  }, [fields]);

  function getTrackingContext() {
    if (typeof window === "undefined") {
      return "";
    }

    const searchParams = new URLSearchParams(window.location.search);
    const trackingKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
      "fbclid"
    ];

    const trackingLines = trackingKeys
      .map((key) => [key, searchParams.get(key)] as const)
      .filter(([, value]) => Boolean(value))
      .map(([key, value]) => `${key}: ${value}`);

    return trackingLines.join("\n");
  }

  function updateField(field: keyof ContactFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    if (feedback) {
      setFeedback("");
    }
  }

  function buildMessage(trackingContext: string = getTrackingContext()) {
    const greeting = locale === "en" ? `Hi Joaquin, I'm ${fields.name}.` : `Hola Joaquin, soy ${fields.name}.`;
    const contextLine =
      locale === "en"
        ? contextLabel
          ? `Service of interest: ${contextLabel}`
          : null
        : contextLabel
          ? `Servicio de interés: ${contextLabel}`
          : null;
    const companyLine =
      locale === "en"
        ? fields.company
          ? `Company/Project: ${fields.company}`
          : null
        : fields.company
          ? `Empresa/Proyecto: ${fields.company}`
          : null;
    const messageLabel = locale === "en" ? "Message:" : "Mensaje:";
    const trackingLabel = locale === "en" ? "\nTracking:\n" : "\nTracking:\n";

    return [
      greeting,
      contextLine,
      companyLine,
      `Email: ${fields.email}`,
      trackingContext ? `${trackingLabel}${trackingContext}` : null,
      "",
      messageLabel,
      fields.message
    ]
      .filter(Boolean)
      .join("\n");
  }

  function validate() {
    if (!canSend) {
      setFeedback(
        locale === "en"
          ? "Complete name, email, and a message with enough context before sending."
          : "Completa nombre, email y un mensaje con más contexto para enviar."
      );
      return false;
    }
    return true;
  }

  function openMailClient() {
    const subject = encodeURIComponent(
      locale === "en" ? `Inquiry from ${siteConfig.domain}` : `Consulta desde ${siteConfig.domain}`
    );
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  function sendByWhatsapp() {
    if (!validate()) {
      return;
    }

    const trackingContext = getTrackingContext();
    const text = encodeURIComponent(buildMessage(trackingContext));
    window.open(`https://wa.me/${siteConfig.whatsappRaw}?text=${text}`, "_blank", "noopener,noreferrer");
    setFeedback(
      locale === "en"
        ? "WhatsApp opened with the message ready to send."
        : "Se abrió WhatsApp con el mensaje listo para enviar."
    );
  }

  async function sendByEmail() {
    if (!validate()) {
      return;
    }

    const hasEmailJsConfig =
      Boolean(emailJsConfig.serviceId) &&
      Boolean(emailJsConfig.templateId) &&
      Boolean(emailJsConfig.publicKey);

    if (!hasEmailJsConfig) {
      openMailClient();
      setFeedback(
        locale === "en"
          ? "EmailJS environment config is missing. Your email client was opened."
          : "Falta configuración de EmailJS en entorno. Se abrió tu cliente de correo."
      );
      return;
    }

    try {
      setIsSendingEmail(true);
      const trackingContext = getTrackingContext();
      await emailjs.send(
        emailJsConfig.serviceId as string,
        emailJsConfig.templateId as string,
        {
          from_name: fields.name,
          from_email: fields.email,
          company: fields.company || (locale === "en" ? "Not specified" : "No especificado"),
          service_context: contextLabel || (locale === "en" ? "General inquiry" : "Consulta general"),
          tracking: trackingContext || (locale === "en" ? "No UTM" : "Sin UTM"),
          message: fields.message,
          to_email: siteConfig.email,
          reply_to: fields.email,
          website: siteConfig.domain
        },
        {
          publicKey: emailJsConfig.publicKey as string
        }
      );

      setFeedback(
        locale === "en"
          ? "Message sent successfully. I will reply soon."
          : "Mensaje enviado correctamente. Te responderé pronto."
      );
      setFields(createInitialFields(defaultMessage));
    } catch {
      openMailClient();
      setFeedback(
        locale === "en"
          ? "Could not send with EmailJS right now. Your email client was opened as fallback."
          : "No se pudo enviar por EmailJS en este momento. Se abrió tu cliente de correo como alternativa."
      );
    } finally {
      setIsSendingEmail(false);
    }
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
          {locale === "en" ? "Name" : "Nombre"}
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder={locale === "en" ? "Your name" : "Tu nombre"}
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
            placeholder={locale === "en" ? "you@email.com" : "tu@email.com"}
            className="w-full rounded-xl border border-[color:var(--panel-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-primary)]"
            required
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-[color:var(--color-dark)]">
        {locale === "en" ? "Company or project" : "Empresa o proyecto"}
        <input
          type="text"
          name="company"
          value={fields.company}
          onChange={(event) => updateField("company", event.target.value)}
          placeholder={
            locale === "en" ? "Company name (optional)" : "Nombre de tu empresa (opcional)"
          }
          className="w-full rounded-xl border border-[color:var(--panel-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-primary)]"
        />
      </label>
      <label className="space-y-2 text-sm font-medium text-[color:var(--color-dark)]">
        {locale === "en" ? "What do you want to solve?" : "¿Qué quieres resolver?"}
        <textarea
          name="message"
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={6}
          placeholder={
            locale === "en"
              ? "Tell me which process or problem you want to improve."
              : "Cuéntame el proceso o problema que quieres mejorar."
          }
          className="w-full resize-y rounded-xl border border-[color:var(--panel-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-primary)]"
          required
        />
      </label>
      <div className="flex flex-wrap gap-3">
        <button type="submit" className="btn-base btn-primary px-5 py-3">
          {locale === "en" ? "Send via WhatsApp" : "Enviar por WhatsApp"}
        </button>
        <button
          type="button"
          onClick={() => void sendByEmail()}
          className="btn-base btn-secondary px-5 py-3 disabled:cursor-not-allowed disabled:opacity-75"
          disabled={isSendingEmail}
        >
          {isSendingEmail ? (locale === "en" ? "Sending..." : "Enviando...") : locale === "en" ? "Send via Email" : "Enviar por Email"}
        </button>
      </div>
      <p className="text-xs leading-relaxed text-[color:var(--color-muted)]">
        {locale === "en" ? "You can also contact me directly at " : "También puedes escribir directamente a "}
        <a className="font-medium text-[color:var(--color-primary)]" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>{" "}
        {locale === "en" ? "or via WhatsApp at " : "o por WhatsApp al "}
        <a
          className="font-medium text-[color:var(--color-primary)]"
          href={`https://wa.me/${siteConfig.whatsappRaw}`}
          target="_blank"
          rel="noopener noreferrer"
        >
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
