import Link from "next/link";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Contact — 3 Patti Blue",
  description: "Get in touch with the 3 Patti Blue team for enquiries, corrections, or partnership opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)" }}>
        <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[160px] font-black opacity-[0.04] text-white select-none pointer-events-none">♦</span>
        <div className="container-content py-12 relative z-10">
          <nav className="text-sm flex items-center gap-1.5 mb-4 text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-blue-100">Contact</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Contact Us</h1>
          <p className="text-blue-200 text-base max-w-xl">Have a question or partnership idea? We&apos;d love to hear from you.</p>
        </div>
      </div>

      <div className="container-content py-12 max-w-2xl">
        <div className="space-y-4 mb-10">
          {[
            { type: "General Enquiries", desc: "Questions about 3 Patti Blue, guides, or anything on the site.", icon: "💬" },
            { type: "Editorial & Content", desc: "Corrections, content updates, or editorial feedback.", icon: "✍️" },
            { type: "Partnerships", desc: "Affiliate programmes, advertising, and commercial partnerships.", icon: "🤝" },
            { type: "Legal & Compliance", desc: "DMCA notices, privacy requests, or legal enquiries.", icon: "⚖️" },
          ].map((item) => (
            <div key={item.type} className="card p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-2xl shrink-0">{item.icon}</div>
              <div className="flex-1">
                <h2 className="font-bold text-gray-900 mb-0.5">{item.type}</h2>
                <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
                <a href={`mailto:${SITE_CONFIG.organization.email}`} className="text-sm text-brand-600 font-semibold hover:text-brand-800 underline">
                  {SITE_CONFIG.organization.email}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 text-center">We typically respond within 2 business days.</p>
      </div>
    </>
  );
}
