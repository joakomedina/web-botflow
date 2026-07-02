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
import { caseStudiesEn } from "@/data/case-studies-en";
import { processStepsEn } from "@/data/process-en";

export const metadata: Metadata = {
  title: "Recover time to grow your business",
  description:
    "In 15 days we automate the process that is wasting the most time in your company, using automation and artificial intelligence.",
  alternates: {
    canonical: "/en"
  }
};

const heroContent = {
  badge: "Sprint 15",
  title: "Is your company losing hours every day to repetitive tasks?",
  descriptionLead: "Recover that time.",
  description:
    "In just 15 days we automate the process consuming the most time in your company.",
  primaryCtaLabel: "Request a free diagnosis",
  primaryCtaHref: "/en/contacto",
  secondaryCtaLabel: "See how it works",
  secondaryCtaHref: "/en#how-it-works",
  centralTag: "Core proposition",
  centralTitle: "We don't just build websites. We design digital systems that work for your business.",
  centralItems: [
    "Process structure and technical execution in one workstream.",
    "Integrations, automation, and channels like WhatsApp connected to real workflows."
  ],
  domainLabel: "Main domain:",
  imageAlt: "Automation workflows and AI agents in n8n"
};

const heroDiagram = {
  beforeLabel: "Before",
  beforeSteps: ["WhatsApp", "Employee", "Excel", "Email", "Client"],
  afterLabel: "After",
  afterSteps: ["WhatsApp", "BOTFLOW"],
  afterNote: "Everything updated automatically",
  closingLine: "Five seconds and the whole operation is clear."
};

const painPoints = [
  "❌ Your team spends hours copying information.",
  "❌ You answer the same questions over and over.",
  "❌ You use Excel to manage important processes.",
  "❌ You have tools that are not connected to each other.",
  "❌ There are tasks only one person knows how to do.",
  "❌ Your company has grown but your processes are still manual."
];

export default function HomeEnPage() {
  return (
    <>
      <Hero content={heroContent} diagram={heroDiagram} />
      <ProblemSection
        eyebrow="Does this sound familiar?"
        title="Do any of these situations happen in your company?"
        description="We are not talking about us yet. We are talking about your business."
        painPoints={painPoints}
        highlight="If you said yes to several of these, there is probably an automation that could give you back several hours every week."
      />
      <Sprint15Section
        eyebrow="The product"
        title="Sprint 15"
        tagline="The product every one of our clients starts with."
        description="In just 15 days we implement an automation that eliminates one of the biggest bottlenecks in your company."
        includes={["Diagnosis", "Design", "Development", "Training", "Go-live"]}
        buttonLabel="Request a free diagnosis"
        buttonHref="/en/contacto"
      />
      <ProcessSection
        id="how-it-works"
        eyebrow="How it works"
        title="How Sprint 15 works"
        description="Four steps. No unnecessary complexity."
        stepLabelPrefix="Step"
        steps={processStepsEn}
      />
      <CaseStudiesSection
        caseStudies={caseStudiesEn}
        eyebrow="Real cases"
        title="We don't show projects. We show solved problems."
        description="Every case follows the same logic: a process that was costing time, solved with automation."
        buttonLabel="Request a free diagnosis"
        buttonHref="/en/contacto"
        beforeLabel="Before"
        afterLabel="After"
      />
      <TimeCalculator locale="en" />
      <GuaranteeSection
        eyebrow="Our guarantee"
        leadIn="If we don't see a real opportunity to recover time in your company,"
        highlight="we will tell you."
        description="We don't sell automations that don't deliver value."
        buttonLabel="Request a free diagnosis"
        buttonHref="/en/contacto"
      />
      <AboutSection
        eyebrow="About me"
        title="Technology with purpose, focused on people and outcomes."
        description="I'm Joaquin Arvelo. My approach combines psychology, business, and technology to build digital systems that truly simplify work."
        paragraph1="After reinventing my career as a Venezuelan migrant in Spain, I learned that growth is not just about tools — it is about building a clear digital foundation that fits each business reality."
        paragraph2="I also learned something essential: growth is never done alone. That is why I offer these services, to help you build systems that move your business forward with clarity."
        buttonLabel="Learn my approach"
        buttonHref="/en/sobre-mi"
        strengthsTitle="Key strengths"
        strengths={[
          "Business and human perspective before technology decisions.",
          "More than 7 years designing digital systems and automations.",
          "Practical support for professionals, freelancers, and small businesses."
        ]}
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
