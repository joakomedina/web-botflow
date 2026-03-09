import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact form and direct WhatsApp/email channels to start a web development, automation, or AI project.",
  alternates: {
    canonical: "/en/contacto"
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
    title: "Domain",
    value: siteConfig.domain,
    href: siteConfig.siteUrl
  }
];

export default function ContactoEnPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell me which process you want to improve"
        description="We can start with a quick diagnosis and define which solution will create the highest impact first."
        breadcrumbs={[{ label: "Home", href: "/en" }, { label: "Contact" }]}
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
                <h2 className="text-lg font-semibold">Quick response on WhatsApp</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  If you prefer a direct channel, I can help you on WhatsApp to validate scope and
                  define next steps.
                </p>
                <Link
                  href={`https://wa.me/${siteConfig.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-light mt-4 px-4 py-2"
                >
                  Open WhatsApp
                </Link>
              </article>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <ContactForm locale="en" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
