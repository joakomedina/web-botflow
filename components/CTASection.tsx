import Link from "next/link";
import { Reveal } from "./Reveal";

type CTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="py-18">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[color:var(--color-dark)] p-8 text-white md:p-12">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--color-secondary)]/25 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-[color:var(--color-accent)]/25 blur-3xl"
            />
            <div className="relative">
              <h2 className="text-balance max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                {description}
              </p>
              <Link
                href={buttonLink}
                className="btn-base btn-light mt-8 px-6 py-3"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
