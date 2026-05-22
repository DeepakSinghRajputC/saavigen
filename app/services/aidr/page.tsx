import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Managed AIDR | SaaviGenAI",
  "Managed AI detection and response support for organizations adopting copilots, agents, models, and AI-enabled workflows.",
  "/services/aidr",
);

export default function AidrPage() {
  return (
    <ServiceDetailPage
      label="Service"
      heading="Managed AI detection and response."
      subheading="Support for identifying, monitoring, and responding to the new security and governance risks introduced by AI tools, models, agents, and automated workflows."
      outcomes={[
        "Identify how AI systems, data flows, and automations change your risk profile.",
        "Monitor for misuse, unsafe behavior, and governance gaps around AI adoption.",
        "Build response playbooks for incidents involving AI-enabled systems.",
      ]}
      model={[
        "Map AI use cases, ownership, data exposure, and operational dependencies.",
        "Define meaningful detection and review points for high-risk workflows.",
        "Create practical response actions for prompt leakage, data misuse, and agentic failures.",
        "Report AI risk in language security, governance, and business leaders can use.",
      ]}
    />
  );
}
