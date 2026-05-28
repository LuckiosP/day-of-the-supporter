import { Container } from "@/components/Container";
import { EventDate } from "@/components/EventDate";
import { PageHeader } from "@/components/PageHeader";
import { DOTS_DATE } from "@/lib/constants";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHeader
        title="About Day of the Supporter"
        description="A joyful, sector-wide celebration of the people behind charitable work."
      />

      <EventDate variant="banner" className="mb-12" />

      <div className="prose-dots space-y-10">
        <section>
          <h2 className="font-serif text-2xl font-medium text-stone-900">
            When is DOTS?
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            Day of the Supporter takes place on {DOTS_DATE}. The date is chosen
            to sit clear of major calendar clashes — including US Election Day,
            Remembrance commemorations, and Giving Tuesday — so charities can
            give supporters a moment that is truly theirs.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-stone-900">
            Why supporters matter
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            Every charity depends on people who give their time, money, voice,
            and trust. Supporters are not an audience — they are partners in
            the work. Yet in the daily rush of delivery, fundraising, and
            reporting, it is easy to forget to say thank you in a way that truly
            lands.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-stone-900">
            Why this day exists
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            Day of the Supporter (DOTS) is a sector-wide moment to pause and
            celebrate. Not a campaign, not a fundraiser — a shared ritual of
            joy where every charity completes one sentence of gratitude and
            posts it on the same day. The aim is to make supporters feel seen,
            staff feel proud, and participation embarrassingly easy.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-stone-900">
            Built for real constraints
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            Charities have no spare time and no spare capacity. DOTS is designed
            around that reality: under 60 seconds to participate, no budget
            required, no sign-off needed, and no cross-team coordination. If you
            can write one sentence and post a graphic, you can take part.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
          <h2 className="font-serif text-2xl font-medium text-stone-900">
            The founding circle
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            Details of the founding circle will be shared here once confirmed.
            If you would like to be part of shaping DOTS from the start, we
            would love to hear from you.
          </p>
        </section>
      </div>
    </Container>
  );
}
