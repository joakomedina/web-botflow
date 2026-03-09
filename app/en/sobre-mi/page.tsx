import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About me | Joaquin Arvelo",
  description:
    "Learn about Joaquin Arvelo's approach to designing and implementing digital systems that combine strategy, automation, and AI.",
  alternates: {
    canonical: "/en/sobre-mi"
  }
};

const aboutImageRatio = 1200 / 581;

export default function SobreMiEnPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Joaquin Arvelo"
        description="I work with an integrated perspective across people, business, and technology to build digital systems that truly simplify daily work."
        breadcrumbs={[{ label: "Home", href: "/en" }, { label: "About" }]}
        primaryCta={{ label: "Talk with me", href: "/en/contacto" }}
      />
      <section className="py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="panel-card p-8">
              <div
                className="relative mb-6 overflow-hidden rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)]"
                style={{ aspectRatio: aboutImageRatio.toString() }}
              >
                <Image
                  src="/images/about/joaquin-arvelo.jpg"
                  alt="Joaquin Arvelo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain object-center p-1"
                />
              </div>
              <SectionTitle
                title="Technology with purpose"
                description="It is not only about implementing tools. It is about building systems that make sense for the people using them."
              />
              <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
                My original background is psychology. For years I worked understanding how people
                make decisions, face problems, and build meaningful change.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)]">
                Later, as a Venezuelan migrant in Spain, I had to reinvent myself professionally.
                It was a long learning process in which I trained in technology, data analysis,
                and digital solution development.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)]">
                Today I have more than 7 years of experience in the tech sector, designing digital
                systems, automations, and tools that help businesses and professionals work more
                efficiently.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)]">
                That process taught me something central in how I work: growth is never done alone.
                That is why my approach is not only about delivering technology, but about guiding
                processes and building useful, sustainable solutions aligned with each business
                reality.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="panel-card p-8">
              <SectionTitle
                title="How I translate this into real work"
                description="Clear, applied technology focused on outcomes."
              />
              <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
                {[
                  "Understand the business problem first, then choose technology.",
                  "Simplify workflows to free real operational time.",
                  "Design maintainable and scalable systems from a solid base.",
                  "Support professionals, freelancers, and small businesses in digital growth.",
                  "Apply automation and AI with practical criteria, not decoration."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] p-4">
                <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                  This approach led to the{" "}
                  <strong className="font-semibold text-[color:var(--color-dark)]">
                    Your technology ally
                  </strong>{" "}
                  service: a digital foundation designed for those starting to structure how their
                  business system works.
                </p>
                <Link
                  href="/en/aliado-tecnologico"
                  className="btn-base btn-primary mt-4 px-4 py-2 text-xs md:text-sm"
                >
                  View service
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
      <CTASection
        title="If you want to build a clear and useful digital foundation for your business, we can work on it."
        description="My goal is to help you build systems that simplify processes and let you grow with more control."
        buttonText="Contact now"
        buttonLink="/en/contacto"
      />
    </>
  );
}
