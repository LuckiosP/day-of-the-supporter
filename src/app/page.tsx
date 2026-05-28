import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { EventDate } from "@/components/EventDate";
import {
  DOTS_DATE,
  DOTS_HASHTAG,
  PROMPT_EXAMPLES,
  SITE_TAGLINE,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-accent/10 bg-gradient-to-b from-celebration via-cream to-cream py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,184,109,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(201,101,74,0.12),transparent_40%)]"
        />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-dark">
                A sector-wide celebration
              </p>

              <h1 className="max-w-2xl font-serif text-4xl font-medium leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Celebrate the people who make your work possible.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-700">
                {SITE_TAGLINE}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="/how-to">Take part in 60 seconds</Button>
                <Button href="/templates" variant="secondary">
                  Download the template
                </Button>
                <Button href="/wall" variant="secondary">
                  Visit the wall
                </Button>
              </div>
            </div>

            <EventDate variant="hero" />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="font-serif text-2xl font-medium text-stone-900 sm:text-3xl">
            One sentence. One graphic. One joyful shared moment.
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-stone-600">
            On {DOTS_DATE}, charities across the sector post a single love note
            to their supporters. No budget, no sign-off, no coordination — just a
            warm, visible burst of gratitude.
          </p>

          <div className="mt-10 rounded-2xl border border-accent/15 bg-gradient-to-br from-white to-celebration p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              The Supporter Love Note
            </p>
            <ul className="mt-4 space-y-3">
              {PROMPT_EXAMPLES.map((prompt) => (
                <li
                  key={prompt}
                  className="font-serif text-lg italic text-stone-700"
                >
                  &ldquo;{prompt}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-accent/10 bg-gradient-to-b from-white to-celebration py-20">
        <Container>
          <div className="grid gap-10 sm:grid-cols-3">
            <div className="rounded-2xl border border-accent/10 bg-white/80 p-6">
              <h3 className="font-medium text-stone-900">For supporters</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Feel seen, valued, and celebrated by the charities they believe
                in.
              </p>
            </div>
            <div className="rounded-2xl border border-accent/10 bg-white/80 p-6">
              <h3 className="font-medium text-stone-900">For staff</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Feel proud and connected to the people behind your mission.
              </p>
            </div>
            <div className="rounded-2xl border border-accent/10 bg-white/80 p-6">
              <h3 className="font-medium text-stone-900">For the sector</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                A joyful wall of gratitude — open, decentralised, and
                sector-wide.
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-base font-medium text-stone-700">
            Join the celebration on{" "}
            <span className="text-accent-dark">{DOTS_DATE}</span> with{" "}
            <span className="text-accent-dark">{DOTS_HASHTAG}</span>
          </p>
        </Container>
      </section>
    </>
  );
}
