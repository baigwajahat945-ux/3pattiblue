import Link from "next/link";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — 3 Patti Blue",
  description: "3 Patti Blue privacy policy: how we collect, use, and protect your personal data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)" }}>
        <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[160px] font-black opacity-[0.04] text-white select-none pointer-events-none">🔒</span>
        <div className="container-content py-12 relative z-10">
          <nav className="text-sm flex items-center gap-1.5 mb-4 text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-blue-100">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-blue-300 text-sm">Last updated: April 2026</p>
        </div>
      </div>
      <div className="container-content py-12 max-w-3xl">
        <div className="prose-content space-y-0">
          <h2>Information We Collect</h2>
          <p>3 Patti Blue does not require account registration on this website. We collect only analytics data via Google Analytics (IP-anonymised), contact form submissions, and cookie preferences.</p>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To improve website content and user experience</li>
            <li>To respond to your enquiries</li>
            <li>To track affiliate referrals (no personal data stored)</li>
          </ul>
          <h2>Cookies</h2>
          <p>We use necessary cookies for session management and optional analytics cookies. Cookie preferences are stored in your browser only.</p>
          <h2>Third-Party Services</h2>
          <p>We use Google Analytics. We do not sell personal data to any third party.</p>
          <h2>Your Rights</h2>
          <p>You have the right to request deletion of any personal data we hold. Contact <a href={`mailto:${SITE_CONFIG.organization.email}`}>{SITE_CONFIG.organization.email}</a>.</p>
          <h2>Contact</h2>
          <p>Privacy concerns: <a href={`mailto:${SITE_CONFIG.organization.email}`}>{SITE_CONFIG.organization.email}</a></p>
        </div>
      </div>
    </>
  );
}
