import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { NAV_LINKS, SITE_FULL_NAME, SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="relative border-b border-stone-200/80 bg-cream/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="group flex flex-col gap-0.5">
          <span className="font-serif text-xl font-medium tracking-tight text-stone-900">
            {SITE_NAME}
          </span>
          <span className="text-xs text-stone-500 transition-colors group-hover:text-stone-700">
            {SITE_FULL_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
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

        <MobileNav />
      </div>
    </header>
  );
}
