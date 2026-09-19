import type { MetadataRoute } from "next";
import { journeys } from "@/lib/journeys";
import { site } from "@/lib/site";

function absoluteUrl(path = "") {
  return `${site.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/journeys"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/destinations"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/about"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/enquire"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/contact"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const journeyPages: MetadataRoute.Sitemap = journeys.map((journey) => ({
    url: absoluteUrl(`/journeys/${journey.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...journeyPages];
}
