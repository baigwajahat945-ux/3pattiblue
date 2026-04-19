import Link from "next/link";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service — 3 Patti Blue",
  description: "3 Patti Blue terms of service governing use of the website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)" }}>
        <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[160px] font-black opacity-[0.04] text-white select-none pointer-events-none">📋</span>
        <div className="container-content py-12 relative z-10">
          <nav className="text-sm flex items-center gap-1.5 mb-4 text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-blue-100">Terms of Service</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
          <p className="text-blue-300 text-sm">Last updated: April 2026</p>
        </div>
      </div>
      <div className="container-content py-12 max-w-3xl">
        <div className="prose-content space-y-0">
          <h2>Acceptance of Terms</h2>
          <p>By accessing or using 3 Patti Blue (&quot;the Site&quot;), you agree to be bound by these Terms of Service.</p>
          <h2>Eligibility</h2>
          <p>You must be at least 18 years old to use this website.</p>
          <h2>Permitted Use</h2>
          <p>You may use 3 Patti Blue solely for personal, non-commercial informational purposes. You must not reproduce or distribute content without written permission, or use automated scraping tools against the Site.</p>
          <h2>Intellectual Property</h2>
          <p>All original content on 3 Patti Blue (articles, images, designs) is owned by 3 Patti Blue and protected by copyright. Third-party trademarks remain the property of their respective owners.</p>
          <h2>Disclaimer of Warranties</h2>
          <p>The Site is provided &quot;as is&quot; without warranty of any kind. We do not guarantee the accuracy, completeness, or timeliness of any information.</p>
          <h2>Changes to Terms</h2>
          <p>We may update these terms at any time. Continued use constitutes acceptance of the new terms.</p>
          <h2>Contact</h2>
          <p>Terms enquiries: <a href={`mailto:${SITE_CONFIG.organization.email}`}>{SITE_CONFIG.organization.email}</a></p>
        </div>
      </div>
    </>
  );
}
