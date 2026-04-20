import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";
import { getAllArticles, getArticlePath } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();
  const articles = getAllArticles();

  // Separate tutorials (root-level) from blog articles
  const tutorials = articles.filter((a) => a.category !== "Blog");
  const blogArticles = articles.filter((a) => a.category === "Blog");

  // ── Core pages ──────────────────────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      priority: 1.0,
      changeFrequency: "weekly",
    },
  ];

  // ── Tutorial / How-To pages (high priority — main content) ──────────────────
  const tutorialPages: MetadataRoute.Sitemap = tutorials.map((a) => ({
    url: `${base}${getArticlePath(a)}`,
    lastModified: new Date(a.updatedAt ?? a.publishedAt),
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  // ── Blog listing + blog articles ─────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/blog`,
      lastModified: now,
      priority: 0.8,
      changeFrequency: "weekly",
    },
    ...blogArticles.map((a) => ({
      url: `${base}${getArticlePath(a)}`,
      lastModified: new Date(a.updatedAt ?? a.publishedAt),
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];

  // ── Info / About pages ───────────────────────────────────────────────────────
  const infoPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/about`,
      lastModified: now,
      priority: 0.5,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      priority: 0.5,
      changeFrequency: "monthly",
    },
  ];

  // ── Legal pages (low priority) ───────────────────────────────────────────────
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/privacy`,
      lastModified: now,
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/terms`,
      lastModified: now,
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/legal`,
      lastModified: now,
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/editorial-policy`,
      lastModified: now,
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];

  return [...corePages, ...tutorialPages, ...blogPages, ...infoPages, ...legalPages];
}
