import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";
import { getAllArticles, getArticlePath } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const articles = getAllArticles();

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/blog`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/about`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/legal`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/editorial-policy`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const articlePages = articles.map((a) => ({
    url: `${base}${getArticlePath(a)}`,
    lastModified: new Date(a.updatedAt ?? a.publishedAt),
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...articlePages];
}
