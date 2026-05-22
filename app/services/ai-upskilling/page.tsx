import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "AI Upskilling | SaaviGenAI",
  "Practical AI upskilling for security, governance, and business teams that need safe, confident adoption of AI tools.",
  "/services/ai-upskilling",
);

export default function AiUpskillingPage() {
  return (
    <ServiceDetailPage
      label="Service"
      heading="AI upskilling for secure adoption."
      subheading="Practical enablement for teams that need to understand AI opportunities, limitations, governance expectations, and security risks without getting lost in hype."
      outcomes={[
        "Help teams understand AI concepts, risks, and safe usage patterns.",
        "Create shared language between security, governance, and business stakeholders.",
        "Enable confident adoption of AI tools with practical guardrails.",
      ]}
      model={[
        "Assess current AI literacy, use cases, and risk concerns.",
        "Tailor workshops for security teams, leaders, and operational users.",
        "Use real-world scenarios to connect governance expectations to daily decisions.",
        "Leave teams with clear next steps, reference material, and escalation paths.",
      ]}
    />
  );
}
