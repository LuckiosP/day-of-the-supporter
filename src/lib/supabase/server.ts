import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { LoveNote } from "@/lib/types";
import { isSupabaseConfigured } from "@/lib/supabase/client";

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  return { url, key };
}

export function createServerClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const { url, key } = getSupabaseConfig();

  return createClient(url!, key!);
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
