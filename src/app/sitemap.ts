import type { MetadataRoute } from "next";

const baseUrl = "https://lakshmanarundev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["/experience", "/projects", "/skills", "/contact"].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
