import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Get involved",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHeader
        title="Get involved"
        description="Early adopters, questions, and ideas — we would love to hear from you."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <section>
          <h2 className="text-lg font-medium text-stone-900">Contact us</h2>
          <p className="mt-3 leading-relaxed text-stone-600">
            Whether you are a charity ready to take part, or someone who wants
            to help shape DOTS, get in touch.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {CONTACT_EMAIL}
          </a>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-medium text-stone-900">
            Sign up for updates
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Be the first to know when templates, dates, and resources are
            ready.
          </p>

          <form
            action={`mailto:${CONTACT_EMAIL}?subject=DOTS updates signup`}
            method="POST"
            encType="text/plain"
            className="mt-6 space-y-4"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-stone-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@charity.org"
                className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div>
              <label
                htmlFor="organisation"
                className="block text-sm font-medium text-stone-700"
              >
                Organisation (optional)
              </label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                placeholder="Your charity or organisation"
                className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-dark sm:w-auto"
            >
              Request updates
            </button>
          </form>

          <p className="mt-4 text-xs text-stone-400">
            This opens your email client to send a signup request. A dedicated
            signup service can be added later.
          </p>
        </section>
      </div>
    </Container>
  );
}
