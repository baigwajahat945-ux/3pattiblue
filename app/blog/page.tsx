import Image from "next/image";
import Link from "next/link";
import { getAllArticles, getArticlePath } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "3 Patti Blue Blog — Tips, Tricks & Strategies",
  description: "Read the latest 3 Patti Blue tips, winning strategies, and guides written for Pakistani players.",
  path: "/blog",
});

export const revalidate = 3600;

export default function BlogPage() {
  const blogArticles = getAllArticles().filter((a) => a.category === "Blog");

  return (
    <>
      {/* Banner */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[160px] font-black opacity-[0.04] text-white select-none">♣</span>
        </div>
        <div className="container-content py-12 relative z-10">
          <nav className="text-sm flex items-center gap-1.5 mb-4 text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-blue-100">Blog</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">3 Patti Blue Blog</h1>
          <p className="text-blue-200 text-base max-w-2xl leading-relaxed">
            The 3 Patti Blue Blog is your go-to source for everything related to 3 Patti Blue in Pakistan — from beginner guides and winning strategies to bonus tips, VIP rewards, withdrawal help, and the latest tournaments. Every article is written specifically for Pakistani players, covering topics that actually matter: how to earn real money, how to fix common errors, how to use JazzCash and EasyPaisa, and how to stay safe while playing. Whether you are just getting started or looking to level up your game, you will find honest, practical, and up-to-date information right here.
          </p>
        </div>
      </div>

      <div className="container-content py-12">
        {blogArticles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((a) => (
              <Link key={a.slug} href={getArticlePath(a)}
                className="group card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block">
                {a.featuredImage ? (
                  <div className="relative w-full aspect-[16/9] bg-gray-100">
                    <Image
                      src={a.featuredImage}
                      alt={a.featuredImageAlt || `${a.title} — blog cover image`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="h-2 w-full" style={{ background: "linear-gradient(90deg, #2563eb, #4f46e5)" }} />
                )}
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-xl mb-4">📖</div>
                  <h3 className="font-extrabold text-gray-900 text-base mb-2 leading-snug group-hover:text-brand-700 transition-colors">{a.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{a.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-brand-600 text-sm font-bold">
                    <span>Read article</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-xl font-bold text-gray-700 mb-2">Blog posts coming soon</p>
            <p className="text-gray-400 text-sm">Check back shortly for tips and strategies.</p>
            <Link href="/" className="mt-6 inline-flex btn-primary text-sm">← Back to Home</Link>
          </div>
        )}
      </div>
    </>
  );
}
