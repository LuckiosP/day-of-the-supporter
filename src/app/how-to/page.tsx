import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { DOTS_DATE, DOTS_HASHTAG } from "@/lib/constants";

const STEPS = [
  {
    number: "1",
    title: "Download the template",
    description:
      "Grab the universal Supporter Love Note graphic — available as SVG and PNG.",
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
    description: `Share your love note on ${DOTS_DATE} across your social channels.`,
  },
  {
    number: "4",
    title: "Use the hashtag",
    description: `Add ${DOTS_HASHTAG} so your gratitude joins the sector-wide wall.`,
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

      <ol className="space-y-8">
        {STEPS.map((step) => (
          <li
            key={step.number}
            className="flex gap-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 font-serif text-lg font-medium text-accent">
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

      <aside className="mt-12 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
        <p className="text-sm font-medium text-stone-700">Optional</p>
        <p className="mt-2 leading-relaxed text-stone-600">
          Join a shared moment of pause at 12:00 noon on the day — a brief
          internal acknowledgement of your supporters, however your team prefers
          to do that.
        </p>
      </aside>
    </Container>
  );
}
