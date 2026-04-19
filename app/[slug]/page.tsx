import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getArticle, getAllArticles } from "@/lib/content";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";

/**
 * Root-level tutorial article route: /[slug]
 *
 * Only statically generates tutorial (non-Blog) articles. Blog articles live
 * under /blog/[slug] and are redirected from here if someone tries to access
 * them at the root.
 *
 * Next.js resolves static routes (e.g. /about, /contact, /guides, /blog) before
 * dynamic ones, so this route only catches unmatched root-level slugs.
 */

export async function generateStaticParams() {
  return getAllArticles()
    .filter((a) => a.category !== "Blog")
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || article.category === "Blog") return { robots: { index: false } };
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/${slug}`,
    keywords: article.keywords,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    type: "article",
    ogImage: article.featuredImage ?? article.ogImage,
  });
}

export const revalidate = 3600;

function inlineHtml(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    // External links — add target + rel for security
    .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" class="text-brand-600 underline font-medium" target="_blank" rel="noopener noreferrer">$1</a>')
    // Internal links — no target needed
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-600 underline font-medium">$1</a>');
}

function renderContent(markdown: string) {
  const lines = markdown.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} dangerouslySetInnerHTML={{ __html: inlineHtml(line.slice(3)) }} />);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} dangerouslySetInnerHTML={{ __html: inlineHtml(line.slice(4)) }} />);
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) { items.push(lines[i].slice(2)); i++; }
      elements.push(<ul key={`ul-${i}`}>{items.map((it, j) => <li key={j} dangerouslySetInnerHTML={{ __html: inlineHtml(it) }} />)}</ul>);
      continue;
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) { items.push(lines[i].replace(/^\d+\. /, "")); i++; }
      elements.push(<ol key={`ol-${i}`}>{items.map((it, j) => <li key={j} dangerouslySetInnerHTML={{ __html: inlineHtml(it) }} />)}</ol>);
      continue;
    } else if (line.startsWith("> ")) {
      elements.push(<blockquote key={i} dangerouslySetInnerHTML={{ __html: inlineHtml(line.slice(2)) }} />);
    } else if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const parseRow = (row: string) =>
        row.split("|").map((c) => c.trim()).filter((c) => c !== "");
      const isSeparator = (row: string) => /^[\|\-\s:]+$/.test(row);
      const nonSeparator = tableLines.filter((r) => !isSeparator(r));
      const headers = nonSeparator.length > 0 ? parseRow(nonSeparator[0]) : [];
      const dataRows = nonSeparator.slice(1).map(parseRow);

      const PAYMENT_STYLES: Record<string, { icon: string; bg: string; border: string; divider: string }> = {
        "EasyPaisa":    { icon: "💚", bg: "linear-gradient(135deg, #065f46, #059669)", border: "border-green-200",  divider: "divide-green-50"  },
        "Easypaisa":    { icon: "💚", bg: "linear-gradient(135deg, #065f46, #059669)", border: "border-green-200",  divider: "divide-green-50"  },
        "JazzCash":     { icon: "📱", bg: "linear-gradient(135deg, #7f1d1d, #dc2626)", border: "border-red-200",    divider: "divide-red-50"    },
        "Jazzcash":     { icon: "📱", bg: "linear-gradient(135deg, #7f1d1d, #dc2626)", border: "border-red-200",    divider: "divide-red-50"    },
        "Bank Transfer":{ icon: "🏦", bg: "linear-gradient(135deg, #1e3a8a, #2563eb)", border: "border-blue-200",   divider: "divide-blue-50"   },
      };
      const DEFAULT_STYLE = { icon: "💳", bg: "linear-gradient(135deg, #374151, #6b7280)", border: "border-gray-200", divider: "divide-gray-50" };

      // Earning / income table — detected by "Daily Potential" header
      const isEarningTable = headers.some((h) => /potential|earning|income/i.test(h));
      const EARN_STYLES: Record<string, { icon: string; gradient: string; badge: string; glow: string }> = {
        "Login Bonus":      { icon: "🔐", gradient: "from-emerald-500 to-green-400",  badge: "bg-emerald-50 text-emerald-700 border-emerald-200",  glow: "shadow-emerald-100" },
        "Referrals (2/day)":{ icon: "👥", gradient: "from-blue-600 to-blue-400",      badge: "bg-blue-50 text-blue-700 border-blue-200",            glow: "shadow-blue-100"   },
        "Free Tournaments": { icon: "🏆", gradient: "from-amber-500 to-yellow-400",   badge: "bg-amber-50 text-amber-700 border-amber-200",          glow: "shadow-amber-100"  },
        "Missions & Tasks": { icon: "✅", gradient: "from-violet-600 to-purple-400",  badge: "bg-violet-50 text-violet-700 border-violet-200",       glow: "shadow-violet-100" },
        "Spin Events":      { icon: "🎡", gradient: "from-pink-500 to-rose-400",      badge: "bg-pink-50 text-pink-700 border-pink-200",             glow: "shadow-pink-100"   },
      };
      const EARN_DEFAULT = { icon: "💰", gradient: "from-gray-500 to-gray-400", badge: "bg-gray-50 text-gray-700 border-gray-200", glow: "shadow-gray-100" };

      if (isEarningTable) {
        elements.push(
          <div key={`earn-table-${i}`} className="my-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataRows.map((row, ri) => {
                const method = row[0] ?? "";
                const amount = row[1] ?? "";
                const style = EARN_STYLES[method] ?? EARN_DEFAULT;
                return (
                  <div
                    key={ri}
                    className={`relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg ${style.glow} hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-white`}
                    style={{ animationDelay: `${ri * 0.1}s` }}
                  >
                    {/* gradient top bar */}
                    <div className={`h-2 w-full bg-gradient-to-r ${style.gradient}`} />
                    <div className="p-5 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{style.icon}</span>
                        <span className="font-bold text-gray-800 text-sm leading-snug">{method}</span>
                      </div>
                      <div className={`inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full border text-xs font-extrabold tracking-wide ${style.badge}`}>
                        <span>💵</span>
                        <span>{amount}</span>
                      </div>
                      <p className="text-xs text-gray-400">{headers[1] ?? "Daily Potential"}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      } else {
        elements.push(
          <div key={`table-${i}`} className="my-6 space-y-3">
            {dataRows.map((row, ri) => {
              const method = row[0] ?? "";
              const style = PAYMENT_STYLES[method] ?? DEFAULT_STYLE;
              return (
                <div key={ri} className={`rounded-xl border ${style.border} overflow-hidden shadow-sm`}>
                  <div className="flex items-center gap-3 px-5 py-3" style={{ background: style.bg }}>
                    <span className="text-xl">{style.icon}</span>
                    <span className="font-extrabold text-white text-base">{method}</span>
                  </div>
                  <div className={`grid grid-cols-3 divide-x ${style.divider} bg-white`}>
                    {row.slice(1).map((cell, ci) => (
                      <div key={ci} className="px-4 py-3 text-center">
                        <p className="text-xs text-gray-400 font-medium mb-0.5">{headers[ci + 1] ?? ""}</p>
                        <p className="font-bold text-gray-900 text-sm">{cell}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
      continue;
    } else if (line.trim() !== "") {
      elements.push(<p key={i} dangerouslySetInnerHTML={{ __html: inlineHtml(line) }} />);
    }
    i++;
  }
  return elements;
}

const QUICK_LINKS = [
  { label: "⬇ APK Download", href: "/3-patti-blue-apk-download" },
  { label: "💻 For PC", href: "/3-patti-blue-for-pc" },
  { label: "🍎 For iOS", href: "/3-patti-blue-for-ios" },
  { label: "🔑 Login", href: "/3-patti-blue-login" },
  { label: "📝 Sign Up", href: "/3-patti-blue-signup" },
  { label: "🎁 Bonus", href: "/3-patti-blue-bonus" },
  { label: "💳 Deposit", href: "/3-patti-blue-deposit" },
  { label: "💸 Withdraw", href: "/3-patti-blue-withdraw" },
];

export default async function TutorialArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // Blog-category articles live at /blog/[slug] — redirect permanently.
  if (article.category === "Blog") redirect(`/blog/${slug}`);

  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: article.title, url: `${SITE_CONFIG.url}/${slug}` },
  ];

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbs.map((b, idx) => ({ "@type": "ListItem", position: idx + 1, name: b.name, item: b.url })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "HowTo", headline: article.title, description: article.description, datePublished: article.publishedAt, dateModified: article.updatedAt ?? article.publishedAt, author: { "@type": "Organization", name: SITE_CONFIG.name }, publisher: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url }, url: `${SITE_CONFIG.url}/${slug}`, ...(article.featuredImage ? { image: [`${SITE_CONFIG.url}${article.featuredImage}`] } : {}) }) }} />
      {article.faqs && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: article.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />}

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="container-content py-3">
          <nav className="text-sm flex items-center gap-1.5 flex-wrap text-gray-400">
            <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-600 truncate max-w-xs">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="container-content py-8">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── MAIN CONTENT ── */}
          <div className="flex-1 min-w-0">
            <div className="mb-8 pb-6 border-b border-gray-100">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 leading-tight">{article.title}</h1>
              <p className="text-gray-500 leading-relaxed">{article.description}</p>
            </div>

            <div className="prose-content">
              {renderContent(article.content)}
            </div>

            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {article.faqs.map((f, idx) => (
                    <div key={idx} className="card p-5">
                      <h3 className="font-bold text-gray-900 mb-2">{f.question}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* ── SIDEBAR ── */}
          <aside className="lg:w-64 shrink-0 space-y-5">

            <div className="card p-4">
              <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">All Guides</p>
              <nav className="space-y-1">
                <Link href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50 px-3 py-2 rounded-lg transition-colors font-medium">
                  🏠 <span>Home</span>
                </Link>
                {QUICK_LINKS.map((l) => (
                  <Link key={l.href} href={l.href}
                    className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg transition-colors font-medium ${l.href === `/${slug}` ? "bg-brand-600 text-white" : "text-gray-600 hover:text-brand-700 hover:bg-brand-50"}`}>
                    <span>{l.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <Link href="/blog" className="card p-4 flex items-center gap-3 hover:shadow-md transition-shadow group block">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 text-lg border border-indigo-100">📖</div>
              <div>
                <p className="font-bold text-gray-900 text-sm group-hover:text-brand-700">Read Our Blog</p>
                <p className="text-xs text-gray-400">Tips &amp; strategies</p>
              </div>
            </Link>

          </aside>
        </div>
      </div>
    </>
  );
}
