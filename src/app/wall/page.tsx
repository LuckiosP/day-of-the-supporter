import { Container } from "@/components/Container";
import { MessageCard } from "@/components/MessageCard";
import { MessageForm } from "@/components/MessageForm";
import { PageHeader } from "@/components/PageHeader";
import { DOTS_HASHTAG } from "@/lib/constants";
import {
  getSupabaseConfigError,
  isSupabaseConfigured,
} from "@/lib/supabase/client";
import { fetchLoveNotes } from "@/lib/supabase/server";

export const metadata = {
  title: "Wall of gratitude",
};

export default async function WallPage() {
  const configured = isSupabaseConfigured();
  const configError = getSupabaseConfigError();
  const messages = configured ? await fetchLoveNotes() : [];

  return (
    <Container className="py-16 sm:py-24">
      <PageHeader
        title="Wall of gratitude"
        description="Share your Supporter Love Note here — and on social media with the hashtag."
      />

      {!configured && (
        <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          {configError ?? (
            <>
              The message board needs Supabase to be configured. Add your project
              URL and anon key to the environment variables, then run the SQL in{" "}
              <code className="rounded bg-amber-100 px-1.5 py-0.5">
                supabase/schema.sql
              </code>
              .
            </>
          )}
        </div>
      )}

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <MessageForm disabled={!configured} />

        <section>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-medium text-stone-900">
                Love notes
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                Posted by charities taking part in DOTS.
              </p>
            </div>
            <p className="text-sm text-stone-500">{DOTS_HASHTAG}</p>
          </div>

          {messages.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-10 text-center">
              <p className="font-serif text-lg text-stone-700">
                The wall is waiting for its first love note.
              </p>
              <p className="mt-2 text-sm text-stone-500">
                Be the first charity to share your gratitude.
              </p>
            </div>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {messages.map((note) => (
                <li key={note.id}>
                  <MessageCard note={note} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Container>
  );
}
