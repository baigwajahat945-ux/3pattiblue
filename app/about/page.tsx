import Link from "next/link";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "About 3 Patti Blue — Pakistan's Trusted Teen Patti Resource",
  description: "Learn about 3 Patti Blue — our mission to provide honest, accurate game information for Pakistani players.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)" }}>
        <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[160px] font-black opacity-[0.04] text-white select-none pointer-events-none">♥</span>
        <div className="container-content py-12 relative z-10">
          <nav className="text-sm flex items-center gap-1.5 mb-4 text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-blue-100">About Us</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">About 3 Patti Blue</h1>
          <p className="text-blue-200 text-base max-w-xl">Pakistan&apos;s independent resource for 3 Patti Blue players.</p>
        </div>
      </div>

      <div className="container-content py-12 max-w-3xl">
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          We are Pakistan&apos;s most detailed independent resource for 3 Patti Blue players. Our mission is to give every Pakistani player honest, accurate information to help them download safely, claim bonuses, and get the most out of every game.
        </p>

        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">What We Cover</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {[
            { icon: "📱", title: "APK Downloads", desc: "Safe, verified links to the latest 3 Patti Blue APK for Android." },
            { icon: "📝", title: "Step-by-Step Guides", desc: "Registration, login, deposit, withdrawal — everything explained simply." },
            { icon: "🃏", title: "Game Tips", desc: "Expert strategies and tricks to improve your Teen Patti game." },
            { icon: "💰", title: "Bonus Guides", desc: "How to claim every bonus and promotion available on 3 Patti Blue." },
          ].map((item) => (
            <div key={item.title} className="card p-5 flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-2xl shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)" }}>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-blue-100 text-sm leading-relaxed mb-4">Questions, corrections, or partnership enquiries — we respond within 2 business days.</p>
          <a href={`mailto:${SITE_CONFIG.organization.email}`} className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors">
            📧 {SITE_CONFIG.organization.email}
          </a>
        </div>
      </div>
    </>
  );
}
