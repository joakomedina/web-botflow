import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { PageHero } from "@/components/PageHero";
import { ProcessSection } from "@/components/ProcessSection";
import { Sprint15Section } from "@/components/Sprint15Section";
import { processStepsEn } from "@/data/process-en";

export const metadata: Metadata = {
  title: "Sprint 15: automate your slowest process in 15 days",
  description:
    "Sprint 15 is the Botflowstudio programme to diagnose, design, and implement in 15 days the automation that gives your company back the most time.",
  alternates: {
    canonical: "/en/sprint-15"
  }
};

export default function Sprint15EnPage() {
  return (
    <>
      <PageHero
        eyebrow="Sprint 15"
        title="One problem. Fifteen days. Measurable results."
        description="We diagnose, design, and implement the automation that eliminates your company's biggest time bottleneck."
      />
      <Sprint15Section
        eyebrow="What's included"
        title="Sprint 15"
        tagline="The product every one of our clients starts with."
        description="In just 15 days we implement an automation that eliminates one of the biggest bottlenecks in your company. No endless projects. No changing the way you work. Measurable results from the first automation."
        includes={[
          "Discovery meeting",
          "Process analysis",
          "Design",
          "Development",
          "Necessary integrations",
          "Training",
          "Go-live",
          "Initial follow-up"
        ]}
        buttonLabel="Request a free diagnosis"
        buttonHref="/en/contacto"
      />
      <ProcessSection
        eyebrow="How it works"
        title="How Sprint 15 works"
        description="Four steps. No unnecessary complexity."
        stepLabelPrefix="Step"
        steps={processStepsEn}
      />
      <GuaranteeSection
        eyebrow="Our guarantee"
        leadIn="If we don't see a real opportunity to recover time in your company,"
        highlight="we will tell you."
        description="We don't sell automations that don't deliver value."
        buttonLabel="Request a free diagnosis"
        buttonHref="/en/contacto"
      />
      <CTASection
        title="Which process is wasting the most time in your company?"
        description="Let's find out together."
        buttonText="Request a free diagnosis"
        buttonLink="/en/contacto"
      />
    </>
  );
}
