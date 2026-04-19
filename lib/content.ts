import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  keywords?: string[];
  ogImage?: string;
  /** Public path e.g. /3-patti-blue.webp — shown on article & blog cards */
  featuredImage?: string;
  /** Required for accessibility when featuredImage is set; used as img alt */
  featuredImageAlt?: string;
  faqs?: { question: string; answer: string }[];
  relatedSlugs?: string[];
  downloadCta?: boolean;
  content: string;
};

export function getArticle(slug: string): Article | null {
  try {
    const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return { slug, ...(data as Omit<Article, "slug" | "content">), content };
  } catch {
    return null;
  }
}

/** Returns the canonical URL path for an article based on its category.
 *  - Blog articles → /blog/[slug]
 *  - Tutorials / How-To articles → /[slug] (root level)
 */
export function getArticlePath(article: Pick<Article, "slug" | "category">): string {
  return article.category === "Blog"
    ? `/blog/${article.slug}`
    : `/${article.slug}`;
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(".md", "");
      return getArticle(slug)!;
    })
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}
