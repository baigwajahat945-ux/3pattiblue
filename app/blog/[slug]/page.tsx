import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, getAllArticles } from "@/lib/content";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllArticles()
    .filter((a) => a.category === "Blog")
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { robots: { index: false } };
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${slug}`,
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

const EARN_STYLES: Record<string, { icon: string; gradient: string; badge: string; glow: string }> = {
  "Login Bonus":       { icon: "🔐", gradient: "from-emerald-500 to-green-400",  badge: "bg-emerald-50 text-emerald-700 border-emerald-200",  glow: "shadow-emerald-100" },
  "Referrals (2/day)": { icon: "👥", gradient: "from-blue-600 to-blue-400",      badge: "bg-blue-50 text-blue-700 border-blue-200",            glow: "shadow-blue-100"   },
  "Free Tournaments":  { icon: "🏆", gradient: "from-amber-500 to-yellow-400",   badge: "bg-amber-50 text-amber-700 border-amber-200",          glow: "shadow-amber-100"  },
  "Missions & Tasks":  { icon: "✅", gradient: "from-violet-600 to-purple-400",  badge: "bg-violet-50 text-violet-700 border-violet-200",       glow: "shadow-violet-100" },
  "Spin Events":       { icon: "🎡", gradient: "from-pink-500 to-rose-400",      badge: "bg-pink-50 text-pink-700 border-pink-200",             glow: "shadow-pink-100"   },
};
const EARN_DEFAULT = { icon: "💰", gradient: "from-gray-500 to-gray-400", badge: "bg-gray-50 text-gray-700 border-gray-200", glow: "shadow-gray-100" };

const PAYMENT_STYLES: Record<string, { icon: string; bg: string; border: string; divider: string }> = {
  "EasyPaisa":     { icon: "💚", bg: "linear-gradient(135deg,#065f46,#059669)", border: "border-green-200", divider: "divide-green-50" },
  "Easypaisa":     { icon: "💚", bg: "linear-gradient(135deg,#065f46,#059669)", border: "border-green-200", divider: "divide-green-50" },
  "JazzCash":      { icon: "📱", bg: "linear-gradient(135deg,#7f1d1d,#dc2626)", border: "border-red-200",   divider: "divide-red-50"   },
  "Jazzcash":      { icon: "📱", bg: "linear-gradient(135deg,#7f1d1d,#dc2626)", border: "border-red-200",   divider: "divide-red-50"   },
  "Bank Transfer": { icon: "🏦", bg: "linear-gradient(135deg,#1e3a8a,#2563eb)", border: "border-blue-200",  divider: "divide-blue-50"  },
};
const PAYMENT_DEFAULT = { icon: "💳", bg: "linear-gradient(135deg,#374151,#6b7280)", border: "border-gray-200", divider: "divide-gray-50" };

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
      // collect all pipe lines
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) { tableLines.push(lines[i]); i++; }
      const parseRow = (row: string) => row.split("|").map((c) => c.trim()).filter((c) => c !== "");
      const isSep = (row: string) => /^[\|\-\s:]+$/.test(row);
      const nonSep = tableLines.filter((r) => !isSep(r));
      const headers = nonSep.length > 0 ? parseRow(nonSep[0]) : [];
      const dataRows = nonSep.slice(1).map(parseRow);
      const isEarningTable = headers.some((h) => /potential|earning|income/i.test(h));

      if (isEarningTable) {
        elements.push(
          <div key={`earn-${i}`} className="my-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataRows.map((row, ri) => {
                const method = row[0] ?? "";
                const amount = row[1] ?? "";
                const s = EARN_STYLES[method] ?? EARN_DEFAULT;
                return (
                  <div key={ri} className={`relative rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-lg ${s.glow} hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}>
                    <div className={`h-2 w-full bg-gradient-to-r ${s.gradient}`} />
                    <div className="p-5 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{s.icon}</span>
                        <span className="font-bold text-gray-800 text-sm leading-snug">{method}</span>
                      </div>
                      <div className={`inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full border text-xs font-extrabold tracking-wide ${s.badge}`}>
                        <span>💵</span><span>{amount}</span>
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
              const s = PAYMENT_STYLES[method] ?? PAYMENT_DEFAULT;
              return (
                <div key={ri} className={`rounded-xl border ${s.border} overflow-hidden shadow-sm`}>
                  <div className="flex items-center gap-3 px-5 py-3" style={{ background: s.bg }}>
                    <span className="text-xl">{s.icon}</span>
                    <span className="font-extrabold text-white text-base">{method}</span>
                  </div>
                  <div className={`grid grid-cols-3 divide-x ${s.divider} bg-white`}>
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

const BLOG_LINKS = [
  { label: "✅ Real or Fake?",          href: "/blog/is-teen-patti-blue-real-or-fake" },
  { label: "🏆 Winning Tricks",          href: "/blog/3-patti-blue-winning-tricks" },
  { label: "💎 VIP Program",             href: "/blog/3-patti-blue-vip-program" },
  { label: "🎪 Tournaments 2026",        href: "/blog/3patti-blue-tournaments-events-2026" },
  { label: "💸 Earn Without Investing",  href: "/blog/earn-daily-from-3patti-blue-without-investing" },
  { label: "🛠️ Fix IPs Exceed Issue",   href: "/blog/3-patti-blue-ips-exceed-issue" },
];

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || article.category !== "Blog") notFound();

  const breadcrumbs = [
    { name: "Home",      url: SITE_CONFIG.url },
    { name: "Blog",      url: `${SITE_CONFIG.url}/blog` },
    { name: article.title, url: `${SITE_CONFIG.url}/blog/${slug}` },
  ];

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbs.map((b, idx) => ({ "@type": "ListItem", position: idx + 1, name: b.name, item: b.url })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.description, datePublished: article.publishedAt, dateModified: article.updatedAt ?? article.publishedAt, author: { "@type": "Organization", name: SITE_CONFIG.name }, publisher: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url }, url: `${SITE_CONFIG.url}/blog/${slug}`, ...(article.featuredImage ? { image: [`${SITE_CONFIG.url}${article.featuredImage}`] } : {}) }) }} />
      {article.faqs && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: article.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />}

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="container-content py-3">
          <nav className="text-sm flex items-center gap-1.5 flex-wrap text-gray-400">
            <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
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
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 border border-brand-100 px-2.5 py-1 rounded-full mb-3">Blog</span>
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
              <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">More Blog Posts</p>
              <nav className="space-y-1">
                <Link href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50 px-3 py-2 rounded-lg transition-colors font-medium">
                  🏠 <span>Home</span>
                </Link>
                {BLOG_LINKS.map((l) => (
                  <Link key={l.href} href={l.href}
                    className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg transition-colors font-medium ${l.href === `/blog/${slug}` ? "bg-brand-600 text-white" : "text-gray-600 hover:text-brand-700 hover:bg-brand-50"}`}>
                    <span>{l.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <Link href="/blog" className="card p-4 flex items-center gap-3 hover:shadow-md transition-shadow group block">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 text-lg border border-indigo-100">📖</div>
              <div>
                <p className="font-bold text-gray-900 text-sm group-hover:text-brand-700">All Blog Posts</p>
                <p className="text-xs text-gray-400">Tips &amp; strategies</p>
              </div>
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
