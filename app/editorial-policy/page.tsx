import Link from "next/link";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Editorial Policy — 3 Patti Blue",
  description: "Learn how 3 Patti Blue creates, reviews, and updates content. Our editorial standards and team credentials.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <>
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)" }}>
        <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[160px] font-black opacity-[0.04] text-white select-none pointer-events-none">✏</span>
        <div className="container-content py-12 relative z-10">
          <nav className="text-sm flex items-center gap-1.5 mb-4 text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-blue-100">Editorial Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Editorial Policy</h1>
          <p className="text-blue-300 text-sm">Last updated: April 2026</p>
        </div>
      </div>
      <div className="container-content py-12 max-w-3xl">
        <div className="prose-content space-y-0">
          <h2>Our Mission</h2>
          <p>3 Patti Blue provides Pakistani players with accurate, honest, and up-to-date information about the 3 Patti Blue app — including download guides, registration, bonus analysis, and game strategy.</p>
          <h2>Independence & Funding</h2>
          <p>This website may earn commissions through affiliate relationships. <strong>This never influences our editorial content.</strong> Negative findings are always reported honestly.</p>
          <h2>Content Accuracy & Updates</h2>
          <p>All articles display a published and updated date. We update content whenever 3 Patti Blue changes features, bonuses, or payment methods. If you spot outdated information, contact us at <a href={`mailto:${SITE_CONFIG.organization.email}`}>{SITE_CONFIG.organization.email}</a>.</p>
          <h2>Fact-Checking Process</h2>
          <ol>
            <li>All game information is verified directly in the 3 Patti Blue app before publishing.</li>
            <li>Bonus amounts and wagering requirements are confirmed from official sources.</li>
            <li>Payment method details are tested with real transactions.</li>
            <li>All guides are reviewed and updated on a monthly basis.</li>
          </ol>
          <h2>Contact the Editorial Team</h2>
          <p>Editorial feedback: <a href={`mailto:${SITE_CONFIG.organization.email}`}>{SITE_CONFIG.organization.email}</a></p>
        </div>
      </div>
    </>
  );
}
