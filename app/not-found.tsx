import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="mb-6 text-8xl select-none">🃏</div>
      <h1 className="text-5xl font-extrabold text-gray-900 mb-3">404</h1>
      <h2 className="text-xl font-bold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
        The page you are looking for does not exist or has been moved. Let&apos;s get you back to the game.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          🏠 Go to Homepage
        </Link>
        <Link
          href="/3-patti-blue-apk-download"
          className="px-6 py-3 rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 transition-colors"
        >
          ⬇ Download APK
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 transition-colors"
        >
          📖 Blog
        </Link>
      </div>
    </div>
  );
}
