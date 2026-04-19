import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/seo";

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "APK Download", href: "/3-patti-blue-apk-download" },
    { label: "Download for PC", href: "/3-patti-blue-for-pc" },
    { label: "3 Patti Blue for iOS", href: "/3-patti-blue-for-ios" },
    { label: "Login", href: "/3-patti-blue-login" },
    { label: "Sign Up", href: "/3-patti-blue-signup" },
    { label: "Bonus", href: "/3-patti-blue-bonus" },
    { label: "Deposit", href: "/3-patti-blue-deposit" },
    { label: "Withdraw", href: "/3-patti-blue-withdraw" },
  ],
  "Blog": [
    { label: "3 Patti Winning Tricks", href: "/blog/3-patti-blue-winning-tricks" },
    { label: "IPs Exceed Issue — How to Fix?", href: "/blog/3-patti-blue-ips-exceed-issue" },
    { label: "Is Teen Patti Blue Real or Fake?", href: "/blog/is-teen-patti-blue-real-or-fake" },
    { label: "3 Patti Blue VIP Program", href: "/blog/3-patti-blue-vip-program" },
    { label: "Tournaments & Events 2026", href: "/blog/3patti-blue-tournaments-events-2026" },
    { label: "Earn Daily Without Investing", href: "/blog/earn-daily-from-3patti-blue-without-investing" },
  ],
  "Company": [
    { label: "About Us", href: "/about" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Contact", href: "/contact" },
  ],
  "Legal": [
    { label: "Legal Disclaimer", href: "/legal" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container-content py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{section}</h3>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <Image
                src="/3-patti-blue-logo.webp"
                alt="3 Patti Blue Logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain rounded-lg"
              />
              <span className="font-extrabold text-white text-lg tracking-tight group-hover:text-brand-300 transition-colors">
                3 Patti Blue
              </span>
            </Link>
            <p className="text-xs text-gray-500 max-w-2xl leading-relaxed">
              This is an independent informational website about 3 Patti Blue. We are not affiliated with the official 3 Patti Blue brand. Content is for informational purposes only. Players must be 18+.
            </p>
          </div>
          <p className="mt-4 text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
