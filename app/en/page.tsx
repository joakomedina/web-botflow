import type { Metadata } from "next";
import { AliadoTecnologicoCard } from "@/components/AliadoTecnologicoCard";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SolutionSection } from "@/components/SolutionSection";
import { processStepsEn } from "@/data/process-en";
import { featuredProjectsEn } from "@/data/projects-en";
import { servicesEn } from "@/data/services-en";

export const metadata: Metadata = {
  title: "Web development, automation, and AI for businesses",
  description:
    "I build digital systems that connect websites, applications, automation, and AI to reduce manual workload.",
  alternates: {
    canonical: "/en"
  }
};

export default function HomeEnPage() {
  return (
    <>
      <Hero
        content={{
          badge: "Development + automation + AI",
          title: "I build digital systems that automate your business",
          description:
            "Websites, apps, and AI agents that remove manual tasks, connect your tools, and help you scale without extra complexity.",
          primaryCtaLabel: "Let's discuss your project",
          primaryCtaHref: "/en/contacto",
          secondaryCtaLabel: "View services",
          secondaryCtaHref: "/en/servicios",
          centralTag: "Core proposition",
          centralTitle: "I do more than websites. I design digital systems that work for your business.",
          centralItems: [
            "Process structure and technical execution in one workstream.",
            "Integrations, automation, and channels like WhatsApp connected to real workflows."
          ],
          domainLabel: "Main domain:",
          imageAlt: "Automation workflows and AI agents in n8n"
        }}
      />
      <ProblemSection
        eyebrow="Problem"
        title="Most companies already have tools. What they don't have is a system."
        description="When every piece works in isolation, teams end up doing manually what should be automated."
        painPoints={[
          "Too many manual tasks in daily operations.",
          "Disconnected tools causing duplicated work.",
          "Slow support, follow-up, and sales processes.",
          "Isolated technology with low business impact."
        ]}
        highlight="The issue is not lack of tools. The issue is lack of system."
      />
      <SolutionSection
        eyebrow="Solution"
        title="I design digital systems that turn scattered processes into simpler, scalable operations."
        description="I combine web development, apps, automation, integrations, and AI so technology creates real operational impact."
        items={[
          "Clear and maintainable architecture",
          "Integrations aligned with business workflow",
          "AI applied to concrete operational tasks"
        ]}
      />
      <AliadoTecnologicoCard
        badge="Not sure where to start?"
        title="Your technology ally to start digitizing your business"
        intro="Many professionals know they need to improve their digital presence, but they don't know where to begin or what tools to choose."
        body="If you are self-employed or just starting your business, I help you build the digital foundation you need to work with systems and automate key tasks."
        recommendedLabel="Recommended starter service"
        price="From 1200 EUR"
        includesTitle="Includes"
        includedItems={[
          "Professional website for your business",
          "Lead capture system",
          "First process automation",
          "Technology diagnosis for your business"
        ]}
        buttonLabel="See how I can help you ->"
        buttonHref="/en/aliado-tecnologico"
      />
      <ServicesGrid
        services={servicesEn}
        eyebrow="Services"
        title="Services to build a complete digital system"
        description="I don't build isolated pieces. Every solution is designed to fit a real operational workflow."
      />
      <ProjectsPreview
        projects={featuredProjectsEn}
        eyebrow="Projects"
        title="Delivered and in-progress projects"
        description="Every project follows the same principle: connecting technology, process, and automation for real impact."
        buttonLabel="View all projects"
        buttonHref="/en/proyectos"
        projectCardLabels={{
          completed: "Completed",
          inProgress: "In progress",
          goal: "Goal:",
          imageAltPrefix: "Project image:"
        }}
      />
      <ProcessSection
        eyebrow="Process"
        title="How I turn a need into an operational solution"
        description="The approach prioritizes execution and outcomes, not unnecessary complexity."
        stepLabelPrefix="Step"
        steps={processStepsEn}
      />
      <AboutSection
        eyebrow="About me"
        title="Technology with purpose, focused on people and outcomes."
        description="I'm Joaquin Arvelo. My approach combines psychology, business, and technology to build digital systems that truly simplify work."
        paragraph1="After reinventing my career as a Venezuelan migrant in Spain, I learned that growth is not just about tools. It is about building a clear digital base that supports each business reality."
        paragraph2="I also learned something essential: growth is never done alone. That is why I offer my services, to help you build systems that move your business forward with clarity."
        buttonLabel="Learn my approach"
        buttonHref="/en/sobre-mi"
        strengthsTitle="Key strengths"
        strengths={[
          "Business and human perspective before technology decisions.",
          "More than 7 years designing digital systems and automation.",
          "Practical support for professionals, freelancers, and small businesses."
        ]}
      />
      <CTASection
        title="If your business does not need more tools, but a system that works, let's talk."
        description="We review your current operation and define a clear route to reduce manual work and improve outcomes."
        buttonText="Book a meeting"
        buttonLink="/en/contacto"
      />
    </>
  );
}

