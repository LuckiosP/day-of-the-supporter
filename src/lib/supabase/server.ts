import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { LoveNote } from "@/lib/types";

export function createServerClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  return createClient(url, key);
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export async function fetchLoveNotes(): Promise<LoveNote[]> {
  const supabase = createServerClient();

  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("love_notes")
    .select("id, organization_name, message, supporter_name, created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    console.error("Failed to fetch love notes:", error.message);
    return [];
  }

  return data ?? [];
}
