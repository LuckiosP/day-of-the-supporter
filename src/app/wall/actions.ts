"use server";

import { moderateLoveNote } from "@/lib/moderation";
import { createServerClient } from "@/lib/supabase/server";
import type { LoveNote, LoveNoteInput } from "@/lib/types";

export type PostLoveNoteResult =
  | { ok: true; note: LoveNote }
  | { ok: false; error: string };

function validateInput(input: LoveNoteInput): LoveNoteInput | null {
  if (
    input.organization_name.trim().length === 0 ||
    input.message.trim().length === 0
  ) {
    return null;
  }

  if (
    input.organization_name.length > 100 ||
    input.message.length > 280 ||
    (input.supporter_name && input.supporter_name.length > 100)
  ) {
    return null;
  }

  return {
    organization_name: input.organization_name.trim(),
    message: input.message.trim(),
    supporter_name: input.supporter_name?.trim() || undefined,
  };
}

export async function postLoveNote(
  input: LoveNoteInput,
): Promise<PostLoveNoteResult> {
  const validated = validateInput(input);

  if (!validated) {
    return {
      ok: false,
      error: "Please check your entries and try again.",
    };
  }

  const moderation = moderateLoveNote(validated);

  if (!moderation.allowed) {
    return { ok: false, error: moderation.reason };
  }

  const supabase = createServerClient();

  if (!supabase) {
    return {
      ok: false,
      error: "Message board is not configured yet.",
    };
  }

  const { data, error } = await supabase
    .from("love_notes")
    .insert({
      organization_name: validated.organization_name,
      message: validated.message,
      supporter_name: validated.supporter_name ?? null,
    })
    .select("id, organization_name, message, supporter_name, created_at")
    .single();

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true, note: data };
}
