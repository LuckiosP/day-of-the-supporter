import Link from "next/link";
import {
  DOTS_DATE,
  DOTS_HASHTAG,
  NAV_LINKS,
  SITE_FULL_NAME,
  SITE_NAME,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-accent/10 bg-gradient-to-b from-cream to-celebration">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-accent/15 bg-white/70 p-6 text-center sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Save the date
          </p>
          <p className="mt-2 font-serif text-2xl font-medium text-stone-900">
            {DOTS_DATE}
          </p>
          <p className="mt-2 text-sm text-stone-600">
            Join the celebration with {DOTS_HASHTAG}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:justify-between">
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
      </div>
    </footer>
  );
}
