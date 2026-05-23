import { Mail } from "lucide-react";
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
            heading="Get in touch"
            subheading="Reach out via email for inquiries about our services."
          />
        </div>

        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-secondary mb-8">
            For all inquiries, please contact us via email:
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-block bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            <Mail className="mr-3 h-5 w-5" />
            {CONTACT_EMAIL}
          </a>
          <p className="mt-8 text-sm leading-relaxed text-secondary">
            We aim to respond to all emails within 1-2 business days.
          </p>
        </div>
      </div>
    </section>
  );
}
