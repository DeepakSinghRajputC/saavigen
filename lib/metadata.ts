import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

const logoImage = "/images/SaaviGenAI_Key_Logo.png";

export function pageMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "SaaviGenAI",
      type: "website",
      images: [
        {
          url: logoImage,
          width: 1024,
          height: 1024,
          alt: "SaaviGenAI key logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [logoImage],
    },
  };
}
