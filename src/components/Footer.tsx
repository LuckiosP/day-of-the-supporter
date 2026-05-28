import Link from "next/link";
import { DOTS_HASHTAG, NAV_LINKS, SITE_FULL_NAME, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-serif text-lg font-medium text-stone-900">
              {SITE_NAME}
            </p>
            <p className="mt-1 text-sm text-stone-600">{SITE_FULL_NAME}</p>
            <p className="mt-3 text-sm text-stone-500">
              Open, decentralised, and sector-wide.
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-stone-600 transition-colors hover:text-stone-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-10 text-sm text-stone-400">
          Share your love note with {DOTS_HASHTAG}
        </p>
      </div>
    </footer>
  );
}
