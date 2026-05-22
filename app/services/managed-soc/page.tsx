import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Managed SOC | SaaviGenAI",
  "Managed security operations for organizations that need clear monitoring, triage, and response without adding unnecessary complexity.",
  "/services/managed-soc",
);

export default function ManagedSocPage() {
  return (
    <ServiceDetailPage
      label="Service"
      heading="Fully managed security operations center."
      subheading="A practical SOC capability for teams that need continuous security monitoring, alert triage, and response guidance without building a large internal operation first."
      outcomes={[
        "Improve visibility across priority systems, identities, and cloud services.",
        "Reduce alert noise through contextual triage and escalation paths.",
        "Create repeatable response motions that fit your current team and maturity.",
      ]}
      model={[
        "Define priority assets, escalation owners, and reporting expectations.",
        "Tune monitoring around meaningful risk signals instead of generic alert volume.",
        "Provide clear incident handling support and executive-ready summaries.",
        "Review posture and operating gaps continuously as your environment changes.",
      ]}
    />
  );
}
