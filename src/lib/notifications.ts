import "server-only";

import type { ContactInquiryInput } from "@/lib/types";

export type NotificationResult =
  | { ok: true; id?: string }
  | { ok: false; reason: string };

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const notifyEmail = process.env.NOTIFY_EMAIL?.trim();
  const fromAddress = process.env.RESEND_FROM_ADDRESS?.trim();
  const fromName = process.env.RESEND_FROM_NAME?.trim() ?? "DOTS";
  const fromEmailLegacy = process.env.RESEND_FROM_EMAIL?.trim();

  let from: string;
  if (fromAddress) {
    from = fromName ? `${fromName} <${fromAddress}>` : fromAddress;
  } else if (fromEmailLegacy) {
    from = fromEmailLegacy;
  } else {
    from = "DOTS <onboarding@resend.dev>";
  }

  return { apiKey, notifyEmail, from };
}

export function getEmailConfigStatus() {
  const { apiKey, notifyEmail, from } = getResendConfig();

  return {
    configured: Boolean(apiKey && notifyEmail),
    hasApiKey: Boolean(apiKey),
    hasNotifyEmail: Boolean(notifyEmail),
    from,
    usesLegacyFromEmail: Boolean(process.env.RESEND_FROM_EMAIL?.trim()),
    usesSplitFromVars: Boolean(process.env.RESEND_FROM_ADDRESS?.trim()),
  };
}

export async function sendContactNotification(
  inquiry: ContactInquiryInput,
): Promise<NotificationResult> {
  const { apiKey, notifyEmail, from } = getResendConfig();

  if (!apiKey) {
    return { ok: false, reason: "RESEND_API_KEY is not set" };
  }

  if (!notifyEmail) {
    return { ok: false, reason: "NOTIFY_EMAIL is not set" };
  }

  const lines = [
    "New DOTS contact form submission",
    "",
    `Email: ${inquiry.email}`,
    inquiry.name ? `Name: ${inquiry.name}` : null,
    inquiry.organisation ? `Organisation: ${inquiry.organisation}` : null,
    inquiry.message ? `Message: ${inquiry.message}` : null,
    "",
    "View all submissions in your Supabase dashboard (contact_inquiries table).",
  ].filter(Boolean);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [notifyEmail],
        subject: "New DOTS contact enquiry",
        text: lines.join("\n"),
      }),
    });

    const body = await response.text();

    if (!response.ok) {
      return {
        ok: false,
        reason: `Resend API error (${response.status}): ${body}`,
      };
    }

    let id: string | undefined;
    try {
      id = JSON.parse(body).id as string | undefined;
    } catch {
      id = undefined;
    }

    return { ok: true, id };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, reason: `Failed to reach Resend: ${message}` };
  }
}
