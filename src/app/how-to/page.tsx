import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { EventDate } from "@/components/EventDate";
import { PageHeader } from "@/components/PageHeader";
import { DOTS_DATE, DOTS_HASHTAG } from "@/lib/constants";

const STEPS = [
  {
    number: "1",
    title: "Download the template",
    description:
      "Grab a Supporter Love Note graphic — ready to personalise in seconds.",
    action: { label: "Get templates", href: "/templates" },
  },
  {
    number: "2",
    title: "Write one sentence",
    description:
      "Complete the prompt with a single heartfelt sentence. Name a supporter, share a tiny story, or keep it simple.",
  },
  {
    number: "3",
    title: "Post it on the day",
    description: `On ${DOTS_DATE}, share your love note across your social channels.`,
  },
  {
    number: "4",
    title: "Use the hashtag",
    description: `Add ${DOTS_HASHTAG} so your gratitude joins the sector-wide celebration.`,
  },
  {
    number: "5",
    title: "Post to the wall (optional)",
    description:
      "Share your love note on the DOTS website too — a public wall of gratitude for the sector.",
    action: { label: "Visit the wall", href: "/wall" },
  },
];

export const metadata = {
  title: "How to take part",
};

export default function HowToPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHeader
        title="How to take part"
        description="Everything you need in under 60 seconds. No budget, no sign-off, no coordination required."
      />

      <EventDate variant="banner" className="mb-12" />

      <ol className="space-y-8">
        {STEPS.map((step) => (
          <li
            key={step.number}
            className="flex gap-6 rounded-2xl border border-accent/10 bg-white p-6 shadow-sm"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 font-serif text-lg font-medium text-accent-dark">
              {step.number}
            </span>
            <div>
              <h2 className="text-lg font-medium text-stone-900">
                {step.title}
              </h2>
              <p className="mt-2 leading-relaxed text-stone-600">
                {step.description}
              </p>
              {step.action && (
                <div className="mt-4">
                  <Button href={step.action.href} variant="secondary">
                    {step.action.label}
                  </Button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>

      <aside className="mt-12 rounded-2xl border border-dashed border-accent/25 bg-celebration p-6">
        <p className="text-sm font-semibold text-accent-dark">Optional</p>
        <p className="mt-2 leading-relaxed text-stone-600">
          Join a shared moment of pause at 12:00 noon on the day — a brief,
          joyful acknowledgement of your supporters, however your team prefers
          to do that.
        </p>
      </aside>
    </Container>
  );
}
