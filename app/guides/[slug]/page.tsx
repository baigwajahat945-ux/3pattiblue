import { notFound, redirect, permanentRedirect } from "next/navigation";
import { getArticle, getAllArticles, getArticlePath } from "@/lib/content";

/**
 * Legacy `/guides/[slug]` route.
 *
 * Articles have moved:
 *   • Blog posts   → /blog/[slug]
 *   • Tutorials    → /[slug]  (root level)
 *
 * This route just permanently redirects any old links to the new canonical
 * location so existing backlinks and indexed URLs keep working.
 */

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

// Kept minimal — the canonical page generates full metadata.
export function generateMetadata() {
  return { robots: { index: false, follow: true } };
}

export default async function GuidesLegacyRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  permanentRedirect(getArticlePath(article));
  // `permanentRedirect` throws, this is unreachable but keeps the type checker happy.
  redirect(getArticlePath(article));
}
