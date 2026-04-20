import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";
import { getAllArticles, getArticlePath } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();
  const articles = getAllArticles();

  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    // Homepage — highest priority
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Core download / tutorial pages (like 3pattiok.pk Quick Links)
    {
      url: `${base}/3-patti-blue-apk-download`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/3-patti-blue-for-pc`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/3-patti-blue-for-ios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/3-patti-blue-winning-tricks`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // How-To / Tutorial pages (like 3pattiok.pk How-To Guides section)
    {
      url: `${base}/3-patti-blue-signup`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/3-patti-blue-login`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/3-patti-blue-deposit`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/3-patti-blue-withdraw`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/3-patti-blue-bonus`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/3-patti-blue-vip-program`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/3-patti-blue-ips-exceed-issue`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // Blog listing page
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Legal / info pages (like 3pattiok.pk Legal section)
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/legal`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/editorial-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // ── Dynamic blog / article pages ──────────────────────────────────────────
  // Only include Blog-category articles here; tutorials are already listed above
  const blogPages: MetadataRoute.Sitemap = articles
    .filter((a) => a.category === "Blog")
    .map((a) => ({
      url: `${base}${getArticlePath(a)}`,
      lastModified: new Date(a.updatedAt ?? a.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...staticPages, ...blogPages];
}
