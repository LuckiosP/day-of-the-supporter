import { createClient, SupabaseClient } from "@supabase/supabase-js";

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  return { url, key };
}

export function isSupabaseConfigured(): boolean {
  const { url, key } = getSupabaseConfig();
  return Boolean(url && key && url.includes("supabase.co"));
}

export function getSupabaseConfigError(): string | null {
  const { url, key } = getSupabaseConfig();

  if (!url || !key) {
    return "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel, then redeploy.";
  }

  if (!url.includes("supabase.co")) {
    return "NEXT_PUBLIC_SUPABASE_URL must be your Supabase project URL (https://xxxxx.supabase.co), not your Vercel site URL.";
  }

  return null;
}

export function createBrowserClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const { url, key } = getSupabaseConfig();

  return createClient(url!, key!);
}
