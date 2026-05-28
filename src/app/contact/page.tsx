import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Get involved",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHeader
        title="Get involved"
        description="Find out more, ask a question, or register your interest in taking part."
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <section className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-stone-900">
              Contact & find out more
            </h2>
            <p className="mt-3 leading-relaxed text-stone-600">
              Whether you&apos;re a charity ready to take part, exploring DOTS
              for your organisation, or interested in helping shape the
              initiative — we&apos;d love to hear from you.
            </p>
          </div>

          <ul className="space-y-3 text-sm text-stone-600">
            <li>Register interest in taking part on the day</li>
            <li>Ask a question about templates or how DOTS works</li>
            <li>Explore partnership or founding circle opportunities</li>
            <li>Request updates as the initiative grows</li>
          </ul>
        </section>

        <ContactForm />
      </div>
    </Container>
  );
}
