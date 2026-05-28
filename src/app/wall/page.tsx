import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { WallBoard } from "@/components/WallBoard";
import {
  getSupabaseConfigError,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

export const metadata = {
  title: "Wall of gratitude",
};

export default function WallPage() {
  const configured = isSupabaseConfigured();
  const configError = getSupabaseConfigError();

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

      <WallBoard disabled={!configured} />
    </Container>
  );
}
