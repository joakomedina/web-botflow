import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { PageHero } from "@/components/PageHero";
import { ProcessSection } from "@/components/ProcessSection";
import { Sprint15Section } from "@/components/Sprint15Section";

export const metadata: Metadata = {
  title: "Sprint 15: automatiza tu proceso más lento en 15 días",
  description:
    "Sprint 15 es el programa de botflow.top para diagnosticar, diseñar e implantar en 15 días la automatización que más tiempo le devuelve a tu empresa.",
  alternates: {
    canonical: "/sprint-15"
  }
};

export default function Sprint15Page() {
  return (
    <>
      <PageHero
        eyebrow="Sprint 15"
        title="En 15 días automatizamos el proceso que más tiempo hace perder a tu empresa"
        description="Diagnóstico, diseño, desarrollo, formación y puesta en marcha. Sin contratos largos ni promesas vacías: un único cuello de botella resuelto."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Sprint 15" }]}
        primaryCta={{ label: "Solicitar diagnóstico gratuito", href: "/contacto" }}
        secondaryCta={{ label: "Ver cómo funciona", href: "/#como-funciona" }}
      />
      <Sprint15Section
        eyebrow="Qué incluye"
        description="Un sprint de 15 días enfocado en un único proceso: el que más tiempo le cuesta a tu equipo."
      />
      <ProcessSection
        eyebrow="Cómo funciona"
        title="Las cuatro fases de un Sprint 15"
        description="El mismo enfoque para cualquier negocio: diagnóstico claro, foco en el mayor impacto y entrega rápida."
        stepLabelPrefix="Paso"
      />
      <GuaranteeSection />
      <CTASection
        title="¿Cuál es el proceso que más tiempo hace perder a tu empresa?"
        description="Vamos a descubrirlo juntos en una llamada de diagnóstico gratuita."
        buttonText="Solicitar diagnóstico gratuito"
        buttonLink="/contacto"
      />
    </>
  );
}
