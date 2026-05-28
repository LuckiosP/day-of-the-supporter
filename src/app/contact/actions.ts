"use server";

import { createServerClient } from "@/lib/supabase/server";
import type { ContactInquiryInput } from "@/lib/types";
import { sendContactNotification } from "@/lib/notifications";

export type SubmitContactResult =
  | { ok: true }
  | { ok: false; error: string };

function validateInput(input: ContactInquiryInput): ContactInquiryInput | null {
  const email = input.email?.trim();
  const name = input.name?.trim();
  const organisation = input.organisation?.trim();
  const message = input.message?.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return null;
  }

  if (email.length > 254) {
    return null;
  }

  if (name && name.length > 100) {
    return null;
  }

  if (organisation && organisation.length > 100) {
    return null;
  }

  if (message && message.length > 1000) {
    return null;
  }

  return {
    email,
    name: name || undefined,
    organisation: organisation || undefined,
    message: message || undefined,
  };
}

export async function submitContactInquiry(
  input: ContactInquiryInput,
): Promise<SubmitContactResult> {
  const validated = validateInput(input);

  if (!validated) {
    return {
      ok: false,
      error: "Please enter a valid email address.",
    };
  }

  const supabase = createServerClient();

  if (!supabase) {
    return {
      ok: false,
      error: "Contact form is not configured yet.",
    };
  }

  const { error } = await supabase.from("contact_inquiries").insert({
    email: validated.email,
    name: validated.name ?? null,
    organisation: validated.organisation ?? null,
    message: validated.message ?? null,
  });

  if (error) {
    return { ok: false, error: error.message };
  }

  await sendContactNotification(validated);

  return { ok: true };
}
