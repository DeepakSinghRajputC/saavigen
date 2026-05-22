export const CONTACT_EMAIL = "contact@saavigen.ai";

export const services = [
  {
    number: "01",
    title: "Managed SOC",
    href: "/services/managed-soc",
    description:
      "A practitioner-led security operations capability that monitors, triages, and responds to threats without adding operational drag.",
  },
  {
    number: "02",
    title: "Managed AIDR",
    href: "/services/aidr",
    description:
      "AI detection and response support for teams adopting intelligent workflows, autonomous agents, and emerging AI systems.",
  },
  {
    number: "03",
    title: "AI Upskilling",
    href: "/services/ai-upskilling",
    description:
      "Practical enablement that helps security, governance, and business teams use AI safely, confidently, and responsibly.",
  },
];

export const navigation = [
  { label: "Managed SOC", href: "/services/managed-soc" },
  { label: "AIDR", href: "/services/aidr" },
  { label: "AI Upskilling", href: "/services/ai-upskilling" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const logoPath = `/images/SaaviGenAI_Key_Logo.png`;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://saavigen.ai";
