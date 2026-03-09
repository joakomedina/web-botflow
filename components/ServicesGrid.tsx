import type { Service } from "@/data/services";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { ServiceCard } from "./ServiceCard";

type ServicesGridProps = {
  services: Service[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function ServicesGrid({
  services,
  eyebrow = "Servicios",
  title = "Servicios",
  description = "Servicios diseñados para construir soluciones útiles, medibles y escalables."
}: ServicesGridProps) {
  return (
    <section className="py-18">
      <div className="container-shell">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
