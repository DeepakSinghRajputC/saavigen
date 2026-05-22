import { Mail } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact | SaaviGenAI",
  "Contact SaaviGenAI about managed SOC, managed AIDR, or AI upskilling services.",
  "/contact",
);

export default function ContactPage() {
  return (
    <section className="bg-base py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mb-8 md:mb-10">
          <SectionLabel
            label="Contact"
            heading="Tell us what you are trying to secure."
            subheading="Share your goals, current constraints, and the service area you are most interested in. We will use that context to shape the first conversation."
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ContactForm />
          <aside className="rounded-2xl border border-default bg-surface p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-primary">
              Contact details
            </h2>
            <div className="mt-6 flex items-center gap-3 text-primary">
              <Mail className="h-5 w-5 text-gold" />
              <a
                className="text-sm font-semibold text-teal transition-colors hover:text-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-secondary">
              Send a short note about your priorities and we will respond with
              clear next steps.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
