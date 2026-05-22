import { Button } from "@/components/ui/Button";

type HeroSectionProps = {
  label: string;
  heading: string;
  subheading: string;
};

export function HeroSection({ label, heading, subheading }: HeroSectionProps) {
  return (
    <section className="bg-navy py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <p className="mb-5 font-mono text-xs uppercase tracking-widest text-gold">
          {label}
        </p>
        <h1 className="mb-5 max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
          {heading}
        </h1>
        <p className="mb-8 max-w-2xl leading-relaxed text-on-dark md:text-lg">
          {subheading}
        </p>
        <Button href="/contact" variant="gold">
          Contact Me
        </Button>
      </div>
    </section>
  );
}
