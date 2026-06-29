import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { CTASection } from "@/components/CTASection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { Sprint15Section } from "@/components/Sprint15Section";
import { TimeCalculator } from "@/components/TimeCalculator";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Recupera tiempo para hacer crecer tu negocio",
  description:
    "En 15 días automatizamos el proceso que más tiempo hace perder a tu empresa, mediante automatización e inteligencia artificial.",
  alternates: {
    canonical: "/"
  }
};

const heroContent = {
  badge: "Sprint 15",
  title: "¿Tu empresa pierde horas cada día haciendo tareas repetitivas?",
  descriptionLead: "Recupera ese tiempo.",
  description:
    "En solo 15 días automatizamos el proceso que más tiempo consume en tu empresa.",
  primaryCtaLabel: "Solicitar diagnóstico gratuito",
  primaryCtaHref: "/contacto",
  secondaryCtaLabel: "Ver cómo funciona",
  secondaryCtaHref: "/#como-funciona",
  centralTag: "Propuesta central",
  centralTitle: "No solo hago webs. Diseño sistemas digitales que trabajan para el negocio.",
  centralItems: [
    "Estructura de procesos + ejecución técnica en una sola línea de trabajo.",
    "Integraciones, automatización y canales como WhatsApp conectados al flujo real."
  ],
  domainLabel: "Dominio principal:",
  imageAlt: "Vista de automatizaciones y agentes IA con n8n"
};

const heroDiagram = {
  beforeLabel: "Antes",
  beforeSteps: ["WhatsApp", "Empleado", "Excel", "Correo", "Cliente"],
  afterLabel: "Después",
  afterSteps: ["WhatsApp", "BOTFLOW"],
  afterNote: "Todo actualizado automáticamente",
  closingLine: "En cinco segundos ya entendí el negocio."
};

const painPoints = [
  "❌ Tu equipo pierde horas copiando información.",
  "❌ Respondes las mismas preguntas una y otra vez.",
  "❌ Utilizas Excel para controlar procesos importantes.",
  "❌ Tienes herramientas que no están conectadas.",
  "❌ Hay tareas que solo sabe hacer una persona.",
  "❌ Tu empresa ha crecido pero tus procesos siguen siendo manuales."
];

export default function HomePage() {
  return (
    <>
      <Hero content={heroContent} diagram={heroDiagram} />
      <ProblemSection
        eyebrow="¿Te ocurre esto?"
        title="¿Te ocurre alguna de estas situaciones?"
        description="No hablamos todavía de nosotros. Hablamos de tu empresa."
        painPoints={painPoints}
        highlight="Si has respondido sí a varias de estas situaciones, probablemente exista una automatización que pueda devolverte varias horas cada semana."
      />
      <Sprint15Section />
      <ProcessSection
        id="como-funciona"
        eyebrow="Cómo funciona"
        title="Cómo funciona Sprint 15"
        description="Cuatro pasos, sin complicación."
        stepLabelPrefix="Paso"
      />
      <CaseStudiesSection caseStudies={caseStudies} />
      <TimeCalculator />
      <GuaranteeSection />
      <AboutSection />
      <CTASection
        title="¿Cuál es el proceso que más tiempo hace perder a tu empresa?"
        description="Vamos a descubrirlo juntos."
        buttonText="Solicitar diagnóstico gratuito"
        buttonLink="/contacto"
      />
    </>
  );
}
