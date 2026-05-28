import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import {
  DOTS_DATE,
  DOTS_HASHTAG,
  PROMPT_EXAMPLES,
  SITE_TAGLINE,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-stone-200/60 bg-gradient-to-b from-white to-cream py-20 sm:py-28">
        <Container>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sage">
            {DOTS_DATE}
          </p>

          <h1 className="max-w-2xl font-serif text-4xl font-medium leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            A day to celebrate the people who make your work possible.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            {SITE_TAGLINE}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/how-to">Take part in 60 seconds</Button>
            <Button href="/templates" variant="secondary">
              Download the template
            </Button>
            <Button href="/wall" variant="secondary">
              Visit the wall
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="font-serif text-2xl font-medium text-stone-900 sm:text-3xl">
            One sentence. One graphic. One shared moment.
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-stone-600">
            Every charity completes one sentence on a shared template and posts
            it on the day. No budget, no sign-off, no cross-team coordination —
            just a simple ritual of gratitude.
          </p>

          <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-wider text-sage">
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

      <section className="border-t border-stone-200/60 bg-white py-20">
        <Container>
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h3 className="font-medium text-stone-900">For supporters</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Feel seen and appreciated by the charities they believe in.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-stone-900">For staff</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Feel proud and connected to the people behind your mission.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-stone-900">For the sector</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                A unified wall of gratitude — open, decentralised, and
                sector-wide.
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-stone-500">
            Post on {DOTS_DATE} with {DOTS_HASHTAG}
          </p>
        </Container>
      </section>
    </>
  );
}
