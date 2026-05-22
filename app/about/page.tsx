import { Eye, Handshake, Shield } from "lucide-react";
import { FooterCTABand } from "@/components/sections/FooterCTABand";
import { HeroSection } from "@/components/sections/HeroSection";
import { DifferentiatorCard } from "@/components/ui/DifferentiatorCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About | SaaviGenAI",
  "Learn about SaaviGenAI's practitioner-led approach to managed security operations and AI governance.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <HeroSection
        label="About Us"
        heading="Practitioner-led security for a changing AI landscape."
        subheading="SaaviGenAI exists to help organizations adopt AI-enabled ways of working without losing control of security, governance, and operational clarity."
      />

      <section className="bg-base py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionLabel
              label="Positioning"
              heading="Security outcomes without enterprise theater."
              subheading="We focus on practical operating models, usable controls, and clear communication. The aim is to make security and AI governance understandable enough to run, not just impressive enough to present."
            />
            <div className="rounded-2xl border border-default bg-surface p-6 md:p-8">
              <p className="leading-relaxed text-secondary">
                SaaviGenAI supports mid-market and enterprise teams that need a
                steady partner across security operations, AI detection and
                response, and practical workforce enablement. We keep
                recommendations grounded in operational reality so the business
                can move forward confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <SectionLabel
            label="Values"
            heading="Principles that shape every engagement."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <DifferentiatorCard
              icon={<Shield className="h-6 w-6" />}
              title="Trust through discipline"
              description="Security work should be consistent, documented, and explainable under pressure."
            />
            <DifferentiatorCard
              icon={<Eye className="h-6 w-6" />}
              title="Clarity over noise"
              description="We translate complex signals into focused decisions, priorities, and next steps."
            />
            <DifferentiatorCard
              icon={<Handshake className="h-6 w-6" />}
              title="Partner mindset"
              description="We work alongside your team with respect for existing constraints and business goals."
            />
          </div>
        </div>
      </section>

      <section className="bg-base py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <SectionLabel
            label="Who We Help"
            heading="Teams balancing speed, security, and AI adoption."
            subheading="SaaviGenAI is designed for organizations that need the confidence of experienced security operations and the flexibility to evolve their AI governance over time."
          />
        </div>
      </section>

      <FooterCTABand />
    </>
  );
}
