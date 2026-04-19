"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="mb-6 text-8xl select-none">⚠️</div>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Something went wrong</h1>
      <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          🔄 Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 transition-colors"
        >
          🏠 Go to Homepage
        </Link>
      </div>
    </div>
  );
}
