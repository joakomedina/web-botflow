import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Formulario de contacto y canales directos de WhatsApp y email para iniciar un proyecto de desarrollo, automatización o IA.",
  alternates: {
    canonical: "/contacto"
  }
};

const contactCards = [
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`
  },
  {
    title: "WhatsApp",
    value: siteConfig.whatsappDisplay,
    href: `https://wa.me/${siteConfig.whatsappRaw}`
  },
  {
    title: "Dominio",
    value: siteConfig.domain,
    href: siteConfig.siteUrl
  }
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntame qué proceso quieres mejorar"
        description="Podemos empezar por un diagnóstico rápido y definir qué solución te dará mayor impacto primero."
      />
      <section className="pb-18">
        <div className="container-shell grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            {contactCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06}>
                <article className="panel-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-secondary)]">
                    {card.title}
                  </p>
                  <Link
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-3 inline-block text-base font-semibold text-[color:var(--color-dark)] transition hover:text-[color:var(--color-primary)]"
                  >
                    {card.value}
                  </Link>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <article className="rounded-2xl bg-[color:var(--color-dark)] p-6 text-white">
                <h2 className="text-lg font-semibold">Respuesta rápida por WhatsApp</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Si prefieres una vía directa, te atiendo por WhatsApp para validar alcance y
                  definir próximos pasos.
                </p>
                <Link
                  href={`https://wa.me/${siteConfig.whatsappRaw}`}
                  className="btn-base btn-light mt-4 px-4 py-2"
                >
                  Abrir WhatsApp
                </Link>
              </article>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
