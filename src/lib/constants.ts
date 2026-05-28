export const SITE_NAME = "DOTS";
export const SITE_FULL_NAME = "Day of the Supporter";
export const SITE_TAGLINE =
  "A simple, sector-wide celebration of the people who make charitable work possible.";

/** ISO date for the annual DOTS event */
export const DOTS_DATE_ISO = "2026-11-17";

/** Full display date */
export const DOTS_DATE = "Tuesday 17 November 2026";

/** Shorter display for nav and badges */
export const DOTS_DATE_SHORT = "17 November 2026";

/** Compact display for tight spaces */
export const DOTS_DATE_COMPACT = "17 Nov 2026";

export const DOTS_DATE_PARTS = {
  weekday: "Tuesday",
  day: "17",
  month: "November",
  year: "2026",
} as const;

export const DOTS_HASHTAG = "#DayOfTheSupporter";

export const PROMPT_EXAMPLES = [
  "Our supporters mean the world to us because…",
  "Today we're celebrating our supporters for…",
] as const;

export const NAV_LINKS = [
  { href: "/how-to", label: "How to take part" },
  { href: "/templates", label: "Templates" },
  { href: "/wall", label: "Wall" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Get involved" },
] as const;
