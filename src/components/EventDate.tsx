import { DOTS_DATE, DOTS_DATE_COMPACT, DOTS_DATE_ISO, DOTS_DATE_PARTS } from "@/lib/constants";

type EventDateProps = {
  variant?: "hero" | "banner" | "compact";
  className?: string;
};

export function EventDate({
  variant = "hero",
  className = "",
}: EventDateProps) {
  if (variant === "compact") {
    return (
      <p
        className={`inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-dark ${className}`}
      >
        <span className="uppercase tracking-wider">Save the date</span>
        <span aria-hidden="true">·</span>
        <time dateTime={DOTS_DATE_ISO}>{DOTS_DATE_COMPACT}</time>
      </p>
    );
  }

  if (variant === "banner") {
    return (
      <div
        className={`overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-white via-celebration to-accent/10 p-6 sm:p-8 ${className}`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Save the date
        </p>
        <p className="mt-3 font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
          <time dateTime={DOTS_DATE_ISO}>{DOTS_DATE}</time>
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600">
          One day for charities everywhere to celebrate their supporters — with
          one sentence, one graphic, and one shared moment of gratitude.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-celebration via-white to-accent/15 p-8 shadow-sm sm:p-10 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/20 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-accent/15 blur-2xl"
      />

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
        Save the date
      </p>

      <div className="mt-6 flex flex-wrap items-end gap-x-6 gap-y-2">
        <p className="font-serif text-7xl font-medium leading-none text-stone-900 sm:text-8xl">
          {DOTS_DATE_PARTS.day}
        </p>
        <div className="pb-2">
          <p className="font-serif text-2xl font-medium text-stone-900 sm:text-3xl">
            {DOTS_DATE_PARTS.month}
          </p>
          <p className="text-lg text-stone-600">{DOTS_DATE_PARTS.year}</p>
        </div>
      </div>

      <p className="mt-4 text-base font-medium text-accent-dark">
        {DOTS_DATE_PARTS.weekday} · {DOTS_DATE}
      </p>
    </div>
  );
}
