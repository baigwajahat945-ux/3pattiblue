import Link from "next/link";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Legal Disclaimer — 3 Patti Blue",
  description: "3 Patti Blue legal disclaimer covering affiliate relationships, age restrictions, and limitation of liability.",
  path: "/legal",
});

export default function LegalPage() {
  return (
    <>
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)" }}>
        <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[160px] font-black opacity-[0.04] text-white select-none pointer-events-none">⚖</span>
        <div className="container-content py-12 relative z-10">
          <nav className="text-sm flex items-center gap-1.5 mb-4 text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-blue-100">Legal Disclaimer</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Legal Disclaimer</h1>
          <p className="text-blue-300 text-sm">Last updated: April 2026</p>
        </div>
      </div>
      <div className="container-content py-12 max-w-3xl">
        <div className="prose-content space-y-0">
          <h2>General Disclaimer</h2>
          <p>3 Patti Blue is an independent informational website. Content is for general informational and entertainment purposes only. Nothing constitutes legal, financial, or professional gaming advice.</p>
          <h2>Affiliate Disclosure</h2>
          <p>This website may earn commissions through affiliate relationships. When you click certain links and register or deposit, 3 Patti Blue may receive a fee. This does not affect editorial independence.</p>
          <h2>Age Restriction</h2>
          <p>Content on 3 Patti Blue is intended for adults aged 18 years and over. If you are under 18, you must not access gaming-related content on this site.</p>
          <h2>Accuracy of Information</h2>
          <p>We make every effort to ensure that information on 3 Patti Blue is accurate and up to date. However, we make no warranties about the completeness or accuracy of any information.</p>
          <h2>Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, 3 Patti Blue shall not be liable for any direct, indirect, or consequential damages arising from your use of this website.</p>
          <h2>Third-Party Links</h2>
          <p>This site contains links to third-party websites. 3 Patti Blue has no control over the content of those sites and accepts no responsibility for them.</p>
          <h2>Contact</h2>
          <p>For legal enquiries: <a href={`mailto:${SITE_CONFIG.organization.email}`}>{SITE_CONFIG.organization.email}</a></p>
        </div>
      </div>
    </>
  );
}
