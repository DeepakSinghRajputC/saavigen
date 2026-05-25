import { FooterCTABand } from "@/components/sections/FooterCTABand";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Testimonials | SaaviGenAI",
  "Hear from the security, engineering, and risk leaders who partnered with SaaviGenAI to secure their AI-powered enterprises.",
  "/testimonials",
);

const testimonials = [
  {
    quote:
      "SaaviSOC transformed how we handle security operations. We went from reactive fire-fighting to proactive threat management in under three months. The compliance reporting aligned to PCI-DSS saved our audit team weeks of manual work — and for the first time our board can actually see what our security posture looks like in real terms.",
    name: "Sarah Chen",
    title: "Chief Information Security Officer",
    company: "Nexlance Financial Services",
    service: "Saavi-SOC",
  },
  {
    quote:
      "As a healthcare platform, our compliance posture is non-negotiable. SaaviGenAI built monitoring coverage aligned to HIPAA from day one, with zero disruption to our clinical operations during onboarding. What I value most is that the team speaks in business outcomes, not security jargon — which is exactly what our board and compliance committee needed.",
    name: "Marcus Williams",
    title: "Chief Technology Officer",
    company: "Healthbridge Technologies",
    service: "Saavi-SOC",
  },
  {
    quote:
      "We deployed three production LLM agents before realising we had zero visibility into what they were actually doing at runtime. Saavi-AIDR gave us a complete audit trail and flagged an agent misuse pattern within the first two weeks — an unexpected tool invocation that was quietly accessing data outside its intended scope. We would never have found that otherwise.",
    name: "Priya Nair",
    title: "Head of AI Platform",
    company: "Cognex Commerce",
    service: "Saavi-AIDR",
  },
  {
    quote:
      "The Enterprise LLM Security programme changed how our security team thinks about AI risk entirely. Practitioners teaching practitioners — real scenarios from real environments, no fluff. Our analysts now speak confidently about prompt injection, agentic risk, and OWASP LLM Top 10 in customer conversations and executive briefings.",
    name: "James Morrison",
    title: "VP Information Security",
    company: "Meridian Group",
    service: "AI Upskilling",
  },
  {
    quote:
      "SaaviGenAI doesn't just protect AI systems — they help you build the governance framework around them. The combination of AIDR monitoring and the upskilling workshops gave us something credible to present to regulators and our risk committee. It showed we're not just adopting AI, we're adopting it responsibly.",
    name: "Ananya Sharma",
    title: "Chief Risk Officer",
    company: "Stratiq Ventures",
    service: "Saavi-AIDR + AI Upskilling",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <HeroSection
        label="Testimonials"
        heading="What our clients say."
        subheading="Hear from the security, engineering, and risk leaders who partnered with SaaviGenAI to secure their AI-powered enterprises."
      />

      <section className="bg-base py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <SectionLabel
            label="Client Stories"
            heading="Real outcomes from real engagements."
            subheading="Across managed SOC, AI detection and response, and upskilling programmes — here is what our clients experienced."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="flex flex-col rounded-2xl border border-default bg-surface p-6 md:p-8"
              >
                <div className="mb-4 h-0.5 w-8 bg-gold" />
                <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-secondary italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-primary">{t.name}</p>
                    <p className="text-xs text-secondary">{t.title}</p>
                    <p className="text-xs text-muted">{t.company}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-default bg-base px-3 py-1 font-mono text-xs text-gold">
                    {t.service}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <SectionLabel
            label="What They Value Most"
            heading="Patterns across every engagement."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                heading: "Speed to protection",
                body: "Clients consistently highlight how quickly SaaviSOC gets them from onboarding to active security coverage — weeks, not months.",
              },
              {
                heading: "Visibility they never had",
                body: "Saavi-AIDR surfaces AI risks that no existing tool in the security stack was able to see — prompts, agent behaviour, tool calls, and data exposure.",
              },
              {
                heading: "Capability that sticks",
                body: "Upskilling participants describe the training as the first AI programme that gave them workflows they used the following morning, not slides they filed away.",
              },
            ].map((item) => (
              <article
                key={item.heading}
                className="rounded-2xl border border-default bg-base p-6 md:p-8"
              >
                <div className="mb-4 h-0.5 w-8 bg-gold" />
                <h3 className="mb-3 font-display text-xl font-bold text-primary">
                  {item.heading}
                </h3>
                <p className="text-sm leading-relaxed text-secondary">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FooterCTABand />
    </>
  );
}
